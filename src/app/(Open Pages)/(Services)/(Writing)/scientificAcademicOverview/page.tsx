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
import ScientificImg from "@/app/utils/LogosForIcons/Scientific Academic.jpg"

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
        <section>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              {/* Text Section */}
              <div className="col-lg-8 mb-4 mb-lg-0">
                <div className="p-4 bg-white rounded-4 ">
                  <h2 className="fw-bold mb-3">
                    Professional Writing Assistance for Academic, Scientific,
                    and Medical Research
                  </h2>
                  <p className="text-muted fs-5">
                    At <strong>ManuscriptEdit</strong>, we provide top-tier
                    Research Writing Assistance Services tailored to meet the
                    needs of researchers, scholars, and professionals. Our
                    expert support ensures that your manuscripts, research
                    papers, and academic writing are clear, impactful, and
                    publication-ready. With a team of research experts
                    specializing in diverse disciplines, we help you navigate
                    the complexities of scholarly publishing with confidence.
                  </p>
                </div>
              </div>

              {/* Optional Image Section */}
              <div className="col-lg-4 text-center">
                <img
                  src={ScientificImg.src}
                  alt="Writing Assistance"
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ maxWidth: "90%" }}
                />
              </div>
            </div>
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

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">
              Why Choose ManuscriptEdit for Academic, Scientific, and Medical
              Writing?
            </h2>

            <div className="row g-4">
              {/* Expert Support Across Disciplines */}
              <div className="col-lg-6 mb-4 mb-4">
                <div className="card  h-100 border-0 shadow-sm p-4">
                  <h3 className="mb-4 card-title ">
                    Expert Support Across Disciplines
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Our expert writers hold advanced qualifications (PhD,
                      Master’s) and domain-specific expertise.
                    </li>
                    <li>
                      ✔ High-quality academic writing support across life
                      sciences, STEM, clinical research, humanities, and social
                      sciences.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Comprehensive Writing Assistance Services */}
              <div className="col-lg-6 mb-4 mb-4">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <h3 className="mb-4 card-title">
                    Comprehensive Writing Assistance Services
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Specialized academic writing assistance including thesis
                      writing, manuscript support, grants, technical documents,
                      clinical study reports, regulatory submissions, and
                      research papers.
                    </li>
                    <li>
                      ✔ Expertise in systematic reviews, meta-analyses, and
                      literature reviews.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Journal Publication Support */}
              <div className="col-lg-6 mb-4 mb-4">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <h3 className="mb-4 card-title">
                    Journal Publication Support & Editing Services
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Writing support ensures compliance with journal
                      guidelines for high-impact journals like Scopus, Web of
                      Science, and PubMed.
                    </li>
                    <li>
                      ✔ Refine language, structure, and clarity to enhance
                      journal acceptance rates.
                    </li>
                    <li>
                      ✔ Tailored support to meet rigorous submission standards.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Ethical Research Practices */}
              <div className="col-lg-6 mb-4 mb-4">
                <div className="card h-100 border-0 shadow-sm p-4">
                  <h3 className="mb-4 card-title">
                    Ethical Research Practices & Originality
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Guaranteed 100% plagiarism-free content with strict
                      adherence to ethical standards.
                    </li>
                    <li>
                      ✔ Confidential handling of sensitive research and medical
                      writing content.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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

        <section className="py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-5">
              Dedicated Medical Writing Services
            </h2>

            <div className="row g-4">
              {/* Clinical Research */}
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <h3 className="mb-3 card-title">
                    Clinical Research & Medical Writing Assistance
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Clinical trial protocols, investigator brochures, and
                      CSRs with focus on accuracy and compliance.
                    </li>
                    <li>
                      ✔ Preparing summary documents for FDA and EMA regulatory
                      compliance.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Regulatory Writing */}
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <h3 className="mb-3 card-title">
                    Regulatory Writing & Submission Support
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ INDs, NDAs, and CTD submissions developed with
                      meticulous attention to detail.
                    </li>
                    <li>
                      ✔ Fully compliant with ICH-GCP and international
                      guidelines to maximize approval success.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Medical Communication */}
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <h3 className="mb-3 card-title">Medical Communication & Education</h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Creating CME materials for healthcare professionals.
                    </li>
                    <li>
                      ✔ Engaging patient education resources, scientific
                      posters, and educational documents.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Literature Support */}
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <h3 className="mb-3 card-title">
                    Literature Support & Research Paper Assistance
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Systematic literature reviews and narrative analyses for
                      publications.
                    </li>
                    <li>
                      ✔ Abstract and presentation preparation for high-impact
                      journals and conferences.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <a
                href="https://manuscriptedit.com/QuotationNew/"
                className="btn btn-outline-primary btn-lg"
              >
                Learn More About Medical Writing
              </a>
            </div>
          </div>
        </section>

        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5">
              How We Ensure Quality in Writing
            </h2>

            <div className="row g-4">
              {/* Multi-Layered Review */}
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <h3 className="mb-3 card-title">Multi-Layered Review Process</h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Expert-led writing and editing tailored to your target
                      audience.
                    </li>
                    <li>
                      ✔ Comprehensive quality checks to improve clarity,
                      consistency, and journal impact.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Global Compliance */}
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <h3 className="mb-3 card-title">Compliance with Global Standards</h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Full compliance with global publication, research, and
                      regulatory standards.
                    </li>
                    <li>
                      ✔ Manuscript formatting and editing for both medical and
                      academic needs.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Personalized Support */}
              <div className="col-lg-6 mb-4">
                <div className="card border-0 shadow-sm h-100 p-4">
                  <h3 className="mb-3 card-title">
                    Personalized Support for Your Research Needs
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Close collaboration to align writing with your research
                      objectives.
                    </li>
                    <li>
                      ✔ Detailed feedback to enhance quality and boost journal
                      impact.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
