'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import styles from "@/app/_Common/Renovation/Renovation.module.css";

export default function Home() {
  return (
    <>
    <section style={{ marginTop: "40px" }}>
  <div className={styles.textWrapper}>
    <h1 className={styles.heading}>
      Professional Scientific Illustration & Research Figure Design
    </h1>
    <p className={styles.subtext}>
      Enhance the impact of your research with custom scientific illustrations, figures, and graphical abstracts. Our expert designers create high-quality, journal-compliant visuals to effectively communicate complex scientific concepts.
    </p>
    <div className={styles.buttonGroup}>
      <button
        className={styles.primaryButton}
        onClick={() => (window.location.href = "/order-page")}
      >
        Get a Free Illustration Quote
      </button>
      <button
        className={styles.secondaryButton}
        onClick={() => (window.location.href = "/inquiry-form")}
      >
        Speak with an Illustration Expert
      </button>
    </div>
  </div>
</section>

<section className={styles.benefitsWrapper} style={{ marginTop: "40px" }}>
  <div className={styles.benefitsBox}>
    <h2 className={styles.heading}>Why Choose Our Scientific Illustration Services?</h2>
    <p className={styles.subtext}>
      <strong>
        ManuscriptEdit’s Illustration Services provide high-quality, custom scientific illustrations for your research. 
        Our key benefits include:
      </strong>
    </p>
    <ul className={styles.benefitsList}>
      <li>✅ Custom Scientific & Academic Illustrations – Designed by PhD experts & professional illustrators.</li>
      <li>✅ High-Resolution, Print-Ready Figures – Delivered in PNG, JPG, TIFF, AI, and vector formats.</li>
      <li>✅ Graphical Abstracts & Research Diagrams – Professionally designed for journal submissions and conferences.</li>
      <li>✅ Journal-Specific Compliance & Formatting – Ensuring publication-ready graphics for Elsevier, Springer, Wiley, and IEEE.</li>
      <li>✅ Confidential & Secure Illustration Handling – Ethical, AI-free, and plagiarism-free artwork creation.</li>
    </ul>
    <button 
      className={styles.primaryButton} 
      onClick={() => (window.location.href = "/sample-scientific-illustration")}
    >
      Request a Sample Scientific Illustration
    </button>
  </div>
</section>

    </>
  );
}
