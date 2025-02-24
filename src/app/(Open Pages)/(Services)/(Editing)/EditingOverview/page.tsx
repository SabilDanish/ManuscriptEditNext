"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";

import "./EditingOverview.css";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import Link from "next/link";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import { serviceData } from "../../../../utils/service.js";

import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../../../../_Common/getHelp/getHelp.css";
import Dropdown2 from "@/app/_Common/Dropdown2/Dropdown2";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import { useEffect, useState } from "react";

import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";

import ServicesNavbar2 from "@/app/_Common/ServicesNavbar/ServicesNavbar2";

const newData: { [key: string]: { [key: string]: string } } = data;

export default function Home() {
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

  const pathName: string = usePathname()
    .split("/")
    .filter((val) => val)
    .join("");
  let metaData = newData[pathName];

  const gap = {
    marginTop: "40px",
  };

  const services = [
    {
      service: "Proofreading",
      bestFor: "Authors needing polished, error-free manuscripts",
      features: "Grammar, spelling, and punctuation corrections",
    },
    {
      service: "Copyediting",
      bestFor: "Improving language clarity and consistency",
      features: "Refining style, syntax, and tone",
    },
    {
      service: "Substantive Editing",
      bestFor: "Restructuring and enhancing complex manuscripts",
      features: "Improving logical flow, clarity, and content",
    },
    {
      service: "Extensive Substantive Editing",
      bestFor: "Comprehensive improvements for publication success",
      features: "Strengthening arguments and detailed content analysis",
    },
    {
      service: "Plagiarism Check and Reduction",
      bestFor: "Ensuring originality and ethical compliance",
      features: "Generating detailed reports and citation improvements",
    },
    {
      service: "Translation Services",
      bestFor: "Bridging language gaps in academic writing",
      features: "Accurate translations with subject-matter expertise",
    },
  ];

  const accord2: { question: string; answer: string }[] = [
    {
      question:
        "What’s the difference between proofreading and substantive editing?",
      answer:
        "Proofreading focuses on surface-level corrections, while substantive editing addresses structure, clarity, and content improvement.",
    },
    {
      question: "Do you offer journal-specific editing?",
      answer:
        "Yes, we customize editing to match the submission requirements of your target journal.",
    },
    {
      question: "How do you ensure confidentiality?",
      answer:
        "All manuscripts are handled securely and confidentially, with strict data protection protocols in place.",
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
            Your Path to Polished, Publication-Ready Manuscripts
          </h1>
          <p className={styles.subtext}>
            Welcome to ManuscriptEdit, your trusted partner in academic and
            scientific editing. Our expert editors refine your manuscripts,
            ensuring they meet the highest publication standards and clearly
            communicate your research findings.
          </p>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            Why Choose ManuscriptEdit for Editing?
          </h2>

          <section className={styles.benefitsWrapper}>
            <h4>Tailored Services for Every Requirement</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Our offerings range from basic proofreading to advanced
                substantive editing.
              </li>
              <li>
                ✅ Customized solutions that meet journal and institutional
                guidelines.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Ethical, Integrity-Driven Practices</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ All editing is conducted manually by experts to maintain
                academic and research integrity.
              </li>
              <li>
                ✅ Full compliance with global publication ethics and
                confidentiality standards.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Fast Turnaround with Uncompromised Quality</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Timely delivery of edited manuscripts with meticulous quality
                checks.
              </li>
              <li>
                ✅ Dedicated editorial processes to ensure consistency and
                accuracy.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Global Reach and Proven Results</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Trusted by researchers and institutions in over 100
                countries.
              </li>
              <li>
                ✅ A track record of helping authors publish in high-impact
                journals.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Global Reach and Proven Results</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ <strong>First-Time Authors:</strong> Receive guidance and
                support to navigate publication challenges.
              </li>
              <li>
                ✅ <strong>Experienced Researchers:</strong> Advanced editing to
                meet high-impact journal standards.
              </li>
              <li>
                ✅ <strong>Institutions & Universities:</strong> Bulk editing
                services tailored to the needs of faculty and students.
              </li>
            </ul>
          </section>
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
              {services.map((item, index) => (
                <tr key={index} className="border">
                  <td className="p-2 border">{item.service}</td>
                  <td className="p-2 border">{item.bestFor}</td>
                  <td className="p-2 border">{item.features}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
              Explore All Editing Services
            </button>
          </div>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>How We Ensure Quality in Editing</h2>

          <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
            Rigorous, Multi-Layered Editing Process
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✅ Each manuscript undergoes an initial review by subject experts.
            </li>
            <li>
              ✅ A second round of checks ensures consistency, clarity, and
              adherence to journal guidelines.
            </li>
            <li>
              ✅ Final proofreading ensures polished, publication-ready output.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            Compliance with International Standards
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✅ We align your manuscript with formatting and style standards
              (APA, MLA, IEEE, and others).
            </li>
            <li>
              ✅ Focused on journal-specific compliance to improve acceptance
              rates.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            {" "}
            Collaborative and Transparent Approach
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✅Authors receive detailed feedback on structure, language, and
              content improvements.
            </li>
            <li>
              ✅ Open communication with editors ensures clarity and alignment
              with your objectives.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            {" "}
            Who Benefits from Our Editing Services?
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✅ First-Time Authors: Receive guidance and support to navigate
              publication challenges.
            </li>
            <li>
              ✅ Experienced Researchers: Advanced editing to meet high-impact
              journal standards.
            </li>
            <li>
              ✅ Institutions & Universities: Bulk editing services tailored to
              the needs of faculty and students.
            </li>
          </ul>
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
