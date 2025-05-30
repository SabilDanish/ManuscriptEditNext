"use client";
import { useEffect, useRef } from "react";
import "./VisitorPopup.css";

const VisitorPopup = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone_no: form.phone_no.value,
      message: form.message.value,
      hear_about: form.hear_about.value,
    };

    // console.log("Form Data:", formData);
    // You can send this data to your backend here
    try {
      const response = await fetch(
        "https://www.secure.manuscriptedit.com/api/visitors_leads.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Thank you for connecting with us! Your confirmation email is on its way to your inbox.");
        form.reset();
        form.classList.remove("was-validated");
        const modalEl = document.getElementById("contactModal");
        
      } else {
        alert(
          `Submission failed: ${result.message || "Please try again later."}`
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      className="modal fade"
      id="contactModal"
      tabIndex={-1}
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content shadow rounded">
          <div
            className="modal-header text-white"
            style={{ background: "#070361" }}
          >
            <h6 className="modal-title" id="contactModalLabel">
              Get A Consultation
            </h6>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-1">
                <label htmlFor="name" className="form-label">
                  Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
                <div className="invalid-feedback">Please enter your name.</div>
              </div>

              <div className="mb-1">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
                <div className="invalid-feedback">
                  Please enter a valid email.
                </div>
              </div>

              <div className="mb-1">
                <label htmlFor="phone_no" className="form-label">
                  Phone <span className="text-danger">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone_no"
                  name="phone_no"
                  required
                />
                <div className="invalid-feedback">
                  Please enter your phone number.
                </div>
              </div>

              <div className="mb-1">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows={1}
                />
              </div>

              <div className="mb-1">
                <label htmlFor="hear_about" className="form-label">
                  Meanwhile, how did you hear about us? We&#39;re curious :)
                </label>
                <select
                  className="form-select"
                  id="hear_about"
                  name="hear_about"
                >
                  <option value="">Select an option</option>
                  <option value="Google">Google Search</option>
                  <option value="Word of Mouth">Word of Mouth</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Online Advertisement">
                    Online Advertisement
                  </option>
                  <option value="Email Newsletter">Email Newsletter</option>
                  <option value="Blog or Article">Blog or Article</option>
                  <option value="Event or Webinar">Event or Webinar</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn" data-bs-dismiss="modal">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisitorPopup;
