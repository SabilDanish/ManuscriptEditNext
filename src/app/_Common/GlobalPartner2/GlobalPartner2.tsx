import { useState } from 'react';
import "./Globalpartner21.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEdit,
    faFileAlt,
    faChartLine,
    faComments,
    faBookOpen,
    faTools,
    faFileContract,
    faChartPie,
    faBullhorn,
    faFlag,
    faSitemap,
    faLightbulb,
    faCopy,
    faUserFriends,
    faFileSignature,
    faGlobe,
    faKeyboard,
    faVideo,
    faProjectDiagram,
    faPeopleArrows,
    faMicrophone,
    faUserCog,
    faUserShield,
    faUniversity,
} from '@fortawesome/free-solid-svg-icons';

const GlobalPartners2 = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { id: 'tab1', label: 'Universities and Research Institutions' },
        { id: 'tab2', label: 'Corporations and Industry' },
        { id: 'tab3', label: 'Research Laboratories and Innovators' },
        { id: 'tab4', label: 'Journals and Publishers' },
        { id: 'tab5', label: 'E-Courses and Online Education Providers' },
        { id: 'tab6', label: 'Webinars and Conferences' },
        { id: 'tab7', label: 'Funding Organizations' },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'tab1': // Universities and Research Institutions
                return (
                    <div className="tab-content">
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faEdit} className="icon" />
                            <h3>Academic Editing Services</h3>
                            <p>Ensure research clarity, precision, and consistency.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faFileAlt} className="icon" />
                            <h3>Manuscript Development</h3>
                            <p>Transform research into impactful published work.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faChartLine} className="icon" />
                            <h3>Journal Selection Support</h3>
                            <p>Identify journals aligned with your study.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faComments} className="icon" />
                            <h3>Grant Proposal Writing</h3>
                            <p>Craft persuasive funding applications and reports.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faBookOpen} className="icon" />
                            <h3>Thesis Formatting and Review</h3>
                            <p>Align academic work with institutional guidelines.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faTools} className="icon" />
                            <h3>Workshops and Training Programs</h3>
                            <p>Upskill researchers in writing and publishing.</p>
                        </div>
                    </div>
                );
            case 'tab2': // Corporations and Industry
                return (
                    <div className="tab-content">
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faFileContract} className="icon" />
                            <h3>Technical Document Editing</h3>
                            <p>Polish business reports and technical documents.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faChartPie} className="icon" />
                            <h3>Whitepaper Development</h3>
                            <p>Showcase expertise through comprehensive industry papers.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faBullhorn} className="icon" />
                            <h3>Market Report Writing</h3>
                            <p>Deliver precise insights for strategic decisions.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faFlag} className="icon" />
                            <h3>Corporate Communication Support</h3>
                            <p>Strengthen internal and external messaging flow.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faSitemap} className="icon" />
                            <h3>Annual Report Editing</h3>
                            <p>Ensure compliance and enhance report readability.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faLightbulb} className="icon" />
                            <h3>Branding Content Services</h3>
                            <p>Create impactful brochures and web content.</p>
                        </div>
                    </div>
                );
            case 'tab3': // Research Laboratories and Innovators
                return (
                    <div className="tab-content">
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faCopy} className="icon" />
                            <h3>Manuscript Submission Services</h3>
                            <p>Navigate complex submission processes with ease.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faChartLine} className="icon" />
                            <h3>Data Visualization Design</h3>
                            <p>Turn complex data into clear visuals.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faFileSignature} className="icon" />
                            <h3>Lab Report Editing</h3>
                            <p>Refine reports for precise communication.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faFlag} className="icon" />
                            <h3>Scientific Poster Preparation</h3>
                            <p>Design eye-catching, informative research posters.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faUserFriends} className="icon" />
                            <h3>Co-Author Support</h3>
                            <p>Collaborate efficiently on multi-authored papers.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faComments} className="icon" />
                            <h3>Journal Revisions Assistance</h3>
                            <p>Address reviewer comments with expert guidance.</p>
                        </div>
                    </div>
                );
            case 'tab4': // Journals and Publishers
                return (
                    <div className="tab-content">
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faKeyboard} className="icon" />
                            <h3>Copyediting Services</h3>
                            <p>Maintain style and consistency across publications.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faUniversity} className="icon" />
                            <h3>Journal Issue Management</h3>
                            <p>Coordinate end-to-end publishing workflows.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faUserCog} className="icon" />
                            <h3>Peer Review Coordination</h3>
                            <p>Ensure thorough, unbiased manuscript reviews.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faGlobe} className="icon" />
                            <h3>Translation Services</h3>
                            <p>Expand reach with multilingual content support.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
                            <h3>Digital Publishing Solutions</h3>
                            <p>Prepare content for diverse online platforms.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faPeopleArrows} className="icon" />
                            <h3>Editorial Training Programs</h3>
                            <p>Empower teams with editorial best practices.</p>
                        </div>
                    </div>
                );
            case 'tab5': // E-Courses and Online Education Providers
                return (
                    <div className="tab-content">
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faBookOpen} className="icon" />
                            <h3>Course Module Development</h3>
                            <p>Create engaging, interactive learning modules.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faUserCog} className="icon" />
                            <h3>Instructional Design Support</h3>
                            <p>Align content with best teaching practices.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faChartLine} className="icon" />
                            <h3>Assessment and Quiz Creation</h3>
                            <p>Develop tests to enhance student learning.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faVideo} className="icon" />
                            <h3>Video Script Writing</h3>
                            <p>Craft clear, concise instructional videos.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faGlobe} className="icon" />
                            <h3>LMS Integration Support</h3>
                            <p>Format courses for seamless LMS deployment.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faPeopleArrows} className="icon" />
                            <h3>Content Localization Services</h3>
                            <p>Customize materials for diverse audiences.</p>
                        </div>
                    </div>
                );

            case 'tab6': // Webinars and Conferences
                return (
                    <div className="tab-content">
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faProjectDiagram} className="icon" />
                            <h3>Event Content Development</h3>
                            <p>Prepare scripts, brochures, and presentation decks.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faMicrophone} className="icon" />
                            <h3>Speaker Support Services</h3>
                            <p>Polish speaker scripts for effective delivery.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faBullhorn} className="icon" />
                            <h3>Conference Marketing Campaigns</h3>
                            <p>Drive registrations with targeted promotions.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faKeyboard} className="icon" />
                            <h3>Real-Time Transcription Services</h3>
                            <p>Provide live captions for events.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faFileAlt} className="icon" />
                            <h3>Post-Event Documentation</h3>
                            <p>Summarize outcomes and key insights effectively.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faFlag} className="icon" />
                            <h3>PR and Media Engagement</h3>
                            <p>Amplify event reach through strategic media.</p>
                        </div>
                    </div>
                );
            case 'tab7': // Funding Organizations
                return (
                    <div className="tab-content">
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faFileSignature} className="icon" />
                            <h3>Grant Proposal Review</h3>
                            <p>Refine applications for better funding outcomes.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faChartPie} className="icon" />
                            <h3>Impact Report Writing</h3>
                            <p>Showcase measurable outcomes of funded projects.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faComments} className="icon" />
                            <h3>Public Engagement Content</h3>
                            <p>Craft communication for outreach initiatives.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faGlobe} className="icon" />
                            <h3>Translation and Localization Services</h3>
                            <p>Tailor content for global impact.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faChartLine} className="icon" />
                            <h3>Data-Driven Reporting</h3>
                            <p>Use visuals to showcase project performance.</p>
                        </div>
                        <div className="card-globalpartner">
                            <FontAwesomeIcon icon={faUserFriends} className="icon" />
                            <h3>Partner Communication Support</h3>
                            <p>Strengthen engagement with stakeholders.</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };



    return (
        <div className="container container21" style={{ marginTop: "30px", marginBottom: "40px" }}>
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-link ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {renderContent()}
        </div>
    );
};

export default GlobalPartners2;
