import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import Metadata from "@/app/Metadata";
import { usePathname } from "next/navigation";
import { data } from "../../../utils/metaFile.js";
const newData: { [key: string]: { [key: string]: string } } = data;
// import "../../../_Common/Crirstmas/Cristamas.css"

export default function Home() {
  // const pathName: string = usePathname().split("/").filter(val => val).join("")
  // let metaData = newData[pathName]
  return (
    <>
      {/* {<Metadata metaData={metaData} />} */}
      {/* {breadcrum("", "Refund & Cancellation")} */}
      <div className="col-lg-10 col-md-10 col-sm-10 mt-5 mb-5 mx-auto">
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            lineHeight: "1.6",
            color: "#333",
            backgroundColor: "#f8f9fa",
            padding: "0",
          }}
        >
          <section
            style={{
              maxWidth: "800px",
              margin: "20px auto",
              padding: "20px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              paddingTop:"20px",
            }}
          >
            
            
            <p>
              At ManuscriptEdit.com, we are dedicated to delivering the highest
              quality editorial and publication support services to help you
              succeed in your research journey. Our work involves multiple
              stages, each handled by experienced professionals, and every step
              builds on the success of the previous one. This Refund Policy
              ensures fairness while protecting the integrity of our services
              and the effort of our experts.
            </p>

            
            <p>Refunds are considered under the following conditions:</p>
            <ul>
              <li>
                <strong>Service Quality Concerns:</strong> If you are
                dissatisfied with the quality of the service provided, please
                submit a detailed explanation along with the manuscript
                highlighting your concerns using tracked changes and comments.
              </li>
              <li>
                <strong>Early Stage Issues:</strong> Refund requests can only be
                considered if dissatisfaction arises at an early stage of the
                service before subsequent tasks (e.g., formatting, submission)
                are initiated.
              </li>
              <li>
                <strong>Written Request:</strong> All refund claims must be
                submitted via email to &nbsp;
                <a
                  href="mailto:support@manuscriptedit.com"
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  support@manuscriptedit.com
                </a>{" "}
                within 7 calendar days of receiving the service.
              </li>
              <li>
                <strong>Committee Approval:</strong> Refund claims are subject
                to review by our Quality Assurance Committee. The committee will
                carefully assess your concerns and provide a final decision
                within 5-7 business days.
              </li>
            </ul>

            
            <p>Refunds will not be issued under the following circumstances:</p>
            <ul>
              <li>
                <strong>Discounted Services:</strong> Services provided under
                any discount or promotional offer.
              </li>
              <li>
                <strong>Completed Multi-Step Services:</strong> If subsequent
                services (e.g., journal submission) have been initiated.
              </li>
              <li>
                <strong>Client Delays:</strong> Delays in communication or
                feedback affecting service delivery timelines.
              </li>
              <li>
                <strong>Journal Rejection:</strong> Manuscript acceptance
                depends on journal-specific criteria, which are beyond our
                control.
              </li>
              <li>
                <strong>Ethical Violations:</strong> No refunds for manuscripts
                with plagiarism or ethical violations.
              </li>
              <li>
                <strong>Service Upgrades:</strong> Upgraded services or
                additional requests after the initial order are non-refundable.
              </li>
              <li>
                <strong>Simultaneous Submission Clause:</strong> Simultaneous
                submission of research papers to multiple journals is unethical
                and may result in service termination and forfeiture of fees.
              </li>
            </ul>

            <p>
              We believe in maintaining respectful and professional
              relationships with clients. If a refund request is under review:
            </p>
            <ul>
              <li>
                <strong>Posting Negative Comments Online:</strong> Posting
                negative feedback or complaints publicly before receiving a
                response from our committee may nullify the refund request and
                pause all work.
              </li>
            </ul>
            <p>
              We encourage open and respectful communication to resolve issues
              efficiently.
            </p>

            
            <ol>
              <li>
                <strong>Submit a Detailed Request:</strong> Email{" "}
                <a
                  href="mailto:support@manuscriptedit.com"
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  support@manuscriptedit.com
                </a>{" "}
                with your order number, detailed concerns, and the edited
                manuscript with tracked changes.
              </li>
              <li>
                <strong>Committee Review:</strong> The Quality Assurance
                Committee will review your request within 5-7 business days.
              </li>
              <li>
                <strong>Decision Notification:</strong> You will be notified of
                the decision via email. Approved refunds will be processed
                within 14 business days.
              </li>
              <li>
                <strong>Partial Refunds:</strong> If a full refund is not
                justified, a partial refund may be considered.
              </li>
            </ol>

            
            <ul>
              <li>
                <strong>Expert Involvement:</strong> Refunds consider the
                collaborative effort of multiple experts.
              </li>
              <li>
                <strong>Client Responsibility:</strong> Timely communication and
                feedback are essential.
              </li>
              <li>
                <strong>Abuse Prevention:</strong> Repeated or unjustified
                refund requests may result in service suspension.
              </li>
              <li>
                <strong>Final Acceptance:</strong> Once a service stage is
                accepted, refunds for that stage are no longer possible.
              </li>
            </ul>

            
            <p>
              If you have any questions or need assistance with our refund
              process, please contact us:
            </p>
            <ul>
              <li>
                Email:{" "}
                <a
                  href="mailto:support@manuscriptedit.com"
                  style={{ color: "#007bff", textDecoration: "none" }}
                >
                  support@manuscriptedit.com
                </a>
              </li>
             
            </ul>
            <p>
              Thank you for choosing ManuscriptEdit.com. We are committed to
              supporting your research goals with integrity and professionalism.
            </p>
          </section>

          <footer
            style={{
              textAlign: "center",
              margin: "20px 0",
              fontSize: "0.9rem",
            }}
          >
            &copy; 2024 ManuscriptEdit.com. All Rights Reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
