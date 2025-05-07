// import styles from "./Renovation.module.css";
// import "./Renovation.css";

// import HeroSection from "../HeroSection/HeroSection";
// import SummarySection from "../SummarySection/SummarySection";
// import IncludeSection from "../IncludeSection/IncludeSection";
// import Process from "../Process/Process";

// export default function ProofreadingServices() {
//   const gap = {
//     marginTop: "40px",
//   };
//   return (
//     <div>
//       <HeroSection>
//         <section style={gap}>
//           <div className={styles.textWrapper}>
//             <h1 className={styles.heading}>
//               Polish Your Research with Expert Proofreading Services
//             </h1>
//             <p className={styles.subtext}>
//               Ensure your manuscript is free from grammar, punctuation, and
//               spelling errors with professional proofreading tailored for
//               academic and research documents.
//             </p>
//             <div className={styles.buttonGroup}>
//               <button className="editing-overview-button-unique ">
//                 Get Proofreading Now
//               </button>
//               <button className="editing-overview-button-unique ">
//                 Request a Free Sample
//               </button>
//             </div>
//           </div>
//         </section>
//       </HeroSection>
//       <SummarySection />
//       <IncludeSection />
//       <Process />
//     </div>
//   );
// }

import styles from "./Renovation.module.css";
import "./Renovation.css";
import "@/app/(Open Pages)/(Services)/(Editing)/ProofReading/Proofreading.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileUpload,
  faSearch,
  faEdit,
  faCheckCircle,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
import DependantTabSampleWorks from "../DependantTabSampleWorks/DependantTabSampleWorks";

