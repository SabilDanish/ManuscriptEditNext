import React from 'react';
import './WhyChooseUs.css'; 

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us container-fluid my-5 py-5">
      <div className="row paaddRow">
        {/* Left Section */}
        <div className="col-md-8 mb-4">
          <h2 className="why-title">Why Choose Us?</h2>
          <h3 className="why-subtitle">Trusted by 500+ Partners</h3>
          <p className="why-description">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy.
          </p>
          <div className="expert-box">
            <span className="expert-count">750+</span> Experts
          </div>
        </div>

        {/* Right Section - Cards */}
        <div className="col-md-4">
          <div className="row g-3">
            <div className="col-lg-10">
              <StatCard number="10,000+" text="Publications" icon="📚" />
            </div>
            <div className="col-lg-10">
              <StatCard number="1117+" text="Subject Areas" icon="🔍" />
            </div>
            <div className="col-lg-10">
              <StatCard number="4,43,000+" text="Manuscripts" icon="🏆" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = (props: {number:string ,text:string ,icon:string  }) => {

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
