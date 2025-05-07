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
            <h1 className={styles.heading}>
              Elevate Your Research Visibility with High-Impact Services
            </h1>
            <p className={styles.subtext}>
              Your research deserves global recognition. At ManuscriptEdit, we
              offer high-impact journal publication support and research
              visibility services to maximize your academic influence. Our
              expert support ensures your work is strategically positioned for
              high-impact journals, boosting its reach and credibility.
            </p>
          </div>
        </section>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Why Choose ManuscriptEdit for High-Impact Services?
            </h2>

            <section className={styles.benefitsWrapper}>
              <h4>Strategic Publication Planning</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Expert guidance for submitting to high-impact journals,
                  including Q1 and Q2-ranked publications.
                </li>
                <li>
                  ✔ Targeted assistance for Scopus, Web of Science, and
                  PubMed-indexed publications.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Enhanced Research Visibility</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Advanced citation strategies to improve H-index, increase
                  citations, and enhance your research paper’s impact factor.
                </li>
                <li>
                  ✔ Profile optimization for Google Scholar, ORCID, and Scopus,
                  ensuring greater visibility and credibility in the academic
                  community.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Collaboration & Networking Opportunities</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Support for interdisciplinary research collaborations.
                </li>
                <li>
                  ✔ Assistance in connecting with academic and industry leaders,
                  fostering publication success.
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
            Our High-Impact Services at a Glance
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
                <td className="py-2 px-4 border">
                  Journal Selection Assistance
                </td>
                <td className="py-2 px-4 border">
                  Targeting top-tier journals for maximum impact
                </td>
                <td className="py-2 px-4 border">
                  Impact factor analysis, compliance checks
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">Citation Booster Services</td>
                <td className="py-2 px-4 border">
                  Enhancing research discoverability
                </td>
                <td className="py-2 px-4 border">
                  SEO optimization, metadata enhancements
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">
                  Open Access Publishing Support
                </td>
                <td className="py-2 px-4 border">
                  Wide dissemination of research
                </td>
                <td className="py-2 px-4 border">
                  Institutional funding guidance, OA compliance
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">
                  Collaborative Research Support
                </td>
                <td className="py-2 px-4 border">
                  Building interdisciplinary networks
                </td>
                <td className="py-2 px-4 border">
                  Industry-academic partnership facilitation
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.buttonGroup}>
            <a href="https://manuscriptedit.com/QuotationNew/">
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
