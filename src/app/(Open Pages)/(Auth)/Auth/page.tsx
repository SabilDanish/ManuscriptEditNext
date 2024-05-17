"use client";
import React, { useState } from "react";
import "./Auth.css";
import useAuth from "@/app/hooks/auth/useAuth";
import { DNA } from "react-loader-spinner";

const Auth = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: '',
    pswd: '',
    country: '',
    fname: '',
    lname: '',
    phone_no: '',
    user_find: ''
});

const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};
  const { isLoading, error, data, postData } = useAuth(setShowLogin,showLogin);

  const toggleSignup = (): void => {
    setShowLogin(false);
  };

  const toggleLogin = (): void => {
    setShowLogin(true);
  };

  const handleSubmit = () => {
    postData(formData);
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
            <input type="text" placeholder="Enter email or username" />
            <input type="password" placeholder="Enter password" />
            <button type="button" className="btn login">
              login
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
          <input type="text" placeholder="Enter your First Name" name="fname" value={formData.fname} onChange={(e) => handleChange(e)} />
            <input type="text" placeholder="Enter your Last Name" name="lname" value={formData.lname} onChange={(e) => handleChange(e)} />
            <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={(e) => handleChange(e)} />
            <input type="text" placeholder="Enter your Country" name="country" value={formData.country} onChange={(e) => handleChange(e)} />
            <input type="password" placeholder="Create password" name="pswd" value={formData.pswd} onChange={(e) => handleChange(e)} />
            <input type="number" placeholder="Enter Your Number" name="phone_no" value={formData.phone_no} onChange={(e) => handleChange(e)} />
            <select id="languages" name="user_find" value={formData.user_find} onChange={(e) => handleChange(e)}>
                <option value="">Select a source</option>
                <option value="Naukri">Naukri</option>
                <option value="Linkedin">Linkedin</option>
                <option value="Others">Others</option>
            </select>
            {/* {formData.user_find === 'Others' && (
                <input type="text" placeholder="Enter Your Source" name="other_source" value={formData.other_source} onChange={(e) => handleChange(e)} />
            )} */}
            <button type="button" className="btn signup" onClick={handleSubmit}>
              {isLoading ? (
                <DNA
                  visible={true}
                  height="80"
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
