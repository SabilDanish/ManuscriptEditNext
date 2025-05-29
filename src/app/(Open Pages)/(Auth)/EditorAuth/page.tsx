"use client";
import React, { useState } from "react";
import "./EditorAuth.css";
import { DNA } from "react-loader-spinner";
import { useRouter } from 'next/navigation';
import useEditorAuth from "@/app/hooks/auth/useEditorAuth";

const Auth = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    pswd: "",
    country: "",
    city: "",
    pin: "",
    fname: "",
    lname: "",
    phone_no: "",
    address1: "",
    qualification: "",
    salutation: ""
  });

  const [loginData, setLoginData] = useState({
    email: "",
    pswd: "",
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const { isLoading, error, data, postData, login } = useEditorAuth(
    setShowLogin,
    showLogin
  );

  const toggleSignup = (): void => {
    setShowLogin(false);
  };

  const toggleLogin = (): void => {
    setShowLogin(true);
  };

  const handleSubmit = () => {
    postData(formData);
    // setFormData({
    //     email: "",
    //     pswd: "",
    //     country: "",
    //     city: "",
    //     pin: "",
    //     fname: "",
    //     lname: "",
    //     phone_no: "",
    //     user_find: "",
    //     address1: "",
    //     qualification: "",
    //     salutation: ""
    // });
  };

  const handleLogin = () => {
    login(loginData,router);
    // setLoginData({
    //   email: "",
    //   pswd: "",
    // });
  };

  return (
    <div className="form-modal">
      <div className="form-toggle">
        <button
          id="login-toggle"
          onClick={toggleLogin}
          style={{
            backgroundColor: showLogin ? "#57B846" : "#fff",
            color: showLogin ? "#fff" : "#222",
          }}
        >
          log in
        </button>
        <button
          id="signup-toggle"
          onClick={toggleSignup}
          style={{
            backgroundColor: showLogin ? "#fff" : "#57B846",
            color: showLogin ? "#222" : "#fff",
          }}
        >
          sign up
        </button>
      </div>

      {showLogin ? (
        <div id="login-form">
          <form>
            <input
              type="text"
              placeholder="Enter email or username"
              name="email"
              value={loginData.email}
              onChange={(e) => handleLoginChange(e)}
            />
            <input
              type="password"
              placeholder="Enter password"
              name="pswd"
              value={loginData.pswd}
              onChange={(e) => handleLoginChange(e)}
            />
            <button type="button" className="btn login" onClick={handleLogin}>
              {isLoading ? (
                <DNA
                  visible={true}
                  height="40"
                  width="80"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              ) : (
                "Login"
              )}
            </button>
            <p>
              <a href="javascript:void(0)">Forgotten account</a>
            </p>
            <hr />
          </form>
        </div>
      ) : (
        <div id="signup-form">
          <form>
            <input
              type="text"
              placeholder="Enter your First Name"
              name="fname"
              value={formData.fname}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Enter your Last Name"
              name="lname"
              value={formData.lname}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Enter your Country"
              name="country"
              value={formData.country}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Enter your City"
              name="city"
              value={formData.city}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Enter your Address"
              name="address1"
              value={formData.address1}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Create password"
              name="pswd"
              value={formData.pswd}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="number"
              placeholder="Enter Your Number"
              name="phone_no"
              value={formData.phone_no}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Enter your Pin"
              name="pin"
              value={formData.pin}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Enter your Qualification"
              name="qualification"
              value={formData.qualification}
              onChange={(e) => handleChange(e)}
            />
            <select
              id="salutations"
              name="salutation"
              value={formData.salutation}
              onChange={(e) => handleChange(e)}
            >
              <option value="">Salutation</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
            </select>

            <button type="button" className="btn signup" onClick={handleSubmit}>
              {isLoading ? (
                <DNA
                  visible={true}
                  height="40"
                  width="80"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              ) : (
                "create account"
              )}
            </button>
            <p>
              Clicking <strong>create account</strong> means that you are agree
              to our <a href="javascript:void(0)">terms of services</a>.
            </p>
            <hr />
          </form>
        </div>
      )}
    </div>
  );
};

export default Auth;
