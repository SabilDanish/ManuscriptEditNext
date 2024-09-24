'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import { serviceData } from "@/app/utils/service";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../../_Common/getHelp/getHelp.css';
import "./Statistical.css";

export default function Home() {
  return (
    <>
      {breadcrum("Services / Writing", "Statistical Analysis")}
      <section className="pt-5 pb-5">
        
          {/* <div className="row conrow">
            <div className="col-md-12">
              <h3 className="pt-2 pb-3"> Statistical Analysis</h3>
              <p>
                Statistical Analysis is a specialized service offered by
                ManuscriptEdit, dedicated to helping clients derive meaningful
                insights from data through rigorous statistical methods and
                techniques. Whether it's for academic research, business
                decision-making, or scientific investigation, ManuscriptEdit's
                Statistical Analysis service provides comprehensive support
                throughout the data analysis process.
              </p>
              <div className="em-about-icon-box2">
                <div className="list-icon">
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Data Preparation</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Descriptive Statistics</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Inferential Statistics</h6>
                  </span>
                </div>
              </div>
            </div>
            
          </div> */}
        
      </section>



      <section className="pb-5">
        <>
          
          <div className="row ServicesSection">
              {
                serviceData['Data Analysis Assistance'] && serviceData['Data Analysis Assistance'].items && serviceData['Data Analysis Assistance'].items.map(item => {
                  const { title, features, description, link } = item;
                  return (


                    <div className="col-lg-3">
                      <div className='carousel-item-custom'>
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
                      What You Provide
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
                      What We Provide
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
                              <i className="fa fa-check-square-o"></i>Topic.
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>Main
                              objective.
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Primary
                              and secondary endpoints.
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Raw data
                              in excel sheet.
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
                              <i className="fa fa-check-square-o"></i> Results
                              using SPSS software.
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Data
                              analysis using the following methods (but not
                              limited to them) as may be necessary depending on
                              the research question being addressed:
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Normality
                              test
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>
                              Parametric/non-parametric analysis
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Student’s
                              t-test/Mann-Whitney U test
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Kruskal–Wallis H test/Anova
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Pearson’s
                              chi-square/ Fisher's exact test
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Correlation analysis
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Linear/logistic regression
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Survival
                              analysis
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Cox
                              regression
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Construction of tables and graphs.
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Interpretation of results.
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
              Request a Quote
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
