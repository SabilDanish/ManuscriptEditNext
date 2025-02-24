"use client";
import Metadata from "@/app/Metadata";
import PeerForm from "@/app/_Common/PeerForm/PeerForm";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import styles from "@/app/_Common/Renovation/Renovation.module.css";

const newData: { [key: string]: { [key: string]: string } } = data;

export default function Home() {
  let vari = "p < 0.05";
  const pathName: string = usePathname()
    .split("/")
    .filter((val) => val)
    .join("");
  let metaData = newData[pathName];


  return (
    <>
      <section style={{ marginTop: "40px" }}>
        <div className={styles.textWrapper}>
          <h1 className={styles.heading}>
            Expert Peer Review & Pre-Submission Services – Strengthen Your
            Research Before Submission
          </h1>
          <p className={styles.subtext}>
            Maximize your chances of journal acceptance with our professional
            peer review and pre-submission services. Our expert reviewers assess
            your manuscript for clarity, structure, originality, and compliance
            with journal requirements.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() => (window.location.href = "/order-page")}
            >
              Get a Peer Review Now
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
    <h2 className={styles.heading}>Why Choose Our Peer Review & Pre-Submission Services?</h2>
    <p className={styles.subtext}>
      <strong>
        ManuscriptEdit’s Peer Review & Pre-Submission Services are designed to optimize your manuscript before journal submission. 
        Our key benefits include:
      </strong>
    </p>
    <ul className={styles.benefitsList}>
      <li>✅ Experienced Subject-Matter Experts – Reviewers with PhDs & editorial experience in high-impact journals.</li>
      <li>✅ In-Depth Manuscript Evaluation – Assessing research clarity, originality, argument coherence, and presentation quality.</li>
      <li>✅ Journal-Specific Compliance – Checking word limits, reference formatting, and structural guidelines.</li>
      <li>✅ Constructive Reviewer Comments – Detailed suggestions for strengthening weak arguments and improving clarity.</li>
      <li>✅ Faster Journal Acceptance – Identifying & fixing common rejection reasons before submission.</li>
    </ul>
    <button 
      className={styles.primaryButton} 
      onClick={() => (window.location.href = "/review-process")}
    >
      Learn More About Our Review Process
    </button>
  </div>
</section>

      <section style={{ marginTop: "40px" }}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>
            Our Peer Review & Pre-Submission Services
          </h2>
          <table className={styles.servicesTable}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Best For</th>
                <th>Key Features</th>
                <th>Turnaround Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Basic Peer Review</strong>
                </td>
                <td>Researchers seeking a quick review</td>
                <td>
                  General manuscript evaluation, Minor improvement suggestions
                </td>
                <td>⏳ 3-5 Days</td>
              </tr>
              <tr>
                <td>
                  <strong>Advanced Peer Review</strong>
                </td>
                <td>Authors targeting high-impact journals</td>
                <td>
                  Detailed reviewer comments, Structural improvement suggestions
                </td>
                <td>⏳ 5-7 Days</td>
              </tr>
              <tr>
                <td>
                  <strong>Journal-Specific Pre-Submission Check</strong>
                </td>
                <td>Researchers preparing final submission</td>
                <td>Compliance check, Formatting & structure verification</td>
                <td>⏳ 3-5 Days</td>
              </tr>
              <tr>
                <td>
                  <strong>Reviewer Response Assistance</strong>
                </td>
                <td>Authors responding to journal reviewers</td>
                <td>
                  Rewriting responses, Addressing critiques professionally
                </td>
                <td>⏳ 4-6 Days</td>
              </tr>
              <tr>
                <td>
                  <strong>Resubmission Support</strong>
                </td>
                <td>Manuscripts previously rejected</td>
                <td>Addressing reviewer comments, Rewriting & restructuring</td>
                <td>⏳ 7-10 Days</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() => (window.location.href = "/comparison")}
            >
              Compare Review & Pre-Submission Services
            </button>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "40px" }}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>
            Peer Review Process – How We Strengthen Your Research
          </h2>
          <div className={styles.stepWorkflow}>
            <div className={styles.step}>
              <span className={styles.icon}>📤</span>
              <h3>Step 1: Manuscript Submission & Journal Selection</h3>
              <p>Upload your manuscript & mention the target journal.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.icon}>🔍</span>
              <h3>Step 2: Expert Peer Review & Evaluation</h3>
              <p>Subject experts assess manuscript strengths & weaknesses.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.icon}>✍️</span>
              <h3>Step 3: Reviewer Feedback & Revision Suggestions</h3>
              <p>Comprehensive comments on structure, clarity & impact.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.icon}>📩</span>
              <h3>Step 4: Journal Compliance & Formatting Check</h3>
              <p>Ensuring adherence to submission guidelines.</p>
            </div>
            <div className={styles.step}>
              <span className={styles.icon}>✅</span>
              <h3>Step 5: Final Review & Revisions</h3>
              <p>
                Submission-ready manuscript with improved acceptance
                probability.
              </p>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() => (window.location.href = "/order")}
            >
              Start Your Peer Review Now
            </button>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "50px" }}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>
            Before & After Peer Review – See the Difference
          </h2>
          <div className={styles.comparisonContainer}>
            <div className={styles.beforeAfter}>
              <div className={styles.before}>
                <h3>
                  Before (Raw Manuscript with Weak Argumentation & Errors):
                </h3>
                <p>
                  “The results of our study indicate that X has an effect on Y,
                  but further research is needed to confirm this. The method was
                  applied in 50 cases and seemed to work well.”
                </p>
              </div>
              <div className={styles.after}>
                <h3>
                  After (Refined Manuscript with Peer Review Feedback
                  Implemented):
                </h3>
                <p>
                  “Our study demonstrates a significant correlation between X
                  and Y ({vari}). The methodology, applied to 50 cases, showed
                  promising outcomes, warranting further exploration under
                  controlled conditions.”
                </p>
              </div>
            </div>

            <p className={styles.reviewEnhancementText}>
              Peer Review enhances clarity, scientific precision, and argument
              strength.
            </p>
          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() => (window.location.href = "/sample-review")}
            >
              Request a Sample Review Report
            </button>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "50px" }}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>Pricing & Turnaround Time</h2>

          <div className={styles.pricingDetails}>
            <p className={styles.price}>
              💰 <strong>Starting Price:</strong> $0.08 per word (Basic Review)
              – $0.15 per word (Advanced Review & Resubmission Support)
            </p>
            <p className={styles.turnaround}>
              ⏳ <strong>Turnaround Time:</strong> 3 Days – 10 Days (Depending
              on service type)
            </p>
          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() => (window.location.href = "/pricing")}
            >
              Check Pricing & Get a Quote
            </button>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "50px" }}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>
            What Our Clients Say – Trusted by Researchers & Academics
          </h2>

          <div className={styles.testimonial}>
            <p className={styles.testimonialQuote}>
              📢{" "}
              <em>
                "ManuscriptEdit’s peer review service helped identify key areas
                of improvement in my manuscript. After implementing their
                feedback, my paper was accepted in a Q1 journal!"
              </em>
            </p>
            <p className={styles.clientRating}>
              🏆 <strong>Rated 4.9 out of 5</strong> by researchers & academics
              worldwide.
            </p>
            <p className={styles.clientTrust}>
              📑 Trusted by top universities & scientific journals.
            </p>
          </div>

          <div className={styles.buttonGroup}>
            <button
              className={styles.secondaryButton}
              onClick={() => (window.location.href = "/testimonials")}
            >
              See More Reviews
            </button>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "60px" }}>
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>
            FAQs – Common Questions About Peer Review & Pre-Submission Services
          </h2>

          <div className={styles.faq}>
            <div className={styles.faqItem}>
              <strong>1. How does peer review improve my manuscript?</strong>
              <p>
                Our peer review process enhances clarity, argument strength,
                formatting compliance, and overall quality, reducing rejection
                chances.
              </p>
            </div>

            <div className={styles.faqItem}>
              <strong>
                2. Can I request specific journal formatting checks?
              </strong>
              <p>
                Yes! We ensure journal-specific formatting compliance in all
                pre-submission checks.
              </p>
            </div>

            <div className={styles.faqItem}>
              <strong>3. What if I need revisions after peer review?</strong>
              <p>
                We offer free minor revisions within 14 days after delivering
                the review report.
              </p>
            </div>

            <div className={styles.faqItem}>
              <strong>4. Do you help with journal response letters?</strong>
              <p>
                Yes! Our Reviewer Response Assistance service helps you draft
                effective responses to journal critiques.
              </p>
            </div>

            <div className={styles.faqItem}>
              <strong>5. How do I get started?</strong>
              <p>
                Simply upload your manuscript, select the review service, and
                get expert feedback tailored for journal submission.
              </p>
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <a href="/faq" className={styles.secondaryButton}>
              View Full FAQ Page
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
