"use client";

import { useEffect, useState } from "react";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import Image from "next/image";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import medicalIcon from "@/app/utils/LogosForIcons/medical.png";
import rewritingIcon from "@/app/utils/LogosForIcons/rewrite.png";
import scientificIcon from "@/app/utils/LogosForIcons/scientific.png";
import technicalIcon from "@/app/utils/LogosForIcons/technical.png";
import "@/app/(Open Pages)/(Services)/(Writing)/scientificAcademicOverview/Scientific.css";

import {
  faFileUpload,
  faSearch,
  faEdit,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
      <div style={{ marginBottom: "50px" }}>
        <section style={gap}>
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              Professional Writing Assistance for Academic, Scientific, and
              Medical Research
            </h1>
            <p className={styles.subtext}>
              At ManuscriptEdit, we provide top-tier Research Writing Assistance
              Services tailored to meet the needs of researchers, scholars, and
              professionals. Our expert support ensures that your manuscripts,
              research papers, and academic writing are clear, impactful, and
              publication-ready. With a team of research experts specializing in
              diverse disciplines, we help you navigate the complexities of
              scholarly publishing with confidence.
            </p>
          </div>
        </section>

        <section
          className="container-fluid d-flex flex-wrap p-0 justify-content-center"
          style={{ marginTop: "30px" }}
        >
          <div
            className="col-md-3"
            style={{
              padding: "20px",
              color: "aliceblue",
              background: "#3f79ad",
            }}
          >
            <h5 style={{ color: "aliceblue" }}>
              We help you engage with the reader
            </h5>
            <p>
              You have the ideas, we have the writing expertise to express those
              ideas in words. Our cohesive team of writers are equipped to
              handle all your writing needs by relying on trustworthy sources
              and meticulous research.
            </p>
            <div style={{ textAlign: "center" }}>
              <a
                href="/QuotationNew"
                style={{
                  padding: "9px",
                  background: "aliceblue",
                  borderRadius: "6px",
                }}
              >
                Request a quote
              </a>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-around align-items-center flex-wrap bg-light p-4">
            <div className="iconBlock text-center">
              <img
                src={medicalIcon.src}
                alt="Medical Writing"
                width={100}
                height={100}
              />
              <p className="text-primary fw-bold mt-2">
                <a
                  href="/MedicalWrite"
                  className="text-decoration-none text-primary"
                >
                  Medical Writing
                </a>
              </p>
            </div>
            <div className="iconBlock text-center">
              <img
                src={scientificIcon.src}
                alt="Scientific Writing"
                width={100}
                height={100}
              />
              <p className="text-primary fw-bold mt-2">
                <a
                  href="/ScientificWriting"
                  className="text-decoration-none text-primary"
                >
                  Scientific Writing
                </a>
              </p>
            </div>
            <div className="iconBlock text-center">
              <img
                src={technicalIcon.src}
                alt="Technical Writing"
                width={100}
                height={100}
              />
              <p className="text-primary fw-bold mt-2">
                <a
                  href="/TechnicalWriting"
                  className="text-decoration-none text-primary"
                >
                  Technical Writing
                </a>
              </p>
            </div>
            <div className="iconBlock text-center">
              <img
                src={rewritingIcon.src}
                alt="ReWriting"
                width={100}
                height={100}
              />
              <p className="text-primary fw-bold mt-2">
                <a
                  href="/MedicalRewrite"
                  className="text-decoration-none text-primary"
                >
                  ReWriting
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Why Choose ManuscriptEdit for Academic, Scientific, and Medical
              Writing?
            </h2>

            <section className={styles.benefitsWrapper}>
              <h4>Expert Support Across Disciplines</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Our expert writers hold advanced qualifications (PhD,
                  Master’s) and domain-specific expertise.
                </li>
                <li>
                  ✔ High-quality academic writing support across life sciences,
                  STEM, clinical research, humanities, and social sciences.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Comprehensive Writing Assistance Services</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Specialized academic writing assistance services, including
                  thesis writing solutions, manuscript writing assistance,
                  grants, technical documents, clinical study reports,
                  regulatory submissions, and research paper writing assistance.
                </li>
                <li>
                  ✔ Our expertise services extend to systematic reviews,
                  meta-analyses, and literature reviews.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Journal Publication Support & Editing Services</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Our writing support ensures compliance with journal
                  guidelines for high-impact journals, including Scopus, Web of
                  Science, and PubMed.
                </li>
                <li>
                  ✔ Refine language, structure, and clarity to enhance journal
                  publication acceptance rates.
                </li>
                <li>
                  ✔ Tailored journal publication support to help you meet
                  rigorous submission standards.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Ethical Research Practices & Originality</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Guaranteed 100% plagiarism-free content while adhering to
                  the highest ethical research standards.
                </li>
                <li>
                  ✔ Your research remains confidential, ensuring secure handling
                  of sensitive scientific publications and medical writing
                  assistance services.
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
            Our Writing Services at a Glance
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
                  Manuscript Writing Assistance
                </td>
                <td className="py-2 px-4 border">
                  Researchers crafting original drafts
                </td>
                <td className="py-2 px-4 border">
                  Clear narrative flow, precise presentation of findings
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">Grant Proposal Writing</td>
                <td className="py-2 px-4 border">
                  Researchers applying for funding
                </td>
                <td className="py-2 px-4 border">
                  Competitive proposals aligned with funding norms
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">
                  Systematic Review & Meta-Analysis
                </td>
                <td className="py-2 px-4 border">
                  Evidence-based reviews and data synthesis
                </td>
                <td className="py-2 px-4 border">
                  Comprehensive data interpretation and accurate reporting
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">Technical Writing</td>
                <td className="py-2 px-4 border">
                  Professionals needing precise documentation
                </td>
                <td className="py-2 px-4 border">
                  Standard operating procedures, reports, and manuals
                </td>
              </tr>
              <tr className="border">
                <td className="py-2 px-4 border">Medical Writing Services</td>
                <td className="py-2 px-4 border">
                  Healthcare professionals and clinical researchers
                </td>
                <td className="py-2 px-4 border">
                  Clinical study reports, regulatory submissions, and CME
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.buttonGroup}>
            <a href="https://manuscriptedit.com/QuotationNew/">
              <button className={styles.secondaryButton}>
                Start Your Writing Journey Today
              </button>
            </a>
          </div>
        </div>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Dedicated Medical Writing Services
            </h2>

            <section className={styles.benefitsWrapper}>
              <h4>Clinical Research & Medical Writing Assistance</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Clinical trial protocols, investigator brochures, and
                  clinical study reports (CSRs), focusing on accuracy and
                  compliance.
                </li>
                <li>
                  ✔ Preparing summary documents for regulatory compliance (FDA,
                  EMA).
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Regulatory Writing & Submission Support</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Developing INDs, NDAs, and CTD submissions with meticulous
                  attention to detail.
                </li>
                <li>
                  ✔ Our medical writing assistance service ensures that all
                  regulatory documents comply with international guidelines,
                  including ICH-GCP, maximizing approval success.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Medical Communication & Education</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Crafting Continuing Medical Education (CME) materials for
                  healthcare professionals.
                </li>
                <li>
                  ✔ Creating engaging patient education resources, scientific
                  posters, and other knowledge-sharing documents to enhance
                  medical communication.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Literature Support & Research Paper Assistance</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Systematic literature reviews and narrative analyses for
                  clinical publications.
                </li>
                <li>
                  ✔ Preparing abstracts and conference presentations for
                  high-impact journal publications.
                </li>
              </ul>
            </section>
          </div>
        </section>

        <div className={styles.buttonGroup}>
          <a href="https://manuscriptedit.com/QuotationNew/">
            <button className={styles.secondaryButton}>
              Learn More About Medical Writing
            </button>
          </a>
        </div>

        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>How We Ensure Quality in Writing</h2>

            <section className={styles.benefitsWrapper}>
              <h4>Multi-Layered Review Process</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Research experts provide expert-led writing and editing
                  tailored to your target audience.
                </li>
                <li>
                  ✔ Comprehensive quality checks to enhance clarity,
                  consistency, and coherence, refining content for high-impact
                  journals.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Compliance with Global Standards</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Our medical writing assistance service ensures full
                  adherence to guidelines for journal publication, clinical
                  research, and regulatory approvals.
                </li>
                <li>
                  ✔ Expertise in academic writing assistance services, providing
                  manuscript formatting and editing services for medical and
                  academic needs.
                </li>
              </ul>
            </section>

            <section className={styles.benefitsWrapper}>
              <h4>Personalized Support for Your Research Needs</h4>
              <ul className={styles.benefitsList}>
                <li>
                  ✔ Writing assistance services that prioritize close
                  collaboration with authors, ensuring that their objectives
                  align with the final output.
                </li>
                <li>
                  ✔ Our writing support includes detailed feedback to enhance
                  content quality and research impact of the manuscript for
                  high-impact journal publication.
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section className={styles.benefitsWrapper}>
          <div className={styles.benefitsBox}>
            <h2 className={styles.heading}>
              Who Benefits from Our Writing Assistance?
            </h2>

            <ul className={styles.benefitsList}>
              <li>
                Researchers: Research writing assistance services, including
                manuscript editing services, research paper assistance, and
                grant proposal writing to help researchers publish in
                high-impact journal publications.
              </li>
              <li>
                Healthcare Professionals: Medical writing assistance services
                cover clinical research documentation, regulatory submissions,
                and Continuing Medical Education (CME) content.
              </li>
              <li>
                Institutions & Universities: Academic writing assistance
                services, offering writing support for faculty and students.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
