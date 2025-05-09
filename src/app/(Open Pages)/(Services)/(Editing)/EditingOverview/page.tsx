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

import Dropdown2 from "@/app/_Common/Dropdown2/Dropdown2";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import { useEffect, useState } from "react";

import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import HeroSec from "@/app/utils/LogosForIcons/9876334.jpg";

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
      {/* {<Metadata metaData={metaData} />} */}
      <meta
        name="title"
        content="Scientific Manuscript Editing Services | ManuscriptEdit"
      />
      <meta
        name="description"
        content="Comprehensive scientific manuscript editing to polish language, structure, and clarity."
      />

      <section className="pb-4">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* Text Section */}
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="p-3 bg-white  rounded-4">
                <h2 className="fw-bold  mb-4">
                  Expert Scientific Editing &amp; High-Quality Manuscript
                  Services
                </h2>
                <p className="text-muted fs-5">
                  We at <strong>ManuscriptEdit</strong>, your trusted partner in
                  scientific and academic editing, provide high-quality services
                  through our team of expert editors. We specialize in
                  <strong>
                    {" "}
                    research editing, academic editing, proofreading, formatting
                  </strong>
                  , and <strong>English language support</strong> to ensure your
                  manuscript meets top journal and publication standards.
                  Whether for journal submission or academic compliance, our
                  services guarantee clarity, precision, and excellence.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-lg-4 text-center">
              <img
                src={HeroSec.src}
                alt="Editing Services"
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxWidth: "90%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container editing-services-container">
        <div className="service-column">
          <h3>Proofreading</h3>
          <ul>
            <li>✔ Thorough reading of manuscript.</li>
            <li>✔ Spotting all errors.</li>
            <li>✔ Review capitalization and punctuation.</li>
            <li>✔ Check for spelling, grammar, and typos.</li>
            <li>✔ Remove redundancies.</li>
            <li>✔ Rectify improper word usage.</li>
          </ul>
         
          <button className="check-price">
            <a href="/ProofReading">Check Price</a>
          </button>
        </div>

        <div className="service-column">
          <h3>Substantive Editing</h3>
          <ul>
            <li>
              ✔ All included in <span className="link-text">Proofreading</span>
            </li>
            <li>
              ✔ Verify scientific terminology, units, symbols, and variables.
            </li>
            <li>✔ Rephrase & revise sentences for clarity and word choice.</li>
            <li>✔ Remove repetitions for logical presentation.</li>
            <li>✔ Editing by Subject matter expert</li>
          </ul>
         
          <button className="check-price">
            <a href="/SubEditing">Check Price</a>
          </button>
        </div>

        <div className="service-column">
          <h3>Extensive Substantive Editing</h3>
          <ul>
            <li>
              ✔ All included in{" "}
              <span className="link-text">Substantive Editing</span>
            </li>
            <li>✔ Editing and review by two Subject matter expert</li>
            <li>✔ Rephrase & revise paragraphs for clarity and word choice.</li>
            <li>✔ Improve organization</li>
            <li>✔ Adjust writing style for consistency and logic</li>
            <li>✔ Fact-check statements for scientific accuracy.</li>
          </ul>
          
          <button className="check-price">
            <a href="/ExtensiveSubstantiveEditing">Check Price</a>
          </button>
        </div>

        <div className="service-column">
          <h3>Other Services</h3>
          <ul className="other-services">
            <li>✔ 90Language Translation</li>
            <li>✔ Copy editing</li>
            <li>✔ Thesis Editing</li>
            <li>✔ Dissertation Editing</li>
            <li>✔ Book Editing</li>
            <li>✔ Manual Editing</li>
            <li>✔ Indexing</li>
            <li>✔ Cover Page Design</li>
            <li>✔ Type Setting</li>
            <li>✔ Image Quality Enhancement</li>
            <li>✔ Image Recreation</li>
            <li>✔ Camera Ready Formatting</li>
            <li>✔ Journal Cover Page Design</li>
          </ul>
          <button className="check-price">
            <a href="/QuotationNew">Check Price</a>
          </button>
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            Why Choose ManuscriptEdit for Editing Services?
          </h2>

          <div className="row">
            {/* 1st Benefit */}
            <div className="col-lg-6 mb-5">
              <div className="card h-100 shadow-sm border-0 p-4 ">
                <div className="card-body">
                  <h3 className="card-title">
                    Tailored Editing Services for Every Manuscript
                  </h3>
                  <ul className="list-unstyled mt-3">
                    <li>
                      ✔ Our editing services cover everything from proofreading
                      to advanced scientific editing.
                    </li>
                    <li>
                      ✔ Customized solutions to meet the journal and publication
                      guidelines for academic and research success.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd Benefit */}
            <div className="col-lg-6 mb-5">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title">
                    Ethical and Quality-driven Scientific Editing
                  </h3>
                  <ul className="list-unstyled mt-3">
                    <li>
                      ✔ Expert editors ensure high-quality manual editing for
                      academic and research integrity.
                    </li>
                    <li>
                      ✔ Full compliance with publication ethics, confidentiality
                      and journal standards.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd Benefit */}
            <div className="col-lg-6">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title">
                    Fast Turnaround with High-Quality Editing Results
                  </h3>
                  <ul className="list-unstyled mt-3">
                    <li>
                      ✔ Timely submission of manuscripts with quality checks to
                      meet journal standards.
                    </li>
                    <li>
                      ✔ Dedicated English editing services to enhance clarity,
                      language, and impact.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4th Benefit */}
            <div className="col-lg-6">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title">
                    Global Reach with Proven Editing Expertise
                  </h3>
                  <ul className="list-unstyled mt-3">
                    <li>
                      ✔ Trusted by researchers and institutions in over 100+
                      countries.
                    </li>
                    <li>
                      ✔ A proven track record of helping authors publish in
                      high-impact journals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Final Benefit (full width) */}
          <div className="mt-5">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h3 className="card-title">Expert Support for All Authors</h3>
                <p className="mt-3 mb-0">
                  Our editing services cater to a diverse range of authors,
                  including first-time researchers, experienced scholars, and
                  academic institutions seeking high-quality manuscript
                  improvements. Whether you need scientific editing,
                  proofreading, or formatting for journal submission, our expert
                  editors ensure publication-ready content that meets the
                  highest quality standards. We provide comprehensive support to
                  enhance language clarity, maintain compliance with journal
                  guidelines, and boost your chances for research publication
                  success.
                </p>
              </div>
            </div>
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
            <button className={styles.primaryButton} onClick={() =>
                (window.location.href = "/QuotationNew")
              }>
              Explore All Editing Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            Ensuring High-Quality Editing Services for Research Publication
          </h2>

          <div className="row g-4">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title mb-4">
                    Rigorous Multi-Layered Editing Process for Manuscripts
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Every manuscript undergoes an initial review by our
                      expert editors in academic and scientific editing.
                    </li>
                    <li>
                      ✔ Multiple rounds of checks improve quality, language,
                      formatting, and clarity to meet journal and publication
                      standards.
                    </li>
                    <li>
                      ✔ Proofreading ensures a polished, error-free and
                      publication-ready final manuscript.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Compliance with International Journal Standards */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title mb-4">
                    Compliance with International Journal Standards
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Alignment with APA, MLA, IEEE, and other formatting
                      guidelines for manuscript submission.
                    </li>
                    <li>
                      ✔ Editing services tailored for journal-specific
                      compliance to enhance publication acceptance rates.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Collaborative and Transparent Editing Approach */}
            <div className="col-lg-6">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title mb-4">
                    Collaborative and Transparent Editing Approach
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Authors receive detailed feedback on structure,
                      language, and content improvement.
                    </li>
                    <li>
                      ✔ Direct support from expert editors ensures clarity and
                      alignment with author and journal objectives.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Who Benefits from our Editing Services? */}
            <div className="col-lg-6">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title mb-4">
                    Who Benefits from our Editing Services?
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ First-Time Authors: Guidance for navigating editing and
                      publication challenges.
                    </li>
                    <li>
                      ✔ Experienced Researchers: Advanced scientific editing for
                      high-impact journal submission.
                    </li>
                    <li>
                      ✔ Institutions and Universities: Bulk editing services for
                      faculty and students.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
