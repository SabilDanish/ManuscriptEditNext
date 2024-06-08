"use client";
import { useState, useEffect } from 'react';
import './getHelp.css';

const GetHelp = () => {
    const [activeTab, setActiveTab] = useState('firstTab');

    const openTab = (evt, cityName) => {
        setActiveTab(cityName);
    };

    //   useEffect(() => {
    //     // Simulate a click on the default tab when the component mounts
    //     document.getElementById("defaultOpen").click();
    //   }, []);

    return (
        <>

<div >
            <h2 className='TitleAll' style={{ textAlign: 'center', marginTop: '20px' }}>FELLING CONFUSED WHAT TO OPT FOR?</h2>
            <p style={{ textAlign: 'center' }}>Choose Your issues, Let ManuscriptEdit HELP YOU</p>
            
        </div>

            <div className="container-fluid" style={{ marginTop: "23px", marginBottom: "30px" }}>
                <div className="row" style={{ margin: "auto", justifyContent: "center" }}>
                    <div className="tab">
                        <button
                            className={`tablinks ${activeTab === 'firstTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'firstTab')}
                            id="defaultOpen"
                        >
                            Can I get assistance in writing my Research Paper?
                        </button>
                        <button
                            className={`tablinks ${activeTab === 'secondTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'secondTab')}
                        >
                            I'm struggling to publish my research paper, can you help?
                        </button>
                        <button
                            className={`tablinks ${activeTab === 'thirdTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'thirdTab')}
                        >
                            My paper got rejected due to poor English, can you help?
                        </button>

                        <button
                            className={`tablinks ${activeTab === 'FourthTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'FourthTab')}
                        >
                            My paper got rejected due to poor English, can you help?
                        </button>


                        <button
                            className={`tablinks ${activeTab === 'FifthTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'FifthTab')}
                        >
                            My paper got rejected due to poor English, can you help?
                        </button>
                    </div>

                    <div id="firstTab" className="tabcontent" style={{ display: activeTab === 'firstTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th scope="col" style={{ color: "#a31e22" }}>Medical Writing</th>
                                    <th scope="col" style={{ color: "#a31e22", width: "235px" }}>Scientific & Medical Writing</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Statistical Analysis</th>
                                    <th scope="col" style={{ color: "#a31e22", width: '296px' }}>Systematic Review & Meta Analysis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td scope="row"> <span className="checkmark">&#10004;</span>Case Report</td>
                                    <td><span className="checkmark">&#10004;</span>Research Proposal</td>
                                    <td><span className="checkmark">&#10004;</span> Results using SPSS software.</td>
                                    <td><span className="checkmark">&#10004;</span>Study in compliance with PRISMA guidelines.</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Original Research Article</td>
                                    <td><span className="checkmark">&#10004;</span> Review Article</td>
                                    <td><span className="checkmark">&#10004;</span>Data analysis using the Defined methods (View)</td>
                                    <td><span className="checkmark">&#10004;</span>Designing search strategies.</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Review Article</td>
                                    <td><span className="checkmark">&#10004;</span>Brief Communication</td>
                                    <td><span className="checkmark">&#10004;</span>Construction of tables and graphs.</td>
                                    <td><span className="checkmark">&#10004;</span>Screening the databases with search-strings.</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Research Proposal</td>
                                    <td><span className="checkmark">&#10004;</span>Original Research Article</td>
                                    <td> <span className="checkmark">&#10004;</span>Interpretation of results.</td>
                                    <td> <span className="checkmark">&#10004;</span>Construction of tables and forest plots.</td>


                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Original Research Article</td>
                                    <td><span className="checkmark">&#10004;</span>Customized Writing</td>


                                </tr>
                            </tbody>
                        </table>

                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>
                            <a href="" className='dtbtn' style={{ marginRight: "8px" }}>See Samples</a>

                            <a href="" className='dtbtn'>View More</a>
                        </div>
                    </div>

                    <div id="secondTab" className="tabcontent" style={{ display: activeTab === 'secondTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th scope="col" style={{ color: "#a31e22" }}>Premium Plus Package</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Premium Package</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Advanced Package</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Standard Package</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row"> <span className="checkmark">&#10004;</span>Data Analysis</td>
                                    <td><span className="checkmark">&#10004;</span>Substantive Editing</td>
                                    <td> <span className="checkmark">&#10004;</span>Substantive Editing</td>
                                    <td><span className="checkmark">&#10004;</span>Journal Selection</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Research Paper Writing</td>
                                    <td><span className="checkmark">&#10004;</span> Journal Selection</td>
                                    <td><span className="checkmark">&#10004;</span> Journal Selection</td>
                                    <td><span className="checkmark">&#10004;</span>Target Journal Formatting</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Research Paper Writing</td>
                                    <td><span className="checkmark">&#10004;</span>Target Journal Formatting</td>
                                    <td><span className="checkmark">&#10004;</span>Target Journal Formatting</td>
                                    <td><span className="checkmark">&#10004;</span> Journal Submission</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Substantive Editing</td>
                                    <td><span className="checkmark">&#10004;</span>Artwork Formatting</td>
                                    <td> <span className="checkmark">&#10004;</span>Journal Submission</td>
                                    <td><span className="checkmark">&#10004;</span> Cover Letter Writing</td>


                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>journal Selection</td>
                                    <td><span className="checkmark">&#10004;</span>Journal Submission</td>
                                    <td><span className="checkmark">&#10004;</span>Cover Letter Writing</td>
                                    <td><span className="checkmark">&#10004;</span>Unlimited Assistance</td>
                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Journal Submission</td>
                                    <td><span className="checkmark">&#10004;</span>Response to Reviewers</td>
                                    <td><span className="checkmark">&#10004;</span>Plagiarism Check</td>

                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Target Journal Formatting</td>
                                    <td><span className="checkmark">&#10004;</span>Peer Review Analysis</td>
                                    <td><span className="checkmark">&#10004;</span>Unlimited Assistance</td>

                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Artwork Formatting</td>
                                    <td><span className="checkmark">&#10004;</span>Cover Letter Writing</td>


                                </tr>
                                {/* 
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Response To Reviewer</td>
                                    <td><span className="checkmark">&#10004;</span>Plagiarism Check</td>


                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Peer Review Analysis</td>
                                    <td><span className="checkmark">&#10004;</span>Unlimited Assistance</td>


                                </tr> */}


                            </tbody>
                        </table>

                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>
                            <a href="" className='dtbtn' style={{ marginRight: "8px" }}>See Samples</a>

                            <a href="" className='dtbtn'>View More</a>
                        </div>
                    </div>

                    <div id="thirdTab" className="tabcontent" style={{ display: activeTab === 'thirdTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th scope="col" style={{ color: "#a31e22" }}>Proofreading</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Substantive Editing</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Extensive Substantive Editing</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row"> <span className="checkmark">&#10004;</span> Thorough reading of manuscript.</td>
                                    <td><span className="checkmark">&#10004;</span> All included in Proof reading</td>
                                    <td> <span className="checkmark">&#10004;</span> All included in Substantive Editing</td>


                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Spotting all errors.</td>
                                    <td><span className="checkmark">&#10004;</span> Verify scientific terminology, units, symbols, and variables.</td>
                                    <td><span className="checkmark">&#10004;</span>  Editing and review by two Subject matter expert</td>


                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Review capitalization and punctuation.</td>
                                    <td><span className="checkmark">&#10004;</span>Rephrase & revise sentences for clarity and word choice.</td>
                                    <td><span className="checkmark">&#10004;</span>Rephrase & revise paragraphs for clarity and word choice.</td>


                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Check for spelling, grammar, and typos.</td>
                                    <td><span className="checkmark">&#10004;</span> Remove repetitions for logical presentation.</td>
                                    <td> <span className="checkmark">&#10004;</span>Improve organization</td>



                                </tr>

                                {/* <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Remove redundancies</td>
                                    <td><span className="checkmark">&#10004;</span>Editing by Subject matter expert</td>
                                    <td><span className="checkmark">&#10004;</span>Adjust writing style for consistency and logic</td>
                                    
                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span> Rectify improper word usage.</td>
                                    <td></td>
                                    <td><span className="checkmark">&#10004;</span>Fact-check statements for scientific accuracy.</td>
                                    
                                </tr> */}






                            </tbody>
                        </table>

                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>
                            <a href="" className='dtbtn' style={{ marginRight: "8px" }}>See Samples</a>

                            <a href="" className='dtbtn'>View More</a>
                        </div>
                    </div>


                    <div id="FourthTab" className="tabcontent" style={{ display: activeTab === 'FourthTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th scope="col" style={{ color: "#a31e22" }}>Basic</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Advanced</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row"> <span className="checkmark">&#10004;</span>  Journal Guidance (3)</td>
                                    <td><span className="checkmark">&#10004;</span> Journal Guidance (5)</td>
                                    <td> <span className="checkmark">&#10004;</span> Journal Guidance (8)</td>
                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Literature search assistance (2)</td>
                                    <td><span className="checkmark">&#10004;</span> Literature search assistance (5)</td>
                                    <td><span className="checkmark">&#10004;</span>  Literature search assistance (3)</td>


                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Writing support (3)</td>
                                    <td><span className="checkmark">&#10004;</span>Writing support (5)</td>
                                    <td><span className="checkmark">&#10004;</span>Writing support (8)</td>


                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Editing consultation (1)</td>
                                    <td><span className="checkmark">&#10004;</span> Editing consultation (5)</td>
                                    <td> <span className="checkmark">&#10004;</span> Editing consultation (8)</td>



                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Artwork consultation (1)</td>
                                    <td><span className="checkmark">&#10004;</span>Artwork consultation (5)</td>
                                    <td><span className="checkmark">&#10004;</span>Artwork consultation (8)</td>

                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>  Abstract Optimisation (1)</td>
                                    <td><span className="checkmark">&#10004;</span>Abstract Optimisation (5)</td>
                                    <td><span className="checkmark">&#10004;</span>In-depth Journal Consultation (4)</td>

                                </tr>


                                <tr>
                                    <td scope="row"></td>
                                    <td><span className="checkmark">&#10004;</span>In-depth Journal Consultation (2)</td>
                                    <td><span className="checkmark">&#10004;</span>Advanced Literature Search Guidance (4)</td>

                                </tr>

                                {/* <tr>
                                    <td scope="row"></td>
                                    <td><span className="checkmark">&#10004;</span>Advanced Literature Search Guidance (2)</td>
                                    <td><span className="checkmark">&#10004;</span>Grant Proposal Guidance (2)</td>
                                   
                                </tr>

                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td><span className="checkmark">&#10004;</span>Statistical Analysis Consultation (2)</td>
                                    
                                </tr>

                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td><span className="checkmark">&#10004;</span>One-on-one Research Strategy Session (3)</td>
                                    
                                </tr>

                              

                                <tr>
                                    <td scope="row"></td>
                                    
                                </tr> */}



                            </tbody>

                        </table>

                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>
                            <a href="" className='dtbtn' style={{ marginRight: "8px" }}>See Samples</a>

                            <a href="" className='dtbtn'>View More</a>
                        </div>
                    </div>

                    <div id="FifthTab" className="tabcontent" style={{ display: activeTab === 'FifthTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ color: "#a31e22" }}>Pre-PhD</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>1st year PhD (1-2 year)</th>
                                    <th scope="col" style={{ color: "#a31e22", width: "200px" }}>Mid PhD (3rd-4th year)</th>
                                    <th scope="col" style={{ color: "#a31e22", width: '231px' }}>Last Stage PhD(5-6th year)</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Patent assistance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row"> <span className="checkmark">&#10004;</span>  PhD topic consultation</td>
                                    <td><span className="checkmark">&#10004;</span> PhD topic consultation and selection</td>
                                    <td> <span className="checkmark">&#10004;</span> Statistical analysis using SPSS/Data analysis</td>
                                    <td><span className="checkmark">&#10004;</span>Journal Manuscript framework preparation</td>
                                    <td><span className="checkmark">&#10004;</span>Initial Consultation and Invention Disclosure</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>PhD topic selection & proposal help</td>
                                    <td><span className="checkmark">&#10004;</span> Guidance on developing a project proposal</td>
                                    <td><span className="checkmark">&#10004;</span> Research design consultation</td>
                                    <td><span className="checkmark">&#10004;</span>Thesis review</td>
                                    <td><span className="checkmark">&#10004;</span>Patent Search</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Choosing subject field guidance</td>
                                    <td><span className="checkmark">&#10004;</span>Writing assistance for scholarship proposals and grant applications</td>
                                    <td><span className="checkmark">&#10004;</span>Questionnaire development</td>
                                    <td><span className="checkmark">&#10004;</span> Dedicated expert as a mentor for final review</td>
                                    <td><span className="checkmark">&#10004;</span>Drafting the Patent Application</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Webinars and workshops on research trends and application processes</td>
                                    <td><span className="checkmark">&#10004;</span> Research coursework support and test preparation</td>
                                    <td> <span className="checkmark">&#10004;</span>Conference poster assistance</td>
                                    <td><span className="checkmark">&#10004;</span> Workshop on manuscript submission and publication process</td>
                                    <td><span className="checkmark">&#10004;</span> Patent Review and Feedback</td>


                                </tr>

                                {/* <tr>
                                    <td scope="row"></td>
                                    <td><span className="checkmark">&#10004;</span>Assistance with preparing and presenting synopsis seminar and report</td>
                                    <td><span className="checkmark">&#10004;</span>Conference abstract assistance</td>
                                    <td><span className="checkmark">&#10004;</span>Post doctorate application help</td>
                                    <td><span className="checkmark">&#10004;</span>Filing the Patent Application</td>
                                </tr>

                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td><span className="checkmark">&#10004;</span>Oral presentation assistance</td>
                                    <td><span className="checkmark">&#10004;</span> Cover letter assistance</td>
                                    <td><span className="checkmark">&#10004;</span> Patent Examination Process</td>
                                </tr>


                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td></td>
                                    <td><span className="checkmark">&#10004;</span> LinkedIn profile upgrade help</td>
                                </tr>

                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td></td>
                                    <td><span className="checkmark">&#10004;</span>Resume making assistance</td>
                                </tr> */}





                            </tbody>
                        </table>

                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>
                            <a href="" className='dtbtn' style={{ marginRight: "8px" }}>See Samples</a>

                            <a href="" className='dtbtn'>View More</a>
                        </div>
                    </div>







                </div>
            </div>

        </>
    );
};

export default GetHelp;
