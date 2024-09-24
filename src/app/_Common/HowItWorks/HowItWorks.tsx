import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Submit Your Order",
      description:
        "Provide your research details, and we’ll get started on your project.",
        image: "/images/hiw1.png"
    },
    {
      id: 2,
      title: "Assign to Expert",
      description:
        "Your project is assigned to a skilled expert for comprehensive review ",
        image: "/images/hiw2.png"
    },
    {
      id: 3,
      title: "Editing in Progress",
      description:
        "We enhance your paper’s structure, clarity, and academic quality.",
        image: "/images/hiw3.png"
    },
    {
      id: 4,
      title: "Receive Final Document",
      description:
        "Get the polished manuscript ready for submission or further review.",
        image: "/images/hiw4.png"
    },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="heading">
              <p style={{marginTop:"11px"}}>What we do</p>
              <span className="line"></span>
            </div>
            <h1 className="accordion__title" style={{textAlign:'start'}}>How it works?</h1>
          </div>

          <div className="col-lg-6">
            <p>
            We simplify the process of enhancing your research work. From submitting your order to receiving the polished manuscript, our expert team ensures precision and quality at every step. Let us help you achieve publication success with ease. 
            </p>
          </div>
        </div>

        <div className="row">
          {steps.map((step) => (
            <div className="col-lg-3 col-md-6 mb-4" key={step.id}>
              <div className="step text-center p-4">
                <div className="icon mb-3">
                  <img src={step.image} alt="#" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {/* <a href="#" className="btn btn-link">
                  Read More
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
