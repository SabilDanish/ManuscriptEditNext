
export interface GoalOption {
  text: string;
  description: string;
  price?: number;
}
export interface AddOns {
  text: string;
  description: string;
  price?: number;
}


export const goalOptions: Record<string, GoalOption[]> = {
    "Editing & Language Services": [
      {
        text: "Substantive (Advanced) Editing",
        description:
          "In-depth editing for structure, clarity, logic, and scientific accuracy.",
        price: 12920,
      },
      {
        text: "Copyediting (Standard Editing)",
        description:
          "Grammar, punctuation, spelling, and sentence structure correction.",
        price: 19465,
      },
      {
        text: "Proofreading",
        description: "Final check for typos, formatting, and consistency.",
        price: 12070,
      },
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Formatting per target journal’s guidelines (APA, MLA, Vancouver, etc.).",
        price: 5440,
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Improving flow, tone, and readability for ESL authors.",
        price: 13260,
      },
      {
        text: "Re-editing Support",
        description:
          "Free or discounted re-editing after peer review or journal feedback.",
        price: 10285,
      },
      {
        text: "Reference & Citation Editing",
        description:
          "Standardizing and correcting references and in-text citations.",
        price: 20230,
      },
      {
        text: "12 Hrs. Express Editing",
        description:
          "Rapid turnaround editing within 12 hours for urgent needs.",
        price: 20315,
      },
      {
        text: "Extensive Substantive Editing",
        description:
          "Detailed editing with focus on scientific tone, accuracy, and coherence.",
        price: 20315,
      },
    ],

    "Medical & Clinical Writing Services": [
      {
        text: "Clinical Research Manuscript Writing",
        description:
          "Full manuscript drafting for clinical trials, case studies, and original research.",
        // price: 5950,
      },
      {
        text: "Research Proposal & Protocol Development",
        description:
          "Grant proposals, study protocols, and ethics submission documents.",
        // price: 12920,
      },
      {
        text: "Patient & HCP Education Material",
        description:
          "Educational content for patients and healthcare professionals.",
        // price: 14535,
      },
    ],

    "Regulatory Writing Support": [
      {
        text: "Regulatory Document Preparation",
        description:
          "Submission-ready documents (e.g., Investigator Brochures, CSRs, CTDs).",
        // price: 22100,
      },
      {
        text: "Compliance & Standards Alignment",
        description:
          "Ensuring global regulatory standards (FDA, EMA, ICH-GCP) are met.",
        // price: 22440,
      },
      {
        text: "API Documentation",
        description:
          "Writing and structuring developer-friendly API manuals and integration guides.",
        // price: 20315,
      },
    ],

    "Scientific Communication Support": [
      {
        text: "Scientific Marketing & Promotional Content",
        description:
          "Scientific product/service brochures, flyers, and branded communication.",
        // price: 10540,
      },
      {
        text: "Conference Abstract & Presentation Writing",
        description:
          "Abstracts, posters, and oral presentation content for scientific conferences.",
        // price: 21420,
      },
      {
        text: "Informational Publications",
        description: "Whitepapers, product monographs, and technical briefs.",
        // price: 11645,
      },
    ],

    "Evidence Synthesis & Review Writing": [
      {
        text: "Systematic Review Writing",
        description: "PRISMA-compliant systematic literature review writing.",
        // price: 14110,
      },
      {
        text: "Narrative & Scoping Review Writing",
        description:
          "Broad reviews with critical analysis and thematic overviews.",
        // price: 12665,
      },
      {
        text: "Case Report / Case Series Writing",
        description: "Structured writing for unique clinical observations.",
        // price: 13005,
      },
      {
        text: "Creative & Narrative Writing",
        description:
          "Storytelling, personal statements, and reflective pieces.",
        // price: 7395,
      },
    ],
    "Scientific Publication Assistance": [
      {
        text: "Comprehensive Manuscript Writing",
        description: "End-to-end writing of original research papers.",
        // price: 17085,
      },
      {
        text: "Section-wise Scientific Writing",
        description:
          "Targeted support for Introduction, Methods, Results, and Discussion.",
        // price: 15300,
      },
      {
        text: "Title, Abstract & Keyword Optimization",
        description:
          "Crafting concise, impactful, and discoverable titles and abstracts.",
        // price: 16915,
      },
      {
        text: "Review Article & Short Communication Writing",
        description:
          "Writing for review papers, technical notes, and brief reports.",
        // price: 8670,
      },
      {
        text: "Supplementary Materials Preparation",
        description: "Creating and formatting additional files and datasets.",
        // price: 4335,
      },
      {
        text: "Commentaries & Opinion Article Writing",
        description:
          "Developing perspectives, editorials, and expert opinions.",
        // price: 11645,
      },
    ],
    "Data & Statistical Support": [
      {
        text: "Meta-analysis Writing & Execution",
        description:
          "Comprehensive meta-analytical review with statistical pooling and interpretation.",
        // price: 15215,
      },
      {
        text: "Research Data Analysis & Interpretation",
        description:
          "Data cleaning, statistical testing, visualization, and results interpretation.",
        // price: 20485,
      },
    ],
    "Journal Publication Support": [
      {
        text: "End-to-End Journal Submission Support",
        description:
          "From manuscript editing to final submission and journal correspondence.",
        // price: 20145,
      },
      {
        text: "Journal Selection Assistance",
        description:
          "Recommending best-fit journals based on scope, impact factor, and timelines.",
        // price: 5950,
      },
      {
        text: "Cover Letter Preparation",
        description:
          "Drafting a professional cover letter tailored to the target journal.",
        // price: 17850,
      },
      {
        text: "Response to Reviewer Comments",
        description:
          "Scientific assistance in rebuttal letters and point-by-point response drafting.",
        // price: 21505,
      },
      {
        text: "Pre-Submission Peer Review",
        description: "Independent, expert review before journal submission.",
        // price: 9095,
      },
      {
        text: "Post-Submission Follow-up Support",
        description:
          "Assistance with re-submissions, transfers, and editorial communication.",
        // price: 24225,
      },
      {
        text: "Fast Track Publication Consultation",
        description:
          "Strategic support for high-priority or time-sensitive submissions.",
        // price: 11730,
      },
    ],
    "Manuscriptedit Packages": [
      {
        text: "Basic Package",
        description:
          "Language editing, grammar correction, and journal formatting.",
        // price: 8330,
      },
      {
        text: "Standard Package",
        description: "Includes Basic + plagiarism check and reference styling.",
        // price: 22780,
      },
      {
        text: "Advanced Package",
        description:
          "Includes Standard + journal recommendation and cover letter.",
        // price: 9180,
      },
      {
        text: "Premium Publication Package",
        description:
          "Includes Advanced + submission support and unlimited re-editing.",
        // price: 18615,
      },
      {
        text: "Reviewer Response Package",
        description:
          "Assistance in crafting detailed response to reviewer comments.",
        // price: 22865,
      },
      {
        text: "Fast-Track Express Package",
        description:
          "Accelerated editing, formatting, and expert guidance for urgent submissions.",
        // price: 20145,
      },
      {
        text: "Rejection Handling Package",
        description:
          "Expert advice and content polishing for resubmission to alternative journals.",
        // price: 21845,
      },
      {
        text: "Custom Publication Package",
        description: "Fully tailored bundle based on author’s specific needs.",
        // price: 5440,
      },
      {
        text: "Advance Package",
        description:
          "Intermediate-tier bundle with editing, formatting, and basic submission tools.",
        // price: 8500,
      },
    ],
    "Academic & Non-Scientific Writing": [
      {
        text: "Plagiarism Check & Report",
        description:
          "Turnitin/iThenticate check with similarity report and suggestions.",
        // price: 6035,
      },
      {
        text: "Academic Essay & Report Writing",
        description:
          "Support for essays, white papers, reports, and non-research content.",
        // price: 17595,
      },
      {
        text: "Academic Writing",
        description:
          "Support for structured academic content such as assignments, essays, or summaries.",
        // price: 19040,
      },
      {
        text: "Thesis & Dissertation Writing Support",
        description:
          "Structured writing for academic submissions (Master’s/PhD level).",
        // price: 24225,
      },
    ],
    "Design and Image Polishing and Creation": [
      {
        text: "Scientific Illustration Design",
        description:
          "Custom scientific diagrams and illustrations for research articles, posters, and presentations.",
        // price: 9350,
      },
      {
        text: "Graph & Chart Enhancement",
        description:
          "Professional redrawing and enhancement of figures, graphs, and charts for publication quality.",
        // price: 6800,
      },
      {
        text: "Image Formatting & Conversion",
        description:
          "Format conversion, resolution adjustment, and compatibility preparation for submission.",
        // price: 5100,
      },
      {
        text: "Poster Design & Development",
        description:
          "Custom academic and scientific posters designed for conferences and presentations.",
        // price: 10625,
      },
    ],
  }

  export const addOnOptions: Record<string, AddOns[]> = {
    "Substantive (Advanced) Editing": [
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Copyediting (Standard Editing)": [
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    Proofreading: [
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Journal Formatting & Style Editing": [
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Language Enhancement & Clarity Check": [
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Re-editing Support": [
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Reference & Citation Editing": [
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "12 Hrs. Express Editing": [
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Extensive Substantive Editing": [
      {
        text: "Journal Formatting & Style Editing",
        description:
          "Ensures your edited manuscript follows target journal guidelines.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Adds citation compliance post-editing.",
      },
      {
        text: "Language Enhancement & Clarity Check",
        description: "Boosts readability for ESL authors.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Confirms originality.",
      },
    ],
    "Clinical Research Manuscript Writing": [
      {
        text: "Patient & HCP Education Material",
        description:
          "Tailor parts of your paper for stakeholder communication.",
      },
      {
        text: "Compliance & Standards Alignment",
        description: "Ensure your clinical paper meets ICH/FDA norms.",
      },
      {
        text: "Journal Selection Assistance",
        description: "Identify suitable journals for medical papers.",
      },
    ],
    "Research Proposal & Protocol Development": [
      {
        text: "Patient & HCP Education Material",
        description:
          "Tailor parts of your paper for stakeholder communication.",
      },
      {
        text: "Compliance & Standards Alignment",
        description: "Ensure your clinical paper meets ICH/FDA norms.",
      },
      {
        text: "Journal Selection Assistance",
        description: "Identify suitable journals for medical papers.",
      },
    ],
    "Patient & HCP Education Material": [
      {
        text: "Patient & HCP Education Material",
        description:
          "Tailor parts of your paper for stakeholder communication.",
      },
      {
        text: "Compliance & Standards Alignment",
        description: "Ensure your clinical paper meets ICH/FDA norms.",
      },
      {
        text: "Journal Selection Assistance",
        description: "Identify suitable journals for medical papers.",
      },
    ],
    "Regulatory Document Preparation": [
      {
        text: "Compliance & Standards Alignment",
        description: "Align your documents with global submission standards.",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add annotated diagrams for regulatory clarity.",
      },
      {
        text: "End-to-End Journal Submission Support",
        description:
          "Manage submission if regulatory paper is for publication.",
      },
    ],
    "Compliance & Standards Alignment": [
      {
        text: "Compliance & Standards Alignment",
        description: "Align your documents with global submission standards.",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add annotated diagrams for regulatory clarity.",
      },
      {
        text: "End-to-End Journal Submission Support",
        description:
          "Manage submission if regulatory paper is for publication.",
      },
    ],
    "API Documentation": [
      {
        text: "Compliance & Standards Alignment",
        description: "Align your documents with global submission standards.",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add annotated diagrams for regulatory clarity.",
      },
      {
        text: "End-to-End Journal Submission Support",
        description:
          "Manage submission if regulatory paper is for publication.",
      },
    ],
    "Scientific Marketing & Promotional Content": [
      {
        text: "Scientific Illustration Design",
        description: "Add custom visuals for posters/presentations.",
      },
      {
        text: "Poster Design & Development",
        description: "Turn the abstract into a presentation-ready poster.",
      },
      {
        text: "Graph & Chart Enhancement",
        description: "Refine visuals for high-resolution printing.",
      },
    ],
    "Conference Abstract & Presentation Writing": [
      {
        text: "Scientific Illustration Design",
        description: "Add custom visuals for posters/presentations.",
      },
      {
        text: "Poster Design & Development",
        description: "Turn the abstract into a presentation-ready poster.",
      },
      {
        text: "Graph & Chart Enhancement",
        description: "Refine visuals for high-resolution printing.",
      },
    ],
    "Informational Publications": [
      {
        text: "Scientific Illustration Design",
        description: "Add custom visuals for posters/presentations.",
      },
      {
        text: "Poster Design & Development",
        description: "Turn the abstract into a presentation-ready poster.",
      },
      {
        text: "Graph & Chart Enhancement",
        description: "Refine visuals for high-resolution printing.",
      },
    ],
    "Systematic Review Writing": [
      {
        text: "Meta-analysis Writing & Execution",
        description: "Convert review into a quantitative meta-analysis.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Standardise sources across large literature reviews.",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add conceptual diagrams or PRISMA flowcharts.",
      },
    ],
    "Narrative & Scoping Review Writing": [
      {
        text: "Meta-analysis Writing & Execution",
        description: "Convert review into a quantitative meta-analysis.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Standardise sources across large literature reviews.",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add conceptual diagrams or PRISMA flowcharts.",
      },
    ],
    "Case Report / Case Series Writing": [
      {
        text: "Meta-analysis Writing & Execution",
        description: "Convert review into a quantitative meta-analysis.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Standardise sources across large literature reviews.",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add conceptual diagrams or PRISMA flowcharts.",
      },
    ],
    "Creative & Narrative Writing": [
      {
        text: "Meta-analysis Writing & Execution",
        description: "Convert review into a quantitative meta-analysis.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Standardise sources across large literature reviews.",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add conceptual diagrams or PRISMA flowcharts.",
      },
    ],
    "Comprehensive Manuscript Writing": [
      {
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Section-wise Scientific Writing": [
      {
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Title, Abstract & Keyword Optimization": [
      {
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Review Article & Short Communication Writing": [
      {
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Supplementary Materials Preparation": [
      {
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Commentaries & Opinion Article Writing": [
      {
        text: "Title, Abstract & Keyword Optimization",
        description: "Make your paper discoverable.",
      },
      {
        text: "Journal Formatting & Style Editing",
        description: "Finalize manuscript layout for target journal.",
      },
      {
        text: "Pre-Submission Peer Review",
        description: "Get expert review before submission.",
      },
    ],
    "Meta-analysis Writing & Execution": [
      {
        text: "Graph & Chart Enhancement",
        description: "Visualise analysis outputs with professional polish.",
      },
      {
        text: "Meta-analysis Writing",
        description: "If synthesising multiple studies.",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add diagrams explaining methods/results.",
      },
    ],
    "Research Data Analysis & Interpretation": [
      {
        text: "Graph & Chart Enhancement",
        description: "Visualise analysis outputs with professional polish.",
      },
      {
        text: "Meta-analysis Writing",
        description: "If synthesising multiple studies.",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add diagrams explaining methods/results.",
      },
    ],
    "End-to-End Journal Submission Support": [
      {
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Journal Selection Assistance": [
      {
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Cover Letter Preparation": [
      {
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Response to Reviewer Comments": [
      {
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Pre-Submission Peer Review": [
      {
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Post-Submission Follow-up Support": [
      {
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Fast Track Publication Consultation": [
      {
        text: "Cover Letter Preparation",
        description: "Tailor cover letters to editors.",
      },
      {
        text: "Response to Reviewer Comments",
        description: "Craft professional rebuttals.",
      },
      {
        text: "Fast Track Publication Consultation",
        description: "Speed up submission process for urgent needs.",
      },
    ],
    "Basic Package": [
      {
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Standard Package": [
      {
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Advanced Package": [
      {
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Premium Publication Package": [
      {
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Reviewer Response Package": [
      {
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Fast-Track Express Package": [
      {
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Rejection Handling Package": [
      {
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Custom Publication Package": [
      {
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Advance Package": [
      {
        text: "Reviewer Response Package",
        description: "Add expert help post-review.",
      },
      {
        text: "Rejection Handling Package",
        description: "Rework paper for alternative journal.",
      },
      {
        text: "Plagiarism Check & Report",
        description: "Validate originality.",
      },
    ],
    "Plagiarism Check & Report": [
      {
        text: "Plagiarism Check & Report",
        description: "Ensure compliance with academic standards.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Format citations to required style (APA, MLA, etc.).",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add diagrams to academic reports/assignments.",
      },
    ],
    "Academic Essay & Report Writing": [
      {
        text: "Plagiarism Check & Report",
        description: "Ensure compliance with academic standards.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Format citations to required style (APA, MLA, etc.).",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add diagrams to academic reports/assignments.",
      },
    ],
    "Academic Writing": [
      {
        text: "Plagiarism Check & Report",
        description: "Ensure compliance with academic standards.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Format citations to required style (APA, MLA, etc.).",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add diagrams to academic reports/assignments.",
      },
    ],
    "Thesis & Dissertation Writing Support": [
      {
        text: "Plagiarism Check & Report",
        description: "Ensure compliance with academic standards.",
      },
      {
        text: "Reference & Citation Editing",
        description: "Format citations to required style (APA, MLA, etc.).",
      },
      {
        text: "Scientific Illustration Design",
        description: "Add diagrams to academic reports/assignments.",
      },
    ],
    "Scientific Illustration Design": [
      {
        text: "Image Formatting & Conversion",
        description: "Prepare images per submission specs.",
      },
      {
        text: "Graph & Chart Enhancement",
        description: "Redesign visuals for clarity and resolution.",
      },
      {
        text: "Scientific Marketing & Promotional Content",
        description: "Create flyers or conference handouts using visuals.",
      },
    ],
    "Graph & Chart Enhancement": [
      {
        text: "Image Formatting & Conversion",
        description: "Prepare images per submission specs.",
      },
      {
        text: "Graph & Chart Enhancement",
        description: "Redesign visuals for clarity and resolution.",
      },
      {
        text: "Scientific Marketing & Promotional Content",
        description: "Create flyers or conference handouts using visuals.",
      },
    ],
    "Image Formatting & Conversion": [
      {
        text: "Image Formatting & Conversion",
        description: "Prepare images per submission specs.",
      },
      {
        text: "Graph & Chart Enhancement",
        description: "Redesign visuals for clarity and resolution.",
      },
      {
        text: "Scientific Marketing & Promotional Content",
        description: "Create flyers or conference handouts using visuals.",
      },
    ],
    "Poster Design & Development": [
      {
        text: "Image Formatting & Conversion",
        description: "Prepare images per submission specs.",
      },
      {
        text: "Graph & Chart Enhancement",
        description: "Redesign visuals for clarity and resolution.",
      },
      {
        text: "Scientific Marketing & Promotional Content",
        description: "Create flyers or conference handouts using visuals.",
      },
    ],
  }

