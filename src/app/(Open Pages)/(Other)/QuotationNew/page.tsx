"use client";

import { useEffect, useState } from "react";
import "../QuotationNew/quotationNew.css";

export default function ProjectQuote() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [wordCount, setWordCount] = useState(false);

  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    majorSubject: "",
    specificSubject: "",
    deliveryDate: "",
    preferredLanguage: "",
    editorInstruction: "",
    paymentMode: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  useEffect(() => {
    setSelectedOption(""); // Reset option when goal changes
  }, [selectedGoal]);

  const goals = [
    { text: "Editing Plans", emoji: "✍️" },
    { text: "Writing Assistance Plans", emoji: "📝" },
    { text: "Medical Writing and Systematic Review", emoji: "🏥" },
    { text: "Research Advisory Solutions", emoji: "🔬" },
    { text: "Data Analysis Plans", emoji: "📊" },
    { text: "Publication Support", emoji: "📖" },
  ];

  const goalOptions: any = {
    "Editing Plans": [
      {
        text: "Proofreading",
        description:
          "Essential Manuscript Editing is ideal for clients who want basic language checks to correct errors in spelling, grammar, and terminology.",
        price: 20000.0,
      },
      {
        text: "Substantive Editing",
        description:
          "Advanced Structural Editing is suitable for clients needing improvements in logic, flow, and clarity along with basic editing.",
        price: 30000.0,
      },
      {
        text: "Extensive Substantive Editing",
        description:
          "Premium Journal-Ready Editing is perfect for clients aiming for journal submission with tailored formatting and support for reviewer responses.",
        price: 40000.0,
      },
      {
        text: "Scientific Impact Editing",
        description:
          "Scientific Impact Editing is designed for high-impact publications requiring comprehensive scientific reviews, re-editing support, and adherence to strict journal standards.",
        price: 50000.0,
      },
      {
        text: "Thesis Editing",
        description:
          "Our Thesis Editing service provides comprehensive editing for academic theses and dissertations, ensuring clarity, coherence, and adherence to university formatting guidelines, while maintaining the academic integrity of your research.",
        price: 60000.0,
      },
    ],
    "Writing Assistance Plans": [
      {
        text: "Essential Writing Support",
        description:
          "Essential Writing Support is ideal for clients with a fully written manuscript that needs basic language and formatting improvements.",
        price: 30000.0,
      },
      {
        text: "Advanced Conceptual Writing Assistance",
        description:
          "Advanced Conceptual Writing Assistance is suitable for clients with drafts requiring logic, structure, and argument enhancement.",
        price: 50000.0,
      },
      {
        text: "Publication-Ready Writing Service",
        description:
          "Publication-Ready Writing Service is designed for clients needing manuscript finalization and journal-specific formatting.",
        price: 70000.0,
      },
      {
        text: "Premium Scientific Writing & Review",
        description:
          "Premium Scientific Writing & Review is perfect for high-impact submissions needing rigorous content analysis and iterative improvements.",
        price: 90000.0,
      },
      {
        text: "Customized Writing Service",
        description:
          "Customized Writing Service is the best choice for large or complex manuscripts needing highly specialized support from initial drafting to final polishing.",
        price: 0,
      },
    ],
    "Medical Writing and Systematic Review": [
      {
        text: "Systematic Review",
        description:
          "Systematic Review involves a structured review process focusing on a clearly defined research question, comprehensive literature search, and systematic data extraction.",
        price: 180000.0,
      },
      {
        text: "Systematic Review + Meta-Analysis",
        description:
          "Systematic Review + Meta-Analysis includes all features of a systematic review with added statistical analysis and meta-analysis providing combined quantitative outcomes.",
        price: 200000.0,
      },
      {
        text: "Narrative Review",
        description:
          "Narrative Review offers a flexible review covering a broad topic or theme with qualitative synthesis and narrative flow offering critical insights.",
        price: 100000.0,
      },
      {
        text: "Case Report",
        description:
          "Case Report involves detailed clinical documentation of a single patient case focusing on diagnosis, treatment, and outcomes.",
        price: 60000.0,
      },
      {
        text: "Case Series",
        description:
          "Case Series involves the documentation and analysis of multiple related cases focusing on patterns and outcomes with in-depth clinical analysis.",
        price: 70000.0,
      },
    ],
    "Data Analysis Plans": [
      {
        text: "Fundamental Data Analysis Support",
        description:
          "Fundamental Data Analysis Support is suitable for clients with complete datasets needing basic data cleaning and elementary analysis.",
        price: 30000.0,
      },
      {
        text: "Advanced Statistical Analysis Assistance",
        description:
          "Advanced Statistical Analysis Assistance is ideal for clients requiring more complex statistical methods, especially if they have partial data or need guidance on analysis design.",
        price: 50000.0,
      },
      {
        text: "Publication-Ready Data Analysis Service",
        description:
          "Publication-Ready Data Analysis Service works well for clients preparing for journal submission, needing high-quality data presentation and interpretation.",
        price: 60000.0,
      },
      {
        text: "Expert Scientific Data Review & Analysis",
        description:
          "Expert Scientific Data Review & Analysis is perfect for high-impact submissions requiring rigorous data validation, advanced statistical methods, and scientific accuracy.",
        price: 70000.0,
      },
      {
        text: "Customized Data Analysis Service",
        description:
          "Customized Data Analysis Service is the best choice for large, complex datasets or interdisciplinary projects that require fully tailored analytical approaches and iterative feedback.",
        price: 0,
      },
    ],
    "Publication Support": [
      {
        text: "Standard Package",
        description:
          "Peer Review Analysis, Journal Selection, Target Journal Formatting, Cover Letter Writing, Journal Submission, Unlimited Assistance",
        price: 40000.0,
      },
      {
        text: "Advanced Package",
        description:
          "Peer Review Analysis, Substantive Editing, Journal Selection, Target Journal Formatting, Cover Letter Writing, Journal Submission, Plagiarism Check, Unlimited Assistance",
        price: 60000.0,
      },
      {
        text: "Premium Package",
        description:
          "Peer Review Analysis, Substantive Editing, Journal Selection, Target Journal Formatting, Artwork Formatting, Cover Letter Writing, Journal Submission, Response to Reviewers* (*One response to reviewer free), Plagiarism Check, Unlimited Assistance",
        price: 80000.0,
      },
      {
        text: "Premium Plus Package",
        description:
          "Peer Review Analysis, Data Analysis, Research Paper Writing, Substantive Editing, Journal Selection, Journal Submission, Target Journal Formatting, Artwork Formatting, Cover Letter Writing, Response To Reviewer, Plagiarism Check, Unlimited Assistance",
        price: 100000.0,
      },
    ],
  };

  const addOnOptions: any = {
    Proofreading: [
      {
        text: "Basic Formatting Service",
        description:
          "Apply standard formatting to meet general manuscript guidelines.",
        price: 50,
      },
      {
        text: "Proofreading",
        description:
          "Detailed proofreading to catch any remaining errors and typos.",
        price: 80,
      },
    ],
    "Substantive Editing": [
      {
        text: "Presentation Logic Enhancement",
        description:
          "Improve the logical flow and presentation of content for better clarity.",
        price: 120,
      },
      {
        text: "Extended Word Count Reduction",
        description:
          "Reduce word count while preserving the core message and details.",
        price: 100,
      },
    ],
    "Extensive Substantive Editing": [
      {
        text: "Reviewer Response Management",
        description:
          "Assistance in drafting and managing responses to reviewer comments.",
        price: 150,
      },
      {
        text: "Journal Submission Package (Journal Selection + Cover Letter)",
        description:
          "Complete package including journal selection and cover letter preparation.",
        price: 200,
      },
    ],
    "Scientific Impact Editing": [
      {
        text: "Journal Resubmission Support",
        description:
          "Assistance with resubmission to different journals if needed.",
        price: 180,
      },
      {
        text: "Scientific Data Review and Validation",
        description:
          "Comprehensive review and validation of scientific data to ensure accuracy.",
        price: 250,
      },
    ],
    "Thesis Editing": [
      {
        text: "Formatting and Citation Compliance",
        description:
          "Ensuring compliance with university formatting and citation requirements.",
        price: 100,
      },
      {
        text: "Plagiarism Check and Report",
        description:
          "Comprehensive plagiarism detection and a detailed originality report.",
        price: 120,
      },
      {
        text: "Figures, Tables, and Graphics Formatting",
        description:
          "Expert formatting support according to academic guidelines.",
        price: 130,
      },
      {
        text: "Extended Word Count Management",
        description: "Help with reducing or expanding your thesis as required.",
        price: 140,
      },
    ],
    "Essential Writing Support": [
      {
        text: "Language Polishing",
        description: "Enhance readability and ensure smooth narrative flow.",
        price: 90,
      },
      {
        text: "Basic Formatting Service",
        description:
          "Apply standard formatting to meet general manuscript guidelines.",
        price: 50,
      },
      {
        text: "Plagiarism Check & Report",
        description: "Detailed plagiarism check with a comprehensive report.",
        price: 110,
      },
      {
        text: "Data Visualization & Graphical Abstracts",
        description:
          "Customized charts and graphical abstracts for journal submissions.",
        price: 200,
      },
      {
        text: "Statistical Analysis Consultation",
        description:
          "Expert guidance on statistical methods and data interpretation.",
        price: 220,
      },
      {
        text: "Reviewer Response Drafting",
        description: "Professional responses to peer reviewer comments.",
        price: 150,
      },
      {
        text: "ProJournal Selection & Submission Service",
        description:
          "Assistance in selecting the best-fit journals and managing submission.",
        price: 250,
      },
    ],
    "Systematic Review": [
      {
        text: "Additional Database Screening",
        description:
          "Expand the search to additional databases for comprehensiveness.",
        price: 130,
      },
      {
        text: "Plagiarism Check & Report",
        description: "Ensure originality in the systematic review.",
        price: 120,
      },
      {
        text: "Journal Selection Service",
        description:
          "Identify the best-fit journals for your systematic review.",
        price: 140,
      },
    ],
    "Systematic Review + Meta-Analysis": [
      {
        text: "Advanced Statistical Consulting",
        description: "Expert guidance on complex models used in meta-analyses.",
        price: 250,
      },
      {
        text: "Customized Data Visualization",
        description: "Creation of publication-ready forest and funnel plots.",
        price: 220,
      },
      {
        text: "Manuscript Formatting Service",
        description:
          "Ensure compliance with journal-specific formatting guidelines.",
        price: 100,
      },
    ],
    "Narrative Review": [
      {
        text: "Thematic Literature Map",
        description: "Visual mapping of key themes, trends, and research gaps.",
        price: 180,
      },
      {
        text: "Language Polishing",
        description: "Enhance readability and ensure smooth narrative flow.",
        price: 90,
      },
      {
        text: "Reviewer Response Preparation",
        description:
          "Support in drafting responses for peer-reviewed journals.",
        price: 150,
      },
    ],
    "Case Report": [
      {
        text: "Figures and Illustrations",
        description: "Create high-quality clinical images and diagrams.",
        price: 200,
      },
      {
        text: "Ethical and Data Compliance Check",
        description: "Ensure the case report meets all ethical guidelines.",
        price: 150,
      },
      {
        text: "Journal Submission Service",
        description: "Assistance with the entire submission process.",
        price: 180,
      },
    ],
    "Case Series": [
      {
        text: "Data Visualization",
        description: "Create comparison tables and visual aids.",
        price: 220,
      },
      {
        text: "Statistical Consulting",
        description:
          "Ensure accurate analysis for cases with quantitative data.",
        price: 250,
      },
      {
        text: "Post-Acceptance Support",
        description: "Assistance in addressing journal-requested revisions.",
        price: 180,
      },
    ],
    "Fundamental Data Analysis Support": [
      {
        text: "Journal Selection and Targeting",
        description: "Expert recommendations for suitable journals.",
        price: 140,
      },
      {
        text: "Cover Letter Drafting",
        description:
          "Professional assistance in drafting a persuasive cover letter.",
        price: 100,
      },
      {
        text: "Manuscript Submission Support",
        description: "Step-by-step guidance through the submission process.",
        price: 180,
      },
      {
        text: "Reviewer Response Management",
        description: "Expert support in addressing reviewer feedback.",
        price: 150,
      },
      {
        text: "Compliance Check for Ethical and Data Standards",
        description: "Ensure compliance with ethical guidelines.",
        price: 130,
      },
      {
        text: "Final Formatting and Proofreading for Journal Submission",
        description:
          "Ensure full compliance with journal formatting guidelines.",
        price: 100,
      },
      {
        text: "Post-Acceptance Editing for Resubmission",
        description: "Editing and formatting for journal-requested revisions.",
        price: 160,
      },
    ],
    "Quantitative Data Analysis": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
        price: 150,
      },
    ],
    "Journal Selection & Submission": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
        price: 150,
      },
    ],
    "Reviewer Response Management": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
        price: 150,
      },
    ],
  };

  return (
    <div className="container">
      <div className="row mt-4" style={{ justifyContent: "space-between" }}>
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
                  <div className="card cardGoal text-center p-2">
                    <input
                      type="radio"
                      name="goal"
                      value={goal.text}
                      onChange={() => setSelectedGoal(goal.text)}
                      checked={selectedGoal === goal.text}
                    />
                    <label>{goal.emoji}</label>
                    <p>{goal.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {selectedGoal && goalOptions[selectedGoal] && (
              <div className="mt-3">
                <h5>Choose a Service for {selectedGoal}</h5>
                {console.log(
                  "goalOptions[selectedGoal]",
                  goalOptions[selectedGoal]
                )}
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
                {/* Row 1 - Major Subject & Specific Subject */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Major Subject Type *</label>
                    <br />
                    <select
                      name="majorSubject"
                      className="form-select"
                      value={formData.majorSubject}
                      onChange={handleChange}
                      style={{ width: "100%", height: "60px" }}
                    >
                      <option
                        value=""
                        style={{ width: "100%", height: "60px" }}
                      >
                        -- Select --
                      </option>
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

                {/* Row 2 - Delivery Date & Preferred Language */}
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
                        onChange={handleChange}
                      />
                      <label className="form-check-label">
                        British English
                      </label>
                    </div>
                  </div>
                </div>

                {/* Row 3 - Editor Instructions */}
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

                {/* Row 4 - Payment Mode */}
                <div className="mb-3">
                  <label className="form-label">Payment Mode</label>
                  <br />
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
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="position-sticky" style={{ top: "20px" }}>
            <div className="card border rounded shadow-sm p-3 summary-card">
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
                            (opt) => opt.text === selectedOption
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
                          .filter((addOn) =>
                            selectedAddOns.includes(addOn.text)
                          )
                          .map((addOn, index) => (
                            <tr key={index}>
                              <td>{addOn.text}</td>
                              <td className="text-end fw-bold">
                                ₹{addOn.price || "0"}
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
                          (opt) => opt.text === selectedOption
                        )?.price || 0;
                      const addOnsTotal = addOnOptions[selectedOption]
                        ? addOnOptions[selectedOption]
                            .filter((addOn) =>
                              selectedAddOns.includes(addOn.text)
                            )
                            .reduce((sum, addOn) => sum + (addOn.price || 0), 0)
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
