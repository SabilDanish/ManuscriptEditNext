"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
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

      <section style={gap}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Publication Package – Your Path to Seamless Journal Submission
          </h1>
          <p className={styles.subtext}>
            Welcome to ManuscriptEdit, your trusted partner in comprehensive
            publication support. Our Publication Packages are designed to help
            researchers navigate the submission process, ensuring their
            manuscripts meet journal requirements and increase their chances of
            acceptance.
          </p>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            Why Choose ManuscriptEdit for Publication Support?
          </h2>

          <section className={styles.benefitsWrapper}>
            <h4>End-to-End Assistance for Hassle-Free Publishing</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Comprehensive support from manuscript preparation to final
                submission.
              </li>
              <li>
                ✅ Expert guidance on journal selection, formatting, and
                submission strategies.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Expert Consultation & Journal-Specific Compliance</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Align your manuscript with impactful journals in your field.
              </li>
              <li>
                ✅ Compliance with Scopus, SCI, PubMed, and high-impact journal
                guidelines.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Ethical, Confidential & High-Quality Support</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Ethical publication practices ensuring compliance with COPE
                and ICMJE guidelines.
              </li>
              <li>
                ✅ Strict confidentiality measures to protect your research.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Fast & Reliable Submission Process</h4>
            <ul className={styles.benefitsList}>
              <li>✅ Timely assistance to meet submission deadlines.</li>
              <li>
                ✅ Streamlined processes to reduce rejections and revisions.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Global Recognition & Proven Track Record</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Supported 10,000+ authors across 100+ countries in publishing
                successfully.
              </li>
              <li>
                ✅ Experienced in helping researchers publish in Q1 and
                high-impact journals.
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className="overflow-x-auto p-4">
          <h2 className="text-xl font-semibold mb-4">
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
            <a href="https://secure.manuscriptedit.com/quotation">
              <button className={styles.primaryButton}>
                Explore All Publication Packages
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            How We Ensure Quality in Publication Support
          </h2>

          <h4 style={{ marginTop: "30px", marginBottom: "30px" }}>
            Structured & Efficient Publication Workflow
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✅ Journal Selection & Formatting – We recommend the most suitable
              journals for your manuscript.
            </li>
            <li>
              ✅ Pre-Submission Peer Review – Feedback from experts to refine
              your research.
            </li>
            <li>
              ✅ Submission Management – Complete journal submission assistance.
            </li>
            <li>
              ✅ Post-Submission Support – Handling reviewer comments and
              resubmission.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            Compliance with International Publishing Standards
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✅ Formatting compliance with APA, IEEE, Elsevier, Springer,
              Wiley, and Nature guidelines.
            </li>
            <li>✅ Ensuring ethical and plagiarism-free publication.</li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            Transparent Communication & Personalized Assistance
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✅ Direct collaboration with editors and publication specialists.
            </li>
            <li>✅ Step-by-step updates throughout the publication process.</li>
          </ul>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h4 style={{ marginBottom: "30px" }}>
            Who Benefits from Our Publication Support?
          </h4>
          <ul className={styles.benefitsList}>
            <li>
              ✅ Early-Career Researchers – Assistance in navigating journal
              submission.
            </li>
            <li>
              ✅ Experienced Academics – Optimized publication strategies for
              high-impact journals.
            </li>
            <li>
              ✅ Institutions & Universities – Bulk publication support for
              faculty and students.
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
