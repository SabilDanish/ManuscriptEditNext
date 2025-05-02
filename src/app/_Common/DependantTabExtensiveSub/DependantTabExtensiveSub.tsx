import React, { useState } from 'react';
import './DependantTabExtensiveSub.css';
import Medic from "@/app/utils/SampleWorks/Extensive-Substantive-Editing-1.webp";
import Humanties from "@/app/utils/SampleWorks/Extensive-Substantive-Editing-2.webp" ;
import SSc from "@/app/utils/SampleWorks/Extensive-Substantive-Editing-3.webp" ;
import Pyscho from "@/app/utils/SampleWorks/Extensive-Substantive-Editing-4.webp" ;
import Math from "@/app/utils/SampleWorks/Extensive-Substantive-Editing-5.webp" 

const DependantTabExtensiveSub = () => {
  const tabs = ['Medical Sciences', 'Botany', 'Life Sciences', 'Biochemistry', 'Computational Biology'];
  const [activeTab, setActiveTab] = useState('Computational Biology');

  const tabContent:any = {
    'Medical Sciences': <img src={Medic.src} alt="#" style={{width:"100%"}} />,
    'Botany': <img src={Humanties.src} alt="#" style={{width:"100%"}} />,
    'Life Sciences': <img src={SSc.src} alt="#" style={{width:"100%"}} />,
    'Biochemistry': <img src={Pyscho.src} alt="#" style={{width:"100%"}} />,
    'Computational Biology': <img src={Math.src} alt="#" style={{width:"100%"}} />
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

export default DependantTabExtensiveSub;
