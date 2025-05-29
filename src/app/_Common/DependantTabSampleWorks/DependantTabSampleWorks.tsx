import React, { useState } from 'react';
import './DependantTabSampleWorks.css';
import Medic from "@/app/utils/SampleWorks/Prooreading-1.webp";
import Humanties from "@/app/utils/SampleWorks/Prooreading-2.webp" ;
import SSc from "@/app/utils/SampleWorks/Prooreading-3.webp" ;
import Pyscho from "@/app/utils/SampleWorks/Prooreading-4.webp" ;
import Math from "@/app/utils/SampleWorks/Prooreading-4.webp" 

const DependantTabSampleWorks = () => {
  const tabs = ['Medical Sciences', 'Arts and Humanities', 'Social Science', 'Psychology', 'Mathematics'];
  const [activeTab, setActiveTab] = useState('Mathematics');

  const tabContent:any = {
    'Medical Sciences': <img src={Medic.src} alt="#" style={{width:"100%"}} />,
    'Arts and Humanities': <img src={Humanties.src} alt="#" style={{width:"100%"}} />,
    'Social Science': <img src={SSc.src} alt="#" style={{width:"100%"}} />,
    'Psychology': <img src={Pyscho.src} alt="#" style={{width:"100%"}} />,
    'Mathematics': <img src={Math.src} alt="#" style={{width:"100%"}} />
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map(tab => (
          <div
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tabs-body">
        {tabContent[activeTab]}
      </div>
    </div>
  );
};

export default DependantTabSampleWorks;
