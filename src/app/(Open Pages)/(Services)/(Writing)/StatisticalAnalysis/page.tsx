"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
// import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import { serviceData } from "@/app/utils/service";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Statistical.css";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
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
        "Understanding Research Objectives – Define statistical goals and variables.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Data Cleaning & Preparation – Remove inconsistencies, handle missing values.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Applying Statistical Models – Conduct hypothesis testing, regression, or multivariate analysis.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Data Interpretation & Visualization – Generate statistical summaries, graphs, and tables.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Review & Revisions – Final validation and refinements for publication.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "What statistical tools do you use?",
      answer:
        "We use SPSS, R, Python, MATLAB, SAS, Stata, NVivo, and other advanced tools.",
    },
    {
      question: "Can you help interpret my statistical results?",
      answer:
        "Yes! Our service includes detailed statistical interpretations and visualization.",
    },
    {
      question: "Do you provide raw data along with the reports?",
      answer:
        "Yes, we provide both the analyzed dataset and structured reports.",
    },
    {
      question: "What if I need modifications in the analysis?",
      answer:
        "We offer revisions and expert consultation to refine statistical findings.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your dataset, and our statisticians will conduct in-depth analysis.",
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
              Statistical Analysis Services- Data-Driven Accuracy &amp; Research
              Excellence
            </h1>
            <p className={styles.subtext}>
              Transform your raw data into scientifically validated insights
              with our expert statistical analysis services. We employ advanced
              methodologies to ensure precise, valid, and reproducible results
              for statistical analysis in research.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.primaryButton}>
                  Get Statistical Analysis Services
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

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Who Should Use This Service?</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Expert-Led Analysis – PhD statisticians specializing in
                statistical analysis across various fields.
              </li>
              <li>
                ✅ Advanced Statistical Methods – Expertise in ANOVA,
                Regression, Bayesian Modeling, T-tests, and more for
                comprehensive data analysis.
              </li>
              <li>
                ✅ Data Accuracy & Reliability – Ensuring valid, reproducible,
                and high-impact research results with precise statistical
                analysis.
              </li>
              <li>
                ✅ Publication-Ready Outputs – Well-structured graphs, tables,
                and interpretations tailored for research papers and journals.
              </li>
              <li>
                ✅ Confidentiality Guaranteed – Secure handling of research data
                with strict privacy policies to ensure complete data protection.
              </li>
            </ul>
          </div>
        </section>

        {/* New Proofreading Details Section */}

        <section className={styles.proofreadingWrapper}>
          <h2 className={styles.headingCenter}>
            Our Statistical Analysis Services
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
                <td>Descriptive Statistics</td>
                <td>Summarizing and visualizing research data</td>
                <td>Mean, median, variance, histograms</td>
                <td> 3-5 Days</td>
              </tr>
              <tr>
                <td>Inferential Statistics</td>
                <td>Hypothesis testing and drawing conclusions</td>
                <td>T-tests, Chi-square, ANOVA</td>
                <td> 5-7 Days</td>
              </tr>
              <tr>
                <td>Regression Analysis</td>
                <td>Identifying relationships between variables</td>
                <td>Linear, Logistic, Multiple Regression</td>
                <td> 5-8 Days</td>
              </tr>
              <tr>
                <td>Multivariate Analysis</td>
                <td>Handling complex datasets</td>
                <td>Factor analysis, PCA, MANOVA</td>
                <td> 6-9 Days</td>
              </tr>
              <tr>
                <td>Bayesian Statistics</td>
                <td>Probabilistic modeling and decision-making</td>
                <td>Bayesian inference, Markov Chains</td>
                <td> 7-10 Days</td>
              </tr>
              <tr>
                <td>Survival Analysis</td>
                <td>Medical and clinical research data</td>
                <td>Kaplan-Meier curves, Cox Regression</td>
                <td> 7-12 Days</td>
              </tr>
              <tr>
                <td>Time Series Analysis</td>
                <td>Forecasting trends and patterns</td>
                <td>ARIMA, GARCH, Exponential Smoothing</td>
                <td> 7-10 Days</td>
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
            <a href="https://manuscriptedit.com/QuotationNew/">
              <button className={styles.primaryButton}>
                Start Your Statistical Analysis Service Now
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before and After Example
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Raw Data with No Statistical Structure):</h3>
                <p className="before-text">
                  &quot;Dataset contains patient outcomes across 10 hospitals
                  but lacks structured statistical interpretation.&quot;
                </p>
              </div>

              <div className="after-example">
                <h3>
                  After (Expert Statistical Analysis &amp; Results
                  Interpretation):
                </h3>
                <p className="after-text">
                  &quot;A logistic regression model found a significant
                  association (p&lt;0.05) between patient recovery rates and
                  treatment type, with an odds ratio of 2.5, indicating a 2.5x
                  higher likelihood of recovery in Group A patients.&quot;
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
                <p className="pricing-text">
                  $0.12 per data point (Basic Statistical Analysis)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.20 per data point (Advanced Statistical Modeling)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  3 – 12 Days (Based on complexity and dataset size)
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
