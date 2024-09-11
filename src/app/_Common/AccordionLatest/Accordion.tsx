import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import './Accordion.css';  // Link your CSS file


const PublicationAccordion = () => {
  const [activeKey, setActiveKey] = useState("0");
  const [recentKey, setRecentKey] = useState<string>('0');
  const [tabKey, setTabKey] = useState("0");

  // Define the images for each accordion item
  const images = {
    0: "/images/A1.png",
    1: "/images/A2.png",
    2: "/images/A3.png",
    3: "/images/A4.png",
    4: "/images/A5.png",
    5: "/images/A6.png",
  };

  useEffect(() => {
    if (activeKey) {
      setRecentKey(activeKey);
    }
  }, [activeKey]);

  // Handle accordion toggle to update the image and active key
  const handleAccordionToggle = (key: any) => {
    if (key === activeKey) {
      return;
    } else {
      setActiveKey(key);
      setTabKey(key ? key : recentKey);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mb-4 accordion-title">
          How will you be supported for a publication package valid for 1 year?
        </h2>
      </div>

      <div className="container my-5 custom-accordion">
        <div className="row align-items-stretch AllBack d-flex">
          <div className="col-lg-4 image-container d-flex">
            {/* Dynamically change the image based on the active accordion item */}
            <img
              src={images[tabKey]}
              alt="Project support illustration"
              className="img-fluid MobDisNone"
              style={{
                borderRadius: "10px",
                width: "70%",
                height: "auto",
                objectFit: "contain"
              }}
            />
          </div>
          <div className="col-lg-8">
            <Accordion activeKey={activeKey} onSelect={handleAccordionToggle} style={{ paddingBottom: "10px", marginBottom: "10px" }}>
              {accordionItems.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>
                    <span className="number">{`0${index + 1}`}</span>
                    <p className="ParaAccFont">{item.title}</p>
                    {/* Arrow icon that changes based on whether the item is expanded */}
                    <i className={`bi ${activeKey === index.toString() ? 'bi-chevron-up' : 'bi-chevron-down'} ml-auto`}></i>
                  </Accordion.Header>
                  <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

// Accordion items data
const accordionItems = [
  {
    title: "Tailored Project Scheduling for Your Paper",
    body: "Our project manager carefully evaluates the current status of your paper and designs a personalized project timeline that aligns with your preferred deadlines. We break the project into manageable phases, offering services such as journal selection, advanced English editing, pre-submission peer review, and artwork formatting to ensure your paper is ready for publication."
  },
  {
    title: "Assembling the Ideal Team of Experts",
    body: "Our project manager selects the most qualified experts to work on your paper, based on their subject expertise, academic credentials, and publication experience. Each team member is assigned a specific phase of the project to ensure smooth collaboration and quality results."
  },
  {
    title: "Delivery by Phases and Feedback Integration",
    body: "Our support packages are structured to keep you informed at every step. After each phase, we deliver the work for your review and integrate your feedback before moving forward. This ensures a collaborative and transparent process from start to finish."
  },
  {
    title: "Comprehensive Journal Submission Preparation",
    body: "We handle all aspects of journal submission for you. From creating an account with your chosen journal to reviewing their guidelines, we prepare a tailored submission package. You'll receive a final draft for approval before the formal submission."
  },
  {
    title: "Seamless Journal Submission on Your Behalf",
    body: "Once the submission package is finalized, we submit it directly to the journal on your behalf. This includes your research paper, cover letter to the journal editor, and any additional documents requested by the journal. We track the journal's response and guide you through the next steps."
  },
  {
    title: "Ongoing Support Until Final Publication",
    body: "Journal feedback and revisions are part of the publishing process. We help you address reviewer comments professionally and prepare resubmissions, whether to the same journal or a new one. With our Gold or Platinum packages, you'll receive comprehensive resubmission support until your paper is published."
  }
];

export default PublicationAccordion;
