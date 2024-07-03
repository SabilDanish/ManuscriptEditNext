'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
  return (
    <>
      {breadcrum(
        "Services / Writing",
        "Technical Writing"
      )}
<section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3 className="pt-2 pb-3"> Technical Writing</h3>
                <p>
                    Technical Writing is a specialized service offered by ManuscriptEdit,
                    designed to help clients effectively communicate complex technical
                    information to specific audiences. This service encompasses a wide
                    range of documents, including user manuals, technical reports, instructional
                    guides, software documentation, and whitepapers. ManuscriptEdit provides
                    comprehensive support throughout the technical writing process, ensuring
                    clarity, accuracy, and usability of the final documents.
                </p>
                <div className="em-about-icon-box2">
                    <div className="list-icon">
                        <span><i className="bi bi-check-lg"></i>
                            <h6> END-USER ASSISTANCE</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6> TRADITIONAL TECHNICAL DOCUMENTATION</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>MARKETING COMMUNICATION</h6>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <img src="/images/menuscimg/subtantive.jpg" alt="" width="100%" style={{borderRadius: 10}} />
            </div>
        </div>
        </div>
</section>
<div className="tab_area bg_color2 pt-80 pb-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="tab_content">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item active">
                            <a className="nav-link " data-toggle="tab" href="#tabs-1" role="tab" aria-expanded="true">END-USER ASSISTANCE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-expanded="false">TRADITIONAL TECHNICAL DOCUMENTATION</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-expanded="false">MARKETING COMMUNICATION</a>
                        </li>
                    </ul>
                    <div className="tab-content white_bg pt-1 pb-5 pl-4 pr-4">
                        <div className="tab-pane mt-60 active" id="tabs-1" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="about_icon_box wow fadeInUp animated" data-wow-delay="0.5s" style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}>
                                        <p>
                                            A user needs to understand how to operate/use a specific product. Therefore, preparing a lucid, accurate and complete user-friendly documentation is
                                            the basic requirement in business. We are experts communicators, and understand what users look for
                                            in a technical documentation. Different audiences need different levels of information, perhaps in
                                            different formats. Beginning with an audience analysis, we provide the appropriate information in
                                            a format that a specific className of users will find appealing and useful. We will design, author,
                                            and illustrate all your end-user documentation in virtually any size and format for ready-to-print
                                            or online distribution.
                                        </p>
                                        <p>
                                            Documents for marketing communications are mainly related to advertising, product promotion and marketing. We offer writing service for the following:
                                        </p>
                                        <div className="about_icon_box_inner mb-20">
                                            <span><i className="fa fa-check-square-o"></i> User manual</span>
                                        </div>
                                        <div className="about_icon_box_inner mb-20">
                                            <span><i className="fa fa-check-square-o"></i> Online help</span>
                                        </div>
                                        <div className="about_icon_box_inner mb-20">
                                            <span><i className="fa fa-check-square-o"></i> Product marketing collaterals</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane mt-60" id="tabs-2" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="about_icon_box wow fadeInUp animated" data-wow-delay="0.5s" style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}>
                                        <p>
                                            The quality of the product depends on the maturity of the process. Given our
                                            experience, we realized that inaccuracy, incompleteness, and inappropriateness
                                            for a specific audience are the most common problems of technical documentation.
                                            Years of experience has taught us the importance of planning the roadmap for
                                            documentation to achieve the desired quality standards. We provide writing
                                            service in the following areas:
                                        </p>
                                        <div className="about_icon_box_inner mb-20">
                                            <span><i className="fa fa-check-square-o"></i> Articles for technical journals</span>
                                        </div>
                                        <div className="about_icon_box_inner mb-20">
                                            <span><i className="fa fa-check-square-o"></i> Annual reports</span>
                                        </div>
                                        <div className="about_icon_box_inner mb-20">
                                            <span><i className="fa fa-check-square-o"></i> Software documentation</span>
                                        </div>
                                        <div className="about_icon_box_inner mb-20">
                                            <span><i className="fa fa-check-square-o"></i> Process documentation</span>
                                        </div>
                                        <div className="about_icon_box_inner mb-20">
                                            <span><i className="fa fa-check-square-o"></i> IT system documentation</span>
                                        </div>
                                        <div className="about_icon_box_inner mb-20">
                                            <span><i className="fa fa-check-square-o"></i> Release notes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane mt-60" id="tabs-3" role="tabpanel">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="about_icon_box wow fadeInUp animated" data-wow-delay="0.5s" style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}>
                                                <p>
                                                    Documents for marketing communications are mainly related to advertising,
                                                    product promotion and marketing. We offer writing service for the followings:
                                                </p>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> Product catalogue</span>
                                                </div>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> Brochure</span>
                                                </div>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> Advertisements for your organization</span>
                                                </div>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> Newsletter</span>
                                                </div>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> Web content</span>
                                                </div>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> orporate presentation</span>
                                                </div>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> Case studies</span>
                                                </div>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> Business proposal</span>
                                                </div>
                                                <h6 className="mb-3">During writing</h6>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> Necessary clarification will be sought by our expert technical writers</span>
                                                </div>
                                                <div className="about_icon_box_inner mb-20">
                                                    <span><i className="fa fa-check-square-o"></i> Feedback on the 1st draft within 30 days of delivery</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
              Submit Manuscript
              </button>
              <button onClick={() => {redirect('contact-us')}} className="btn btn-primary mt-3 mr-3">
              Schedule a Call
              </button>
            </div>
        </div>
    </div>
</div>
{SpecializedArea(false)}
      {ourProfessional()}
      {howWeWork(2)}
    </>
  );
}
