import React from "react";
import "./projectCard.css";

function ProjectCard({ title, imageSrc, description, skills = [], demo, source }) {
  return (
    <div className="project-card">
      
      <img
        src={imageSrc}
        alt={title}
        className="project-image"
      />

      <h3 className="project-title">{title}</h3>

      <p className="project-description">{description}</p>

      <ul className="project-skills">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <div className="project-links">
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        {source && (
          <a href={source} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
      </div>

    </div>
  );
}

export default ProjectCard;