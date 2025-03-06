"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
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
        "Analyzing Citation Gaps & Research Visibility – Evaluating Google Scholar, Scopus, ORCID, and journal citations.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Metadata Optimization & DOI Structuring – Enhancing keywords, indexing, and research discoverability.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Cross-Referencing & Collaborative Networking – Expanding citation reach through strategic collaborations.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Academic SEO & Research Impact Strategies – Improving search rankings across scholarly databases.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title:
        "Citation Tracking & Long-Term Growth Strategy – Monitoring citations and updating optimization techniques.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "How do you increase my research citations?",
      answer:
        "We optimize Google Scholar, Scopus, ORCID, and other academic indexing profiles for better discoverability.",
    },
    {
      question: "Do you guarantee citation growth?",
      answer:
        "While we maximize research visibility, citation growth depends on content relevance and researcher engagement.",
    },
    {
      question: "How does metadata optimization improve citations?",
      answer:
        "Optimizing keywords, abstracts, and DOIs enhances search rankings and increases research discoverability.",
    },
    {
      question: "Can I use this service if my paper is already published?",
      answer:
        "Yes! We improve citation rates for both new and previously published papers.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your research details, and our citation experts will craft a personalized citation growth strategy.",
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
              Maximize Research Citations &amp; Academic Visibility
            </h1>
            <p className={styles.subtext}>
              Enhance the visibility, credibility, and impact of your research
              with our expert Citation Booster Services. We assist researchers
              in academic citation optimization, ensuring higher research
              discoverability and increased citations across leading platforms
              like Google Scholar, Scopus, and Web of Science. Our strategies
              focus on SEO visibility, DOI linking, and journal indexing to
              elevate your research impact.
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.primaryButton}>
                  Boost My Citations Now
                </button>
              </a>

              <a href="https://secure.manuscriptedit.com/quotation">
                <button className={styles.secondaryButton}>
                  Speak with a Citation Expert
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
            Key Benefits of ManuscriptEdit’s Citation Growth Services:
            </h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Google Scholar &amp; Scopus Citation Optimization – Boost academic discoverability
                across top indexing platforms.
              </li>
              <li>
                ✔ Metadata Enhancement for Academic Search Engines – Improve journal indexing,
                DOI linking, and SEO ranking for greater exposure.
              </li>
              <li>
                ✔ Cross-Referencing &amp; Collaboration Strategies – Expand citation potential through
                networking strategies and research impact analysis.
              </li>
              <li>
                ✔ Journal Visibility Enhancement – Ensure your paper is indexed in high-traffic
                databases to maximize citations.
              </li>
              <li>
                ✔ AI-Free &amp; Ethical Citation Growth Strategies – 100% compliant with academic
                integrity guidelines, ensuring credible research visibility.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              Our Research Visibility & Indexing Services
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
                  <td>Google Scholar & ORCID Optimization</td>
                  <td>Researchers increasing online presence</td>
                  <td>
                    Profile creation & enhancement, Linking research papers to
                    citations
                  </td>
                  <td> 3-5 Days</td>
                </tr>
                <tr>
                  <td>Scopus & Web of Science Indexing Support</td>
                  <td>Authors targeting indexed journals</td>
                  <td>Optimized indexing, Research profile enhancement</td>
                  <td> 5-7 Days</td>
                </tr>
                <tr>
                  <td>Academic SEO & Metadata Optimization</td>
                  <td>Published authors looking for increased visibility</td>
                  <td>
                    Keyword & metadata structuring, DOI linking &
                    cross-referencing
                  </td>
                  <td> 4-6 Days</td>
                </tr>
                <tr>
                  <td>Social & Academic Media Promotion</td>
                  <td>Authors needing wider engagement</td>
                  <td>
                    Research promotion on LinkedIn, ResearchGate, and
                    Academia.edu, Research community engagement
                  </td>
                  <td> 6-10 Days</td>
                </tr>
                <tr>
                  <td>Citation Growth Monitoring & Impact Analysis</td>
                  <td>Long-term academic reputation building</td>
                  <td>
                    Citation tracking, Strategy updates for maximum visibility
                  </td>
                  <td> Ongoing</td>
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
                Start Your Citation Growth Plan
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before & After Citation Booster – See the Difference
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Low Research Visibility & Citation Count):</h3>
                <p className="before-text">
                  “My research paper was published in a high-impact journal, but
                  it struggled to gain citations despite being valuable to my
                  field.”
                </p>
              </div>

              <div className="after-example">
                <h3>After (Optimized Citation Growth Strategy):</h3>
                <p className="after-text">
                  “After optimizing my Google Scholar and Scopus profile, along
                  with metadata enhancement, my research gained 40+ citations in
                  6 months, significantly improving its impact factor!”
                </p>
              </div>
            </div>

            <div className="explanation">
              <p>
                Our expert citation optimization ensures increased
                discoverability and academic credibility.
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
                  $100 (Basic Citation Optimization){" "}
                </p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">
                  $500 (Full Citation Growth Package with Long-Term Tracking)
                </p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  3 Days – 10 Days (Depending on research visibility needs)
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
