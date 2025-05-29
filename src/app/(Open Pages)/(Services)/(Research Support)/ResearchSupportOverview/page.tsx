"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import whyToChoose from "@/app/_Common/_WhyToChoose/WhyToChoose";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import Head from "next/head";
import ResearchImg from "@/app/utils/LogosForIcons/Research & Statistical Analysis.jpg"

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
      <Head>
        <link
          rel="canonical"
          href="https://manuscriptedit.com/ResearchSupportOverview/"
        />
      </Head>
      <section>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* Text Section */}
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="p-4 bg-white rounded-4">
                <h2 className="fw-bold mb-3">
                  Research Support – Elevate Your Research with Expert
                  Statistical Analysis &amp; Data Review
                </h2>
                <p className="text-muted fs-5">
                  Welcome to <strong>ManuscriptEdit</strong>, your trusted
                  partner in comprehensive research support. We provide expert
                  assistance at every stage of your research journey, from topic
                  selection to statistical data analysis and manuscript writing
                  assistance. Our specialized experts ensure that your research
                  is well-structured, data-driven, and impactful.
                </p>
              </div>
            </div>

            {/* Optional Image Section */}
            <div className="col-lg-4 text-center">
              <img
                src={ResearchImg.src}
                alt="Research Support"
                className="img-fluid rounded-4 shadow-sm"
                style={{ maxWidth: "90%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5">
            Why Choose ManuscriptEdit for Research Support?
          </h2>

          <div className="row g-4">
            {/* Customized Research Assistance */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <h3 className="mb-3 card-title">
                  Customized Research Assistance for Every Stage
                </h3>
                <ul className="list-unstyled">
                  <li>
                    ✔ Support for early-stage research, literature review,
                    methodology, and statistical analysis.
                  </li>
                  <li>
                    ✔ Guidance in hypothesis framing, study design, and accurate
                    statistical services.
                  </li>
                </ul>
              </div>
            </div>

            {/* Expert-Led Development */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <h3 className="mb-3 card-title">
                  Expert-Led Research Development
                </h3>
                <ul className="list-unstyled">
                  <li>
                    ✔ PhD and domain experts specializing in statistical
                    analysis.
                  </li>
                  <li>
                    ✔ Help with quantitative, qualitative, and mixed-method
                    studies using accurate data insights.
                  </li>
                </ul>
              </div>
            </div>

            {/* Ethical Practices */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <h3 className="mb-3 card-title">
                  Ethical & Reliable Research Practices
                </h3>
                <ul className="list-unstyled">
                  <li>
                    ✔ Full adherence to academic integrity and ethical
                    standards.
                  </li>
                  <li>
                    ✔ Plagiarism-free research support, compliant with journal
                    standards.
                  </li>
                </ul>
              </div>
            </div>

            {/* Data-Driven Analysis */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <h3 className="mb-3 card-title">
                  Data-Driven Insights & Advanced Analysis
                </h3>
                <ul className="list-unstyled">
                  <li>
                    ✔ Proficiency with SPSS, MATLAB, R, Python, NVivo for deep
                    statistical insights.
                  </li>
                  <li>✔ Data visualization and interpretation services.</li>
                </ul>
              </div>
            </div>

            {/* Proven Track Record */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <h3 className="mb-3 card-title">
                  Proven Track Record in Research Success
                </h3>
                <ul className="list-unstyled">
                  <li>
                    ✔ Helped thousands of researchers deliver high-quality
                    research with strong analytics.
                  </li>
                  <li>
                    ✔ Support for journal-ready manuscript and conference
                    presentation preparation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-center">
            Our Research Support Services at a Glance
          </h2>

          <div className="table-responsive mb-5">
            <table className="table table-bordered table-striped">
              <thead className="table-secondary">
                <tr>
                  <th>Service</th>
                  <th>Best For</th>
                  <th>Key Features</th>
                </tr>
              </thead>
              <tbody>
                {services.map((item, index) => (
                  <tr key={index}>
                    <td>{item.service}</td>
                    <td>{item.bestFor}</td>
                    <td>{item.features}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mb-5">
            <a
              href="https://manuscriptedit.com/QuotationNew/"
              className="btn btn-primary"
            >
              Explore All Editing Services
            </a>
          </div>

          {/* Quality Assurance Section */}
          <div className="mb-5">
            <h2 className="text-center mb-4">
              How We Ensure Quality in Research Support with Expert Statistical
              Analysis
            </h2>
            <div className="row g-4">
              {/* Structured & Tailored */}
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm p-4">
                  <h3 className="mb-3 card-title">
                    Structured & Tailored Research Guidance
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li>
                      ✔ Research experts provide expert-led writing and editing
                      tailored to your target audience.
                    </li>
                    <li>
                      ✔ Comprehensive quality checks to enhance clarity,
                      consistency, and coherence, refining content for
                      high-impact journals.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Compliance */}
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm p-4">
                  <h3 className="mb-3 card-title">
                    Compliance with Academic & Research Standards
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li>
                      ✔ Our medical writing assistance service ensures full
                      adherence to guidelines for journal publication, clinical
                      research, and regulatory approvals.
                    </li>
                    <li>
                      ✔ Expertise in academic writing assistance services,
                      providing manuscript formatting and editing services for
                      medical and academic needs.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Transparent Support */}
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm p-4">
                  <h3 className="mb-3 card-title">
                    Transparent Communication & Real-Time Support
                  </h3>
                  <ul className="list-unstyled mb-0">
                    <li>
                      ✔ Regular updates on analysis and research milestones
                    </li>
                    <li>
                      ✔ Direct collaboration with mentors, analysts, and
                      statistical review experts for statistical data analysis
                      services.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Who Benefits */}
              <div className="row" style={{justifyContent:'center'}}>
                <div className="col-md-10 mb-4">
                  <div className="card h-100 shadow-sm p-4">
                    <h2 className="mb-3 ">
                      Who Benefits from Our Research Support?
                    </h2>
                    <ul className="list-unstyled mb-0">
                      <li>
                        ✔ Researchers: Research writing assistance services,
                        including manuscript editing services, research paper
                        assistance, and grant proposal writing to help
                        researchers publish in high-impact journal publications.
                      </li>
                      <li>
                        ✔ Healthcare Professionals: Medical writing assistance
                        services cover clinical research documentation,
                        regulatory submissions, and Continuing Medical Education
                        (CME) content.
                      </li>
                      <li>
                        ✔ Institutions & Universities: Academic writing
                        assistance services, offering writing support for
                        faculty and students.
                      </li>
                    </ul>
                  </div>
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
