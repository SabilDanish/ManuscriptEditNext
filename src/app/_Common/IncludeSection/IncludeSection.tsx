import styles from "./IncludeSection.module.css";

export default function IncludeSection() {
  return (
    <>
      <section className={styles.proofreadingWrapper}>
        <h2 className={styles.headingCenter}>
          What Does Proofreading Include?
        </h2>
        <div className={styles.proofreadingGrid}>
          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>🚫 Not Included</h3>
            <ul className={styles.proofreadingList}>
              <li>❌ No structural or content-level changes</li>
              <li>❌ No sentence rewrites or paraphrasing</li>
              <li>❌ No formatting adjustments for journal guidelines</li>
            </ul>
          </div>
          <div className={styles.proofreadingBox}>
            <h3 className={styles.proofreadingSubheading}>✔ Included</h3>

            <ul className={styles.proofreadingList}>
              <li>✔ Correction of spelling, grammar, and punctuation errors</li>
              <li>
                ✔ Fixing minor inconsistencies like verb tense and missing
                articles
              </li>
              <li>✔ Ensuring proper word usage and sentence-level clarity</li>
              <li>
                ✔ Basic formatting consistency (capitalization, numbering)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