export default function ProofreadingServices() {
  const steps = [
    {
      stepss: "Step 1 ➔",
      icon: faFileUpload,
      title: "Upload Your Document",
      description: "Submit your manuscript via the secure portal.",
    },
    {
      stepss: "Step 2 ➔",
      icon: faSearch,
      title: "Proofreaders Review It",
      description: "Experts correct grammar, punctuation, and minor issues.",
    },
    {
      stepss: "Step 3 ➔",
      icon: faEdit,
      title: "Receive Your Polished Manuscript",
      description: "A clean, error-free document ready for submission.",
    },
    {
      stepss: "Step 4 ➔",
      icon: faCheckCircle,
      title: "Optional Revisions",
      description: "Free minor revisions available after delivery.",
    },
  ];

  const gap = {
    marginTop: "40px",
  };

  return (
    <div>
      <section style={gap}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Enhance Your Manuscript with Expert Proofreading and English Editing
            Services
          </h1>
          <p className={styles.subtext}>
            Ensure your manuscript is free from grammar, punctuation, and
            typographical errors with our expert proofreading and English
            editing services. We provide high-quality language refinement
            tailored for research papers, scientific reports, and journal
            submissions, helping you meet the publication standards.
          </p>
          <div className={styles.buttonGroup}>
            <a href="https://manuscriptedit.com/QuotationNew/">
              {" "}
              <button className={styles.primaryButton}>
                Get Proofreading Now
              </button>
            </a>
            <a href="https://manuscriptedit.com/QuotationNew/">
              <button className={styles.secondaryButton}>
                Request a Free Sample
              </button>
            </a>
          </div>
        </div>
      </section>

      <div
        className="proofreading-container container"
        style={{ marginTop: "40px" }}
      >
        <div className="proofreading-tab">Proofreading</div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <ul className="service-list">
                <li>✓ Thorough reading of manuscript.</li>
                <li>✓ Spotting all errors.</li>
                <li>✓ Review capitalization and punctuation.</li>
                <li>✓ Check for spelling, grammar, and typos.</li>
                <li>✓ Remove redundancies</li>
                <li>✓ Rectify improper word usage.</li>
              </ul>
            </div>

            <div className="col-lg-5">
              <div className="free-section">
                <span className="free-label">You receive for free</span>
                <ul className="free-list">
                  <li>✓ Native English Editing Certificate</li>
                  <li>✓ 2 round of free re-editing</li>
                  <li>✓ 2 round of chat communication with Expert</li>
                </ul>
              </div>

              <button className="submit-btn">
                <a
                  href="https://manuscriptedit.com/AuthorDashboard/"
                  style={{ color: "white" }}
                >
                  Submit Manuscript Now
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "40px" }}>
        <section>
          <DependantTabSampleWorks />
        </section>
      </div>

      {/* Proofreading Overview Section */}
      <section className={styles.benefitsWrapper}>
        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            Why choose Professional Proofreading?
          </h2>
          <p className={styles.subtext}>
            Proofreading is the final step in the editing process, ensuring that
            your academic or scientific document is error-free and
            publication-ready. High-quality proofreading improves clarity,
            consistency, and readability, increasing your chances of journal
            acceptance.
          </p>
        </div>

        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>Who Benefits from this Service?</h2>
          <ul className={styles.benefitsList}>
            <li>
              {" "}
              ✔ Researchers preparing manuscripts for journal publication
            </li>
            <li>✔ PhD and MS students working</li>
            <li>
              ✔ Academics and professionals submitting scientific reports,
              conference papers, and grant proposals
            </li>
            <li>
              ✔ Authors seeking editing services to refine their work before
              submission
            </li>
          </ul>
        </div>

        <div className={styles.benefitsBox}>
          <h2 className={styles.heading}>
            Key benefits of our Proofreading Services
          </h2>
          <ul className={styles.benefitsList}>
            <li>✔ Eliminates grammar, punctuation, and typographical errors</li>
            <li>
              ✔ Ensures language accuracy while maintaining an academic tone
            </li>
            <li>
              ✔ Provides fast turnaround to meet journal submission deadlines
            </li>
          </ul>
        </div>
      </section>

      {/* New Proofreading Details Section */}
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

      <div className={styles.processContainer}>
        <h2 className={styles.processTitle}>How It Works</h2>
        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <h5 className={styles.stepHeading}>{step.stepss}</h5>
              <FontAwesomeIcon
                icon={step.icon}
                size="3x"
                className={styles.stepIcon}
              />
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.buttonGroup}>
          <a href="https://manuscriptedit.com/QuotationNew/">
            <button className={styles.primaryButton}>
              Get Proofreading Now
            </button>
          </a>
        </div>

        <section className="editing-overview-section">
          <h2 className="editing-overview-heading">
            When Should You Choose Proofreading?
          </h2>
          <table className="editing-overview-table">
            <thead>
              <tr>
                <th>Your Document Stage</th>
                <th>Best Service</th>
                <th>Why?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ready for submission, just needs final error check</td>
                <td>Proofreading</td>
                <td>Ensures no grammar or spelling mistakes</td>
              </tr>
              <tr>
                <td>Needs improvement in clarity and sentence structure</td>
                <td>Copyediting</td>
                <td>Enhances readability and academic tone</td>
              </tr>
              <tr>
                <td>Needs logical restructuring and better argument flow</td>
                <td>Substantive Editing</td>
                <td>Strengthens content coherence</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="before-after-example-section">
          <h2 className="before-after-example-heading">
            Before and After Example
          </h2>

          <div className="before-after-example-content">
            <div className="before-example">
              <h3>Before (Original Text with Errors):</h3>
              <p className="before-text">
                "The study focus on artificial intelligence impact on medical
                diagnosis, which have seen a increse in accuracy rate."
              </p>
            </div>

            <div className="after-example">
              <h3>After (Proofread Text):</h3>
              <p className="after-text">
                "The study focuses on the impact of artificial intelligence on
                medical diagnosis, which has seen an increase in accuracy rate."
              </p>
            </div>
          </div>

          <div className="explanation">
            <p>
              Proofreading corrects minor errors but does not change sentence
              structure or improve readability.
            </p>
          </div>
        </section>

        <section className="pricing-turnaround-section">
          <h2 className="pricing-turnaround-heading">
            Pricing and Turnaround Time
          </h2>

          <div className="pricing-details">
            <div className="pricing-item">
              <h3>Starting Price</h3>
              <p className="pricing-text">$0.03 per word</p>
            </div>

            <div className="delivery-item">
              <h3>Standard Delivery</h3>
              <p className="delivery-time">Two to four days</p>
            </div>

            <div className="delivery-item">
              <h3>Express Delivery</h3>
              <p className="delivery-time">
                Eight to twenty-four hours available at additional cost
              </p>
            </div>
          </div>

          <div className="cta-container">
            <a
              href="https://manuscriptedit.com/QuotationNew/"
              className="cta-button"
            >
              Check Pricing and Get a Quote
            </a>
          </div>
        </section>

        <section className="editing-overview-section-unique">
          <div className="editing-overview-container-unique">
            <h2 className="editing-overview-title-unique">
              Editing Services Comparison
            </h2>
            <table className="editing-overview-table-unique">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Proofreading</th>
                  <th>Copyediting</th>
                  <th>Substantive Editing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fixes grammar, punctuation, typos</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Improves sentence structure & clarity</td>
                  <td>❌</td>
                  <td>✔</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Ensures logical flow & coherence</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
                <tr>
                  <td>Heavy restructuring & rewriting</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✔</td>
                </tr>
              </tbody>
            </table>
            <p className="editing-overview-description-unique">
              If your manuscript needs deeper clarity improvements, consider
              Copyediting or Substantive Editing.
            </p>
            <a href="https://manuscriptedit.com/QuotationNew/">
              <button className="editing-overview-button-unique">
                Compare All Services
              </button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
