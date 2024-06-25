import React from 'react';
import { useEffect } from 'react';
import './getHelpMobile.css';
import Link from 'next/link';

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
          <h5 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
              Can I get assistance in writing my Research Paper?
            </button>
          </h5>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
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
                      <li>✔ Results using SPSS software.</li>
                      <li>✔ Data analysis using the Defined methods (View)</li>
                      <li>✔ Construction of tables and graphs.</li>
                      <li>✔ Interpretation of results.</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Systematic Review & Meta Analysis</h5>
                    <ul>
                      <li>✔ Study in compliance with PRISMA guidelines.</li>
                      <li>✔ Designing search strategies.</li>
                      <li>✔ Screening the databases with search-strings.</li>
                      <li>✔ Construction of tables and forest plots.</li>
                    </ul>
                  </div>
                </div>
                <Link href="/Writing" className="buttonv">View More</Link>
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
                    <h5>Premium Plus Package</h5>
                    <ul>
                      <li>✔ Case Report</li>
                      <li>✔ Original Research Article</li>
                      <li>✔ Review Article</li>
                      <li>✔ Research Proposal</li>
                      <li>✔ Customized Writing</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Premium Package</h5>
                    <ul>
                      <li>✔ Research Proposal</li>
                      <li>✔ Review Article</li>
                      <li>✔ Brief Communication</li>
                      <li>✔ Original Research Article</li>
                      <li>✔ Customized Writing</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Advanced Package</h5>
                    <ul>
                      <li>✔ Substantive Editing</li>
                      <li>✔ Journal Selection</li>
                      <li>✔ Target Journal Formatting</li>
                      <li>✔ Journal Submission</li>
                      <li>✔ Cover Letter Writing</li>
                      <li>✔ Plagiarism Check</li>
                      <li>✔ Unlimited Assistance</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Standard Package</h5>
                    <ul>
                      <li>✔ Journal Selection</li>
                      <li>✔ Target Journal Formatting</li>
                      <li>✔ Journal Submission</li>
                      <li>✔ Cover Letter Writing</li>
                      <li>✔ Unlimited Assistance</li>
                    </ul>
                  </div>
                </div>
                <Link href="/PackageService" className="buttonv">View More</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h5 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              My paper got rejected due to poor English, can you help? </button>
          </h5>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <div className="slider-container">
                <div className="slider">
                  <div className="slide">
                    <h5>Proofreading</h5>
                    <ul>
                      <li>✔ Thorough reading of manuscript.</li>
                      <li>✔ Spotting all errors</li>
                      <li>✔ Review capitalization and punctuation.</li>
                      <li>✔ Check for spelling, grammar, and typos.</li>
                      <li>✔ Remove redundancies</li>
                      <li>✔ Rectify improper word usage.</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Substantive Editing</h5>
                    <ul>
                      <li>✔ All included in Proof reading</li>
                      <li>✔ Verify scientific terminology, units, symbols, and variables.</li>
                      <li>✔ Rephrase & revise sentences for clarity and word choice.</li>
                      <li>✔ Remove repetitions for logical presentation.</li>
                      <li>✔ Editing by Subject matter expert</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Extensive Substantive Editing</h5>
                    <ul>
                      <li>✔ All included in Substantive Editing</li>
                      <li>✔ Editing and review by two Subject matter expert</li>
                      <li>✔ Rephrase & revise paragraphs for clarity and word choice.</li>
                      <li>✔ Improve organization</li>
                      <li>✔ Adjust writing style for consistency and logic</li>
                      <li>✔ Fact-check statements for scientific accuracy.</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Customised Services</h5>
                    <ul>
                      <li>✔ Language Translation</li>
                      <li>✔ Copy editing</li>
                      <li>✔ Thesis Editing</li>
                      <li>✔ Dissertation Editing</li>
                      <li>✔ Book Editing</li>
                      <li>✔ Manual Editing</li>
                      <li>✔ Indexing</li>
                      <li>✔ Cover Page Design</li>
                      <li>✔ Type Setting</li>
                      <li>✔ Image Quality Enhancement</li>
                      <li>✔ Image Recreation</li>
                      <li>✔ Camera Ready Formatting</li>
                      <li>✔ Journal Cover Page Design</li>
                    </ul>
                  </div>
                </div>
                <Link href="/EditingOverview" className="buttonv">View More</Link>
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
                      <li>✔ Journal Guidance (3)</li>
                      <li>✔ Literature search assistance (2)</li>
                      <li>✔ Writing support (3)</li>
                      <li>✔ Editing consultation (1)</li>
                      <li>✔ Artwork consultation (1)</li>
                      <li>✔ Abstract Optimisation (1)</li>
                    </ul>
                    <h5>Free Services</h5>
                    <ul>
                      <li>✔ Journal Selection (3)</li>
                      <li>✔ Free Peer review (2)</li>
                      <li>✔ Journal formatting (1)</li>
                      <li>✔ Journal Submission (1)</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Advanced</h5>
                    <ul>
                      <li>✔ Journal Guidance (5)</li>
                      <li>✔ Literature search assistance (5)</li>
                      <li>✔ Writing support (5)</li>
                      <li>✔ Editing consultation (5)</li>
                      <li>✔ Artwork consultation (5)</li>
                      <li>✔ Abstract Optimisation (5)</li>
                      <li>✔ In-depth Journal Consultation (2)</li>
                      <li>✔ Advanced Literature Search Guidance (2)</li>
                    </ul>

                    <h5>Free Services</h5>
                    <ul>
                      <li>✔ Access to 2 webinars or tutorials per month</li>
                      <li>✔ Research planning and Management (2)</li>
                      <li>✔ Journal submissions (2)</li>
                      <li>✔ Journal formatting (2)</li>
                      <li>✔ Peer review (6)</li>
                    </ul>
                  </div>
                  <div className="slide">
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
                  </div>
                </div>
                <Link href="/ResearchSupportOverview" className="buttonv">View More</Link>
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
                      <li>✔ PhD topic consultation</li>
                      <li>✔ PhD topic selection & proposal help</li>
                      <li>✔ Choosing subject field guidance</li>
                      <li>✔ Webinars and workshops on research trends and application processes</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>1st year PhD (1-2 year)</h5>
                    <ul>
                      <li>✔ PhD topic consultation and selection</li>
                      <li>✔ Guidance on developing a project proposal</li>
                      <li>✔ Writing assistance for scholarship proposals and grant applications</li>
                      <li>✔ Research coursework support and test preparation</li>
                      <li>✔ Assistance with preparing and presenting synopsis seminar and report</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Mid PhD (3rd-4th year)</h5>
                    <ul>
                      <li>✔ Statistical analysis using SPSS/Data analysis</li>
                      <li>✔ Research design consultation</li>
                      <li>✔ Questionnaire development</li>
                      <li>✔ Conference poster assistance</li>
                      <li>✔ Conference abstract assistance</li>
                      <li>✔ Oral presentation assistance</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Last Stage PhD(5-6th year)</h5>
                    <ul>
                      <li>✔ Journal Manuscript framework preparation</li>
                      <li>✔ Thesis review</li>
                      <li>✔ Dedicated expert as a mentor for final review</li>
                      <li>✔ Workshop on manuscript submission and publication process</li>
                      <li>✔ Post doctorate application help</li>
                      <li>✔ Cover letter assistance</li>
                      <li>✔ LinkedIn profile upgrade help</li>
                      <li>✔ Resume making assistance</li>
                    </ul>
                  </div>
                  <div className="slide">
                    <h5>Patent assistance</h5>
                    <ul>
                      <li>✔ Initial Consultation and Invention Disclosure</li>
                      <li>✔ Patent Search</li>
                      <li>✔ Drafting the Patent Application</li>
                      <li>✔ Patent Review and Feedback</li>
                      <li>✔ Filing the Patent Application</li>
                      <li>✔ Patent Examination Process</li>
                    </ul>
                  </div>
                </div>
                <Link href="/PHDThesis" className="buttonv">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetHelpMobile;
