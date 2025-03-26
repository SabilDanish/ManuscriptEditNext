"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FaqHome from "./_Common/FaqHome/FaqHome";
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
import CookieConsent from "react-cookie-consent";
import { useEffect, useState } from "react";
import AnimationSection from "./_Common/AnimationSection/AnimationSection";
import Bloggy from "./_Common/Bloggy/Bloggy";

export default function Home() {
  SwiperCore.use([Autoplay]);
  const { loading, error, blogs } = useBlogs();

  // useEffect(() => {
  //   fetch("http://localhost:8081/backendtesting")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="myCookieConsent"
        style={{
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(10px)",
          color: "#FFFFFF",
          fontSize: "14px",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
        buttonStyle={{
          background: "linear-gradient(135deg, #4CAF50, #45a049)",
          color: "#FFFFFF",
          fontSize: "14px",
          padding: "10px 20px",
          borderRadius: "25px",
          border: "none",
          cursor: "pointer",
          transition: "transform 0.2s ease",
          // marginBottom: "6rem",
        }}
        declineButtonStyle={{
          background: "linear-gradient(135deg, #F44336, #e53935)",
          color: "#FFFFFF",
          fontSize: "14px",
          padding: "10px 20px",
          borderRadius: "25px",
          border: "none",
          cursor: "pointer",
          transition: "transform 0.2s ease",
          // marginBottom: "6rem",
        }}
        expires={150}
        onAccept={() => {
          console.log("Cookies accepted!");
        }}
        onDecline={() => {
          console.log("Cookies declined!");
        }}
      >
        <div
          style={{
            marginRight: "20px",
            paddingBottom: "2rem",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              display: "block",
              marginBottom: "5px",
            }}
          >
            This website uses cookies
          </span>
          <span>
            We use cookies to personalise content and ads, to provide social
            media features and to analyse our traffic. We also share information
            about your use of our site with our social media, advertising and
            analytics partners who may combine it with other information that
            you’ve provided to them or that they’ve collected from your use of
            their services.{" "}
            {/* <a
              href="/privacy-policy"
              style={{ color: "#4CAF50", textDecoration: "underline" }}
            >
              Learn more
            </a> */}
          </span>
        </div>
      </CookieConsent>
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
      <AnimationSection/>
      <WhyChooseUs />
      <Clients />
      <PublicationPackages />
      <HowItWorks />
      <CustomizedServices />
      <ServiceList />
      <OurServices />
      <Experts />
      <Testimonial />
      <Bloggy/>
      {/* {blogs && blogs.length ? <BlogDesk blogs={blogs} /> : ""}
      {blogs && blogs.length ? <BlogMob blogs={blogs} /> : ""} */}
      <FaqHome />
      <NewsletterSubscribe />
    </>
  );
}
