"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import Head from "next/head";

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
        "Formulating Research Question & Objectives – Using PICO (Population, Intervention, Comparison, Outcome) framework.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Systematic Database Search & Study Screening – Retrieving data from PubMed, Cochrane, Scopus, Embase, Google Scholar.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Data Extraction & Standardization – Extracting key variables for effect size calculation & heterogeneity assessment.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Statistical Modeling & Meta-Analysis – Using RevMan, R, Stata, and SPSS for effect size & forest plot generation.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Writing, Formatting & Compliance Check – Delivering a publication-ready manuscript with statistical accuracy.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "How do you ensure PRISMA compliance in meta-analyses?",
      answer:
        "We follow the PRISMA checklist, ensuring transparent reporting, structured methodology, and reproducibility.",
    },
    {
      question:
        "Can you conduct advanced statistical modeling for my meta-analysis?",
      answer:
        "Yes! We use RevMan, R, Stata, SPSS, and Python for heterogeneity assessment, forest plots, and meta-regression.",
    },
    {
      question: "Do you guarantee journal acceptance?",
      answer:
        "While we enhance manuscript quality and compliance, final acceptance depends on journal peer review policies.",
    },
    {
      question: "Can I request revisions after meta-analysis writing?",
      answer:
        "Yes, we offer free minor revisions within 14 days of report delivery.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your research question, and our meta-analysis experts will develop a structured, high-quality review.",
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
    <meta
        name="title"
        content="Meta-Analysis Services | ManuscriptEdit"
      />
      <meta
        name="description"
        content="Rigorous meta-analysis with statistical pooling and interpretive insights."
      />
      <Head>
        <link rel="canonical" href="https://manuscriptedit.com/MetaAnalysis/" />
      </Head>
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Meta-Analysis Writing – Evidence-Based, Statistical &
              Journal-Ready
            </h1>
            <p className={styles.subtext}>
              “Strengthen your research with a high-quality meta-analysis. Our
              experts conduct statistical synthesis, effect size calculations,
              and critical evaluation to generate robust, evidence-based
              conclusions for publication in top-tier journals.”
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.primaryButton}>
                  Get a Meta-Analysis Written
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

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Key Benefits:</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Expert Biostatisticians & Medical Writers – PhD-level
                researchers with expertise in systematic reviews & statistical
                meta-analysis.
              </li>
              <li>
                ✔PRISMA & Cochrane-Compliant Methodology – Ensuring rigorous
                selection, data synthesis, and critical appraisal of literature.
              </li>
              <li>
                ✔ Advanced Statistical Modeling & Effect Size Calculation –
                Using RevMan, R, Stata, and SPSS for meta-analysis.
              </li>
              <li>
                ✔ Journal-Ready Manuscripts – Structured for submission in BMJ,
                The Lancet, JAMA, PLOS ONE, Cochrane Database, and Nature
                Reviews.
              </li>
              <li>
                ✔ Confidential & Secure Data Handling – HIPAA/GDPR-compliant
                services for patient safety and clinical data privacy.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>Service Comparison Table</h2>
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
                  <td>Meta-Analysis Writing</td>
                  <td>Researchers, Clinicians, Academics</td>
                  <td>
                    PRISMA &amp; Cochrane-compliant, Effect size &amp;
                    heterogeneity analysis
                  </td>
                  <td> 12-20 Days</td>
                </tr>
                <tr>
                  <td>Statistical Data Analysis &amp; Modeling</td>
                  <td>Healthcare &amp; Pharma</td>
                  <td>
                    Fixed/random effects models, Bias &amp; subgroup analysis,
                    Publication-ready graphs
                  </td>
                  <td> 12-25 Days</td>
                </tr>
                <tr>
                  <td>Database Search &amp; Study Selection</td>
                  <td>Researchers conducting meta-analyses</td>
                  <td>
                    Systematic literature screening, PubMed, Embase, Cochrane
                    search
                  </td>
                  <td> 7-10 Days</td>
                </tr>
                <tr>
                  <td>Critical Appraisal &amp; Bias Risk Assessment</td>
                  <td>Evidence-Based Medicine</td>
                  <td>
                    GRADE, RoB 2, AMSTAR-2, Sensitivity analysis &amp;
                    interpretation
                  </td>
                  <td> 10-15 Days</td>
                </tr>
                <tr>
                  <td>Journal Submission &amp; Peer Review Handling</td>
                  <td>Authors preparing for publication</td>
                  <td>
                    Formatting &amp; compliance, Response to reviewer comments
                  </td>
                  <td> 7-10 Days</td>
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
            <a href="https://manuscriptedit.com/QuotationNew/">
              <button className={styles.primaryButton}>
                Start Your Meta Analysis Service Now
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before and After Example
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>
                  Before (Unstructured Literature Summary Without Quantitative
                  Synthesis):
                </h3>
                <p className="before-text">
                  “Several studies have examined the effectiveness of Drug X for
                  treating Disease Y. Some reported positive results, while
                  others did not find significant differences.”
                </p>
              </div>

              <div className="after-example">
                <h3>
                  After (Professionally Written, PRISMA-Compliant
                  Meta-Analysis):
                </h3>
                <p className="after-text">
                  “A meta-analysis of 18 randomized controlled trials (n=7,000)
                  assessing Drug X for Disease Y was conducted. The pooled
                  effect size indicated a significant reduction in disease
                  severity (SMD -0.75, 95% CI -0.50 to -1.00, ). No major
                  publication bias was observed (Egger’s test, p=0.18).”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Meta-Analysis Writing ensures clarity, statistical rigor, and
                high-impact research synthesis.
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
                  $0.18 per word (Basic Meta-Analysis)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.30 per word (Advanced Statistical Modeling & Bias
                  Assessment)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  12 Days – 25 Days (Depending on complexity)
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
