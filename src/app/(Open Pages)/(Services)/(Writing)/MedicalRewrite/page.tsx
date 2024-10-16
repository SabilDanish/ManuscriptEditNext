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
import Link from "next/link";

export default function Home() {
  const pathName: string = usePathname().split("/").filter(val => val).join("")
  let metaData = newData[pathName]
  return (
    <>
      {<Metadata metaData={metaData} />}
      {breadcrum("Services / Writing", "ReWriting")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <h3 className="pt-2 pb-3">Rewriting</h3> */}
              <p>
               Rewriting is a specialized service offered by ManuscriptEdit,
                dedicated to improving the clarity, coherence, and effectiveness
                of existing written content. Whether it's a manuscript, report,
                article, website content, or any other document,
                ManuscriptEdit's Rewriting service helps clients refine and
                enhance their written material to better meet their
                communication goals and target audience needs.
              </p>
              <div className="em-about-icon-box2">
                <div className="list-icon">
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Content Enhancement</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Language Refinement</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Style Adjustment</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Fact-Checking and Verification</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Formatting and Presentation</h6>
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
                      When To Seek
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
                      What To Expect
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
                      <div className="col-lg-12">
                        <div
                          className="about_icon_box wow fadeInUp animated"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Major
                              part of writing is completed
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Need to
                              add some more facts (background, literature,
                              discussion)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Increasing or reducing word counts
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Need
                              major reorganization of the content
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Polishing
                              of languages
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane mt-60" id="tabs-2" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-12">
                        <div
                          className="about_icon_box wow fadeInUp animated"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDelay: "0.5s",
                            animationName: "fadeInUp",
                          }}
                        >
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Identifying and filling the missing part
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Thorough
                              literature review to look for the additional fact
                              and checking the authenticity of existing facts
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Document
                              of recommended word count
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Ensure
                              logical flow throughout the content
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Lucid
                              presentation in easily understandable error-free
                              English (American/British)
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Ensure
                              adherence to the desired format
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
                          <div className="col-lg-12">
                            <div
                              className="about_icon_box wow fadeInUp animated"
                              data-wow-delay="0.5s"
                              style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInUp",
                              }}
                            >
                              <p>
                                Documents for marketing communications are
                                mainly related to advertising, product promotion
                                and marketing. We offer writing service for the
                                followings:
                              </p>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Product catalogue
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Brochure
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Advertisements for your organization
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Newsletter
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i> Web
                                  content
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  orporate presentation
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i> Case
                                  studies
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Business proposal
                                </span>
                              </div>
                              <h6 className="mb-3">During writing</h6>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Necessary clarification will be sought by our
                                  expert technical writers
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Feedback on the 1st draft within 30 days of
                                  delivery
                                </span>
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
              <Link href={"/ContactUs"}><button className="btn btn-primary mt-3 mr-3">
              Schedule a Call
              </button></Link>
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
