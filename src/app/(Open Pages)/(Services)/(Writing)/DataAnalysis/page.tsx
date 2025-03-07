"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
// import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
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
        "Consultation & Project Scope Definition – Understanding research objectives & dataset complexity.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Data Collection & Cleaning – Preparing datasets for analysis by removing inconsistencies.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Applying Statistical & Computational Methods – Using software-based algorithms and models.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Interpretation & Visualization – Generating graphs, charts, and detailed reports.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Final Review & Revisions – Ensuring statistical accuracy & research compliance.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "What statistical tools do you use?",
      answer:
        "We use SPSS, R, Python, SAS, MATLAB, Stata, NVivo, and other advanced tools.",
    },
    {
      question: "Can you handle large datasets for big data analysis?",
      answer:
        "Yes! We offer big data processing, visualization, and AI-powered insights.",
    },
    {
      question: "Do you provide raw data along with reports?",
      answer:
        "Yes, we provide both the analyzed dataset and structured reports.",
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
              Professional Data Analysis Services- Statistical &amp;
              Computational Expertise
            </h1>
            <p className={styles.subtext}>
              Transform raw data into meaningful insights with our expert data
              analysis services. Our specialists excel in data editing, data
              cleaning, and data testing, ensuring that your dataset is
              error-free and ready for research. We apply advanced data analysis
              plans using statistical techniques, machine learning, and
              quantitative methods to help you effectively analyze complex data
              while maintaining strict data confidentiality and security.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.primaryButton}>
                  Remove AI Content Now
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
            <h2 className={styles.heading}>Key Benefits:</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Expert Data Analysts, Data Scientists & Statisticians – Our
                team includes PhD-level statisticians, engineers, and analysts
                specializing in data interpretation and complex data analysis.
              </li>
              <li>
                ✅ Comprehensive Data Analysis Plan – Utilizing SPSS, R, Python,
                MATLAB, SAS, Stata, and NVivo to efficiently process and analyze
                raw data.
              </li>
              <li>
                ✅ Custom Data Reports & Visualization – Delivering clear,
                easy-to-understand insights through graphs, tables, and
                interactive dashboards.
              </li>
              <li>
                ✅ Confidential & Secure Data Handling – Guaranteed 100% data
                security and confidentiality with encrypted storage and
                processing.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>Our Data Analysis Services</h2>
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
                  <td>Statistical Data Analysis</td>
                  <td>Researchers & Academics</td>
                  <td>
                    Hypothesis testing, Statistical modeling, Data
                    interpretation
                  </td>
                  <td> 5-7 Days</td>
                </tr>
                <tr>
                  <td>Clinical Data Analysis</td>
                  <td>Healthcare & Pharma</td>
                  <td>
                    Biostatistics, Clinical trial data validation, Drug efficacy
                    studies
                  </td>
                  <td> 7-10 Days</td>
                </tr>
                <tr>
                  <td>Machine Learning & AI-Based Analysis</td>
                  <td>AI & Big Data Research</td>
                  <td>Predictive analytics, Data mining, Deep learning</td>
                  <td> 7-12 Days</td>
                </tr>
                <tr>
                  <td>Survey Data Analysis</td>
                  <td>Market Researchers</td>
                  <td>
                    Qualitative & quantitative analysis, Sentiment analysis
                  </td>
                  <td> 5-7 Days</td>
                </tr>
                <tr>
                  <td>Big Data Processing</td>
                  <td>Businesses & Enterprises</td>
                  <td>
                    Data cleaning, Trend forecasting, Business intelligence
                  </td>
                  <td> 10-15 Days</td>
                </tr>
                <tr>
                  <td>Qualitative Research Analysis</td>
                  <td>Social Science & Behavioral Studies</td>
                  <td>NVivo-based thematic analysis, Text mining</td>
                  <td> 6-9 Days</td>
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
                Start Your Data Analysis Service Now
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before and After Example
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Raw Data with No Structure):</h3>
                <p className="before-text">
                  “Survey conducted on 1,500 participants, with responses
                  collected on education preferences. Data in Excel sheets with
                  no structure.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Professional Data Analysis & Visualization):</h3>
                <p className="after-text">
                  “The study analyzed survey responses from 1,500 participants
                  using sentiment analysis and logistic regression. Findings
                  indicate a 65% preference for online learning, with a
                  correlation coefficient of 0.78 .”
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
                  $0.12 per data point (Statistical Analysis){" "}
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.20 per data point (Advanced Machine Learning)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  5 Days – 15 Days (Depending on complexity)
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
