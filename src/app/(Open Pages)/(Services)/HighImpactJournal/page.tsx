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
        "Journal Selection & Suitability Check – Identifying journals based on impact factor, scope, and indexing (Scopus, SCI, Web of Science, PubMed).",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Manuscript Quality Assessment – Reviewing language, clarity, structure, and scientific rigor.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Pre-Submission Review & Editing – Conducting peer-level review and refining writing quality.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Formatting & Compliance Checks – Ensuring manuscript aligns with journal submission criteria.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Submission & Communication with Editors – Assisting in submission and addressing queries from journal editors.",
    },
    {
      stepss: "Step 6 ➔",
      icon: faCheckCircle,
      title:
        "Handling Reviewer Comments & Resubmission – Crafting detailed response letters and refining revisions for resubmission.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "Do you guarantee publication?",
      answer:
        "No, but we enhance manuscript quality, structure, and journal compatibility to improve acceptance chances.",
    },
    {
      question: "Which journals do you support?",
      answer:
        "We provide support for Scopus, SCI, Web of Science, PubMed, and Q1/Q2 indexed journals across multiple disciplines.",
    },
    {
      question: "Do you offer pre-submission peer review?",
      answer:
        "Yes! Our experts conduct a thorough review to strengthen your manuscript before submission.",
    },
    {
      question: "Can you assist with resubmission after rejection?",
      answer:
        "Absolutely! We help with revisions, rebuttal letter drafting, and resubmission strategies.",
    },
    {
      question: "What if my manuscript needs major revisions?",
      answer:
        "We provide in-depth editing, reviewer comment analysis, and expert guidance for revisions.",
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
              High-Impact Journal Publication Support – Increase Research
              Visibility &amp; Acceptance Rates
            </h1>
            <p className={styles.subtext}>
              Boost your research publication success with expert journal
              submission support. Our high- impact journal publication services
              ensure compliance with Q1, Q2, Scopus, Web of Science, and PubMed
              journal standards. We help researchers navigate the complex
              submission process, improving their chances of acceptance in
              top-tier academic journals.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>
                Get Publication Support
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
            What is High-Impact Journal Publication Support?
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Comprehensive Service – Ensures adherence to journal guidelines and submission
                readiness
              </li>
              <li>
                ✔ Strategic Journal Selection – Identifies the best high-impact journals for your research
              </li>
              <li>
                ✔ Pre-Submission Peer Review &amp; Formatting – Enhances manuscript structure and
                readability
              </li>
              <li>
                ✔ Reviewer Comment Response Assistance – Improves chances of publication success
              </li>
            </ul>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Who Should Use This Service?</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ PhD &amp; Postdoctoral Researchers – Seeking Q1/Q2 journal publication
              </li>
              <li>
                ✔ Academic &amp; Scientific Professionals – Looking for impact-factor journal submissions
              </li>
              <li>
                ✔ Medical &amp; Life Sciences Scholars – Requiring PubMed, SCI, and Scopus-indexed
                journal support
              </li>
            </ul>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Key Benefits of Expert Journal Publication Support:</h2>
            <ul className={styles.benefitsList}>
              <li>✔ Higher Acceptance Rates in High-Impact Journals</li>
              <li>
                ✔ Compliance with Formatting &amp; Submission Guidelines
              </li>
              <li>
                ✔ Error-Free Manuscript to Avoid Rejections
              </li>
              <li>✔ Expert Feedback &amp; Peer Review Before Submission</li>
              <li>
                ✔ Tailored Journal Selection for Maximum Research Impact.
              </li>
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
                  <td>Journal Selection</td>
                  <td>
                    Identifying the most relevant Q1/Q2 indexed journals for
                    submission.
                  </td>
                </tr>
                <tr>
                  <td>Manuscript Formatting</td>
                  <td>
                    Ensuring compliance with journal-specific style, reference
                    format, and structure.
                  </td>
                </tr>
                <tr>
                  <td>Pre-Submission Peer Review</td>
                  <td>
                    Providing expert feedback to refine research quality and
                    impact.
                  </td>
                </tr>
                <tr>
                  <td>Technical Review</td>
                  <td>
                    Checking for plagiarism, language, structure, and research
                    clarity.
                  </td>
                </tr>
                <tr>
                  <td>Cover Letter & Abstract Refinement</td>
                  <td>
                    Strengthening submission documents to enhance editor
                    acceptance.
                  </td>
                </tr>
                <tr>
                  <td>Submission Support</td>
                  <td>
                    Assisting in journal submission, compliance checks, and
                    manuscript tracking.
                  </td>
                </tr>
                <tr>
                  <td>Reviewer Comment Response</td>
                  <td>
                    Helping to draft rebuttals and revisions for resubmission.
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
              Start Your Publication Journey Today
            </button>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before &amp; After Journal Submission Support – The Impact
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before Submission:</h3>
                <ul className="before-text">
                  <li>Manuscript lacks journal-specific formatting.</li>
                  <li>Unclear cover letter and research scope alignment.</li>
                  <li>Weak data interpretation and literature support.</li>
                  <li>
                    Higher risk of rejection due to minor language or technical
                    errors.
                  </li>
                </ul>
              </div>

              <div className="after-example">
                <h3>After (Edited for Clarity &amp; Logical Flow):</h3>
                <ul className="after-text">
                  <li>
                    Manuscript optimized for journal scope and ready for
                    submission.
                  </li>
                  <li>
                    Well-structured cover letter and responses to reviewers.
                  </li>
                  <li>
                    Research impact and clarity enhanced for high acceptance
                    potential.
                  </li>
                  <li>
                    Significant reduction in rejection risk due to compliance
                    with journal requirements.
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
                  $250 per manuscript (Basic Submission Assistance)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $750 per manuscript (Comprehensive Support)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  10 – 30 Days (Based on service level and manuscript
                  complexity)
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
