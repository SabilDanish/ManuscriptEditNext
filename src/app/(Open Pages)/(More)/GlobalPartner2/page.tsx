"use client";
import Link from "next/link";
import "./GlobalPartner2.css";
import { useState } from "react";
import corpame_image from "./images/corpame_image.png";
import jorame_image from "./images/jorame_image.png";
import labatme_image from "./images/labatme_image.png";
import univatme_image from "./images/univatme_image.png";
import webinar_image from "./images/webinar.png";
import course_image from "./images/course.png";
import top_image from "./images/Groupnn.jpg";
import fund_image from "./images/fund.png";
import melogo from "./images/melogo.png";
import Clients from "@/app/_Common/Clients/Clients";
import GlobalPartners2 from "@/app/_Common/GlobalPartner2/GlobalPartner2";
import PeerForm from "@/app/_Common/PeerForm/PeerForm";
import ContactDown from "@/app/_Common/ContactDown/ContactDown";
import WhyChooseGlobal from "@/app/_Common/whyChooseGlobal/WhyChooseGlobal";
import KeyBenifits from "@/app/_Common/KeyBenifits/KeyBenifits";
import HowStartedGlobal from "@/app/_Common/HowStartedGlobal/HowStartedGlobal";
import WorkTogether from "@/app/_Common/WorkTogether/WorkTogether";

