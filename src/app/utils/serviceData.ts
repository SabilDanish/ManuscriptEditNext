import { Service } from "../utils/interfaces";

export const servicesData: Service[] = [
  {
    category: "English Editing",
    subServices: [
      { name: "Editing Overview", url: "/EditingOverview" },
      { name: "Proofreading", url: "/ProofReading" },
      { name: "Substantive Editing", url: "/SubEditing" },
      { name: "Extensive Substantive Editing", url: "/ExtensiveSubstantiveEditing" },
      { name: "Copyediting", url: "/CopyEdit" },
      { name: "Plagiarism Check", url: "/PlagiarismCheckReduction" },
      { name: "Translation Services", url: "/TranslationOverview" }
    ]
  },
  {
    category: "Publication Support",
    subServices: [
      { name: "Publication Package", url: "/PackageService" },
      { name: "Journal Selection", url: "/JournalSel" },
      { name: "Journal Submission", url: "/JournalSub" },
      { name: "Response to Reviewer", url: "/ResponseToReviewer" },
      { name: "Peer Review & Pre Submission", url: "/PeerReview" },
      { name: "Poster Creation & Design", url: "/PosterCreation" },
      { name: "Formatting", url: "/Formatting" }
    ]
  },
  {
    category: "Scientific / Academic Writing",
    subServices: [
      { name: "Writing Overview", url: "/Writing" },
      { name: "Medical Writing", url: "/MedicalWrite" },
      { name: "Scientific & Academic Writing", url: "/ScientificWriting" },
      { name: "Technical Writing", url: "/TechnicalWriting" },
      { name: "Rewriting", url: "/MedicalRewrite" },
      { name: "Statistical Analysis", url: "/StatisticalAnalysis" },
      { name: "Systematic Review", url: "/SystematicReview" },
      { name: "Meta Analysis", url: "/MetaAnalysis" }
    ]
  },
  {
    category: "Research Support",
    subServices: [
      { name: "Research Support Overview", url: "/ResearchSupportOverview" },
      { name: "Citation Booster", url: "/CitationBooster" },
      { name: "Illustration Services", url: "/MedicalDesign" },
      { name: "PhD Thesis", url: "/PHDThesis" },
      { name: "Master Thesis", url: "/MasterThesis" }
    ]
  }
];
