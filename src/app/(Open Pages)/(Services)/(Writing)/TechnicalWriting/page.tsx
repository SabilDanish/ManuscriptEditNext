"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
// import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
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

const newData: { [key: string]: { [key: string]: string } } = data;

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
        "Requirement Analysis & Research – Understanding the target audience & project scope.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Content Structuring & Drafting – Developing clear, structured, and logical document flow.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Technical Accuracy Check – Ensuring compliance with industry guidelines & technical clarity.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Formatting & Quality Assurance – Delivering well-structured, formatted, and proofed documentation.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Final Review & Revisions – Submission-ready technical documents with revision support.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "What industries do you specialize in for technical writing?",
      answer:
        "We provide technical writing services for IT, engineering, healthcare, manufacturing, software, and regulatory industries.",
    },
    {
      question: "Can you format documents for industry standards?",
      answer:
        "Yes! We ensure compliance with IEEE, ISO, API, FDA, and other industry-specific standards.",
    },
    {
      question:
        "Do you provide revisions after delivering technical documents?",
      answer:
        "Yes, we offer free minor revisions within 14 days to ensure document accuracy and clarity.",
    },
    {
      question: "Can you handle highly complex, confidential projects?",
      answer:
        "Yes, we sign NDAs and ensure secure data handling for proprietary projects.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your project details, and our technical writing experts will develop a structured, high-quality document.",
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
      {/* {breadcrum("Services / Writing", "Medical Writing")} */}

      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Technical Writing Assistance- Precision, Clarity
              &amp; Industry Compliance
            </h1>
            <p className={styles.subtext}>
              Get expert technical writing assistance for manuals, user guides,
              reports, and technical documentation tailored to IEEE, ISO, API,
              and corporate standards. Our expert technical writers ensure
              clarity, accuracy, and compliance, making complex information easy
              for end users to understand.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.primaryButton}>
                  Get Technical Writing Services
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
              Key Benefits of ManuscriptEdit’s Technical Writing Services:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Expert Technical Writers – Specialists in engineering, IT,
                software, and industrial documentation.
              </li>
              <li>
                ✅ Accurate & Well-Structured Content – Ensuring readability,
                usability, and technical precision for end users.
              </li>
              <li>
                ✅ Industry-Specific Formatting & Compliance – Adherence to
                IEEE, ISO, API, and corporate standards.
              </li>
              <li>
                ✅ Technical Documentation Services – User manuals, API
                documentation, whitepapers, SOPs, and training guides.
              </li>
              <li>
                ✅ Fast Turnaround & Secure Handling – NDA-compliant services
                with confidential data protection.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              Our Technical Writing Services
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
                  <td>User Manuals & Guides</td>
                  <td>Software & Hardware Documentation</td>
                  <td>
                    Step-by-step instructions, Clear, user-friendly formatting
                  </td>
                  <td> 5-7 Days</td>
                </tr>
                <tr>
                  <td>Whitepapers & Technical Reports</td>
                  <td>Research & Industry Papers</td>
                  <td>Data-driven insights, Industry compliance</td>
                  <td> 7-10 Days</td>
                </tr>
                <tr>
                  <td>Standard Operating Procedures (SOPs)</td>
                  <td>Businesses & Manufacturing</td>
                  <td>Regulatory compliance, Process flow documentation</td>
                  <td> 6-9 Days</td>
                </tr>
                <tr>
                  <td>API Documentation</td>
                  <td>Software Developers & Engineers</td>
                  <td>
                    REST API & SDK documentation, Code examples & guidelines
                  </td>
                  <td> 5-10 Days</td>
                </tr>
                <tr>
                  <td>Technical Proposals & RFPs</td>
                  <td>B2B & Government Tenders</td>
                  <td>
                    Persuasive & structured, Compliance with tender guidelines
                  </td>
                  <td> 7-12 Days</td>
                </tr>
                <tr>
                  <td>Patent Writing & Technical Descriptions</td>
                  <td>Inventors & R&D Teams</td>
                  <td>
                    Patent drafting & claims, Intellectual property
                    documentation
                  </td>
                  <td> 10-15 Days</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>
            Technical Writing Process – How We Ensure Accuracy & Compliance
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
                Start Your Technical Writing Project
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before & After Technical Writing – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>
                  Before (Unstructured Technical Notes with Jargon Overload):
                </h3>
                <p className="before-text">
                  “The software enables communication using protocols, with
                  integration options. Configuration can be adjusted for optimal
                  performance.”
                </p>
              </div>

              <div className="after-example">
                <h3>
                  After (Professionally Written, Structured Technical Document):
                </h3>
                <p className="after-text">
                  “The software supports secure communication over multiple
                  protocols, including HTTP, MQTT, and WebSockets. Users can
                  configure settings via the control panel to optimize
                  performance based on network requirements.”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Technical Writing ensures clarity, usability, and compliance.
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
                <p className="pricing-text">$0.12 per word (User Manuals)</p>
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
                  Turnaround Time: 5 Days – 15 Days (Depending on complexity)
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
