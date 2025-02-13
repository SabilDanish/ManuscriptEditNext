"use client";

import { useState } from "react";
import "../QuotationNew/quotationNew.css";

export default function ProjectQuote() {
  const [showInput, setShowInput] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedEditingOption, setSelectedEditingOption] = useState("");

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
        "Essential Manuscript Editing is ideal for clients who want basic language checks to correct errors in spelling, grammar, and terminology.",
    },
    {
      text: "Substantive Editing",
      description:
        "Advanced Structural Editing is suitable for clients needing improvements in logic, flow, and clarity along with basic editing.",
    },
    {
      text: "Extensive Substantive Editing",
      description:
        "Premium Journal-Ready Editing is perfect for clients aiming for journal submission with tailored formatting and support for reviewer responses.",
    },
    {
      text: "Scientific Impact Editing",
      description:
        "Scientific Impact Editing is designed for high-impact publications requiring comprehensive scientific reviews, re-editing support, and adherence to strict journal standards.",
    },
    {
      text: "Thesis Editing",
      description:
        "Our Thesis Editing service provides comprehensive editing for academic theses and dissertations, ensuring clarity, coherence, and adherence to university formatting guidelines, while maintaining the academic integrity of your research.",
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
  


  const editingaddOnOptionsProof = [
    {
      text: "Basic Formatting Service",
      description:
        "Apply standard formatting to meet general manuscript guidelines.",
    },
    {
      text: "Proofreading",
      description:
        "Detailed proofreading to catch any remaining errors and typos.",
    },
  ];

  const editingaddOnOptionsSubs = [
    {
      text: "Presentation Logic Enhancement",
      description:
        "Improve the logical flow and presentation of content for better clarity.",
    },
    {
      text: "Extended Word Count Reduction",
      description:
        "Reduce word count while preserving the core message and details.",
    },
  ];

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-8 p-4 border bg-light">
          <h5>
            <strong>Submit your project details for an exact quote.</strong>
          </h5>
          <div className="p-3 border mt-3 d-flex flex-column align-items-center">
            <h6 className="text-center">Upload your document to be edited</h6>
            <p className="text-center">
              Upload manuscripts in .doc or .docx format to autocount words &
              get an instant quote.
            </p>
            <input
              type="file"
              className="text-center"
              style={{ width: "34%" }}
            />
            <span className="spanGap">
              <input
                type="checkbox"
                onChange={(e) => setShowInput(e.target.checked)}
              />
              I want to enter the word count
            </span>
            {showInput && (
              <input
                type="number"
                placeholder="Enter word count"
                className="mt-2 form-control"
                style={{ width: "50%" }}
              />
            )}
          </div>

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

          {/* Additional options for Editing Plans */}
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

           {/* Additional options for writing Plans */}
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

          {/* Add-ons when "Proofreading" is selected */}
          {selectedEditingOption === "Proofreading" && (
            <div className="mt-3">
              <h5>Add-Ons for Essential Manuscript Editing</h5>
              {editingaddOnOptionsProof.map((addOn, index) => (
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
          {selectedEditingOption === "Substantive Editing" && (
            <div className="mt-3">
              <h5>Add-Ons for Essential Manuscript Editing</h5>
              {editingaddOnOptionsSubs.map((addOn, index) => (
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
        </div>

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
