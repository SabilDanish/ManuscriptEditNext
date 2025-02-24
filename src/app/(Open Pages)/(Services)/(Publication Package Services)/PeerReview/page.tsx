"use client";
import Metadata from "@/app/Metadata";
import PeerForm from "@/app/_Common/PeerForm/PeerForm";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCheckCircle,
  faComments,
  faFileUpload,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const newData: { [key: string]: { [key: string]: string } } = data;

export default function Home() {
  let vari = "p < 0.05";
  const pathName: string = usePathname()
    .split("/")
    .filter((val) => val)
    .join("");
  let metaData = newData[pathName];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const accord2 = [
    {
      question: "How does peer review improve my manuscript?",
      answer:
        "Our peer review process enhances clarity, argument strength, formatting compliance, and overall quality, reducing rejection chances.",
    },
    {
      question: "Can I request specific journal formatting checks?",
      answer:
        "Yes! We ensure journal-specific formatting compliance in all pre-submission checks.",
    },
    {
      question: "What if I need revisions after peer review?",
      answer:
        "We offer free minor revisions within 14 days after delivering the review report.",
    },
    {
      question: "Do you help with journal response letters?",
      answer:
        "Yes! Our Reviewer Response Assistance service helps you draft effective responses to journal critiques.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your manuscript, select the review service, and get expert feedback tailored for journal submission.",
    },
  ];

  return (
    <>
      <meta
        name="title"
        content="Peer Review & Pre-Submission Services – Improve Your Research Before Submission"
      />
      <meta
        name="description"
        content="Enhance your manuscript with expert peer review & pre-submission services. Get detailed reviewer comments, journal compliance checks, and higher acceptance rates!"
      />
      <meta
        name="keywords"
        content="Peer Review Services for Researchers, Pre-Submission Editing & Formatting, Improve Manuscript Before Journal Submission, Reviewer Response Assistance for Academic Papers, Journal Compliance Check for Research Manuscripts."
      />
      <section style={{ marginTop: "40px" }}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Expert Peer Review & Pre-Submission Services – Strengthen Your
            Research Before Submission
          </h1>
          <p className={styles.subtext}>
            Maximize your chances of journal acceptance with our professional
            peer review and pre-submission services. Our expert reviewers assess
            your manuscript for clarity, structure, originality, and compliance
            with journal requirements.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() =>
                (window.location.href =
                  "https://secure.manuscriptedit.com/quotation")
              }
            >
              Get a Peer Review Now
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
            Why Choose Our Peer Review & Pre-Submission Services?
          </h2>
          <p className={styles.subtext}>
            <strong>
              ManuscriptEdit’s Peer Review & Pre-Submission Services are
              designed to optimize your manuscript before journal submission.
              Our key benefits include:
            </strong>
          </p>
          <ul className={styles.benefitsList}>
            <li>
              ✅ Experienced Subject-Matter Experts – Reviewers with PhDs &
              editorial experience in high-impact journals.
            </li>
            <li>
              ✅ In-Depth Manuscript Evaluation – Assessing research clarity,
              originality, argument coherence, and presentation quality.
            </li>
            <li>
              ✅ Journal-Specific Compliance – Checking word limits, reference
              formatting, and structural guidelines.
            </li>
            <li>
              ✅ Constructive Reviewer Comments – Detailed suggestions for
              strengthening weak arguments and improving clarity.
            </li>
            <li>
              ✅ Faster Journal Acceptance – Identifying & fixing common
              rejection reasons before submission.
            </li>
          </ul>
          <button
            className={styles.primaryButton}
            onClick={() =>
              (window.location.href =
                "https://secure.manuscriptedit.com/quotation")
            }
          >
            Learn More About Our Review Process
          </button>
        </div>
      </section>

      <section className="editing-overview-section">
        <h2 className="editing-overview-heading">
          Our Peer Review & Pre-Submission Services
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
              <td>Basic Peer Review</td>
              <td>Researchers seeking a quick review</td>
              <td>
                General manuscript evaluation, Minor improvement suggestions
              </td>
              <td>3-5 Days</td>
            </tr>
            <tr>
              <td>Advanced Peer Review</td>
              <td>Authors targeting high-impact journals</td>
              <td>
                Detailed reviewer comments, Structural improvement suggestions
              </td>
              <td>5-7 Days</td>
            </tr>
            <tr>
              <td>Journal-Specific Pre-Submission Check</td>
              <td>Researchers preparing final submission</td>
              <td>Compliance check, Formatting & structure verification</td>
              <td>3-5 Days</td>
            </tr>
            <tr>
              <td>Reviewer Response Assistance</td>
              <td>Authors responding to journal reviewers</td>
              <td>Rewriting responses, Addressing critiques professionally</td>
              <td>4-6 Days</td>
            </tr>
            <tr>
              <td>Resubmission Support</td>
              <td>Manuscripts previously rejected</td>
              <td>Addressing reviewer comments, Rewriting & restructuring</td>
              <td>7-10 Days</td>
            </tr>
          </tbody>
        </table>
        <button
          className={styles.primaryButton}
          style={{ marginTop: "40px" }}
          onClick={() =>
            (window.location.href =
              "https://secure.manuscriptedit.com/quotationn")
          }
        >
          Compare Review & Pre-Submission Services
        </button>
      </section>

      <div className={styles.processContainer}>
        <h2 className={styles.processTitle}>
          Peer Review Process – How We Strengthen Your Research
        </h2>
        <div className={styles.processSteps1}>
          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 1:</h5>
            <FontAwesomeIcon
              icon={faFileUpload} // Suitable for manuscript submission
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Manuscript Submission & Journal Selection – Upload your manuscript
              & mention the target journal.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 2:</h5>
            <FontAwesomeIcon
              icon={faUsers} // Suitable for expert peer review
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Expert Peer Review & Evaluation – Subject experts assess
              manuscript strengths & weaknesses.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 3:</h5>
            <FontAwesomeIcon
              icon={faComments} // Suitable for reviewer feedback
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Reviewer Feedback & Revision Suggestions – Comprehensive comments
              on structure, clarity & impact.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 4:</h5>
            <FontAwesomeIcon
              icon={faCheckCircle} // Suitable for compliance check
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Journal Compliance & Formatting Check – Ensuring adherence to
              submission guidelines.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 5:</h5>
            <FontAwesomeIcon
              icon={faCheck} // Suitable for final review and submission readiness
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Final Review & Revisions – Submission-ready manuscript with
              improved acceptance probability.
            </h3>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>
            Start Your Peer Review Now
          </button>
        </div>
      </div>

      <section className="before-after-example-section">
        <h2 className="before-after-example-heading">
          Before & After Peer Review – See the Difference
        </h2>

        <div className="before-after-example-content">
          <div className="before-example">
            <h3>Before (Raw Manuscript with Weak Argumentation & Errors):</h3>
            <p className="before-text">
              “The results of our study indicate that X has an effect on Y, but
              further research is needed to confirm this. The method was applied
              in 50 cases and seemed to work well.”
            </p>
          </div>

          <div className="after-example">
            <h3>
              After (Refined Manuscript with Peer Review Feedback Implemented):
            </h3>
            <p className="after-text">
              “Our study demonstrates a significant correlation between X and Y
              ({vari}). The methodology, applied to 50 cases, showed promising
              outcomes, warranting further exploration under controlled
              conditions.”
            </p>
          </div>
        </div>

        <div className="explanation">
          <p>
            Peer Review enhances clarity, scientific precision, and argument
            strength.
          </p>
        </div>

        <div className="cta-container">
          <a
            href="https://secure.manuscriptedit.com/quotation"
            className="cta-button"
          >
            Request a Sample Review Report
          </a>
        </div>
      </section>

      <section className="pricing-turnaround-section">
        <h2 className="pricing-turnaround-heading">
          Advanced Review & Resubmission Support – Pricing and Turnaround Time
        </h2>

        <div className="pricing-details">
          <div className="pricing-item">
            <h3>Starting Price</h3>
            <p className="pricing-text">
              $0.08 per word (Basic Review) – $0.15 per word (Advanced Review &
              Resubmission Support)
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
              Common Questions About Peer Review & Pre-Submission Services
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
