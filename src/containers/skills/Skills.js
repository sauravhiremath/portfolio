import './Skills.css';
import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import SoftwareSkill from '../../components/softwareSkills/SoftwareSkill';
import { skillsSection } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';

const Skills = () => {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? 'dark-mode main' : 'main'} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img alt="Working" src="/images/rotatingChair.gif" />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? 'dark-mode skills-heading' : 'skills-heading'}>{skillsSection.title} </h1>
            <p className={isDark ? 'dark-mode subTitle skills-text-subtitle' : 'subTitle skills-text-subtitle'}>
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map(skill => {
                return (
                  <p key={skill} className={isDark ? 'dark-mode subTitle skills-text' : 'subTitle skills-text'}>
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
