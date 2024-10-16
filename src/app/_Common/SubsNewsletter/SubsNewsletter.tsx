import React from 'react';
import './SubsNewsletter.css'; // Link to custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faSkype,faLinkedin, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';

const NewsletterSubscribe = () => {
  return (
    <section className="newsletter-section container-fluid p-3">
      <div className="row align-items-center justify-content-between">
        {/* Left - Subscribe Section */}
        <div className="col-md-6">
          <h5 className="subscribe-text mb-3">Subscribe to Our Newsletter</h5>
          <div className="subscribe-input">
            <input type="email" placeholder="Your Mail" className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>

        {/* Right - Social Media Icons */}
        <div className="col-md-4 d-flex justify-content-end">
          <div className="social-icons">
            <a href=" https://www.facebook.com/@Manuscriptedit" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            </a>
            <a href=" https://x.com/manuscriptedit" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/reseaprojournals" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://www.threads.net/@manuscriptedit" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faThreads} className="social-icon" />
            </a>

            <a href="https://www.instagram.com/manuscriptedit/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
          
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsletterSubscribe;
