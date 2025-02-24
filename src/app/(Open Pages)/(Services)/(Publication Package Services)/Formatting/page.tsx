'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import styles from "@/app/_Common/Renovation/Renovation.module.css";
import "@/app/_Common/Renovation/Renovation.css";
import "@/app/_Common/Dropdown2/Dropdown2.css";

export default function Home() {
  return (
  <>
  <section style={{ marginTop: "40px" }}>
  <div className={styles.textWrapper}>
    <h1 className={styles.heading}>
      Professional Journal Formatting – Get Your Manuscript Submission-Ready
    </h1>
    <p className={styles.subtext}>
      Ensure your manuscript is formatted precisely according to journal guidelines. Our expert formatting service ensures error-free citations, structured references, word count adherence, figure/table alignment, and journal-compliant layout for seamless submission.
    </p>
    <div className={styles.buttonGroup}>
      <button
        className={styles.primaryButton}
        onClick={() => (window.location.href = "/order-page")}
      >
        Get Journal Formatting Assistance
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
    <h2 className={styles.heading}>Why Choose Our Journal Formatting Services?</h2>
    <p className={styles.subtext}>
      <strong>
        ManuscriptEdit’s Journal Formatting Services ensure that your manuscript adheres to all required guidelines for successful submission. 
        Our key benefits include:
      </strong>
    </p>
    <ul className={styles.benefitsList}>
      <li>✅ Expert Formatting for All Major Journals – Compliance with Elsevier, Springer, Wiley, BMJ, PLOS ONE, Nature, IEEE, and more.</li>
      <li>✅ Accurate Citation & Reference Formatting – Supporting APA, MLA, Chicago, Harvard, Vancouver, IEEE, and custom journal styles.</li>
      <li>✅ Error-Free Manuscript Structure & Layout – Ensuring proper font, margins, headings, subheadings, and figure placement.</li>
      <li>✅ Tables, Figures & Equations Alignment – Correcting table formatting, figure captions, and equation placement.</li>
      <li>✅ Word Count, Section & Cover Letter Compliance – Adhering to abstract length, body structure, and submission formatting rules.</li>
    </ul>
    <button 
      className={styles.primaryButton} 
      onClick={() => (window.location.href = "/journal-formatting-process")}
    >
      Learn More About Our Formatting Process
    </button>
  </div>
</section>

  </>
  );
}
