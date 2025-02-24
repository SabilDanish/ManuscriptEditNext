"use client";

import { useEffect, useState } from "react";
import "../QuotationNew/quotationNew.css";

export default function ProjectQuote() {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedEditingOption, setSelectedEditingOption] = useState("");

 

  useEffect(() => {
    setSelectedEditingOption(""); // Reset editing option when goal changes
  }, [selectedGoal]);

  const goals = [
    { text: "Editing Plans", emoji: "✍️" },
    { text: "Writing Assistance Plans", emoji: "📝" },
    { text: "Medical Writing and Systematic Review", emoji: "🏥" },
    { text: "Research Advisory Solutions", emoji: "🔬" },
    { text: "Data Analysis Plans", emoji: "📊" },
    { text: "Publication Support", emoji: "📖" },
  ];

  const editingOptions = [
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
  ];

  const writingSupportOptions = [
    {
      text: "Essential Writing Support",
      description:
        "Essential Writing Support is ideal for clients with a fully written manuscript that needs basic language and formatting improvements.",
    },
    {
      text: "Advanced Conceptual Writing Assistance",
      description:
        "Advanced Conceptual Writing Assistance is suitable for clients with drafts requiring logic, structure, and argument enhancement.",
    },
    {
      text: "Publication-Ready Writing Service",
      description:
        "Publication-Ready Writing Service is designed for clients needing manuscript finalization and journal-specific formatting.",
    },
    {
      text: "Premium Scientific Writing & Review",
      description:
        "Premium Scientific Writing & Review is perfect for high-impact submissions needing rigorous content analysis and iterative improvements.",
    },
    {
      text: "Customized Writing Service",
      description:
        "Customized Writing Service is the best choice for large or complex manuscripts needing highly specialized support from initial drafting to final polishing.",
    },
  ];

  // 🔹 Object Mapping for Add-On Options (Avoids multiple `if` conditions)
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
      {
        text: "Figures, Tables Formatting",
        description: "Format figures and tables to meet guidelines.",
      },
      {
        text: "Extended Word Count Management",
        description: "Adjust word count per university requirements.",
      },
    ],
  };

  const addOnOptionsWritingSupport: any = {
    "Language Polishing": [
      {
        text: "Language Polishing",
        description: "Enhance readability and ensure smooth narrative flow.",
      },
    ],
    "Basic Formatting Service": [
      {
        text: "Basic Formatting Service",
        description:
          "Ensure your manuscript adheres to standard formatting requirements.",
      },
    ],
    "Plagiarism Check & Report": [
      {
        text: "Plagiarism Check & Report",
        description:
          "Ensures your manuscript is free from plagiarism, with a detailed report highlighting areas of concern and improvement.",
      },
    ],
    "Data Visualization & Graphical Abstracts": [
      {
        text: "Data Visualization & Graphical Abstracts",
        description:
          "Customized charts, graphs, and graphical abstracts tailored to meet journal submission requirements and enhance research presentation.",
      },
    ],
    "Statistical Analysis Consultation": [
      {
        text: "Statistical Analysis Consultation",
        description:
          "Expert guidance on the statistical methods used in your research, ensuring accurate interpretation and presentation of results.",
      },
    ],
    "Reviewer Response Drafting": [
      {
        text: "Reviewer Response Drafting",
        description:
          "Assistance in drafting professional and concise responses to peer reviewer comments for smoother manuscript acceptance.",
      },
    ],
    "Journal Selection & Submission Service": [
      {
        text: "Journal Selection & Submission Service",
        description:
          "Helps identify the best-fit journals for your research and manage the entire submission process.",
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

          {/* Goals Selection */}
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

          {/* Editing Plans */}
          {selectedGoal === "Editing Plans" && (
            <div className="mt-3">
              <h5>
                I need detailed editing to enhance clarity, flow, and coherence
                in my manuscript.
              </h5>
              {editingOptions.map((option, idx) => (
                <div key={idx} className="form-check gapping">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`editOption${idx}`}
                    name="editingOption"
                    value={option.text}
                    checked={selectedEditingOption === option.text}
                    onChange={(e) => setSelectedEditingOption(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`editOption${idx}`}
                    style={{ cursor: "pointer" }}
                  >
                    <p className="mb-0">
                      <strong>{option.text}</strong>
                    </p>
                    <p className="mb-0">{option.description}</p>
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* writing Plans */}
          {selectedGoal === "Writing Assistance Plans" && (
            <div className="mt-3">
              <h5>
                I need detailed editing to enhance clarity, flow, and coherence
                in my manuscript.
              </h5>
              {writingSupportOptions.map((option, idx) => (
                <div key={idx} className="form-check gapping">
                  <input
                    className="form-check-input"
                    type="radio"
                    id={`editOption${idx}`}
                    name="editingOption"
                    value={option.text}
                    checked={selectedEditingOption === option.text}
                    onChange={(e) => setSelectedEditingOption(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`editOption${idx}`}
                    style={{ cursor: "pointer" }}
                  >
                    <p className="mb-0">
                      <strong>{option.text}</strong>
                    </p>
                    <p className="mb-0">{option.description}</p>
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* Dynamic Add-Ons */}
          {selectedEditingOption &&
            (addOnOptions[selectedEditingOption] ||
              addOnOptionsWritingSupport[selectedEditingOption]) && (
              <div className="mt-3">
                <h5>Add-Ons for {selectedEditingOption}</h5>
                {(
                  addOnOptions[selectedEditingOption] ||
                  addOnOptionsWritingSupport[selectedEditingOption]
                ).map((addOn: any, index: any) => (

      
                  <div key={index} className="form-check gapping">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`addon${index}`}
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
                ))}
              </div>
            )}
        </div>

        {/* Testimonials */}
        <div className="col-md-4 p-4">
          <h5>
            Hear from the authors who loved Our{" "}
            <span className="text-primary">Editing Service.</span>
          </h5>
        </div>
      </div>
    </div>
  );
}
