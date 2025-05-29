"use client"

import React, { useState } from "react";
import "./faqPhd.css"; // Import the CSS file

const faqs = [
  {
    question: "How do you ensure the originality of my PhD thesis?",
    answer:
      " We guarantee originality by conducting thorough research and utilizing plagiarism detection software. Each thesis is crafted to be unique and tailored to your study.",
  },
  {
    question: " Can I communicate directly with the person writing or editing my thesis?",
    answer:
      "Yes, we encourage direct communication between our clients and our team of experts to ensure clarity and a personalized approach to your thesis.",
  },
  {
    question: "What qualifications do your writers and editors hold?",
    answer:
      "Our team is composed of PhD-level writers and editors who are experts in their respective fields, ensuring that your thesis is handled by knowledgeable professionals.",
  },
  {
    question: "How do you handle data security and confidentiality?",
    answer:
      " Protecting your data is paramount. We adhere to strict confidentiality agreements and employ secure methods to ensure your research remains private.",
  },

  {
    question: "How do I keep track of my research performance?",
    answer:
      "  Our Scholarly Metrics Monitoring service lets you stay informed about your research's performance across various metrics, helping you make informed decisions about future projects.",
  },
];

const FaqPhd = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="accordion__wrapper">
        <h1 className="accordion__title">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div className="accordion" key={index}>
            <div
              className="accordion__header"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="accordion__question">{faq.question}</h2>
              <span className="accordion__icon">
                <i
                  className={
                    openIndex === index
                      ? "ri-subtract-fill"
                      : "ri-add-line"
                  }
                ></i>
              </span>
            </div>
            <div
              className="accordion__content"
              style={{
                height: openIndex === index ? "auto" : "0",
              }}
            >
              <p className="accordion__answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPhd;
