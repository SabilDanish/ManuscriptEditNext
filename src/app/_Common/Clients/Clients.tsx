import React, { useEffect, useState } from "react";
import "./Clients.css";
// import useFetchPartners from '@/app/hooks/more/useRecentPartners';
import { Partner } from "@/app/utils/interfaces";
import "../WhyChooseUs/WhyChooseUs";
import Link from "next/link";

const Clients = () => {
  const [limit, setLimit] = useState(12); 
  const [offset, setOffset] = useState(0);
  const [allPartner, setAllPartner] = useState<Partner[]>([]);  
  // const { loading, error, partners } = useFetchPartners(limit, offset);
  const [activeTab, setActiveTab] = useState<"companies" | "journals">(
    "companies" 
  );
  const [isMobileView, setIsMobileView] = useState<number>(12);
  const [contentCount, setContentCount] = useState<number>(12);
  const [currBtn, setCurrBtn] = useState<string>("");

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setIsMobileView(4);
      setContentCount(4);
    } else {
      setIsMobileView(12);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
  }, []);

  const journalImages: string[] = [
    "/images/JournalsNew/4.png",
    "/images/JournalsNew/5.png",
    "/images/JournalsNew/2.1.png",
    "/images/JournalsNew/10.png",
    "/images/JournalsNew/8.png",
    "/images/JournalsNew/6.png",
  ];

  const globalPartner: string[] = [
    "/images/JournalsNew/gp1.jpg",
    "/images/JournalsNew/gp2.jpg",
    "/images/JournalsNew/gp3.jpg",
    "/images/JournalsNew/gp4.jpg",
    "/images/JournalsNew/gp5.jpg",
    "/images/JournalsNew/gp6.png",
  ];

  // useEffect(() => {
  //     if (activeTab === 'companies') {
  //         setAllPartner(prev => [...prev, ...partners]);
  //     }
  // }, [partners, activeTab]);

  const renderLogos = (type: "companies" | "journals") => {
    return (
      <div className="logo-grid">
        {type === "companies"
          ? globalPartner.map((imagePath, index) => {
              if (index < isMobileView) {
                return (
                  <div key={index} className="logo-item">
                    <img src={imagePath} alt={`Global Partner ${index + 1}`} />
                  </div>
                );
              }
            })
          : type === "journals"
          ? journalImages.map((imagePath, index) => {
              if (index < isMobileView) {
                return (
                  <div key={index} className="logo-item">
                    <img src={imagePath} alt={`Journal ${index + 1}`} />
                  </div>
                );
              }
            })
          : null}
       
      </div>
      
    );
  };

  return (
    <>
      <div className="container companies-journals-container">
        <div className="tabs clients-tab">
          <button
            className={activeTab === "companies" ? "active" : ""}
            onClick={() => setActiveTab("companies")}
            style={{ marginTop: "10px" }}
          >
            Our Global Partners
          </button>
          <button
            className={activeTab === "journals" ? "active" : ""}
            onClick={() => setActiveTab("journals")}
            style={{ marginTop: "10px", border: "1px solid #342e5b" }}
          >
            High Impact Publications
          </button>
        </div>

        <div className="content">
          {activeTab === "companies"
            ? renderLogos("companies")
            : renderLogos("journals")}
        </div>
        <Link href='/PartnerRecent'>
        <button
          style={{
            backgroundColor: "#151130",
            color: "white",
            borderRadius: "1rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            marginTop:"2rem",
          }}
        >
          See All Partners →
        </button>
        </Link>
      </div>
    </>
  );
};

export default Clients;
