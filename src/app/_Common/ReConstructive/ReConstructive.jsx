import React from "react";
import "./ReConstructive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileUpload,
  faSearch,
  faEdit,
  faCheckCircle,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

const ReConstructive = () => {
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title: "Upload Manuscript",
      description: "Submit your manuscript & get journal recommendations.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title: "Peer Review & Editing",
      description: "Experts review & refine your manuscript.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title: "Formatting & Submission",
      description: "We format, check plagiarism & submit for you.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title: "Acceptance Support",
      description: "Guidance until your paper is accepted.",
    },
    {
      stepss: "Step 5 !",
      icon: faRedo,
      title: "Resubmission Help",
      description: "Assistance if you need to resubmit.",
    },
  ];
  return (
    <div>
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="container">
                <h2>
                  Get Published Faster & Increase Your Journal Acceptance Rate
                  by 60%!
                </h2>
                <p>
                  End-to-end publication support from journal selection to
                  submission & resubmission.
                </p>

                <div>
                  <a href="#" className="cta-button">
                    Get a Free Expert Consultation
                  </a>
                </div>

                <div>
                  <a href="#" className="cta-button">
                    Download Guide
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="/images/menuscimg/reach-support.jpg"
                alt="Reach Support"
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row">
          <div className="trust-section">
            <p>
              📘 <strong>10,000+ Researchers Published</strong> | 🤝
              <strong> Trusted by 1100+ Scientific Societies</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="wcus-container">
        <h2 className="process-title">Why Choose Us?</h2>
        <p className="wcus-subtext">
          Trusted by thousands of researchers worldwide.
        </p>

        <div className="wcus-benefits">
          {[
            {
              icon: "bi bi-check-circle",
              text: "99% Publication Success Rate",
            },
            { icon: "bi bi-clock", text: "8-Hour Express Editing Available" },
            {
              icon: "bi bi-file-earmark-text",
              text: "Unlimited Plagiarism Checks for 12 Months",
            },
            {
              icon: "bi bi-mortarboard",
              text: "Expert Support from PhDs in Your Field",
            },
          ].map((benefit, index) => (
            <div className="wcus-benefit-item" key={index}>
              <i className={benefit.icon}></i>
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="wcus-client-reviews">
          <h3 className="wcus-reviews-title">What Our Clients Say</h3>
          {[
            {
              imgSrc: "",
              text: "The best editing service I've used. Got published in record time!",
              name: "Dr. Emily Carter",
            },
            {
              imgSrc: "",
              text: "Exceptional support from expert editors. Highly recommended!",
              name: "Prof. John Williams",
            },
          ].map((review, index) => (
            <div className="wcus-review" key={index}>
              <img src={review.imgSrc} alt="Client" />
              <p>
                "{review.text}" - <strong>{review.name}</strong>
              </p>
            </div>
          ))}
        </div>

        <div className="wcus-live-counter">
          <p>
            📈 <strong>80 Research Papers Published & Counting!</strong>
          </p>
        </div>
      </div>

      <div className="process-container">
        <h2 className="process-title">How It Works</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <h5 className="step-heading">{step.stepss}</h5>
              <FontAwesomeIcon
                icon={step.icon}
                size="3x"
                className="step-icon"
              />
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReConstructive;
