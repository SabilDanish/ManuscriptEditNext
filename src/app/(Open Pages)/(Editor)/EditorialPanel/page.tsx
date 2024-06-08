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
              style={{
                padding: "0px",
                cursor: "pointer",
                backgroundColor: type === "nonmed" ? "#a31e22" : "#ddc587",
              }}
              onClick={() => {
                setAllEditor([]);
                setType("nonmed");
              }}
            >
              <div className="nme">NON MEDICAL EDITORS PROFILE</div>
            </div>
            <div
              className="col-lg-6"
              style={{
                padding: "0px",
                cursor: "pointer",
                backgroundColor: type === "med" ? "#a31e22" : "#ddc587",
              }}
              onClick={() => {
                setAllEditor([]);
                setType("med");
              }}
            >
              <div className="me">MEDICAL EDITORS PROFILE</div>
            </div>
          </div>

          <div className="row">
            <div
              className="container nmEditor"
              style={{
                border: "0px solid rgb(193, 193, 193)",
                padding: "0px",
                textAlign: "center",
              }}
            >
              <div
                id="ediIcon"
                className="row"
                style={{ margin: "20px 0px", gap: "29px" }}
              >
                {allEditor &&
                  allEditor.length &&
                  allEditor.map((editor) => {
                    const { ediImg, ediName } = editor;
                    return (
                      <div
                        className="col-lg-2 col-md-4 col-sm-4 col-xs-4"
                        style={{
                          border: "0 solid #022039",
                          boxShadow: "0px 0px 6px #f39194",
                        }}
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
                            <div
                              style={{
                                textAlign: "center",
                                width: "100%",
                              }}
                              className="detail"
                            >
                              <button
                                className="btn"
                                style={{ color: "#2257de", fontWeight: "600" }}
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
