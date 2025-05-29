import React from "react";
import {
  FaCheck,
  FaPaintBrush,
  FaPen,
  FaPencilRuler,
  FaLanguage,
  FaSearch,
  FaFileAlt,
  FaSquareRootAlt,
} from "react-icons/fa";
import "./CustomServices.css";
import { link } from "fs";
import Link from "next/link";

const services = [
  {
    id: 1,
    icon: <FaCheck />,
    title: "Plagiarism Check",
    url: "/PlagiarismCheckReduction",
  },
  {
    id: 2,
    icon: <FaPaintBrush />,
    title: "Poster Creation",
    url: "/PosterCreation",
  },
  {
    id: 3,
    icon: <FaPen />,
    title: "Technical Writing",
    url: "/TechnicalWriting",
  },
  {
    id: 4,
    icon: <FaPencilRuler />,
    title: "Illustration Service",
    url: "/MedicalDesign",
  },
  {
    id: 5,
    icon: <FaLanguage />,
    title: "Translation Service",
    url: "/TranslationOverview",
  },
  {
    id: 6,
    icon: <FaSearch />,
    title: "Indexing",
    url: "/EditingOverview",
  },
  {
    id: 7,
    icon: <FaFileAlt />,
    title: "Typesetting",
    url: "/EditingOverview",
  },
  {
    id: 8,
    icon: <FaSquareRootAlt />,
    title: "Equation Building",
    url: "/EditingOverview",
  },
];

const CustomizedServices = () => {
  return (
    <div className="container">
      <h2 className="text-center Gappy">Customized Services</h2>
      <div className="service-cards">
        {services.map((service) => (
          <Link href={service.url} style={{textDecoration:'none'}}>
            <div key={service.id} className="service-card">
              <div className="icon">{service.icon}</div>
              <p>{service.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CustomizedServices;
