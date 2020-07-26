import "./SoftwareSkill.css";
import React from "react";
import { skillsSection } from "../../portfolio";

const SoftwareSkill = () => {
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
                <i className={skill.fontAwesomeClassname} />
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
