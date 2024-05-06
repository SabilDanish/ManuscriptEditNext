'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
  return (
    <>
      {breadcrum(
        "Services / Research Support",
        "Fully Experienced Researchers"
      )}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-2 pb-3">
                Manuscriptedit.com offer the following services for publication
                support.
              </h3>
              <p>
                You may have an excellent product or medical research result,
                but it needs to be marketed effectively to attract the attention
                of clients/readers. It requires special skills and efforts to
                design and develop lucid and appealing medical promotional/sales
                materials. We can help you convey your message to your target
                audience in the most effective manner through our service in
                writing promotional & sales materials. We can prepare medico
                marketing material aimed at consumers as well as medical
                professionals. Our experienced designers/editors will design and
                develop medical promotional/sales materials listed below:
              </p>
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
                      className="nav-link nav-st"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-expanded="true"
                    >
                      Medical Illustration
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav-st"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-expanded="false"
                    >
                      Scientific Illustration
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav-st"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-expanded="false"
                    >
                      Technical Illustration
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav-st"
                      data-toggle="tab"
                      href="#tabs-4"
                      role="tab"
                      aria-expanded="false"
                    >
                      Graphs & Charts & Tables
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav-st"
                      data-toggle="tab"
                      href="#tabs-5"
                      role="tab"
                      aria-expanded="false"
                    >
                      SImage polishing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link nav-st"
                      data-toggle="tab"
                      href="#tabs-6"
                      role="tab"
                      aria-expanded="false"
                    >
                      Sample Illustration
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
                              <i className="fa fa-check-square-o"></i> Medical :
                              Line.
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Medical :
                              2-color
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Medical :
                              4-color
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Medical :
                              Photorealistic
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
                              Scientific : Line
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Scientific : 2-color
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i>{" "}
                              Scientific : 4-color
                            </span>
                          </div>
                          <div className="about_icon_box_inner mb-20">
                            <span>
                              <i className="fa fa-check-square-o"></i> Scientific
                              : Photorealistic
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
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Technical : Line
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Technical : 2-color
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Technical : 4-color
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane mt-60" id="tabs-4" role="tabpanel">
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
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Scientific : Line
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Scientific : 2-color
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Scientific : 4-color
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Scientific : Photorealistic
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane mt-60" id="tabs-5" role="tabpanel">
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
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Scientific : Line
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Scientific : 2-color
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Scientific : 4-color
                                </span>
                              </div>
                              <div className="about_icon_box_inner mb-20">
                                <span>
                                  <i className="fa fa-check-square-o"></i>{" "}
                                  Scientific : Photorealistic
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane mt-60" id="tabs-6" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                          <div>
                            <img src="/images/sample.jpeg" />
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
