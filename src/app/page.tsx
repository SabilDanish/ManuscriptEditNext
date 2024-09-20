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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ourClientBanner from "./utils/images/Logos.jpg";
import TrustedPartner from "./_Common/_TrustedPartner/TrustedPartner";
import GetHelpMobile from "./_Common/_getHelpMobile/getHelpMobile";
import TopBannerForm from "./_Common/_TopBannerForm/TopBannerForm";
import EnquiryForm from "./_Common/_enquiryForm/EnquiryForm";
import useBlogs from "./hooks/mainPage/useBlog";
import CounterComponent from "./_Common/CounterUp/CounterUp";
import UpcomingWebinar from "./_Common/upcomingWebinar/upcomingWebinar";
import RadioSection from "./_Common/RadioSection/RadioSection";
import OfferSlider from "./_Common/_OfferSlider/OfferSlider";
import PublicationAccordion from "./_Common/AccordionLatest/Accordion";
import Dropdown2 from "./_Common/Dropdown2/Dropdown2";
import OurServices from "./_Common/_OurServices/OurServices";




// import '../../public/js/vendor/jquery-3.2.1.min.js'
// import '../../public/js/bootstrap.min.js'

export default function Home() {
  SwiperCore.use([Autoplay]);
  const { loading, error, blogs } = useBlogs();


  return (
    <>
      <ToastContainer />

      <TopBannerForm />
      <OfferSlider />

      <RadioSection />
      {/* <GetHelpMobile /> */}
      {/* <TrustedPartner/> */}

      {/* End of Biswa's custom codes */}

      {/* <SocialIcon /> */}

      {/* <GetEvery /> */}

      <GetHelp />
      <Dropdown2 />
      <Clients />

      <OurProfessional />

      {/* <UpcomingWebinar/> */}

      {/* <CounterComponent /> */}

      <Testimonial />

      {blogs && blogs.length && <BlogDesk blogs={blogs} />}

      {blogs && blogs.length && <BlogMob blogs={blogs} />}
     

      <FaqHome />

<PublicationAccordion/>

    <OurServices />
      
    </>
  );
}
