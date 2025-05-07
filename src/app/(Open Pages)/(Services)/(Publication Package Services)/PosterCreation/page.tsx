"use client";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
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
        "Understanding Research & Design Preferences – Evaluating manuscript content, key findings, and audience needs.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Visual Structuring & Layout Planning – Designing a scientifically structured, visually appealing poster layout.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Data Visualization & Infographic Creation – Enhancing clarity with charts, graphs, and structured sections.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "High-Quality Graphic Refinement & Formatting – Ensuring conference-compliant, high-resolution output.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Final Proofing & Print-Ready Delivery – Providing error-free, presentation-ready posters.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "What formats do you deliver posters in?",
      answer:
        "We provide posters in PDF, PPT, PNG, JPG, and AI formats based on client preference.",
    },
    {
      question: "Do you create posters for specific conferences?",
      answer:
        "Yes! We design posters tailored to IEEE, APA, Scopus, Web of Science, Elsevier, and Springer conference guidelines.",
    },
    {
      question: "Can you include charts, graphs, and infographics?",
      answer:
        "Yes! We design custom charts, figures, and infographics to enhance research clarity.",
    },
    {
      question: "Will my poster be high-resolution and print-ready?",
      answer:
        "Yes! Our posters are high-resolution (300 DPI) and formatted for print and digital presentations.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your research details, and our design experts will craft a high-quality academic poster.",
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

      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
            Professional Scientific &amp; Academic Poster Design – High-Impact Research Presentations
            </h1>
            <p className={styles.subtext}>
            Transform your research findings into a visually compelling scientific poster with our expert
academic poster design services. We specialize in custom, high-resolution, and journal-
compliant research posters tailored for conferences, symposiums, and professional
presentations. We ensure your content is engaging, clear, and impactful, helping you
effectively communicate your research.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.primaryButton}>
                  Get a Free Poster Design Quote
                </button>
              </a>

              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.secondaryButton}>
                  Speak with a Design Expert
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
            Key Benefits of ManuscriptEdit’s Academic Poster Design Services:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Custom Scientific &amp; Academic Poster Design – Perfect for STEM, medical, social
                sciences, and business research presentations.
              </li>
              <li>
                ✔ High-Resolution &amp; Print-Ready Formats – Delivered in PDF, PPT, PNG, JPG, and AI
                formats for seamless printing and digital sharing.
              </li>
              <li>
                ✔ Engaging Visual Elements &amp; Graphics – Professionally designed charts, infographics,
                and illustrations for a clear and attractive presentation.
              </li>
              <li>
                ✔ Conference &amp; Journal Compliance – We ensure your research poster meets size, font,
                and layout guidelines for academic conferences.
              </li>
              <li>
                ✔ Fast Turnaround &amp; 100% Confidentiality – Secure, plagiarism-free, and timely poster
                creation for urgent conference submissions.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              Scientific & Academic Poster Design Process – How We Create
              Impactful Posters
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
                  <td>Conference Poster Design</td>
                  <td>Researchers presenting at international events</td>
                  <td>
                    High-resolution, visually engaging
                    <br />
                    Compliant with IEEE, APA, Elsevier guidelines
                  </td>
                  <td>3-5 Days</td>
                </tr>
                <tr>
                  <td>Graphical Abstract & Infographics</td>
                  <td>Authors submitting to journals</td>
                  <td>
                    Visual representation of complex research
                    <br />
                    Data visualization & structured layout
                  </td>
                  <td>4-6 Days</td>
                </tr>
                <tr>
                  <td>Medical & Scientific Poster Design</td>
                  <td>Life sciences, pharma, and medical researchers</td>
                  <td>
                    HIPAA-compliant medical visuals
                    <br />
                    Professional illustration & layout
                  </td>
                  <td>4-7 Days</td>
                </tr>
                <tr>
                  <td>Business & Industry Research Posters</td>
                  <td>Corporate researchers & R&D teams</td>
                  <td>
                    Infographic-based designs
                    <br />
                    Clear industry-standard presentation
                  </td>
                  <td>5-7 Days</td>
                </tr>
                <tr>
                  <td>Custom Illustration & Diagram Creation</td>
                  <td>Researchers needing custom visuals</td>
                  <td>
                    Hand-drawn & vector-based illustrations
                    <br />
                    Complex figure formatting
                  </td>
                  <td>5-10 Days</td>
                </tr>
              </tbody>
            </table>
          </section>
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
                Start Your Poster Design Project
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before & After Copyediting – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Basic, Unstructured Poster):</h3>
                <p className="before-text">
                  “Research on X shows that Y is highly influential in Z. The
                  data shows a significant impact, and more research is needed
                  to understand this effect further.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Professionally Designed Poster with Visuals):</h3>
                <p className="after-text">
                  “The findings of this research demonstrate the influence of Y
                  on Z, supported by a data-driven analysis (Fig. 1). This study
                  provides new insights into X with potential future
                  applications in [field].”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                **Our expert designers transform raw research into a clear,
                engaging, and visually impactful poster.
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
                <p className="pricing-text">$80 (Basic Poster)</p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $250 (Advanced Scientific Poster with Illustrations &
                  Infographics)
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
