import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    { id: 1, title: "Sign up", description: "Ipsum lorem dolor amet sit elit. Duis at est id leosco for it" },
    { id: 2, title: "Select course", description: "Ipsum lorem dolor amet sit elit. Duis at est id leosco for it" },
    { id: 3, title: "Start Learning", description: "Ipsum lorem dolor amet sit elit. Duis at est id leosco for it" },
    { id: 4, title: "Get Certificate", description: "Ipsum lorem dolor amet sit elit. Duis at est id leosco for it" },
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="text-center">How it works?</h2>
        <div className="row">
          {steps.map((step) => (
            <div className="col-lg-3 col-md-6 mb-4" key={step.id}>
              <div className="step text-center p-4">
                <div className="icon mb-3">
                    <img src="/images/image.png" alt="#" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <a href="#" className="btn btn-link">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
