"use client";

import { useEffect, useState } from "react";
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

export default function Home() {
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title:
        "Share Your Requirements – Provide details about your thesis or research area.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title:
        "Receive Expert Assistance – Get a personalized plan and connect with your editor.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title:
        "Track Progress & Collaborate – Work closely with your assigned expert for revisions.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title:
        "Submit with Confidence – A well-structured, error-free thesis ready for evaluation.",
    },
  ];

  const services = [
    {
      name: "Thesis Proposal Assistance",
      features: "Structuring clear, goal-oriented research proposals",
      bestFor: "Master’s students initiating their research",
    },
    {
      name: "Thesis Writing Support",
      features: "Guidance for developing coherent and impactful content",
      bestFor: "Students needing structured writing help",
    },
    {
      name: "Editing & Proofreading",
      features: "Grammar, clarity, and formatting improvements",
      bestFor: "Ensuring a polished and submission-ready thesis",
    },
    {
      name: "Data Analysis Assistance",
      features: "Statistical analysis and data visualization support",
      bestFor: "Researchers with complex datasets",
    },
    {
      name: "Formatting & Compliance",
      features: "Aligning documents with university templates",
      bestFor: "Ensuring compliance with institutional requirements",
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
      <div>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Master’s Thesis Writing &amp; Editing Services
            </h1>
            <p className={styles.subtext}>
              Writing a Master’s thesis is a critical step in your academic
              journey, and at ManuscriptEdit, we offer high-quality academic
              writing support tailored to Master’s students. Whether you need
              research paper assistance, journal publication support, or expert
              writing assistance services, we help you produce an academically
              strong and well-polished thesis.
            </p>
          </div>
        </section>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Why Choose Our Master’s Thesis Services?
            </h2>

            <section className={styles.benefitsWrapper}>
              <h4>Expert-Led Writing & Editing</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Work with highly qualified editors and writers with Master’s
                  and PhD-level expertise, ensuring in-depth subject knowledge
                  and accurate academic guidance.
                </li>
                <li>
                  ✔ Our academic writing assistance services are customized to
                  your specific research area and topic, ensuring clarity,
                  coherence, and strong academic arguments.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Comprehensive Solutions for Every Stage</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Get thesis guidance at every step, from research proposal
                  development and data interpretation to writing and refining
                  final chapters.
                </li>
                <li>
                  ✔ Our thesis editing services ensure proper formatting and
                  compliance with institutional and journal publication
                  standards.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Quality Assurance for Better Grades</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Language polishing services enhance clarity, readability,
                  and tone.
                </li>
                <li>
                  ✔ Plagiarism detection and correction services provide a
                  detailed originality check, for publication-ready thesis.
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
                Start Your Master Thesis Service Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
