"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import whyToChoose from "@/app/_Common/_WhyToChoose/WhyToChoose";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";

import "@/app/_Common/Dropdown2/Dropdown2.css";

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

  const gap = {
    marginTop: "40px",
  };

  const services = [
    {
      service: "Research Proposal Writing",
      bestFor: "Early-stage researchers",
      features: "Structured proposal development and hypothesis framing",
    },
    {
      service: "Literature Review Assistance",
      bestFor: "PhD & MS students",
      features: "Comprehensive review with critical analysis",
    },
    {
      service: "Research Methodology Support",
      bestFor: "Researchers designing studies",
      features: "Guidance on qualitative and quantitative methods",
    },
    {
      service: "Data Collection & Analysis",
      bestFor: "Researchers handling large datasets",
      features: "Statistical analysis with SPSS, R, MATLAB, and Python",
    },
    {
      service: "Manuscript Writing & Development",
      bestFor: "Authors preparing research for publication",
      features: "End-to-end support from writing to final editing",
    },
  ];
  const accord2: { question: string; answer: string }[] = [
    {
      question: "Do you provide end-to-end research support?",
      answer:
        "Yes! We assist with topic selection, literature review, methodology, and manuscript writing.",
    },
    {
      question: "Can you help with statistical analysis?",
      answer:
        "Absolutely! We support SPSS, R, Python, MATLAB, and other data tools.",
    },
    {
      question: "Do you offer PhD mentoring?",
      answer:
        "Yes, we provide mentorship for research planning, proposal writing, and thesis development.",
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
            Research Support – Elevate Your Research with Expert Guidance
          </h1>
          <p className={styles.subtext}>
            Welcome to ManuscriptEdit, your trusted partner in comprehensive
            research support. We provide expert assistance at every stage of
            your research journey, from topic selection to data analysis and
            manuscript writing.
          </p>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            Why Choose ManuscriptEdit for Research Support?
          </h2>

          <section className={styles.benefitsWrapper}>
            <h4>Customized Research Assistance for Every Stage</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Support for early-stage research, literature review,
                methodology, and data analysis.
              </li>
              <li>
                ✔ Expert guidance in hypothesis framing, study design, and
                statistical analysis.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Expert-Led Research Development</h4>
            <ul className={styles.benefitsList}>
              <li>✔ PhD and subject-matter experts in various disciplines.</li>
              <li>
                ✔ Assistance with quantitative, qualitative, and mixed-method
                research.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Ethical &amp; Reliable Research Practices</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Ensures adherence to academic integrity and ethical
                guidelines..
              </li>
              <li>
                ✔ Plagiarism-free research support, maintaining originality.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Data-Driven Insights &amp; Advanced Analysis</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Assistance with SPSS, MATLAB, R, Python, NVivo, and other
                research tools.
              </li>
              <li>✔ Comprehensive data visualization and interpretation.</li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Proven Track Record in Research Success</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✔ Supported thousands of researchers in producing high-quality
                research.
              </li>
              <li>
                ✔ Assisted in journal-ready manuscript preparation and
                conference presentations.
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className="overflow-x-auto p-4">
          <h2 className="text-xl font-semibold mb-4">
            Our Research Support Services at a Glance
          </h2>
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
            <a href="https://secure.manuscriptedit.com/quotation">
              <button className={styles.primaryButton}>
                Explore All Editing Services
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            How We Ensure Quality in Research Support
          </h2>

          <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
            Structured & Tailored Research Guidance
          </h4>
          <ul className={styles.benefitsList}>
            <li>✔ One-on-one consultations with research experts.</li>
            <li>
              ✔ Assistance in refining research questions, study design, and
              data analysis.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            Compliance with Academic & Research Standards
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✔ Follows ethical research principles aligned with COPE and ICMJE.
            </li>
            <li>
              ✔ Formatting and reference management per APA, IEEE, and journal
              guidelines.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            Transparent Communication & Real-Time Support
          </h4>
          <ul className={styles.benefitsList}>
            <li>✔ Regular updates on research progress.</li>
            <li>
              ✔ Direct collaboration with mentors, analysts, and academic
              consultants.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            Who Benefits from Our Research Support?
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✔ PhD & MS Students – Structured research guidance and methodology
              support.
            </li>
            <li>
              ✔ Academic Researchers – Assistance in data analysis and
              manuscript writing.
            </li>
            <li>
              ✔ Universities & Institutions – Collaborative research support
              services.
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
