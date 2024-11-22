import "./HowStartedGlobal.css";
import Link from "next/link";

export default function HowStartedGlobal() {
    return (
        <>
            <section className="why-choose-us container-fluid py-1">
                <div className="row paaddRow">
                    {/* Left Section */}
                    <div className="col-lg-6 mb-4" style={{ padding: "20px" }}>
                        <h2 className="why-title">Partnering with ManuscriptEdit is Easy</h2>
                        <div className="why-description">
                            <ol style={{ lineHeight: "1.8" , paddingLeft:"0px" }}>
                                <li><strong>Tell Us Your Needs:</strong> Share your goals, and we’ll craft a tailored plan.</li>
                                <li><strong>Get a Custom Proposal:</strong> We’ll design a partnership solution just for you.</li>
                                <li><strong>Formalize the Agreement:</strong> Once you’re happy with the plan, we’ll take care of the formalities.</li>
                                <li><strong>Kick Off Your Partnership:</strong> Our dedicated team will get you started with everything you need.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-6 mb-4" style={{ padding: "20px" }}>
                        <h2 className="why-title">Why ManuscriptEdit?</h2>
                        <div className="why-description">
                            <ul style={{ lineHeight: "1.8" }}>
                                <li><strong>Proven Expertise:</strong> Over 1.6 million manuscripts edited for 339,000+ researchers.</li>
                                <li><strong>Diverse Knowledge:</strong> Expertise in more than 1,600 subject areas.</li>
                                <li><strong>Global Impact:</strong> Proven results in improving acceptance rates and making research stand out globally.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
