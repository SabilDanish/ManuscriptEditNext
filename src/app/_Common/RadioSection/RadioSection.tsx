"use client";
import { useRef, useState, useEffect } from "react";
import "../_TopBannerForm/TopBannerForm.css";
import "./RadioSection.css";
import useForm from "@/app/hooks/mainForm/useForm";
import { DNA } from "react-loader-spinner";
import useCountryCode from "@/app/hooks/mainForm/useCountryCode";

const RadioSection = () => {
  const [form, setForm] = useState<any>({
    name: "",
    service: "",
    phone_no: "",
    email: "",
    msg: "Hello World",
  });

  // const formRef = useRef<any>(null);

  const { postData } = useForm();
  const { countryCode } = useCountryCode();

  const formHandler = (event: any) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const formSubmitOne = (e: any) => {
    e.preventDefault();
    console.log({ form });
    postData(form, setForm);
    // formRef.current.reset();
  };

  // const formSubmitTwo = (e: any) => {
  //     postData(form);
  //     // formRef.current.reset();
  // };

  const radioHandler = (e: any) => {
    console.log({ e });
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <div
        className="container"
        style={{
          background: "#eaecf6",
          marginTop: "2rem",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <div className="row">
          <h2
            style={{
              marginTop: "40px",
              marginBottom: "30px !important",
              color: "#a31e22",
            }}
          >
            Download Your Free Samples – It’s Quick and Easy!
          </h2>
          <div className="col-lg-4" style={{ lineHeight: "40px" }}>
            <div className="inputSec">
              <input
                type="radio"
                name="service"
                value="life-sciences"
                onChange={radioHandler}
              />
              Editing (Life Sciences)
            </div>
            <div className="inputSec">
              <input
                type="radio"
                name="service"
                value="physical-sciences"
                onChange={radioHandler}
              />
              Editing (Physical Sciences)
            </div>
            <div className="inputSec">
              <input
                type="radio"
                name="service"
                value="environmental-sciences"
                onChange={radioHandler}
              />
              Editing (Environmental Sciences)
            </div>
            <div className="inputSec">
              <input
                type="radio"
                name="service"
                value="social-sciences"
                onChange={radioHandler}
              />
              Editing (Social Sciences)
            </div>
          </div>

          <div className="col-lg-4" style={{ lineHeight: "40px" }}>
            <div className="inputSec">
              <input
                type="radio"
                name="service"
                value="editing_finance_management"
                onChange={radioHandler}
              />
              Editing (Finance and Management)
            </div>
            <div className="inputSec">
              <input
                type="radio"
                name="service"
                value="journal_selection_report"
                onChange={radioHandler}
              />
              Journal Selection Report
            </div>
            <div className="inputSec">
              <input
                type="radio"
                name="service"
                value="data_analytics_statistical_analysis"
                onChange={radioHandler}
              />
              Data Analytics & Statistical Analysis
            </div>
            <div className="inputSec">
              <input
                type="radio"
                name="service"
                value="proofreading_copy_substantive_editing"
                onChange={radioHandler}
              />
              Proofreading, Copy editing, Substantive Editing
            </div>
          </div>

          <div className="col-lg-4">
            <div className="container">
              <div className="row">
                <div className="formContainer3">
                  <form id="contactForm2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Full Name"
                      required
                      className="formControl"
                      onChange={(e) => formHandler(e)}
                      value={form.name}
                    />

                    <div style={{ display: "flex", alignItems: "center" }}>
                      
                      <select
                        name="country_code"
                        required
                        className="formControl"
                        style={{ width: "100px", marginRight: "10px" }}
                        onChange={(e) => formHandler(e)}
                        value={form.country_code}
                      >
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+91">+91 (India)</option>
                        <option value="+81">+81 (Japan)</option>
                        <option value="+61">+61 (Australia)</option>
                        
                      </select>

                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        name="phone_no"
                        placeholder="Enter Phone Number"
                        required
                        className="formControl"
                        onChange={(e) => formHandler(e)}
                        value={form.phone_no}
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter E-mail"
                      required
                      className="formControl"
                      onChange={(e) => formHandler(e)}
                      value={form.email}
                    />

                    <button
                      disabled={
                        form.name && form.service && form.phone_no && form.email
                          ? false
                          : true
                      }
                      style={{
                        paddingBottom: "6px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        borderRadius: "6px",
                        background: "#007bff",
                        color: "white",
                        border: "#007bff",
                      }}
                      onClick={formSubmitOne}
                    >
                      Download Sample
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadioSection;
