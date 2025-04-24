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
  //Below useEffect is for dummy data for api integration

  // useEffect(() => {
  //   localStorage.setItem(
  //     "priceDetails",
  //     JSON.stringify({
  //       content_file: "https://example.com/content.pdf",
  //       cur_type: "USD",
  //       delivery_date: "2023-12-15",
  //       figure_file: "https://example.com/figure.png",
  //       inst_for_editor: "Please review carefully and suggest improvements",
  //       journal_guideline: "APA 7th Edition",
  //       journal_name: "International Journal of Science",
  //       journal_url: "https://example.com/journal",
  //       language: "English",
  //       maj_serv_area: "Medical Sciences",
  //       order_id: "ORDER13889",
  //       service_cat: "Manuscript Editing",
  //       service_details: "Full manuscript editing with formatting",
  //       service_type: "Premium Editing",
  //       specific_sub: "Cardiology",
  //       status: "pending / Pay Now",
  //       submit_date: "2023-12-01",
  //       table_file: "https://example.com/table.xlsx",
  //       total_price: "32899",
  //       turn_ar_time: "14",
  //       user_name: "John Doe",
  //       word_count: "4500",
  //     })
  //   );
  // }, []);


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

  const handleSubmit = async () => {
  console.log(Math.random())
    try {
      // Construct the URL directly without state
      const apiUrl = `https://www.secure.manuscriptedit.com/api/send_order_mail_for_payment.php?order_id=${priceDetails?.order_id}&price=${priceDetails?.total_price}`;

      const response = await fetch(apiUrl);

      // Check if response is OK (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Failed to submit:", error);
    }

    // const apiUrl = `https://www.secure.manuscriptedit.com/api/send_order_mail_for_payment.php?order_id=${priceDetails?.order_id}&price=${priceDetails?.total_price}`;
    // window.location.href = apiUrl;
    window.location.href = "https://manuscriptedit.com/AuthorDashboard/";
  };

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
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleSubmit}
                >
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
