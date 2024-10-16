"use client";

import React, { useState } from 'react';
import './SampleWork.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('Medical Sciences');

  const tabContent: any = {
    'Medical Sciences': {
      image: '/img/Prooreading-1.webp',
    },
    'Arts and Humanities': {
      image: '/img/Prooreading-2.webp',
    },
    'Social Science': {
      image: '/img/Prooreading-3.webp',
    },
    'Psychology': {
      image: '/img/Prooreading-4.webp',
    },
    'Mathematics': {
      image: '/img/Prooreading-5.webp',
    },
  };

  

  return (
    <>
      <div className="accordion__title" style={{marginTop:'20px'}}>
        <h2 className="accordion_title" style={{textAlign:'center'}}>Proofreading - Sample Works</h2>
      </div>

      <div className="tabs-container">
      <div className="tabs">
        {Object.keys(tabContent).map((tab) => (
          
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>

        ))}
      </div>
      <div className="tab-content">
        <img 
          src={tabContent[activeTab].image} 
          alt={activeTab} 
          className="tab-image" 
        />
      </div>
    </div>

    </>

  );
};

export default Tabs;
