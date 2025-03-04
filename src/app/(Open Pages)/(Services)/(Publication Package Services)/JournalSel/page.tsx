"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCheckCircle,
  faCogs,
  faEdit,
  faFileAlt,
  faFileUpload,
  faPaperPlane,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accord2 = [
    {
      question: "How do you select the best journal for my research?",
      answer:
        "We evaluate your research scope, study type, and target audience, then shortlist journals indexed in Scopus, Web of Science, and PubMed.",
    },
    {
      question: "Can you help me avoid predatory journals?",
      answer:
        "Yes! We screen all recommendations to eliminate predatory or unethical journals.",
    },
    {
      question: "Do you guarantee journal acceptance?",
      answer:
        "While we maximize compatibility and compliance, final acceptance depends on journal peer review policies.",
    },
    {
      question:
        "Do you help with manuscript formatting for journal submission?",
      answer:
        "Yes! We provide formatting, reference structuring, and cover letter writing services.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your manuscript, and our journal selection experts will recommend the best-fit journals.",
    },
  ];

  return (
    <>
      <meta
        name="title"
        content="Journal Selection Services – Find the Best Journal for Your Research"
      />
      <meta
        name="description"
        content="Get expert journal selection assistance for faster acceptance. We recommend Scopus, PubMed, and Web of Science-indexed journals tailored to your research."
      />
      <meta
        name="keywords"
        content="Journal Selection Services for Research Papers, Find the Best Journal for Publication, Scopus & Web of Science Journal Recommendations, Academic Journal Matching & Submission Assistance."
      />
      <section style={{ marginTop: "40px" }}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Find the Best Journal for Your Research – Expert Journal Selection
            Assistance
          </h1>
          <p className={styles.subtext}>
            Maximize your chances of journal acceptance with our expert journal
            selection service. Our specialists evaluate impact factor, indexing,
            scope, and acceptance rates to identify the most suitable journals
            for your manuscript.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() =>
                (window.location.href =
                  "https://secure.manuscriptedit.com/quotation")
              }
            >
              Get Journal Selection Assistance
            </button>
            <button
              className={styles.secondaryButton}
              onClick={() =>
                (window.location.href =
                  "https://secure.manuscriptedit.com/quotation")
              }
            >
              Request a Free Consultation
            </button>
          </div>
        </div>
      </section>
      <section
        className={styles.benefitsWrapper}
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            Why Choose Our Journal Selection Services?
          </h2>
          <p className={styles.subtext}>
            <strong>
              ManuscriptEdit’s Journal Selection Services provide researchers
              with expert assistance to ensure that their work is submitted to
              the most relevant and reputable journals. Our key benefits
              include:
            </strong>
          </p>
          <ul className={styles.benefitsList}>
            <li>
              ✔ Expert Recommendation by PhD Specialists – Identifying journals
              indexed in Scopus, Web of Science, PubMed, and DOAJ.
            </li>
            <li>
              ✔ Impact Factor & Q1/Q2 Ranking Analysis – Recommending journals
              with high acceptance rates and strong citations.
            </li>
            <li>
              ✔ Avoiding Predatory Journals – Screening journal legitimacy and
              ethical publishing standards.
            </li>
            <li>
              ✔ Customized Journal Shortlisting – Based on subject area,
              manuscript type, and research scope.
            </li>
            <li>
              ✔ Journal Submission Guidelines & Formatting – Ensuring
              journal-specific compliance before submission.
            </li>
          </ul>
          <button
            className={styles.primaryButton}
            onClick={() =>
              (window.location.href =
                "https://secure.manuscriptedit.com/quotation")
            }
          >
            Learn More About Our Journal Selection Process
          </button>
        </div>
      </section>

      <section className="editing-overview-section">
        <h2 className="editing-overview-heading">
          Why Choose Our Journal Selection Services?
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
              <td>Basic Journal Selection</td>
              <td>First-time authors & students</td>
              <td>3-5 journal recommendations, Scope & indexing check</td>
              <td>3-5 Days</td>
            </tr>
            <tr>
              <td>Advanced Journal Selection</td>
              <td>Researchers & academics</td>
              <td>Q1/Q2 high-impact journals, Impact factor analysis</td>
              <td>5-7 Days</td>
            </tr>
            <tr>
              <td>PubMed & Scopus-Indexed Journal Selection</td>
              <td>Medical & STEM researchers</td>
              <td>Compliance with PubMed & Scopus, Journal ranking analysis</td>
              <td>5-10 Days</td>
            </tr>
            <tr>
              <td>Predatory Journal Screening</td>
              <td>Authors ensuring ethical publishing</td>
              <td>
                Blacklist verification, Avoiding predatory & pay-to-publish
                journals
              </td>
              <td>3-5 Days</td>
            </tr>
            <tr>
              <td>Journal Submission Strategy & Formatting</td>
              <td>Researchers preparing for submission</td>
              <td>
                Formatting according to journal guidelines, Cover letter &
                manuscript structuring
              </td>
              <td>5-7 Days</td>
            </tr>
          </tbody>
        </table>
        <button
          className={styles.primaryButton}
          style={{ marginTop: "40px" }}
          onClick={() =>
            (window.location.href =
              "https://secure.manuscriptedit.com/quotation")
          }
        >
          Compare Journal Selection Services
        </button>
      </section>

      <div className={styles.processContainer}>
        <h2 className={styles.processTitle}>
          Journal Selection Process – How We Ensure Quality & Compliance
        </h2>
        <div className={styles.processSteps1}>
          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 1:</h5>
            <FontAwesomeIcon
              icon={faFileAlt} // Suitable for manuscript evaluation
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Manuscript Evaluation – Understanding the scope, subject area, and
              impact potential of your research.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 2:</h5>
            <FontAwesomeIcon
              icon={faSearch} // Suitable for searching and screening
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Journal Database Screening – Searching through Scopus, Web of
              Science, PubMed, DOAJ, and Springer databases.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 3:</h5>
            <FontAwesomeIcon
              icon={faChartLine} // Suitable for impact factor analysis
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Journal Shortlisting & Impact Factor Analysis – Providing a list
              of high-impact journals with acceptance rates.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 4:</h5>
            <FontAwesomeIcon
              icon={faCogs} // Suitable for checking guidelines
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Formatting & Submission Guidelines Check – Ensuring word count,
              citation style, and formatting compliance.
            </h3>
          </div>

          <div className={styles.processStep}>
            <h5 className={styles.stepHeading}>Step 5:</h5>
            <FontAwesomeIcon
              icon={faPaperPlane} // Suitable for final recommendations
              size="3x"
              className={styles.stepIcon}
            />
            <h3 className={styles.stepDescription}>
              Final Journal Recommendations & Submission Strategy – Delivering
              publication-ready recommendations.
            </h3>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <a href="https://secure.manuscriptedit.com/quotation">
            <button className={styles.primaryButton}>
              Start Your Journal Selection Process
            </button>
          </a>
        </div>
      </div>

      <section className="before-after-example-section">
        <h2 className="before-after-example-heading">
          Before & After Journal Selection – See the Difference
        </h2>

        <div className="before-after-example-content">
          <div className="before-example">
            <h3>
              Before (Random Journal Selection Without Research Scope
              Consideration):
            </h3>
            <p className="before-text">
              “I submitted my paper to Journal X because it had a high impact
              factor, but it was rejected due to scope mismatch and formatting
              errors.”
            </p>
          </div>

          <div className="after-example">
            <h3>
              After (Professionally Curated Journal Shortlist with Compliance
              Checks):
            </h3>
            <p className="after-text">
              “After ManuscriptEdit’s journal selection service, I received a
              shortlist of five journals indexed in Scopus and PubMed, all
              aligned with my research topic. My manuscript was accepted on the
              first submission attempt.”
            </p>
          </div>
        </div>

        <div className="explanation">
          <p>
            Journal Selection Assistance ensures compatibility, credibility, and
            faster publication success.
          </p>
        </div>

        <div className="cta-container">
          <a
            href="https://secure.manuscriptedit.com/quotation"
            className="cta-button"
          >
            Request a Sample Journal Recommendation
          </a>
        </div>
      </section>

      <section className="pricing-turnaround-section">
        <h2 className="pricing-turnaround-heading">
          Journal Selection Assistance – Pricing and Turnaround Time
        </h2>

        <div className="pricing-details">
          <div className="pricing-item">
            <h3>Starting Price</h3>
            <p className="pricing-text">
              $80 (Basic Journal Selection) – $250 (Advanced Impact Factor &
              Submission Strategy Analysis)
            </p>
          </div>

          <div className="delivery-item">
            <h3>Turnaround Time</h3>
            <p className="delivery-time">
              3 Days – 10 Days (Depending on service type)
            </p>
          </div>
        </div>

        <div className="cta-container">
          <a
            href="https://secure.manuscriptedit.com/quotation"
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
          <h1 className="accordion__title">
            FAQs
            <br />
            <span style={{ fontSize: "1rem" }}>
              Answers to Your Most Common Questions
            </span>
          </h1>

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
                className="accordion__header d-flex justify-content-between"
                onClick={() => toggleAccordion(index)}
                style={{ cursor: "pointer" }}
              >
                <h2 className="accordion__question">{faq.question}</h2>
                <span>{openIndex === index ? "⮝" : "⮟"}</span>
              </div>

              <div
                className="accordion__content"
                style={{
                  height: openIndex === index ? "auto" : "0",
                  overflow: "hidden",
                  transition: "height 0.3s ease",
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
    </>
  );
}
