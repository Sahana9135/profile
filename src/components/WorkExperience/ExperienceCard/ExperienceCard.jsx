import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({details}) {
  return (
    <>
    <div className="work-experience-card">
        <h6>{details.title}</h6>

        <ul>
                <li >{details.responsibilities}</li>
        </ul>
    </div>

    </>
  );
}

export default ExperienceCard;