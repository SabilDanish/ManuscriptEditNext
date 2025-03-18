"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // For icons
import {
  faFile,
  faClock,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// Step 1: Define an interface for priceDetails
interface PriceDetails {
  content_file: any | null;
  cur_type: string | null;
  delivery_date: string;
  figure_file: string | null;
  inst_for_editor: string;
  journal_guideline: string | null;
  journal_name: string | null;
  journal_url: string | null;
  language: string;
  maj_serv_area: string;
  order_id: string;
  service_cat: string;
  service_details: string | null;
  service_type: string;
  specific_sub: string;
  status: string;
  submit_date: string;
  table_file: string | null;
  total_price: string;
  turn_ar_time: string;
  user_name: string;
  word_count: string;
}

function page() {
  // Step 2: Use the PriceDetails interface in useState
  const [priceDetails, setPriceDetails] = useState<PriceDetails | null>(null);

  useEffect(() => {
    // Retrieve the price details from localStorage
    const storedPriceDetails = localStorage.getItem("priceDetails");

    if (storedPriceDetails) {
      // Parse the JSON data from localStorage
      const parsedPriceDetails: PriceDetails = JSON.parse(storedPriceDetails);
      setPriceDetails(parsedPriceDetails); // Set the parsed data to the state
    }
  }, []);

  return (
    // <div>
    //   <h1>Checkout</h1>
    //   {priceDetails ? (
    //     <div>
    //       <p>Product: {priceDetails.product}</p>
    //       <p>Amount: ${priceDetails.amount}</p>
    //     </div>
    //   ) : (
    //     <p>Loading price details...</p>
    //   )}
    // </div>
    <div>
      {priceDetails ? (
        <div className="container my-5">
          <div className="text-center mb-5">
            <h1 className="display-4">Order Details</h1>
            <p className="lead">Order ID: {priceDetails.order_id}</p>
          </div>

          <div className="card shadow">
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4 className="card-title">Order Summary</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <strong>Service Category:</strong>{" "}
                      {priceDetails.service_cat}
                    </li>
                    <li className="list-group-item">
                      <strong>Service Type:</strong> {priceDetails.service_type}
                    </li>
                    <li className="list-group-item">
                      <strong>Major Service Area:</strong>{" "}
                      {priceDetails.maj_serv_area}
                    </li>
                    <li className="list-group-item">
                      <strong>Specific Subject:</strong>{" "}
                      {priceDetails.specific_sub}
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4 className="card-title">Delivery Details</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <FontAwesomeIcon icon={faClock} className="me-2" />
                      <strong> Turnaround Time:</strong>{" "}
                      {priceDetails.turn_ar_time} days
                    </li>
                    <li className="list-group-item">
                      <strong>Submission Date:</strong>{" "}
                      {priceDetails.submit_date}
                    </li>
                    <li className="list-group-item">
                      <strong>Delivery Date:</strong>{" "}
                      {priceDetails.delivery_date}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="card-title">Uploaded Files</h4>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <FontAwesomeIcon icon={faFile} className="me-2" />
                        <strong> Content File:</strong>{" "}
                        <Link
                          href={
                            priceDetails.content_file
                              ? priceDetails.content_file
                              : ""
                          }
                        >
                          Download
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <FontAwesomeIcon icon={faFile} className="me-2" />
                        <strong> Figure File:</strong>{" "}
                        {priceDetails.figure_file ? (
                          <a
                            href={priceDetails.figure_file}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download
                          </a>
                        ) : (
                          "Not Uploaded"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <FontAwesomeIcon icon={faFile} className="me-2" />
                        <strong> Table File:</strong>{" "}
                        {priceDetails.table_file ? (
                          <a
                            href={priceDetails.table_file}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download
                          </a>
                        ) : (
                          "Not Uploaded"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="card-title">Payment Details</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card bg-light">
                      <div className="card-body">
                        <h5 className="card-title">Total Price</h5>
                        <p className="card-text display-6 text-success">
                          ${priceDetails.total_price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card bg-light">
                      <div className="card-body">
                        <h5 className="card-title">Status</h5>
                        <p className="card-text">
                          {priceDetails.status === "pending / Pay Now" ? (
                            <span className="text-danger">
                              <FontAwesomeIcon
                                icon={faTimesCircle}
                                className="me-2"
                              />
                              &nbsp; Pending
                            </span>
                          ) : (
                            <span className="text-success">
                              <FontAwesomeIcon
                                icon={faCheckCircle}
                                className="me-2"
                              />
                              &nbsp; Paid
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button className="btn btn-primary btn-lg">
                  {priceDetails.status === "pending / Pay Now"
                    ? "Pay Now"
                    : "View Invoice"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading price details...</p>
      )}
    </div>
  );
}

export default page;
