import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling
import './Publication_package.css'; 

const PackageCard = (props:{title:string ,features:string[] }) => (
  <div className="package-card">
    <h3>{props.title}</h3>
    <ul>
      {props.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <button className="choose-plan">CHOOSE PLAN</button>
  </div>
);

const PublicationPackages = () => {
    const packages = [
        {
          title: "Editing Plans",
          features: [
            "Extensive Sentence Rewriting for Improved Clarity and Flow",
            "Logical Structure Enhancement and Content Reorganization",
            "Advanced Terminology Check with Focus on Consistency",
            "Journal-Specific Formatting and Consistency Checks",
            "Reviewer Response Letter Editing",
            "Full Journal-Ready Presentation for Submission"
          ]
        },
        {
          title: "Publication Packages",
          features: [
            "Peer Review Analysis",
            "Data Analysis",
            "Research Paper Writing",
            "Substantive Editing",
            "Journal Selection",
            "Journal Submission",
            "Target Journal Formatting",
            "Artwork Formatting",
            "Cover Letter Writing",
            "Response To Reviewer",
            "Plagiarism Check",
            "Unlimited Assistance"
          ]
        },
        {
          title: "Data Analysis Plans",
          features: [
            "Expert Scientific Data Review & Analysis",
            "Provides Critical Review and Advanced Validation for Complex Datasets",
            "Rigorous Data Cleaning for Complex Datasets",
            "High-Impact Statistical Models and In-Depth Validation",
            "Critical Data Interpretation Emphasizing Scientific Rigor"
          ]
        },
        // {
        //   title: "Scientific Writing Assistance Plans",
        //   features: [
        //     "Manuscript Drafting from Research Data",
        //     "Abstract and Introduction Development",
        //     "Comprehensive Literature Review Writing",
        //     "Scientific Argumentation and Clarity Improvement",
        //     "Journal-Specific Formatting and Submission Guidance",
        //     "Response Letter Drafting for Reviewer Comments"
        //   ]
        // },
        {
          title: "Research Advisory Plans",
          features: [
            "Guidance on Impactful Research Topics",
            "Mentorship in Design and Grant Writing",
            "Data Analysis and Manuscript Improvement",
            "Peer Review and Submission Strategy",
            "Support for Successful Publication Processes",
            "Enhance Research Visibility and Impact"
          ]
        }
      ];
      

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="accordion__title">
            <h2 className='accordion_title'>Packaged Services</h2>
          </div>
        </div>
      </div>
      <div className="container packages-section">
      <div className="row">
        {packages.map((pkg, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <PackageCard title={pkg.title} features={pkg.features} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PublicationPackages;
