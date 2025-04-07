"use client";

import { useEffect, useState } from "react";
import "../QuotationNew/quotationNew.css";
import { goalOptions } from "@/app/utils/Quote";
import { addOnOptions } from "@/app/utils/Quote";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function ProjectQuote() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [hideGoalSection, setHideGoalSection] = useState(true);
  const [selectedOption, setSelectedOption] = useState("");
  const [wordCount, setWordCount] = useState(false);
  const [manualWordCount, setManualWordCount] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [file, setFile] = useState<File | null>(null);

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

  const goals = [
    {
      id: 355,
      text: "Editing & Language Services",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "✍️",
    },
    {
      id: 356,
      text: "Medical & Clinical Writing Services",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "🩺",
    },
    {
      id: 357,
      text: "Regulatory Writing Support",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "📜",
    },
    {
      id: 358,
      text: "Scientific Communication Support",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "🔬",
    },
    {
      id: 359,
      text: "Evidence Synthesis & Review Writing",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "📊",
    },
    {
      id: 360,
      text: "Scientific Publication Assistance",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "📚",
    },
    {
      id: 361,
      text: "Data & Statistical Support",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "📈",
    },
    {
      id: 362,
      text: "Journal Publication Support",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "📰",
    },
    {
      id: 363,
      text: "Manuscriptedit Packages",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium",
      emoji: "📄",
    },
    {
      id: 364,
      text: "Academic & Non-Scientific Writing",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "📝",
    },
    {
      id: 365,
      text: "Design and Image Polishing and Creation",
      Desc: "Lorem Ipsium lorem ipsium Lorem Ipsium lorem ipsium ",
      emoji: "🎨",
    },
  ];

  const mainServices = {
    "Editing & Language Services": "355",
    "Medical & Clinical Writing Services": "356",
    "Regulatory Writing Support": "357",
    "Scientific Communication Support": "358",
    "Evidence Synthesis & Review Writing": "359",
    "Scientific Publication Assistance": "360",
    "Data & Statistical Support": "361",
    "Journal Publication Support": "362",
    "Manuscriptedit Packages": "363",
    "Academic & Non-Scientific Writing": "364",
    "Design and Image Polishing and Creation": "365",
  };

  const subServices = {
    "Substantive (Advanced) Editing": "366",
    "Copyediting (Standard Editing)": "367",
    Proofreading: "368",
    "Journal Formatting & Style Editing": "369",
    "Language Enhancement & Clarity Check": "370",
    "Re-editing Support": "371",
    "Reference & Citation Editing": "372",
    "12 Hrs. Express Editing": "373",
    "Extensive Substantive Editing": "374",
    "Clinical Research Manuscript Writing": "375",
    "Research Proposal & Protocol Development": "376",
    "Patient & HCP Education Material": "377",
    "Regulatory Document Preparation": "378",
    "Compliance & Standards Alignment": "379",
    "API Documentation": "380",
    "Scientific Marketing & Promotional Content": "381",
    "Conference Abstract & Presentation Writing": "382",
    "Informational Publications": "383",
    "Systematic Review Writing": "384",
    "Narrative & Scoping Review Writing": "385",
    "Case Report / Case Series Writing": "386",
    "Creative & Narrative Writing": "387",
    "Comprehensive Manuscript Writing": "388",
    "Section-wise Scientific Writing": "389",
    "Title, Abstract & Keyword Optimization": "390",
    "Review Article & Short Communication Writing": "391",
    "Supplementary Materials Preparation": "392",
    "Commentaries & Opinion Article Writing": "393",
    "Meta-analysis Writing & Execution": "394",
    "Research Data Analysis & Interpretation": "395",
    "End-to-End Journal Submission Support": "396",
    "Journal Selection Assistance": "397",
    "Cover Letter Preparation": "398",
    "Response to Reviewer Comments": "399",
    "Pre-Submission Peer Review": "400",
    "Post-Submission Follow-up Support": "401",
    "Fast Track Publication Consultation": "402",
    "Basic Package": "403",
    "Standard Package": "404",
    "Advanced Package": "405",
    "Premium Publication Package": "406",
    "Reviewer Response Package": "407",
    "Fast-Track Express Package": "408",
    "Rejection Handling Package": "409",
    "Custom Publication Package": "410",
    "Advance Package": "411",
    "Plagiarism Check & Report": "412",
    "Academic Essay & Report Writing": "413",
    "Academic Writing": "414",
    "Thesis & Dissertation Writing Support": "415",
    "Scientific Illustration Design": "416",
    "Graph & Chart Enhancement": "417",
    "Image Formatting & Conversion": "418",
    "Poster Design & Development": "419",
  };

  const addOns = {
    "Editing & Language Services": {
      "Journal Formatting & Style Editing": "1",
      "Reference & Citation Editing": "2",
      "Language Enhancement & Clarity Check": "3",
      "Plagiarism Check & Report": "4",
    },
    "Medical & Clinical Writing Services": {
      "Patient & HCP Education Material": "5",
      "Compliance & Standards Alignment": "6",
      "Journal Selection Assistance": "7",
    },
    "Regulatory Writing Support": {
      "Compliance & Standards Alignment": "8",
      "Scientific Illustration Design": "9",
      "End-to-End Journal Submission Support": "10",
    },
    "Scientific Communication Support": {
      "Scientific Illustration Design": "11",
      "Poster Design & Development": "12",
      "Graph & Chart Enhancement": "13",
    },
    "Evidence Synthesis & Review Writing": {
      "Meta-analysis Writing & Execution": "14",
      "Reference & Citation Editing": "15",
      "Scientific Illustration Design": "16",
    },
    "Scientific Publication Assistance": {
      "Title, Abstract & Keyword Optimization": "17",
      "Journal Formatting & Style Editing": "18",
      "Pre-Submission Peer Review": "19",
    },
    "Data & Statistical Support": {
      "Graph & Chart Enhancement": "20",
      "Meta-analysis Writing": "21",
      "Scientific Illustration Design": "22",
    },
    "Journal Publication Support": {
      "Cover Letter Preparation": "23",
      "Response to Reviewer Comments": "24",
      "Fast Track Publication Consultation": "25",
    },
    "Manuscriptedit Packages": {
      "Reviewer Response Package": "26",
      "Rejection Handling Package": "27",
      "Plagiarism Check & Report": "28",
    },
    "Academic & Non-Scientific Writing": {
      "Plagiarism Check & Report": "29",
      "Reference & Citation Editing": "30",
      "Scientific Illustration Design": "31",
    },
    "Design and Image Polishing and Creation": {
      "Image Formatting & Conversion": "32",
      "Graph & Chart Enhancement": "33",
      "Scientific Marketing & Promotional Content": "34",
    },
  };

  // console.log(addOns[selectedGoal][selectedAddOns[1]])
  for (let i = 0; i < selectedAddOns.length; i++) {
    let j = selectedAddOns[i];
    // console.log(addOns[selectedGoal][j]);
  }

  useEffect(() => {
    const optionPrice =
      goalOptions[selectedGoal]?.find((opt: any) => opt.text === selectedOption)
        ?.price || 0;

    const addOnsTotal = addOnOptions[selectedOption]
      ? addOnOptions[selectedOption]
          .filter((addOn: any) => selectedAddOns.includes(addOn.text))
          .reduce((sum: any, addOn: any) => sum + (addOn.price || 0), 0)
      : 0;

    // Calculate the final total price
    const calculatedTotal = optionPrice + addOnsTotal;
    setTotalPrice(calculatedTotal);
  }, [selectedGoal, selectedOption, selectedAddOns]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setSelectedOption(""); // Reset option when goal changes
    setSelectedAddOns([]); // Reset add-ons when goal changes
  }, [selectedGoal]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const mapServiceType = (goal: string): string => {
    // Map the selected goal to the corresponding service_type value
    const goalToServiceType: Record<string, string> = {
      "Editing & Language Services": "1",
      "Medical & Clinical Writing Services": "2",
      "Regulatory Writing Support": "3",
      "Scientific Communication Support": "4",
      "Evidence Synthesis & Review Writing": "5",
      "Scientific Publication Assistance": "6",
      "Data & Statistical Support": "7",
      "Journal Publication Support": "8",
      "Manuscriptedit Packages": "9",
      "Academic & Non-Scientific Writing": "10",
      "Design and Image Polishing and Creation": "11",
    };
    return goalToServiceType[goal] || "0";
  };

  const mapServiceName = (option: string): string => {
    // Map the selected option to the corresponding service_name value
    // This would depend on your specific options and their mappings
    // Example mapping - you'll need to adjust this based on your actual options
    if (option.includes("Standard")) return "1";
    if (option.includes("Advanced")) return "2";
    if (option.includes("Premium")) return "3";
    return "0";
  };

  const mapAddOns = (addOns: string[]): string => {
    // Map selected add-ons to a comma-separated string of their codes
    // Example mapping - adjust based on your actual add-ons
    const addOnToCode: Record<string, string> = {
      "Urgent Delivery": "1",
      "Additional Revision": "2",
      "Journal Formatting": "3",
    };

    return addOns.map((addOn) => addOnToCode[addOn] || "0").join(",");
  };

  const mapMajorSubject = (subject: string): string => {
    // Map major subject to corresponding code
    const subjectToCode: Record<string, string> = {
      science: "60",
      math: "61",
      history: "62",
    };
    return subjectToCode[subject] || "60"; // default to 60 if not found
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the data in the required format
    const postData = {
      service_type: mapServiceType(selectedGoal),
      service_name: mapServiceName(selectedOption),
      add_ons: mapAddOns(selectedAddOns),
      major_subject: mapMajorSubject(formData.majorSubject),
      specific_subject: formData.specificSubject,
      delivery_date: formData.deliveryDate,
      language: formData.preferredLanguage.toLowerCase().replace(" ", "_"),
      inst_for_editor: formData.editorInstruction,
      word_count: manualWordCount || "0", // Use manual word count or default to "0"
      pay_mode: formData.paymentMode,
      file: file ? file.name : "no_file_uploaded.docs",
      name: formData.Name,
      email: formData.Email,
      phone: formData.PhoneNum,
      user_find: formData.HearAbt,
      total_price: String(totalPrice),
    };

    console.log("Submitting data:", postData);

    try {
      const response = await fetch(
        "https://www.secure.manuscriptedit.com/api/submit_quotation_out.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error submitting quotation: ${response.statusText}`);
      }

      const { Message } = await response.json();
      if (Message === "Data Saved Successfully") {
        alert("Quotation submitted successfully!");
        // Reset form if needed
      } else {
        alert("Something went wrong with the submission.");
      }
    } catch (err: any) {
      console.error("Error encountered:", err.message);
      alert(
        "Error encountered while submitting the Quotation. Please try again."
      );
    }
    // try {
    //   const response = await fetch(
    //     "https://www.secure.manuscriptedit.com/api/submit_quotation_out.php",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error(`Error encountered: ${response.statusText}`);
    //   }

    //   const { Message } = await response.json();

    //   if (Message === "Data Saved Successfully") {
    //     alert("Quotation sent successfully.");
    //   } else {
    //     alert(
    //       "There is a problem encountered while sending the data. Please try to resubmit."
    //     );
    //   }
    // } catch (err: any) {
    //   console.error("Error encountered:", err.message);
    //   alert(
    //     "Error encountered while submitting the Quotation. Please try again."
    //   );
    // }
  };

  // useEffect(()=>{
  //   setHideGoalSection(!hideGoalSection)
  // },[selectedGoal])

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

              <input
                type="file"
                className="Sizy"
                onChange={handleFileChange}
                accept=".doc,.docx"
              />

              <span className="Alignments">
                <input
                  type="checkbox"
                  checked={wordCount}
                  onChange={() => setWordCount(!wordCount)}
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
                  value={manualWordCount}
                  onChange={(e) => setManualWordCount(e.target.value)}
                />
              )}
            </div>

            <div
              style={{
                marginTop: "2rem",
                display: hideGoalSection ? "none" : "flex",
                justifyContent: "space-between",
                backgroundColor: "white",
                padding: "1rem",
                // boxShadow: "-1px 1px 4px black",
                border: "1px solid #347791",
                borderRadius: "10px",
              }}
            >
              <h4>
                <b>Selected Goal:</b> <br />
                <span style={{ color: "#347791", fontSize: "1rem" }}>
                  {selectedGoal}
                </span>
              </h4>
              <button
                className="btn btn-primary"
                style={{
                  height: "fit-content",
                  boxShadow: "-1px 1px 4px black",
                }}
                onClick={() => {
                  setHideGoalSection(true);
                }}
              >
                View / Change Goal
              </button>
            </div>

            <div style={{ display: hideGoalSection ? "" : "none" }}>
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
                        onChange={() => {
                          setSelectedGoal(goal.text);
                          setHideGoalSection(false);
                        }}
                        checked={selectedGoal === goal.text}
                      />
                      <div className="icon-container">
                        <span style={{ fontSize: "30px" }}>{goal.emoji}</span>
                      </div>
                      <p className="title">{goal.text}</p>
                    </label>
                    <Tooltip id={`tooltip-${index}`} />
                  </div>
                ))}
              </div>
            </div>

            {selectedGoal && goalOptions[selectedGoal] && (
              <div className="mt-3">
                <h5>Choose a Service for {selectedGoal} :</h5>

                {/* Show all services if none selected */}
                {!selectedOption &&
                  goalOptions[selectedGoal].map((option: any, idx: any) => (
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
                    </div>
                  ))}

                {/* Show only selected service + add-ons + change button */}
                {selectedOption &&
                  goalOptions[selectedGoal]
                    .filter((option: any) => option.text === selectedOption)
                    .map((option: any, idx: any) => (
                      <div key={idx} className="form-check gapping">
                        <input
                          className="form-check-input"
                          type="radio"
                          id={`option${idx}`}
                          name="goalOption"
                          value={option.text}
                          checked
                          disabled
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

                        {addOnOptions[selectedOption] && (
                          <div className="mt-3">
                            <h5>Add-Ons for {selectedOption}</h5>
                            {addOnOptions[selectedOption].map(
                              (addOn: any, index: any) => (
                                <div key={index} className="form-check gapping">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`addon${index}`}
                                    checked={selectedAddOns.includes(
                                      addOn.text
                                    )}
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

                        <div className="mt-3">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              setSelectedOption("");
                              setSelectedAddOns([]);
                            }}
                          >
                            View / Change Service
                          </button>
                        </div>
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
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      placeholder="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="PhoneNum"
                      className="form-control"
                      value={formData.PhoneNum}
                      onChange={handleChange}
                      required
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
                      required
                    >
                      <option value="">-- Select --</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="OfficialSite">Official Site</option>
                      <option value="Whatsapp">Whatsapp</option>
                      <option value="fb">Facebook</option>
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
                      required
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
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Delivery Date *</label>
                    <input
                      type="date"
                      name="deliveryDate"
                      className="form-control"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                      required
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
                        required
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

                <div className="mb-3">
                  <label className="form-label">Payment Mode</label>
                  <select
                    name="paymentMode"
                    className="form-select"
                    value={formData.paymentMode}
                    onChange={handleChange}
                    style={{ width: "100%", height: "60px" }}
                    required
                  >
                    <option value="">--Select payment mode--</option>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank">Bank Transfer</option>
                    <option value="debit">Debit Card</option>
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
                  <strong>Selected Goal:</strong>
                  <br></br> {selectedGoal}
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
                    ₹ {totalPrice}
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
