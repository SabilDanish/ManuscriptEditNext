"use client"
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import './price.css'
import usePriceCalculator from "@/app/hooks/priceCalculator/usePriceCalculator";
import { useState } from "react";

export default function Home() {
  const [wordCount, setWordCount] = useState<string | null>()
  const {isLoading,error,result,getPriceCalculator} = usePriceCalculator()

  const calculateHandler = () => {
    console.log({wordCount})
    getPriceCalculator({word_count:wordCount})
  }

  
  return (
    <>
      {breadcrum("Submit Manuscript", "Prices")}

      <section id="pricing" className="pricing section-area">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>Editing Service</h2>
          </div>

          <div id="inpSec" className="col-lg-12 ">
            {/* <div className="d-flex justify-content-center"> */}
            {/* <div id="inpSec" style={{ width: "60%", padding: "15px 0" }}> */}
            <div
              className="col-lg-3"
              style={{
                padding: 13,
                fontWeight: "bold",
                fontSize: 16,
                color: "#232323",
              }}
            >
              Word count
            </div>
            <div className="col-lg-6" style={{ padding: 5 }}>
              <input
                type="textbox"
                id="wordC"
                name="wordC"
                style={{
                  width: "100%",
                  border: "1px solid #a7a7a7",
                  borderRadius: 0,
                  height: 40,
                }}
                onChange={(e) => {
                  setWordCount(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-3" style={{ padding: 4 }}>
              <button className="btn" onClick={calculateHandler}>
                Calculate
              </button>
            </div>
            {/* </div> */}
          </div>
          {/* </div> */}

          <div className="row gy-4">
            {result &&
              result.length ?
              result.map((price:any) => {
                const { Header, Messages } = price;
                return (
                  <div
                    className="col-lg-4 aos-init aos-animate"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                    key={Messages}
                  >
                    <div className="pricing-item1">
                      <div className="pricing-header">
                        <h3 className="price">{Header}</h3>
                      </div>

                      <ul>
                        {Messages &&
                          Messages.length &&
                          Messages.map((message:any) => {
                            let [message_first_part,message_second_part] = message.split("|")
                            let trimmed_number = message_second_part.trim()
                            let numberStr = trimmed_number.replace(/[^\d.]/g, "");
                            let new_message = `${message_first_part} | $${numberStr.split(".")[0]}`
                
                            return (<div id="pkg1" style={{margin: "1rem"}} key={message}>
                              <div className="btnStyl">
                                {new_message}
                              </div>
                            </div>)
                          })}
                      </ul>

                      <div style={{ marginTop: 12, textAlign: "center" }}>
                        <a
                          className="btn btn-danger"
                          href="https://secure.manuscriptedit.com/register"
                          style={{ padding: 10 }}
                        >
                          Get Started
                        </a>
                        &nbsp;&nbsp;
                        <a
                          className="btn"
                          href="https://secure.manuscriptedit.com/register"
                          style={{
                            color: "#FFF",
                            backgroundColor: "#1f5174",
                            padding: 10,
                          }}
                        >
                          Get a price Quote
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }) : ""}
          </div>
          <div className="col-lg-12 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <br />
            <p>
              {" "}
              <i className="bi bi-check-circle-fill"></i> If your document
              contains 40000 words or more, please contact us to receive a
              customized quote. For Indian Customers we have customized pricing
              in INR. Please contact support@manuscriptedit.com{" "}
              <a href="mailto:support@manuscriptedit.com">
                support@manuscriptedit.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="featur" className="featur section-area">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>Writing Service</h2>
          </div>

          <div
            className="row aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-database-2-line"
                  style={{ color: "#47aeff" }}
                ></i>
                <h3>
                  <a href="">CASE REPORT</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-gradienter-line"
                  style={{ color: "#ffa76e" }}
                ></i>
                <h3>
                  <a href="">ORIGINAL RESEARCH ARTICLE</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-file-list-3-line"
                  style={{ color: "#11dbcf" }}
                ></i>
                <h3>
                  <a href="">REVIEW ARTICLE</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-price-tag-2-line"
                  style={{ color: "#4233ff" }}
                ></i>
                <h3>
                  <a href="">RESEARCH PROPOSAL</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                <h3>
                  <a href="">REWRITING</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-fingerprint-line"
                  style={{ color: "#29cc61" }}
                ></i>
                <h3>
                  <a href="">MEDICAL WRITING</a>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div id="specials" className="specials" style={{ marginTop: 20 }}>
          <div className="container aos-init aos-animate" data-aos="fade-up">
            <div
              className="row aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-3">
                <ul className="nav nav-tabs1 flex-column" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active show"
                      data-bs-toggle="tab"
                      href="#tab-1"
                      aria-selected="true"
                      role="tab"
                    >
                      Medical Writing
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-2"
                      aria-selected="false"
                      tabIndex={-1}
                      role="tab"
                    >
                      Rewriting
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#tab-3"
                      aria-selected="false"
                      tabIndex={-1}
                      role="tab"
                    >
                      Extensive Substantive Editing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                  <div
                    className="tab-pane active show"
                    id="tab-1"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Extensive Substantive Editing</h3>
                        <p>
                          {" "}
                          <i className="bi bi-check-circle-fill"></i> Medical
                          writers with industrial experience and regulatory
                          interactions provides a diverse range of medical and
                          pharmaceutical documentation to address the needs of
                          various stakeholders, including clinical
                          investigators, IRBs, medical monitors, etc.
                        </p>
                        <p>
                          {" "}
                          <i className="bi bi-check-circle-fill"></i> Exhaustive
                          manuscript writing process, to maximize your chances
                          for journal acceptance.
                        </p>
                        <p>
                          {" "}
                          <i className="bi bi-check-circle-fill"></i> Our
                          writing experts can develop your data, references, and
                          an outline or list of ideas into a complete scientific
                          manuscript draft, from Abstract to References.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/img/technologies/cloud.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Rewriting</h3>
                        <p>
                          {" "}
                          <i className="bi bi-check-circle-fill"></i> The
                          writers have experience in working with various
                          journals, hence are experienced and have knowledge of
                          specific terminology to use in the medical,
                          scientific, economics, educational articles and many
                          other professional fields..
                        </p>
                        <p>
                          {" "}
                          <i className="bi bi-check-circle-fill"></i> These
                          specialists pay special attention to plagiarism issues
                          and keywords inclusion.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/img/technologies/database.png"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Extensive Substantive Editing</h3>
                        <p>
                          {" "}
                          <i className="bi bi-check-circle-fill"></i> Extensive
                          substantive editing is entirely analysis-based,
                          whether at the document level or at the paragraph,
                          sentence, or word level.
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="/img/technologies/infrastructure.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featur" className="featur section-area">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>Customized services</h2>
          </div>

          <div
            className="row aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="col-lg-4 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-bar-chart-box-line"
                  style={{ color: "#5578ff" }}
                ></i>
                <h3>
                  <a href="">Pre-submission Peer-review</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4 mt-md-0">
              <div className="icon-box">
                <i
                  className="ri-calendar-todo-line"
                  style={{ color: "#e80368" }}
                ></i>
                <h3>
                  <a href="">Journal Selection</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4 mt-lg-0">
              <div className="icon-box">
                <i
                  className="ri-paint-brush-line"
                  style={{ color: "#e361ff" }}
                ></i>
                <h3>
                  <a href="">Substantive editing</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-file-list-3-line"
                  style={{ color: "#11dbcf" }}
                ></i>
                <h3>
                  <a href="">Journal Formatting</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="icon-box">
                <i
                  className="ri-price-tag-2-line"
                  style={{ color: "#4233ff" }}
                ></i>
                <h3>
                  <a href="">Journal Submission</a>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-anchor-line" style={{ color: "#b2904f" }}></i>
                <h3>
                  <a href="">Response to Reviewers</a>
                </h3>
              </div>
            </div>

            <div id="about" className="about" style={{ marginTop: 20 }}>
              <div className="container">
                <div className="row content">
                  <div
                    className="col-lg-6 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <h3>Translation Service</h3>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> Academic,
                        Commercial and Personal translation
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> 100% human
                        translation by Native translators
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Translation and
                        Interpreter Panel comprises of highly experienced Domain
                        Experts
                      </li>
                    </ul>
                    <h3 style={{ marginTop: 20, marginBottom: -20 }}>
                      Submission Security
                    </h3>
                    <div
                      className="icon-box aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      style={{
                        marginTop: 30,
                        marginBottom: 30,
                        border: "2px solid #e1dede",
                        borderRadius: 5,
                      }}
                    >
                      <p>
                        We at Manuscriptedit understand that the documents
                        submitted by you for editing are results of your hard
                        work and revolutionary ideas. We adhere to a
                        professional code of ethics that allows the worldwide
                        research community to submit their work for peer review
                        without worrying about the security of their ideas.
                      </p>
                    </div>
                    <a href="https://secure.manuscriptedit.com/register" className="btn-learn-more">
                      Request a Quote
                    </a>
                  </div>
                  <div
                    className="col-lg-6 pt-4 pt-lg-0 aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <h3>Additional Services</h3>
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i> Statistical
                        Analysis
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Systematic
                        Review & Meta Analysis
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Plagiarism
                        check & Removal
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Poster Creation
                        & Design
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Technical
                        Writing
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Illustration
                        Service
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Translation
                        Service
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Indexing
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Typesetting
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Equation
                        Building
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Latex Editing
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Latex
                        Formatting
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i> Equation
                        Building
                      </li>
                    </ul>

                    <a href="#" className="btn-learn-more">
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing section-area">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>Publication Support Package</h2>
          </div>

          <div className="row gy-4">
            <div
              className="col-lg-3 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3>Premium Plus Package</h3>
                  <h4>
                    <sup>$</sup>2134<span> / 30 Days</span>
                  </h4>
                </div>

                <ul>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Data Analysis</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Research Paper Writing</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Substantive Editing</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Journal Selection</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Target Journal Formating</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Artwork Formating</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Journal Submission</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Response to Reviewer</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Peer Review Analysis</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Cover Letter Writing</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Plagiarism Check</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Unlimited Assistance</span>
                  </li>
                </ul>

                <div className="text-center mt-auto">
                  <a href="https://secure.manuscriptedit.com/register" className="buy-btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3>
                    Premium <br />
                    Package
                  </h3>
                  <h4>
                    <sup>$</sup>29<span> / 20 Days</span>
                  </h4>
                </div>

                <ul>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Substantive Editing</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Journal Selection</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Target Journal Formatting</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Artwork Formatting</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Journal Submission</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Response to Reviewers</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Peer Review Analysis</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Cover Letter Writing</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Plagiarism Check</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Unlimited Assistance</span>
                  </li>
                </ul>

                <div className="text-center mt-auto">
                  <a href="https://secure.manuscriptedit.com/register" className="buy-btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3>
                    Advanced <br></br>
                    Package
                  </h3>
                  <h4>
                    <sup>$</sup>49<span> / 15 Days</span>
                  </h4>
                </div>

                <ul>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Substantive Editing</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Journal Selection</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Target Journal Formatting</span>
                  </li>
                  <li>
                    <i className="ri-close-line" style={{ color: "red" }}></i>{" "}
                    <span>Artwork Formatting</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Journal Submission</span>
                  </li>
                  <li>
                    <i className="ri-close-line" style={{ color: "red" }}></i>{" "}
                    <span>Response to Reviewers</span>
                  </li>
                  <li>
                    <i className="ri-close-line" style={{ color: "red" }}></i>{" "}
                    <span>Peer Review Analysis</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Cover Letter Writing</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Plagiarism Check</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Unlimited Assistance</span>
                  </li>
                </ul>

                <div className="text-center mt-auto">
                  <a href="https://secure.manuscriptedit.com/register" className="buy-btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3>
                    Standard<br></br>
                    Package
                  </h3>
                  <h4>
                    <sup>$</sup>49<span> / 10 Days</span>
                  </h4>
                </div>

                <ul>
                  <li>
                    <i className="ri-close-line"></i>{" "}
                    <span>Substantive Editing</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Journal Selection</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Target Journal Formatting</span>
                  </li>
                  <li>
                    <i className="ri-close-line"></i>{" "}
                    <span>Artwork Formatting</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Journal Submission</span>
                  </li>
                  <li>
                    <i className="ri-close-line" style={{ color: "red" }}></i>{" "}
                    <span>Response to Reviewers</span>
                  </li>
                  <li>
                    <i className="ri-close-line" style={{ color: "red" }}></i>{" "}
                    <span>Peer Review Analysis</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Cover Letter Writing</span>
                  </li>
                  <li>
                    <i className="ri-close-line" style={{ color: "red" }}></i>{" "}
                    <span>Plagiarism Check</span>
                  </li>
                  <li>
                    <i className="ri-check-double-line"></i>{" "}
                    <span>Unlimited Assistance</span>
                  </li>
                </ul>

                <div className="text-center mt-auto">
                  <a href="https://secure.manuscriptedit.com/register" className="buy-btn">
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing section-area">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>Talk to an Expert</h2>
          </div>

          <div className="row gy-4">
            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div id="pkg">
                <a href="https://api.whatsapp.com/send?phone=919040005445">
                  <img src="/img/logoWhatsapp.png" />
                  &nbsp;&nbsp;<b style={{ color: "black" }}>WhatsApp&nbsp;:</b>
                  &nbsp;<span style={{ color: "red" }}>+91-904-000-5445</span>
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div id="pkg">
                <a href="https://t.me/share/url?url=&amp;text=&amp;phone=919040005445">
                  <img src="/img/telegram.png" />
                  &nbsp;&nbsp;<b style={{ color: "black" }}>Telegram&nbsp;:</b>
                  &nbsp;<span style={{ color: "red" }}>+91-904-000-5445</span>
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div id="pkg">
                <img src="/img/zoom.png" width="30" height="30" />
                &nbsp;&nbsp;<b>Zoom meeting&nbsp;:</b>&nbsp;
                <a href="https://bit.ly/3VTs2is" style={{ color: "red" }}>
                  https://bit.ly/3VTs2is
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
