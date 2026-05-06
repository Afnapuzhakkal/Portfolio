import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import "./Experience.css";

function Experience() {
  return (
    <div className="container" id="experience">

      {/* LEFT SIDE */}
      <div className="left">
        <h2 className="section-title">Skills</h2>

        <div className="content">
          {skills.map((skill, index) => (
            <div className="skills" key={index}>
              <div className="skillimagecontainer">
                <img src={skill.image} alt={skill.name} />
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <h2 className="section-title">Experience</h2>

        <div className="experience-container">
          {history.map((item, index) => (
            <div className="experience-card" key={index}>
              <img src={item.imgsrc} alt={item.company} />
              <div>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.role}</p>
                <span>{item.duration}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Experience;