import React from 'react';
import './ExpertCard.css';

const ExpertCard = ({ name, title, education, image }) => {
  return (
    <div className="expert-card">
      <div className="expert-card-body">
        <img src={image} alt={name} className="expert-image" />
        <div className="expert-info">
          <h3 className="expert-name">{name}</h3>
          <p className="expert-title">{title}</p>
        </div>
      </div>
      <div className="expert-education">
        <h4>Education:</h4>
        <ul>
          {education.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpertCard;
