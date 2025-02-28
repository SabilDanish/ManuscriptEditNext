"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
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
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title:
        "Manuscript Review & Journal Selection – Understanding the target journal’s submission guidelines.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Document Structuring & Formatting – Ensuring compliance with font, margins, sections, and figure placements.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Reference & Citation Formatting – Adjusting APA, Harvard, Vancouver, IEEE, and other citation styles.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Tables, Figures & Graphs Optimization – Aligning tables, equations, and illustrations as per journal requirements.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Final Compliance Check & Submission-Ready Formatting – Ensuring error-free, journal-ready document delivery.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "Do you format according to journal guidelines?",
      answer:
        "Yes! We ensure compliance with Elsevier, Springer, Wiley, BMJ, and PLOS ONE formatting standards.",
    },
    {
      question: "Can you format citations and references?",
      answer:
        "Yes! We apply APA, MLA, Vancouver, IEEE, Chicago, Harvard, and journal-specific citation styles.",
    },
    {
      question: "Do you format tables, figures, and graphs?",
      answer:
        "Yes! We ensure proper alignment, numbering, captions, and high-resolution figure adjustments.",
    },
    {
      question: "Can you prepare my manuscript for journal submission?",
      answer:
        "Yes! We offer cover letter formatting, word count adjustments, and structured journal-compliant formatting.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your manuscript, and our formatting experts will make it submission-ready.",
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
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Journal Formatting – Get Your Manuscript
              Submission-Ready
            </h1>
            <p className={styles.subtext}>
              “Ensure your manuscript is formatted precisely according to
              journal guidelines. Our expert formatting service ensures
              error-free citations, structured references, word count adherence,
              figure/table alignment, and journal-compliant layout for seamless
              submission.”
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.primaryButton}>
                  Get Journal Formatting Assistance
                </button>
              </a>

              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.secondaryButton}>
                  Request a Free Consultation
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Key Benefits of ManuscriptEdit’s Journal Formatting Services:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Expert Formatting for All Major Journals – Compliance with
                Elsevier, Springer, Wiley, BMJ, PLOS ONE, Nature, IEEE, and
                more.
              </li>
              <li>
                ✔Accurate Citation & Reference Formatting – Supporting APA, MLA,
                Chicago, Harvard, Vancouver, IEEE, and custom journal styles.
              </li>
              <li>
                ✔ Error-Free Manuscript Structure & Layout – Ensuring proper
                font, margins, headings, subheadings, and figure placement.
              </li>
              <li>
                ✔ Tables, Figures & Equations Alignment – Correcting table
                formatting, figure captions, and equation placement.
              </li>
              <li>
                ✔Word Count, Section & Cover Letter Compliance – Adhering to
                abstract length, body structure, and submission formatting
                rules.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              Our Journal Formatting Services
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
                  <td>Basic Formatting</td>
                  <td>First-time authors & students</td>
                  <td>
                    Font, margins, headings, tables, Standard citation
                    formatting
                  </td>
                  <td>3-5 Days</td>
                </tr>
                <tr>
                  <td>Advanced Formatting</td>
                  <td>Researchers submitting to top-tier journals</td>
                  <td>
                    Journal-specific compliance, In-depth reference structuring
                  </td>
                  <td>5-7 Days</td>
                </tr>
                <tr>
                  <td>Journal-Specific Citation & Reference Formatting</td>
                  <td>Authors ensuring proper citations</td>
                  <td>APA, MLA, Vancouver, IEEE, Cross-referencing checks</td>
                  <td>3-5 Days</td>
                </tr>
                <tr>
                  <td>Figures, Tables & Graph Alignment</td>
                  <td>Researchers with complex data presentations</td>
                  <td>
                    Figure formatting, high-resolution adjustments, Caption &
                    table alignment
                  </td>
                  <td>4-6 Days</td>
                </tr>
                <tr>
                  <td>Journal Submission-Ready Package</td>
                  <td>Researchers submitting final manuscripts</td>
                  <td>
                    Cover letter formatting, Response to reviewer comments
                    formatting
                  </td>
                  <td>5-7 Days</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        {/* New Proofreading Details Section */}
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
            <a href="https://secure.manuscriptedit.com/quotation">
              <button className={styles.primaryButton}>
                Start Your Scientific Illustration Project
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before & After Journal Formatting – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Unformatted Manuscript with Submission Errors):</h3>
                <p className="before-text">
                  “Title in incorrect font, double-spacing not applied,
                  citations missing from references, figures placed incorrectly,
                  and word count exceeding journal guidelines.”
                </p>
              </div>

              <div className="after-example">
                <h3>
                  After (Professionally Formatted, Submission-Ready Manuscript):
                </h3>
                <p className="after-text">
                  “Manuscript formatted to IEEE guidelines, proper citations
                  applied in APA style, tables aligned correctly, and structured
                  for seamless journal submission.”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Journal Formatting ensures compliance, professional
                presentation, and seamless submission.
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
                  $0.08 per word (Basic Formatting)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.15 per word (Advanced Journal-Specific Formatting)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  3 Days – 7 Days (Depending on complexity)
                </p>
              </div>
            </div>

            <div className="cta-container">
              <a
                href="https://secure.manuscriptedit.com/quotation"
                className="cta-button"
              >
                Check Pricing & Get a Quote
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
                      " https://manuscriptedit.com/_next/static/media/ad.9cd4964a.jpeg",
                    text: "Many thanks for your excellent work and the comments. I like it very much, Appreciated.",
                    name: "J Y",
                  },
                  {
                    imgSrc:
                      "https://manuscriptedit.com/_next/static/media/ag.4d10944f.jpeg",
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
              <a href="/Testimonial" className="cta-button">
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
