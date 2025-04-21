"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import "./price.css";
import usePriceCalculator from "@/app/hooks/priceCalculator/usePriceCalculator";
import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import redirect from "@/app/_Common/_functionality/Redirect";
import Styles from "./price.module.css";

export default function Home() {
  const pricingData = [
    {
      id: 1,
      service_id: 8,
      gup: 8,
      turnaround_time: 1,
      price_pages: 22,
      price_word: 0.094,
      old_price: 0.044,
      price_pages_jp: 3300,
      price_word_jp: 14,
      price_word_in: 3.9,
    },
    {
      id: 2,
      service_id: 8,
      gup: 8,
      turnaround_time: 2,
      price_pages: 18,
      price_word: 0.083,
      old_price: 0.04,
      price_pages_jp: 3025,
      price_word_jp: 13,
      price_word_in: 3.45,
    },
    {
      id: 3,
      service_id: 8,
      gup: 8,
      turnaround_time: 3,
      price_pages: 17,
      price_word: 0.069,
      old_price: 0.037,
      price_pages_jp: 2750,
      price_word_jp: 12,
      price_word_in: 2.86,
    },
    {
      id: 4,
      service_id: 8,
      gup: 8,
      turnaround_time: 5,
      price_pages: 15,
      price_word: 0.058,
      old_price: 0.033,
      price_pages_jp: 2475,
      price_word_jp: 11,
      price_word_in: 2.41,
    },
    {
      id: 5,
      service_id: 8,
      gup: 8,
      turnaround_time: 10,
      price_pages: 13,
      price_word: 0.047,
      old_price: 0.03,
      price_pages_jp: 2200,
      price_word_jp: 10,
      price_word_in: 1.95,
    },
  ];
  const pricingData2 = [
    {
      id: 6,
      service_id: 9,
      gup: 9,
      turnaround_time: 1,
      price_pages: 13,
      price_word: 0.069,
      old_price: 0.037,
      price_pages_jp: 2750,
      price_word_jp: 12,
      price_word_in: 2.86,
    },
    {
      id: 7,
      service_id: 9,
      gup: 9,
      turnaround_time: 2,
      price_pages: 10,
      price_word: 0.058,
      old_price: 0.033,
      price_pages_jp: 2475,
      price_word_jp: 11,
      price_word_in: 2.41,
    },
    {
      id: 8,
      service_id: 9,
      gup: 9,
      turnaround_time: 3,
      price_pages: 9,
      price_word: 0.047,
      old_price: 0.03,
      price_pages_jp: 2200,
      price_word_jp: 10,
      price_word_in: 1.95,
    },
    {
      id: 9,
      service_id: 9,
      gup: 9,
      turnaround_time: 5,
      price_pages: 8,
      price_word: 0.04,
      old_price: 0.026,
      price_pages_jp: 1925,
      price_word_jp: 9,
      price_word_in: 1.66,
    },
    {
      id: 10,
      service_id: 9,
      gup: 9,
      turnaround_time: 10,
      price_pages: 7,
      price_word: 0.032,
      old_price: 0.022,
      price_pages_jp: 1650,
      price_word_jp: 8,
      price_word_in: 1.33,
    },
  ];
  const pricingData3 = [
    {
      id: 72,
      service_id: 104,
      gup: 104,
      turnaround_time: 1,
      price_pages: 19,
      price_word: 0.083,
      old_price: 0.04,
      price_pages_jp: 0,
      price_word_jp: 13,
      price_word_in: 3.45,
    },
    {
      id: 73,
      service_id: 104,
      gup: 104,
      turnaround_time: 2,
      price_pages: 16,
      price_word: 0.069,
      old_price: 0.037,
      price_pages_jp: 0,
      price_word_jp: 12,
      price_word_in: 2.86,
    },
    {
      id: 74,
      service_id: 104,
      gup: 104,
      turnaround_time: 3,
      price_pages: 13,
      price_word: 0.058,
      old_price: 0.033,
      price_pages_jp: 0,
      price_word_jp: 11,
      price_word_in: 2.41,
    },
    {
      id: 75,
      service_id: 104,
      gup: 104,
      turnaround_time: 5,
      price_pages: 12,
      price_word: 0.047,
      old_price: 0.047,
      price_pages_jp: 0,
      price_word_jp: 10,
      price_word_in: 1.95,
    },
    {
      id: 76,
      service_id: 104,
      gup: 104,
      turnaround_time: 10,
      price_pages: 11,
      price_word: 0.04,
      old_price: 0.026,
      price_pages_jp: 0,
      price_word_jp: 9,
      price_word_in: 1.66,
    },
  ];

  console.log(pricingData[0].price_word);

  const [wordCount, setWordCount] = useState<any>(275);
  const [wordCountStatement, setWordCountStatement] = useState();
  const { isLoading, error, result, getPriceCalculator } = usePriceCalculator();

  console.log("wrd:", wordCount);

  const serviceId8 = {};

  useEffect(() => {
    // setWordCountStatement(275);
    getPriceCalculator({ word_count: 275 });
  }, []);

  const calculateHandler = () => {
    // setWordCountStatement(wordCount);
    getPriceCalculator({ word_count: wordCount });
  };

  return (
    <>
      {/* {breadcrum("Submit Manuscript", "Prices")} */}

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
                type="number"
                id="wordC"
                name="wordC"
                placeholder=" 275"
                style={{
                  width: "100%",
                  border: "1px solid #a7a7a7",
                  borderRadius: 0,
                  height: 40,
                  paddingLeft: "1rem",
                }}
                onChange={(e) => {
                  setWordCount(e.target.value);
                }}
              />
            </div>
            {/* <div className="col-lg-3" style={{ padding: 4 }}>
              <button className="btn" onClick={calculateHandler}>
                Calculate
              </button>
            </div> */}
            {/* </div> */}
          </div>
          {/* </div> */}

          {isLoading ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DNA />
            </div>
          ) : (
            ""
          )}

          <h3 style={{ color: "black", marginBottom: "2rem" }}>
            Prices for {wordCount} words is:
            <br />
          </h3>

          {/* <div className="row gy-4">
            {result && result.length
              ? result.map((price: any) => {
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
                            Messages.map((message: any) => {
                              let [message_first_part, message_second_part] =
                                message.split("|");
                              let trimmed_number = message_second_part.trim();
                              let numberStr = trimmed_number.replace(
                                /[^\d.]/g,
                                ""
                              );
                              let new_message = `${message_first_part} | $${
                                numberStr.split(".")[0]
                              }`;

                              return (
                                <div
                                  id="pkg1"
                                  style={{ margin: "1rem" }}
                                  key={message}
                                >
                                  <div className="btnStyl">{new_message}</div>
                                </div>
                              );
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
                })
              : ""}
          </div> */}

          <div className="container-fluid">
            <div
              className="row"
              style={{ gap: "2rem", justifyContent: "center" }}
            >
              <div className={`col-lg-3 p-0 ${Styles.priceCalculatorTable}`}>
                <div className={Styles.priceCalculatorTableHeader}>
                  <h5>Extensive Substantive Editing</h5>
                </div>

                <div style={{ backgroundColor: "white" }}>
                  <p
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    Price for '1' days delivery : $
                    {Math.floor(wordCount * pricingData[0].price_word)}
                  </p>
                  <p>
                    Price for '2' days delivery : $
                    {Math.floor(wordCount * pricingData[1].price_word)}
                  </p>
                  <p>
                    Price for '3' days delivery : $
                    {Math.floor(wordCount * pricingData[2].price_word)}
                  </p>
                  <p>
                    Price for '5' days delivery : $
                    {Math.floor(wordCount * pricingData[3].price_word)}
                  </p>
                  <p>
                    Price for '10' days delivery : $
                    {Math.floor(wordCount * pricingData[4].price_word)}
                  </p>
                </div>
                <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
                  <button
                    className={Styles.getStartedButton}
                    onClick={() => {
                      window.location.href =
                        "https://secure.manuscriptedit.com/register";
                    }}
                  >
                    Get Started
                  </button>
                  <button
                    className={Styles.priceQuoteButton}
                    // onClick={() => {
                    //   window.location.href =
                    //     "https://secure.manuscriptedit.com/quotation";
                    // }}

                    onClick={() => {
                      localStorage.setItem(
                        "SelectedServiceFromPriceCalculator",
                        "Extensive Substantive Editing"
                      );

                      localStorage.setItem(
                        "SelectedWordCountFromPriceCalculator",
                        wordCount
                      );
                      window.location.href = "/QuotationNew";
                    }}
                  >
                    Get A Price Quote
                  </button>
                </div>
              </div>
              <div className={`col-lg-3 p-0 ${Styles.priceCalculatorTable}`}>
                <div className={Styles.priceCalculatorTableHeader}>
                  <h5>
                    Substantive Editing
                    <br />
                    <br />
                  </h5>
                </div>

                <div style={{ backgroundColor: "white" }}>
                  <p
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    Price for '1' days delivery : $
                    {Math.floor(wordCount * pricingData3[0].price_word)}
                  </p>
                  <p>
                    Price for '2' days delivery : $
                    {Math.floor(wordCount * pricingData3[1].price_word)}
                  </p>
                  <p>
                    Price for '3' days delivery : $
                    {Math.floor(wordCount * pricingData3[2].price_word)}
                  </p>
                  <p>
                    Price for '5' days delivery : $
                    {Math.floor(wordCount * pricingData3[3].price_word)}
                  </p>
                  <p>
                    Price for '10' days delivery : $
                    {Math.floor(wordCount * pricingData3[4].price_word)}
                  </p>
                </div>
                <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
                  <button
                    className={Styles.getStartedButton}
                    onClick={() => {
                      window.location.href =
                        "https://secure.manuscriptedit.com/register";
                    }}
                  >
                    Get Started
                  </button>
                  <button
                    className={Styles.priceQuoteButton}
                    onClick={() => {
                      localStorage.setItem(
                        "SelectedServiceFromPriceCalculator",
                        "Substantive Editing"
                      );
                      localStorage.setItem(
                        "SelectedWordCountFromPriceCalculator",
                        wordCount
                      );
                      window.location.href = "/QuotationNew";
                    }}
                  >
                    Get A Price Quote
                  </button>
                </div>
              </div>
              <div className={`col-lg-3 p-0 ${Styles.priceCalculatorTable}`}>
                <div className={Styles.priceCalculatorTableHeader}>
                  <h5>
                    Proofreading
                    <br />
                    <br />
                  </h5>
                </div>

                <div style={{ backgroundColor: "white" }}>
                  <p
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    Price for '1' days delivery : $
                    {Math.floor(wordCount * pricingData2[0].price_word)}
                  </p>
                  <p>
                    Price for '2' days delivery : $
                    {Math.floor(wordCount * pricingData2[1].price_word)}
                  </p>
                  <p>
                    Price for '3' days delivery : $
                    {Math.floor(wordCount * pricingData2[2].price_word)}
                  </p>
                  <p>
                    Price for '5' days delivery : $
                    {Math.floor(wordCount * pricingData2[3].price_word)}
                  </p>
                  <p>
                    Price for '10' days delivery : $
                    {Math.floor(wordCount * pricingData2[4].price_word)}
                  </p>
                </div>
                <div style={{ textAlign: "center", paddingBottom: "1rem" }}>
                  <button
                    className={Styles.getStartedButton}
                    onClick={() => {
                      window.location.href =
                        "https://secure.manuscriptedit.com/register";
                    }}
                  >
                    Get Started
                  </button>
                  <button
                    className={Styles.priceQuoteButton}
                    onClick={() => {
                      localStorage.setItem(
                        "SelectedServiceFromPriceCalculator",
                        "Proofreading"
                      );
                      localStorage.setItem(
                        "SelectedWordCountFromPriceCalculator",
                        wordCount
                      );
                      window.location.href = "/QuotationNew";
                    }}
                  >
                    Get A Price Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
            <br />
            <p>
              {" "}
              <i className="bi bi-check-circle-fill"></i> If your document
              contains 40000 words or more, please contact us to receive a
              customized quote. For Indian Customers we have customized pricing
              in INR. Please contact{" "}
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
                        We at ManuscriptEdit understand that the documents
                        submitted by you for editing are results of your hard
                        work and revolutionary ideas. We adhere to a
                        professional code of ethics that allows the worldwide
                        research community to submit their work for peer review
                        without worrying about the security of their ideas.
                      </p>
                    </div>
                    <a
                  onClick={() => window.location.href = "/QuotationNew"}
                  className="btn-learn-more"
                >
                  Request a Quote <i className="bi bi-arrow-right"></i>
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

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="pricing_single-box st-grid-price">
              <div className="pricing-head">
                <div className="pricing_title">
                  <h4>Premium Plus Package</h4>
                </div>
                <div className="pricing_tk">
                  <h2>
                    <span className="dollar"></span>
                    <span>30 Days</span>
                  </h2>
                </div>
              </div>
              <div className="pricing_body">
                <div className="featur_itmes">
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Data Analysis</li>
                    <li>Research Paper Writing</li>
                    <li>Substantive Editing</li>
                    <li>Journal Selection</li>
                    <li>Journal Submission</li>
                    <li>Target Journal Formatting</li>
                    <li>Artwork Formatting</li>
                    <li>Cover Letter Writing</li>
                    <li>Response To Reviewer</li>
                    <li>Plagarism Check</li>
                    <li>Unlimited Assistance</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_button">
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="pricing_single-box st-grid-price">
              <div className="pricing-head">
                <div className="pricing_title">
                  <h4>Premium Package</h4>
                </div>
                <div className="pricing_tk">
                  <h2>
                    <span className="dollar"></span>
                    <span> 20 Days</span>
                  </h2>
                </div>
              </div>
              <div className="pricing_body">
                <div className="featur_itmes">
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Substantive Editing</li>
                    <li>Journal Selection</li>
                    <li>Target Journal Formatting</li>
                    <li>Artwork Formatting</li>
                    <li>Cover Letter Writing</li>
                    <li>Journal Submission</li>
                    <li>
                      Response to Reviewers* (*One response to reviewer free)
                    </li>

                    <li>Plagiarism Check</li>
                    <li>Unlimited Assistance</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_button">
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="pricing_single-box st-grid-price">
              <div className="pricing-head">
                <div className="pricing_title">
                  <h4>Advanced Package</h4>
                </div>
                <div className="pricing_tk">
                  <h2>
                    <span className="dollar"></span>
                    <span> 15 Days</span>
                  </h2>
                </div>
              </div>
              <div className="pricing_body">
                <div className="featur_itmes">
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Substantive Editing</li>
                    <li> Journal Selection</li>
                    <li>Target Journal Formatting.</li>
                    <li>Cover Letter writing</li>
                    <li>Journal Submission</li>

                    <li>Plagiarism Check</li>
                    <li> Unlimited Assistance</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_button">
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="pricing_single-box st-grid-price">
              <div className="pricing-head">
                <div className="pricing_title">
                  <h4>Standard Package</h4>
                </div>
                <div className="pricing_tk">
                  <h2>
                    <span className="dollar"></span>
                    <span> 10 Days</span>
                  </h2>
                </div>
              </div>
              <div className="pricing_body">
                <div className="featur_itmes">
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Journal Selection</li>
                    <li>Target Journal Formatting</li>
                    <li>Cover Letter writing</li>

                    <li>Journal Submission</li>
                    <li> Unlimited Assistance</li>
                  </ul>
                </div>
              </div>
              <div className="pricing_button">
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  <img
                    src="/img/logoWhatsapp.png"
                    style={{ width: "30px", height: "30px" }}
                  />
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
                  <img
                    src="/img/telegram.png"
                    style={{ width: "30px", height: "30px" }}
                  />
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
                <img
                  src="/img/zoom.png"
                  style={{ width: "30px", height: "30px" }}
                />
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
