"use client";
import Link from "next/link";
import "./GlobalPartner2.css";
import { useState } from "react";
import corpame_image from "./images/corpame_image.png";
import jorame_image from "./images/jorame_image.png";
import labatme_image from "./images/labatme_image.png";
import univatme_image from "./images/univatme_image.png";
import melogo from "./images/melogo.png";
import GlobalPartners2 from "@/app/_Common/GlobalPartner2/GlobalPartner2";

const GlobalPartner2 = () => {
  const [select, setSelect] = useState<number>(0);

  const services = [
    {
      id: 0,
      image: jorame_image,
      heading: "JOR@ ",
      paragraph: "We offer a wide spectrum of services to scientific and non-scientific journals. Our services include marketing, peer review, editorial support, typesetting, indexing, and digital branding."
    },
    {
      id: 1,
      image: labatme_image,
      heading: "LAB@ ",
      paragraph: "Lab@ME takes full cognizance of all requirements of a scientific professional and has the expertise to transform your studies into publishable papers. Our services include writing, rewriting, editing, designing, and illustrating your research work to take it to the publication stage."
    },
    {
      id: 2,
      image: univatme_image,
      heading: "UNIV@ ",
      paragraph: "We fulfill the needs of undergraduates, graduates, postgraduates, doctorates, and post-doctorates through our wide range of tailored services, which include thesis rewriting, editing, proofreading, publication support, CV, LOR, and SOP writing, and translation services for undergraduates."
    },
    {
      id: 3,
      image: corpame_image,
      heading: "CORP@ ",
      paragraph: "We help you take your business to the global stage by planning and executing all your corporate needs and building your business identity. Our specialized teams pride themselves in playing the enabler for many companies by maximizing the reach of their products vis-à-vis customers. With Manuscriptedit Corporate Services as your start-to-finish service provider, you can free up your resources to focus on your core business activities."
    }
  ];

  return (

    <>
      <div className="container">
        <div className="row">
          {/* Big Div */}
          <div className="col-lg-7 bigdiv">
            <img src={services[select].image.src} alt="" className="bigdiv-icon" />
            <h1>{services[select].heading}</h1>
            <p>{services[select].paragraph}</p>
          </div>

          {/* Small Divs */}
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
                  <img src={melogo.src} alt="" className="smalldiv-icon" />
                </div>
              )
            ))}
          </div>
        </div>
      </div>


      <GlobalPartners2 />

    </>


  );
};

export default GlobalPartner2;
