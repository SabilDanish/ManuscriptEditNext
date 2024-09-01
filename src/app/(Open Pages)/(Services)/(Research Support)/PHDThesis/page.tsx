"use client"

import FaqHome from "@/app/_Common/FaqHome/FaqHome";
import PhdThesis from "@/app/_Common/PhdThesis/Phdthesis";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import FaqPhd from "@/app/_Common/faqPhd/faqPhd";

export default function Home() {
  return (
    <>
      {breadcrum(
        "Services / Research Support",
        "Phd Thesis"
      )}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-2 pb-3">
                "Unlock the full potential of your PhD research with tailored
                assistance every step of the way."
              </h3>
              <p>
                Embarking on a PhD is a monumental step in any scholar's life, a
                journey filled with challenges yet brimming with opportunities.
                At ManuscriptEdit, we recognize the hurdles you face – from
                complex research to meticulous editing. Our bespoke PhD thesis
                writing services are crafted to empower your academic pursuits,
                transforming obstacles into stepping stones towards scholarly
                success.
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


      <PhdThesis/>

      <div className="service_area pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_main_title">
                  <h1>Services Offered</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten stt-2">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      
                        In-Depth Research & Analysis
                      
                    </h4>
                    <p>
                      Navigate the vast ocean of academia with our expert
                      research and analysis. We dive deep into your subject
                      matter to unearth pivotal insights and data, ensuring a
                      robust foundation for your thesis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten stt-2">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                     
                        Professional Writing & Editing
                     
                    </h4>
                    <p>
                      Your ideas deserve to be presented with clarity and
                      precision. Our seasoned writers and editors bring finesse
                      to your manuscript, ensuring it meets the highest
                      standards of academic writing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten stt-2">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                     
                        Statistical & Data Analysis
                      
                    </h4>
                    <p>
                      Decipher complex datasets with ease. Our statistical
                      wizards employ cutting-edge techniques to provide
                      comprehensive data analysis, giving your research the
                      empirical edge it needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten stt-2">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                     
                        Complete Thesis Guidance
                     
                    </h4>
                    <p>
                      From conception to completion, our PhD thesis guidance
                      encompasses every aspect of your research journey. We
                      mentor you through each stage, ensuring your path to
                      success is clear and attainable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten stt-2">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      
                        Delivery Time and Process
                      
                    </h4>
                    <p>
                      We streamline your PhD journey with a clear, efficient
                      process. With an average delivery time of 50-60 days*, we
                      commit to punctuality without compromising quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      

      <div className="process_area pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-90 mt-3">
                <div className="section_main_title">
                  <h1>Why Choose ManuscriptEdit?</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_process_work">
                <div className="single_it_work_content">
                  <div className="work_number">
                    <img src="/images/software-work-icon1.png" alt="icon" />
                  </div>
                  <div className="single_work_content_title pt-1">
                    <h4>Flexible Pricing Plans</h4>
                  </div>
                  <div className="single_it_work_content_desc">
                    <p>
                      We offer competitive and transparent pricing to cater to
                      research needs and budgets. Sign up to get special offers
                      and discounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_process_work">
                <div className="single_it_work_content">
                  <div className="work_number">
                    <img src="/images/software-work-icon2.png" alt="icon" />
                  </div>
                  <div className="single_work_content_title pt-1">
                    <h4>Register/Sign Up to Know More</h4>
                  </div>
                  <div className="single_it_work_content_desc">
                    <p>
                      Our team is readily available if you have any questions or
                      need further assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_process_work">
                <div className="single_it_work_content">
                  <div className="work_number">
                    <img src="/images/software-work-icon3.png" alt="icon" />
                  </div>
                  <div className="single_work_content_title pt-1">
                    <h4>We're Here to Help</h4>
                  </div>
                  <div className="single_it_work_content_desc">
                    <p>
                      With decades of combined experience in academic research
                      support, our team comprises seasoned experts committed to
                      your scholarly success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="accordion_area style-two upper1 pt-0 pb-100">
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
                        How do you ensure the originality of my PhD thesis?
                      </a>
                      <p>
                        We guarantee originality by conducting thorough research
                        and utilizing plagiarism detection software. Each thesis
                        is crafted to be unique and tailored to your study.
                      </p>
                    </li>
                    <li>
                      <a>
                        Can I communicate directly with the person writing or
                        editing my thesis?
                      </a>
                      <p>
                        Yes, we encourage direct communication between our
                        clients and our team of experts to ensure clarity and a
                        personalized approach to your thesis.{" "}
                      </p>
                    </li>
                    <li>
                      <a>
                        What qualifications do your writers and editors hold?
                      </a>
                      <p>
                        Our team is composed of PhD-level writers and editors
                        who are experts in their respective fields, ensuring
                        that your thesis is handled by knowledgeable
                        professionals.
                      </p>
                    </li>
                    <li>
                      <a>
                        How do you handle data security and confidentiality?
                      </a>
                      <p>
                        Protecting your data is paramount. We adhere to strict
                        confidentiality agreements and employ secure methods to
                        ensure your research remains private.
                      </p>
                    </li>
                    <li>
                      <a>How do I keep track of my research performance?</a>
                      <p>
                        Our Scholarly Metrics Monitoring service lets you stay
                        informed about your research's performance across
                        various metrics, helping you make informed decisions
                        about future projects.
                      </p>
                    </li>
                    <li>
                      <a>
                        Are there any specific formatting styles you follow for
                        the thesis?
                      </a>
                      <p>
                        Yes, we are proficient in various formatting styles,
                        including APA, MLA, Chicago, and Harvard, and can adapt
                        to the specific formatting guidelines of your
                        institution.
                      </p>
                    </li>
                    <li>
                      <a>
                        Do you provide support for statistical and data analysis
                        software?
                      </a>
                      <p>
                        Absolutely. Our statisticians are adept at using
                        software like SPSS, SAS, R, and others, providing you
                        with comprehensive support for your data analysis needs.
                      </p>
                    </li>
                    <li>
                      <a>
                        What is your policy on deadlines and timely delivery?
                      </a>
                      <p>
                        We prioritize meeting deadlines and work diligently to
                        deliver your thesis within the agreed-upon timeframe,
                        taking into account the complexity and requirements of
                        your project.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 pr-3"></div>
          </div>
        </div>
      </div> */}


      <FaqPhd/>
    </>
  );
}