const GlobalPartner2 = () => {
  const [select, setSelect] = useState<number>(0);

  const services = [
    {
      id: 0,
      image: jorame_image,
      heading: "JOUR@ ",
      paragraph: (
        <>
          Optimize your editorial processes with expert solutions:
          <ul>
            <li><strong>Editing and Peer Review Management</strong>: High-quality editorial services to ensure consistency across issues.</li>
            <li><strong>Precise Translation Services</strong>: Expand global readership with expert translations.</li>
            <li><strong>Training for Editorial Teams</strong>: Equip your teams with insights on publication trends and editorial practices.</li>
            <li><strong>Client Success Stories</strong>: Worked with leading publishers like Elsevier, Taylor & Francis, BMJ, and Frontiers to achieve excellence.</li>
          </ul>
        </>
      )
    },
    {
      id: 1,
      image: labatme_image,
      heading: "LAB@ ",
      paragraph: (
        <>
          Streamline research, from experimentation to publication:
          <ul>
            <li><strong>Manuscript Preparation and Submission Support</strong>: Assistance in transforming lab results into high-impact scientific papers.</li>
            <li><strong>Data Visualization and Design</strong>: Create professional figures, diagrams, and infographics to showcase research findings.</li>
            <li><strong>Technical Proofreading Services</strong>: Ensure precision and clarity in lab reports and presentations.</li>
            <li><strong>Collaborative Publishing Solutions</strong>: Partner with laboratories to co-author papers in prestigious journals.</li>
          </ul>
        </>
      )
    },
    {
      id: 2,
      image: univatme_image,
      heading: "UNIV@ ",
      paragraph: (
        <>
          Empower your research output and global presence:
          <ul>
            <li><strong>Tailored Editorial Support</strong>: Improve the quality and reach of your research with expert writing, editing, and publishing services.</li>
            <li><strong>End-to-End Publication Support</strong>: Assistance with manuscript preparation, submission, and revisions.</li>
            <li><strong>Global Collaborations</strong>: Trusted by top institutions like Yonsei University, King Saud University, and Airlangga University.</li>
            <li><strong>Customized Workshops</strong>: Upskill your academic team through training programs on academic publishing and research ethics.</li>
          </ul>
        </>
      )
    },
    {
      id: 3,
      image: corpame_image,
      heading: "CORP@ ",
      paragraph: (
        <>
          Accelerate innovation with research-backed content and communication services:
          <ul>
            <li><strong>Business-Centric Writing and Editing</strong>: Craft high-quality reports, whitepapers, and technical documents.</li>
            <li><strong>Seamless Digital Communication Solutions</strong>: Enhance internal and external communication with expert editorial assistance.</li>
            <li><strong>Trusted by Global Leaders</strong>: Collaborated with top companies like NEOM and Onyx Hospitality.</li>
            <li><strong>Brand Impact Services</strong>: Strengthen your global reach through polished media content and engaging reports.</li>
          </ul>
        </>
      )
    },
    {
      id: 4,
      image: fund_image,
      heading: "FUND@ ",
      paragraph: (
        <>
          Maximize impact through clear and precise communication:
          <ul>
            <li><strong>Strategic Editorial Services</strong>: Create persuasive grant proposals, reports, and presentations.</li>
            <li><strong>Public Engagement Support</strong>: Elevate your brand through targeted media strategies and storytelling.</li>
            <li><strong>Professional Translation Services</strong>: Bridge language barriers for global impact.</li>
            <li><strong>Collaborations with Global Foundations</strong>: Partnered with esteemed organizations like the Bill & Melinda Gates Foundation.</li>
          </ul>
        </>
      )
    },
    {
      id: 5,
      image: course_image,
      heading: "COURSE@ ",
      paragraph: (
        <>
          Enhance digital learning experiences with tailored content services:
          <ul>
            <li><strong>Course Content Development</strong>: Create engaging course modules, eBooks, and online assessments.</li>
            <li><strong>Language and Instructional Design Support</strong>: Ensure course material is clear, concise, and aligned with best practices in online education.</li>
            <li><strong>Learning Management System (LMS) Integration</strong>: Format content seamlessly for popular LMS platforms like Moodle, Canvas, and Blackboard.</li>
            <li><strong>Localization Services</strong>: Adapt courses for diverse global audiences through expert translation and cultural customization.</li>
            <li><strong>Multimedia Enhancements</strong>: Add interactive visuals, quizzes, and video scripts for a better learning experience.</li>
          </ul>
        </>
      )
    },
    {
      id: 6,
      image: webinar_image,
      heading: "WEBINAR@ ",
      paragraph: (
        <>
          Maximize event impact with expert editorial and promotional support:
          <ul>
            <li><strong>Content Development for Events</strong>: Prepare high-quality event brochures, abstracts, and presentation decks.</li>
            <li><strong>Speaker and Session Support</strong>: Assist speakers with script writing, editing, and slide design to ensure engaging presentations.</li>
            <li><strong>Event Promotion and Marketing</strong>: Craft compelling email campaigns, social media posts, and PR materials to drive registrations.</li>
            <li><strong>Post-Event Documentation</strong>: Compile proceedings, reports, and summary documents for participants and stakeholders.</li>
            <li><strong>Real-Time Transcription and Translation Services</strong>: Facilitate multilingual participation through live captioning and instant translations.</li>
          </ul>
        </>
      )
    }
  ];




  return (
    <>



      <div className="container-fluid" >
        <div className="row align-items-center">
          {/* Left Content Section */}
          <div className="col-lg-6 px-5">
            <div style={{ marginLeft: '4rem', maxWidth: '500px' }}>
              <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#085e6d' }}>16+</h1>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#033b46' }}>Years of Trust</h3>
              <p className="mt-4" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#495057' }}>
                At ManuscriptEdit, we understand the challenges that researchers, universities, and
                publishers face in achieving publication success. That’s why we created the Global
                Partner Program—to work alongside you, streamline your editorial processes, and
                ensure your research gets the attention it deserves.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#495057' }}>
                We’re not just a service provider; we’re your partner in enhancing the quality and
                impact of your work.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6">
            <img
              src="/images/HowItWorks/bannerImage1.png"
              alt="Professional partnership illustration"
              className="img-fluid rounded " style={{width:'100%'}}
            />
          </div>
        </div>
      </div>


      <WhyChooseGlobal />


      {/* <div className="container" style={{ marginTop: "40px", marginBottom: "30px" }}>
        <div className="row">
          

          <div className="col-lg-7 bigdiv">
            <div className="smalldiv" style={{ backgroundColor: '#353c57' }}>

              <img src={services[select].image.src} alt="" className="smalldiv-icon" style={{ marginLeft: '.5rem' }} />
              <h1>{services[select].heading}</h1>
              <img src={melogo.src} alt="" className="smalldiv-icon" style={{ marginLeft: '.5rem' }} />
            </div>
            <span style={{ marginLeft: '1rem', marginTop: '2rem' }}>{services[select].paragraph}</span>
          </div>

          
          <div className="col-lg-4">
            {services.map((serv, index) => (
              select !== index && (
                <div
                  onClick={() => setSelect(serv.id)}
                  key={serv.id}
                  className="smalldiv"
                >
                  <img src={serv.image.src} alt="" className="smalldiv-icon" />
                  <h2>{serv.heading}</h2>
                  <img src={melogo.src} alt="" className="smalldiv-icon" style={{ marginLeft: '.5rem' }} />
                </div>
              )
            ))}
          </div>
        </div>

      </div> */}
      <GlobalPartners2 />
      <Clients />

      

      <KeyBenifits />

      <HowStartedGlobal/>
      <ContactDown />

      <WorkTogether/>
    </>
  );
};

export default GlobalPartner2;
