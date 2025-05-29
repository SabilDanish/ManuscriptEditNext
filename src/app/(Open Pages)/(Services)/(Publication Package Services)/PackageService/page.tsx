"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import Metadata from "@/app/Metadata";
import { DiscountBanner, DiscountMessage } from "./DiscountSection";
import Dropdown2 from "../Dropdown2/Dropdown2.jsx";
import FaqHome from "@/app/_Common/FaqHome/FaqHome";
import { useEffect, useState } from "react";
import PricingTable from "./PricingTableCurrency.jsx";
import "./packageServ.css";
import ReConstructive from "@/app/_Common/ReConstructive/ReConstructive";
import NewsletterSubscribe from "@/app/_Common/SubsNewsletter/SubsNewsletter";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import "@/app/_Common/Dropdown2/Dropdown2.css";
import PackageImage from "@/app/utils/LogosForIcons/Publication Support.jpg"

const newData: { [key: string]: { [key: string]: string } } = data;

export default function Home() {
  const pathName: string = usePathname()
    .split("/")
    .filter((val) => val)
    .join("");
  let metaData = newData[pathName];

  const [currency, setCurrency] = useState("");
  const [tablePriceFromDB, setTablePriceFromDB] = useState("");

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

  const priceFromDatabase = () => {
    useEffect(() => {
      fetch("https://www.secure.manuscriptedit.com/api/price_table.php")
        .then((response) => response.json())
        .then((data) => {
          setTablePriceFromDB(data);
          // console.log(response)
        });
    }, []);
  };
  priceFromDatabase();

  console.log(tablePriceFromDB[0]);

  const gap = {
    marginTop: "40px",
  };

  const services = [
    {
      package: "Basic Publication Support",
      bestFor: "First-time authors navigating journal submission",
      features: "Journal selection, formatting, and basic submission support",
    },
    {
      package: "Advanced Publication Package",
      bestFor: "Researchers aiming for high-impact journals",
      features:
        "Comprehensive manuscript editing, peer review, and submission assistance",
    },
    {
      package: "Premium Publication Package",
      bestFor: "Authors targeting top-tier journals",
      features:
        "Scientific editing, peer review, journal selection, submission handling, and post-submission support",
    },
    {
      package: "End-to-End Publication",
      bestFor:
        "Those needing full support from manuscript writing to publication",
      features:
        "Manuscript writing, editing, peer review, journal selection, submission, and more",
    },
  ];
  const accord2: { question: string; answer: string }[] = [
    {
      question: "Do you guarantee publication?",
      answer:
        "No, but we significantly improve your manuscript’s quality and journal compatibility.",
    },
    {
      question: "Can you help with manuscript revisions after submission?",
      answer:
        "Yes! We offer post-submission revision and rebuttal letter drafting.",
    },
    {
      question: "Which disciplines do you cover?",
      answer:
        "We support STEM, Humanities, Life Sciences, Medical Research, and Social Sciences.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {<Metadata metaData={metaData} />}

      <section >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            {/* Text Section */}
            <div className="col-lg-8 mb-4 mb-lg-0">
              <div className="p-4 bg-white rounded-4 ">
                <h2 className="fw-bold mb-3">
                  Publication Support Package – Your Gateway to Successful
                  Journal Submission
                </h2>
                <p className="text-muted fs-5">
                  Welcome to <strong>ManuscriptEdit</strong>, your trusted
                  partner in research paper publication support services. Our
                  journal publication services are designed to help researchers
                  easily navigate the journal submission process. We offer
                  expert manuscript editing, plagiarism checks, and peer review
                  to ensure your research meets stringent scientific editing
                  services standards.
                  <br />
                  <br />
                  Additionally, our packages include journal selection, artwork
                  formatting, graphical abstract creation, and illustration
                  creation and formatting. This ensures that your manuscript
                  aligns perfectly with the target journal's requirements,
                  increasing your chances of acceptance.
                </p>
              </div>
            </div>

            {/* Optional Image Section */}
            <div className="col-lg-4 text-center">
              <img
                src={PackageImage.src}
                alt="Publication Support"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: "90%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingTop: "2rem" }}>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="pricing_single-box st-grid-price"
              style={{ position: "relative" }}
            >
              {/* <div className="discount-sticker">35% OFF</div> */}
              <div className="pricing-head" id="PubliPackage">
                <div className="pricing_title">
                  <center>
                    <h4>Premium Plus Package</h4>
                  </center>
                </div>
                <div className="pricing_tk">
                  <center>
                    <h2>
                      <span className="dollar">
                        <s></s> $2134 *
                      </span>
                      <span>30 Days</span>
                    </h2>
                  </center>
                  <DiscountBanner />
                </div>
              </div>
              <div className="pricing_body">
                <div
                  className="featur_itmes "
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Data Analysis</li>
                    <li>Research Paper Writing</li>
                    <li>Substantive Editing</li>
                    <li>Journal Selection</li>
                    <li>Target Journal Formatting</li>
                    <li>Artwork Formatting</li>
                    <li>Cover Letter Writing</li>
                    <li>Journal Submission</li>
                    <li>Response To Reviewer</li>
                    <li>Plagiarism Check</li>
                    <li>Unlimited Assistance *</li>
                  </ul>
                </div>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a onClick={() => (window.location.href = "/QuotationNew")}>
                  Request a Quote <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                <p style={{ fontStyle: "italic", lineHeight: "1.5" }}>
                  *Terms and conditions applied.
                </p>
              </div>
              <DiscountMessage />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="pricing_single-box st-grid-price"
              style={{ position: "relative" }}
            >
              {/* <div className="discount-sticker">35% OFF</div> */}
              <div className="pricing-head">
                <div className="pricing_title">
                  <center>
                    <h4>Premium Package</h4>
                  </center>
                </div>
                <div className="pricing_tk">
                  <center>
                    <h2>
                      <span className="dollar">
                        <s></s> $1534 *
                      </span>
                      <span>20 Days</span>
                    </h2>
                  </center>
                  <DiscountBanner />
                </div>
              </div>
              <div className="pricing_body">
                <div
                  className="featur_itmes "
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Substantive Editing</li>
                    <li>Journal Selection</li>
                    <li>Target Journal Formatting</li>
                    <li>Artwork Formatting</li>
                    <li>Cover Letter Writing</li>
                    <li>Journal Submission</li>
                    <li>
                      Response to Reviewers* (*One response to reviewer free)
                    </li>
                    <li>Plagiarism Check</li>
                    <li>Unlimited Assistance *</li>
                  </ul>
                </div>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a onClick={() => (window.location.href = "/QuotationNew")}>
                  Request a Quote <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                <p style={{ fontStyle: "italic", lineHeight: "1.5" }}>
                  *Terms and conditions applied.
                </p>
              </div>
              <DiscountMessage />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="pricing_single-box st-grid-price"
              style={{ position: "relative" }}
            >
              {/* <div className="discount-sticker">35% OFF</div> */}
              <div className="pricing-head">
                <div className="pricing_title">
                  <center>
                    <h4>Advanced Package</h4>
                  </center>
                </div>
                <div className="pricing_tk">
                  <center>
                    <h2>
                      <span className="dollar">
                        <s></s> $1134 *
                      </span>
                      <span>15 Days</span>
                    </h2>
                  </center>
                  <DiscountBanner />
                </div>
              </div>
              <div className="pricing_body">
                <div
                  className="featur_itmes "
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Substantive Editing</li>
                    <li>Journal Selection</li>
                    <li>Target Journal Formatting</li>
                    <li>Cover Letter Writing</li>
                    <li>Journal Submission</li>
                    <li>Plagiarism Check</li>
                    <li>Unlimited Assistance *</li>
                  </ul>
                </div>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a onClick={() => (window.location.href = "/QuotationNew")}>
                  Request a Quote <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                <p style={{ fontStyle: "italic", lineHeight: "1.5" }}>
                  *Terms and conditions applied.
                </p>
              </div>
              <DiscountMessage />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="pricing_single-box st-grid-price"
              style={{ position: "relative" }}
            >
              {/* <div className="discount-sticker">35% OFF</div> */}
              <div className="pricing-head">
                <div className="pricing_title">
                  <center>
                    <h4>Standard Package</h4>
                  </center>
                </div>
                <div className="pricing_tk">
                  <center>
                    <h2>
                      <span className="dollar">
                        $650 *
                      </span>
                      <span>10 Days</span>
                    </h2>
                  </center>
                  <DiscountBanner />
                </div>
              </div>
              <div className="pricing_body">
                <div
                  className="featur_itmes"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Journal Selection</li>
                    <li>Target Journal Formatting</li>
                    <li>Cover Letter Writing</li>
                    <li>Journal Submission</li>
                    <li>Unlimited Assistance *</li>
                  </ul>
                </div>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a onClick={() => (window.location.href = "/QuotationNew")}>
                  Request a Quote <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                <p style={{ fontStyle: "italic", lineHeight: "1.5" }}>
                  *Terms and conditions applied.
                </p>
              </div>

              <DiscountMessage />
            </div>
          </div>
        </div>
      </div>

      <section className="py-3 bg-white">
        <div className="container">
          <h2 className="text-center mb-5">
            Why choose ManuscriptEdit for Research Paper Publication Support
            Services?
          </h2>

          <div className="row g-4">
            {/* 1. Comprehensive Publication Support */}
            <div className="col-lg-6 mb-4 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title mb-4">
                    Comprehensive Publication Support for Hassle-Free Journal
                    Submission
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Full publication support, from manuscript editing to
                      final journal submission.
                    </li>
                    <li>
                      ✔ Expert guidance on journal selection, manuscript
                      formatting and submission strategies.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2. Expert Consultation */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title mb-4">
                    Expert Consultation & Journal Compliance Assistance
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Align your research with high-impact journals using our
                      journal publication services.
                    </li>
                    <li>
                      ✔ Compliance with Scopus, SCI, PubMed, and top scientific
                      editing services standards.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Ethical, Secure & High-Quality Support */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title mb-4">
                    Ethical, Secure & High-Quality Support
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Adherence to ethical publication standards for
                      compliance with COPE and ICMJE guidelines.
                    </li>
                    <li>
                      ✔ Ensuring confidentiality to protect your research
                      integrity.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Fast and Reliable Process */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title mb-4">
                    Fast and Reliable Journal Submission Process
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Timely assistance to meet crucial journal submission
                      deadlines.
                    </li>
                    <li>
                      ✔ Streamlined processes to minimize manuscript rejections
                      and revisions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. Global Recognition */}
            <div className="col-lg-12">
              <div className="card h-100 shadow-sm border-0 p-4">
                <div className="card-body">
                  <h3 className="card-title mb-4">
                    Global Recognition & Proven Success in Journal Publication
                    Services
                  </h3>
                  <ul className="list-unstyled">
                    <li>
                      ✔ Over 10,000+ authors across 100+ countries have
                      benefited from our research paper publication support
                      services.
                    </li>
                    <li>
                      ✔ Expertise in helping researchers publish in Q1 journals
                      with graphical abstract creation and illustration creation
                      & formatting services.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className="overflow-x-auto ">
          <h2 className="text-xl text-center font-semibold mb-4 pb-4">
            Our Publication Packages at a Glance
          </h2>
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Package</th>
                <th className="p-2 border">Best For</th>
                <th className="p-2 border">Key Features</th>
              </tr>
            </thead>
            <tbody>
              {services.map((item, index) => (
                <tr key={index} className="border">
                  <td className="p-2 border">{item.package}</td>
                  <td className="p-2 border">{item.bestFor}</td>
                  <td className="p-2 border">{item.features}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.buttonGroup}>
            <a href="#PubliPackage">
              <button className={styles.primaryButton}>
                Explore All Publication Packages
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">
            How We Ensure Quality in Research Paper Publication Support Services
          </h2>

          <div className="row g-4">
            {/* Structured & Efficient Journal Submission Workflow */}
            <div className="col-lg-6 mb-4 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <h3 className="mb-4 card-title">
                  Structured & Efficient Journal Submission Workflow
                </h3>
                <ul className="list-unstyled ">
                  <li>
                    ✔ Journal Selection & Manuscript Formatting – Recommending
                    the most suitable journals and ensuring proper formatting
                    for submission.
                  </li>
                  <li>
                    ✔ Pre-Submission Peer Review – Expert feedback to refine
                    research quality.
                  </li>
                  <li>
                    ✔ Submission Management – Complete journal publication
                    services for hassle-free submissions.
                  </li>
                  <li>
                    ✔ Post-Submission Support – Handling reviewer comments and
                    revisions to improve acceptance rates.
                  </li>
                </ul>
              </div>
            </div>

            {/* Compliance with Publishing Standards */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <h3 className="mb-4 card-title">
                  Compliance with International Publishing & Ethical Standards
                </h3>
                <ul className="list-unstyled">
                  <li>
                    ✔ Formatting compliance with APA, IEEE, Elsevier, Springer,
                    Wiley, and Nature guidelines.
                  </li>
                  <li>
                    ✔ Ensuring ethical research integrity with plagiarism-free
                    global publication standards.
                  </li>
                </ul>
              </div>
            </div>

            {/* Transparent Communication */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <h3 className="mb-4 card-title">
                  Transparent Communication & Personalized Assistance
                </h3>
                <ul className="list-unstyled">
                  <li>
                    ✔ Direct collaboration with editors and manuscript editing
                    experts.
                  </li>
                  <li>
                    ✔ Step-by-step updates to streamline the journal submission
                    process.
                  </li>
                </ul>
              </div>
            </div>

            {/* Who Benefits */}
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm p-4">
                <h3 className="mb-4 card-title">
                  Who Benefits from Our Journal Publication Services?
                </h3>
                <ul className="list-unstyled">
                  <li>
                    ✔ Early-Career Researchers – Guidance on navigating research
                    paper publication support services.
                  </li>
                  <li>
                    ✔ Experienced Academics – Optimized strategies for
                    publishing in high-impact journals.
                  </li>
                  <li>
                    ✔ Institutions & Universities – Bulk publication support for
                    faculty and students.
                  </li>
                </ul>
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
