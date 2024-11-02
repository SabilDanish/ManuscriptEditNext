"use client";

import useForm from "@/app/hooks/mainForm/useForm";
import "./ContactForm.css";
import { useState } from "react";
import { DNA } from "react-loader-spinner";

const ContactForm = () => {
  const [form, setForm] = useState<any>({
    name: "",
    service: "",
    phone_no: "",
    email: "",
    msg: "",
    country_code: "99"
  });

  const { isLoading, postData } = useForm();

  const formHandler = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const formSubmitOne = (e: any) => {
    e.preventDefault();
    let validation = true
    let message = ''

    for(let key in form){
      if(!form[key]){
        validation = false
        message = "Please complete all field data"
      }else if(key === "phone_no" && form['phone_no'].length !== 10){
        validation = false
        message = "The phone number should be 10 digits"
      }
    }

    if(!validation){
      alert(message)
      return
    }

    postData(form,setForm);
    setForm({
      name: "",
      service: "",
      phone_no: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="row" style={{justifyContent:"center"}}>
          <div className="formContainer2">
            <h6>Get Quick Response Within 24 Hours</h6>
            <form id="contactForm2">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              />
              <select
                name="service"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              >
                <option value="">Select Service</option>
                <option value="Universities and Research Institutions">
                Universities and Research Institutions
                </option>
                <option value="Corporations and Industry">
                Corporations and Industry
                </option>
                <option value="Research Laboratories and Innovators">
                Research Laboratories and Innovators
                </option>
                <option value="Journals and Publishers ">
                Journals and Publishers
                </option>
                <option value="E-Courses and Online Education Providers">E-Courses and Online Education Providers</option>
                <option value="Webinars and Conferences">
                Webinars and Conferences
                </option>
                <option value="Funding Organizations">
                Funding Organizations        
                </option>
              </select>
              <input
                type="tel"
                name="phone_no"
                placeholder="Enter Your Phone Number"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Mail"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              />
              <textarea
                name="msg"
                placeholder="Your Message"
                required
                className="formControl"
                onChange={(e) => formHandler(e)}
              ></textarea>
              <button
                type="submit"
                className="submitButton"
                onClick={formSubmitOne}
              >
                {isLoading ? <DNA height="20" /> : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm ;