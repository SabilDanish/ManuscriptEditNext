'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from 'next/navigation'
import { data } from '../../../../utils/metaFile.js'
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
const newData: {[key: string]: {[key: string]: string}} = data;
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
    const pathName: string = usePathname().split("/").filter(val => val).join("")
    let metaData = newData[pathName]
    const steps = [
        {
          stepss: "Step 1 ➔",
          icon: faFileUpload,
          title:
            "Submit Your Manuscript for Plagiarism Screening – Upload your document for a detailed Turnitin/iThenticate report.",
        },
        {
          stepss: "Step 2 ➔",
          icon: faSearch,
          title:
            "Plagiarism Analysis & Similarity Score Breakdown – Identifying high-risk areas, citations, and originality concerns.",
        },
        {
          stepss: "Step 3 ➔",
          icon: faEdit,
          title:
            "Paraphrasing & Rewriting for Plagiarism Reduction – Ensuring manual rewriting to maintain research integrity.",
        },
        {
          stepss: "Step 4 ➔",
          icon: faCheckCircle,
          title:
            "Citation & Reference Check for Proper Attribution – Formatting citations to APA, MLA, IEEE, and other journal styles.",
        },
        {
          stepss: "Step 5 ➔",
          icon: faCheckCircle,
          title:
            "Final Review & Submission-Ready Manuscript – Delivering a plagiarism-free, journal-compliant document.",
        },
      ];
    
      const accord2: { question: string; answer: string }[] = [
        {
          question: "What plagiarism detection tools do you use?",
          answer:
            "We use Turnitin, iThenticate, and other leading plagiarism detection software to ensure accuracy.",
        },
        {
          question: "Will paraphrasing affect the meaning of my research?",
          answer:
            "No! Our expert editors ensure clarity and originality without changing scientific accuracy.",
        },
        {
          question: "Can you reduce plagiarism below 10% for journal submission?",
          answer:
            "Yes! We aim for less than 10% similarity, making your manuscript journal-ready.",
        },
        {
          question: "Do you provide a plagiarism certificate?",
          answer:
            "Yes! We offer a Turnitin/iThenticate report confirming plagiarism reduction.",
        },
        {
          question: "How do I get started?",
          answer:
            "Simply upload your manuscript, and our plagiarism experts will perform a detailed similarity check and reduction.",
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
            Expert Academic & Scientific Translation Services – High-Quality, Accurate & Journal-Ready


            </h1>
            <p className={styles.subtext}>
            “Break language barriers and publish your research globally with our expert academic & scientific translation services. We provide journal-compliant translations in multiple languages with technical accuracy and linguistic precision.”
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>
                Get Substantive Editing Now
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
            <h2 className={styles.heading}>What is Substantive Editing?</h2>
            <p className={styles.subtext}>
              Substantive editing is a comprehensive review that refines the
              structure, logical flow, coherence, and clarity of a manuscript.
              It is designed to improve the readability and academic depth of
              research papers, dissertations, and journal submissions.
            </p>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Who Needs This Service?</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Researchers &amp; Scientists preparing high-impact journal
                submissions.
              </li>
              <li>
                ✅ PhD Candidates &amp; Academics refining dissertations and
                theses.
              </li>
              <li>
                ✅ Authors of Technical &amp; Research Reports ensuring clarity
                and precision.
              </li>
            </ul>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Key Benefits of Substantive Editing:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Strengthens logical coherence &amp; manuscript structure.
              </li>
              <li>✅ Enhances clarity, readability, and argumentation.</li>
              <li>✅ Refines academic tone &amp; eliminates redundancies.</li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              What Does Substantive Editing Cover?
            </h2>
            <table className="editing-overview-table">
              <thead>
                <tr>
                  <th>Editing Focus</th>
                  <th>What We Improve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Logical Structure</td>
                  <td>
                    Ensuring paragraphs and sections follow a well-organized
                    progression.
                  </td>
                </tr>
                <tr>
                  <td>Clarity & Readability</td>
                  <td>Refining complex sentences for better comprehension.</td>
                </tr>
                <tr>
                  <td>Argument Strengthening</td>
                  <td>
                    Enhancing claims with precise language and logical
                    consistency.
                  </td>
                </tr>
                <tr>
                  <td>Eliminating Redundancies</td>
                  <td>
                    Removing repetitive phrases and enhancing word economy.
                  </td>
                </tr>
                <tr>
                  <td>Grammar & Academic Style</td>
                  <td>
                    Ensuring grammatical accuracy and consistency in tone.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        {/* New Proofreading Details Section */}
        <section className={styles.proofreadingWrapper}>
        <h2 className={styles.headingCenter}>
        What Substantive Editing Does NOT Include:
        </h2>
        
          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>🚫 Not Included</h3>
            <ul className={styles.proofreadingList}>
              <li>❌New Research Content Addition – We do not add new data or findings.</li>
              <li>❌Heavy Rewriting – We improve clarity but maintain original content intent.</li>
              <li>❌ Formatting Adjustments – Journal-specific formatting is covered under our
              Manuscript Formatting Service.</li>
            </ul>
          </div>
          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>✔ Included</h3>

            <ul className={styles.proofreadingList}>
              <li>
                ✅ Structural Refinement: Improves organization, logical flow, and readability of the manuscript.
              </li>
              <li>
                ✅  Content Enhancement: Refines arguments, eliminates ambiguities, and strengthens clarity.
              </li>
              <li>✅  Language Polishing: Ensures consistent tone, precise language, and audience-specific terminology.</li>
              <li>
                ✅  Guideline Compliance: Aligns formatting, style, and visual elements with journal or publisher requirements.
              </li>
              <li>
                ✅  Reference Verification: Checks references for accuracy, completeness, and adherence to citation styles.
              </li>

              <li>
                ✅   Publication Readiness: Prepares the manuscript for peer review and maximizes acceptance potential.
              </li>
            </ul>
          </div>
        
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
              Get Proofreading Now
            </button>
          </div>

          <section className="editing-overview-section">
            <h2 className="editing-overview-heading">
              Why Choose Substantive Editing Over Other Editing Services?
            </h2>
            <table className="editing-overview-table">
              <thead>
                <tr>
                  <th>Your Document Stage</th>
                  <th>Best Service</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Final draft, minor grammar errors</td>
                  <td>Proofreading</td>
                  <td>
                    Eliminates spelling, punctuation, and minor grammar issues.
                  </td>
                </tr>
                <tr>
                  <td>Needs improved clarity &amp; readability</td>
                  <td>Copyediting</td>
                  <td>
                    Enhances readability and flow while maintaining content.
                  </td>
                </tr>
                <tr>
                  <td>Lacks coherence &amp; logical flow</td>
                  <td>Substantive Editing</td>
                  <td>
                    Strengthens structure, argument clarity, and logical
                    organization.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before and After Example
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Original Unedited Text):</h3>
                <p className="before-text">
                  “The research focus on climate change effects. The data shows
                  mixed results, while scientists argue about its impact, making
                  it complex.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Edited for Clarity &amp; Logical Flow):</h3>
                <p className="after-text">
                  “This research examines the effects of climate change. While
                  the data presents mixed results, scientists continue to debate
                  its long-term impact, highlighting the complexity of this
                  issue.”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Substantive Editing refines readability, strengthens argument
                clarity, and ensures logical consistency.
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
                <p className="pricing-text">$0.03 per word</p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">Two to four days</p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  Eight to twenty-four hours available at additional cost
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
              <h1 className="accordion__title">
                How can you prevent rejections?
                <br />
                <span style={{ fontSize: "1rem" }}>
                  7 reasons why you get rejected mostly, and find out how
                  Manuscriptedit services can help you out.
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
