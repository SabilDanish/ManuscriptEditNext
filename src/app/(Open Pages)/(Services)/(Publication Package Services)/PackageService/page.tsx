"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import Metadata from "@/app/Metadata";
import { DiscountBanner, DiscountMessage } from "./DiscountSection";
import Dropdown2 from "../Dropdown2/Dropdown2.jsx";
import FaqHome from "@/app/_Common/FaqHome/FaqHome";
import { useEffect, useState } from "react";
import PricingTable from "./PricingTableCurrency.jsx";

const newData: { [key: string]: { [key: string]: string } } = data;

export default function Home() {
  const pathName: string = usePathname()
    .split("/")
    .filter((val) => val)
    .join("");
  let metaData = newData[pathName];
  

  const [currency, setCurrency] = useState("");
  const [tablePriceFromDB,setTablePriceFromDB] = useState('');

  const LocationBasedPricing = () => {
    useEffect(() => {
      fetch("https://www.secure.manuscriptedit.com/api/ip_api.php")
        .then((response) => response.json())
        .then((data) => {
          const countryCode = data[0].countryCode;
          if (countryCode === "IN") {
            setCurrency("INR");
          } else {
            setCurrency("USD");
          }
        })
        .catch((error) => {
          console.error("Error fetching location:", error);
        });
    }, []);
    return currency;
  };
  LocationBasedPricing();

  const priceFromDatabase = () =>{
    useEffect(()=>{
      fetch('https://www.secure.manuscriptedit.com/api/price_table.php')
      .then((response) => response.json())
      .then((data) => {
        setTablePriceFromDB(data)
        // console.log(response)
       
      })  
    },[])
    
  }
  priceFromDatabase()


  console.log(tablePriceFromDB[0])


  return (
    <>
      {<Metadata metaData={metaData} />}
      {/* {breadcrum(
        "Services / Publication Package Services",
        "Publication Package"
      )} */}

{/* <div className="container mt-4" style={{display:(currency==="INR")?"none":""}}>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Service</th>
                <th>Word Count Limit</th>
                <th>Timeline</th>
                <th>Pricing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Journal Selection</td>
                <td>N/A</td>
                <td>2–3 business days</td>
                <td>$100 per service</td>
              </tr>
              <tr>
                <td>Journal Submission</td>
                <td>N/A</td>
                <td>3–5 business days</td>
                <td>$80 per service</td>
              </tr>
              <tr>
                <td>Peer Review & Pre-Submission</td>
                <td>Up to 4,000 words</td>
                <td>3–4 business days</td>
                <td>Approximately $360</td>
              </tr>
              <tr>
                <td>Response to Reviewer</td>
                <td>Up to 2,000 words</td>
                <td>2–3 business days</td>
                <td>Approximately $180</td>
              </tr>
              <tr>
                <td>Poster Creation & Design</td>
                <td>N/A</td>
                <td>5–7 business days</td>
                <td>$150 per poster</td>
              </tr>
              <tr>
                <td>Formatting</td>
                <td>Up to 6,000 words</td>
                <td>1–2 business days</td>
                <td>Approximately $90</td>
              </tr>
              <tr>
                <td>Citation Booster</td>
                <td>N/A</td>
                <td>5–7 business days</td>
                <td>Pricing may vary (Contact us)</td>
              </tr>
              <tr>
                <td>Illustration Services</td>
                <td>N/A</td>
                <td>7–10 business days</td>
                <td>Pricing may vary (Contact us)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mt-4" style={{display:(currency==="INR")?"":"none"}}>
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Service</th>
                <th>Word Count Limit</th>
                <th>Timeline</th>
                <th>Pricing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Journal Selection</td>
                <td>N/A</td>
                <td>2–3 business days</td>
                <td>12000 INR</td>
              </tr>
              <tr>
                <td>Journal Submission</td>
                <td>N/A</td>
                <td>3–5 business days</td>
                <td>6500 INR</td>
              </tr>
              <tr>
                <td>Peer Review & Pre-Submission</td>
                <td>Up to 4,000 words</td>
                <td>3–4 business days</td>
                <td>9000 INR</td>
              </tr>
              <tr>
                <td>Response to Reviewer</td>
                <td>Up to 2,000 words</td>
                <td>2–3 business days</td>
                <td>15200 INR</td>
              </tr>
              <tr>
                <td>Poster Creation & Design</td>
                <td>N/A</td>
                <td>5–7 business days</td>
                <td>9000 INR</td>
              </tr>
              <tr>
                <td>Formatting</td>
                <td>Up to 6,000 words</td>
                <td>1–2 business days</td>
                <td>6550 INR</td>
              </tr>
              <tr>
                <td>Citation Booster</td>
                <td>N/A</td>
                <td>5–7 business days</td>
                <td>Pricing may vary (Contact us)</td>
              </tr>
              <tr>
                <td>Illustration Services</td>
                <td>N/A</td>
                <td>7–10 business days</td>
                <td>Pricing may vary (Contact us)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div
              className="pricing_single-box st-grid-price"
              style={{ position: "relative" }}
            >
              {/* <div className="discount-sticker">35% OFF</div> */}
              <div className="pricing-head">
                <div className="pricing_title">
                  <center>
                    <h4>Premium Plus Package</h4>
                  </center>
                </div>
                <div className="pricing_tk">
                  <center>
                    <h2>
                      <span className="dollar">
                        <s></s> $2134 *
                      </span>
                      <span>30 Days</span>
                    </h2>
                  </center>
                  <DiscountBanner />
                </div>
              </div>
              <div className="pricing_body">
                <div
                  className="featur_itmes "
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Data Analysis</li>
                    <li>Research Paper Writing</li>
                    <li>Substantive Editing</li>
                    <li>Journal Selection</li>
                    <li>Target Journal Formatting</li>
                    <li>Artwork Formatting</li>
                    <li>Cover Letter Writing</li>
                    <li>Journal Submission</li>
                    <li>Response To Reviewer</li>
                    <li>Plagiarism Check</li>
                    <li>Unlimited Assistance *</li>
                  </ul>
                </div>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("quotation");
                  }}
                >
                  Request a Quote <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                <p style={{ fontStyle: "italic", lineHeight: "1.5" }}>
                  *Terms and conditions applied.
                </p>
              </div>
              <DiscountMessage />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="pricing_single-box st-grid-price"
              style={{ position: "relative" }}
            >
              {/* <div className="discount-sticker">35% OFF</div> */}
              <div className="pricing-head">
                <div className="pricing_title">
                  <center>
                    <h4>Premium Package</h4>
                  </center>
                </div>
                <div className="pricing_tk">
                  <center>
                    <h2>
                      <span className="dollar">
                        <s></s> $1534 *
                      </span>
                      <span>20 Days</span>
                    </h2>
                  </center>
                  <DiscountBanner />
                </div>
              </div>
              <div className="pricing_body">
                <div
                  className="featur_itmes "
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
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
                    <li>Unlimited Assistance *</li>
                  </ul>
                </div>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("quotation");
                  }}
                >
                  Request a Quote <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                <p style={{ fontStyle: "italic", lineHeight: "1.5" }}>
                  *Terms and conditions applied.
                </p>
              </div>
              <DiscountMessage />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="pricing_single-box st-grid-price"
              style={{ position: "relative" }}
            >
              {/* <div className="discount-sticker">35% OFF</div> */}
              <div className="pricing-head">
                <div className="pricing_title">
                  <center>
                    <h4>Advanced Package</h4>
                  </center>
                </div>
                <div className="pricing_tk">
                  <center>
                    <h2>
                      <span className="dollar">
                        <s></s> $1134 *
                      </span>
                      <span>15 Days</span>
                    </h2>
                  </center>
                  <DiscountBanner />
                </div>
              </div>
              <div className="pricing_body">
                <div
                  className="featur_itmes "
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Substantive Editing</li>
                    <li>Journal Selection</li>
                    <li>Target Journal Formatting</li>
                    <li>Cover Letter Writing</li>
                    <li>Journal Submission</li>
                    <li>Plagiarism Check</li>
                    <li>Unlimited Assistance *</li>
                  </ul>
                </div>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("quotation");
                  }}
                >
                  Request a Quote <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                <p style={{ fontStyle: "italic", lineHeight: "1.5" }}>
                  *Terms and conditions applied.
                </p>
              </div>
              <DiscountMessage />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="pricing_single-box st-grid-price"
              style={{ position: "relative" }}
            >
              {/* <div className="discount-sticker">35% OFF</div> */}
              <div className="pricing-head">
                <div className="pricing_title">
                  <center>
                    <h4>Standard Package</h4>
                  </center>
                </div>
                <div className="pricing_tk">
                  <center>
                    <h2>
                      <span className="dollar">
                        <s>$867</s> $650 *
                      </span>
                      <span>10 Days</span>
                    </h2>
                  </center>
                  <DiscountBanner />
                </div>
              </div>
              <div className="pricing_body">
                <div
                  className="featur_itmes"
                  style={{ paddingLeft: "15px", paddingRight: "15px" }}
                >
                  <ul>
                    <li>Peer Review Analysis</li>
                    <li>Journal Selection</li>
                    <li>Target Journal Formatting</li>
                    <li>Cover Letter Writing</li>
                    <li>Journal Submission</li>
                    <li>Unlimited Assistance *</li>
                  </ul>
                </div>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("register");
                  }}
                >
                  Purchase Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <div
                className="pricing_button"
                style={{ textAlign: "center", cursor: "pointer" }}
              >
                <a
                  onClick={() => {
                    redirect("quotation");
                  }}
                >
                  Request a Quote <i className="bi bi-arrow-right"></i>
                </a>
              </div>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "15px",
                  fontSize: "0.8rem",
                  color: "#555",
                }}
              >
                <p style={{ fontStyle: "italic", lineHeight: "1.5" }}>
                  *Terms and conditions applied.
                </p>
              </div>

              <DiscountMessage />
            </div>
          </div>
        </div>
      </div>

      {/* 
      

      
     

      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Service</th>
                <th>Word Count Limit</th>
                <th>Timeline</th>
                <th>Pricing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>High-Impact Scientific</td>
                <td>Up to 4,000</td>
                <td>6–8 business</td>
                <td>Approximately</td>
              </tr>
              <tr>
                <td>Editing</td>
                <td>words</td>
                <td>days</td>
                <td>$720</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container mt-4">
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Service</th>
                <th>Word Count Limit</th>
                <th>Timeline</th>
                <th>Pricing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>High-Impact Journal Publication Support</td>
                <td>N/A</td>
                <td>Varies based on requirements</td>
                <td>Custom pricing (Contact us)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container mt-4">
          <h3>Notes</h3>
          <ul>
            <li>
              <strong>Pricing Flexibility:</strong> For services where pricing
              may vary (group service), we encourage clients to contact us
              directly to receive a tailored quote based on their specific
              needs.
            </li>
            <li>
              <strong>High-Impact Services:</strong> The addition of High-Impact
              Scientific Editing and High-Impact Journal Publication Support
              services caters to clients aiming for prestigious journal
              publications, offering specialized assistance to enhance their
              chances of acceptance.
            </li>
            <li>
              By offering competitive pricing and specialized services, we aim
              to provide exceptional value to our clients, ensuring high-quality
              support throughout their research and publication journey.
            </li>
          </ul>
        </div>
      </div> */}

      {/* </div > */}
      {/* </section > */}
      {/* <div className="service_area style2 pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">
              <div className="section_title text_left mb-55">
                <div className="section_main_title">
                  <h1>Customized services</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="service_single_thumb left">
                <div className="single_service_inner_thumb">
                  <img src="/images/service1.png" alt="" />
                </div>
                <div className="single_service_brg">
                  <div className="single_service_brg_thumb rotateme">
                    <img src="/images/service-rot.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Pre-Submission Per Review</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Journal Selection</h4>
                  </div>
                </div>
              </div>

              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Substantive  Editing</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Formatting</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Submission Support</h4>
                  </div>
                </div>
              </div>
              <div className="single_service">
                <div className="single_service_inner">
                  <div className="single_service_icon">
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="single_service_content">
                    <h4>Response to Reviewers</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {SpecializedArea()}
      {/* {ourProfessional()} */}
      {clientFeedback()}
      {/* {FAQ()} */}
      <FaqHome />
    </>
  );
}
