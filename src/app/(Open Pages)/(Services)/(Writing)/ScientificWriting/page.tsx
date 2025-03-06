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
        "Understanding Research Scope & Requirements – Identifying the research question, objectives, and journal selection.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Comprehensive Literature Review & Analysis – Integrating relevant references, background studies, and existing literature.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Manuscript Writing & Structuring – Developing a logically structured, argument-driven document.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Formatting, Editing & Compliance Check – Ensuring APA, MLA, Chicago, Harvard, and journal-specific guidelines.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Final Review & Submission Readiness – Delivering a publication-ready document with journal-compliant formatting.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "What types of academic documents do you write?",
      answer:
        "We provide writing assistance for research papers, dissertations, theses, grant proposals, whitepapers, and technical reports.",
    },
    {
      question: "Do you format academic papers for journal submission?",
      answer:
        "Yes! We ensure compliance with Elsevier, Springer, Wiley, BMJ, and PLOS submission guidelines.",
    },
    {
      question: "Can I request plagiarism-free, original content?",
      answer:
        "Yes! All manuscripts are 100% original, checked through Turnitin and iThenticate for plagiarism.",
    },
    {
      question: "Do you assist with rewriting rejected manuscripts?",
      answer:
        "Yes! We provide journal-specific manuscript restructuring, reviewer response assistance, and language polishing.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your research details, and our academic writing experts will develop a structured, high-quality document.",
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
              Professional Scientific &amp; Academic Writing Assistance- Get
              Your Research Paper Published
            </h1>
            <p className={styles.subtext}>
              Enhance your research with expert academic and scientific writing
              assistance. Our PhD- level subject matter experts provide
              error-free, well-structured, and impactful research papers,
              dissertations, and journal manuscripts tailored for high-impact
              publications like Elsevier, Springer, Wiley, and Nature.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.primaryButton}>
                  Get Writing Assistance
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
              Key Benefits of ManuscriptEdit’s Writing Assistance Services:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Expert PhD Academic & Scientific Writers – Specialists in
                STEM, humanities, social sciences, and medicine.
              </li>
              <li>
                ✅ Journal Manuscript Editing & Formatting – Ensuring compliance
                with Elsevier, Springer, Wiley, and Nature journal submission
                guidelines.
              </li>
              <li>
                ✅ Plagiarism-Free & Citation-Optimized Research Papers –
                Original, well-structured content with proper referencing in
                APA, MLA, Chicago, and IEEE citation styles.
              </li>
              <li>
                ✅ Dissertations & Thesis Writing Assistance – Tailored support
                for PhD dissertations and academic research for excellence.
              </li>
              <li>
                ✅ 100% Confidential & Secure – NDA-compliant services with
                guaranteed data privacy and security.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              Our Academic & Scientific Writing Services
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
                  <td>Research Paper Writing</td>
                  <td>Academics, Researchers</td>
                  <td>
                    High-impact journal manuscript writing, Structured,
                    citation-optimized content
                  </td>
                  <td> 10-15 Days</td>
                </tr>
                <tr>
                  <td>Thesis & Dissertation Writing</td>
                  <td>Master’s & PhD Students</td>
                  <td>
                    University-compliant formatting, Comprehensive research
                    structuring
                  </td>
                  <td> 15-25 Days</td>
                </tr>
                <tr>
                  <td>Grant Proposal Writing</td>
                  <td>Researchers & Institutions</td>
                  <td>
                    Persuasive & evidence-based proposals, Funding agency
                    compliance
                  </td>
                  <td> 12-20 Days</td>
                </tr>
                <tr>
                  <td>Conference Paper & Abstract Writing</td>
                  <td>Presentations & Seminars</td>
                  <td>
                    Clear, concise abstracts, Conference-ready manuscripts
                  </td>
                  <td> 5-10 Days</td>
                </tr>
                <tr>
                  <td>Technical & Scientific Report Writing</td>
                  <td>Corporate & R&D Teams</td>
                  <td>Structured industry reports, Data-driven analysis</td>
                  <td> 7-12 Days</td>
                </tr>
                <tr>
                  <td>Journal Response & Rewriting Assistance</td>
                  <td>Resubmission & Peer Review</td>
                  <td>
                    Addressing reviewer comments, Improving research impact
                  </td>
                  <td> 7-10 Days</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>
            Academic & Scientific Writing Process – How We Ensure Quality &
            Compliance
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
                Start Your Writing Project
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before & After Writing Assistance – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>
                  Before (Unstructured Research Manuscript Without Proper
                  Formatting):
                </h3>
                <p className="before-text">
                  “The study investigates the effects of drug X on disease Y.
                  Results show some positive effects, but more research is
                  needed. The sample size was 200, but some patients dropped
                  out.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Professionally Written, Structured Manuscript):</h3>
                <p className="after-text">
                  “This study evaluates the therapeutic effects of Drug X on
                  Disease Y in a randomized, placebo-controlled trial involving
                  200 patients. Results indicate a significant improvement in
                  clinical outcomes . Despite a dropout rate of 8%, findings
                  remain statistically robust, warranting further investigation
                  in larger cohorts.”
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
                  $0.12 per word (Basic Academic Writing)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $0.25 per word (Advanced Scientific Research Writing)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  Turnaround Time: 10 Days – 25 Days (Depending on complexity)
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
