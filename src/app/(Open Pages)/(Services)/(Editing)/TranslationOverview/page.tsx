"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
// import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
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
        "Upload Your Document – Securely submit your non-English manuscript.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Subject-Matter Expert Translation – Assigned translator ensures accuracy.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Review & Proofreading – Translated document is refined for fluency.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Final Delivery & Revisions – Receive a polished, publication-ready manuscript.",
    },
    {
      stepss: "Step 5 ➔",
      icon: faCheckCircle,
      title: "Optional Add-Ons – Choose copyediting or formatting if needed.",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question: "Which languages do you support?",
      answer:
        "We provide translations for Chinese, Japanese, Spanish, French, German, Russian, Portuguese, and more into English and vice versa.",
    },
    {
      question: "Who translates my document?",
      answer:
        "PhD-level subject-matter experts with academic and research experience.",
    },
    {
      question: "Do you use AI for translation?",
      answer:
        "No, all translations are done by human experts, ensuring accuracy and academic integrity.",
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
        content="Scientific Translation Services | ManuscriptEdit"
      />
      <meta
        name="description"
        content="Professional scientific translation for accurate, peer-review ready manuscripts."
      />
      {<Metadata metaData={metaData} />}
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              &quot;Break Language Barriers – Translate Your Research for Global
              Impact!&quot;
            </h1>
            <p className={styles.subtext}>
              &quot;Accurate, high-quality academic translation by
              subject-matter experts to ensure your research reaches a global
              audience with clarity and precision.&quot;
            </p>
            <div className={styles.buttonGroup}>
              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.primaryButton}>
                  Get Translation Now
                </button>
              </a>

              <a href="https://manuscriptedit.com/QuotationNew/">
                <button className={styles.secondaryButton}>
                  Request a Free Sample
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Proofreading Overview Section */}
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>What is Translation Service?</h2>
            <p className={styles.subtext}>
              Translation Service ensures that your academic and research
              documents are accurately translated while maintaining their
              technical accuracy, academic tone, and cultural nuances. Our team
              of PhD translators specializes in STEM and Non-STEM subjects,
              ensuring discipline-specific accuracy.
            </p>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Who Should Use This Service?</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ PhD &amp; MS Students – Convert theses and dissertations into
                English for wider accessibility.
              </li>
              <li>
                ✔ Doctors &amp; Academics – Prepare research papers, grant
                proposals, and reports for international publication.
              </li>
              <li>
                ✔ Researchers &amp; Institutions – Collaborate globally by
                translating technical reports and academic materials.
              </li>
            </ul>
          </div>

          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>Key Benefits:</h2>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Maintains academic integrity, terminology, and formatting.
              </li>
              <li>
                ✔ Proofread and quality-checked to match publication standards.
              </li>
              <li>
                ✔ Supports major languages including Chinese, Japanese, Spanish,
                French, German, and more.
              </li>
            </ul>
          </div>

          <section className={styles.proofreadingWrapper}>
            <h2 className={styles.headingCenter}>
              When Should You Choose Translation Services?
            </h2>
            <table className="editing-overview-table">
              <thead>
                <tr>
                  <th>Your Document Status</th>
                  <th>Best Service</th>
                  <th>Why?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manuscript in a non-English language</td>
                  <td>Translation Service</td>
                  <td>
                    Converts it to academic English while maintaining accuracy.
                  </td>
                </tr>
                <tr>
                  <td>Needs improved readability post-translation</td>
                  <td>Copyediting</td>
                  <td>Enhances clarity and fluency of translated content.</td>
                </tr>
                <tr>
                  <td>Requires journal-specific formatting</td>
                  <td>Formatting Service</td>
                  <td>Aligns with submission guidelines.</td>
                </tr>
                <tr>
                  <td>High similarity index detected</td>
                  <td>Plagiarism Reduction</td>
                  <td>Rewrites flagged content while retaining accuracy.</td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>

        {/* New Proofreading Details Section */}
        <section className={styles.proofreadingWrapper}>
          <h2 className={styles.headingCenter}>
            What Does Translation Service Include?
          </h2>

          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>🚫 Not Included</h3>
            <ul className={styles.proofreadingList}>
              <li>❌No rewriting or paraphrasing for plagiarism reduction.</li>
              <li>
                ❌No manuscript restructuring (offered under substantive
                editing).
              </li>
              <li>❌ No AI-generated translations – fully human-reviewed.</li>
            </ul>
          </div>
          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>✔ Included</h3>

            <ul className={styles.proofreadingList}>
              <li>
                ✔ Human Translation – AI-free translation done by subject-matter
                experts.
              </li>
              <li>
                ✔ Academic Tone &amp; Style Retention – Ensures consistency with
                research writing.
              </li>
              <li>
                ✔ Terminology Accuracy – Discipline-specific language
                refinement.
              </li>
              <li>
                ✔ Formatting &amp; Structure Preservation – Keeps original
                document formatting intact.
              </li>
            </ul>
          </div>
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
                Start Translation Now
              </button>
            </a>
          </div>

          <section className="before-after-example-section">
            <h2 className="before-after-example-heading">
              Before and After Example
            </h2>

            <div className="before-after-example-content">
              <div className="before-example">
                <h3>Before (Original Manuscript in Spanish):</h3>
                <p className="before-text">
                  &quot;Los avances en inteligencia artificial han transformado
                  la forma en que los médicos diagnostican enfermedades,
                  mejorando significativamente la precisión de los
                  diagnósticos.&quot;
                </p>
              </div>

              <div className="after-example">
                <h3>After (Translated into English by Expert Translator):</h3>
                <p className="after-text">
                  &quot;Advancements in artificial intelligence have
                  revolutionized the way doctors diagnose diseases,
                  significantly improving diagnostic accuracy.&quot;
                </p>
              </div>
            </div>
          </section>

          <section className="pricing-turnaround-section">
            <h2 className="pricing-turnaround-heading">
              Pricing and Turnaround Time
            </h2>

            <div className="pricing-details">
              <div className="pricing-item">
                <h3>Starting Price</h3>
                <p className="pricing-text">$0.08 per word</p>
              </div>

              <div className="delivery-item">
                <h3>Standard Delivery</h3>
                <p className="delivery-time">4-7 business days</p>
              </div>

              <div className="delivery-item">
                <h3>Express Delivery</h3>
                <p className="delivery-time">
                  48-72 hours available at additional cost
                </p>
              </div>
            </div>

            <div className="cta-container">
              <a
                href="https://manuscriptedit.com/QuotationNew/"
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
