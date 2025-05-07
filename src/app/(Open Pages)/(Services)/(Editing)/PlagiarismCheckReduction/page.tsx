"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
const newData: { [key: string]: { [key: string]: string } } = data;
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import Head from "next/head";
import "./Plagarism.css";

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
      <Head>
        <link
          rel="canonical"
          href="https://manuscriptedit.com/PlagiarismCheckReduction/"
        />
      </Head>
      {<Metadata metaData={metaData} />}

      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Ensure Academic Integrity- Get a Comprehensive Plagiarism Check
              &amp; Report
            </h1>
            <p className={styles.subtext}>
              Enhance the originality of our research with our advanced
              Turnitin/iThenticate-powered plagiarism checker. Our high-accuracy
              plagiarism check for research papers ensures compliance with
              journal standards, safeguarding manuscript originality and
              academic integrity for successful publication.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.primaryButton}>
                  Check Your Plagiarism Now
                </button>
              </a>

              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.secondaryButton}>
                  Request a Free Consultation
                </button>
              </a>
            </div>
          </div>
        </section>

        <div
          className="proofreading-container container"
          style={{ marginTop: "40px" }}
        >
          <div className="proofreading-tab">Plagiarism check report.</div>

          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <ul className="service-list">
                  <li>
                    ✓ Identify significant overlaps in text with published and
                    in-press articles.
                  </li>
                  <li>✓ Reduction or elimination of plagiarized text.</li>
                  <li>✓ Ensuring no extent of overlap in text.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h4>What You Provide</h4>
                <ul className="service-list">
                  <li>✓ Manuscript in Microsoft word file.</li>
                </ul>
              </div>
              <button className="submit-btn">
                <a
                  href="https://manuscriptedit.com/AuthorDashboard/"
                  style={{ color: "white" }}
                >
                  Submit Manuscript Now
                </a>
              </button>
            </div>
          </div>
        </div>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Key Benefits of ManuscriptEdit’s Plagiarism Checker Services:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Advanced Plagiarism Detection with Turnitin/iThenticate- A
                reliable plagiarism checker for research papers, ensuring
                precise plagiarism detection for academic manuscripts.
              </li>
              <li>
                ✔ Comprehensive Plagiarism Check Report for Scientific Papers-
                Get a detailed similarity report &amp; expert feedback on
                plagiarism reports, including citations and paraphrasing issues.
              </li>
              <li>
                ✔ Manual Paraphrasing &amp; Citation Correction- Avoid
                plagiarism in research with professional citation, maintaining
                research authenticity.
              </li>
              <li>
                ✔ Journal-Specific Compliance &amp; Publication Support- Our
                journal plagiarism checker services align with Elsevier,
                Springer, Wiley, Scopus, Web of Science, and PubMed guidelines
                for smooth journal submission.
              </li>
              <li>
                ✔ Confidential, secure &amp; Ethical Process- We guarantee a
                plagiarism-free manuscript with complete privacy and publication
                support services for researchers.
              </li>
            </ul>
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
                  <td>Plagiarism Detection & Report</td>
                  <td>Researchers & students</td>
                  <td>
                    Turnitin/iThenticate similarity check
                    <br />
                    Detailed plagiarism report
                  </td>
                  <td>1-2 Days</td>
                </tr>
                <tr>
                  <td>Plagiarism Reduction (Paraphrasing & Rewriting)</td>
                  <td>Authors with high similarity scores</td>
                  <td>
                    Rewriting without loss of meaning
                    <br />
                    Proper citation enhancement
                  </td>
                  <td>3-5 Days</td>
                </tr>
                <tr>
                  <td>Citation Correction & Reference Formatting</td>
                  <td>Researchers ensuring academic integrity</td>
                  <td>Accurate APA, MLA, Chicago, IEEE citation formatting</td>
                  <td>2-4 Days</td>
                </tr>
                <tr>
                  <td>Journal Compliance Plagiarism Reduction</td>
                  <td>Authors submitting to high-impact journals</td>
                  <td>
                    AI-free, human-led plagiarism reduction
                    <br />
                    Ready for Scopus/Web of Science
                  </td>
                  <td>4-6 Days</td>
                </tr>
                <tr>
                  <td>Full Manuscript Plagiarism Check & Correction</td>
                  <td>Papers with extensive plagiarism</td>
                  <td>
                    Advanced sentence restructuring
                    <br />
                    Reference cross-checking
                  </td>
                  <td>5-7 Days</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>
            Plagiarism Check & Reduction Process – How We Ensure Originality
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
                Start Your Poster Design Project
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before & After Plagiarism Reduction – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (High Plagiarism, Unstructured Citation Use):</h3>
                <p className="before-text">
                  “The results of the study indicate a significant correlation
                  between X and Y (Smith, 2020), which has also been discussed
                  by other researchers in recent years (Brown et al., 2019).”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Proper Paraphrasing & Citation Enhancement):</h3>
                <p className="after-text">
                  “This study establishes a strong link between X and Y,
                  aligning with prior research findings (Smith, 2020). Other
                  studies have also confirmed similar patterns (Brown et al.,
                  2019), reinforcing these conclusions.”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Our plagiarism reduction ensures originality, proper citation,
                and journal compliance.
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
                  $0.05 per word (Basic Plagiarism Check){" "}
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.12 per word (Advanced Plagiarism Reduction & Rewriting)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  Turnaround Time: 1 Day – 7 Days (Depending on manuscript
                  complexity)
                </p>
              </div>
            </div>

            <div className="cta-container">
              <a
                href="https://manuscriptedit.com/QuotationNew/"
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
                      "https://manuscriptedit.com/_next/static/media/aa.5d969f42.jpg",
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
              <h1 className="accordion__title">FAQ</h1>

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
