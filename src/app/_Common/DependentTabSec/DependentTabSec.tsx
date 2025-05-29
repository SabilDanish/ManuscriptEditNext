import React, { useState } from 'react';
import styles from '../DependentTabSec/ReviewArticle.module.css';

const tabs = [
  'CASE REPORT',
  'ORIGINAL RESEARCH ARTICLE',
  'REVIEW ARTICLE',
  'RESEARCH PROPOSAL',
  'CUSTOMIZED WRITING'
];

// Define content for each tab
const tabContent:any = {
 'REVIEW ARTICLE': {
  youProvide: [
    'Topic',
    'Broad Research Question',
    'Main Focus point',
    'Rough Outline',
    'Outcome',
    'Suggest 2–3 significant references',
    'Suggest a target journal'
  ],
  weProvide: [
    'Extensive literature survey, screen and classify',
    'Project your research objective and the problem',
    'Writing the review based on your outline and organizing the content emphasizing the main "research question"',
    'Clear representation of the present status of the field',
    'Identifying the controversy in the literature',
    'Formulating questions that need further research',
    'List of references',
    'Formatting according to the target journal guidelines (optional)'
  ]
}
,
 'ORIGINAL RESEARCH ARTICLE': {
  youProvide: [
    'Topic',
    'Main objective/Research question/Hypothesis',
    'Methods (in detail)',
    'Data',
    'Statistical analysis (optional)',
    'Relevant figures/images',
    'Treatment',
    'Follow up',
    'Outcome',
    '1 or 2 relevant paper(s) you want to discuss',
    'A suggested target journal'
  ],
  weProvide: [
    'Extensive literature survey',
    'Writing the full article',
    'Construction of tables and figures if required',
    'List of references',
    'Statistical analysis (on request)',
    'Formatting according to the target journal guidelines (optional)'
  ]
},

  'CASE REPORT': {
  youProvide: [
    'Patient Details (demographic such as age, sex, etc.)',
    'History',
    'Investigation Details',
    'Actual Procedure',
    'Treatment given',
    'Outcome',
    'Study data and photos (CT, X-ray, etc.)',
    'Rough draft of the case',
    '1 or 2 relevant paper/s you want to discuss',
    'Suggest a target journal'
  ],
  weProvide: [
    'Extensive literature survey',
    'Writing Introduction',
    'Rewriting the case report section',
    'Writing Discussion',
    'Justification and Recommendation',
    'List of references',
    'Formatting according to the target journal guidelines (optional)'
  ]
},
  'RESEARCH PROPOSAL': {
  youProvide: [
    'Specific Topic',
    'A clear Research Question',
    'Main objective (why you want to do?)',
    'Type of Study (prospective, retrospective...)',
    'Methods',
    'Study Design (Exclusion and Inclusion criteria)',
    'Investigations (what is to be done)',
    'Involvement of other departments',
    'Suggest 2–3 relevant articles',
    'Purpose of the proposal (PhD topic, grant application, etc.)'
  ],
  weProvide: [
    'Extensive literature survey',
    'Clearly identification of the objectives, justification and methodologies to be adopted in conducting the research',
    'Text with a good study design and method',
    'Emphasis on the existing gap in the literature and attempt to address the research problem',
    'A proposal that stands out among several other applications to enhance its chances of being funded',
    'Compliance with the guidelines and formats of the funding agency as far as possible based on the information provided by you'
  ]
},
 'CUSTOMIZED WRITING': {
  youProvide: [
    'Statistical analysis (SPSS)',
    'Continuing medical application (CME)',
    'Medical guideline document for physicians',
    'Medical procedures',
    'Training Manuals',
    'Regulatory writing',
    'New Drug Application',
    'Clinical study report/documentation',
    'Phase I',
    'Phase II',
    'Phase III',
    'Phase IV',
    'Clinical protocol',
    'Product Inserts'
  ],
  weProvide: [
    'Necessary clarification will be sought by our expert medical writers during writing',
    'Feedback on the 1st draft within 30 days of delivery'
  ]
}
};

export default function ReviewArticle() {
  const [activeTab, setActiveTab] = useState('CASE REPORT');
  const content = tabContent[activeTab];

  return (
    <div className= "container" style={{marginBottom:"50px" , marginTop:'50px'}}>
      <div className="row">
        {/* Sidebar */}
        <div className={`col-md-3 ${styles.sidebar}`}>
          
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`btn w-100 my-2 ${activeTab === tab ? styles.activeTab : styles.inactiveTab}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className={`row ${styles.content}`}>
            <div className="col-md-6 p-4 bg-white">
              <h5 className="fw-bold mb-4">What You Provide</h5>
              <ul className={styles.checklist}>
                {content.youProvide.map((item:any, index:any) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 p-4 text-white" style={{ backgroundColor: '#00a5a5'}}>
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
