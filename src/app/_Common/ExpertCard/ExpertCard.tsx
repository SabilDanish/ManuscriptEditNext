import React from 'react';
import './ExpertCard.css';

const ExpertCard = (props:{name:string , title: string , education:string[] , image:string}) => {

    
  return (
    <div className="expert-card">
      <div className="expert-card-body">
        <img src={props.image} alt={props.name} className="expert-image" />
        <div className="expert-info">
          <h3 className="expert-name">{props.name}</h3>
          <p className="expert-title">{props.title}</p>
        </div>
      </div>
      <div className="expert-education">
        <h4>Education:</h4>
        <ul>
          {props.education.map((item:any, index:any) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpertCard;
