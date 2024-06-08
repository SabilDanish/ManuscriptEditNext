import './EnquiryForm.css';

const EnquiryForm = () => {

  return (
    <>
<div className="formContainer">
          <h6>Get Quick Response Within 24 Hours</h6>
          <form id="contactForm">
            <input type="text" name="fullName" placeholder="Enter Your Full Name" required className="formControl" />
            <select name="service" required className="formControl">
              <option value="">Select Service</option>
              {/* Add more options as needed */}
            </select>
            <input type="tel" name="phoneNumber" placeholder="Enter Your Phone Number" required className="formControl" />
            <input type="email" name="email" placeholder="Enter Mail" required className="formControl" />
            <textarea name="message" placeholder="Your Message" required className="formControl"></textarea>
            <button type="submit" className="submitButton">Send</button>
          </form>
        </div>
    </>
  );
};

export default EnquiryForm;

