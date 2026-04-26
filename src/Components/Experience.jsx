import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Wave Techtronics",
    role: "Developer",
    description: [
      "Created multiple software development projects with detailed documentation.",
      "Worked with the dynamic team of GeeksforGeeks."
    ],
    logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg"
  }
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="title">My Experiences</h2>

      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <div className="logo">
            <img src={exp.logo} alt={exp.company} />
          </div>

          <div className="details">
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>

            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;