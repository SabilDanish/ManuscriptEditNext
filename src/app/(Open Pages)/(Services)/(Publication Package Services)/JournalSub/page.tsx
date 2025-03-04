"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faEnvelopeOpenText,
  faPaperPlane,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accord2 = [
    {
      question: "What does your full journal submission service include?",
      answer:
        "We handle manuscript formatting, journal selection, online submission, cover letter drafting, and tracking until acceptance.",
    },
    {
      question: "Can you help with peer review communication?",
      answer:
        "Yes! We draft professional reviewer response letters and manage editorial communication.",
    },
    {
      question: "Do you guarantee journal acceptance?",
      answer:
        "While we enhance submission quality and compliance, final acceptance depends on editorial and peer review decisions.",
    },
    {
      question: "Can you submit my paper to multiple journals?",
      answer:
        "Yes! We offer multiple journal submission support and resubmission strategies.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your manuscript, and our submission experts will handle the entire submission process.",
    },
  ];

  return (
    <>
      <section style={{ marginTop: "40px" }}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Hassle-Free Journal Submission – Submit Your Research with
            Confidence
          </h1>
          <p className={styles.subtext}>
            Increase your chances of journal acceptance with our expert
            submission support. We handle journal selection, formatting, cover
            letter drafting, reviewer responses, and submission tracking for
            high-impact publications.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() =>
                (window.location.href =
                  "https://secure.manuscriptedit.com/quotation")
              }
            >
              Get Journal Submission Assistance
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() =>
                (window.location.href =
                  "https://secure.manuscriptedit.com/quotation")
              }
            >
              Request a Free Consultation
            </button>
          </div>
        </div>
      </section>
      <section className={styles.benefitsWrapper} style={{ marginTop: "40px" }}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            Why Choose Our Journal Submission Services?
          </h2>
          <p className={styles.subtext}>
            <strong>
              ManuscriptEdit’s Journal Submission Services offer comprehensive
              support to ensure that your manuscript is submitted smoothly and
              successfully to the right journal. Our key benefits include:
            </strong>
          </p>
          <ul className={styles.benefitsList}>
            <li>
              ✔ Expert Journal Submission Assistance – Ensuring flawless
              manuscript submission with all journal guidelines met.
            </li>
            <li>
              ✔ Cover Letter & Manuscript Formatting – Creating persuasive cover
              letters and journal-specific formatted manuscripts.
            </li>
            <li>
              ✔ Submission to Scopus, Web of Science, PubMed, Elsevier,
              Springer, Wiley & More – Expert navigation of complex submission
              portals.
            </li>
            <li>
              ✔ Peer Review & Reviewer Response Handling – Managing editorial
              communication and reviewer comment responses.
            </li>
            <li>
              ✔ Fast-Track Submission for High-Impact Journals – Increasing
              acceptance chances with complete submission compliance.
            </li>
          </ul>
          <button
            className={styles.primaryButton}
            onClick={() =>
              (window.location.href =
                "https://secure.manuscriptedit.com/quotation")
            }
          >
            Learn More About Our Submission Process
          </button>
        </div>
      </section>
      <section className="editing-overview-section">
        <h2 className="editing-overview-heading">
          Our Journal Submission Services
        </h2>
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
              <td>Full Journal Submission Service</td>
              <td>First-time authors & researchers</td>
              <td>
                Journal selection, Formatting, Cover letter writing, Submission
                tracking
              </td>
              <td>5-7 Days</td>
            </tr>
            <tr>
              <td>Manuscript Formatting & Compliance Check</td>
              <td>Authors preparing for submission</td>
              <td>
                Journal-specific formatting, References & citations, Ethical
                compliance review
              </td>
              <td>3-5 Days</td>
            </tr>
            <tr>
              <td>Cover Letter & Reviewer Response Drafting</td>
              <td>Researchers submitting to high-impact journals</td>
              <td>
                Persuasive cover letter, Reviewer response structuring,
                Scientific argumentation refinement
              </td>
              <td>4-6 Days</td>
            </tr>
            <tr>
              <td>Multiple Journal Submissions & Resubmission Support</td>
              <td>Authors seeking alternative publication options</td>
              <td>
                Multi-journal submission, Resubmission after rejection,
                Compliance revisions
              </td>
              <td>7-10 Days</td>
            </tr>
            <tr>
              <td>Submission Tracking & Peer Review Handling</td>
              <td>Researchers awaiting decision & revisions</td>
              <td>
                Reviewer comment analysis, Manuscript revision tracking,
                Editorial communication
              </td>
              <td>Ongoing</td>
            </tr>
          </tbody>
        </table>
        <button
          className={styles.primaryButton}
          style={{ marginTop: "40px" }}
          onClick={() =>
            (window.location.href =
              "https://secure.manuscriptedit.com/quotation")
          }
        >
          Compare Journal Submission Services
        </button>
      </section>
      <div className={styles.processContainer}>
        <h2 className={styles.processTitle}>
          Journal Submission Process – How We Ensure Accuracy & Acceptance
        </h2>
        <div className={styles.processSteps1}>
          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 1:</h5>
            <FontAwesomeIcon
              icon={faSearch} // Suitable for journal selection
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Journal Selection & Manuscript Evaluation – Identifying the
              best-fit journal based on scope, indexing, and impact factor.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 2:</h5>
            <FontAwesomeIcon
              icon={faEdit} // Suitable for manuscript formatting
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Manuscript Formatting & Cover Letter Drafting – Ensuring
              compliance with journal formatting and submission requirements.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 3:</h5>
            <FontAwesomeIcon
              icon={faPaperPlane} // Suitable for online submission
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Online Submission & Compliance Check – Uploading files, responding
              to submission questions, and tracking the application.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 4:</h5>
            <FontAwesomeIcon
              icon={faEnvelopeOpenText} // Suitable for editorial correspondence
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Editorial Correspondence & Peer Review Management – Handling
              editor queries and reviewer comments professionally.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 5:</h5>
            <FontAwesomeIcon
              icon={faCheckCircle} // Suitable for decision tracking and acceptance
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Decision Tracking, Resubmission & Post-Acceptance Support –
              Ensuring a smooth revision, resubmission, and acceptance process.
            </h3>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <a href="https://secure.manuscriptedit.com/quotation">
            <button className={styles.primaryButton}>
              Start Your Journal Submission Process
            </button>
          </a>
        </div>
      </div>

      <section className="before-after-example-section">
        <h2 className="before-after-example-heading">
          Before & After Journal Submission Assistance – See the Difference
        </h2>

        <div className="before-after-example-content">
          <div className="before-example">
            <h3>Before (Manuscript Rejected Due to Submission Errors):</h3>
            <p className="before-text">
              “I submitted my research paper to a high-impact journal, but it
              was rejected due to formatting issues, missing references, and an
              unstructured cover letter.”
            </p>
          </div>

          <div className="after-example">
            <h3>
              After (Professionally Managed Submission with Expert Compliance
              Check):
            </h3>
            <p className="after-text">
              “After using ManuscriptEdit’s journal submission service, my
              manuscript was accepted without formatting issues. The cover
              letter was persuasive, and the reviewer response was handled
              smoothly!”
            </p>
          </div>
        </div>

        <div className="explanation">
          <p>
            Journal Submission Assistance ensures compliance, efficiency, and
            higher acceptance rates.
          </p>
        </div>

        <div className="cta-container">
          <a
            href="https://secure.manuscriptedit.com/quotation"
            className="cta-button"
          >
            Request a Sample Submission Package
          </a>
        </div>
      </section>

      <section className="pricing-turnaround-section">
        <h2 className="pricing-turnaround-heading">
          Submission & Reviewer Response Assistance – Pricing and Turnaround
          Time
        </h2>

        <div className="pricing-details">
          <div className="pricing-item">
            <h3>Starting Price</h3>
            <p className="pricing-text">
              $120 (Basic Submission Support) – $450 (Comprehensive Submission &
              Reviewer Response Management)
            </p>
          </div>

          <div className="delivery-item">
            <h3>Turnaround Time</h3>
            <p className="delivery-time">
              3 Days – 10 Days (Depending on service type)
            </p>
          </div>
        </div>

        <div className="cta-container">
          <a
            href="https://secure.manuscriptedit.com/quotation"
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
                  "https://manuscriptedit.com/_next/static/media/sd.f75dbd94.jpeg",
                text: "The best editing service I've used. Got published in record time!",
                name: "Dr. Emily Carter",
              },
              {
                imgSrc:
                  "https://manuscriptedit.com/_next/static/media/ah.73aaea49.jpeg",
                text: "Exceptional support from expert editors. Highly recommended!",
                name: "Prof. John Williams",
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
          <h1 className="accordion__title">
            FAQs
            <br />
            <span style={{ fontSize: "1rem" }}>
              Common Questions About Journal Submission Services
            </span>
          </h1>

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
                className="accordion__header d-flex justify-content-between"
                onClick={() => toggleAccordion(index)}
                style={{ cursor: "pointer" }}
              >
                <h2 className="accordion__question">{faq.question}</h2>
                <span>{openIndex === index ? "⮝" : "⮟"}</span>
              </div>

              <div
                className="accordion__content"
                style={{
                  height: openIndex === index ? "auto" : "0",
                  overflow: "hidden",
                  transition: "height 0.3s ease",
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
    </>
  );
}
