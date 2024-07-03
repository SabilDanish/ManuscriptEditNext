'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import { usePathname } from 'next/navigation'
import { data } from '../../../../utils/metaFile.js'
import Metadata from "@/app/Metadata";

const newData: any = data;

export default function Home() {
  const pathName: string = usePathname().split("/").filter(val => val).join("")
  let metaData = newData[pathName]
  return (
    <>
      {<Metadata metaData={metaData} />}
      {breadcrum("Services / Writing", "Medical Writing")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-2 pb-3">Medical Writing</h3>
              <p>
                Medical writing is a specialized form of technical writing that
                involves creating various types of documents related to
                healthcare, medicine, and pharmaceuticals. These documents are
                typically written for a wide range of audiences, including
                healthcare professionals, researchers, regulatory authorities,
                patients, and the general public.
              </p>
              <div className="em-about-icon-box2">
                <div className="list-icon">
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> CASE REPORT</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> ORIGINAL RESEARCH ARTICLE</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> REVIEW ARTICLE</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>RESEARCH PROPOSAL</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>CUSTOMIZED WRITING</h6>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="/images/menuscimg/subtantive.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
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
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-expanded="true"
                    >
                      CASE REPORT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-expanded="false"
                    >
                      ORIGINAL RESEARCH ARTICLE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-expanded="false"
                    >
                      REVIEW ARTICLE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-4"
                      role="tab"
                      aria-expanded="false"
                    >
                      {" "}
                      RESEARCH PROPOSAL
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-5"
                      role="tab"
                      aria-expanded="false"
                    >
                      CUSTOMIZED WRITING
                    </a>
                  </li>
                </ul>
                <div className="tab-content white_bg pt-1 pb-5 pl-4 pr-4">
                  <div
                    className="tab-pane mt-60 active"
                    id="tabs-1"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div
                          className="about_icon_box wow fadeInUp animated"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <h5 className="mt-1 mb-4">What You Provide</h5>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Patient
                              Details (demographic such as age, sex, etc.)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> History
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Investigation Details
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Actual
                              Procedure
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Treatment
                              given
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Outcome
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Study
                              data and photos (CT, X-ray, etc.)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Rough
                              draft of the case
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> 1 or 2
                              relevant paper/s you want to discuss
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Suggest a
                              target journal
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="about_icon_box wow fadeInUp animated"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <h5 className="mt-1 mb-4">What You Provide</h5>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Extensive
                              literature survey
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Writing
                              Introduction
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Rewriting
                              the case report section
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Writing
                              Discussion
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              ustification and Recommendation
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> List of
                              references
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Formatting according to the target journal
                              guidelines (optional)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane mt-60" id="tabs-2" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6">
                        <div
                          className="about_icon_box wow fadeInUp animated"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <h5 className="mt-1 mb-4">What You Provide</h5>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Topic
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Main
                              objective/Research question/Hypothesis
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Methods
                              (in detail)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Data
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Statistical analysis (optional)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Relevant
                              figures/images
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Treatment
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Follow up
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Outcome
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> 1 or 2
                              relevant paper(s) you want to discuss
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> A
                              suggested target journal
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="about_icon_box wow fadeInUp animated"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <h5 className="mt-1 mb-4">What You Provide</h5>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Extensive
                              literature survey
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Writing
                              the full article
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Construction of tables and figures if required
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> List of
                              references
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Statistical analysis (on request)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Formatting according to the target journal
                              guidelines (optional)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane mt-60" id="tabs-3" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div className="col-lg-4">
                            <div
                              className="about_icon_box wow fadeInUp animated"
                              data-wow-delay="0.5s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="mt-1 mb-4">What You Provide</h5>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>Topic
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i> Broad
                                  Research Question
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i> Main
                                  Focus point
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i> Rough
                                  Outline
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Outcome
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Suggest 2-3 significant references
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Suggest a target journal
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div
                              className="about_icon_box wow fadeInUp animated"
                              data-wow-delay="0.5s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <h5 className="mt-1 mb-4">What You Provide</h5>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Extensive literature survey, screen and
                                  classify
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Project your research objective and the
                                  problem
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Writing the review based on your outline and
                                  organizing the content emphasizing the main
                                  "research question"
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i> Clear
                                  representation of the present status of the
                                  field
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Identifying the controversy in the literature
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Formulating questions that need further
                                  research
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i> List
                                  of references
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Formatting according to the target journal
                                  guidelines (optional)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane mt-60" id="tabs-4" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-5">
                        <div
                          className="about_icon_box wow fadeInUp animated"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <h5 className="mt-1 mb-4">What You Provide</h5>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Specific
                              Topic
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> A clear
                              Research Question
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Main
                              objective (why you want to do?)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Type of
                              Study (prospective, retrospective...)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Methods
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Study
                              Design (Exclusion and Inclusion criteria)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Investigations (what is to be done)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Involvement of other departmentsn
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Suggest
                              2-3 relevant articles
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Purpose
                              of the proposal (PhD topic, grant application,
                              etc.)
                            </span>
                          </div>
                        </div>
                      
                    </div>
                    <div className="col-lg-7">
                      <div
                        className="about_icon_box wow fadeInUp animated"
                        data-wow-delay="0.5s"
                        style={{
                          visibility: "visible",
                          animationDelay: "0.5s",
                          animationName: "fadeInUp",
                        }}
                      >
                        <h5 className="mt-1 mb-4">What You Provide</h5>
                        <div className="about_icon_box_inner mb-20">
                          <span>
                            <i className="fa fa-check-square-o"></i> Extensive
                            literature survey
                          </span>
                        </div>
                        <div className="about_icon_box_inner mb-20">
                          <span>
                            <i className="fa fa-check-square-o"></i> Clearly
                            identification of the objectives, justification and
                            methodologies to be adopted in conducting the
                            research
                          </span>
                        </div>
                        <div className="about_icon_box_inner mb-20">
                          <span>
                            <i className="fa fa-check-square-o"></i> Text with a
                            good study design and method
                          </span>
                        </div>
                        <div className="about_icon_box_inner mb-20">
                          <span>
                            <i className="fa fa-check-square-o"></i> Emphasis on
                            the existing gap in the literature and attempt to
                            address the research problem
                          </span>
                        </div>
                        <div className="about_icon_box_inner mb-20">
                          <span>
                            <i className="fa fa-check-square-o"></i> A proposal
                            that stands out among several other applications to
                            enhance its chances of being funded
                          </span>
                        </div>
                        <div className="about_icon_box_inner mb-20">
                          <span>
                            <i className="fa fa-check-square-o"></i> Compliance
                            with the guidelines and formats of the funding
                            agency as far as possible based on the information
                            provided by you
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div className="tab-pane mt-60" id="tabs-5" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6">
                        <div
                          className="about_icon_box wow fadeInUp animated"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <h5 className="mt-1 mb-4">What You Provide</h5>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Statistical analysis (SPSS)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}

                              Continuing medical application (CME)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Medical
                              guideline document for physicians
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Medical
                              procedures
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Training
                              Manuals
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Regulatory writing
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> New Drug
                              Application
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Clinical
                              study report/documentation
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Phase I
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Clinical
                              protocol
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Phase II
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Phase III
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Phase II
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Phase IV
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Phase IV
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Product
                              Inserts
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className="about_icon_box wow fadeInUp animated"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <h5 className="mt-1 mb-4">What You Provide</h5>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Necessary
                              clarification will be sought by our expert medical
                              writers
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Feedback
                              on the 1st draft within 30 days of delivery
                            </span>
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
