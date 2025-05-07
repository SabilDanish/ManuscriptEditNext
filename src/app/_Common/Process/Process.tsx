import "./Process.css";
import styles from "./Processs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileUpload,
  faSearch,
  faEdit,
  faCheckCircle,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

export default function Process() {
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

  return (
    <>
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
          <button className="editing-overview-button-unique ">
            Get Proofreading Now
          </button>
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
              className="editing-overview-button-unique"
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

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button className="editing-overview-button-unique">
                Compare All Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
