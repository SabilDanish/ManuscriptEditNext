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
      name: "Thesis Writing Assistance",
      bestFor: "PhD and Master’s students",
      features: "Structured chapters, methodology development",
    },
    {
      name: "Dissertation Editing",
      bestFor: "Final-year students preparing for submission",
      features: "Language refinement, structural consistency",
    },
    {
      name: "Formatting & Compliance Checks",
      bestFor: "Meeting institutional formatting requirements",
      features: "Templates, citation styles, and visual consistency",
    },
    {
      name: "Plagiarism Check & Reduction",
      bestFor: "Ensuring originality in academic submissions",
      features: "Comprehensive reports with citation corrections",
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
            <p className={styles.subtext}>
              At ManuscriptEdit, we are committed to providing high-quality
              academic writing support, whether you need dissertation editing
              services, thesis formatting, or research paper assistance. We
              provide expert thesis and dissertation assistance services to help
              researchers and students craft well-structured, high-quality
              academic work. Our expert support ensures your thesis meets
              university standards and aligns with academic integrity
              principles.
            </p>
          </div>
        </section>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Why Choose ManuscriptEdit for Thesis & Dissertation Services?
            </h2>

            <section className={styles.benefitsWrapper}>
              <h4>Expert Academic Assistance</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Work with highly qualified editors specializing in thesis
                  formatting and dissertation editing services, ensuring your
                  work meets institutional guidelines.
                </li>
                <li>
                  ✔ Subject-specific experts provide academic writing assistance
                  tailored to your research area, ensuring accuracy, clarity,
                  and alignment with research objectives.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Comprehensive Support from Start to Finish</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Thesis guidance at every stage, from research proposals to
                  final submission.
                </li>
                <li>
                  ✔ Manuscript editing services ensure proper formatting,
                  structure, and clarity, meeting the specific requirements of
                  universities and high-impact journals.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Originality & Academic Integrity</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Plagiarism-free content in manuscripts through detailed
                  originality checks.
                </li>
                <li>
                  ✔ Writing assistance services include proper citation support,
                  helping you adhere to ethical research practices.
                </li>
              </ul>
            </section>
          </div>
        </section>

        <div className="container mx-auto p-4">
          <h2
            className={styles.heading}
            style={{ marginBottom: "30px", textAlign: "center" }}
          >
            Key Thesis & Dissertation Services
          </h2>
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4 border">Service</th>
                <th className="py-2 px-4 border">Best For</th>
                <th className="py-2 px-4 border">Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="py-2 px-4 border">Thesis Writing Assistance</td>
                <td className="py-2 px-4 border">PhD and Master’s students</td>
                <td className="py-2 px-4 border">
                  Structured chapters, methodology development
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">Dissertation Editing</td>
                <td className="py-2 px-4 border">
                  Final-year students preparing for submission
                </td>
                <td className="py-2 px-4 border">
                  Language refinement, structural consistency
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">
                  Formatting & Compliance Checks
                </td>
                <td className="py-2 px-4 border">
                  Meeting institutional formatting requirements
                </td>
                <td className="py-2 px-4 border">
                  Templates, citation styles, and visual consistency
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">
                  Plagiarism Check & Reduction
                </td>
                <td className="py-2 px-4 border">
                  Ensuring originality in academic submissions
                </td>
                <td className="py-2 px-4 border">
                  Comprehensive reports with citation corrections
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.buttonGroup}>
            <a href="https://secure.manuscriptedit.com/quotation">
              <button className={styles.secondaryButton}>
              Let Us Help You Achieve Thesis Success
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
