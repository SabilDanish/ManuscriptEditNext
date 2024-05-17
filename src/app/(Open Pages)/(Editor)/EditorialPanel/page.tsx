"use client";
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import "./editorPanel.css";
import { useEffect, useState } from "react";
import useFetchEditors from "@/app/hooks/editor/useEditorProfile";
import { DNA } from "react-loader-spinner";
import { Editor } from "@/app/utils/interfaces";


export default function Home() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [type, setType] = useState("");
  const [allEditor, setAllEditor] = useState<Editor[]>([]);
  const { loading, error, editors } = useFetchEditors(type, limit, offset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setOffset((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setAllEditor((prev) => [...prev, ...editors]);
  }, [editors]);
  console.log({editors,type})
  return (
    <>
      {breadcrum("Editor", "Editorial Panel")}
      <div className="col-lg-10 col-md-10 col-sm-10 mt-50 mb-50 mx-auto d-flex1k">
        {loading && !allEditor.length && (
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        )}
        <div className="container">
          <div id="ediCat" className="row">
            <div
              className="col-lg-6"
              style={{ padding: "0px", cursor: "pointer" }}
              onClick={() => {
                setAllEditor([])
                setType("nonmed")
              }}
            >
              <div className="nme">NON MEDICAL EDITORS PROFILE</div>
            </div>
            <div
              className="col-lg-6"
              style={{ padding: "0px", cursor: "pointer" }}
              onClick={() => {
                setAllEditor([])
                setType("med")
              }}
            >
              <div className="me">MEDICAL EDITORS PROFILE</div>
            </div>
          </div>
        </div>

        <br></br>
        <div
          className="container nmEditor"
          style={{
            border: "0px solid rgb(193, 193, 193)",
            padding: "0px",
            textAlign: "center",
          }}
        >
          <div id="ediIcon" className="row" style={{ margin: "20px 0px" }}>
            {allEditor &&
              allEditor.length &&
              allEditor.map((editor) => {
                const { ediImg, ediName } = editor;
                return (
                  <div
                    className="col-lg-2 col-md-4 col-sm-4 col-xs-4"
                    style={{ border: "0 solid #022039" }}
                  >
                    <div style={{ padding: "5px" }}>
                      <div style={{ textAlign: "center" }}>
                        <img
                          src={ediImg}
                          className="img-fluid"
                          style={{
                            borderRadius: "18%",
                            width: "100px",
                            height: "100px",
                          }}
                          alt="Doctor"
                        />
                      </div>
                      <div className="titl">
                        <div className="name">{ediName}</div>
                        <div style={{ textAlign: "center" }} className="detail">
                          <button className="btn">View Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* <div className="col-lg-4 col-md-4 col-sm-4 firstdivpanel">
                    <p>
                        We have the most capable and qualified scientists, doctors, researchers, medical professionals and English
                        editors with excellent writing and editing skills in our editorial panel to perform editing and
                        proofreading. Each editor has completed or attended a PhD, MS, MD, MCh, DS or equivalent course at a top
                        university and has a proven record of publishing research papers in peer-reviewed international journals
                        and has experience in AMA, MLA and APA style formatting. To meet the continuous increase in demand for
                        manuscript editing by researchers in all scientific fields, we recruit editors continuously and carefully
                        after thorough evaluation of their bio-data, English writing and editing skills and scientific credentials.
                    </p>
                </div>

                <div className="col-lg-8 col-md-8 col-sm-8 seconddivpanel">
                    <ul>
                        <li className="pb-15">
                            ManuscriptEdit has a wide panel of editors with advanced degrees (doctoral and post-doctoral level) in
                            their area of specialization
                        </li>
                        <li className="pb-15">
                            Our editorial panel consists of experts from all disciplines of science, engineering, fisheries,
                            forestry, medicine, business, agriculture, art, culture, history, economics and politics, from all over
                            the world.
                        </li>
                        <li className="pb-15">
                            They are also full time professionals, scientists and researchers at research institutes and
                            universities.
                        </li>
                        <li className="pb-15">
                            The editors have vast experience in publishing their research findings in peer reviewed international
                            journals. Some of them have published in journals with impact factors more than 20.0.
                        </li>
                        <li className="pb-15">
                            The publications of some of our editors have appeared in the "Science Direct Top 25 articles" in their
                            respective subject fields. They are also winners of many international scientific and research awards
                            (e.g. NASA Technology Brief Award).
                        </li>
                        <li className="pb-15">
                            Many of them are associated with scientific and academic journals as editors and peer- reviewers.
                        </li>
                        <li className="pb-15">
                            We ensure that your work will be edited by an editor from top universities with the most relevant
                            scientific background in your field of study.
                        </li>
                    </ul>
                </div> */}
      </div>
    </>
  );
}
