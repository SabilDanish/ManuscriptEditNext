'use client'
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";

import "./EditingOverview.css";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import Link from "next/link";
import Metadata from "@/app/Metadata";
import { usePathname } from 'next/navigation'
import { data } from '../../../../utils/metaFile.js'
import { serviceData } from '../../../../utils/service.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServicestack } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import '../../../../_Common/getHelp/getHelp.css'
import Dropdown2 from "@/app/_Common/Dropdown2/Dropdown2";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";

const newData: any = data;

export default function Home() {
  const pathName: string = usePathname().split("/").filter(val => val).join("")
  let metaData = newData[pathName]

 
  return (
    <>
      {<Metadata metaData={metaData} />}
      {breadcrum('Services / English Editing', 'Editing Overview', "manuscript preparation, academic manuscript, English translation, academic translation, academic editing, native English speaking editors, publish in top journals, author services, researcher services, publication support, poster preparation, scientific poster preparation, research poster preparation, journal submission, manuscript submission, research paper, peer review, abstract editing, figure formatting, scientific illustration, scientific animation, video abstracts, journal guidelines, grant application guidelines, grant editing, grant application, grant application editing, thesis editing, dissertation editing, manuscript, research paper, scientific paper, journal rejection, journal acceptance", "English, editors, native English, substantive editing, proofreading, formatting, translation, scientific, research, proposals, grant applications, posters")}
      <section className="pt-5 pb-5">
       
          <div className="row conrow">
            <div className="col-md-12">
              <h3 className="pt-5">Editing Overview</h3>
              <p className="pt-3">
                ASetting the stage for the importance of editing in the realm of
                written communication. Introduction to the multifaceted nature
                of editing and its impact on clarity and effectiveness.
              </p>
            </div>
            {/* <div className="col-md-6">
              {
               
              }
            </div> */}
          </div>
        
      </section>
      <section className="pb-5">
        <>
          
          <div className="row ServicesSection">
              {
                serviceData['Editing Packages'] && serviceData['Editing Packages'].items && serviceData['Editing Packages'].items.map(item => {
                  const { title, features, description, link } = item;
                  return (


                    <div className="col-lg-3">
                      <div className='carousel-item-custom'>
                        <h2><FontAwesomeIcon icon={faServicestack} />{title}</h2>
                        <p>{description}</p>
                        <ul>
                          {features.map((feature: any, index: number) => (
                            <li key={index}>
                              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '8px' }} />
                              {feature}
                            </li>

                          ))}
                        </ul>

                        <a href={link}>
                          <button className="Know-More">Request a Quote</button>
                        </a>
                      </div>
                    </div>





                  )
                })
              }

              

            </div>
          



        </>

      </section>
      <section className="pb-5">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-6">
              <div className="stt-1 grid-1">
                <h4 className="text-left mb-3">
                  Proofreading
                  <span style={{ float: "right" }}>
                    <Link href={"/ProofReading"}>
                      <button className="btn btn-primary"> Know More</button>
                    </Link>
                  </span>
                </h4>
                <div className="em-about-icon-box2">
                  <div className="list-icon">
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Thorough reading of manuscript. </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Spotting all errors. </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Review capitalization and punctuation.</h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Check for spelling, grammar, and typos.</h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Remove redundancies </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Rectify improper word usage. </h6>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stt-1 grid-1 ">
                <h4 className="text-left mb-3">
                  Substantive Editing
                  <span style={{ float: "right" }}>
                    <Link href={"/SubEditing"}>
                      <button className="btn btn-primary"> Know More</button>
                    </Link>
                  </span>
                </h4>
                <div className="em-about-icon-box2">
                  <div className="list-icon">
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> All included in Proof reading </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6>
                        {" "}
                        Verify scientific terminology, units, symbols, and
                        variables.{" "}
                      </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6>
                        {" "}
                        Rephrase & revise sentences for clarity and word choice.
                      </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Remove repetitions for logical presentation.</h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Editing by Subject matter expert</h6>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="stt-1 grid-1">
                <h4 className="text-left mb-3">
                  Extensive Substantive Editing
                  <span style={{ float: "right" }}>
                    <Link href={"/ExtensiveSubstantiveEditing"}>
                      <button className="btn btn-primary"> Know More</button>
                    </Link>
                  </span>
                </h4>
                <div className="em-about-icon-box2">
                  <div className="list-icon">
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> All included in Substantive Editing </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Editing and review by two Subject matter expert </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6>
                        {" "}
                        Rephrase & revise paragraphs for clarity and word
                        choice.
                      </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Improve organization</h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Adjust writing style for consistency and logic </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Fact-check statements for scientific accuracy.</h6>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="stt-1 grid-1">
                <h4 className="text-left mb-3">
                  Customized Services
                  <span style={{ float: "right" }}>
                    <Link href={"/CustomizedServices"}>
                      <button className="btn btn-primary"> Know More</button>
                    </Link>
                  </span>
                </h4>
                <div className="em-about-icon-box2">
                  <div className="list-icon">
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Language Translation </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Copy editing </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Thesis Editing</h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Dissertation Editing.</h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6>Book Editing </h6>
                    </span>
                    <span>
                      <i className="bi bi-check-lg"></i>
                      <h6> Manual Editing </h6>
                    </span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {howWeWork()}
      {SpecializedArea()}
      <Dropdown2 />
    </>
  );
}
