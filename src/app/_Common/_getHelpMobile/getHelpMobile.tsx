import React from 'react';
import { useEffect } from 'react';
import './getHelpMobile.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';


const GetHelpMobile: React.FC = () => {
  useEffect(() => {
    const initializeSlider = (sliderContainer: any) => {
      const slides = sliderContainer.querySelectorAll('.slide');
      let currentIndex = 0;

      const showSlide = (index: any) => {
        const slideWidth = slides[0].clientWidth;
        sliderContainer.querySelector('.slider').style.transform = `translateX(${-index * slideWidth}px)`;
      };

      const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      };

      setInterval(nextSlide, 4000);
    };

    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach(initializeSlider);

    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
      item.addEventListener('shown.bs.collapse', () => {
        const sliderContainer = item.querySelector('.slider-container');
        if (sliderContainer) {
          initializeSlider(sliderContainer);
        }
      });
    });
  }, []);

  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className='GetEveryHeads' >
          <h2 className='TitleAll' style={{ textAlign: 'center', marginTop: '20px' }}>FEELING CONFUSED WHAT TO OPT FOR?</h2>
          <p style={{ textAlign: 'center' }}>Choose Your issues,<br /> Let ManuscriptEdit HELP YOU</p>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              My paper got rejected due to poor English, can you help? </button>
          </h5>
          <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="slider-container">
                <div className="slider">
                  <div className="slide">
                    <h5>Standard Editing</h5>
                    <ul>

                      <li>&#10004; Language Check</li>
                      <li>&#10004; Word Count Reduction</li>
                      <li>&#10004; Spelling Check</li>
                      <li>&#10004; Grammar Check</li>
                      <li>&#10004; Editing Certificate</li>


                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Advanced Editing</h5>
                    <ul>

                      <li>&#10004; Language Precision</li>
                      <li>&#10004; Logic Fix</li>
                      <li>&#10004; Word Count Reduction</li>
                      <li>&#10004; Cover Letter</li>
                      <li>&#10004; Editing Certificate</li>


                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Premium Editing</h5>
                    <ul>
                      <li>&#10004; Advanced Editing</li>
                      <li>&#10004; Response Letter Editing</li>
                      <li>&#10004; Crosschecking Responses</li>
                      <li>&#10004; Manuscript Formatting</li>
                      <li>&#10004; Editing Certificate</li>
                    </ul>

                  </div>
                  <div className="slide">
                    <h5>Scientific Editing</h5>
                    <ul>
                      <li>&#10004; Premium Editing</li>
                      <li>&#10004; Manuscript Assessment</li>
                      <li>&#10004; Scientific Review</li>
                      <li>&#10004; Re-editing Support</li>
                      <li>&#10004; Editing Certificate</li>
                    </ul>

                  </div>
                </div>
                <Link href="/EditingOverview" className="buttonv">View More</Link>
                <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='buttonv'><FontAwesomeIcon icon={faComment} /> Chat with us</Link>

              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              Can I get assistance in writing my Research Paper?
            </button>
          </h5>
          <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="slider-container">
                <div className="slider">
                  <div className="slide">
                    <h5>Medical Writing</h5>
                    <ul>
                      <li>&#10004; Manuscript Writing and Editing</li>
                      <li>&#10004; Clinical Study Reports</li>
                      <li>&#10004; Regulatory Writing</li>
                      <li>&#10004; Medical Communications</li>


                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Scientific Writing</h5>
                    <ul>
                      <li>&#10004; Manuscript Preparation</li>
                      <li>&#10004; Literature Reviews</li>
                      <li>&#10004; Grant Proposals</li>
                      <li>&#10004; Technical Reports</li>


                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Statistical Analysis</h5>
                    <ul>
                      <li><strong>Data Preparation</strong>:
                        <ul>
                          <li>&#10004; Data Cleaning</li>
                          <li>&#10004; Descriptive Statistics</li>
                        </ul>
                      </li>
                      <li><strong>Advanced Analysis</strong>:
                        <ul>
                          <li>&#10004; Regression Analysis</li>
                          <li>&#10004; ANOVA</li>
                        </ul>
                      </li>
                      <li><strong>Specialized Techniques</strong>:
                        <ul>
                          <li>&#10004; Survival Analysis</li>
                          <li>&#10004; Time Series Analysis</li>
                        </ul>
                      </li>
                      <li><strong>Report &amp; Visualization</strong>:
                        <ul>
                          <li>&#10004; Data Visualization</li>
                          <li>&#10004; Statistical Reporting</li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Systematic Review & Meta Analysis</h5>
                    <ul>
                      <li><strong>Systematic Review</strong>:
                        <ul>
                          <li>&#10004; Literature Search</li>
                          <li>&#10004; Data Extraction</li>
                        </ul>
                      </li>
                      <li><strong>Meta-Analysis</strong>:
                        <ul>
                          <li>&#10004; Statistical Analysis</li>
                          <li>&#10004; Forest Plots</li>
                        </ul>
                      </li>
                      <li><strong>Reporting</strong>:
                        <ul>
                          <li>&#10004; PRISMA Diagram</li>
                          <li>&#10004; Manuscript Preparation</li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </div>
                <Link href="/Writing" className="buttonv">View More</Link>
                <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='buttonv'><FontAwesomeIcon icon={faComment} /> Chat with us</Link>

              </div>
            </div>
          </div>

        </div>

        <div className="accordion-item">
          <h5 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
              aria-expanded="false" aria-controls="collapseTwo">
              I'm struggling to publish my research paper, can you help?
            </button>
          </h5>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="slider-container">
                <div className="slider">
                  <div className="slide">
                    <h5>Standard Package</h5>
                    <ul>
                      <li>&#10004; Peer Review Analysis</li>

                      <li>&#10004; Journal Selection</li>
                      <li>&#10004; Target Journal Formatting</li>
                      <li>&#10004; Cover Letter Writing</li>
                      <li>&#10004; Unlimited Assistance</li>
                      <li>&#10004; Journal Submission</li>


                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Advanced Package</h5>
                    <ul>
                      <li>&#10004; Peer Review Analysis</li>
                      <li>&#10004; Substantive Editing</li>
                      <li>&#10004; Journal Selection</li>
                      <li>&#10004; Target Journal Formatting</li>
                      <li>&#10004; Journal Submission</li>
                      <li>&#10004; Cover Letter Writing</li>
                      <li>&#10004; Plagiarism Check</li>
                      <li>&#10004; Unlimited Assistance</li>



                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Premium Package</h5>
                    <ul>
                      <li>&#10004; Peer Review Analysis</li>
                      <li>&#10004; Substantive Editing</li>
                      <li>&#10004; Journal Selection</li>
                      <li>&#10004; Target Journal Formatting</li>
                      <li>&#10004; Artwork Formatting</li>
                      <li>&#10004; Journal Submission</li>
                      <li>&#10004; Response to Reviewers (One response to reviewer free)</li>
                      <li>&#10004; Cover Letter Writing</li>
                      <li>&#10004; Plagiarism Check</li>
                      <li>&#10004; Unlimited Assistance</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Premium Plus Package</h5>
                    <ul>
                      <li>&#10004; Peer Review Analysis</li>
                      <li>&#10004; Data Analysis</li>
                      <li>&#10004; Research Paper Writing</li>
                      <li>&#10004; Substantive Editing</li>
                      <li>&#10004; Journal Selection</li>
                      <li>&#10004; Journal Submission</li>
                      <li>&#10004; Target Journal Formatting</li>
                      <li>&#10004; Artwork Formatting</li>
                      <li>&#10004; Response To Reviewer</li>
                      <li>&#10004; Cover Letter Writing</li>
                    </ul>
                  </div>



                </div>
                <Link href="/PackageService" className="buttonv">View More</Link>
                <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='buttonv'><FontAwesomeIcon icon={faComment} /> Chat with us</Link>

              </div>
            </div>
          </div>
        </div>



        <div className="accordion-item">
          <h5 className="accordion-header" id="headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
              aria-expanded="false" aria-controls="collapseFour">
              I am facing difficulty in getting grants and developing Research projects. Need Help. </button>
          </h5>
          <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="slider-container">
                <div className="slider">
                  <div className="slide">
                    <h5>Basic</h5>
                    <ul>
                      <li>&#10004; Grant Search Assistance</li>
                      <li>&#10004; Proposal Writing</li>
                      <li>&#10004; Budget Planning</li>
                      <li>&#10004; Project Outline Development</li>
                      <li>&#10004; Editing Consultation</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Advanced</h5>
                    <ul>
                      <li>&#10004; Detailed Grant Search</li>
                      <li>&#10004; Proposal Writing &amp; Review</li>
                      <li>&#10004; Comprehensive Budget Planning</li>
                      <li>&#10004; Project Management Plan</li>
                      <li>&#10004; Editing and Formatting</li>
                    </ul>

                  </div>
                  <div className="slide">
                    <h5>Premium</h5>
                    <ul>
                      <li>&#10004; Customized Grant Search</li>
                      <li>&#10004; Full Proposal Development</li>
                      <li>&#10004; Advanced Budget Planning</li>
                      <li>&#10004; Project Strategy Consultation</li>
                      <li>&#10004; Ongoing Support &amp; Revisions</li>
                    </ul>

                  </div>
                  {/* <div className="slide">
                    <h5>Premium</h5>
                    <ul>
                      <li>✔ Journal Guidance (8)</li>
                      <li>✔ Literature search assistance (3)</li>
                      <li>✔ Writing support (8)</li>
                      <li>✔ Editing consultation (8)</li>
                      <li>✔ Artwork consultation (8)</li>
                      <li>✔ Abstract Optimisation (8)</li>
                      <li>✔ In-depth Journal Consultation (4)</li>
                      <li>✔ Advanced Literature Search Guidance (4)</li>
                      <li>✔ Grant Proposal Guidance (2)</li>
                      <li>✔ Statistical Analysis Consultation (2)</li>
                      <li>✔ One-on-one Research Strategy Session (3)</li>
                    </ul>
                    <h5>Free Services</h5>
                    <ul>
                      <li>Access to Premium Webinars and Tutorials</li>
                      <li>One Basic Artwork Preparation service include</li>
                    </ul>
                  </div> */}
                </div>
                <Link href="/ResearchSupportOverview" className="buttonv">View More</Link>
                <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='buttonv'><FontAwesomeIcon icon={faComment} /> Chat with us</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h5 className="accordion-header" id="headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"
              aria-expanded="false" aria-controls="collapseFive">
              I'm struggling with my PhD and PhD thesis; can someone guide me? </button>
          </h5>
          <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="slider-container">
                <div className="slider">
                  <div className="slide">
                    <h5>Pre-PhD</h5>
                    <ul>
                      <li>&#10004; PhD Topic Consultation</li>
                      <li>&#10004; PhD Project Proposal Writing</li>
                      <li>&#10004; Choosing Subject Field Guidance</li>
                      <li>&#10004; Webinars and Workshops on Research Trends</li>
                      <li>&#10004; Problem Statement Formulation</li>
                    </ul>

                  </div>
                  <div className="slide">
                    <h5>1st year PhD (1-2 year)</h5>
                    <ul>
                      <li>&#10004; Concept Paper Development</li>
                      <li>&#10004; Guidance on Developing a Project Proposal</li>
                      <li>&#10004; Writing Assistance for Scholarship Proposals and Grant Applications</li>
                      <li>&#10004; Literature Review and Data Collection Support</li>
                      <li>&#10004; Initial Data Analysis</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Mid PhD (3rd-4th year)</h5>
                    <ul>
                      <li>&#10004; Review of Literature</li>
                      <li>&#10004; Questionnaire Development</li>
                      <li>&#10004; Statistical Analysis Using SPSS/Data Analysis</li>
                      <li>&#10004; Research Design Consultation</li>
                      <li>&#10004; Writing and Submission of First Indexed Paper</li>
                    </ul>

                  </div>
                  <div className="slide">
                    <h5>Last Stage PhD(5-6th year)</h5>
                    <ul>

                      <li>&#10004; Data Analysis</li>
                      <li>&#10004; Thesis Writing Assistance</li>
                      <li>&#10004; PhD Mock Viva Assistance</li>
                      <li>&#10004; Writing and Submission of Second Indexed Paper</li>
                      <li>&#10004; Thesis Review and Feedback</li>
                    </ul>


                  </div>
                  <div className="slide">
                    <h5>Patent assistance</h5>
                    <ul>
                      <li>&#10004; Writing Support</li>
                      <li>&#10004; Proofreading</li>
                      <li>&#10004; Dedicated Expert Mentor for Final Review</li>
                      <li>&#10004; Workshop on Manuscript Submission and Publication Process</li>
                      <li>&#10004; Defense Preparation and Methodology Consultation</li>
                    </ul>

                  </div>
                </div>
                <Link href="/PHDThesis" className="buttonv">View More</Link>
                <Link href="https://salesiq.zohopublic.com/signaturesupport.ls?widgetcode=siq8d693704fe8ef7898f93fd220287834145838a6814d3df994dcd8741f14019a3" className='buttonv'><FontAwesomeIcon icon={faComment} /> Chat with us</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetHelpMobile;
