import React from "react";
import "./WhyChooseUs.css";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us container-fluid my-5 py-5">
      <div className="row paaddRow">
        {/* Left Section */}
        <div className="col-md-8 mb-4">
          <h2 className="why-title">Why Choose Us?</h2>
          <h3 className="why-subtitle">Trusted by 500+ Partners</h3>
          <p className="why-description">
            Expertise across diverse subject areas, ensuring precision in every
            field. A global network of experts delivering tailored research
            support. Seamless guidance from manuscript preparation to
            publication success. Trusted by leading researchers and institutions
            worldwide.
          </p>
          <div className="expert-box">
            <span className="expert-count">750+</span> Experts
          </div>
          <div>
          <Link className="btn mt-12" href={"https://secure.manuscriptedit.com/register"} role="button" style={{ backgroundColor: "#151130", color: "white", marginTop: "2rem" }}>Sign Up Now</Link>
          <Link className="btn mt-12" href={"https://secure.manuscriptedit.com/quotation"} role="button" style={{ backgroundColor: "#151130", color: "white", marginTop: "2rem", marginLeft:"1rem" }}>Get a Quote</Link>

          </div>
        </div>

        {/* Right Section - Cards */}
        <div className="col-md-4">
          <div className="row g-3">
            <div className="col-lg-6">
              <StatCard number="10,000+" text="Publications" icon="📚" />
            </div>
            <div className="col-lg-6">
              <StatCard number="1117+" text="Subject Areas" icon="🔍" />
            </div>
            <div className="col-lg-6">
              <StatCard number="4,43,000+" text="Manuscripts" icon="🏆" />
            </div>

            <div className="col-lg-6">
              <StatCard number="750+" text="Experts" icon="🧑‍🔬" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = (props: { number: string; text: string; icon: string }) => {
  return (
    <div className="stat-card d-flex align-items-center p-3 bg-white rounded shadow">
      <div className="stat-icon me-3 fs-2">{props.icon}</div>
      <div>
        <h4 className="stat-number mb-0">{props.number}</h4>
        <p className="stat-description mb-0">{props.text}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
