import React, { useState } from 'react';
import styles from '../DependantTabTech/DependantTabTech.module.css';

const tabs = [
  'END-USER ASSISTANCE',
  'TRADITIONAL TECHNICAL DOCUMENTATION',
 'MARKETING COMMUNICATION'
];

// Define content for each tab
const tabContent:any = {
'END-USER ASSISTANCE': {
  youProvide: [
    'A user needs to understand how to operate/use a specific product. Therefore, preparing a lucid, accurate and complete user-friendly documentation is the basic requirement in business. We are experts communicators, and understand what users look for in a technical documentation. Different audiences need different levels of information, perhaps in different formats. Beginning with an audience analysis, we provide the appropriate information in a format that a specific class of users will find appealing and useful. We will design, author, and illustrate all your end-user documentation in virtually any size and format for ready-to-print or online distribution.',
    "Documents for marketing communications are mainly related to advertising, product promotion and marketing. We offer writing service for the following:",
    "User manual",
    "Online help",
    "Product marketing collaterals"
  ],
}
,
 'TRADITIONAL TECHNICAL DOCUMENTATION': {
  youProvide: [
    'The quality of the product depends on the maturity of the process. Given our experience, we realized that inaccuracy, incompleteness, and inappropriateness for a specific audience are the most common problems of technical documentation. Years of experience has taught us the importance of planning the roadmap for documentation to achieve the desired quality standards. We provide writing service in the following areas:',
    'Articles for technical journals',
    'Annual reports',
    'API documentation',
    'Software documentation',
    ' Process documentation',
    ' IT system documentation',
    'Release notes'
  ],
},

'MARKETING COMMUNICATION': {
  youProvide: [
    'Documents for marketing communications are mainly related to advertising, product promotion and marketing. We offer writing service for the followings:',
    'Product catalogue',
    'Brochure',
    'Advertisements for your organization',
    'Newsletter',
    'Web content',
    'Corporate presentation',
    'Case studies',
    'Business proposal',
  ],

},


};

export default function DependantTabTech() {
  const [activeTab, setActiveTab] = useState('END-USER ASSISTANCE');
  const content = tabContent[activeTab];

  return (
    <div className= "container" style={{marginBottom:"50px" , marginTop:'50px'}}>
      <div className="row">
        {/* Sidebar */}
        <div className={`col-md-12  ${styles.sidebar}`} style={{flexWrap:"wrap"}}>
          
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`btn my-2 ${activeTab === tab ? styles.activeTab : styles.inactiveTab}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="col-md-12">
          <div className={`row ${styles.content}`}>
            <div className="col-md-12 p-4 bg-white">
              <h5 className="fw-bold mb-4">What You Provide</h5>
              <ul className={styles.checklist}>
                {content.youProvide.map((item:any, index:any) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
