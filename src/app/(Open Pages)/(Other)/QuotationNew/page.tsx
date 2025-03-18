"use client";

import { useEffect, useState } from "react";
import "../QuotationNew/quotationNew.css";
import { BsCheckLg } from "react-icons/bs";

export default function ProjectQuote() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    majorSubject: "",
    specificSubject: "",
    deliveryDate: "",
    preferredLanguage: "",
    editorInstruction: "",
    paymentMode: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
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
          "Basic language checks for spelling, grammar, and terminology.",
      },
      {
        text: "Substantive Editing",
        description: "Improves logic, flow, and clarity.",
      },
      {
        text: "Extensive Substantive Editing",
        description: "Journal-ready editing with tailored formatting.",
      },
      {
        text: "Scientific Impact Editing",
        description: "High-impact publications requiring scientific reviews.",
      },
      {
        text: "Thesis Editing",
        description: "Comprehensive editing for academic theses.",
      },
    ],
    "Writing Assistance Plans": [
      {
        text: "Manuscript Writing",
        description: "Full support in writing manuscripts from scratch.",
      },
      {
        text: "Grant Proposal Writing",
        description: "Craft compelling grant applications.",
      },
    ],
    "Medical Writing and Systematic Review": [
      {
        text: "Clinical Study Report",
        description: "Detailed report preparation for clinical studies.",
      },
      {
        text: "Systematic Review & Meta-Analysis",
        description: "Comprehensive literature reviews with analysis.",
      },
    ],
    "Research Advisory Solutions": [
      {
        text: "Research Methodology Consulting",
        description: "Guidance on research design and methodology.",
      },
      {
        text: "Statistical Guidance",
        description: "Expert statistical consultation for research.",
      },
    ],
    "Data Analysis Plans": [
      {
        text: "Qualitative Data Analysis",
        description: "Thematic and narrative analysis for research.",
      },
      {
        text: "Quantitative Data Analysis",
        description: "Statistical analysis for research data.",
      },
    ],
    "Publication Support": [
      {
        text: "Journal Selection & Submission",
        description: "Find the right journal and prepare submissions.",
      },
      {
        text: "Reviewer Response Management",
        description: "Assist in addressing reviewer comments.",
      },
    ],
  };

  const addOnOptions: any = {
    Proofreading: [
      {
        text: "Basic Formatting Service",
        description: "Apply standard formatting to meet guidelines.",
      },
      {
        text: "Proofreading",
        description: "Catch any remaining errors and typos.",
      },
    ],
    "Substantive Editing": [
      {
        text: "Presentation Logic Enhancement",
        description: "Improve logical flow and clarity.",
      },
      {
        text: "Extended Word Count Reduction",
        description: "Reduce word count while keeping key details.",
      },
    ],
    "Extensive Substantive Editing": [
      {
        text: "Reviewer Response Management",
        description: "Assist in drafting responses to reviewers.",
      },
      {
        text: "Journal Submission Package",
        description: "Includes journal selection and cover letter preparation.",
      },
    ],
    "Scientific Impact Editing": [
      {
        text: "Journal Resubmission Support",
        description: "Help with resubmission to different journals.",
      },
      {
        text: "Scientific Data Review",
        description: "Ensure scientific accuracy through validation.",
      },
    ],
    "Thesis Editing": [
      {
        text: "Formatting and Citation Compliance",
        description: "Ensure thesis meets university requirements.",
      },
      {
        text: "Plagiarism Check",
        description: "Detect plagiarism and provide a detailed report.",
      },
    ],
    "Manuscript Writing": [
      {
        text: "Journal Targeting",
        description: "Identify the best-fit journal for submission.",
      },
      {
        text: "Scientific Review",
        description: "Expert review before submission.",
      },
    ],
    "Grant Proposal Writing": [
      {
        text: "Funding Agency Review",
        description: "Ensure compliance with funding agency guidelines.",
      },
    ],
    "Clinical Study Report": [
      {
        text: "Regulatory Compliance Check",
        description: "Verify compliance with industry regulations.",
      },
    ],
    "Systematic Review & Meta-Analysis": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
      },
    ],
    "Research Methodology Consulting": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
      },
    ],
    "Statistical Guidance": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
      },
    ],
    "Qualitative Data Analysis": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
      },
    ],
    "Quantitative Data Analysis": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
      },
    ],
    "Journal Selection & Submission": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
      },
    ],
    "Reviewer Response Management": [
      {
        text: "Data Extraction Support",
        description: "Assistance in extracting relevant research data.",
      },
    ],
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-8 p-4 border bg-light">
          <h5>
            <strong>Submit your project details for an exact quote.</strong>
          </h5>

          <h5 style={{ marginTop: "30px" }}>Your Goals</h5>
          <div className="row">
            {goals.map((goal, index) => (
              <div key={index} className="col-lg-3">
                <div className="card text-center p-2">
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
                  <label className="form-check-label" htmlFor={`option${idx}`}>
                    <p className="mb-0">
                      <strong>{option.text}</strong>
                    </p>
                    <p className="mb-0">{option.description}</p>
                  </label>
                </div>
              ))}
            </div>
          )}

          {selectedOption && addOnOptions[selectedOption] && (
            <div className="mt-3">
              <h5>Add-Ons for {selectedOption}</h5>
              {addOnOptions[selectedOption].map((addOn: any, index: any) => (
                <div key={index} className="form-check gapping">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`addon${index}`}
                  />
                  <label className="form-check-label" htmlFor={`addon${index}`}>
                    <p className="mb-0">
                      <strong>{addOn.text}</strong>
                    </p>
                    <p className="mb-0">{addOn.description}</p>
                  </label>
                </div>
              ))}
            </div>
          )}

          <div className="container mt-4">
            <form onSubmit={handleSubmit}>
              {/* Row 1 - Major Subject & Specific Subject */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label className="form-label">Major Subject Type *</label><br/>
                  <select
                    name="majorSubject"
                    className="form-select"
                    value={formData.majorSubject}
                    onChange={handleChange}
                    style={{width:'100%' , height:"60px"}}
                  >
                    <option value="" style={{width:'100%' , height:"60px"}}>-- Select --</option>
                    <option value="science">Science</option>
                    <option value="math">Math</option>
                    <option value="history">History</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Specific Subject Area *</label>
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
                      checked={
                        formData.preferredLanguage === "American English"
                      }
                      onChange={handleChange}
                    />
                    <label className="form-check-label">American English</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="preferredLanguage"
                      value="British English"
                      checked={formData.preferredLanguage === "British English"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">British English</label>
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
                <label className="form-label">Payment Mode</label><br/>
                <select
                  name="paymentMode"
                  className="form-select"
                  value={formData.paymentMode}
                  onChange={handleChange}
                  style={{width:"100%" , height:"60px"}}
                >
                  <option value="">--Select payment mode--</option>
                  <option value="credit">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
