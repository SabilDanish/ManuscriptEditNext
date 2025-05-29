"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
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
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title:
        "Research Question Formulation – Defining the PICO (Population, Intervention, Comparison, Outcome) framework.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Database Search & Study Screening – Systematic search across PubMed, Cochrane, Scopus, Embase, Google Scholar.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Data Extraction & Evidence Synthesis – Summarizing clinical trials, observational studies, and qualitative research.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Meta-Analysis (If Required) – Applying GRADE, RoB 2, and statistical modeling for pooled analysis.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Writing, Formatting & Compliance Check – Delivering a publication-ready manuscript for submission.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "How do you ensure PRISMA compliance in systematic reviews?",
      answer:
        "We follow the PRISMA checklist, ensuring transparent reporting, structured methodology, and reproducibility.",
    },
    {
      question: "Can you handle large datasets for meta-analysis?",
      answer:
        "Yes! We use SPSS, RevMan, R, and Stata for meta-analytical studies and statistical modeling.",
    },
    {
      question: "Do you guarantee journal acceptance?",
      answer:
        "While we enhance manuscript quality and compliance, final acceptance depends on journal peer review policies.",
    },
    {
      question: "Can I request revisions after systematic review writing?",
      answer:
        "Yes, we offer free minor revisions within 14 days of report delivery.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your research question, and our systematic review experts will develop a structured, high-quality review.",
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
        content="Systematic Review Writing Services | ManuscriptEdit"
      />
      <meta
        name="description"
        content="Expert systematic review protocol development and manuscript drafting."
      />
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Systematic Review Writing- Evidence-Based, structured
              &amp; Journal-Ready
            </h1>
            <p className={styles.subtext}>
              Strengthen your research paper with a comprehensive systematic
              review. Our expert medical and scientific writers specialize in
              statistical analysis, conducting thorough literature analysis,
              data synthesis, and critical evaluation to ensure high-quality,
              journal-compliant systematic reviews.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.primaryButton}>
                  Get a Systematic Review Written
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
                <td>Systematic Review Writing</td>
                <td>Researchers, Clinicians, Academics</td>
                <td>
                  PRISMA &amp; Cochrane-compliant, Evidence-based literature
                  synthesis
                </td>
                <td> 10-15 Days</td>
              </tr>
              <tr>
                <td>Meta-Analysis &amp; Statistical Review</td>
                <td>Healthcare &amp; Pharma</td>
                <td>
                  Advanced data synthesis, Subgroup analysis, Publication-ready
                  tables &amp; figures
                </td>
                <td> 12-20 Days</td>
              </tr>
              <tr>
                <td>Database Search &amp; Study Selection</td>
                <td>Researchers conducting reviews</td>
                <td>
                  PubMed, Embase, Scopus, Cochrane search, PRISMA-guided
                  screening
                </td>
                <td> 7-10 Days</td>
              </tr>
              <tr>
                <td>Critical Appraisal &amp; Quality Assessment</td>
                <td>Clinical Decision-Making</td>
                <td>
                  GRADE, RoB 2, and AMSTAR-2 evaluation, Bias &amp; risk
                  assessment
                </td>
                <td> 7-12 Days</td>
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
                Start Your Systematic Review Service Now
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
                  Before (Unstructured Literature Summary Without Analysis):
                </h3>
                <p className="before-text">
                  “Several studies have examined the effectiveness of Drug A for
                  treating Disease X. Some reported positive results, while
                  others did not find significant differences.”
                </p>
              </div>

              <div className="after-example">
                <h3>
                  After (Professionally Written, PRISMA-Compliant Systematic
                  Review):
                </h3>
                <p className="after-text">
                  “A systematic review of 15 randomized controlled trials
                  (n=5,000) assessing Drug A for Disease X was conducted.
                  Meta-analysis revealed a significant reduction in symptom
                  severity (SMD -0.65, 95% CI -0.45 to -0.85), confirming
                  efficacy in moderate cases.”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Systematic Review Writing ensures clarity, scientific rigor, and
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
                  $0.15 per word (Basic Systematic Review)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.25 per word (Meta-Analysis & Statistical Review)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  10 Days – 20 Days (Depending on complexity)
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
