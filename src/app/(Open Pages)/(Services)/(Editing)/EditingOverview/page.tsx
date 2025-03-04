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
      {<Metadata metaData={metaData} />}
      <section style={gap}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Expert Scientific Editing &amp; High-Quality Manuscript Services
          </h1>
          <p className={styles.subtext}>
            We at ManuscriptEdit, your trusted partner in scientific editing and
            academic editing, with our team of expert editors provide
            high-quality editing services to refine your manuscript, ensuring it
            meets top journal and publication standards. We specialize in
            research editing, academic editing, proofreading, formatting, and
            language support through English editing services to enhance clarity
            and impact. Whether you’re preparing for journal submission or need
            scientific and academic compliance, our editing services guarantee
            high-quality precision and excellence.
          </p>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            Why Choose ManuscriptEdit for Editing Services?
          </h2>

          <section className={styles.benefitsWrapper}>
            <h4>Tailored Editing Services for every Manuscript</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Our editing services cover everything from proofreading to
                advanced scientific editing.
              </li>
              <li>
                ✔ Customized solutions to meet the journal and publication
                guidelines for academic and research success.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Ethical and Quality driven Scientific Editing</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Expert editors ensure high-quality manual editing for academic
                and research integrity.
              </li>
              <li>
                ✔ Full compliance with publication ethics, confidentiality and
                journal standards.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Fast Turnaround with High-Quality Editing Results</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Timely submission of manuscripts with quality checks to meet
                journal standards.
              </li>
              <li>
                ✔ Dedicated English editing services to enhance clarity,
                language, and impact.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Global Reach with Proven Editing Expertise</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Trusted by researchers and institutions in over 100+
                countries.
              </li>
              <li>
                ✔ A proven track record of helping authors publish in
                high-impact journals.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Expert Support for all Authors</h4>
            <ul className={styles.benefitsList}>
              <li>
                Our editing services cater to a diverse range of authors,
                including first-time researchers, experienced scholars, and
                academic institutions seeking high-quality manuscript
                improvements. Whether you need scientific editing, proofreading,
                or formatting for journal submission, our expert editors ensure
                publication-ready content that meets the highest quality
                standards. We provide comprehensive support to enhance language
                clarity, maintain compliance with journal guidelines, and boost
                your chances for research publication success.
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
          <h2 className={styles.heading}>Ensuring High-Quality Editing Services for Research Publication</h2>

          <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
          Rigorous Multi-Layered Editing Process for Manuscripts
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✔ Every manuscript undergoes an initial review by our expert editors in academic and
              scientific editing.
            </li>
            <li>
              ✔ Multiple rounds of checks improve quality, language, formatting, and clarity to meet
              journal and publication standards.
            </li>
            <li>
              ✔ Proofreading ensures a polished, error-free and publication-ready final manuscript.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
          Compliance with International Journal Standards
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✔ Alignment with APA, MLA, IEEE, and other formatting guidelines for manuscript
              submission.
            </li>
            <li>
              ✔ Editing services tailored for journal-specific compliance to enhance publication
              acceptance rates.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            {" "}
            Collaborative and Transparent Editing Approach
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✔ Authors receive detailed feedback on structure, language, and content improvement.
            </li>
            <li>
              ✔ Direct support from expert editors ensures clarity and alignment with author and
              journal objectives.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            {" "}
            Who Benefits from our Editing Services?
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✔ First-Time Authors: Guidance for navigating editing and publication challenges.
            </li>
            <li>
              ✔ Experienced Researchers: Advanced scientific editing for high-impact journal
              submission.
            </li>
            <li>
              ✔ Institutions and Universities: Bulk editing services for faculty and students.
            </li>
          </ul>
        </div>
      </section>

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
    </>
  );
}
