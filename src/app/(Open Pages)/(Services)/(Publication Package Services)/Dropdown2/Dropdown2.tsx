import React, { useState } from "react";
import "./Dropdown2.css";
const accord2 = [
  {
    question: "Mismatch between journal focus and manuscript",
    answer:
      "<strong>Solution: Tailored Journal Selection</strong><p>Our professionals carefully analyze your manuscript to recommend the most appropriate 3-5 journals that align with your research focus.</p>",
  },
  {
    question: "Flaws in research design",
    answer:
      "<strong>Solution: Comprehensive Peer Review</strong><p>We conduct a detailed review of your manuscript, identifying any weaknesses in the research design to enhance its quality before submission.</p>",
  },
  {
    question: "Data discrepancies or inaccuracies",
    answer:
      "<strong>Solution: Thorough Statistical Review</strong><p>Our team reviews your methodology, identifying any inconsistencies in your data to ensure accurate and reliable results.</p>",
  },
  {
    question: "Insufficient literature review",
    answer:
      "<strong>Solution: In-depth Peer Review</strong><p>Our specialists assess your literature review for gaps and provide targeted suggestions to ensure it meets scholarly standards.</p>",
  },
  {
    question: "Errors in tables and figures",
    answer:
      "<strong>Solution: Professional Artwork Formatting</strong><p>Our graphic design experts ensure that your tables and figures meet journal requirements, refining complex visuals for clarity and compliance.</p>",
  },
  {
    question: "Poor writing or disorganized structure",
    answer:
      "<strong>Solution: Advanced Editing Services</strong><p>We enhance the clarity, flow, and organization of your manuscript, providing unlimited revisions and reformatting for optimal journal submission.</p>",
  },
  {
    question: "Failure to meet journal submission criteria",
    answer:
      "<strong>Solution: Full Journal Submission Support</strong><p>Our team manages every step of the submission process, ensuring your manuscript meets all the specific guidelines required by the journal.</p>",
  },
];


const Dropdown2 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="accordion__wrapper2">
        <h1 className="accordion__title">How can you prevent rejections?<br /><span style={{ fontSize: "1rem" }}>7 reasons why you get rejected mostly, and find out how Manuscriptedit services can help you out.</span></h1>

        {accord2.map((faq, index) => (
          <div className="accordion" key={index} style={{ paddingBottom: "1rem", marginBottom: "1rem", color: "#494949" }}>
            <div
              className="accordion__header"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="accordion__question">{faq.question}</h2>
              {openIndex === index ? "⮝" : "⮟"}
              {/* <span className="accordion__icon">
                <i
                  className={`${openIndex === index ? "ri-subtract-fill" : "ri-add-line"}`}
                ></i>
              </span> */}
            </div>
            <div
              className="accordion__content"
              style={{
                height: openIndex === index ? "auto" : "0",
              }}
            >
              <div className="accordion__answer" style={{ padding: "0", paddingTop: "0.5rem", marginBottom: "0", backgroundColor: "#f0f8ff" }} dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown2;
