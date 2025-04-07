
export interface GoalOption {
  id:string;
  text: string;
  description: string;
  price?: number;
}
export interface AddOns {
  id:string
  text: string;
  description: string;
  price?: number;
}


export const goalOptions: Record<string, GoalOption[]> = {
   "Editing & Language Services": [
    {
      "id": "366",
      "text": "Substantive (Advanced) Editing",
      "description": "In-depth editing for structure, clarity, logic, and scientific accuracy.",
      "price": 12920
    },
    {
      "id": "367",
      "text": "Copyediting (Standard Editing)",
      "description": "Grammar, punctuation, spelling, and sentence structure correction.",
      "price": 19465
    },
    {
      "id": "368",
      "text": "Proofreading",
      "description": "Final check for typos, formatting, and consistency.",
      "price": 12070
    },
    {
      "id": "369",
      "text": "Journal Formatting & Style Editing",
      "description": "Formatting per target journal’s guidelines (APA, MLA, Vancouver, etc.).",
      "price": 5440
    },
    {
      "id": "370",
      "text": "Language Enhancement & Clarity Check",
      "description": "Improving flow, tone, and readability for ESL authors.",
      "price": 13260
    },
    {
      "id": "371",
      "text": "Re-editing Support",
      "description": "Free or discounted re-editing after peer review or journal feedback.",
      "price": 10285
    },
    {
      "id": "372",
      "text": "Reference & Citation Editing",
      "description": "Standardizing and correcting references and in-text citations.",
      "price": 20230
    },
    {
      "id": "373",
      "text": "12 Hrs. Express Editing",
      "description": "Rapid turnaround editing within 12 hours for urgent needs.",
      "price": 20315
    },
    {
      "id": "374",
      "text": "Extensive Substantive Editing",
      "description": "Detailed editing with focus on scientific tone, accuracy, and coherence.",
      "price": 20315
    }
  ],

   "Medical & Clinical Writing Services": [
    {
      "id": "375",
      "text": "Clinical Research Manuscript Writing",
      "description": "Full manuscript drafting for clinical trials, case studies, and original research."
    },
    {
      "id": "376",
      "text": "Research Proposal & Protocol Development",
      "description": "Grant proposals, study protocols, and ethics submission documents."
    },
    {
      "id": "377",
      "text": "Patient & HCP Education Material",
      "description": "Educational content for patients and healthcare professionals."
    }
  ], 
  
   "Regulatory Writing Support": [
    {
      "id": "378",
      "text": "Regulatory Document Preparation",
      "description": "Submission-ready documents (e.g., Investigator Brochures, CSRs, CTDs)."
    },
    {
      "id": "379",
      "text": "Compliance & Standards Alignment",
      "description": "Ensuring global regulatory standards (FDA, EMA, ICH-GCP) are met."
    },
    {
      "id": "380",
      "text": "API Documentation",
      "description": "Writing and structuring developer-friendly API manuals and integration guides."
    }
  ],

   "Scientific Communication Support": [
    {
      "id": "381",
      "text": "Scientific Marketing & Promotional Content",
      "description": "Scientific product/service brochures, flyers, and branded communication."
    },
    {
      "id": "382",
      "text": "Conference Abstract & Presentation Writing",
      "description": "Abstracts, posters, and oral presentation content for scientific conferences."
    },
    {
      "id": "383",
      "text": "Informational Publications",
      "description": "Whitepapers, product monographs, and technical briefs."
    }
  ],

   "Evidence Synthesis & Review Writing": [
    {
      "id": "384",
      "text": "Systematic Review Writing",
      "description": "PRISMA-compliant systematic literature review writing."
    },
    {
      "id": "385",
      "text": "Narrative & Scoping Review Writing",
      "description": "Broad reviews with critical analysis and thematic overviews."
    },
    {
      "id": "386",
      "text": "Case Report / Case Series Writing",
      "description": "Structured writing for unique clinical observations."
    },
    {
      "id": "387",
      "text": "Creative & Narrative Writing",
      "description": "Storytelling, personal statements, and reflective pieces."
    }
  ],

"Scientific Publication Assistance": [
    {
      "id": "388",
      "text": "Comprehensive Manuscript Writing",
      "description": "End-to-end writing of original research papers."
    },
    {
      "id": "389",
      "text": "Section-wise Scientific Writing",
      "description": "Targeted support for Introduction, Methods, Results, and Discussion."
    },
    {
      "id": "390",
      "text": "Title, Abstract & Keyword Optimization",
      "description": "Crafting concise, impactful, and discoverable titles and abstracts."
    },
    {
      "id": "391",
      "text": "Review Article & Short Communication Writing",
      "description": "Writing for review papers, technical notes, and brief reports."
    },
    {
      "id": "392",
      "text": "Supplementary Materials Preparation",
      "description": "Creating and formatting additional files and datasets."
    },
    {
      "id": "393",
      "text": "Commentaries & Opinion Article Writing",
      "description": "Developing perspectives, editorials, and expert opinions."
    }
  ],

   "Data & Statistical Support": [
    {
      "id": "394",
      "text": "Meta-analysis Writing & Execution",
      "description": "Comprehensive meta-analytical review with statistical pooling and interpretation."
    },
    {
      "id": "395",
      "text": "Research Data Analysis & Interpretation",
      "description": "Data cleaning, statistical testing, visualization, and results interpretation."
    }
  ],

   "Journal Publication Support": [
    {
      "id": "396",
      "text": "End-to-End Journal Submission Support",
      "description": "From manuscript editing to final submission and journal correspondence."
    },
    {
      "id": "397",
      "text": "Journal Selection Assistance",
      "description": "Recommending best-fit journals based on scope, impact factor, and timelines."
    },
    {
      "id": "398",
      "text": "Cover Letter Preparation",
      "description": "Drafting a professional cover letter tailored to the target journal."
    },
    {
      "id": "399",
      "text": "Response to Reviewer Comments",
      "description": "Scientific assistance in rebuttal letters and point-by-point response drafting."
    },
    {
      "id": "400",
      "text": "Pre-Submission Peer Review",
      "description": "Independent, expert review before journal submission."
    },
    {
      "id": "401",
      "text": "Post-Submission Follow-up Support",
      "description": "Assistance with re-submissions, transfers, and editorial communication."
    },
    {
      "id": "402",
      "text": "Fast Track Publication Consultation",
      "description": "Strategic support for high-priority or time-sensitive submissions."
    }
  ],
    "Manuscriptedit Packages": [
    {
      "id": "403",
      "text": "Basic Package",
      "description": "Language editing, grammar correction, and journal formatting."
    },
    {
      "id": "404",
      "text": "Standard Package",
      "description": "Includes Basic + plagiarism check and reference styling."
    },
    {
      "id": "405",
      "text": "Advanced Package",
      "description": "Includes Standard + journal recommendation and cover letter."
    },
    {
      "id": "406",
      "text": "Premium Publication Package",
      "description": "Includes Advanced + submission support and unlimited re-editing."
    },
    {
      "id": "407",
      "text": "Reviewer Response Package",
      "description": "Assistance in crafting detailed response to reviewer comments."
    },
    {
      "id": "408",
      "text": "Fast-Track Express Package",
      "description": "Accelerated editing, formatting, and expert guidance for urgent submissions."
    },
    {
      "id": "409",
      "text": "Rejection Handling Package",
      "description": "Expert advice and content polishing for resubmission to alternative journals."
    },
    {
      "id": "410",
      "text": "Custom Publication Package",
      "description": "Fully tailored bundle based on author’s specific needs."
    },
    {
      "id": "411",
      "text": "Advance Package",
      "description": "Intermediate-tier bundle with editing, formatting, and basic submission tools."
    }
  ],

    "Academic & Non-Scientific Writing": [
    {
      "id": "412",
      "text": "Plagiarism Check & Report",
      "description": "Turnitin/iThenticate check with similarity report and suggestions."
    },
    {
      "id": "413",
      "text": "Academic Essay & Report Writing",
      "description": "Support for essays, white papers, reports, and non-research content."
    },
    {
      "id": "414",
      "text": "Academic Writing",
      "description": "Support for structured academic content such as assignments, essays, or summaries."
    },
    {
      "id": "415",
      "text": "Thesis & Dissertation Writing Support",
      "description": "Structured writing for academic submissions (Master’s/PhD level)."
    }
  ],

   "Design and Image Polishing and Creation": [
    {
      "id": "416",
      "text": "Scientific Illustration Design",
      "description": "Custom scientific diagrams and illustrations for research articles, posters, and presentations."
    },
    {
      "id": "417",
      "text": "Graph & Chart Enhancement",
      "description": "Professional redrawing and enhancement of figures, graphs, and charts for publication quality."
    },
    {
      "id": "418",
      "text": "Image Formatting & Conversion",
      "description": "Format conversion, resolution adjustment, and compatibility preparation for submission."
    },
    {
      "id": "419",
      "text": "Poster Design & Development",
      "description": "Custom academic and scientific posters designed for conferences and presentations."
    }
  ]
  }

  export const addOnOptions: Record<string, AddOns[]> = {
    "Substantive (Advanced) Editing": [
      {
        id:'1',
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        id:'2',
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        id:'3',
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        id:"4" ,
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Copyediting (Standard Editing)": [
      {
        id:'1',
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        id:'2',
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        id:'3',
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        id:"4" ,
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Proofreading": [
      {
        id:'1',
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        id:'2',
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        id:'3',
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        id:"4" ,
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Journal Formatting & Style Editing": [
      {
        id:'1',
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        id:'2',
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        id:'3',
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        id:"4" ,
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Language Enhancement & Clarity Check": [
      {
        id:'1',
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        id:'2',
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        id:'3',
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        id:"4" ,
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Re-editing Support": [
      {
        id:'1',
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        id:'2',
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        id:'3',
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        id:"4" ,
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Reference & Citation Editing": [
      {
        id:'1',
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        id:'2',
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        id:'3',
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        id:"4" ,
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "12 Hrs. Express Editing": [
      {
        id:'1',
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        id:'2',
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        id:'3',
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        id:"4" ,
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Extensive Substantive Editing": [
      {
        id:'1',
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        id:'2',
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        id:'3',
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        id:"4" ,
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Clinical Research Manuscript Writing": [
      {
        id:"5",
        text: "Patient & HCP Education Material",
        description:
          "Tailor parts of your paper for stakeholder communication.",
      },
      {
        id:"6",
        text: "Compliance & Standards Alignment",
        description: "Ensure your clinical paper meets ICH/FDA norms.",
      },
      {
        id:"7",
        text: "Journal Selection Assistance",
        description: "Identify suitable journals for medical papers.",
      },
    ],
    "Research Proposal & Protocol Development": [
      {
        id:"5",
        text: "Patient & HCP Education Material",
        description:
          "Tailor parts of your paper for stakeholder communication.",
      },
      {
        id:"6",
        text: "Compliance & Standards Alignment",
        description: "Ensure your clinical paper meets ICH/FDA norms.",
      },
      {
        id:"7",
        text: "Journal Selection Assistance",
        description: "Identify suitable journals for medical papers.",
      },
    ],
    "Patient & HCP Education Material": [
      {
        id:"5",
        text: "Patient & HCP Education Material",
        description:
          "Tailor parts of your paper for stakeholder communication.",
      },
      {
        id:"6",
        text: "Compliance & Standards Alignment",
        description: "Ensure your clinical paper meets ICH/FDA norms.",
      },
      {
        id:"7",
        text: "Journal Selection Assistance",
        description: "Identify suitable journals for medical papers.",
      },
    ],
    "Regulatory Document Preparation": [
      {
        id:"8",
        text: "Compliance & Standards Alignment",
        description: "Align your documents with global submission standards.",
      },
      {
        id:"9",
        text: "Scientific Illustration Design",
        description: "Add annotated diagrams for regulatory clarity.",
      },
      {
        id:"10",
        text: "End-to-End Journal Submission Support",
        description:
          "Manage submission if regulatory paper is for publication.",
      },
    ],
    "Compliance & Standards Alignment": [
      {
        id:"8",
        text: "Compliance & Standards Alignment",
        description: "Align your documents with global submission standards.",
      },
      {
        id:"9",
        text: "Scientific Illustration Design",
        description: "Add annotated diagrams for regulatory clarity.",
      },
      {
        id:"10",
        text: "End-to-End Journal Submission Support",
        description:
          "Manage submission if regulatory paper is for publication.",
      },
    ],
    "API Documentation": [
      {
        id:"8",
        text: "Compliance & Standards Alignment",
        description: "Align your documents with global submission standards.",
      },
      {
        id:"9",
        text: "Scientific Illustration Design",
        description: "Add annotated diagrams for regulatory clarity.",
      },
      {
        id:"10",
        text: "End-to-End Journal Submission Support",
        description:
          "Manage submission if regulatory paper is for publication.",
      },
    ],
    "Scientific Marketing & Promotional Content": [
      {
        id:"11",
        text: "Scientific Illustration Design",
        description: "Add custom visuals for posters/presentations.",
      },
      {
        id:"12",
        text: "Poster Design & Development",
        description: "Turn the abstract into a presentation-ready poster.",
      },
      {
        id:"13",
        text: "Graph & Chart Enhancement",
        description: "Refine visuals for high-resolution printing.",
      },
    ],
    "Conference Abstract & Presentation Writing": [
      {
        id:"11",
        text: "Scientific Illustration Design",
        description: "Add custom visuals for posters/presentations.",
      },
      {
        id:"12",
        text: "Poster Design & Development",
        description: "Turn the abstract into a presentation-ready poster.",
      },
      {
        id:"13",
        text: "Graph & Chart Enhancement",
        description: "Refine visuals for high-resolution printing.",
      },
    ],
    "Informational Publications": [
      {
        id:"11",
        text: "Scientific Illustration Design",
        description: "Add custom visuals for posters/presentations.",
      },
      {
        id:"12",
        text: "Poster Design & Development",
        description: "Turn the abstract into a presentation-ready poster.",
      },
      {
        id:"13",
        text: "Graph & Chart Enhancement",
        description: "Refine visuals for high-resolution printing.",
      },
    ],
    "Systematic Review Writing": [
      {
        id:"14",
        text: "Meta-analysis Writing & Execution",
        description: "Convert review into a quantitative meta-analysis.",
      },
      {
        id:"15",
        text: "Reference & Citation Editing",
        description: "Standardise sources across large literature reviews.",
      },
      {
        id:"16",
        text: "Scientific Illustration Design",
        description: "Add conceptual diagrams or PRISMA flowcharts.",
      },
    ],
    "Narrative & Scoping Review Writing": [
      {
        id:"14",
        text: "Meta-analysis Writing & Execution",
        description: "Convert review into a quantitative meta-analysis.",
      },
      {
        id:"15",
        text: "Reference & Citation Editing",
        description: "Standardise sources across large literature reviews.",
      },
      {
        id:"16",
        text: "Scientific Illustration Design",
        description: "Add conceptual diagrams or PRISMA flowcharts.",
      },
    ],
    "Case Report / Case Series Writing": [
      {
        id:"14",
        text: "Meta-analysis Writing & Execution",
        description: "Convert review into a quantitative meta-analysis.",
      },
      {
        id:"15",
        text: "Reference & Citation Editing",
        description: "Standardise sources across large literature reviews.",
      },
      {
        id:"16",
        text: "Scientific Illustration Design",
        description: "Add conceptual diagrams or PRISMA flowcharts.",
      },
    ],
    "Creative & Narrative Writing": [
      {
        id:"14",
        text: "Meta-analysis Writing & Execution",
        description: "Convert review into a quantitative meta-analysis.",
      },
      {
        id:"15",
        text: "Reference & Citation Editing",
        description: "Standardise sources across large literature reviews.",
      },
      {
        id:"16",
        text: "Scientific Illustration Design",
        description: "Add conceptual diagrams or PRISMA flowcharts.",
      },
    ],
    "Comprehensive Manuscript Writing": [
      {
        id:"17",
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        id:"18",
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        id:"19",
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Section-wise Scientific Writing": [
      {
        id:"17",
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        id:"18",
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        id:"19",
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Title, Abstract & Keyword Optimization": [
      {
        id:"17",
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        id:"18",
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        id:"19",
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Review Article & Short Communication Writing": [
      {
        id:"17",
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        id:"18",
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        id:"19",
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Supplementary Materials Preparation": [
      {
        id:"17",
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        id:"18",
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        id:"19",
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Commentaries & Opinion Article Writing": [
      {
        id:"17",
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        id:"18",
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        id:"19",
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Meta-analysis Writing & Execution": [
      {
        id:'20',
        text: "Graph & Chart Enhancement",
        description: "Visualise analysis outputs with professional polish.",
      },
      {
        id:'21',
        text: "Meta-analysis Writing",
        description: "If synthesising multiple studies.",
      },
      {
        id:'22',
        text: "Scientific Illustration Design",
        description: "Add diagrams explaining methods/results.",
      },
    ],
    "Research Data Analysis & Interpretation": [
      {
        id:'20',
        text: "Graph & Chart Enhancement",
        description: "Visualise analysis outputs with professional polish.",
      },
      {
        id:'21',
        text: "Meta-analysis Writing",
        description: "If synthesising multiple studies.",
      },
      {
        id:'22',
        text: "Scientific Illustration Design",
        description: "Add diagrams explaining methods/results.",
      },
    ],
    "End-to-End Journal Submission Support": [
      {
        id:"23",
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        id:"24",
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        id:"25",
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Journal Selection Assistance": [
      {
        id:"23",
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        id:"24",
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        id:"25",
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Cover Letter Preparation": [
      {
        id:"23",
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        id:"24",
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        id:"25",
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Response to Reviewer Comments": [
      {
        id:"23",
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        id:"24",
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        id:"25",
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Pre-Submission Peer Review": [
      {
        id:"23",
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        id:"24",
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        id:"25",
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Post-Submission Follow-up Support": [
      {
        id:"23",
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        id:"24",
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        id:"25",
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Fast Track Publication Consultation": [
      {
        id:"23",
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        id:"24",
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        id:"25",
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Basic Package": [
      {
        id:"26",
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        id:"27",
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        id:"28",
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Standard Package": [
      {
        id:"26",
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        id:"27",
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        id:"28",
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Advanced Package": [
      {
        id:"26",
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        id:"27",
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        id:"28",
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Premium Publication Package": [
      {
        id:"26",
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        id:"27",
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        id:"28",
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Reviewer Response Package": [
      {
        id:"26",
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        id:"27",
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        id:"28",
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Fast-Track Express Package": [
      {
        id:"26",
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        id:"27",
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        id:"28",
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Rejection Handling Package": [
      {
        id:"26",
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        id:"27",
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        id:"28",
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Custom Publication Package": [
      {
        id:"26",
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        id:"27",
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        id:"28",
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Advance Package": [
      {
        id:"26",
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        id:"27",
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        id:"28",
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Plagiarism Check & Report": [
      {
        id:'29',
        text: "Plagiarism Check & Report",
        description: "Ensure compliance with academic standards.",
      },
      {
        id:'30',
        text: "Reference & Citation Editing",
        description: "Format citations to required style (APA, MLA, etc.).",
      },
      {
        id:'31',
        text: "Scientific Illustration Design",
        description: "Add diagrams to academic reports/assignments.",
      },
    ],
    "Academic Essay & Report Writing": [
      {
        id:'29',
        text: "Plagiarism Check & Report",
        description: "Ensure compliance with academic standards.",
      },
      {
        id:'30',
        text: "Reference & Citation Editing",
        description: "Format citations to required style (APA, MLA, etc.).",
      },
      {
        id:'31',
        text: "Scientific Illustration Design",
        description: "Add diagrams to academic reports/assignments.",
      },
    ],
    "Academic Writing": [
      {
        id:'29',
        text: "Plagiarism Check & Report",
        description: "Ensure compliance with academic standards.",
      },
      {
        id:'30',
        text: "Reference & Citation Editing",
        description: "Format citations to required style (APA, MLA, etc.).",
      },
      {
        id:'31',
        text: "Scientific Illustration Design",
        description: "Add diagrams to academic reports/assignments.",
      },
    ],
    "Thesis & Dissertation Writing Support": [
      {
        id:'29',
        text: "Plagiarism Check & Report",
        description: "Ensure compliance with academic standards.",
      },
      {
        id:'30',
        text: "Reference & Citation Editing",
        description: "Format citations to required style (APA, MLA, etc.).",
      },
      {
        id:'31',
        text: "Scientific Illustration Design",
        description: "Add diagrams to academic reports/assignments.",
      },
    ],
    "Scientific Illustration Design": [
      {
        id:'32',
        text: "Image Formatting & Conversion",
        description: "Prepare images per submission specs.",
      },
      {
        id:'32',
        text: "Graph & Chart Enhancement",
        description: "Redesign visuals for clarity and resolution.",
      },
      {
        id:'32',
        text: "Scientific Marketing & Promotional Content",
        description: "Create flyers or conference handouts using visuals.",
      },
    ],
    "Graph & Chart Enhancement": [
      {
        id:'32',
        text: "Image Formatting & Conversion",
        description: "Prepare images per submission specs.",
      },
      {
        id:'32',
        text: "Graph & Chart Enhancement",
        description: "Redesign visuals for clarity and resolution.",
      },
      {
        id:'32',
        text: "Scientific Marketing & Promotional Content",
        description: "Create flyers or conference handouts using visuals.",
      },
    ],
    "Image Formatting & Conversion": [
      {
        id:'32',
        text: "Image Formatting & Conversion",
        description: "Prepare images per submission specs.",
      },
      {
        id:'32',
        text: "Graph & Chart Enhancement",
        description: "Redesign visuals for clarity and resolution.",
      },
      {
        id:'32',
        text: "Scientific Marketing & Promotional Content",
        description: "Create flyers or conference handouts using visuals.",
      },
    ],
    "Poster Design & Development": [
      {
        id:'32',
        text: "Image Formatting & Conversion",
        description: "Prepare images per submission specs.",
      },
      {
        id:'32',
        text: "Graph & Chart Enhancement",
        description: "Redesign visuals for clarity and resolution.",
      },
      {
        id:'32',
        text: "Scientific Marketing & Promotional Content",
        description: "Create flyers or conference handouts using visuals.",
      },
    ],
  }

