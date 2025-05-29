"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
// import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import Metadata from "@/app/Metadata";
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

const newData: { [key: string]: { [key: string]: string } } = data;
import Link from "next/link";
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
      title: "Upload your manuscript securely through our portal.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title: "Expert editors assess content structure and readability.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title: "Manuscript is rewritten for clarity, fluency & logical flow.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title: "Final refined manuscript is delivered.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title: "Free minor revisions within 14 days.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "How is Rewriting different from Copyediting?",
      answer:
        "Rewriting involves extensive restructuring, whereas copyediting focuses on fluency and grammar correction.",
    },
    {
      question: "Do you guarantee plagiarism-free content?",
      answer:
        "Our rewriting process improves clarity and structure, but we do not guarantee plagiarism removal unless requested separately.",
    },
    {
      question: "Can I request revisions after rewriting?",
      answer: "Yes, 14 days of free minor revisions are included.",
    },
    {
      question: "Do you offer formatting along with rewriting?",
      answer:
        "Journal-specific formatting is covered under our Formatting Services, available separately.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your manuscript, and our editorial team will refine it for maximum clarity and impact.",
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
      {/* {breadcrum("Services / Writing", "ReWriting")} */}
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Rewriting Services- Enhance Clarity, Flow &amp;
              Readability
            </h1>
            <p className={styles.subtext}>
              Looking to refine your research manuscript? Our expert academic
              rewriting services improve clarity, coherence, and logical flow
              while eliminating redundancies. We restructure and enhance content
              without altering your original meaning, ensuring publication-ready
              quality for journals, dissertations, and professional reports.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.primaryButton}>
                  Get Rewriting Services Now
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

        <section className="info-section">
          <div className="container">
            <div className="row info-box">
              <div className="col-lg-6 left-box">
                <h6 className="info-title">When To Seek</h6>
                <ul className="info-list dark-list">
                  <li>Major part of writing is completed</li>
                  <li>
                    Need to add some more facts (background, literature,
                    discussion)
                  </li>
                  <li>Increasing or reducing word counts</li>
                  <li>Need major reorganization of the content</li>
                  <li>Polishing of languages</li>
                </ul>
              </div>
              <div className="col-lg-6 right-box">
                <h6 className="info-title light-text">What To Expect</h6>
                <ul className="info-list light-list">
                  <li>Identifying and filling the missing part</li>
                  <li>
                    Thorough literature review to look for the additional fact
                    and checking the authenticity of existing facts
                  </li>
                  <li>Document of recommended word count</li>
                  <li>Ensure logical flow throughout the content</li>
                  <li>
                    Lucid presentation in easily understandable error-free
                    English (American/British)
                  </li>
                  <li>Ensure adherence to the desired format</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>What is Rewriting?</h2>
            <p className={styles.subtext}>
              Academic rewriting involves a comprehensive manuscript revision to
              enhance readability, sentence structure, and content flow. Unlike
              proofreading or copyediting, rewriting ensures your content is
              logically structured, clear, and impactful, meeting journal and
              publication standards.
            </p>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Who Needs This Service?</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Researchers &amp; Academics revising manuscripts for
                high-impact journals.
              </li>
              <li>
                ✔ PhD candidates improving dissertation structure, clarity, and
                coherence.
              </li>
              <li>
                ✔ Authors &amp; Professionals refining white papers, reports,
                and technical documents.
              </li>
            </ul>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Key Benefits of Our Academic Rewriting Services:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Enhances clarity, sentence structure, and readability for a
                stronger academic impact.
              </li>
              <li>
                ✔Improves manuscript organization while preserving the original
                meaning.
              </li>
              <li>
                ✔ Optimized for journal submissions with precise tone, grammar,
                and style.
              </li>
            </ul>
          </div>
        </section>

        {/* New Proofreading Details Section */}
        <section className={styles.proofreadingWrapper}>
          <h2 className={styles.headingCenter}>What Does Rewriting Include?</h2>

          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>🚫 Not Included</h3>
            <ul className={styles.proofreadingList}>
              <li>
                ❌ Major Content Addition – We refine, but do not add new
                research data.
              </li>
              <li>
                ❌ Plagiarism Removal – We rewrite content but do not replace
                plagiarized sections without citation.
              </li>
              <li>
                ❌Formatting Adjustments – Journal-specific formatting is
                covered under our Formatting Services.
              </li>
            </ul>
          </div>
          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>✔ Included</h3>

            <ul className={styles.proofreadingList}>
              <li>
                ✔ Sentence Reformation Rewriting sentences for better
                readability and impact.
              </li>
              <li>
                ✔ Structural Improvement Adjusting paragraph flow for better
                logical coherence.
              </li>
              <li>
                ✔ Academic Tone Refinement Ensuring appropriate terminology an
                formal writing style.
              </li>
              <li>
                ✔ Clarity &amp; Conciseness Removing redundancy and improving
                sentence economy.
              </li>

              <li>
                ✔ Grammar &amp; Syntax Correction Polishing language for
                precision and fluency.
              </li>
            </ul>
          </div>
        </section>

        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>
            How the Extensive Substantive Editing Process Works
          </h2>
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
                Get Rewriting service Now
              </button>
            </a>
          </div>

          <section className="editing-overview-section">
            <h2 className="editing-overview-heading">
              Why Choose Rewriting Over Other Editing Services?
            </h2>
            <table className="editing-overview-table">
              <thead>
                <tr>
                  <th>Your Manuscript Condition</th>
                  <th>Recommended Service</th>
                  <th>Why?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Minor grammar &amp; spelling errors</td>
                  <td>Proofreading</td>
                  <td>Ensures error-free final manuscript.</td>
                </tr>
                <tr>
                  <td>Needs better readability &amp; fluency</td>
                  <td>Copyediting</td>
                  <td>Enhances fluency and consistency.</td>
                </tr>
                <tr>
                  <td>Requires restructuring &amp; sentence reformation</td>
                  <td>Substantive Editing</td>
                  <td>Strengthens logical flow &amp; coherence.</td>
                </tr>

                <tr>
                  <td>Significant restructuring &amp; content refinement</td>
                  <td>Extensive Substantive Editing</td>
                  <td>Deep content-level transformation for impact.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before &amp; After Rewriting – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Original Unedited Text):</h3>
                <p className="before-text">
                  “Climate change effects are debated among researchers. Some
                  studies say it’s dangerous, while others do not find
                  significant impact.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Rewritten for Clarity &amp; Logical Flow):</h3>
                <p className="after-text">
                  “The impact of climate change remains a subject of debate
                  among researchers. While some studies highlight its potential
                  dangers, others present data suggesting minimal effects.”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Rewriting improves sentence flow, eliminates ambiguity, and
                enhances readability.
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
                <p className="pricing-text">$0.07 per word</p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">4-6 days</p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  24-48 hours (additional cost applies)
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
              ].map((review, index) => (
                <div className="wcus-review" key={index}>
                  <img src={review.imgSrc} alt="Client" />
                  <p>
                    "{review.text}" - <strong>{review.name}</strong>
                  </p>
                </div>
              ))}
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
