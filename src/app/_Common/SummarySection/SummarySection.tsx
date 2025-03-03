import styles from "./SummarySection.module.css";

export default function SummarySection() {
  return (
    <>
      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>What is Proofreading?</h2>
          <p className={styles.subtext}>
            Proofreading is the final stage of the editing process, ensuring
            that your document is error-free before submission.
          </p>
        </div>

        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>Who Should Use This Service?</h2>
          <ul className={styles.benefitsList}>
            <li>✔ PhD and MS students preparing theses and dissertations</li>
            <li>
              ✔ Doctors and academics submitting journal articles, conference
              papers, and grant proposals
            </li>
            <li>
              ✔ Researchers refining scientific and technical reports for
              publication
            </li>
          </ul>
        </div>

        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>Key Benefits</h2>
          <ul className={styles.benefitsList}>
            <li>✔ Eliminates grammar, punctuation, and typographical errors</li>
            <li>
              ✔ Focuses on language accuracy while maintaining academic voice
            </li>
            <li>✔ Provides a fast turnaround to meet submission deadlines</li>
          </ul>
        </div>
      </section>
    </>
  );
}
