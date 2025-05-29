"use client";

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
import Head from "next/head";

export default function Home() {
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title:
        "Understanding Research & Illustration Needs – Reviewing manuscript, target journal, and design preferences.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Scientific Figure Sketching & Concept Planning – Structuring raw data into a visually engaging format.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Graphical Abstract & Data Visualization Design – Enhancing clarity with high-quality illustrations.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Quality Check, Formatting & Resolution Enhancement – Ensuring journal-compliant, high-resolution graphics.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Final Proofing & Submission-Ready Illustration Delivery – Providing print-ready, digital formats for research use.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "What formats do you provide for illustrations?",
      answer:
        "We deliver high-resolution PNG, JPG, TIFF, AI, and vector-based formats suitable for print and digital submissions.",
    },
    {
      question: "Can you design figures for specific journals?",
      answer:
        "Yes! We create figures that comply with Elsevier, Springer, Wiley, Nature, and other journal formatting requirements.",
    },
    {
      question: "Do you create medical and life sciences illustrations?",
      answer:
        "Yes! Our medical illustrators specialize in anatomical, pharmaceutical, and biological diagrams.",
    },
    {
      question: "Will my illustrations be high-resolution and print-ready?",
      answer:
        "Absolutely! We ensure 300 DPI, vector-based illustrations optimized for research publication, conferences, and presentations.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your research details, and our illustration experts will create a high-quality, publication-ready scientific figure.",
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
          href="https://manuscriptedit.com/MedicalDesign/"
        />
      </Head>
      <meta
        name="title"
        content="Medical Illustration & Design | ManuscriptEdit"
      />
      <meta
        name="description"
        content="High-quality medical illustrations and design for papers and presentations."
      />
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Scientific Illustration &amp; Figure Formatting –
              High-Impact Visual Communication
            </h1>
            <p className={styles.subtext}>
              “Enhance your research presentation with expert figure formatting
              and scientific illustration services. Our professional
              illustrators specialize in artwork creation and enhancement to
              ensure editable illustrations that comply with journal
              guidelines.”
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.primaryButton}>
                  Get a Free Artwork Formatting Quote
                </button>
              </a>

              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.secondaryButton}>
                  Speak with an Illustration Expert
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Key Benefits of ManuscriptEdit’s Figure Formatting &amp; Artwork
              Creation Services:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Scientific Illustration and Artwork Formatting Services –
                Precise and detailed illustrations tailored for STEM, medical,
                social sciences, and business research.
              </li>
              <li>
                ✔Professional Figure Formatting for Research Manuscripts –
                Ensuring journal- compliant figures, graphs, and infographics
                are delivered in PDF, PPT, PNG, and AI formats.
              </li>
              <li>
                ✔ Formatting Figures to Match Journal Guidelines – Ensuring
                standard poster size, font, and layout recommendations comply
                with specific submission requirements.
              </li>
              <li>
                ✔ Fast Turnaround &amp; 100% Confidentiality – Secure,
                plagiarism-free artwork creation with timely delivery.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              Our Research Visualization Services
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
                  <td>Graphical Abstract Creation</td>
                  <td>Researchers submitting to journals</td>
                  <td>
                    Custom-designed research abstracts, Clear & visually
                    engaging
                  </td>
                  <td> 3-5 Days</td>
                </tr>
                <tr>
                  <td>Scientific Figure & Data Visualization</td>
                  <td>STEM & medical researchers</td>
                  <td>
                    High-resolution graphs, charts, Data clarity & structured
                    layouts
                  </td>
                  <td> 4-6 Days</td>
                </tr>
                <tr>
                  <td>Custom Research Diagrams & Infographics</td>
                  <td>Authors presenting complex data</td>
                  <td>Process flow diagrams, Thematic illustrations</td>
                  <td> 5-7 Days</td>
                </tr>
                <tr>
                  <td>Medical & Life Sciences Illustration</td>
                  <td>Medical professionals & pharma R&D</td>
                  <td>
                    Anatomical & biological illustrations, HIPAA-compliant
                    medical graphics
                  </td>
                  <td> 4-7 Days</td>
                </tr>
                <tr>
                  <td>Conference & Presentation Figures</td>
                  <td>Academics & industry researchers</td>
                  <td>
                    Slide-ready, engaging visuals, PowerPoint & digital formats
                  </td>
                  <td> 3-6 Days</td>
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
                Start Your Scientific Illustration Project
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before and After Example
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Basic, Unstructured Diagram):</h3>
                <p className="before-text">
                  “Our research model suggests that variable X influences
                  variable Y, leading to an outcome Z.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Professionally Designed Scientific Figure):</h3>
                <p className="after-text">
                  “A graphical representation of X-Y-Z interactions provides a
                  clearer, more structured view of the research findings (Fig.
                  1).”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Our expert illustrators ensure precise, structured, and
                journal-ready scientific visuals.
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
                <p className="pricing-text">$100 (Basic Graphical Abstract)</p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $500 (Advanced Scientific Figure with Custom Illustrations)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  3 Days – 10 Days (Depending on complexity)
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
                      " https://manuscriptedit.com/_next/static/media/ad.8a1b15bf.jpg",
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
              <a href="/Testimonial" className="cta-button">
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
