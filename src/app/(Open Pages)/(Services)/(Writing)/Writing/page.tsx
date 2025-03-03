"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import Metadata from "@/app/Metadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { serviceData } from "@/app/utils/service.js";
import "../../../../_Common/getHelp/getHelp.css";
import "./writingOverview.css";
import { useEffect, useState } from "react";
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
        "Understanding Your Requirements – Define objectives, target audience, and guidelines.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Research & Content Structuring – Develop a logical flow with clear sections.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Expert Feedback & Guidance – Receive mentorship on clarity, coherence, and writing style.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Review, Editing & Refinement – Ensure structure and academic compliance.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Final Quality Check – Verify research integrity and ethical standards.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "Do you write research papers for scholars?",
      answer:
        "No. We provide structured writing guidance and feedback to help scholars enhance their manuscripts while maintaining ethical research practices.",
    },
    {
      question: "Can you help with journal-specific formatting?",
      answer:
        "Absolutely! We tailor manuscripts to meet journal guidelines and submission standards.",
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes! We provide free minor revisions within 14 days of delivery.",
    },
    {
      question: "How do you ensure plagiarism-free content?",
      answer:
        "We guide scholars on proper citation practices and ensure compliance with Turnitin-based originality checks.",
    },
    {
      question: "Can you help with funding proposals?",
      answer:
        "Yes, our experts mentor scholars in structuring compelling research proposals.",
    },
];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const gap = {
    marginTop: "40px",
  };

  const [currency, setCurrency] = useState("");
  const LocationBasedPricing = () => {
    useEffect(() => {
      fetch("https://www.secure.manuscriptedit.com/api/ip_api.php")
        .then((response) => response.json())
        .then((data) => {
          const countryCode = data[0].countryCode;
          if (countryCode === "IN") {
            setCurrency("INR");
          } else {
            setCurrency("USD");
          }
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
        });
    }, []);
    return currency;
  };
  LocationBasedPricing();

  return (
    <>
      {<Metadata metaData={metaData} />}
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Writing Assistance – Expert Guidance for Research
              Excellence
            </h1>
            <p className={styles.subtext}>
              Refine your research writing with expert mentorship. We help
              scholars enhance clarity, structure, and impact while maintaining
              academic integrity.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.primaryButton}>
                  [Get Writing Guidance Now]
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
              Why Choose Our Writing Assistance Services?
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Expert-Led Research Guidance – PhD-level mentors across
                disciplines.
              </li>
              <li>
                ✅ Ethical Writing Support – Helping scholars improve structure,
                clarity, and coherence.
              </li>
              <li>
                ✅ Tailored to Your Needs – Personalized feedback and research
                support.
              </li>
              <li>
                ✅ Journal-Ready Writing – Ensuring compliance with academic and
                ethical standards.
              </li>
              <li>
                ✅ Strict Confidentiality – Your work remains secure and
                private.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              Our Writing Assistance Services
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
                  <td>Research Paper Guidance</td>
                  <td>Researchers & Academics</td>
                  <td>Structuring, refining, and improving academic papers</td>
                  <td>⏳ 10-15 Days</td>
                </tr>
                <tr>
                  <td>Thesis & Dissertation Support</td>
                  <td>PhD & MS Students</td>
                  <td>
                    Expert mentorship for logical structuring and coherence
                  </td>
                  <td>⏳ 15-30 Days</td>
                </tr>
                <tr>
                  <td>Review & Narrative Writing Assistance</td>
                  <td>Literature & Systematic Reviews</td>
                  <td>Critical analysis and writing refinement</td>
                  <td>⏳ 10-20 Days</td>
                </tr>
                <tr>
                  <td>Technical & White Paper Guidance</td>
                  <td>Engineers, Scientists, Businesses</td>
                  <td>
                    Structuring research for technical and industry reports
                  </td>
                  <td>⏳ 7-14 Days</td>
                </tr>
                <tr>
                  <td>Grant & Proposal Writing Support</td>
                  <td>Researchers & Academicians</td>
                  <td>
                    Helping scholars create compelling, well-organized proposals
                  </td>
                  <td>⏳ 7-12 Days</td>
                </tr>
                <tr>
                  <td>Book & Chapter Writing Assistance</td>
                  <td>Scholars & Authors</td>
                  <td>
                    Academic books, book chapters, and structured content
                    development
                  </td>
                  <td>⏳ 20-40 Days</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>
            Writing Process – Ensuring Quality &amp; Ethical Research Support
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
              Before &amp; After Writing Assistance – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Unstructured Manuscript Draft):</h3>
                <p className="before-text">
                  The research focuses on AI applications, but lacks proper flow
                  and citation integration. Some arguments appear unclear and
                  disconnected.
                </p>
              </div>

              <div className="after-example">
                <h3>After (Expertly Structured &amp; Refined Manuscript):</h3>
                <p className="after-text">
                  This study explores AI applications in medical diagnostics,
                  systematically presenting key advancements, supported by
                  recent peer-reviewed literature. The paper integrates
                  statistical findings to strengthen claims and ensure research
                  coherence.
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
                <p className="pricing-text">$0.08 per word (Writing Guidance)</p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                $0.15 per word
                (Comprehensive Research Support)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  Turnaround Time: 7 – 30 Days (Based on complexity and length)
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
