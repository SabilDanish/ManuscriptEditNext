"use client"
import Link from "next/link";
import "./Footer.css"
import redirect from "../_functionality/Redirect";
import useEmail from "@/app/hooks/newsLetter/useEmail";
import { useState } from "react";

export default function footer() {
  const [email, setEmail] = useState<string | null>()
  const textColor = { color: "white" };


  const { isLoading, error, acceptNewsLetter } = useEmail()
  return (
    <>
      <div className="subscribe_area bg_color pt-30 pb-45">
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
      </div>
      <div
        className="footer-middle pt-45"
        style={{ backgroundImage: "url(/images/call-bg.png)" }}
      >
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget widgets-company-info">
                <div className="footer-bottom-logo ">
                  <img src="/images/reseapro.png" alt="#" style={{ width: "80%" }} />
                </div>
                <div className="company-info-desc">

                </div>
                <div className="follow-company-info pt-3">
                  <div className="follow-company-text mr-3">
                    <a href="#">
                      <p>Follow Us</p>
                    </a>
                  </div>
                  <div className="follow-company-icon">
                    <a href="https://www.facebook.com/Manuscriptedit" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://x.com/i/flow/login?redirect_after_login=%2Fmanuscriptedit" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/manuscriptedit/" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@manuscriptedit." target="_blank">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="widget widgets-company-info">


                <div className="d-flex flex-column footer-services FooterServ">
                  <span

                    className="widget-title pb-2 "
                  >
                    Our Services
                  </span>

                  <Link style={textColor} href={"/EditingOverview"}>
                    English Editing
                  </Link>


                  <Link style={textColor} href={"/PackageService"}>
                    Publication Support
                  </Link>


                  <Link style={textColor} href={"/Writing"}>
                    Writing & Rewriting
                  </Link>


                  <Link
                    style={textColor}
                    href={"/ResearchSupportOverview"}
                  >
                    Research Support
                  </Link>


                  <Link style={textColor} href={"/CustomizedServices"}>
                    Customized Services
                  </Link>


                  <a
                    style={textColor}
                    onClick={() => {
                      redirect("corporate");
                    }}
                    href="#"
                  >
                    Corporate Services
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="row ">
                <div className="col-12 pb-4">

                </div>
                <div className="col-12">
                  <div className="widget widgets-company-info">
                    {/* <h3
                      style={textDecorator}
                      className="widget-title pb-4 text-center"
                    >
                      Company Address
                    </h3> */}
                    <div style={{ fontSize: 14 }} className="row rowCentroid">
                      <div className="col-md-4 footerSeperator4">
                        <div >
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
                          <div className="col-12 footerSeperator5" style={{ border: '1px solid grey' }}>
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
                        <div style={{ paddingLeft: 15 }} className="row">
                          <div className="col-12 footerSeperate">
                            <h5 style={{ color: "#FFFFFF" }}>
                              <b>BHUBANESWAR, INDIA</b>
                            </h5>
                            <p
                              style={{
                                color: "#FFFFFF",
                              }}
                            >
                              4th Floor(North West), OCAC Tower
                              <br /> Plot No-N-1/7D, Acharya Vihar,
                              <br />
                              Bhubaneswar-751013, Odisha, INDIA
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div style={{ paddingLeft: 15 }} className="row">
                          <div className="col-12 footerSeperator1">
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
                        <div style={{ paddingLeft: 15 }} className="row">
                          <div className="col-12 footerSeperator2">
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
            {/* <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget widget-nav-menu">
                <h4 className="widget-title pb-4">Our Services</h4>
                <div className="menu-quick-link-container ml-4">
                  <ul id="menu-quick-link" className="menu">
                    <li>
                      <a href="#">Formatting services</a>
                    </li>
                    <li>
                      <a href="#">Funding services</a>
                    </li>
                    <li>
                      <a href="#">Automated tools</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="widget widgets-company-info">
                <h3 className="widget-title pb-4">Company Address</h3>
                <div className="company-info-desc">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div className="footer-social-info">
                  <p>
                    <span>Address :</span>54/1 New dhas sorini Asut, Melbord
                    Austria.
                  </p>
                </div>
                <div className="footer-social-info">
                  <p>
                    <span>Phone :</span>54786547521
                  </p>
                </div>
                <div className="footer-social-info">
                  <p>
                    <span>Email :</span>demo@example.com
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row footer-bottom mt-70 pt-3 pb-1">
            <div className="col-lg-6 col-md-6">
              <div className="footer-bottom-content">
                <div className="footer-bottom-content-copy">
                  <p>© 2024 ManuscriptEdit. All Rights Reserved. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="footer-bottom-right">
                <div className="footer-bottom-right-text">
                  <Link className="absod" href={"/Publishing"}>
                    Refund & Cancellation
                  </Link>
                  <Link className="absod" href={"/PrivacyPolicy"}>
                    Privacy Policy
                  </Link>

                  <Link href={"/TermsOfService"}>Terms & Conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
