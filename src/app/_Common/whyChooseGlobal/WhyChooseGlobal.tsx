import Link from "next/link";
import "./WhyChooseGlobal.css"

export default function WhyChooseGlobal() {

    return (
        <>
            <section className="why-choose-us container-fluid py-1">
                <div className="row paaddRow">
                    {/* Left Section */}
                    <div className="col-md-12 mb-4" style={{ padding: "20px" }}>
                        <h2 className="why-choose-us-why-title">Why Partner with ManuscriptEdit?</h2>
                        <h3 className="why-choose-us-why-subtitle" style={{marginBottom:"40px" , marginTop:"20px"}}>
                            When you partner with ManuscriptEdit, you’re gaining more than just professional
                            services—you’re gaining a dedicated team committed to helping you succeed.
                        </h3>
                        <div className="why-description">

                            <div className="row">
                                <div className="col-md-3">
                                    <div className="card2 shadow-sm ">
                                        <div className="card-body">
                                            <h6 className="why-choose-us-card-title">Tailored Support</h6>
                                            <p className="why-choose-us-card-text">
                                                Every manuscript is unique, and so are our solutions. Whether it’s editing,
                                                formatting, or translation, we ensure your work meets the highest publication
                                                standards.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card2 shadow-sm">
                                        <div className="card-body">
                                            <h6 className="why-choose-us-card-title">Better Publication Outcomes</h6>
                                            <p className="why-choose-us-card-text">
                                                From pre-submission checks to journal selection, we take care of the details
                                                that make a big difference.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card2 shadow-sm">
                                        <div className="card-body">
                                            <h6 className="why-choose-us-card-title">Global Reach</h6>
                                            <p className="why-choose-us-card-text">
                                                Want to amplify your research’s impact? Our promotional services, like video
                                                abstracts and infographics, help your work stand out and reach the right audience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card2 shadow-sm">
                                        <div className="card-body">
                                            <h6 className="why-choose-us-card-title">Simplified Processes</h6>
                                            <p className="why-choose-us-card-text">
                                                We make it easy to handle even large-scale editorial tasks with customized
                                                workflows and a dedicated support team.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
