import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import './Accordion.css';  // Link your CSS file

const PublicationAccordion = () => {
  const [activeKey, setActiveKey] = useState("0"); // Default active key is "0"

  // Define the images for each accordion item
  const images = {
    0: "/images/A1.png",
    1: "/images/A2.png",
    2: "/images/A3.png",
    3: "/images/A4.png",
    4: "/images/A5.png",
    5: "/images/A6.png",
  };

  // Handle accordion toggle to update the image
  const handleAccordionToggle = (key : string) => {
    // If the same key is clicked, keep it open instead of collapsing it
    if (key === activeKey) {
      setActiveKey(key); // Keep the current accordion open
    } 
    else {
      setActiveKey(key); // Switch to a new accordion item if another is clicked
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
        <div className="row align-items-center">
          <div className="col-lg-4 image-container">
            {/* Dynamically change the image based on the active accordion item */}
            <img
              src={images[activeKey]}
              alt="Project support illustration"
              className="img-fluid"
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
                    {item.title}
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
    body: "We provide customized project scheduling based on your research goals and timelines."
  },
  {
    title: "Assembling the Ideal Team of Experts",
    body: "Our team of professionals ensures that your paper is handled by the best in the field."
  },
  {
    title: "Delivery by Phases and Feedback Integration",
    body: "We ensure continuous delivery with feedback integration at every phase."
  },
  {
    title: "Comprehensive Journal Submission Preparation",
    body: "Comprehensive preparation for submitting your paper to top journals."
  },
  {
    title: "Seamless Journal Submission on Your Behalf",
    body: "We manage journal submissions, so you don’t have to worry about administrative work."
  },
  {
    title: "Ongoing Support Until Final Publication",
    body: "Support continues until your paper is fully published."
  }
];

export default PublicationAccordion;
