"use client";
import { useState, useEffect } from 'react';
import './getHelp.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faWeight } from '@fortawesome/free-solid-svg-icons';
import { data } from '@/app/utils/tab';
import GetEveryPortion from '../getEveryPortion/GetEveryPortion';

type TabKeys = "PhD Support Services" | "JOR@ME"

const GetHelp = () => {
    const [activeTab, setActiveTab] = useState<string>('firstTab');
    const [selectedTab, setSelectedTab] = useState<string>("PhD Support Services")
    const [tabData, setTabData] = useState<any>()

    const openTab = (evt: any, cityName: string) => {
        setActiveTab(cityName);
    };


    useEffect(() => {
        setTabData(data[selectedTab as keyof typeof data])
    },[selectedTab])

    return (
        <>
            <div className="getWrap" style={{background:"#EEF6FF" , padding:"30px"}}>
                <div className='GetEveryHead' >
                    <h2 className='TitleAll' style={{ textAlign: 'center', marginTop: '3rem' }}>Some of our services</h2>
                </div>

                <div className="container-fluid GetEveryHead" style={{ marginTop: "23px", marginBottom: "30px" }}>
                    <div className="row" style={{ margin: "auto", justifyContent: "center" }}>
                        <div className="tab">

                            <button style={{ marginTop: "0px", marginBottom: "0px", textAlign: "center", fontWeight: "600", color: "var(--color-title)", borderBottom: "1px solid aliceblue;", fontSize: "16px" }}>
                                All Services
                            </button>


                            <button
                                className={`tablinks ${activeTab === 'firstTab' && 'active'}`}
                                onClick={(event) => {
                                    openTab(event, 'firstTab')
                                    setSelectedTab("PhD Support Services")
                                }}
                                id="defaultOpen"
                            >
                                PhD Support Services
                            </button>
                            <button
                                className={`tablinks ${activeTab === 'secondTab' && 'active'}`}
                                onClick={(event) => {
                                    openTab(event, 'secondTab')
                                    setSelectedTab("Researcher Support Services")
                                }}
                            >
                               Researcher Support Services
                            </button>
                            <button
                                className={`tablinks ${activeTab === 'thirdTab' && 'active'}`}
                                onClick={(event) => openTab(event, 'thirdTab')}
                            >
                                Global Business Expansion CORP@ME
                            </button>

                            <button
                                className={`tablinks ${activeTab === 'FourthTab' && 'active'}`}
                                onClick={(event) => openTab(event, 'FourthTab')}
                            >
                                Comprehensive Academic Support UNIV@ME
                            </button>


                            <button
                                className={`tablinks ${activeTab === 'FifthTab' && 'active'}`}
                                onClick={(event) => openTab(event, 'FifthTab')}
                            >
                               Scientific Writing Excellence LAB@ME
                            </button>

                            <button
                                className={`tablinks ${activeTab === 'SixthTab' && 'active'}`}
                                onClick={(event) => openTab(event, 'SixthTab')}
                            >
                               Comprehensive Journal Support JOR@ME
                            </button>
                        </div>

                        <div id="firstTab" className="tabcontent" style={{ display: 'block' }}>

                            



                            {/* <div className="donate-btn-header1" style={{ textAlign: "end" }}>

                                <span><Link href="/Writing" className='dtbtn'>View More</Link> <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='dtbtn'><FontAwesomeIcon icon={faComment} /> Chat with us</Link></span>

                            </div> */}

                            {tabData && <GetEveryPortion tabData={tabData}/>}
                        </div>

                        {/* <div id="secondTab" className="tabcontent" style={{ display: activeTab === 'secondTab' ? 'block' : 'none' }}>
                            <table className="table table-bordered ">
                                <thead>
                                    <tr style={{ textAlign: 'center' }}>
                                        <th scope="col" style={{ color: "#a31e22" }}>Standard Package</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Advanced Package</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Premium Package</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Premium Plus Package</th>
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
                                        <td><span className="checkmark">&#10004;</span> Journal Selection</td>

                                    </tr>
                                    <tr>
                                        <td scope="row"><span className="checkmark">&#10004;</span>Cover Letter writing</td>
                                        <td><span className="checkmark">&#10004;</span>Target Journal Formatting.</td>
                                        <td> <span className="checkmark">&#10004;</span>Target Journal Formatting</td>
                                        <td><span className="checkmark">&#10004;</span> Target Journal Formatting</td>


                                    </tr>

                                    <tr>
                                        <td scope="row"><span className="checkmark">&#10004;</span>Journal Submission</td>
                                        <td><span className="checkmark">&#10004;</span>Cover Letter writing</td>
                                        <td><span className="checkmark">&#10004;</span>Artwork Formatting</td>
                                        <td><span className="checkmark">&#10004;</span>Artwork Formatting</td>
                                    </tr>

                                    <tr>
                                        <td scope="row"><span className="checkmark">&#10004;</span>Unlimited Assistance</td>
                                        <td><span className="checkmark">&#10004;</span>Journal Submission</td>
                                        <td><span className="checkmark">&#10004;</span>Cover Letter Writing</td>
                                        <td><span className="checkmark">&#10004;</span>Cover Letter Writing</td>

                                    </tr>

                                    <tr>
                                        <td scope="row"></td>
                                        <td><span className="checkmark">&#10004;</span>Plagiarism Check</td>
                                        <td><span className="checkmark">&#10004;</span>Journal Submission</td>
                                        <td><span className="checkmark">&#10004;</span>Journal Submission</td>

                                    </tr>

                                    <tr>
                                        <td scope="row"></td>
                                        <td><span className="checkmark">&#10004;</span>Unlimited Assistance</td>
                                        <td>
                                            <ul>
                                                <li><span className="checkmark">&#10004;</span>Response to Reviewers*</li>
                                                <li>(*One response to reviewer free)</li>
                                            </ul>

                                        </td>
                                        <td><span className="checkmark">&#10004;</span>Substantive Editing</td>
                                    </tr>

                                    <tr>
                                        <td scope="row"></td>
                                        <td></td>
                                        <td><span className="checkmark">&#10004;</span>Plagiarism Check</td>
                                        <td><span className="checkmark">&#10004;</span>Research Paper Writing</td>
                                    </tr>

                                    <tr>
                                        <td scope="row"></td>
                                        <td></td>
                                        <td><span className="checkmark">&#10004;</span>Unlimited Assistance</td>
                                        <td><span className="checkmark">&#10004;</span>Response To Reviewer</td>
                                    </tr>




                                </tbody>
                            </table>

                            <div className="donate-btn-header1" style={{ textAlign: "end" }}>


                                <span><Link href="/PackageService" className='dtbtn'>View More</Link> <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='dtbtn'><FontAwesomeIcon icon={faComment} /> Chat with us</Link></span>
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
                                        <td scope="row"><span className="checkmark">&#10004;</span>Spelling Check</td>
                                        <td><span className="checkmark">&#10004;</span> Clarity and Coherence Check</td>
                                        <td><span className="checkmark">&#10004;</span>Content and Structural Review</td>
                                        <td><span className="checkmark">&#10004;</span> Scientific Content and Structural review</td>


                                    </tr>
                                    <tr>
                                        <td scope="row"><span className="checkmark">&#10004;</span>Grammar Check</td>
                                        <td><span className="checkmark">&#10004;</span>Grammar check and spell check</td>
                                        <td><span className="checkmark">&#10004;</span> Editing Certificate</td>
                                        <td><span className="checkmark">&#10004;</span> Re-editing Support</td>

                                    </tr>
                                    <tr>
                                        <td scope="row"><span className="checkmark">&#10004;</span>Editing Certificate</td>
                                        <td><span className="checkmark">&#10004;</span> Cover Letter</td>
                                        <td></td>
                                        <td><span className="checkmark">&#10004;</span>Editing Certificate</td>


                                    </tr>

                                    <tr>

                                        <td></td>
                                        <td><span className="checkmark">&#10004;</span> Editing Certificate</td>



                                    </tr>



                                   






                                </tbody>
                            </table>

                            <div className="donate-btn-header1" style={{ textAlign: "end" }}>


                                <span><Link href="/EditingOverview" className='dtbtn'>View More</Link> <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='dtbtn'><FontAwesomeIcon icon={faComment} /> Chat with us</Link></span>
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



                                   



                                </tbody>

                            </table>

                            <div className="donate-btn-header1" style={{ textAlign: "end" }}>


                                <span><Link href="/ResearchSupportOverview" className='dtbtn'>View More</Link> <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='dtbtn'><FontAwesomeIcon icon={faComment} /> Chat with us</Link></span>
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
                                        <td><span className="checkmark">&#10004;</span>Data Analysis/ Statistical Analysis using SPSS;</td>
                                        <td><span className="checkmark">&#10004;</span> PhD Mock Viva Assistance</td>
                                        <td><span className="checkmark">&#10004;</span>Dedicated Expert Mentor for Final Review</td>

                                    </tr>
                                    <tr>
                                        <td scope="row"><span className="checkmark">&#10004;</span>Webinars and Workshops on Research Trends</td>
                                        <td><span className="checkmark">&#10004;</span> Literature Review and Data Collection Support</td>
                                        <td> <span className="checkmark">&#10004;</span>Research Design Consultation</td>
                                        <td><span className="checkmark">&#10004;</span> Writing and Submission of Second research Paper</td>
                                        <td><span className="checkmark">&#10004;</span> Workshop on Manuscript Submission and Publication Process</td>


                                    </tr>


                                    <tr>
                                        <td scope="row"><span className="checkmark">&#10004;</span>Problem Statement Formulation</td>
                                        <td><span className="checkmark">&#10004;</span> Initial Data Analysis</td>
                                        <td><span className="checkmark">&#10004;</span> Writing and Submission of First research Paper</td>
                                        <td><span className="checkmark">&#10004;</span> Thesis Review and Feedback</td>
                                        <td><span className="checkmark">&#10004;</span> Defense Preparation and Methodology Consultation</td>



                                    </tr>




                                    





                                </tbody>
                            </table>

                            <div className="donate-btn-header1" style={{ textAlign: "end" }}>


                                <span><Link href="/PHDThesis" className='dtbtn'>View More</Link> <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='dtbtn'><FontAwesomeIcon icon={faComment} /> Chat with us</Link></span>
                            </div>
                        </div>

                        <div id="SixthTab" className="tabcontent" style={{ display: activeTab === 'SixthTab' ? 'block' : 'none' }}>
                            <table className="table table-bordered ">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ color: "#a31e22" }}>Pre-PhD1</th>
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
                                        <td><span className="checkmark">&#10004;</span>Data Analysis/ Statistical Analysis using SPSS;</td>
                                        <td><span className="checkmark">&#10004;</span> PhD Mock Viva Assistance</td>
                                        <td><span className="checkmark">&#10004;</span>Dedicated Expert Mentor for Final Review</td>

                                    </tr>
                                    <tr>
                                        <td scope="row"><span className="checkmark">&#10004;</span>Webinars and Workshops on Research Trends</td>
                                        <td><span className="checkmark">&#10004;</span> Literature Review and Data Collection Support</td>
                                        <td> <span className="checkmark">&#10004;</span>Research Design Consultation</td>
                                        <td><span className="checkmark">&#10004;</span> Writing and Submission of Second research Paper</td>
                                        <td><span className="checkmark">&#10004;</span> Workshop on Manuscript Submission and Publication Process</td>


                                    </tr>


                                    <tr>
                                        <td scope="row"><span className="checkmark">&#10004;</span>Problem Statement Formulation</td>
                                        <td><span className="checkmark">&#10004;</span> Initial Data Analysis</td>
                                        <td><span className="checkmark">&#10004;</span> Writing and Submission of First research Paper</td>
                                        <td><span className="checkmark">&#10004;</span> Thesis Review and Feedback</td>
                                        <td><span className="checkmark">&#10004;</span> Defense Preparation and Methodology Consultation</td>



                                    </tr>




                                   





                                </tbody>
                            </table>

                            <div className="donate-btn-header1" style={{ textAlign: "end" }}>


                                <span><Link href="/PHDThesis" className='dtbtn'>View More</Link> <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='dtbtn'><FontAwesomeIcon icon={faComment} /> Chat with us</Link></span>
                            </div>
                        </div> */}






                    </div>
                </div>

            </div>


        </>
    );
};

export default GetHelp;



