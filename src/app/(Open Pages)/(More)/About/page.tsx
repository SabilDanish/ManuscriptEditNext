"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../utils/metaFile.js";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import "@/app/(Open Pages)/(More)/About/About.css";
import { useState } from "react";

export default function Home() {
  const gap = {
    marginTop: "40px",
  };

  const accord2: { question: string; answer: string }[] = [
    {
      question: "What kind of researchers do you support?",
      answer:
        "We support scientists, PhD students, professors, and industry researchers from STEM, humanities, medicine, and social sciences disciplines.",
    },
    {
      question: "Do you guarantee journal acceptance?",
      answer:
        "While we enhance manuscript quality, the final acceptance decision depends on journal editorial and peer review policies.",
    },
    {
      question: "How do you ensure confidentiality?",
      answer:
        "We follow strict NDA agreements, GDPR compliance, and secure data handling protocols to protect your research.",
    },
    {
      question: "What is your turnaround time?",
      answer:
        "Turnaround times depend on the service selected, typically ranging from 24 hours (express editing) to 10 days (full submission support).",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply upload your manuscript, and our experts will assist you in getting it submission-ready.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section style={gap}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Empowering Research, Elevating Publications – Your Trusted Partner
            in Scientific Editing
          </h1>
          <p className={styles.subtext}>
            “At ManuscriptEdit, we provide expert-driven academic & scientific
            editing, publication support, and journal submission services to
            help researchers publish with confidence in high-impact journals.”
          </p>
          <div className={styles.buttonGroup}>
            <a href="/EditingOverview">
              <button className={styles.primaryButton}>
                Explore Our Services
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading} style={{ marginBottom: "20px" }}>
            Who We Are – About ManuscriptEdit
          </h2>
          <p>
            At ManuscriptEdit, we are committed to bridging the gap between
            research excellence and successful publication. Our team consists of
            PhD-qualified editors, peer reviewers, scientific writers, and
            publication specialists dedicated to enhancing the clarity, impact,
            and readability of research manuscripts.
          </p>
          <ul className={styles.benefitsList}>
            <li>🔹 Founded in: [Year]</li>
            <li>🔹 Headquarters: [City, Country]</li>
            <li>
              🔹 Clients Served: 50,000+ researchers, institutions &
              universities globally
            </li>

            <li>
              🔹Journals Covered: Scopus, Web of Science, PubMed, Elsevier,
              Springer, Wiley & more
            </li>

            <li>
              🔹 Services Offered: Manuscript Editing, Proofreading, Journal
              Submission, Peer Review Handling, and Research Consulting
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>Our Mission & Vision</h2>

          <div className="mission-vision-container">
            <div className="card">
              <h2>Our Mission</h2>
              <p>
                To provide high-quality, ethical, and publication-ready research
                support that helps researchers achieve global recognition
                through impactful scientific contributions.
              </p>
            </div>
            <div className="card">
              <h2>Our Vision</h2>
              <p>
                To become the most trusted academic and scientific research
                partner, helping researchers and institutions navigate the
                complexities of publishing, funding, and global knowledge
                dissemination.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>Why Choose ManuscriptEdit?</h4>
          <ul className={styles.benefitsList}>
            <li>
              ✔ Expert-Driven Editing & Research Support – PhD-qualified experts
              with deep domain expertise.
            </li>
            <li>
              ✔ Journal-Specific Compliance – Formatting and structuring for
              Elsevier, Springer, Wiley, Nature, BMJ, and other top journals.
            </li>
            <li>
              ✔ AI-Free, Human-Crafted Editing – High-quality manual editing,
              proofreading, and peer review by industry experts
            </li>
            <li>
              ✔ Fast Turnaround & Confidentiality – Timely delivery with strict
              data privacy & security protocols.
            </li>
            <li>
              ✔ 99% Client Satisfaction Rate – Trusted by leading universities,
              researchers, and scientific institutions.
            </li>
          </ul>

          <div className={styles.buttonGroup}>
            <a href="/Testimonial">
              <button className={styles.primaryButton}>
                See What Our Clients Saying
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className="overflow-x-auto p-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Service</th>
                <th className="p-2 border">Best For</th>
                <th className="p-2 border">Key Features</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  service: "Manuscript Editing & Proofreading",
                  bestFor: "Researchers preparing for journal submission",
                  features:
                    "Grammar, clarity, and technical accuracy improvement Formatting & compliance checks",
                },
                {
                  service: "Journal Selection & Submission",
                  bestFor: "Authors seeking the right journal for publication",
                  features:
                    "High-impact journal recommendations Full submission assistance",
                },
                {
                  service: "Plagiarism Check & Reduction",
                  bestFor: "Researchers ensuring originality",
                  features:
                    "Turnitin/iThenticate checks Citation & paraphrasing corrections",
                },
                {
                  service: "Response to Reviewers & Peer Review Support",
                  bestFor: "Authors revising manuscripts after review",
                  features:
                    "Reviewer response drafting Scientific argument refinement",
                },
                {
                  service: "Grant Proposal & Research Consulting",
                  bestFor: "Researchers applying for funding",
                  features:
                    "Funding strategy support Proposal writing & submission",
                },
                {
                  service: "Data Analysis & Statistical Support",
                  bestFor: "Researchers handling complex datasets",
                  features:
                    "SPSS, R, Python-based analysis Hypothesis testing & model validation",
                },
              ].map((item, index) => (
                <tr key={index} className="border">
                  <td className="p-2 border">{item.service}</td>
                  <td className="p-2 border">{item.bestFor}</td>
                  <td className="p-2 border">{item.features}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.buttonGroup}>
            <a href="/EditingOverview">
              <button className={styles.primaryButton}>
                Explore Our Full Service Portfolio
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            {" "}
            Our Commitment to Ethical & High-Quality Research Support
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✔Adhere to COPE (Committee on Publication Ethics) guidelines
            </li>
            <li>
              ✔ Do not engage in ghostwriting or unethical research practices
            </li>
            <li>
              ✔ Maintain strict confidentiality & data security for all clients
            </li>
            <li>
              ✔ Ensure 100% originality in all editing, writing & consulting
              services
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <div className="trusted-container">
            <h2 className="trusted-title">
              Trusted by Leading Institutions & Universities
            </h2>
            <p className="trusted-subtitle">
              🏛 Our clients include researchers from:
            </p>
            <ul className="trusted-list">
              <li>Harvard University</li>
              <li>Oxford University</li>
              <li>Stanford University</li>
              <li>National Institutes of Health (NIH)</li>
              <li>Indian Institute of Science (IISc)</li>
              <li>Max Planck Institute</li>
            </ul>
          </div>
        </div>
      </section>

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
    </>
  );
}
