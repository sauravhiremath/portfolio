import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skill) => {
            return (
              <li
                key={skill.skillName}
                className="software-skill-inline"
                name={skill.skillName}
              >
                <i className={skill.fontAwesomeClassname}></i>
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
