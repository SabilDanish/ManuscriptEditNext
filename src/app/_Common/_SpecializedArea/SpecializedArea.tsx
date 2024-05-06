"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SpecializedArea(showDetails = true) {
  return (
    <>
      <div className="brand_area pt-35 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_main_title">
                  <h1>Explore our editor's specialized areas</h1>
                  <p>
                    From Medicine to Life Sciences, Physical Sciences, Economics
                    and the Art & Humanities -- our English editing team
                    specializes in 1,117 subject areas.
                  </p>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                <Swiper
                  // install Swiper modules
                  spaceBetween={50}
                  slidesPerView={5}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide>
                    <div className="single_brand mt-3 mb-5">
                      <div className="single_brand_thumb">
                        <img
                          src="/images/menuscimg/br-1.png"
                          alt=""
                          width="50%"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="col-lg-12">
                      <div className="single_brand mt-3 mb-5">
                        <div className="single_brand_thumb">
                          <img
                            src="/images/menuscimg/br-2.png"
                            alt=""
                            width="50%"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single_brand mt-3 mb-5">
                      <div className="single_brand_thumb">
                        <img
                          src="/images/menuscimg/br-3.png"
                          alt=""
                          width="50%"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single_brand mt-3 mb-5">
                      <div className="single_brand_thumb">
                        <img
                          src="/images/menuscimg/br-4.png"
                          alt=""
                          width="50%"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single_brand mt-3 mb-5">
                      <div className="single_brand_thumb">
                        <img
                          src="/images/menuscimg/br-5.png"
                          alt=""
                          width="50%"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single_brand mt-3 mb-5">
                      <div className="single_brand_thumb">
                        <img
                          src="/images/menuscimg/br-6.png"
                          alt=""
                          width="50%"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDetails && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title text_center mb-50 mt-3">
                  <div className="section_main_title">
                    <h1>
                      Manuscriptedit.com covers the following type of documents
                    </h1>
                  </div>
                  <div className="em_bar">
                    <div className="em_bar_bg"></div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInUp animated"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Scientific research papers</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Medical research papers</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Galley proofs</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Returned articles with reviewer's..</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Research reports</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>PhD Thesis</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Dissertations</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Grant Applications</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInUp animated"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Academic and Non-academic..</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Books</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Corporate literatures</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Company reports</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>White Papers</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Owner Manuals</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Marketing Collateral</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Press releases</h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInUp animated"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Newsletters</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Advertising Material</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Reference Guides</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Consumer Documentation</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Websites</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Training Manuals</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Business Documents</h5>
                  </div>
                </div>
                <div className="single_software_box">
                  <div className="single_software_box_content">
                    <h5>Student's essay</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
