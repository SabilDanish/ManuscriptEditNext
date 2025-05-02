import React, { useState } from 'react';
import styles from '../DependentSecForScientific/DependentSecForScientific.module.css';

const tabs = [
  'Research Proposal',
  'Review Article',
  'Brief Communication',
  'Original Research Article',
  'Customized Writing'
];

// Define content for each tab
const tabContent:any = {
'Research Proposal': {
  youProvide: [
    'Specific Topic',
    'A clear Research Question',
    'Main objective (why you want to do this?)',
    'Type of Study (prospective, retrospective, etc.)',
    'Methods',
    'Study Design (Inclusion and Exclusion criteria)',
    'Investigations (what is to be done)',
    'Involvement of other departments',
    'Suggest 2–3 relevant articles',
    'Purpose of the proposal (PhD topic, grant application, etc.)'
  ],
  weProvide: [
    'Extensive literature survey',
    'Clear identification of the objectives, justification, and methodologies to be adopted',
    'Well-structured text with appropriate study design and methods',
    'Emphasis on the existing gap in literature and addressing the research problem',
    'A proposal that stands out among applications, increasing funding potential',
    'Formatting and compliance with funding agency guidelines, based on provided details'
  ]
}
,
 'Review Article': {
  youProvide: [
    'Topic',
    'Broad Research Question',
    'Main Focus Point',
    'Rough Outline',
    'Expected Outcome or Key Insights',
    'Suggest 2–3 significant references',
    'Suggest a target journal'
  ],
  weProvide: [
    'Extensive literature survey, screening and classification of relevant sources',
    'Clear articulation of your research objective and the central problem',
    'Well-organized review article based on your outline with emphasis on the main research question',
    'Detailed representation of the current status of the field',
    'Identification of controversies or differing perspectives in the literature',
    'Framing of critical questions for future research',
    'Comprehensive list of references',
    'Formatting in line with the target journal’s guidelines (if provided)'
  ]
},

'Brief Communication': {
  youProvide: [
    'Reasons for writing a short communication',
    'Urgency of publication / justification of novelty or significance / proof that it is not an extension of previous work',
    'Specific Topic',
    'Main Objective / Research Question / Hypothesis',
    'Key Results with Interpretation',
    'Relevant Figures / Tables / Images',
    'One or two relevant articles you wish to discuss',
    'Suggest a target journal'
  ],
  weProvide: [
    'Extensive literature survey',
    'Writing of a concise and impactful Introduction',
    'List of references',
    'Formatting according to the target journal guidelines (if provided)'
  ]
},

 'Original Research Article': {
  youProvide: [
    'Topic',
    'Main Objective / Research Question / Hypothesis',
    'Detailed Methods',
    'Data',
    'Statistical Analysis (optional)',
    'Relevant Figures / Images',
    'Treatment Details',
    'Follow-up Information',
    'Outcome',
    'One or Two Relevant Papers You Want to Discuss',
    'Suggested Target Journal'
  ],
  weProvide: [
    'Extensive literature survey',
    'Complete writing of the research article',
    'Construction of tables and figures (if required)',
    'Comprehensive list of references',
    'Statistical analysis (on request)',
    'Formatting according to the target journal guidelines (if provided)'
  ]
}
,
 'Customized Writing': {
  youProvide: [
    'Statistical Analysis (SPSS)',
    'Continuing Medical Education (CME)',
    'Medical Guideline Document for Physicians',
    'Medical Procedures',
    'Training Manuals',
    'Regulatory Writing',
    'New Drug Application (NDA)',
    'Clinical Study Report / Documentation',
    'Phase I Clinical Trial Content',
    'Phase II Clinical Trial Content',
    'Phase III Clinical Trial Content',
    'Phase IV Clinical Trial Content',
    'Clinical Protocol',
    'Product Inserts'
  ],
  weProvide: [
    'Necessary clarification will be sought by our expert medical writers',
    'Feedback on the first draft will be provided within 30 days of delivery'
  ]
}

};

export default function DependentSecForScientific() {
  const [activeTab, setActiveTab] = useState('Research Proposal');
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
            <div className="col-md-6 p-4 bg-white">
              <h5 className="fw-bold mb-4">What You Provide</h5>
              <ul className={styles.checklist}>
                {content.youProvide.map((item:any, index:any) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 p-4" style={{ backgroundColor: '#00a5a5', color: 'white' }}>
              <h5 className="fw-bold mb-4 text-white">What We Provide</h5>
              <ul className={styles.checklist}>
                {content.weProvide.map((item:any, index:any) => (
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
