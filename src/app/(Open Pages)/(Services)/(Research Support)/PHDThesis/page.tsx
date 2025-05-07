"use client";

import { useEffect, useState } from "react";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import Head from "next/head";

import {
  faFileUpload,
  faSearch,
  faEdit,
  faCheckCircle,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title:
        "Upload Your Thesis or Proposal – Share your document or research requirements.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Receive a Customized Plan – Our experts provide a detailed plan with timelines.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Collaborate with Your Editor – Get feedback, revisions, and updates throughout.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Submit with Confidence – A polished, error-free thesis ready for approval.",
    },
  ];

  const services = [
    {
      name: "PhD Proposal Writing",
      features: "Clear, compelling, and structured research proposals",
      bestFor: "PhD candidates in the initial research stage",
    },
    {
      name: "Thesis Writing Assistance",
      features: "Complete thesis development with expert guidance",
      bestFor: "Students seeking end-to-end thesis support",
    },
    {
      name: "Thesis Editing & Proofreading",
      features: "Language refinement, clarity improvement, and grammar checks",
      bestFor: "Researchers finalizing their thesis",
    },
    {
      name: "Formatting & Compliance",
      features: "Adherence to university templates and citation styles",
      bestFor: "Ensuring submission-ready documents",
    },
    {
      name: "Plagiarism Check & Reduction",
      features: "Detailed similarity reports and citation corrections",
      bestFor: "Maintaining originality and ethical standards",
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const gap = {
    marginTop: "40px",
  };

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

  return (
    <>
      <Head>
        <link rel="canonical" href="https://manuscriptedit.com/PHDThesis/" />
      </Head>
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Comprehensive PhD Thesis Writing &amp; Editing Services
            </h1>
            <p className={styles.subtext}>
              At ManuscriptEdit, we understand the complexities of writing a PhD
              thesis. Our PhD thesis writing services provide expert support at
              every stage, ensuring your work is well- structured, properly
              formatted, and meets the highest academic standards. Whether you
              need thesis guidance, manuscript editing services, or academic
              writing assistance, our experts are here to help.
            </p>
          </div>
        </section>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Why Choose ManuscriptEdit for Thesis Support?
            </h2>

            <section className={styles.benefitsWrapper}>
              <h4>Expert Guidance from Qualified Academics</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Work with highly experienced experts holding PhDs across
                  various disciplines.
                </li>
                <li>
                  ✔ Academic writing assistance services ensure your thesis
                  aligns with your research goals, maintaining clarity,
                  coherence, and academic rigor.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Tailored Support for Every Stage</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ From proposal writing, literature review, and methodology
                  development to crafting a strong conclusion, our thesis
                  writing assistance covers all essential sections.
                </li>
                <li>
                  ✔ Comprehensive thesis editing and formatting services,
                  adhering to university requirements and publication standards.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Ensuring Academic Excellence</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Rigorous plagiarism checks ensure originality, with detailed
                  reports to maintain academic integrity.
                </li>
                <li>
                  ✔ Adherence to multiple referencing styles such as APA, MLA,
                  Chicago, Harvard, and more.
                </li>
              </ul>
            </section>
          </div>
        </section>

        <div className="container mx-auto p-4">
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4 border">Service</th>
                <th className="py-2 px-4 border">Key Features</th>
                <th className="py-2 px-4 border">Best For</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="border">
                  <td className="py-2 px-4 border">{service.name}</td>
                  <td className="py-2 px-4 border">{service.features}</td>
                  <td className="py-2 px-4 border">{service.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* New Proofreading Details Section */}
        <div className={styles.processContainer}>
          <h2 className={styles.processTitle}>How It Works</h2>
          <div
            className={styles.processSteps1}
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
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
                Start Your Phd Thesis Service Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
