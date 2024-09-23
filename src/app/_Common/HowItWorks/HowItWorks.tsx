import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Sign up",
      description:
        "Ipsum lorem dolor amet sit elit. Duis at est id leosco for it",
    },
    {
      id: 2,
      title: "Select course",
      description:
        "Ipsum lorem dolor amet sit elit. Duis at est id leosco for it",
    },
    {
      id: 3,
      title: "Start Learning",
      description:
        "Ipsum lorem dolor amet sit elit. Duis at est id leosco for it",
    },
    {
      id: 4,
      title: "Get Certificate",
      description:
        "Ipsum lorem dolor amet sit elit. Duis at est id leosco for it",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              ut enim rem sapiente eum earum, perferendis aliquid aut nam neque!
              Autem dolores tempore minima perferendis commodi error vitae in
              facilis!
            </p>
          </div>
        </div>

        <div className="row">
          {steps.map((step) => (
            <div className="col-lg-3 col-md-6 mb-4" key={step.id}>
              <div className="step text-center p-4">
                <div className="icon mb-3">
                  <img src="/images/image.png" alt="#" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <a href="#" className="btn btn-link">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
