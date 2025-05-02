"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
// import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import redirect from "@/app/_Common/_functionality/Redirect";
import { useState } from "react";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import "./Extensive.css";

const newData: {
  [key: string]: { [key: string]: string } | string;
} = data;
import {
  faFileUpload,
  faSearch,
  faEdit,
  faCheckCircle,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import DependantTabExtensiveSub from "@/app/_Common/DependantTabExtensiveSub/DependantTabExtensiveSub";

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
      title:
        "Expert editors analyze content depth, structure &amp; logical coherence.",
    },

    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Manuscript undergoes extensive revision for clarity, organization, and academic tone",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title: "Final refined manuscript is delivered for review.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title: "Free minor revisions within 14 days.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question:
        "How is Extensive Substantive Editing different from standard Substantive Editing?",
      answer:
        "Extensive Substantive Editing provides deeper revisions in terms of content structure, readability, and logical enhancement, making it ideal for manuscripts requiring significant refinement.",
    },
    {
      question: "Do you modify research findings?",
      answer:
        "No, we enhance clarity and structure without altering the author’s original research data.",
    },
    {
      question: "Can I request revisions after editing?",
      answer: "Yes, 14 days of free minor revisions are included.",
    },
    {
      question: "Do you provide journal formatting along with editing?",
      answer:
        "Journal-specific formatting is covered under our Formatting Services, which can be availed separately.",
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
      {/* {breadcrum("Services / English Editing", "Extensive Substantive Editing")} */}

      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Achieve High-Quality Manuscript Refinement with Extensive
              Substantive Editing
            </h1>
            <p className={styles.subtext}>
              Ensure your manuscript meets the highest academic and journal
              standards with our expert- led editing services. Our English
              editing and scientific editing specialists enhance your research
              with in-depth structural improvements, logical flow enhancement,
              and content clarity to maximize publication success.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.primaryButton}>
                  Get Extensive Substantive Editing Now
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

        <div
          className="proofreading-container container"
          style={{ marginTop: "40px" }}
        >
          <div className="proofreading-tab">Extensive Substantive editing</div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <ul className="service-list">
                  <li>✓ Thorough reading of manuscript.</li>
                  <li>✓ Spotting all errors.</li>
                  <li>✓ Review capitalization and punctuation.</li>
                  <li>✓ Check for spelling, grammar, and typos.</li>
                  <li>✓ Remove redundancies.</li>
                  <li>✓ Rectify improper word usage.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="service-list">
                  <li>
                    ✓ Verify scientific terminology, units, symbols, and
                    variables.
                  </li>
                  <li>
                    ✓ Rephrase & revise sentences for clarity and word choice.
                  </li>
                  <li>✓ Remove repetitions for logical presentation.</li>
                  <li>✓ Editing by Subject matter expert</li>
                </ul>
              </div>
              <button className="submit-btn">
                <a
                  href="https://secure.manuscriptedit.com/register"
                  style={{ color: "white" }}
                >
                  Submit Manuscript Now
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="container" style={{marginTop:'40px'}}>
          <DependantTabExtensiveSub />
        </div>

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              What is Extensive Substantive Editing?
            </h2>
            <p className={styles.subtext}>
              Extensive substantive editing is a professional editing service
              designed to refine your manuscript&#39;s language, formatting, and
              structure. Our scientific and academic editors improve clarity,
              coherence, and readability to meet journal submission and
              publication requirements.
            </p>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Who Needs This Service?</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Researchers &amp; academics preparing high-impact journal
                submissions.
              </li>
              <li>
                ✔ PhD candidates refining dissertations with extensive editorial
                feedback.
              </li>
              <li>
                ✔ Authors seeking publication in Q1 &amp; Q2 journals with
                rigorous editing services.
              </li>
            </ul>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Key Benefits of Extensive Substantive Editing:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Enhances manuscript clarity, structure, and logical flow.
              </li>
              <li>
                ✔ Ensures journal-specific formatting and compliance with
                publication standards.
              </li>
              <li>
                ✔ Strengthens sentence-level readability for a scholarly
                audience.
              </li>
              <li>
                ✔ Improves scientific and academic rigor for successful
                submission.
              </li>
            </ul>
          </div>
        </section>

        {/* New Proofreading Details Section */}
        <section className={styles.proofreadingWrapper}>
          <h2 className={styles.headingCenter}>
            What Does Extensive Substantive Editing Include?
          </h2>

          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>🚫 Not Included</h3>
            <ul className={styles.proofreadingList}>
              <li>
                ❌ Major Content Addition – We refine, but do not add new data
                or research findings.
              </li>
              <li>
                ❌ Ghostwriting – Your manuscript remains authentically authored
                by you.
              </li>
              <li>
                ❌Formatting for Specific Journals – This is covered under our
                Formatting Services.
              </li>
            </ul>
          </div>
          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>✔ Included</h3>

            <ul className={styles.proofreadingList}>
              <li>
                ✔ Comprehensive Structural Editing:Restructuring paragraphs for
                logical flow and clarity.
              </li>
              <li>
                ✔ Sentence-Level Refinement:Enhancing phrasing and eliminating
                ambiguity.
              </li>
              <li>
                ✔ Content Reorganization:Arranging ideas for improved
                readability and impact.
              </li>
              <li>
                ✔ Scientific &amp; Academic Language Polishing:Ensuring
                consistency, conciseness, and precision.
              </li>

              <li>
                ✔ Argument Strengthening:Strengthening claims with clear
                supporting evidence.
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
            <a href="https://secure.manuscriptedit.com/quotation">
              <button className={styles.primaryButton}>
                Get Proofreading Now
              </button>
            </a>
          </div>

          <section className="editing-overview-section">
            <h2 className="editing-overview-heading">
              Why Choose Extensive Substantive Editing Over Other Services?
            </h2>
            <table className="editing-overview-table">
              <thead>
                <tr>
                  <th>Manuscript Condition</th>
                  <th>Recommended Service</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Minor language issues &amp; typos</td>
                  <td>Proofreading</td>
                  <td>Ensures error-free final manuscript.</td>
                </tr>
                <tr>
                  <td>Need improved clarity &amp; readability</td>
                  <td>Copyediting</td>
                  <td>Enhances fluency and consistency.</td>
                </tr>
                <tr>
                  <td>Requires in-depth restructuring</td>
                  <td>Substantive Editing</td>
                  <td>Strengthens logical flow &amp; coherence.</td>
                </tr>

                <tr>
                  <td>Extensive content revision required</td>
                  <td>Extensive Substantive Editing</td>
                  <td>
                    Comprehensive improvement for high- impact publication.
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before &amp; After Extensive Substantive Editing – See the
              Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Original Unedited Text):</h3>
                <p className="before-text">
                  “This paper talk about artificial intelligence in healthcare.
                  Many researchers claim that it can replace traditional
                  methods, but still some doubts exist about the accuracy of AI
                  models.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Edited for Clarity &amp; Logical Flow):</h3>
                <p className="after-text">
                  “This study explores the role of artificial intelligence in
                  healthcare applications. While AI models have shown potential
                  in replacing traditional diagnostic methods, concerns
                  regarding accuracy and reliability remain a subject of ongoing
                  debate among researchers.”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Extensive Substantive Editing enhances structure, clarity, and
                the strength of academic arguments.
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
