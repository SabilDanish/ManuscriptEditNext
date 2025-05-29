"use client";
import Link from "next/link";
import "./Footer.css";
import redirect from "../_functionality/Redirect";
import useEmail from "@/app/hooks/newsLetter/useEmail";
import { useState } from "react";

export default function footer() {
  const [email, setEmail] = useState<string | null>();
  const textColor = { color: "white" };

  const { isLoading, error, acceptNewsLetter } = useEmail();

  // let dateYear = new Date("year")

  return (
    <>
      {/* <div className="subscribe_area bg_color pt-30 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="single_subscribe_contact">
                <div className="subscribe_content_title white text_center pb-30">
                  <h2>Subscribe Our Newsletter</h2>
                </div>
                <div className="subscribe_form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    required
                    data-error="Please enter your email"
                    placeholder="Enter Your Email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="subscribe_form_send">
                  <button className="btn" onClick={() => {
                    email && acceptNewsLetter({ email })
                  }} style={{ zIndex: "10" }}>
                    Subscribe
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div> */}
      <div
        className="footer-middle pt-45"
        // style={{ backgroundImage: "url(/images/call-bg.png)" }}
      >
        <footer className="footer">
          <div className="container">
            <div className="row">
              {/* English Editing Section */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                <h4 style={{ paddingRight: "98px" }}>Editing Overview</h4>

                <ul>
                  <li>
                    <a href="/EditingOverview">Editing Overview</a>
                  </li>
                  <li>
                    <a href="/ProofReading">Proofreading</a>
                  </li>
                  <li>
                    <a href="/SubEditing">Substantive Editing</a>
                  </li>
                  <li>
                    <a href="/ExtensiveSubstantiveEditing">
                      Extensive Substantive Editing
                    </a>
                  </li>
                  <li>
                    <a href="/CopyEdit">Copyediting</a>
                  </li>
                  <li>
                    <a href="/PlagiarismCheckReduction">
                      Plagiarism Check and Reduction
                    </a>
                  </li>
                  <li>
                    <a href="/TranslationOverview">Translation Services</a>
                  </li>
                </ul>
              </div>

              {/* Publication Support Section */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                <h4 style={{ paddingRight: "98px" }}>Publication Support</h4>
                <ul>
                  <li>
                    <a href="/PackageService">Publication Package</a>
                  </li>
                  <li>
                    <a href="/JournalSel">Journal Selection</a>
                  </li>
                  <li>
                    <a href="/JournalSub">Journal Submission</a>
                  </li>
                  <li>
                    <a href="/ResponseToReviewer">Response to Reviewer</a>
                  </li>
                  <li>
                    <a href="/PeerReview">Peer Review & Pre-Submission</a>
                  </li>
                  <li>
                    <a href="/PosterCreation">Poster Creation & Design</a>
                  </li>
                  <li>
                    <a href="/Formatting">Formatting</a>
                  </li>
                </ul>
              </div>

              {/* Scientific/Academic Writing Section */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                <h4 style={{ paddingRight: "44px" }}>
                  Scientific / Academic Writing
                </h4>
                <ul>
                  <li>
                    <a href="/Writing">Writing Overview</a>
                  </li>
                  <li>
                    <a href="/MedicalWrite">Medical Writing</a>
                  </li>
                  <li>
                    <a href="/ScientificWriting">
                      Scientific & Academic Writing
                    </a>
                  </li>
                  <li>
                    <a href="/TechnicalWriting">Technical Writing</a>
                  </li>
                  <li>
                    <a href="/MedicalRewrite">Rewriting</a>
                  </li>
                  <li>
                    <a href="/StatisticalAnalysis">Statistical Analysis</a>
                  </li>
                  <li>
                    <a href="/SystematicReview">Systematic Review</a>
                  </li>
                  <li>
                    <a href="/MetaAnalysis">Meta Analysis</a>
                  </li>
                </ul>
              </div>

              {/* Research Enhancement Services Section */}
              <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                <h4 style={{ paddingRight: "98px" }}>Research Support</h4>
                <ul>
                  <li>
                    <a href="/ResearchSupportOverview">
                      Research Support Overview
                    </a>
                  </li>
                  <li>
                    <a href="/EarlyStageResearchers">Early Stage Researchers</a>
                  </li>
                  <li>
                    <a href="/MidCareerResearchers">Mid-Career Researchers</a>
                  </li>
                  <li>
                    <a href="/FullyExperiencedResearchers">
                      Fully Experienced Researchers
                    </a>
                  </li>
                  <li>
                    <a href="/ResearchEnhancementServices">
                      Research Enhancement Services
                    </a>
                  </li>
                  <li>
                    <a href="/CitationBooster">Citation Booster</a>
                  </li>
                  <li>
                    <a href="/MedicalDesign">Illustration Services</a>
                  </li>
                  <li>
                    <a href="/PHDThesis">PhD Thesis</a>
                  </li>
                  <li>
                    <a href="/MasterThesis">Master Thesis</a>
                  </li>

                  <li>
                    <a href="/CustomizedServices">Customized Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        
        <div className="container widget widgets-company-info" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className="footer-bottom-logo " style={{ textAlign: "center" }}>
            <img
              src="/images/New_Reseapro_Scientific_Final-removebg-preview.png"
              alt="#"
              style={{ width: "12rem" }}
            />
          </div>
          <div className="company-info-desc"></div>

          <div
            className="follow-company-info"
            style={{ display: "flex", justifyContent: "center", }}
          >
            <div className="follow-company-icon" style={{paddingRight:'2rem'}}>
              <a href="https://www.facebook.com/Manuscriptedit" target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2Fmanuscriptedit"
                target="_blank"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.instagram.com/manuscriptedit/"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://in.linkedin.com/company/manuscriptedit"
                target="_blank"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.youtube.com/@manuscriptedit."
                target="_blank"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-3 col-md-6 col-sm-12"></div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row ">
                <div className="col-12 pb-4"></div>
                <div className="col-12">
                  <div className="widget widgets-company-info">
                    <div style={{ fontSize: 14 }} className="row rowCentroid">
                      <div className="col-md-4">
                        <div>
                          <h5 style={{ color: "#FFFFFF" }}>
                            <b>KYOTO, JAPAN</b>
                          </h5>
                          <p
                            style={{
                              color: "#FFFFFF",
                            }}
                          >
                            Global Marketing Association Co. Ltd,
                            <br /> 8th Floor, ASTEM Bldg.
                            <br />
                            Kyoto Research Park,
                            <br />
                            134 Chudoji Minamimachi,
                            <br />
                            Shimogyo-ku, Kyoto-city,
                            <br />
                            KYOTO - 6008813, JAPAN
                            <br />
                            support_japan@manuscriptedit.com
                            <br />
                            www.manuscriptedit.jp
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div style={{ paddingLeft: 15 }} className="row">
                          <div
                            className="col-12"
                            
                          >
                            <h5 style={{ color: "#FFFFFF" }}>
                              <b>NC, DURHAM, USA</b>
                            </h5>
                            <p
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              2530 Meridian Parkway,
                              <br /> Suite 300, Durham, NC,
                              <br />
                              27713, United States of America
                            </p>
                          </div>
                        </div>
                        <div style={{ paddingLeft: 15,marginTop: 15,marginBottom: 15 }} className="row">
                          <div className="col-12">
                            <h5 style={{ color: "#FFFFFF" }}>
                              <b>BHUBANESWAR, INDIA</b>
                            </h5>
                            <p
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              DCB-401,4th Floor,DLF Cyber City
                              <br />
                              Chandaka Industrial Estate, Patia,
                              <br />
                              Bhubaneswar -751024,Odisha, INDIA
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div
                          style={{
                            paddingLeft: 15,
                            marginBottom: 15,
                          }}
                          className="row"
                        >
                          <div className="col-12">
                            <h5 style={{ color: "#FFFFFF" }}>
                              <b>MAIDSTONE, UK</b>
                            </h5>
                            <p
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              26 Kings Hill Avenue,
                              <br /> Kings Hill, West Malling,
                              <br />
                              Maidstone, ME19 4AE
                            </p>
                          </div>
                        </div>
                        <div
                          style={{
                            paddingLeft: 15,
                            marginTop: 15,
                            marginBottom: 15,
                          }}
                          className="row"
                        >
                          <div className="col-12 ">
                            <h5 style={{ color: "#FFFFFF" }}>
                              <b>BANGALORE, INDIA</b>
                            </h5>
                            <p
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              Level 9 Raheja Towers,
                              <br /> 26-27 Mahatma Gandhi Road,
                              <br />
                              Bangalore-560 001, INDIA
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row footer-bottom mt-70 pt-3 pb-1">
            <div className="col-lg-4 col-md-4">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>
                    © {new Date().getFullYear()} ManuscriptEdit. All Rights
                    Reserved.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="footer-bottom-right">
                <div className="footer-bottom-right-text">
                  <Link className="absod" href={"/RefundAndCancellation"}>
                    Refund & Cancellation
                  </Link>
                  <Link className="absod" href={"/PrivacyPolicy"}>
                    Privacy Policy
                  </Link>

                  <Link className="absod" href={"/TermsOfService"}>
                    Terms & Conditions{" "}
                  </Link>

                  <Link className="absody" href={"/Service-Agreement"}>
                    {" "}
                    Service Agreement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
