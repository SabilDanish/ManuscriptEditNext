'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";
import styles from "@/app/_Common/Renovation/Renovation.module.css";


export default function Home() {
  return (
    <>
    <section style={{ marginTop: "40px" }}>
  <div className={styles.textWrapper}>
    <h1 className={styles.heading}>
      Find the Best Journal for Your Research – Expert Journal Selection Assistance
    </h1>
    <p className={styles.subtext}>
      Maximize your chances of journal acceptance with our expert journal selection service. Our specialists evaluate impact factor, indexing, scope, and acceptance rates to identify the most suitable journals for your manuscript.
    </p>
    <div className={styles.buttonGroup}>
      <button
        className={styles.primaryButton}
        onClick={() => (window.location.href = "/order-page")}
      >
        Get Journal Selection Assistance
      </button>
      <button
        className={styles.secondaryButton}
        onClick={() => (window.location.href = "/inquiry-form")}
      >
        Request a Free Consultation
      </button>
    </div>
  </div>
</section>
<section className={styles.benefitsWrapper} style={{ marginTop: "40px" }}>
<div className={styles.benefitsBox}>
  <h2 className={styles.heading}>Why Choose Our Journal Selection Services?</h2>
  <p className={styles.subtext}>
    <strong>ManuscriptEdit’s Journal Selection Services provide researchers with expert assistance to ensure that their work is submitted to the most relevant and reputable journals. 
    Our key benefits include:</strong>
  </p>
  <ul className={styles.benefitsList}>
    <li>✅ Expert Recommendation by PhD Specialists – Identifying journals indexed in Scopus, Web of Science, PubMed, and DOAJ.</li>
    <li>✅ Impact Factor & Q1/Q2 Ranking Analysis – Recommending journals with high acceptance rates and strong citations.</li>
    <li>✅ Avoiding Predatory Journals – Screening journal legitimacy and ethical publishing standards.</li>
    <li>✅ Customized Journal Shortlisting – Based on subject area, manuscript type, and research scope.</li>
    <li>✅ Journal Submission Guidelines & Formatting – Ensuring journal-specific compliance before submission.</li>
  </ul>
  <button 
    className={styles.primaryButton} 
    onClick={() => (window.location.href = "/journal-selection-process")}
  >
    Learn More About Our Journal Selection Process
  </button>
</div>
</section>

    </>
  );
}
