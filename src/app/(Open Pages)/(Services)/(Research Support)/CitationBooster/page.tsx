'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import redirect from "@/app/_Common/_functionality/Redirect";
import styles from "@/app/_Common/Renovation/Renovation.module.css";

export default function Home() {
  return (
    <>
    <section style={{ marginTop: "40px" }}>
  <div className={styles.textWrapper}>
    <h1 className={styles.heading}>
      Boost Your Research Citations & Academic Impact
    </h1>
    <p className={styles.subtext}>
      Increase the visibility and credibility of your research with our expert-driven Citation Booster Services. We help researchers optimize research discoverability, increase citations, and enhance academic impact across Google Scholar, Scopus, and Web of Science.
    </p>
    <div className={styles.buttonGroup}>
      <button
        className={styles.primaryButton}
        onClick={() => (window.location.href = "/order-page")}
      >
        Boost My Citations Now
      </button>
      <button
        className={styles.secondaryButton}
        onClick={() => (window.location.href = "/inquiry-form")}
      >
        Speak with a Citation Expert
      </button>
    </div>
  </div>
</section>

<section className={styles.benefitsWrapper} style={{ marginTop: "40px" }}>
  <div className={styles.benefitsBox}>
    <h2 className={styles.heading}>Why Choose Our Citation Booster Services?</h2>
    <p className={styles.subtext}>
      <strong>
        ManuscriptEdit’s Citation Growth Services help you maximize the visibility and impact of your research. 
        Our key benefits include:
      </strong>
    </p>
    <ul className={styles.benefitsList}>
      <li>✅ Google Scholar & Scopus Citation Optimization – Increasing research discoverability across indexing platforms.</li>
      <li>✅ Metadata Enhancement for Academic Search Engines – Improving journal indexing, DOI linking, and SEO visibility.</li>
      <li>✅ Cross-Referencing & Collaboration Strategies – Expanding citation potential through networking and research impact analysis.</li>
      <li>✅ Journal Visibility Enhancement – Ensuring papers are optimally listed in high-traffic databases.</li>
      <li>✅ AI-Free, Ethical Citation Growth Strategies – 100% compliant with academic integrity guidelines.</li>
    </ul>
    <button 
      className={styles.primaryButton} 
      onClick={() => (window.location.href = "/citation-impact-report")}
    >
      Request a Citation Impact Report
    </button>
  </div>
</section>

    </>
  );
}
