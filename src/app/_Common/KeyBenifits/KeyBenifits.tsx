import React from "react";
import "./KeyBenifits.css";

const KeyBenifits = () => {
    const steps = [
        {
          id: 1,
          title: "Preferred Return",
          description: "We prioritize partner submissions, so you’ll always get faster turnaround times.",
          image: "/images/hiw1.png" // Example: An icon representing speed or priority
        },
        {
          id: 2,
          title: "Cost Savings",
          description: "Enjoy discounts of up to 25% on all services, helping you maximize your resources.",
          image: "/images/HowItWorks/saving-svgrepo-com.png" // Example: An icon of a piggy bank or a discount tag
        },
        {
          id: 3,
          title: "Efficiency",
          description: "Simplify operations with workflows tailored to your needs.",
          image: "/images/hiw3.png" // Example: A gear or flowchart icon
        },
        {
          id: 4,
          title: "Improved Results",
          description: "Boost satisfaction and success for your authors and researchers.",
          image: "/images/hiw2.png" // Example: A bar graph or a checkmark
        },
        {
          id: 5,
          title: "Flawless Submissions",
          description: "Our expert editing ensures every manuscript is clear, polished, and ready to impress.",
          image: "/images/hiw4.png" // Example: A pen or document icon
        },
        {
          id: 6,
          title: "Expertise at Your Fingertips",
          description: "Access specialists across more than 1,600 academic fields.",
          image: "/images/HowItWorks/creativity-expertise-idea-svgrepo-com.png" // Example: A graduation cap or lightbulb
        },
        {
          id: 7,
          title: "Faster Progress",
          description: "Our quick, reliable services help researchers stay ahead of deadlines.",
          image: "/images/HowItWorks/growth-report-graph-svgrepo-com.png" // Example: A stopwatch or forward arrow
        }
      ];
      
      

  return (
    <section className="how-it-works">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="heading">
              <p style={{ marginTop: "11px" }}>Benifits we provide</p>
              <span className="line"></span>
            </div>
            <h1 className="accordion__title" style={{ textAlign: "start" }}>
              Key benifits
            </h1>
          </div>

          <div className="col-lg-6">
            {/* <p>
              Transforming your research is simple. Our streamlined process ensures every step is smooth and precise. From order placement to delivery, we ensure your work meets the highest standards, empowering you to publish with confidence.
            </p> */}
          </div>
        </div>

        <div className="row" style={{marginTop:"30px"}}>
          {steps.map((step) => (
            <div className="col-lg-3 col-md-6 mb-4" key={step.id}>
              <div className="step text-center p-4">
                <div className="icon mb-3">
                  <img src={step.image} alt={step.title} style={{ width: "100%" }} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenifits;
