'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
  return (
    <>
      {breadcrum("Services ", "Customized Services")}
      {SpecializedArea(false)}
      <div className="brand_area pt-35 pb-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_main_title">
                  <h1>Customized Services</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
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
                <div className="single_service_style_ten p-1 pt-4">
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
                        <i className="fa fa-check-square-o"></i> Content Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Copywriting
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Article Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Script Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Technical
                        Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Case Study
                        Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Creative
                        Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Company Profile
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Medical Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Thesis Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Essay Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Dissertation
                        Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Academic
                        Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Script Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> V, SOP, LOR
                        Writing
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
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
                <div className="single_service_style_ten p-1 pt-4">
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
                        <i className="fa fa-check-square-o"></i> Press Release{" "}
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Interactive
                        Content{" "}
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> E-Book Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Newsletter
                        Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> E-commerce
                        Content
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Story Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Corporate
                        Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Magazine
                        Writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Copy Editing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Novel Editing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Book Editing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Book Editing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Ready to Print
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Cover Page
                        Designing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Book Formatting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
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
                <div className="single_service_style_ten p-1 pt-4">
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
                        <i className="fa fa-check-square-o"></i> Book Indexing{" "}
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Book
                        Typesetting{" "}
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Latex
                        Formatting
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Latex
                        Conversion
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Latex to Word
                        Conversion
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> OCR Conversion
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Desktop
                        Publishing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Content
                        Localization
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i>Content
                        Processing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> E-Learning
                        writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Content
                        Migration
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Content
                        Digitization
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Content
                        Optimization
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> E-commerce
                        writing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Book Formatting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
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
                <div className="single_service_style_ten p-1 pt-4">
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
                        <i className="fa fa-check-square-o"></i> Content
                        Enhancement{" "}
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Content
                        Integration{" "}
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Digital
                        creation
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Multimedia
                        creation
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Content
                        Designing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Page
                        Composition
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Content
                        Filtering
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i>Digital
                        Management
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i>SEO Copywriting
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> E-Publication
                        Service
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Article
                        Submission
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Voice Over
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Image Polishing
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Image
                        Enhancement
                      </span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                      <span>
                        <i className="fa fa-check-square-o"></i> Book Formatting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
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
      {howWeWork()}
      {clientFeedback()}
    </>
  );
}
