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
      Professional Response to Reviewers Service – Get Your Paper Accepted Faster
    </h1>
    <p className={styles.subtext}>
      Increase your chances of journal acceptance with a professionally crafted response to reviewers. Our experts provide structured, respectful, and scientifically sound responses, ensuring a smooth resubmission process.
    </p>
    <div className={styles.buttonGroup}>
      <button
        className={styles.primaryButton}
        onClick={() => (window.location.href = "/order-page")}
      >
        Get Reviewer Response Assistance
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
    <h2 className={styles.heading}>Why Choose Our Response to Reviewers Service?</h2>
    <p className={styles.subtext}>
      <strong>
        ManuscriptEdit’s Reviewer Response Services help you craft the perfect responses to journal reviewers to enhance your chances of acceptance. 
        Our key benefits include:
      </strong>
    </p>
    <ul className={styles.benefitsList}>
      <li>✅ Expert Review Response Drafting – Ensuring clear, structured, and scientifically accurate responses.</li>
      <li>✅ Respectful & Persuasive Language – Addressing reviewers’ concerns professionally and effectively.</li>
      <li>✅ Journal-Specific Compliance – Adapting responses to Elsevier, Springer, Wiley, BMJ, PLOS ONE, IEEE, and other high-impact journals.</li>
      <li>✅ Manuscript Revision Support – Assisting with clarifications, rebuttals, and suggested modifications.</li>
      <li>✅ Fast Turnaround & Resubmission Tracking – Ensuring timely responses to avoid unnecessary delays.</li>
    </ul>
    <button 
      className={styles.primaryButton} 
      onClick={() => (window.location.href = "/response-to-reviewers-process")}
    >
      Learn More About Our Response to Reviewers Process
    </button>
  </div>
</section>

   </>
  );
}
