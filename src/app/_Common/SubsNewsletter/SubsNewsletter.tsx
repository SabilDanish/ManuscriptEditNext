import React from 'react';
import './SubsNewsletter.css'; // Link to custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faSkype, faPinterestP } from '@fortawesome/free-brands-svg-icons';

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
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            <FontAwesomeIcon icon={faSkype} className="social-icon" />
            <FontAwesomeIcon icon={faPinterestP} className="social-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
