"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
const newData: { [key: string]: { [key: string]: string } } = data;
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
  let metaData = newData[pathName];
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title:
        "Upload Your Manuscript – Securely submit your document through our platform.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "AI Content Analysis – Advanced detection tools identify AI-generated sections.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Expert Human Revision – Professional editors rephrase identified content to ensure originality.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Receive Revised Manuscript – Obtain a polished document free from AI-generated text.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Optional Revisions – Request minor adjustments within 14 days at no extra cost.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "Why is removing AI-generated content important?",
      answer:
        "Leading journals prohibit AI-generated text without consent, and its inclusion can be deemed scientific misconduct.",
    },
    {
      question: "How do you detect AI-generated content?",
      answer:
        "We employ advanced detection tools capable of identifying AI-authored text with high accuracy.",
    },
    {
      question: "Will the meaning of my content change after AI reduction?",
      answer:
        "No, our editors ensure that the original intent and meaning are preserved during the revision process.",
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
              &quot;Ensure Authenticity with Our AI Reduction Service&quot;
            </h1>
            <p className={styles.subtext}>
              &quot;Enhance the credibility of your research by eliminating
              AI-generated traces, aligning with stringent academic and
              publication standards.&quot;
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.primaryButton}>
                  Remove AI Content Now
                </button>
              </a>

              <a href="https://secure.manuscriptedit.com/quotation">
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
            <h2 className={styles.heading}>What is AI Reduction?</h2>
            <p className={styles.subtext}>
              AI Reduction involves the meticulous identification and removal of
              AI-generated content from your manuscript, ensuring it reflects
              original human authorship. This process is crucial as leading
              scientific journals prohibit the use of AI-generated text without
              explicit editorial consent, considering its inclusion without
              approval as scientific misconduct.
            </p>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Who Should Use This Service?</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Researchers &amp; Academics – To comply with publication
                standards and avoid potential retractions.
              </li>
              <li>
                ✅ PhD &amp; MS Students – Ensuring theses and dissertations are
                free from unauthorized AI content.
              </li>
              <li>
                ✅ Authors &amp; Writers – Maintaining originality and
                credibility in their work.
              </li>
            </ul>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Key Benefits:</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Compliance with Publication Standards – Aligns your
                manuscript with journals&#39; strict guidelines against
                AI-generated content.
              </li>
              <li>
                ✅ Enhanced Credibility – Demonstrates commitment to authentic
                research and writing practices.
              </li>
              <li>
                ✅ Risk Mitigation – Reduces the possibility of manuscript
                rejection due to AI content detection.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              When Should You Choose AI Reduction?
            </h2>
            <table className="editing-overview-table">
              <thead>
                <tr>
                  <th>Your Document Status</th>
                  <th>Recommended Service</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Contains AI-generated sections</td>
                  <td>AI Reduction</td>
                  <td>Ensures compliance with publication ethics.</td>
                </tr>
                <tr>
                  <td>High similarity index due to non-AI sources</td>
                  <td>Plagiarism Check &amp; Reduction</td>
                  <td>Addresses content originality concerns.</td>
                </tr>
                <tr>
                  <td>Requires improvement in clarity and structure</td>
                  <td>Copyediting</td>
                  <td>Enhances readability and coherence.</td>
                </tr>
                <tr>
                  <td>Needs formatting per specific guidelines</td>
                  <td>Formatting Service</td>
                  <td>Aligns document with required standards.</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        {/* New Proofreading Details Section */}
        <section className={styles.proofreadingWrapper}>
          <h2 className={styles.headingCenter}>
            What Does Translation Service Include?
          </h2>

          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>🚫 Not Included</h3>
            <ul className={styles.proofreadingList}>
              <li>
                ❌Major Content Overhaul – Does not involve extensive rewriting
                beyond AI content removal.
              </li>
              <li>
                ❌Plagiarism Detection – Separate service focusing on
                non-AI-related content similarities.
              </li>
              <li>
                ❌ Formatting Adjustments – Formatting services are available
                separately.
              </li>
            </ul>
          </div>
          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>✔ Included</h3>

            <ul className={styles.proofreadingList}>
              <li>
                ✅ Comprehensive AI Content Detection – Utilizing advanced tools
                to identify AI- generated text within your document.
              </li>
              <li>
                ✅Human-Led Content Rewriting – Expert editors rephrase or
                replace AI-generated sections to ensure originality.
              </li>
              <li>
                ✅ Detailed Report – Provides insights into detected AI content
                and the modifications made.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.proofreadingWrapper}>
          <h2 className={styles.headingCenter}>
            How AI Reduction Compares to Other Services
          </h2>
          <table className="editing-overview-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Scope</th>
                <th>Ideal For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI Reduction</td>
                <td>Removes AI-generated content sections</td>
                <td>Manuscripts with AI-authored content</td>
              </tr>
              <tr>
                <td>Plagiarism Check &amp; Reduction</td>
                <td>Identifies and reduces non-AI content similarities</td>
                <td>Documents with potential unintentional plagiarism</td>
              </tr>
              <tr>
                <td>Copyediting</td>
                <td>Improves language, clarity, and flow</td>
                <td>Well-structured drafts needing refinement</td>
              </tr>
              <tr>
                <td>Substantive Editing</td>
                <td>In-depth editing for content and structure</td>
                <td>Early drafts requiring significant revisions</td>
              </tr>
            </tbody>
          </table>
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
            <a href="https://secure.manuscriptedit.com/quotation">
              <button className={styles.primaryButton}>
                Start  Now
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before and After Example
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (With AI-Generated Content):</h3>
                <p className="before-text">
                  &quot;The study&#39;s outcomes were significantly impacted by
                  the algorithm&#39;s performance, showcasing unprecedented
                  accuracy levels.&quot;
                </p>
              </div>

              <div className="after-example">
                <h3>After (Post AI Reduction):</h3>
                <p className="after-text">
                  &quot;Our analysis revealed that the algorithm&#39;s
                  performance markedly influenced the study&#39;s results,
                  demonstrating exceptional accuracy.&quot;
                </p>
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
                <p className="pricing-text">$0.06 per word</p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">3-5 business days</p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  24-48 hours (additional fees apply)
                </p>
              </div>
            </div>

            <div className={styles.buttonGroup}>
              <a
                href="https://secure.manuscriptedit.com/quotation"
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
