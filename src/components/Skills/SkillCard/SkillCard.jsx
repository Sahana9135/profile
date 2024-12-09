import React from 'react';
import './SkillCard.css';

function SkillCard({title, iconUrl, isActive, onClick}) {
  return (
    <>
    <div className={`skills-card ${isActive ? "active" : ""}`}  onClick={() => onclick()}>

        <div className="skill-icon">
            <img src={iconUrl} alt={title} />
        </div>

        <span>{title}</span>

    </div>
    </>
  );
};

export default SkillCard;