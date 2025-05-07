"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
// import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";
const newData: { [key: string]: { [key: string]: string } } = data;
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import "./CopyEdit.css";

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
  let metaData = newData[pathName];

  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title:
        "Manuscript Review & Language Assessment – Evaluating clarity, grammar, consistency, and flow.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Copyediting by Subject-Matter Experts – Refining grammar, punctuation, and terminology consistency.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Journal Formatting & Style Adaptation – Ensuring journal-specific compliance.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Final Proofreading & Quality Check – Eliminating remaining errors before submission.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Delivery of Ready-to-Submit Manuscript – Providing error-free, publication-ready documents.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "What is the difference between proofreading and copyediting?",
      answer:
        "✔ Proofreading focuses on basic grammar and typographical errors.\n✔ Copyediting ensures clarity, readability, and terminology consistency for publication-ready manuscripts.",
    },
    {
      question: "Will copyediting change the meaning of my research?",
      answer:
        "No! Our PhD-qualified subject-matter experts retain your original ideas while improving clarity and structure.",
    },
    {
      question: "Do you ensure journal formatting compliance?",
      answer:
        "Yes! We format manuscripts according to Elsevier, Springer, Wiley, IEEE, APA, MLA, and other journal guidelines.",
    },
    {
      question: "Can you edit highly technical STEM and medical manuscripts?",
      answer:
        "Yes! Our expert copyeditors specialize in complex scientific and technical documents.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your manuscript, and our copyediting experts will refine your research for submission.",
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
      {<Metadata metaData={metaData} />}

      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Copyediting Services for High-Quality, Journal-Ready
              Manuscripts
            </h1>
            <p className={styles.subtext}>
              “Enhance the quality and impact of your manuscript with our expert
              copyediting services. Our scientific and academic editors ensure
              precise language refinement, journal-specific formatting, and
              compliance with the leading publication standards.”
            </p>
          </div>
        </section>

        <div className="proofreading-container container">
          <div className="proofreading-tab">What does Copyediting cover?</div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <ul className="service-list">
                  <li>
                    ✓ Thorough and comprehensive proofreading of the manuscript.
                  </li>
                  <li>
                    ✓ Checking the manuscript's English language for spelling,
                    vocabulary, grammar and punctuation.
                  </li>
                  <li>
                    ✓ Checking for the consistency in writing style
                    (capitalization, American/British Eng).
                  </li>
                </ul>

                <button className="submit-btn">
                  <a
                    href="https://manuscriptedit.com/AuthorDashboard/"
                    style={{ color: "white" }}
                  >
                    Submit Manuscript Now
                  </a>
                </button>
              </div>

              <div className="col-lg-6">
                <ul className="service-list">
                  <li>✓ Checking for consistent use of abbreviations.</li>
                  <li>
                    ✓ Checking the manuscript for consistency in referencing
                    style.
                  </li>
                  <li>
                    ✓ Rephrasing and revising the sentences for better clarity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Why Choose Our Copyediting Services?
            </h2>
            <p>
              Our editing services focus on clarity, coherence, and linguistic
              accuracy to improve your research for successful submission in
              high-impact journals.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.primaryButton}>
                  Get a Free Copyediting Quote
                </button>
              </a>

              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.secondaryButton}>
                  Request a Free Sample
                </button>
              </a>
            </div>
          </div>
        </section>
        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Key Benefits of ManuscriptEdit’s Copyediting Services
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                <br></br>✔ Manual Copyediting by PhD Experts- Ensures scientific
                and academic accuracy
              </li>
              <li>
                ✔ Grammar, syntax &amp; Style Enhancement- Refining sentence
                flow and readability
              </li>
              <li>
                ✔ Journal-Specific Formatting Compliance- Aligning with
                Elsevier, Springer, Wiley, IEEE, and Scopus-indexed journals
              </li>
              <li>
                ✔ Consistency in Terminology &amp; Data Handling- Timely,
                confidential, and Journal- compliant copyediting
              </li>
              <li>
                ✔ Fast Turnaround &amp; Secure Data Handling- Timely,
                confidential, and journal- compliant copyediting
              </li>
            </ul>
            <p>
              <br />
              Achieve publication success with our expert editing services
              tailored for scientific research and academic journals!
            </p>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>Editing Services Overview</h2>
            <table className="editing-overview-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Best For</th>
                  <th>Key Features</th>
                  <th>Turnaround Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard Copyediting</td>
                  <td>Researchers needing minor language refinement</td>
                  <td>
                    Grammar, punctuation & style corrections
                    <br />
                    Sentence restructuring
                  </td>
                  <td>3-5 Days</td>
                </tr>
                <tr>
                  <td>Advanced Copyediting</td>
                  <td>Authors preparing for journal submission</td>
                  <td>
                    Terminology consistency
                    <br />
                    Clarity enhancement & coherence check
                  </td>
                  <td>4-6 Days</td>
                </tr>
                <tr>
                  <td>Technical & Scientific Copyediting</td>
                  <td>STEM & medical researchers</td>
                  <td>
                    Field-specific terminology accuracy
                    <br />
                    Journal-compliant structuring
                  </td>
                  <td>5-7 Days</td>
                </tr>
                <tr>
                  <td>Manuscript Formatting & Journal Compliance</td>
                  <td>Authors submitting to high-impact journals</td>
                  <td>
                    Formatting for APA, MLA, Chicago, IEEE
                    <br />
                    Reference structuring
                  </td>
                  <td>4-6 Days</td>
                </tr>
                <tr>
                  <td>Final Pre-Submission Copyediting</td>
                  <td>Papers ready for journal submission</td>
                  <td>
                    Plagiarism check integration
                    <br />
                    Manuscript polishing
                  </td>
                  <td>5-7 Days</td>
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
            <a href="https://manuscriptedit.com/QuotationNew/">
              <button className={styles.primaryButton}>
                Start Your Copyediting Process
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before & After Copyediting – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Raw, Unedited Manuscript):</h3>
                <p className="before-text">
                  “The effects of the compound were interesting and may be
                  useful in future. These results were observed in recent
                  studies and are similar to previous research, which shows that
                  this compound is applicable in different situations.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Professionally Edited for Clarity & Precision):</h3>
                <p className="after-text">
                  “The observed effects of the compound indicate its potential
                  applicability in future research. Our findings align with
                  previous studies, confirming its effectiveness in diverse
                  experimental conditions.”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Our expert copyediting ensures precise, structured, and
                journal-ready manuscripts.
              </p>
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
                  $0.05 per word (Standard Copyediting){" "}
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.12 per word (Advanced Copyediting & Formatting)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  3 Days – 7 Days (Depending on manuscript complexity)
                </p>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <a
                href="https://manuscriptedit.com/QuotationNew/"
                className={styles.primaryButton}
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
