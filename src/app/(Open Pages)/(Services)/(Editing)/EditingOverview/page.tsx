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
import "../../../../_Common/getHelp/getHelp.css";
import Dropdown2 from "@/app/_Common/Dropdown2/Dropdown2";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import { useEffect, useState } from "react";

import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/app/_Common/Dropdown2/Dropdown2.css";

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

  return (
    <>
 {<Metadata metaData={metaData} />}
      <section style={gap}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Your Path to Polished, Publication-Ready Manuscripts
          </h1>
          <p className={styles.subtext}>
            Welcome to ManuscriptEdit, your trusted partner in academic and
            scientific editing. Our expert editors refine your manuscripts,
            ensuring they meet the highest publication standards and clearly
            communicate your research findings.
          </p>
        </div>
      </section>

      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            Why Choose ManuscriptEdit for Editing?
          </h2>

          <section className={styles.benefitsWrapper}>
            <h4>Tailored Services for Every Requirement</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Our offerings range from basic proofreading to advanced
                substantive editing.
              </li>
              <li>
                ✅ Customized solutions that meet journal and institutional
                guidelines.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Ethical, Integrity-Driven Practices</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ All editing is conducted manually by experts to maintain
                academic and research integrity.
              </li>
              <li>
                ✅ Full compliance with global publication ethics and
                confidentiality standards.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Fast Turnaround with Uncompromised Quality</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Timely delivery of edited manuscripts with meticulous quality
                checks.
              </li>
              <li>
                ✅ Dedicated editorial processes to ensure consistency and
                accuracy.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Global Reach and Proven Results</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ Trusted by researchers and institutions in over 100
                countries.
              </li>
              <li>
                ✅ A track record of helping authors publish in high-impact
                journals.
              </li>
            </ul>
          </section>

          <section className={styles.benefitsWrapper}>
            <h4>Global Reach and Proven Results</h4>
            <ul className={styles.benefitsList}>
              <li>
                ✅ <strong>First-Time Authors:</strong> Receive guidance and
                support to navigate publication challenges.
              </li>
              <li>
                ✅ <strong>Experienced Researchers:</strong> Advanced editing to
                meet high-impact journal standards.
              </li>
              <li>
                ✅ <strong>Institutions & Universities:</strong> Bulk editing
                services tailored to the needs of faculty and students.
              </li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
