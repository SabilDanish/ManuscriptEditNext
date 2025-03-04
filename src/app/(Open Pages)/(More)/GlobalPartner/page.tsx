"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import { usePathname } from "next/navigation";
// import { data } from "../../../../utils/metaFile.js";
import Metadata from "@/app/Metadata";
import { serviceData } from "@/app/utils/service.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
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

// const newData: { [key: string]: { [key: string]: string } } = data;

export default function Home() {
  const pathName: string = usePathname()
    .split("/")
    .filter((val) => val)
    .join("");
  // let metaData = newData[pathName];
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title:
        "Consultation & Project Scope Definition – Understand writing needs & target audience.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Data Collection & Research – Gathering evidence-based references.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Medical Writing & Drafting – Structured document creation by medical experts.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Review & Compliance Check – Ensuring adherence to medical writing standards.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Final Delivery & Revisions – Submission-ready medical content with free minor revisions.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "What regulations do you follow in medical writing?",
      answer:
        "We ensure compliance with ICH-GCP, FDA, EMA, COPE, and journal publishing standards.",
    },
    {
      question: "Can you assist with clinical trial documentation?",
      answer:
        "Yes! We provide protocols, case reports, regulatory submissions, and patient safety reports.",
    },
    {
      question: "Do you offer plagiarism checks?",
      answer:
        "Yes, all medical content is checked for plagiarism & originality using Turnitin and iThenticate.",
    },
    {
      question: "Can I request revisions after medical writing?",
      answer: "Yes, 14 days of free minor revisions are included.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your project details, and our expert medical writers will refine your manuscript.",
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
      {/* {<Metadata metaData={metaData} />} */}
      {/* {breadcrum("Services / Writing", "Medical Writing")} */}

      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Expert Medical Writing Services – Precision & Compliance for
              Healthcare & Research
            </h1>
            <p className={styles.subtext}>
              “ManuscriptEdit provides professional medical writing services for
              researchers, healthcare professionals, and pharmaceutical
              companies. Our medical writers ensure accuracy, compliance, and
              clarity in clinical research documents, regulatory submissions,
              and scientific publications.”
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.primaryButton}>
                  Get Medical Writing Services
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
            <h2 className={styles.heading}>
              Key Benefits of ManuscriptEdit’s Plagiarism Services:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Expert Medical Writers – PhD-qualified writers with
                backgrounds in medicine, life sciences, and healthcare.
              </li>
              <li>
                ✔ Regulatory & Compliance Expertise – Ensuring compliance with
                ICH-GCP, FDA, EMA, and COPE guidelines
              </li>
              <li>
                ✔ Accurate & Evidence-Based Content – Well-researched medical
                content with proper citations and data integrity.
              </li>
              <li>
                ✔ Custom Solutions for Healthcare & Pharma – Specialized writing
                services for clinical trials, regulatory submissions, and
                journal publications.
              </li>
              <li>
                ✔ Confidential & Secure Services – Guaranteed confidentiality
                for proprietary research and clinical data.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              Our Medical Writing Services
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
                  <td>Regulatory Medical Writing</td>
                  <td>Pharma & biotech companies</td>
                  <td>
                    Clinical trial protocols, FDA/EMA regulatory submissions
                  </td>
                  <td> 7-10 Days</td>
                </tr>
                <tr>
                  <td>Scientific Manuscript Writing</td>
                  <td>Researchers & academics</td>
                  <td>
                    Research articles, Systematic reviews, Journal submissions
                  </td>
                  <td> 5-7 Days</td>
                </tr>
                <tr>
                  <td>Clinical Study Reports (CSR)</td>
                  <td>Clinical researchers</td>
                  <td>Study design & methodology, Safety & efficacy reports</td>
                  <td> 7-12 Days</td>
                </tr>
                <tr>
                  <td>Medical Literature Review</td>
                  <td>Medical researchers</td>
                  <td>Evidence-based literature synthesis, Meta-analyses</td>
                  <td> 5-8 Days</td>
                </tr>
                <tr>
                  <td>Case Reports & Case Series</td>
                  <td>Clinicians & physicians</td>
                  <td>
                    Detailed patient case studies, Journal-compliant format
                  </td>
                  <td> 4-6 Days</td>
                </tr>
                <tr>
                  <td>Regulatory Submission Dossiers</td>
                  <td>Pharma & medical device companies</td>
                  <td>IND, NDA, ANDA, CTD dossiers, Compliance with ICH-GCP</td>
                  <td> 10-15 Days</td>
                </tr>
                <tr>
                  <td>Medical Blog & Content Writing</td>
                  <td>Healthcare organizations</td>
                  <td>Patient education, Disease awareness articles</td>
                  <td> 3-5 Days</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>
            Medical Writing Process – How We Ensure Accuracy & Compliance
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
                Start Your Medical Writing Project
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before & After Medical Writing – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Raw Scientific Data with Unclear Structure):</h3>
                <p className="before-text">
                  “This study about the new drug was done with 250 people. The
                  drug had some side effects, but it also worked well in
                  reducing symptoms.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Professionally Written Clinical Report):</h3>
                <p className="after-text">
                  “A randomized, placebo-controlled study was conducted with 250
                  participants to evaluate the efficacy and safety profile of
                  [Drug Name]. The treatment demonstrated significant symptom
                  reduction, with a manageable side effect profile.”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Medical Writing ensures accuracy, compliance, and scientific
                clarity.
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
                  $0.10 per word (Medical Blog Writing)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.20 per word (Regulatory Writing)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  Turnaround Time: 3 Days – 15 Days (Depending on service type)
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
