import { useRef, useState, useEffect } from "react";
import "./TopBannerForm.css";
import Link from "next/link";
import VisitorPopup from "../VisitorPopup/VisitorPopup";

const TopBannerForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal open state
  const [isModalSubmitted, setIsModalSubmitted] = useState(false); // Track if form is submitted
  const [timeoutsCleared, setTimeoutsCleared] = useState(false); // Track if timeouts are cleared
  const modalRef = useRef<any>(null); // Bootstrap modal instance

  useEffect(() => {
    // If modal is already submitted or timeouts are cleared, skip setting up new timeouts
    if (isModalSubmitted || timeoutsCleared) return;

    const showModal = () => {
      if (isModalOpen || isModalSubmitted) return; // Don't open if modal is already open or submitted

      const modalElement = document.getElementById("contactModal");
      if (modalElement) {
        if (!modalRef.current) {
          modalRef.current = new window.bootstrap.Modal(modalElement);
        }
        modalRef.current.show();
        setIsModalOpen(true); // Track modal open state
      }
    };

    const timeouts = [
      setTimeout(showModal, 5000),
      setTimeout(showModal, 20000),
      setTimeout(showModal, 40000),
    ];

    // Cleanup timeouts if modal is already submitted or closed
    return () => {
      timeouts.forEach(clearTimeout);
      setTimeoutsCleared(true); // Mark timeouts as cleared after cleanup
    };
  }, [isModalOpen, isModalSubmitted, timeoutsCleared]); // Add timeoutsCleared to dependencies

  const handleModalSubmit = () => {
    setIsModalSubmitted(true); // Mark modal as submitted
    setIsModalOpen(false); // Close modal state
    if (modalRef.current) {
      modalRef.current.hide(); // Hide the modal
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Update modal open state when closed
  };

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
              editors provide high-quality English editing and academic and
              scientific editing services...
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
            <button
              className="btn mt-12 ml-2"
              style={{
                backgroundColor: "#151130",
                color: "white",
                marginTop: "1rem",
              }}
              onClick={() => {
                // Prevent opening modal if already submitted or open
                if (!isModalOpen && !isModalSubmitted) {
                  const modalElement = document.getElementById("contactModal");
                  if (modalElement) {
                    if (!modalRef.current) {
                      modalRef.current = new window.bootstrap.Modal(modalElement);
                    }
                    modalRef.current.show();
                    setIsModalOpen(true); // Track modal open state
                  }
                }
              }}
            >
              Get A Free Consultation →
            </button>
          </div>
          <div
            className={`carouselItem active col-lg-6`}
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

      {/* Pass handleModalSubmit to VisitorPopup */}
      <VisitorPopup
        onSubmit={handleModalSubmit}
        onClose={handleModalClose} // Pass close callback
      />
    </>
  );
};

export default TopBannerForm;
