"use client";
import { useState, useEffect } from 'react';
import './PhdThesis.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const PhdThesis = () => {
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

            <div className='GetEveryHead'>
                <h2 className='TitleAll' style={{ textAlign: 'center', marginTop: '3rem' }}>Avail Tailored PhD Subscription Services</h2>
                <p style={{ textAlign: 'center' }}>Overcome your PhD hurdles with ease. From initial topic selection to postdoctoral applications, ManuscriptEdit delivers precise, expert-driven solutions tailored to each phase of your PhD.</p>
            </div>

            <div className="container-fluid GetEveryHead" style={{ marginTop: "23px", marginBottom: "30px" }}>
                <div className="row" style={{ margin: "auto", justifyContent: "center" }}>
                    <div className="tab">
                        <button
                            className={`tablinks ${activeTab === 'firstTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'firstTab')}
                            id="defaultOpen"
                        >
                            Pre-PHD Yearly Subscription
                        </button>
                        <button
                            className={`tablinks ${activeTab === 'secondTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'secondTab')}
                        >
                            Early Year Yearly Subscription
                        </button>
                        <button
                            className={`tablinks ${activeTab === 'thirdTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'thirdTab')}
                        >
                            Mid-PHD Yearly Subscription
                        </button>
                        <button
                            className={`tablinks ${activeTab === 'FourthTab' && 'active'}`}
                            onClick={(event) => openTab(event, 'FourthTab')}
                        >
                            Last Year Yearly Subscription
                        </button>
                    </div>

                    <div id="firstTab" className="tabcontent" style={{ display: activeTab === 'firstTab' ? 'block' : 'none' }}>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr style={{ textAlign: 'center' }}>
                                        <th scope="col" style={{ color: "#a31e22" }}>Subscription Package</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Core Services</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Add-On Services</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Free Services with Subscription</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Discounted Services</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">PhD topic consultation</td>
                                        <td>Yes</td>
                                        <td>Assistance in selecting Organizations/Universities</td>
                                        <td>Two additional one-to-one mentorship sessions</td>
                                        <td>Extra one revision of the proposal</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">PhD topic selection proposal help</td>
                                        <td>Yes</td>
                                        <td>Assisting in finding supervisors</td>
                                        <td>Free access to exclusive webinars</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Choosing subject field guidance</td>
                                        <td>Yes</td>
                                        <td>One-to-one mentorship sessions (two)</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Webinars and workshops on research trends and application processes</td>
                                        <td>Yes</td>
                                        <td>Additional sessions at discounted rates</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>
                            <span>
                                <Link href="https://www.secure.manuscriptedit.com/register" className='dtbtn'>Know more</Link>
                               
                            </span>
                        </div>
                    </div>

                    {/* <!-- Repeat the same structure for other tabs --> */}

                    <div id="secondTab" className="tabcontent" style={{ display: activeTab === 'secondTab' ? 'block' : 'none' }}>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr style={{ textAlign: 'center' }}>
                                        <th scope="col" style={{ color: "#a31e22" }}>Subscription Package</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Core Services</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Add-On Services</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Free Services with Subscription</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Discounted Services</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">PhD topic consultation and selection</td>
                                        <td>Yes</td>
                                        <td>Academic Writing Proposal Workshops</td>
                                        <td>Two Mentorship Sessions for Proposal Writing</td>
                                        <td>Additional peer review sessions</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Guidance on developing a project proposal</td>
                                        <td>Yes</td>
                                        <td>Access to webinars on research methodologies data analysis</td>
                                        <td>Support with registration seminar preparation</td>
                                        <td>Extra mentorship sessions at reduced rates</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Writing assistance for scholarship proposals and grant applications</td>
                                        <td>Yes</td>
                                        <td>Peer review for academic writings & proposals</td>
                                        <td>1 comprehensive review feedback session</td>
                                        <td>Advanced statistical consultation</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Research coursework support and test preparation</td>
                                        <td>Yes</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                    </tr>

                                    <tr>
                                        <td scope="row">Assistance with preparing and presenting synopsis seminar and report</td>
                                        <td>Yes</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>
                            <span>
                                <Link href="https://www.secure.manuscriptedit.com/register" className='dtbtn'>Know more</Link>
                               
                            </span>
                        </div>
                    </div>

                    <div id="thirdTab" className="tabcontent" style={{ display: activeTab === 'thirdTab' ? 'block' : 'none' }}>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr style={{ textAlign: 'center' }}>
                                        <th scope="col" style={{ color: "#a31e22" }}>Subscription Package</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Core Services</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Add-On Services</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Free Services with Subscription</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Discounted Services</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">Statistical analysis using SPSS/Data analysis</td>
                                        <td>Yes</td>
                                        <td>PhD Mentorship Access</td>
                                        <td>Access to specific research methodology workshops</td>
                                        <td>Ongoing mentorship at a reduced rate</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Research design consultation</td>
                                        <td>Yes</td>
                                        <td>Peer review of manuscript</td>
                                        <td>1 additional peer review of the manuscript</td>
                                        <td>Special sessions on data interpretation analysis</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Questionnaire development</td>
                                        <td>Yes</td>
                                        <td>Progress report making</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Conference poster</td>
                                        <td>Yes</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                    </tr>

                                    <tr>
                                        <td scope="row">Conference abstract</td>
                                        <td>Yes</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                    </tr>

                                    <tr>
                                        <td scope="row">Oral presentation</td>
                                        <td>Yes</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                        <td>NA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>
                            <span>
                                <Link href="https://www.secure.manuscriptedit.com/register" className='dtbtn'>Know more</Link>
                               
                            </span>
                        </div>
                    </div>

                    <div id="FourthTab" className="tabcontent" style={{ display: activeTab === 'FourthTab' ? 'block' : 'none' }}>
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr style={{ textAlign: 'center' }}>
                                        <th scope="col" style={{ color: "#a31e22" }}>Subscription Package</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Core Services</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Add-On Services</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Free Services with Subscription</th>
                                        <th scope="col" style={{ color: "#a31e22" }}>Discounted Services</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">Journal Manuscript framework preparation</td>
                                        <td>Yes</td>
                                        <td>Additional Thesis /Manuscript Peer Review</td>
                                        <td>Post doctorate application help</td>
                                        <td>Affordable Editing Proofreading</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Thesis review</td>
                                        <td>Yes</td>
                                        <td>Extended mentorship for publication strategy</td>
                                        <td>Cover letter</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Dedicated expert as a mentor for final review</td>
                                        <td>Yes</td>
                                        <td>NA</td>
                                        <td>Resume making</td>
                                        <td>NA</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">Workshop on manuscript submission and publication process</td>
                                        <td>Yes</td>
                                        <td>NA</td>
                                        <td>Research portfolio development</td>
                                        <td>NA</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="donate-btn-header1" style={{ textAlign: "end" }}>
                            <span>
                                <Link href="https://www.secure.manuscriptedit.com/register" className='dtbtn'>Know more</Link>
                               
                            </span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}




export default PhdThesis;
