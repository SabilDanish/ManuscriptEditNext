"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import whyToChoose from "@/app/_Common/_WhyToChoose/WhyToChoose";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {breadcrum("Services / Research Support", "Research Support Overview")}

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-2 pb-3">
                Elevate Your Academic Journey with ManuscriptEdit
              </h3>
              <p>
                Welcome to ManuscriptEdit, your trusted partner in navigating
                the complexities of academic research. Whether you're embarking
                on your research career or an established scholar seeking to
                amplify your work's impact, ManuscriptEdit offers bespoke
                support services tailored to your unique needs. Our dedicated
                team empowers researchers with the tools, insights, and guidance
                to excel, ensuring your academic endeavors reach their highest
                potential.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/menuscimg/reach-support.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="service_area bg_color2 pt-50 pb-45">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                {/* <div className="section_sub_title uppercase mb-3">
                  <h6>SERVICES</h6>
                </div> */}
                <div className="section_main_title">
                  <h1> Our Services</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service_style_one text_left pt-40 pb-40 pl-3 pr-3 mb-4" style={{ height: 'fit-content' }}>
                <div className="service_style_one_title mb-30">
                  <h4>ESR Support</h4>
                  <p><br />ESR-Early Stage Researcher</p>
                </div>
                <div className="service_style_one_text">
                  <div className="em-about-icon-box2">
                    <div className="list-icon upper st-upper">
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Personalized guidance on selecting a compelling
                              research topic.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Expert assistance in research design and grant
                              writing.
                            </h6>
                          </div>
                        </div>
                      </span>

                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Skill-building workshops tailored to early-stage
                              researchers.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Navigate the research landscape with confidence
                              and innovate.
                            </h6>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"/EarlyStageResearchers"}>
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"https://wa.me/919237304004"}>
                  Talk to an expert <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"https://secure.manuscriptedit.com/register"}>
                  Register to know more <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service_style_one text_left pt-40 pb-40 pl-3 pr-3 mb-4" style={{ height: 'fit-content' }}>
                <div className="service_style_one_title mb-30">
                  <h4>MCR Advancement</h4>
                  <p><br />MCR- Mid Carrer Research</p>
                </div>
                <div className="service_style_one_text">
                  <div className="em-about-icon-box2">
                    <div className="list-icon upper st-upper">
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Specialized support services for literature review
                              mastery.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Advanced data analysis techniques to elevate your
                              research.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Comprehensive research project management and
                              manuscript development.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Stand out in the competitive academic arena with
                              our expert guidance.
                            </h6>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"/MidCareerResearchers"}>
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"https://wa.me/919237304004"}>
                  Talk to an expert <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"https://secure.manuscriptedit.com/register"}>
                  Register to know more <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service_style_one text_left pt-40 pb-40 pl-3 pr-3 mb-4" style={{ height: 'fit-content' }}>
                <div className="service_style_one_title mb-30">
                  <h4> FER Support</h4>
                  <p><br />FER- Fully Experienced Researchers</p>
                </div>
                <div className="service_style_one_text">
                  <div className="em-about-icon-box2">
                    <div className="list-icon upper st-upper">
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Tailored services, including journal
                              recommendation and submission guidance.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Pre-submission peer review to refine & strengthen
                              your manuscript.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Research impact amplification to maximize audience
                              impact.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Ensure your established research finds its perfect
                              scholarly home.
                            </h6>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"/FullyExperiencedResearchers"}>
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"https://wa.me/919237304004"}>
                  Talk to an expert <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"https://secure.manuscriptedit.com/register"}>
                  Register to know more <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="service_style_one text_left pt-40 pb-40 pl-3 pr-3 mb-4" style={{ height: 'fit-content' }}>
                <div className="service_style_one_title mb-30">
                  <h4> Read Full RES</h4>
                  <p><br />RES- Research Enhancement Services</p>
                </div>
                <div className="service_style_one_text">
                  <div className="em-about-icon-box2">
                    <div className="list-icon upper st-upper">
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              {" "}
                              Strategies to enhance research citation counts
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              {" "}
                              Guidance on strategic publication planning for
                              maximum impact.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Scholarly metrics monitoring to track and analyze
                              research performance.
                            </h6>
                          </div>
                        </div>
                      </span>
                      <span>
                        <div className="row">
                          <div
                            className="col-1"
                            style={{ paddingRight: "0px", textAlign: "center" }}
                          >
                            <i className="fa fa-check"></i>
                          </div>
                          <div
                            className="col-11"
                            style={{ paddingLeft: "0px" }}
                          >
                            <h6>
                              Amplify your academic footprint with
                              ManuscriptEdit's expertise.
                            </h6>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"/ResearchEnhancementServices"}>
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"https://wa.me/919237304004"}>
                  Talk to an expert <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
                <div className="service_style_one_button pt-3">
                  <Link href={"https://secure.manuscriptedit.com/register"}>
                  Register to know more <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      </div>
 

      {whyToChoose()}
      <div className="accordion_area style-two upper1 pt-0 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-20">
                <div className="section_main_title">
                  <h1>FREQUENTLY ASKED QUESTIONS</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2 pr-3"></div>
            <div className="col-lg-8 col-md-8 pr-3">
              <div className="tab_container pt-10 pb-50">
                <div
                  id="tab1"
                  className="tab_content wow fadeInUp animated"
                  data-wow-delay=".5"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <ul className="accordion">
                    <li>
                      <a className="active">
                        What types of research support services does
                        ManuscriptEdit offer?
                      </a>
                      <p>
                        ManuscriptEdit offers various tailored research support
                        services covering every academic stage. Our services
                        include early-stage researcher support, mid-career
                        researcher advancement, elite services for fully
                        experienced researchers, and comprehensive research
                        enhancement services to maximize the academic footprint
                        of scholars across disciplines
                      </p>
                    </li>
                    <li>
                      <a>
                        How can ManuscriptEdit help early-stage researchers find
                        their research topic?
                      </a>
                      <p>
                        Our Early Buds package is specifically designed to
                        assist early-stage researchers in identifying compelling
                        research topics. Through personalized consultations, our
                        advisors help pinpoint innovative topics that align with
                        your interests and have the potential for significant
                        academic or real-world impact.
                      </p>
                    </li>
                    <li>
                      <a>
                        Can ManuscriptEdit assist with grant proposal writing?
                      </a>
                      <p>
                        Absolutely. ManuscriptEdit specializes in drafting
                        persuasive grant proposals highlighting the significance
                        and potential contributions of your research. Our team
                        assists in narrative development, budget planning, and
                        aligning proposals with funding body priorities to
                        maximize your chances of securing financial support.
                      </p>
                    </li>
                    <li>
                      <a>
                        Does ManuscriptEdit offer any training or workshops?
                      </a>
                      <p>
                        Yes, we offer a variety of workshops and training
                        sessions designed to enhance your academic skills. These
                        include academic writing workshops, statistical
                        analysis, and research methodology training to empower
                        researchers to communicate their findings effectively
                        and conduct rigorous research.
                      </p>
                    </li>
                    <li>
                      <a>
                        How does the process of working with ManuscriptEdit
                        begin?
                      </a>
                      <p>
                        The process starts with an initial consultation where
                        you discuss your needs and goals with one of our
                        experts. Based on this discussion, we recommend the
                        services that best suit your project. You can start by
                        contacting us through Telegram, WhatsApp, or Email to
                        schedule your consultation.
                      </p>
                    </li>
                    <li>
                      <a>
                        How can I stay informed about the performance of my
                        research after publication?
                      </a>
                      <p>
                        ManuscriptEdit's Research Enhancement Services include
                        scholarly metrics monitoring, allowing you to track your
                        research performance across various metrics. This
                        service helps you stay informed about your research's
                        impact and make strategic decisions for future projects.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 pr-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
