"use client";

import useForm from "@/app/hooks/mainForm/useForm";
import "./PeerForm.css";
import { useState } from "react";
import { DNA } from "react-loader-spinner";

const PeerForm = () => {
  const [form, setForm] = useState<any>({
    name: "",
    service: "",
    phone_no: "",
    email: "",
    msg: "",
  });

  const { isLoading, postData } = useForm();

  const formHandler = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const formSubmitOne = (e: any) => {
    e.preventDefault();
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
        <div className="row">
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
                <option value="Writing Manuscript/Thesis">
                  Writing Manuscript/Thesis
                </option>
                <option value="Data Analysis for Manuscript/Thesis">
                  Data Analysis for Manuscript/Thesis
                </option>
                <option value="Editing/Rewriting/Formatting/Proofreading">
                  Editing/Rewriting/Formatting/Proofreading
                </option>
                <option value="Publication of Manuscript ">
                  Publication of Manuscript
                </option>
                <option value="Paper from Thesis">Paper from Thesis</option>
                <option value="Expert Book Chapter Publishing Support">
                  Expert Book Chapter Publishing Support
                </option>
                <option value="PhD Support & Assistance">
                  PhD Support & Assistance        
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

export default PeerForm