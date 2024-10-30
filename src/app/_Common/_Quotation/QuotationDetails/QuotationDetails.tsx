"use client"

import React, { useContext } from "react";
import "./QuotationDetails.css"; 
import { MainContext } from "@/app/context/AppContext";

// QuotationDetails component
const QuotationDetails: React.FC = () => {
  // Destructure values from MainContext with proper types
  const { freeService, removeFreeService, selectedAddons, prices } = useContext(MainContext);

  return (
    <div className="quotation-details-container">
      <div className="quotation-details-box">
        <h4 className="title">Quotation Details</h4>
        <div className="details">
          <p>
            <strong>Service Name</strong>
          </p>
          {selectedAddons && selectedAddons.length > 0 ? (
            selectedAddons.map((addOns, index) => <p key={index}>- {addOns}</p>)
          ) : (
            <p>No services selected</p>
          )}
          <p>
            <strong>Delivery Before</strong>
          </p>
          <p>Tue, 01 Oct 10:30 (GMT)</p>
          <p>
            <strong>Fees</strong>
          </p>
          <p>
            Total Price: <span className="price">${prices}</span>
          </p>
        </div>
        <hr />
        <div className="grand-total">
          <p>
            <strong>Grand Total:</strong>
          </p>
          <p>
            <strong className="price">${prices}</strong>
          </p>
        </div>
        <hr />
        <div className="additional-details">
          <button className="details-toggle">
            Details <span className="arrow">▲</span>
          </button>
          <div className="base-price">
            <p>
              Base Price: <span>$25</span>
            </p>
          </div>
          <div className="add-ons">
            <p>
              <strong>ADD-ONS:</strong>
            </p>
            <ul>
              {freeService && freeService.length > 0 ? (
                freeService.map((service, index) => (
                  <li key={index}>
                    {service}{" "}
                    <span
                      onClick={() => {
                        removeFreeService(service);
                      }}
                    >
                      ✖ FREE
                    </span>
                  </li>
                ))
              ) : (
                <p>No free services selected</p>
              )}
            </ul>
          </div>
        </div>
        <div className="promo-code">
          <input type="text" placeholder="Enter promo code" />
          <button className="apply-btn">APPLY</button>
        </div>
      </div>
    </div>
  );
};

export default QuotationDetails;