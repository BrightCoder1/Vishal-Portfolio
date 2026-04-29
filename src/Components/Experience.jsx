import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Cognoscente Invnted Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    duration: "July 2024 - August 2024",
    description: [
      "Developed an Employee Management System using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.",
      "Worked on backend APIs and database integration.",
      "Collaborated with team members to implement new features and improve performance."
    ]
  },
  {
    company: "Wave Techtronics",
    role: "Data Structures & Algorithms Trainee",
    duration: "June 2025 - July 2025",
    description: [
      "Completed intensive training in Data Structures and Algorithms.",
      "Solved real-world coding problems and improved problem-solving skills.",
      "Learned optimization techniques and algorithm design."
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="title">My Experiences</h2>

      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <div className="details">
            <h3>{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>

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