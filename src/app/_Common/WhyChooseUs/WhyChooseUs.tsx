import React from "react";
import "./WhyChooseUs.css";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us container-fluid py-1">
      <div className="row paaddRow">
        {/* Left Section */}
        <div className="col-md-8 mb-4" style={{ padding: "20px" }}>
          <h2 className="why-title">Why Choose Us?</h2>
          <h3 className="why-subtitle">Trusted by 500+ Partners</h3>
          <p style={{ color: "#555555", marginTop: "1rem" }}>
            At ManuscriptEdit, we specialize in providing top-notch Scientific &
            English editing, proofreading, medical writing, academic writing,
            formatting, and publication support.
          </p>

          <ul className="why-description">
            <li>
              <span style={{ fontWeight: "bold" }}>Global Expertise: </span>
              Serving clients in 80+ countries with a team of over 500 editors
              from leading universities and research centers.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Comprehensive Coverage:{" "}
              </span>
              Subject experts across various disciplines, including science,
              medicine, engineering, humanities, and business management.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Commitment to Quality:{" "}
              </span>
              Our robust systems ensure confidentiality, security, and
              publication-ready documents.
            </li>
          </ul>

          <div>
            <Link
              className="btn mt-12"
              href={"https://manuscriptedit.com/AuthorDashboard/"}
              role="button"
              style={{
                backgroundColor: "#151130",
                color: "white",
                marginTop: "2rem",
              }}
            >
              Sign Up Now
            </Link>
            <Link
              className="btn mt-12"
              href={"https://manuscriptedit.com/QuotationNew/"}
              role="button"
              style={{
                backgroundColor: "#151130",
                color: "white",
                marginTop: "2rem",
                marginLeft: "1rem",
              }}
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Right Section - Cards */}
        <div
          className="col-md-4"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="row g-3">
            <div className="col-lg-6">
              <StatCard
                number="10,000+"
                text="Publications"
                imgSrc="/images/WhyChooseUs/10,000+ Publications.png"
              />
            </div>
            <div className="col-lg-6">
              <StatCard
                number="1117+"
                text="Subject Areas"
                imgSrc="/images/WhyChooseUs/Subject Area.png"
              />
            </div>
            <div className="col-lg-6">
              <StatCard
                number="4,43,000+"
                text="Manuscripts"
                imgSrc="/images/WhyChooseUs/4,43,000 Manuscripts.png"
              />
            </div>

            <div className="col-lg-6">
              <StatCard
                number="750+"
                text="Experts"
                imgSrc="/images/WhyChooseUs/750+ Experts.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = (props: { number: string; text: string; imgSrc: string }) => {
  return (
    <div className="stat-card d-flex align-items-center p-3 bg-white rounded shadow">
      <img
        src={props.imgSrc}
        alt={props.text}
        className="stat-icon me-3"
        style={{ width: "50px", height: "50px", objectFit: "contain" }}
      />
      <div>
        <h4 className="stat-number mb-0">{props.number}</h4>
        <p className="stat-description mb-0">{props.text}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
