"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
// import { data } from "../../../../app/utils/metaFile";
// import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import redirect from "@/app/_Common/_functionality/Redirect";
// const newData: { [key: string]: { [key: string]: string } } = data;
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";

import {
  faFileUpload,
  faSearch,
  faEdit,
  faCheckCircle,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const pathName: string = usePathname()
    .split("/")
    .filter((val) => val)
    .join("");
  //   let metaData = newData[pathName];
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title:
        "Scientific Review & Assessment – Evaluating manuscript strengths and areas for improvement.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Language and Structural Editing – Refining clarity, scientific tone, and consistency.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Terminology and Technical Accuracy Check – Ensuring discipline-specific precision and correctness.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Formatting & Compliance Review – Adjusting layout, citations, and references to journal standards.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Final Proofreading & Quality Check – Verifying all changes and ensuring readiness for submission.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question:
        "What is the difference between basic editing and high-impact scientific editing?",
      answer:
        "High-impact scientific editing focuses on technical precision, logical flow, and journal compliance beyond standard language editing.",
    },
    {
      question: "Do you guarantee acceptance in high-impact journals?",
      answer:
        "No, but we significantly improve manuscript quality to align with journal expectations.",
    },
    {
      question: "Can you assist with reviewer comments and revisions?",
      answer:
        "Yes, we provide post-submission editing and reviewer response assistance.",
    },
    {
      question: "Which disciplines do you cover?",
      answer:
        "We support STEM, Life Sciences, Medicine, Social Sciences, and Engineering.",
    },
    {
      question:
        "How do I ensure my manuscript is formatted correctly for my target journal?",
      answer:
        "Our experts ensure compliance with APA, MLA, IEEE, and journal-specific guidelines.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const gap = {
    marginTop: "40px",
  };

  return (
    <>
      {/* {<Metadata metaData={metaData} />} */}
      {/* {breadcrum("Services / English Editing", "Substantive editing")} */}
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              High-Impact Scientific Editing – Elevate Your Research for
              Top-Tier Journals
            </h1>
            <p className={styles.subtext}>
              Enhance your scientific manuscript with expert scientific editing
              services to improve clarity, coherence, and publication readiness.
              Our professional research editors ensure compliance with Q1, Q2,
              Scopus, Web of Science, and PubMed journal standards, boosting
              your acceptance rate in high-impact journals.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>
                Get Scientific Editing Now
              </button>
              <button className={styles.secondaryButton}>
                Request a Free Sample
              </button>
            </div>
          </div>
        </section>

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              What is High-Impact Scientific Editing?
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Advanced Technical Editing – Improves language, terminology,
                and structure for research papers
              </li>
              <li>
                ✔ Scientific Clarity &amp; Readability – Enhances logical flow,
                coherence, and precision
              </li>
              <li>
                ✔ Journal Compliance Editing – Aligns with top academic journal
                requirements
              </li>
              <li>
                ✔ Error-Free Research Papers – Corrects grammar, syntax, and
                scientific accuracy
              </li>
            </ul>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Who Needs This Scientific Editing Service?
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔Researchers &amp; Academics – Preparing manuscripts for
                high-impact journal submission
              </li>
              <li>
                ✔ PhD Scholars &amp; Postdoctoral Fellows – Refining theses,
                dissertations, and research papers
              </li>
              <li>
                ✔ Medical &amp; Scientific Professionals – Ensuring technical
                precision and scientific readability
              </li>
            </ul>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Key Benefits of High-Impact Scientific Editing:
            </h2>
            <ul className={styles.benefitsList}>
              <li>✔ Improves Research Clarity &amp; Global Readability</li>
              <li>✔ Enhances Logical Flow &amp; Scientific Argumentation</li>
              <li>✔ Eliminates Grammar, Syntax &amp; Terminology Errors</li>
              <li>✔ Aligns Manuscript Structure with Journal Guidelines</li>
              <li>✔ Reduces Rejection Rates Due to Language Issues</li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>What This Service Includes</h2>
            <table className="editing-overview-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Advanced Language Editing</td>
                  <td>Improving grammar, syntax, and sentence clarity.</td>
                </tr>
                <tr>
                  <td>Scientific Accuracy Review</td>
                  <td>
                    Ensuring proper terminology usage and technical consistency.
                  </td>
                </tr>
                <tr>
                  <td>Logical Flow & Structure Enhancement</td>
                  <td>Strengthening coherence and argumentation.</td>
                </tr>
                <tr>
                  <td>Journal Formatting Compliance</td>
                  <td>Aligning with specific submission requirements.</td>
                </tr>
                <tr>
                  <td>Reference and Citation Check</td>
                  <td>
                    Ensuring correct formatting in APA, MLA, IEEE, and journal
                    styles.
                  </td>
                </tr>
                <tr>
                  <td>Clarity and Readability Improvement</td>
                  <td>
                    Simplifying complex sentences while maintaining technical
                    depth.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>How It Works</h2>
          <div className={styles.processSteps1}>
            {steps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <h5 className={styles.stepHeading}>{step.stepss}</h5>
                <FontAwesomeIcon
                  icon={step.icon}
                  size="3x"
                  className={styles.stepIcon}
                />
                <h3 className={styles.stepDescription}>{step.title}</h3>
              </div>
            ))}
          </div>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              Start Your Scientific Editing Project Today
            </button>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before and After Example
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Original Unedited Text):</h3>
                <ul className="before-text">
                  <li>
                    Manuscript contains language inconsistencies and unclear
                    technical terms.
                  </li>
                  <li>
                    Improper structuring leading to lack of coherence in
                    argumentation.
                  </li>
                  <li>
                    High risk of rejection due to readability and formatting
                    issues.
                  </li>
                </ul>
              </div>

              <div className="after-example">
                <h3>After (Edited for Clarity &amp; Logical Flow):</h3>
                <ul className="after-text">
                  <li>
                    Refined, well-structured, and publication-ready manuscript.
                  </li>
                  <li>
                    Stronger scientific clarity and coherence across all
                    sections.
                  </li>
                  <li>
                    Improved readability without altering technical accuracy.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="pricing-turnaround-section">
            <h2 className="pricing-turnaround-heading">
              Pricing and Turnaround Time
            </h2>

            <div className="pricing-details">
              <div className="pricing-item">
                <h3>Starting Price</h3>
                <p className="pricing-text">
                  $0.06 per word (Standard Scientific Editing)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.12 per word (Advanced Editing)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  5 – 12 Days (Based on service level and manuscript complexity)
                </p>
              </div>
            </div>

            <div className="cta-container">
              <a
                href="https://manuscriptedit.com/QuotationNew/"
                className="cta-button"
              >
                Check Pricing and Get a Quote
              </a>
            </div>
          </section>

          <div className="wcus-container">
            <div className="wcus-client-reviews">
              <h3 className="editing-overview-heading">Testimonial</h3>
              <div className="row d-flex justify-content-around">
                {[
                  {
                    imgSrc:
                      " https://manuscriptedit.com/_next/static/media/aa.5d969f42.jpg",
                    text: "Thank you for your comments and corrections of my paper- it is done in much more professional way.",
                    name: "Firas obeidat",
                  },
                  {
                    imgSrc:
                      "https://manuscriptedit.com/_next/static/media/ss.a5f9add8.jpg",
                    text: "Thank you for the excellent work. We are very satisfied and will come back with new manuscript soon!",
                    name: "Lars-Ake",
                  },
                  {
                    imgSrc:
                      "	https://manuscriptedit.com/_next/static/media/ad.8a1b15bf.jpg",
                    text: "Many thanks for your excellent work and the comments. I like it very much, Appreciated.",
                    name: "J Y",
                  },
                  {
                    imgSrc:
                      "https://manuscriptedit.com/_next/static/media/ag.07ec11ab.jpg",
                    text: "Thank you. You and your editorial/writing team have done an EXCELLENT job and i am grateful for your generosity.",
                    name: "Emily Selman",
                  },
                ].map((review, index) => (
                  <div className="wcus-review col-lg-5" key={index}>
                    <img src={review.imgSrc} alt="Client" />
                    <p>
                      "{review.text}" - <strong>{review.name}</strong>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <h3>
              <br />
              🏆 Rated 4.9 out of 5 by academic professionals, scientists, and
              publishing experts.
              <br />
              <br />
              📑 Trusted by universities, funding agencies, and research
              institutions.
            </h3>
            <div className="cta-container">
              <a
                href="https://manuscriptedit.com/Testimonial/"
                className="cta-button"
              >
                See More Reviews
              </a>
            </div>
          </div>

          <div className="container" style={{ marginTop: "3rem" }}>
            <div className="accordion__wrapper2">
              <h1 className="accordion__title">FAQs</h1>

              {accord2.map((faq, index) => (
                <div
                  className="accordion"
                  key={index}
                  style={{
                    paddingBottom: "1rem",
                    marginBottom: "1rem",
                    color: "#494949",
                  }}
                >
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
                    <div
                      className="accordion__answer"
                      style={{
                        padding: "0",
                        paddingTop: "0.5rem",
                        marginBottom: "0",
                        backgroundColor: "#f0f8ff",
                      }}
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
