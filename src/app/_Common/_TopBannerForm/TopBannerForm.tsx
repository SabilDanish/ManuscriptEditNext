import { useRef, useState, useEffect } from "react";
import "./TopBannerForm.css";

import useForm from "@/app/hooks/mainForm/useForm";
import { DNA } from "react-loader-spinner";
import Link from "next/link";
import VisitorPopup from "../VisitorPopup/VisitorPopup";



const TopBannerForm = () => {
  
  useEffect(() => {
    const showModal = () => {
      const modalElement = document.getElementById("contactModal");
      if (modalElement) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    };

    const timeouts = [
      setTimeout(showModal, 5000),
      setTimeout(showModal, 20000),
      setTimeout(showModal, 40000),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <>
      <div
        className="container mob_conti"
        style={{
          marginBottom: "0px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div className="row" style={{ justifyContent: "end" }}>
          <div className="col-lg-6">
            <h4 style={{ fontWeight: "Bold", fontSize: "2rem" }}>
              Get
              <span
                style={{
                  fontSize: "2.5rem",
                  color: "#6C070A",
                  fontWeight: "800",
                }}
              >
                {" "}
                Manuscript
              </span>{" "}
              <br />
              Published with Confidence |<br /> Expert Manuscript Editing
              Services
            </h4>
            <h5 style={{ marginTop: "1rem" }}>
              From manuscript preparation to journal publication, our expert
              editors provide high- quality English editing and academic and
              scientific editing services. We ensure your research meets
              academic and scientific top journal standards, increasing
              acceptance rates in high-impact journals of Q1 and Q2.
            </h5>
            <h5 style={{ marginTop: ".5rem" }}>
              ✔ 20+ years of expertise in publication and editing services.
            </h5>
            <h5 style={{ marginTop: ".5rem" }}>
              ✔ Affordable, confidential, and timely support.
            </h5>
            <h5 style={{ marginTop: ".5rem" }}>
              ✔ Customized solutions for researchers, PhDs, and postdocs.
            </h5>
            <Link
              className="btn mt-12"
              href={"https://manuscriptedit.com/QuotationNew/"}
              role="button"
              style={{
                backgroundColor: "#151130",
                color: "white",
                marginTop: "1rem",
              }}
            >
              Submit Manuscript →
            </Link>
            <Link
              className="btn mt-12 ml-2"
              href={"#"}
              type="button"
              style={{
                backgroundColor: "#151130",
                color: "white",
                marginTop: "1rem",
              }}
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Get A Consultation →
            </Link>
          </div>
          <div
            className={`$"carouselItem" $"active" col-lg-6`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/images/flags/Ban_updates_no_shadow.png"
              className="carouselImage"
              alt="Banner 1"
            />
          </div>
        </div>
      </div>

      <VisitorPopup />
    </>
  );
};

export default TopBannerForm;
