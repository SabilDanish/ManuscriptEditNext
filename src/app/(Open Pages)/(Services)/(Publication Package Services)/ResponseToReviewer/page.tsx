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
  faFileUpload,
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
      question: "How does your service improve my chances of acceptance?",
      answer:
        "We provide clear, structured, and well-supported responses that effectively address reviewer concerns while maintaining scientific integrity.",
    },
    {
      question: "Can you revise my manuscript based on reviewer comments?",
      answer:
        "Yes! We integrate manuscript revisions along with response drafting for seamless resubmission.",
    },
    {
      question: "Do you assist with resubmission to multiple journals?",
      answer:
        "Yes! We offer multi-journal resubmission strategies if your paper requires submission to an alternative journal.",
    },
    {
      question: "Do you help with formatting the response letter?",
      answer:
        "Yes! We ensure that the response letter follows the journal’s required structure, language, and submission format.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your manuscript & reviewer comments, and our scientific writing experts will craft a professional response letter.",
    },
  ];

  return (
    <>
      <section style={{ marginTop: "40px" }}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Professional Response to Reviewers Service – Get Your Paper Accepted
            Faster
          </h1>
          <p className={styles.subtext}>
            Increase your chances of journal acceptance with a professionally
            crafted response to reviewers. Our experts provide structured,
            respectful, and scientifically sound responses, ensuring a smooth
            resubmission process.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() =>
                (window.location.href =
                  "https://secure.manuscriptedit.com/quotation")
              }
            >
              Get Reviewer Response Assistance
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
            Why Choose Our Response to Reviewers Service?
          </h2>
          <p className={styles.subtext}>
            <strong>
              ManuscriptEdit’s Reviewer Response Services help you craft the
              perfect responses to journal reviewers to enhance your chances of
              acceptance. Our key benefits include:
            </strong>
          </p>
          <ul className={styles.benefitsList}>
            <li>
              ✔ Expert Review Response Drafting – Ensuring clear, structured,
              and scientifically accurate responses.
            </li>
            <li>
              ✔ Respectful & Persuasive Language – Addressing reviewers’
              concerns professionally and effectively.
            </li>
            <li>
              ✔ Journal-Specific Compliance – Adapting responses to Elsevier,
              Springer, Wiley, BMJ, PLOS ONE, IEEE, and other high-impact
              journals.
            </li>
            <li>
              ✔ Manuscript Revision Support – Assisting with clarifications,
              rebuttals, and suggested modifications.
            </li>
            <li>
              ✔ Fast Turnaround & Resubmission Tracking – Ensuring timely
              responses to avoid unnecessary delays.
            </li>
          </ul>
          <button
            className={styles.primaryButton}
            style={{ marginTop: "1.5rem" }}
            onClick={() =>
              (window.location.href =
                "https://secure.manuscriptedit.com/quotation")
            }
          >
            Learn More About Our Response to Reviewers Process
          </button>
        </div>
      </section>

      <section className="editing-overview-section">
        <h2 className="editing-overview-heading">
          Our Response to Reviewers Services
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
              <td>Basic Reviewer Response Drafting</td>
              <td>Researchers addressing minor revisions</td>
              <td>
                Polite, structured, and concise responses, Formatting according
                to journal guidelines
              </td>
              <td>3-5 Days</td>
            </tr>
            <tr>
              <td>Advanced Response Letter Writing</td>
              <td>Authors responding to major revisions</td>
              <td>
                Scientific justifications, Citation-backed explanations, Clear
                rebuttal formatting
              </td>
              <td>5-7 Days</td>
            </tr>
            <tr>
              <td>Reviewer Response & Manuscript Revision</td>
              <td>Researchers needing content modifications</td>
              <td>
                Integrated manuscript edits, Enhanced scientific clarity,
                Compliance with reviewer requests
              </td>
              <td>5-10 Days</td>
            </tr>
            <tr>
              <td>Resubmission & Editor Communication</td>
              <td>Authors submitting final revisions</td>
              <td>
                Cover letter assistance, Final compliance check, Editorial query
                handling
              </td>
              <td>4-6 Days</td>
            </tr>
            <tr>
              <td>Multiple Reviewer Response Assistance</td>
              <td>Papers with extensive reviewer comments</td>
              <td>
                Multi-reviewer response coordination, Consistent argumentation
                across responses
              </td>
              <td>7-10 Days</td>
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
          Compare Reviewer Response Services
        </button>
      </section>

      <div className={styles.processContainer}>
        <h2 className={styles.processTitle}>
          Response to Reviewers Process – <br />
          How We Ensure Accuracy & Persuasiveness
        </h2>
        <div className={styles.processSteps1}>
          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 1:</h5>
            <FontAwesomeIcon
              icon={faFileUpload}
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Reviewing Reviewer Comments & Journal Guidelines – Identifying
              critical and minor concerns raised by peer reviewers.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 2:</h5>
            <FontAwesomeIcon
              icon={faSearch}
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Structuring & Drafting a Scientifically Persuasive Response –
              Crafting clear, respectful, and evidence-backed replies.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 3:</h5>
            <FontAwesomeIcon
              icon={faEdit}
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Manuscript Edits & Supporting Data Inclusion – Making necessary
              changes to the manuscript and providing scientific justifications.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 4:</h5>
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Formatting & Final Proofreading of Response Letter – Ensuring
              journal compliance and structured response formatting.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 5:</h5>
            <FontAwesomeIcon
              icon={faPaperPlane}
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Submission & Editor Communication Handling – Assisting with
              resubmission, final reviewer clarifications, and editorial
              queries.
            </h3>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <a href="https://secure.manuscriptedit.com/quotation">
            <button className={styles.primaryButton}>
              Start Your Reviewer Response Process
            </button>
          </a>
        </div>
      </div>

      <section className="before-after-example-section">
        <h2 className="before-after-example-heading">
          Before & After Response to Reviewers Assistance – See the Difference
        </h2>

        <div className="before-after-example-content">
          <div className="before-example">
            <h3>Before (Unstructured & Weakly Justified Response):</h3>
            <p className="before-text">
              “Reviewer 2 suggested revising the introduction to include more
              background on X. We disagree but have added one more sentence to
              clarify the concept.”
            </p>
          </div>

          <div className="after-example">
            <h3>
              After (Professionally Crafted & Scientifically Persuasive
              Response):
            </h3>
            <p className="after-text">
              “We thank Reviewer 2 for their insightful comment. To enhance
              clarity, we have revised the introduction (Page 3, Lines 18–22) to
              provide additional background on X, citing relevant literature
              (Smith et al., 2023). This change improves context and strengthens
              the manuscript.”
            </p>
          </div>
        </div>

        <div className="explanation">
          <p>
            Professional Response to Reviewers increases acceptance rates and
            avoids unnecessary rejections.
          </p>
        </div>

        <div className="cta-container">
          <a
            href="https://secure.manuscriptedit.com/quotation"
            className="cta-button"
          >
            Request a Sample Reviewer Response Letter
          </a>
        </div>
      </section>

      <section className="pricing-turnaround-section">
        <h2 className="pricing-turnaround-heading">
          Response to Reviewers Assistance – Pricing and Turnaround Time
        </h2>

        <div className="pricing-details">
          <div className="pricing-item">
            <h3>Starting Price</h3>
            <p className="pricing-text">
              $100 (Basic Response Drafting) – $350 (Full Manuscript Revision &
              Resubmission Assistance)
            </p>
          </div>

          <div className="delivery-item">
            <h3>Turnaround Time</h3>
            <p className="delivery-time">
              3 Days – 10 Days (Depending on complexity)
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
                  "	https://manuscriptedit.com/_next/static/media/ad.9cd4964a.jpeg",
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
              Common Questions About Response to Reviewers Services
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
