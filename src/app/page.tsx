"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import clientFeedback from "./_Common/_ClientFeedback/ClientFeedback";
import { Autoplay } from "swiper/modules";
import ourProfessional from "./_Common/_OurProfessional/OurProfessional";
import howWeWork from "./_Common/_HowWeWork/HowWeWork";
import Link from "next/link";
import redirect from "./_Common/_functionality/Redirect";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetHelp from "./_Common/getHelp/getHelp";
import GetEvery from "./_Common/GetEvery/GetEvery";
import SocialIcon from "./_Common/StickySocial/SocialIcons";
import FAQ from "./_Common/_FAQ/FAQ";
import FaqHome from "./_Common/FaqHome/FaqHome";
import BlogMob from "./_Common/BlogMob/BlogMob";
import BlogDesk from "./_Common/BlogDesk/BlogDesk";
import Testimonial from "./_Common/Testimonial/testimonial";
import Clients from "./_Common/Clients/Clients";
import OurProfessional from "./_Common/_OurProfessional/OurProfessional";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import ourClientBanner from "./utils/images/Logos.jpg";
import TrustedPartner from "./_Common/_TrustedPartner/TrustedPartner";
import GetHelpMobile from "./_Common/_getHelpMobile/getHelpMobile";
import TopBannerForm from "./_Common/_TopBannerForm/TopBannerForm";
import EnquiryForm from "./_Common/_enquiryForm/EnquiryForm";




// import '../../public/js/vendor/jquery-3.2.1.min.js'
// import '../../public/js/bootstrap.min.js'

