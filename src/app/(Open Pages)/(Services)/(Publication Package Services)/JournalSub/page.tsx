'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import styles from "@/app/_Common/Renovation/Renovation.module.css";

export default function Home() {
  return (
   <>
   <section style={{ marginTop: "40px" }}>
  <div className={styles.textWrapper}>
    <h1 className={styles.heading}>
      Hassle-Free Journal Submission – Submit Your Research with Confidence
    </h1>
    <p className={styles.subtext}>
      Increase your chances of journal acceptance with our expert submission support. We handle journal selection, formatting, cover letter drafting, reviewer responses, and submission tracking for high-impact publications.
    </p>
    <div className={styles.buttonGroup}>
      <button
        className={styles.primaryButton}
        onClick={() => (window.location.href = "/order-page")}
      >
        Get Journal Submission Assistance
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
    <h2 className={styles.heading}>Why Choose Our Journal Submission Services?</h2>
    <p className={styles.subtext}>
      <strong>
        ManuscriptEdit’s Journal Submission Services offer comprehensive support to ensure that your manuscript is submitted smoothly and successfully to the right journal. 
        Our key benefits include:
      </strong>
    </p>
    <ul className={styles.benefitsList}>
      <li>✅ Expert Journal Submission Assistance – Ensuring flawless manuscript submission with all journal guidelines met.</li>
      <li>✅ Cover Letter & Manuscript Formatting – Creating persuasive cover letters and journal-specific formatted manuscripts.</li>
      <li>✅ Submission to Scopus, Web of Science, PubMed, Elsevier, Springer, Wiley & More – Expert navigation of complex submission portals.</li>
      <li>✅ Peer Review & Reviewer Response Handling – Managing editorial communication and reviewer comment responses.</li>
      <li>✅ Fast-Track Submission for High-Impact Journals – Increasing acceptance chances with complete submission compliance.</li>
    </ul>
    <button 
      className={styles.primaryButton} 
      onClick={() => (window.location.href = "/submission-process")}
    >
      Learn More About Our Submission Process
    </button>
  </div>
</section>

   </>
  );
}
