import React, { useState } from "react";
import "./Faq.css"; // Import the CSS file

const faqs = [
  {
    question: "ManuscriptEdit has different packages for Publication Support. Do these packages guarantee publication?",
    answer:
      "We offer four packages under 'Publication Support' - Premium, Advanced , Standard and Premium Plus. Depending on your need either you choose one of them or we can also suggest. Publishing depends on many factors. The quality of research work is the most important criterion. Apart from this, journal's editors and reviewers take decision based on several other factors. For example, if the journal office receives two manuscripts related to the similar field, and if they have some rule that they can publish one article on a particular field per issue, then either they will suggest you to look for another journal or they will delay the publication. Therefore, we cannot guarantee publication if you avail our packages. However, the expert team at ManuscriptEdit will assist you to shape up your manuscript in such a way which maximizes the chance of publication.",
  },
  {
    question: "Can you reformat my manuscript that complies with the journal requirement?",
    answer:
      "Yes, under the 'Target Journal Formatting' service we format your manuscript following the guidelines provided by the particular journal.",
  },
  {
    question: "Do you correct or format artwork under any of the Publication Support packages?",
    answer:
      "No, the correction or reformatting of artwork does not include in any of the packages. We have customized 'Illustration and Enhancement Services' under which you can avail different services related to artwork.",
  },
  {
    question: "How does the 'Journal Selection' work at ManuscriptEdit?",
    answer:
      "Our 'journal selection' team consists of mainly PhDs who has vast experience in publishing their own research work in various reputed journals. They are aware of different journals in a particular field, and their criteria of publishing, for example scope, target audience, impact factor, rejection rate, etc. They prepare a detailed journal selection report based on several factors and shortlist 5-6 journals which are best suited for your manuscript.",
  },

  {
    question: "Can I send my manuscripts to all the recommended journals simultaneously?",
    answer:
      "No, you cannot. At a time, you can submit your manuscript to a single journal.",
  },
];

const FaqHome = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index:number) => {
    console.log(typeof(index))
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

export default FaqHome;
