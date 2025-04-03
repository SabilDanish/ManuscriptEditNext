"use client";

import { useEffect, useState } from "react";
import "../QuotationNew/quotationNew.css";
import { goalOptions } from "@/app/utils/Quote";
import { addOnOptions } from "@/app/utils/Quote";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


export default function ProjectQuote() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [wordCount, setWordCount] = useState(false);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNum: "",
    HearAbt: "",
    majorSubject: "",
    specificSubject: "",
    deliveryDate: "",
    preferredLanguage: "",
    editorInstruction: "",
    paymentMode: "",
  });

  console.log("selectedGoal:", selectedGoal);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  useEffect(() => {
    setSelectedOption(""); // Reset option when goal changes
  }, [selectedGoal]);

  const goals = [
    { id: 355, text: "Editing & Language Services",Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "✍️" },
    { id: 356, text: "Medical & Clinical Writing Services",Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "🩺" },
    { id: 357, text: "Regulatory Writing Support",Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "📜" },
    { id: 358, text: "Scientific Communication Support", Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "🔬" },
    { id: 359, text: "Evidence Synthesis & Review Writing", Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "📊" },
    { id: 360, text: "Scientific Publication Assistance",Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "📚" },
    { id: 361, text: "Data & Statistical Support",Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "📈" },
    { id: 362, text: "Journal Publication Support",Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "📰" },
    { id: 363, text: "Manuscriptedit Packages",Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium' , emoji: "📄" },
    { id: 364, text: "Academic & Non-Scientific Writing",Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "📝" },
    { id: 365, text: "Design and Image Polishing and Creation",Desc:'Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ' , emoji: "🎨" },
  ];

  return (
    <div className="container sumcon">
      <div
        className="row mt-4 sumrow"
        style={{ justifyContent: "space-between" }}
      >
        <div className="col-md-8 p-4 border bg-light shade">
          <div>
            <h5>
              <strong>Submit your project details for an exact quote.</strong>
            </h5>

            <div className="uploadContainer">
              <h5>Upload your document to be edited</h5>
              <p>
                Upload manuscripts in .doc or .docx format to auto calculate
                words & get an instant quote.
              </p>

              <input type="file" className="Sizy" />

              <span className="Alignments">
                <input
                  type="checkbox"
                  checked={wordCount}
                  onClick={() => setWordCount(!wordCount)}
                />
                <p style={{ marginBottom: "0px" }}>
                  I want to enter word count
                </p>
              </span>

              {wordCount && (
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g 2500"
                />
              )}
            </div>

            <h5 style={{ marginTop: "30px" }}>Your Goals</h5>
            <div className="row">
              {goals.map((goal, index) => (
                <div
                  key={index}
                  className="col-lg-3"
                  style={{ marginBottom: "15px" }}
                >
                  <label
                    className="card cardGoal text-center p-3"
                    data-tooltip-id={`tooltip-${index}`}
                    data-tooltip-content={goal.Desc} 
                  >
                    <input
                      type="radio"
                      name="goal"
                      value={goal.id}
                      onChange={() => setSelectedGoal(goal.text)}
                      checked={selectedGoal === goal.text}
                    />
                    <div className="icon-container">
                      <span style={{fontSize:'30px'}}>{goal.emoji}</span>
                    </div>
                    <p className="title">{goal.text}</p>
                  </label>
                  <Tooltip id={`tooltip-${index}`} />
                </div>
              ))}
            </div>

            {selectedGoal && goalOptions[selectedGoal] && (
              <div className="mt-3">
                <h5>Choose a Service for {selectedGoal}</h5>

                {goalOptions[selectedGoal].map((option: any, idx: any) => (
                  <div key={idx} className="form-check gapping">
                    <input
                      className="form-check-input"
                      type="radio"
                      id={`option${idx}`}
                      name="goalOption"
                      value={option.text}
                      checked={selectedOption === option.text}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`option${idx}`}
                    >
                      <p className="mb-0">
                        <strong>{option.text}</strong>
                      </p>
                      <p className="mb-0">{option.description}</p>
                    </label>
                    {selectedOption === option.text &&
                      addOnOptions[selectedOption] && (
                        <div className="mt-3">
                          <h5>Add-Ons for {selectedOption}</h5>
                          {addOnOptions[selectedOption].map(
                            (addOn: any, index: any) => (
                              <div key={index} className="form-check gapping">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={`addon${index}`}
                                  checked={selectedAddOns.includes(addOn.text)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedAddOns([
                                        ...selectedAddOns,
                                        addOn.text,
                                      ]);
                                    } else {
                                      setSelectedAddOns(
                                        selectedAddOns.filter(
                                          (item) => item !== addOn.text
                                        )
                                      );
                                    }
                                  }}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor={`addon${index}`}
                                >
                                  <p className="mb-0">
                                    <strong>{addOn.text}</strong>
                                  </p>
                                  <p className="mb-0">{addOn.description}</p>
                                </label>
                              </div>
                            )
                          )}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}

            <div className="container mt-4">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      name="Name"
                      className="form-control"
                      placeholder="Name"
                      value={formData.Name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input
                      type="text"
                      name="Email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.Email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="Number"
                      name="PhoneNum"
                      className="form-control"
                      value={formData.PhoneNum}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      How did you hear about us
                    </label>
                    <select
                      name="HearAbt"
                      className="form-select"
                      value={formData.HearAbt}
                      onChange={handleChange}
                      style={{ width: "100%", height: "60px" }}
                    >
                      <option value="">-- Select --</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="OfficialSite">Official Site</option>
                      <option value="Whatsapp">Whatsapp</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Major Subject Type *</label>
                    <select
                      name="majorSubject"
                      className="form-select"
                      value={formData.majorSubject}
                      onChange={handleChange}
                      style={{ width: "100%", height: "60px" }}
                    >
                      <option value="">-- Select --</option>
                      <option value="science">Science</option>
                      <option value="math">Math</option>
                      <option value="history">History</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">
                      Specific Subject Area *
                    </label>
                    <textarea
                      name="specificSubject"
                      className="form-control"
                      placeholder="Enter ..."
                      value={formData.specificSubject}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {/* Delivery Date & Preferred Language */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Delivery Date *</label>
                    <input
                      type="date"
                      name="deliveryDate"
                      className="form-control"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Preferred Language *</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="preferredLanguage"
                        value="American English"
                        checked={
                          formData.preferredLanguage === "American English"
                        }
                        onChange={handleChange}
                      />
                      <label className="form-check-label">
                        American English
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="preferredLanguage"
                        value="British English"
                        checked={
                          formData.preferredLanguage === "British English"
                        }
                        onChange={handleChange}
                      />
                      <label className="form-check-label">
                        British English
                      </label>
                    </div>
                  </div>
                </div>

                {/* Editor Instructions */}
                <div className="mb-3">
                  <label className="form-label">Instruction for Editor</label>
                  <textarea
                    name="editorInstruction"
                    className="form-control"
                    placeholder="Enter ..."
                    value={formData.editorInstruction}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Payment Mode */}
                <div className="mb-3">
                  <label className="form-label">Payment Mode</label>
                  <select
                    name="paymentMode"
                    className="form-select"
                    value={formData.paymentMode}
                    onChange={handleChange}
                    style={{ width: "100%", height: "60px" }}
                  >
                    <option value="">--Select payment mode--</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit & Register
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4" style={{ position: "relative" }}>
          <div className="summary-container">
            <div className="card border rounded shadow-sm p-3">
              <div className="card-body">
                <h5 className="card-title border-bottom pb-2">Summary</h5>
                <p className="mb-2">
                  <strong>Selected Services:</strong> {selectedGoal}
                </p>
                <div className="mb-3">
                  <strong>Selected Option:</strong>
                  <p className="d-flex justify-content-between align-items-center border p-2 rounded mt-2">
                    <span>{selectedOption || "None"}</span>
                    <span className="fw-bold">
                      ₹
                      {selectedOption
                        ? goalOptions[selectedGoal]?.find(
                            (opt: any) => opt.text === selectedOption
                          )?.price || "0"
                        : "0"}
                    </span>
                  </p>
                </div>
                <div className="mb-3">
                  <strong>Selected Add-Ons:</strong>
                  {selectedAddOns.length > 0 && addOnOptions[selectedOption] ? (
                    <table className="table table-sm table-borderless mt-2">
                      <tbody>
                        {addOnOptions[selectedOption]
                          .filter((addOn: any) =>
                            selectedAddOns.includes(addOn.text)
                          )
                          .map((addOn: any, index: any) => (
                            <tr key={index}>
                              <td>{addOn.text}</td>
                              <td className="text-end fw-bold">
                                {addOn.price > 0 ? (
                                  `₹${addOn.price}`
                                ) : (
                                  <h6 className="TableQuote">
                                    Price after discussion
                                  </h6>
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="border p-2 rounded mt-2 text-muted">0</p>
                  )}
                </div>
                <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Total:</h5>
                  <p className="fw-bold fs-5 text-primary mb-0">
                    ₹
                    {(() => {
                      const optionPrice =
                        goalOptions[selectedGoal]?.find(
                          (opt: any) => opt.text === selectedOption
                        )?.price || 0;
                      const addOnsTotal = addOnOptions[selectedOption]
                        ? addOnOptions[selectedOption]
                            .filter((addOn: any) =>
                              selectedAddOns.includes(addOn.text)
                            )
                            .reduce(
                              (sum: any, addOn: any) =>
                                sum + (addOn.price || 0),
                              0
                            )
                        : 0;
                      return optionPrice + addOnsTotal;
                    })()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
