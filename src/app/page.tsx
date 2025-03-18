"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FaqHome from "./_Common/FaqHome/FaqHome";
// import BlogMob from "./_Common/BlogMob/BlogMob";
// import BlogDesk from "./_Common/BlogDesk/BlogDesk";
import Testimonial from "./_Common/Testimonial/testimonial";
import Clients from "./_Common/Clients/Clients";
import TopBannerForm from "./_Common/_TopBannerForm/TopBannerForm";
import useBlogs from "./hooks/mainPage/useBlog";
import OurServices from "./_Common/_OurServices/OurServices";
import HowItWorks from "./_Common/HowItWorks/HowItWorks";
import CustomizedServices from "./_Common/CustomizedServices/CustomServices";
import WhyChooseUs from "./_Common/WhyChooseUs/WhyChooseUs";
import NewsletterSubscribe from "./_Common/SubsNewsletter/SubsNewsletter";
import Experts from "./_Common/ExpertCard/Experts";
import PublicationPackages from "./_Common/Publication_package/Publication_package";
import ServiceList from "./_Common/_ServiceData/ServiceData";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  SwiperCore.use([Autoplay]);
  const { loading, error, blogs } = useBlogs();


  
  return (
    <>
      <meta
        name="title"
        content="ManuscriptEdit - Expert English Editing & Proofreading for Research Papers"
      />
      <meta
        name="description"
        content="Professional English editing, proofreading, and publication support for researchers, authors, and academics. Get high-quality manuscript editing, journal submission assistance, and research paper formatting from PhD experts. Fast turnaround and 100% quality guarantee."
      />
      <meta
        name="keywords"
        content="Research Paper Editing, Academic Editing Services, Scientific Manuscript Editing, English Proofreading Services, Journal Paper Editing, Publication Support Services, Editing Services for Researchers, Professional Academic Proofreading, Dissertation Editing Services, PhD Thesis Proofreading, Manuscript Formatting for Journals, High-Impact Journal Submission."
      />
      <meta
        property="og:title"
        content="ManuscriptEdit - Expert English Editing & Proofreading for Research Papers"
      />
      <meta
        property="og:description"
        content="Professional English editing, proofreading, and publication support for researchers, authors, and academics. Get high-quality manuscript editing, journal submission assistance, and research paper formatting from PhD experts. Fast turnaround and 100% quality guarantee."
      />
      <meta
        property="og:image"
        content="https://manuscriptedit.com/images/logo16.png"
      />
      <meta property="og:url" content="https://www.manuscriptedit.com" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="ManuscriptEdit - Expert English Editing & Proofreading for Research Papers"
      />
      <meta
        name="twitter:description"
        content="Professional English editing, proofreading, and publication support for researchers, authors, and academics. Get high-quality manuscript editing, journal submission assistance, and research paper formatting from PhD experts. Fast turnaround and 100% quality guarantee."
      />
      <meta
        name="twitter:image"
        content="https://manuscriptedit.com/images/logo16.png"
      />

      <ToastContainer />
      <TopBannerForm />
      <WhyChooseUs />
      <Clients />
      <PublicationPackages />
      <HowItWorks />
      <CustomizedServices />
      <ServiceList />
      <OurServices />
      <Experts />
      <Testimonial />
      {/* {blogs && blogs.length ? <BlogDesk blogs={blogs} /> : ""}
      {blogs && blogs.length ? <BlogMob blogs={blogs} /> : ""} */}
      <FaqHome />
      <NewsletterSubscribe />
    </>
  );
}
