"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { data } from "../../../../utils/metaFile.js";
import Metadata from "@/app/Metadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { serviceData } from "@/app/utils/service.js";
import "../../../../_Common/getHelp/getHelp.css";
import "./writingOverview.css";
import { useEffect, useState } from "react";

const newData: { [key: string]: { [key: string]: string } } = data;

export default function Home() {
  const pathName: string = usePathname()
    .split("/")
    .filter((val) => val)
    .join("");
  let metaData = newData[pathName];

  const [currency, setCurrency] = useState("");
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

  return (
    <>
      {<Metadata metaData={metaData} />}
      {/* {breadcrum("Services / Writing", "Writing Overview")} */}

      {/* <div
        className="container mt-4"
        style={{ display: currency === "INR" ? "none" : "" }}
      >
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
                <td>Medical Writing Assistance</td>
                <td>Up to 3,000 words</td>
                <td>5–7 business days</td>
                <td>Approximately $360</td>
              </tr>
              <tr>
                <td>Scientific & Academic Writing Assistance</td>
                <td>Up to 4,000 words</td>
                <td>4–6 business days</td>
                <td>Approximately $440</td>
              </tr>
              <tr>
                <td>Technical Writing Assistance</td>
                <td>Up to 4,000 words</td>
                <td>5–7 business days</td>
                <td>Approximately $440</td>
              </tr>
              <tr>
                <td>Rewriting Assistance</td>
                <td>Up to 4,000 words</td>
                <td>3–4 business days</td>
                <td>Approximately $360</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="container mt-4"
        style={{ display: currency === "INR" ? "" : "none" }}
      >
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
                <td>Medical Writing Assistance</td>
                <td>Up to 3,000 words</td>
                <td>5–7 business days</td>
                <td>Price may vary (Contact us)</td>
              </tr>
              <tr>
                <td>Scientific & Academic Writing Assistance</td>
                <td>Up to 4,000 words</td>
                <td>4–6 business days</td>
                <td>Price may vary (Contact us)</td>
              </tr>
              <tr>
                <td>Technical Writing Assistance</td>
                <td>Up to 4,000 words</td>
                <td>5–7 business days</td>
                <td>Price may vary (Contact us)</td>
              </tr>
              <tr>
                <td>Rewriting Assistance</td>
                <td>Up to 4,000 words</td>
                <td>3–4 business days</td>
                <td>Price may vary (Contact us)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

      <section>
        {/* <div className="row conrow">
						<div className="col-md-12">
							<h3 className="pt-2 pb-3">Writing Overview</h3>
							<p>
								You have the ideas, we have the writing expertise to express those
								ideas in words. Our cohesive team of writers are equipped to handle
								all your writing needs by relying on trustworthy sources and meticulous
								research.
							</p>
							<button onClick={() => { redirect('register') }} className="btn btn-primary mt-3 mr-3">
								Request a Quote
							</button>
						</div>

					</div> */}
      </section>

      {/* <section className="pb-5">
				<>

					<div className="row ServicesSection">
						{
							serviceData['Writing Assistance'] && serviceData['Writing Assistance'].items && serviceData['Writing Assistance'].items.map(item => {
								const { title, features, description, link } = item;
								return (


									<div className="col-lg-3">
										<div className='carousel-item-custom' >
											<h2><FontAwesomeIcon icon={faServicestack} />{title}</h2>
											<p>{description}</p>
											<ul>
												{features.map((feature: any, index: number) => (
													<li key={index}>
														<FontAwesomeIcon icon={faCheck} style={{ marginRight: '8px' }} />
														{feature}
													</li>

												))}
											</ul>

											<a href={link}>
												<button className="Know-More">Request a Quote</button>
											</a>
										</div>
									</div>





								)
							})
						}



					</div>




				</>

			</section> */}

      <div className="how_it_work style_three pt-0 pb-30 mt-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-90 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>service</h6>
                </div>
                <div className="section_main_title">
                  <h1>Writing service</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="single_how_it_work text-center  mb-60 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms pl-3 pr-3"
              >
                <div className="how_it_work_content">
                  <div className="how_it_work_number">
                    <h4>01</h4>
                  </div>
                  <div className="how_it_work_icon">
                    <Link href={"/MedicalWrite"}>
                      <div className="icon">
                        <i className="flaticon-report"></i>
                      </div>
                    </Link>
                    <div className="how_it_work_icon_bg_thumb">
                      <div className="how_it_work_icon_bg_thumb_inner">
                        <img src="/images/shape/wk1.png" alt="" />
                      </div>
                      <div className="how_it_work_bg_thumb_inner_hv">
                        <img src="/images/shape/wk2.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="how_it_work_title pt-65">
                    <h4>
                      <Link href={"/MedicalWrite"}>Medical Writing</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="single_how_it_work text-center pl-3 pr-3 mb-60 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="how_it_work_content">
                  <div className="how_it_work_number">
                    <h4>02</h4>
                  </div>
                  <div className="how_it_work_icon">
                    <Link href={"/ScientificWriting"}>
                      <div className="icon">
                        <i className="flaticon-process"></i>
                      </div>
                    </Link>
                    <div className="how_it_work_icon_bg_thumb">
                      <div className="how_it_work_icon_bg_thumb_inner">
                        <img src="/images/shape/wk1.png" alt="" />
                      </div>
                      <div className="how_it_work_bg_thumb_inner_hv">
                        <img src="/images/shape/wk2.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="how_it_work_title pt-65">
                    <h4>
                      <a href="#">Scientific Writing</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="single_how_it_work text-center pl-3 pr-3 mb-60 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="how_it_work_content">
                  <div className="how_it_work_number">
                    <h4>03</h4>
                  </div>
                  <div className="how_it_work_icon">
                    <Link href={"/TechnicalWriting"}>
                      <div className="icon">
                        <i className="flaticon-data"></i>
                      </div>
                    </Link>
                    <div className="how_it_work_icon_bg_thumb">
                      <div className="how_it_work_icon_bg_thumb_inner">
                        <img src="/images/shape/wk1.png" alt="" />
                      </div>
                      <div className="how_it_work_bg_thumb_inner_hv">
                        <img src="/images/shape/wk2.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="how_it_work_title pt-65">
                    <h4>
                      <a href="#">Technical Writing</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="single_how_it_work text-center pl-3 pr-3 mb-60 wow flipInY"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="how_it_work_content">
                  <div className="how_it_work_number">
                    <h4>04</h4>
                  </div>
                  <div className="how_it_work_icon">
                    <Link href={"/MedicalRewrite"}>
                      <div className="icon">
                        <i className="flaticon-data"></i>
                      </div>
                    </Link>
                    <div className="how_it_work_icon_bg_thumb">
                      <div className="how_it_work_icon_bg_thumb_inner">
                        <img src="/images/shape/wk1.png" alt="" />
                      </div>
                      <div className="how_it_work_bg_thumb_inner_hv">
                        <img src="/images/shape/wk2.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="how_it_work_title pt-65">
                    <h4>
                      <a href="#">Rewriting</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ourProfessional()}
      {howWeWork(2)}
      {clientFeedback()}
    </>
  );
}
