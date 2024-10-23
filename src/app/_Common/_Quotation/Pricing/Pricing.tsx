

import React, { useState } from "react";
import "./Pricing.css"; 
import PricingWrapper from "./PricingWrapper";

const Pricing = () => {
  const [activePortion, setActivePortion] = useState("portion1");

  // Function to toggle between portions
  const togglePortion = () => {
    setActivePortion((prevPortion) =>
      prevPortion === "portion1" ? "portion2" : "portion1"
    );
  };

  return (
    <PricingWrapper>
      <div className="container">
        <div className="row">
          <h2 style={{ marginBottom: "25px" }}>Pricing</h2>
        </div>
      </div>

      <div className="email-input">
        <input type="email" placeholder="abc@gmail.com" />
        <button>CONTINUE</button>
      </div>

      {/* Conditionally render portion1 or portion2 */}
      {activePortion === "portion1" ? (
        <div className="portion" id="portion1">
          <div className="count">
            <p>Drag and drop your files here or</p>
            <center>
              <input type="file" name="" id="" />
            </center>
          </div>
          <br />
          <p style={{ textAlign: "center" }}>OR</p>
          <center>
            <button className="btnApprox" onClick={togglePortion}>
              Enter an Approximate Count
            </button>
          </center>
          <button className="btnApprox1">Read more</button>
        </div>
      ) : (
        <div className="portion" id="portion2">
          <div className="count">
            <p>Please enter an approximate word count</p>
            <center>
              <input
                type="text"
                placeholder="Words"
                style={{ textAlign: "center" }}
              />
            </center>
          </div>
          <br />
          <p style={{ textAlign: "center" }}>OR</p>
          <center>
            <button className="btnApprox" onClick={togglePortion}>
              Upload files for Editing
            </button>
          </center>

          
          <button className="btnApprox1">Read more</button>
        </div>
      )}
    </PricingWrapper>
  );
};

export default Pricing;