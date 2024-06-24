"use client";
import { useState, useEffect } from 'react';
import './getHelp.css';
import Link from 'next/link';

const GetHelp = () => {
    const [activeTab, setActiveTab] = useState('firstTab');

    const openTab = (evt: any, cityName: string) => {
        setActiveTab(cityName);
    };

    //   useEffect(() => {
    //     // Simulate a click on the default tab when the component mounts
    //     document.getElementById("defaultOpen").click();
    //   }, []);

    return (
        <>

            <div className='GetEveryHead' >
                <h2 className='TitleAll' style={{ textAlign: 'center', marginTop: '3rem' }}>FEELING CONFUSED WHAT TO OPT FOR?</h2>
                <p style={{ textAlign: 'center' }}>Choose Your issues, Let ManuscriptEdit HELP YOU</p>
            </div>

            <div className="container-fluid GetEveryHead" style={{ marginTop: "23px", marginBottom: "30px" }}>
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
                            I am facing difficulty in getting grants and developing Research projects.Need Help?
                        </button>


                        <button
                            className={`tablinks ${activeTab === 'FifthTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'FifthTab')}
                        >
                            I am struggling with my PhD and PhD thesis. Can someone guide me?
                        </button>
                    </div>

                    <div id="firstTab" className="tabcontent" style={{ display: activeTab === 'firstTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered ">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th scope="col" style={{ color: "#a31e22" }}>Medical Writing</th>
                                    <th scope="col" style={{ color: "#a31e22", width: "235px" }}>Scientific Writing</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Statistical Analysis</th>
                                    <th scope="col" style={{ color: "#a31e22", width: '296px' }}>Systematic Review & Meta Analysis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td scope="row"> <span className="checkmark">&#10004;</span>Manuscript Writing &amp; Editing</td>
                                    <td><span className="checkmark">&#10004;</span>Manuscript Preparation</td>
                                    <td>
                                        <ul>
                                            <strong><li className='Headingli'><span className="checkmarkli">&#10004;</span>Data Preparation :-</li></strong>
                                            <li><span className="checkmark">&#10004;</span> Data Cleaning</li>
                                            <li><span className="checkmark">&#10004;</span> Descriptive Statistics</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <strong><li className='Headingli'><span className="checkmarkli">&#10004;</span>Systematic Review:-</li></strong>
                                            <li><span className="checkmark">&#10004;</span> Literature Search</li>
                                            <li><span className="checkmark">&#10004;</span> Data Extraction</li>
                                            {/* <li><span className="checkmark">&#10004;</span> Quality Assessment</li>
                                            <li><span className="checkmark">&#10004;</span> Narrative Synthesis</li> */}
                                        </ul>
                                    </td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Clinical Study Reports</td>
                                    <td><span className="checkmark">&#10004;</span> Literature Reviews</td>
                                    <td>
                                        <ul>
                                            <strong><li className='Headingli'><span className="checkmarkli">&#10004;</span>Advanced Analysis:-</li></strong>
                                            <li><span className="checkmark">&#10004;</span> Regression Analysis</li>
                                            <li><span className="checkmark">&#10004;</span> ANOVA</li>
                                            {/* <li><span className="checkmark">&#10004;</span> Multivariate Analysis</li> */}
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <strong><li className='Headingli'><span className="checkmarkli">&#10004;</span>Meta-Analysis:-</li></strong>
                                            <li><span className="checkmark">&#10004;</span> Statistical Analysis</li>
                                            <li><span className="checkmark">&#10004;</span> Forest Plots</li>
                                            {/* <li><span className="checkmark">&#10004;</span>Heterogeneity Assessment</li> */}
                                        </ul>
                                    </td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Regulatory Writing</td>
                                    <td><span className="checkmark">&#10004;</span>Grant Proposals</td>
                                    <td>
                                        <ul>
                                            <strong><li className='Headingli'><span className="checkmarkli">&#10004;</span>Specialized Techniques:-</li></strong>
                                            <li><span className="checkmark">&#10004;</span> Survival Analysis</li>
                                            <li><span className="checkmark">&#10004;</span> Time Series Analysis</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            <strong><li className='Headingli'><span className="checkmarkli">&#10004;</span>Reporting:-</li></strong>
                                            <li><span className="checkmark">&#10004;</span> PRISMA Diagram</li>
                                            <li><span className="checkmark">&#10004;</span> Manuscript Preparation</li>
                                            {/* <li><span className="checkmark">&#10004;</span> Journal Submission</li> */}
                                        </ul>
                                    </td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Medical Communications</td>
                                    <td><span className="checkmark">&#10004;</span>Technical Reports</td>
                                    <td>
                                        <ul>
                                            <strong><li className='Headingli'><span className="checkmarkli">&#10004;</span>Report & Visualization:-</li></strong>
                                            <li><span className="checkmark">&#10004;</span> Data Visualization</li>
                                            <li><span className="checkmark">&#10004;</span> Statistical Reporting</li>
                                        </ul>
                                    </td>
                                   


                                </tr>

                                {/* <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Systematic Reviews</td>
                                    <td><span className="checkmark">&#10004;</span>Research Summaries</td>


                                </tr>


                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Grant Writing</td>
                                    <td><span className="checkmark">&#10004;</span>Conference Abstracts</td>


                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Patient Case Reports</td>
                                    <td><span className="checkmark">&#10004;</span>Scientific Presentations</td>


                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Medical Education Content</td>



                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>White Papers</td>



                                </tr>
 */}








                            </tbody>
                        </table>

                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>


                            <Link href="/Writing" className='dtbtn'>View More</Link>
                        </div>
                    </div>

                    <div id="secondTab" className="tabcontent" style={{ display: activeTab === 'secondTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered ">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th scope="col" style={{ color: "#a31e22" }}>Standard Package</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Advanced Package</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Premium Package</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Premium + Package</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row"> <span className="checkmark">&#10004;</span>Peer Review Analysis</td>
                                    <td><span className="checkmark">&#10004;</span>Peer Review Analysis</td>
                                    <td> <span className="checkmark">&#10004;</span>Peer Review Analysis</td>
                                    <td><span className="checkmark">&#10004;</span>Peer Review Analysis</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Journal Selection</td>
                                    <td><span className="checkmark">&#10004;</span> Substantive Editing</td>
                                    <td><span className="checkmark">&#10004;</span> Substantive Editing</td>
                                    <td><span className="checkmark">&#10004;</span>Data Analysis</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Target Journal Formatting</td>
                                    <td><span className="checkmark">&#10004;</span>Journal Selection</td>
                                    <td><span className="checkmark">&#10004;</span>Journal Selection</td>
                                    <td><span className="checkmark">&#10004;</span> Research Paper Writing</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Cover Letter writing</td>
                                    <td><span className="checkmark">&#10004;</span>Target Journal Formatting.</td>
                                    <td> <span className="checkmark">&#10004;</span>Target Journal Formatting</td>
                                    <td><span className="checkmark">&#10004;</span> Substantive Editing</td>


                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Unlimited Assistance</td>
                                    <td><span className="checkmark">&#10004;</span>Journal Submission</td>
                                    <td><span className="checkmark">&#10004;</span>Artwork Formatting</td>
                                    <td><span className="checkmark">&#10004;</span>Journal Selection</td>
                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Journal Submission</td>
                                    <td><span className="checkmark">&#10004;</span>Cover Letter writing</td>
                                    <td><span className="checkmark">&#10004;</span>Journal Submission</td>
                                    <td><span className="checkmark">&#10004;</span>Journal Submission</td>

                                </tr>

                                <tr>
                                    <td scope="row"></td>
                                    <td><span className="checkmark">&#10004;</span>Plagiarism Check</td>
                                    <td>
                                        <ul>
                                            <li><span className="checkmark">&#10004;</span>Response to Reviewers*</li>
                                            <li>(*One response to reviewer free)</li>
                                        </ul>
                                        
                                        </td>
                                    <td><span className="checkmark">&#10004;</span>Target Journal Formatting</td>

                                </tr>

                                <tr>
                                    <td scope="row"></td>
                                    <td><span className="checkmark">&#10004;</span>Unlimited Assistance</td>
                                    <td><span className="checkmark">&#10004;</span>Cover Letter Writing</td>
                                    <td><span className="checkmark">&#10004;</span>Artwork Formatting</td>
                                </tr>

                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td><span className="checkmark">&#10004;</span>Plagiarism Check</td>
                                    <td><span className="checkmark">&#10004;</span>Response To Reviewer</td>
                                </tr>

                                <tr>
                                    <td scope="row"></td>
                                    <td></td>
                                    <td><span className="checkmark">&#10004;</span>Unlimited Assistance</td>
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


                            <Link href="/PackageService" className='dtbtn'>View More</Link>
                        </div>
                    </div>

                    <div id="thirdTab" className="tabcontent" style={{ display: activeTab === 'thirdTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered ">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th scope="col" style={{ color: "#a31e22" }}>Standard Editing</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Advanced Editing</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Premium Editing</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Scientific Editing</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row"> <span className="checkmark">&#10004;</span> Language Check</td>
                                    <td><span className="checkmark">&#10004;</span> Language Precision</td>
                                    <td><span className="checkmark">&#10004;</span> Advanced Editing</td>
                                    <td><span className="checkmark">&#10004;</span> Premium Editing</td>
                                    


                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Word Count Reduction</td>
                                    <td><span className="checkmark">&#10004;</span> Logic Fix</td>
                                    <td><span className="checkmark">&#10004;</span>Response Letter Editing</td>
                                    <td><span className="checkmark">&#10004;</span> Manuscript Assessment</td>


                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Spelling Check</td>
                                    <td><span className="checkmark">&#10004;</span>Word Count Reduction</td>
                                    <td><span className="checkmark">&#10004;</span> Crosschecking Responses</td>
                                    <td><span className="checkmark">&#10004;</span>Scientific Review</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Grammar Check</td>
                                    <td><span className="checkmark">&#10004;</span> Cover Letter</td>
                                    <td><span className="checkmark">&#10004;</span> Manuscript Formatting</td>
                                    <td><span className="checkmark">&#10004;</span> Re-editing Support</td>


                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Editing Certificate</td>
                                    <td><span className="checkmark">&#10004;</span> Editing Certificate</td>
                                    <td><span className="checkmark">&#10004;</span> Editing Certificate</td>
                                    <td><span className="checkmark">&#10004;</span>Editing Certificate</td>


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


                            <Link href="/EditingOverview" className='dtbtn'>View More</Link>
                        </div>
                    </div>


                    <div id="FourthTab" className="tabcontent" style={{ display: activeTab === 'FourthTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered ">
                            <thead>
                                <tr style={{ textAlign: 'center' }}>
                                    <th scope="col" style={{ color: "#a31e22" }}>Basic</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Advanced</th>
                                    <th scope="col" style={{ color: "#a31e22" }}>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row"> <span className="checkmark">&#10004;</span>  Grant Search Assistance</td>
                                    <td><span className="checkmark">&#10004;</span>Detailed Grant Search</td>
                                    <td> <span className="checkmark">&#10004;</span> Customized Grant Search</td>
                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Proposal Writing</td>
                                    <td><span className="checkmark">&#10004;</span> Proposal Writing &amp; Review</td>
                                    <td><span className="checkmark">&#10004;</span>  Full Proposal Development</td>


                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Budget Planning</td>
                                    <td><span className="checkmark">&#10004;</span>Comprehensive Budget Planning</td>
                                    <td><span className="checkmark">&#10004;</span>Advanced Budget Planning</td>


                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Project Outline Development</td>
                                    <td><span className="checkmark">&#10004;</span> Project Management Plan</td>
                                    <td> <span className="checkmark">&#10004;</span>Project Strategy Consultation</td>



                                </tr>

                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Editing Consultation</td>
                                    <td><span className="checkmark">&#10004;</span>Editing and Formatting</td>
                                    <td><span className="checkmark">&#10004;</span>Ongoing Support &amp; Revisions</td>

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


                            <Link href="/ResearchSupportOverview" className='dtbtn'>View More</Link>
                        </div>
                    </div>

                    <div id="FifthTab" className="tabcontent" style={{ display: activeTab === 'FifthTab' ? 'block' : 'none' }}>
                        <table className="table table-bordered ">
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
                                    <td scope="row"> <span className="checkmark">&#10004;</span>  PhD Topic Consultation</td>
                                    <td><span className="checkmark">&#10004;</span> Concept Paper Development</td>
                                    <td> <span className="checkmark">&#10004;</span> Review of Literature</td>
                                    <td><span className="checkmark">&#10004;</span>Data Analysis</td>
                                    <td><span className="checkmark">&#10004;</span>Writing Support</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>PhD Project Proposal Writing</td>
                                    <td><span className="checkmark">&#10004;</span> Guidance on Developing a Project Proposal</td>
                                    <td><span className="checkmark">&#10004;</span> Questionnaire Development</td>
                                    <td><span className="checkmark">&#10004;</span>Thesis Writing Assistance</td>
                                    <td><span className="checkmark">&#10004;</span>Proofreading</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Choosing Subject Field Guidance</td>
                                    <td><span className="checkmark">&#10004;</span>Writing Assistance for Scholarship Proposals and Grant Applications</td>
                                    <td><span className="checkmark">&#10004;</span>Statistical Analysis Using SPSS/Data Analysis</td>
                                    <td><span className="checkmark">&#10004;</span> PhD Mock Viva Assistance</td>
                                    <td><span className="checkmark">&#10004;</span>Dedicated Expert Mentor for Final Review</td>

                                </tr>
                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Webinars and Workshops on Research Trends</td>
                                    <td><span className="checkmark">&#10004;</span> Literature Review and Data Collection Support</td>
                                    <td> <span className="checkmark">&#10004;</span>Research Design Consultation</td>
                                    <td><span className="checkmark">&#10004;</span> Writing and Submission of Second Indexed Paper</td>
                                    <td><span className="checkmark">&#10004;</span> Workshop on Manuscript Submission and Publication Process</td>


                                </tr>


                                <tr>
                                    <td scope="row"><span className="checkmark">&#10004;</span>Problem Statement Formulation</td>
                                    <td><span className="checkmark">&#10004;</span> Initial Data Analysis</td>
                                    <td><span className="checkmark">&#10004;</span> Writing and Submission of First Indexed Paper</td>
                                    <td><span className="checkmark">&#10004;</span> Thesis Review and Feedback</td>
                                    <td><span className="checkmark">&#10004;</span> Defense Preparation and Methodology Consultation</td>
                                   


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


                            <Link href="/PHDThesis" className='dtbtn'>View More</Link>
                        </div>
                    </div>







                </div>
            </div>

        </>
    );
};

export default GetHelp;
