import './EducationCard.css';

import React, { createRef, useContext } from 'react';
import { Fade, Slide } from 'react-reveal';
import StyleContext from '../../contexts/StyleContext';

const EducationCard = ({ school }) => {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    if (!descBullets) return null;

    return descBullets.map(item => (
      <li key={item} className="subTitle">
        {item}
      </li>
    ));
  };

  const { isDark } = useContext(StyleContext);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          <div className="education-card-left">
            <img
              ref={imgRef}
              crossOrigin="anonymous"
              className="education-roundedimg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
          <div className="education-card-right">
            <h5 className="education-text-school">{school.schoolName}</h5>

            <div className="education-text-details">
              <h5 className={isDark ? 'dark-mode education-text-subHeader' : 'education-text-subHeader'}>
                {school.subHeader}
              </h5>
              <p className={`${isDark ? 'dark-mode' : ''} education-text-duration`}>{school.duration}</p>
              <p className="education-text-desc">{school.desc}</p>
              <div className="education-text-bullets">
                <ul>
                  <GetDescBullets descBullets={school.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border" />
      </Slide>
    </div>
  );
};

export default EducationCard;
