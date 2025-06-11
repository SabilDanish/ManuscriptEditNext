import React, { useState } from "react";
import "./SubsNewsletter.css"; // Link to custom CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faSkype,
  faLinkedin,
  faInstagram,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const SubmitChange = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    console.log(JSON.stringify({ email }));
    let response: any;
    try {
      response = await fetch(
        "https://www.secure.manuscriptedit.com/api/subscribe_newsletter.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      if (response.ok) {
        setMessage("Successfully subscribed to the newsletter!");
        setEmail("");
      } else {
        setMessage("Subscription failed. Try again.");
      }
    }
  };

  return (
    <section className="newsletter-section container-fluid p-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          {/* Left - Subscribe Section */}
          <div className="col-md-6">
            <h5 className="subscribe-text mb-3">Subscribe to Our Newsletter</h5>
            <div className="subscribe-input">
              <input
                type="email"
                placeholder="Your Mail"
                className="email-input"
                value={email}
                onChange={handleChange}
              />
              <button className="subscribe-button" onClick={SubmitChange}>
                Subscribe
              </button>
            </div>
            {message && <div className="mt-2 text-info">{message}</div>}
          </div>

          {/* Right - Social Media Icons */}
          <div className="col-md-4 d-flex justify-content-end">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/@Manuscriptedit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </a>
              <a
                href="https://x.com/manuscriptedit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a
                href="https://in.linkedin.com/company/manuscriptedit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a
                href="https://www.threads.net/@manuscriptedit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faThreads} className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/manuscriptedit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