export default function Home() {
  SwiperCore.use([Autoplay]);
  // const router = useRouter();

  // useEffect(() => {
  //   const storedDataString = sessionStorage.getItem('userId');
  //   console.log({storedDataString})

  //   if (!storedDataString) {
  //     // Redirect to /Auth page if storedData does not exist
  //     router.push('/Auth');
  //   }
  // }, []);
  
  return (
    <>

      <ToastContainer />
      {/* <Swiper
        // install Swiper modules
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img className="silder-banner" src="/images/BANNER1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="silder-banner" src="/images/BANNER2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="silder-banner" src="/images/BANNER3.jpg" />
        </SwiperSlide>
      </Swiper> */}
      {/* Inserting Biswa's custom codes here */}
      <TopBannerForm />
      <GetHelpMobile />
      {/* <TrustedPartner/> */}


      {/* End of Biswa's custom codes */}



      <SocialIcon />


      <GetEvery />

      <GetHelp />

      


      <Clients />



      <OurProfessional />

      <Testimonial />


      <BlogDesk />

      <BlogMob />

      <FaqHome />





      {/* pillow section */}

      {/* <div className="flipbox_area top_feature mt-3">
      </Swiper> */}
      {/* <div className="flipbox_area top_feature mt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <Link href={"/EditingOverview"}>
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="techno_flipbox_icon">
                        <div className="icon">
                          <i className="flaticon-global-1"></i>
                        </div>
                      </div>
                      <div className="flipbox_title">
                        <h3>English Editing</h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>English Editing</h3>
                      </div>
                      <div className="flipbox_desc">
                        <p>
                          Our services help you navigate the complex world of
                          academic publishing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <Link href={"/PackageService"}>
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="techno_flipbox_icon">
                        <div className="icon">
                          <i className="flaticon-data"></i>
                        </div>
                      </div>
                      <div className="flipbox_title">
                        <h3>Publication Support</h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>Publication Support</h3>
                      </div>
                      <div className="flipbox_desc">
                        <p>
                          Our services help you navigate the complex world of
                          academic publishing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <Link href={"/Writing"}>
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="techno_flipbox_icon">
                        <div className="icon">
                          <i className="flaticon-interaction"></i>
                        </div>
                      </div>
                      <div className="flipbox_title">
                        <h3>Writing &amp; Rewriting</h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>Writing &amp; Rewriting</h3>
                      </div>
                      <div className="flipbox_desc">
                        <p>
                          Our services help you navigate the complex world of
                          academic publishing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <Link href={"/ResearchSupportOverview"}>
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="techno_flipbox_icon">
                        <div className="icon">
                          <i className="flaticon-developer"></i>
                        </div>
                      </div>
                      <div className="flipbox_title">
                        <h3>Research Support </h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>Research Support </h3>
                      </div>
                      <div className="flipbox_desc">
                        <p>
                          Our services help you navigate the complex world of
                          academic publishing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <Link href={"/CustomizedServices"}>
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="techno_flipbox_icon">
                        <div className="icon">
                          <i className="flaticon-developer"></i>
                        </div>
                      </div>
                      <div className="flipbox_title">
                        <h3>Customized Services </h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>Customized Services</h3>
                      </div>
                      <div className="flipbox_desc">
                        <p>
                          Our services help you navigate the complex world of
                          academic publishing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <a
                onClick={() => {
                  redirect("corporate");
                }}
              >
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="techno_flipbox_icon">
                        <div className="icon">
                          <i className="flaticon-developer"></i>
                        </div>
                      </div>
                      <div className="flipbox_title">
                        <h3>Corporate Services </h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>Corporate Services </h3>
                      </div>
                      <div className="flipbox_desc">
                        <p>
                          Our services help you navigate the complex world of
                          academic publishing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <Link href={"/PHDThesis"}>
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="techno_flipbox_icon">
                        <div className="icon">
                          <i className="flaticon-developer"></i>
                        </div>
                      </div>
                      <div className="flipbox_title">
                        <h3>PhD Research and Thesis Help </h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>PhD Research and Thesis Help</h3>
                      </div>
                      <div className="flipbox_desc">
                        <p>
                          Unlock the full potential of your PhD research with
                          tailored assistance every step of the way.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-6">
              <Link href={"/MasterThesis"}>
                <div className="techno_flipbox mb-30">
                  <div className="techno_flipbox_font">
                    <div className="techno_flipbox_inner">
                      <div className="techno_flipbox_icon">
                        <div className="icon">
                          <i className="flaticon-developer"></i>
                        </div>
                      </div>
                      <div className="flipbox_title">
                        <h3>Masters Thesis Help</h3>
                      </div>
                    </div>
                  </div>
                  <div className="techno_flipbox_back">
                    <div className="techno_flipbox_inner">
                      <div className="flipbox_title">
                        <h3>Masters Thesis Help </h3>
                      </div>
                      <div className="flipbox_desc">
                        <p>
                          Achieve mastery in your field with professional thesis
                          writing and editing services from ManuscriptEdit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div> */}






      {/* <div className="how_it_work pt-50 pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-60 mt-3">
                <div className="section_sub_title uppercase mb-3">
                  <h6>FEATURES CASE</h6>
                </div>
                <div className="section_main_title">
                  <h1>Our Working Process</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_it_work mb-4">
                <div className="single_it_work_content pl-2 pr-2">
                  <div className="single_it_work_content_list pb-5">
                    <span>1</span>
                  </div>
                  <div className="single_work_content_title pb-2">
                    <h4>Select A Project</h4>
                  </div>
                  <div className="single_it_work_content_text pt-1">
                    <p>
                      We have the technology and industry expertise to develop
                      solutions that can connect people and businesses across
                      variety of mobile devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_it_work mb-4">
                <div className="single_it_work_content pl-2 pr-2">
                  <div className="single_it_work_content_list pb-5">
                    <span>2</span>
                  </div>
                  <div className="single_work_content_title pb-2">
                    <h4>Project Analysis</h4>
                  </div>
                  <div className="single_it_work_content_text pt-1">
                    <p>
                      We have the technology and industry expertise to develop
                      solutions that can connect people and businesses across
                      variety of mobile devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single_it_work mb-4">
                <div className="single_it_work_content pl-2 pr-2">
                  <div className="single_it_work_content_list three pb-5">
                    <span>3</span>
                  </div>
                  <div className="single_work_content_title pb-2">
                    <h4>Deliver Result</h4>
                  </div>
                  <div className="single_it_work_content_text pt-1">
                    <p>
                      We have the technology and industry expertise to develop
                      solutions that can connect people and businesses across
                      variety of mobile devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* {ourProfessional()} */}
      {/* <div className="counter_area">
        <div className="container">
          <div className="row cntr_bg_up nagative_margin pt-50 pb-45">
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex mt-3 justify-content-center">
              <img src="images/A1.png" width="100px" height="100px" alt="" />
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">230</span>
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>ACTIVE CLIENTS</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex mt-3 justify-content-center">
              <img src="images/A2.png" width="100px" height="100px" alt="" />
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">95</span>
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>TEAM ADVISORS</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex mt-3 justify-content-center">
              <img src="images/A3.png" width="100px" height="100px" alt="" />
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">820</span>
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>
                    &nbsp;&nbsp;&nbsp;&nbsp;PROJECTS &nbsp;&nbsp;&nbsp;&nbsp;
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 d-flex mt-3 justify-content-center">
              <img src="images/A4.png" width="100px" height="100px" alt="" />
              <div className="single_counter text_center mb-4">
                <div className="countr_text">
                  <h1>
                    <span className="counter">14</span>
                    <span>+</span>{" "}
                  </h1>
                </div>
                <div className="counter_desc">
                  <h5>GLORIOUS YEARS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* {howWeWork(3)} */}

      {/* {clientFeedback()} */}

    </>
  );
}
