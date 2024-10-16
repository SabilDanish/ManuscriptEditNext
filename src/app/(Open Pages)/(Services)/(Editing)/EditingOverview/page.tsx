'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";

import './style.module.css'
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import Link from "next/link";


export default function Home() {
  return (
    <>
    
 {breadcrum('Services / English Editing','Editing Overview')}
<section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3 className="pt-5">Editing Overview</h3>
                <p className="pt-3">
                    ASetting the stage for the importance of editing in the realm of written communication.
                    Introduction to the multifaceted nature of editing and its impact on clarity and effectiveness.
                </p>
            </div>
            <div className="col-md-6">
                <img src="/images/innerimg/re-1.jpg" alt="" width="100%" style={{borderRadius: 10}}/>
            </div>
        </div>
        </div>
</section>
<section className="pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="stt-1 grid-1">
                    <h4 className="text-left mb-3">Proofreading
                         <span style={{float:'right'}}>
                             <Link href={'/ProofReading'}><button className="btn btn-primary"> Check Price</button></Link> 
                        </span>
                     </h4>
                    <div className="em-about-icon-box2">
                        <div className="list-icon">
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Thorough reading of manuscript. </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Spotting all errors. </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Review capitalization and punctuation.</h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Check for spelling, grammar, and typos.</h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Remove redundancies </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Rectify improper word usage. </h6>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="stt-1 grid-1 ">
                    <h4 className="text-left mb-3">Substantive Editing
                         <span style={{float:'right'}}>
                             <Link href={'/SubEditing'}><button className="btn btn-primary"> Check Price</button></Link>
                        </span>
                    </h4>
                    <div className="em-about-icon-box2">
                        <div className="list-icon">
                            <span><i className="bi bi-check-lg"></i>
                                <h6>   All included in Proof reading </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Verify scientific terminology, units, symbols, and variables. </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Rephrase & revise sentences for clarity and word choice.</h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6>  Remove repetitions for logical presentation.</h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Editing by Subject matter expert</h6>
                            </span>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="stt-1 grid-1">
                    <h4 className="text-left mb-3">Extensive Substantive Editing
                        <span style={{float:'right'}}>
                             <Link href={'/ExtensiveSubstantiveEditing'}><button className="btn btn-primary"> Check Price</button></Link>
                        </span>
                    </h4>
                    <div className="em-about-icon-box2">
                        <div className="list-icon">
                            <span><i className="bi bi-check-lg"></i>
                                <h6> All included in Substantive Editing </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Editing and review by two Subject matter expert </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Rephrase & revise paragraphs for clarity and word choice.</h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Improve organization</h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Adjust writing style for consistency and logic </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Fact-check statements for scientific accuracy.</h6>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="stt-1 grid-1">
                    <h4 className="text-left mb-3">Other Services
                         <span style={{float:'right'}}>
                             <Link href={'/CustomizedServices'}><button className="btn btn-primary"> Check Price</button></Link>
                        </span>
                    </h4>
                    <div className="em-about-icon-box2">
                        <div className="list-icon">
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Language Translation </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Copy editing </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Thesis Editing</h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> Dissertation Editing.</h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6> RBook Editing </h6>
                            </span>
                            <span><i className="bi bi-check-lg"></i>
                                <h6>  Manual Editing </h6>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</section>
{howWeWork()}

    </>
  );
}
