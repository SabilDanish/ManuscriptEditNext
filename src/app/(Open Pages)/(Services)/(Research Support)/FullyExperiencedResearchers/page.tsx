"use client"
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import { usePathname } from 'next/navigation'
import { data } from '../../../../utils/metaFile.js'
import Metadata from "@/app/Metadata";

const newData: any = data;

export default function Home() {
  const pathName: string = usePathname().split("/").filter(val => val).join("")
  let metaData = newData[pathName]
  return (
    <>
    {<Metadata metaData={metaData} />}
    {breadcrum("Services / Research Support", "Fully Experienced Researchers")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <h3 className="pt-2 pb-3">
                Tailored Support for Fully Experienced Researchers - Strategize,
                Submit, Succeed
              </h3> */}
              <p>
                At the pinnacle of academic achievement, established researchers
                like you require bespoke services that comprehend the nuances of
                your work. ManuscriptEdit.com is dedicated to providing that
                elite level of support, ensuring your continued success and
                impact in the scholarly community.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/menuscimg/reach-support.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="service_area pt-0 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_main_title">
                  <h1>Precision-Tuned Services for Established Scholars</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      <a href="service-details.html">
                        Journal Recommendation Precision
                      </a>
                    </h4>
                    <p>
                      With our insightful analysis, find the perfect home for
                      your research in reputable journals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      <a href="service-details.html">
                        Journal Submission Guidance
                      </a>
                    </h4>
                    <p>
                      Navigate the complexities of journal submission with our
                      expert guidance, enhancing your acceptance potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      <a href="service-details.html">
                        Pre-Submission Peer Review
                      </a>
                    </h4>
                    <p>
                      Benefit from our rigorous review to refine your work
                      before submission, mirroring the journal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service_area pt-30 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-55">
                <div className="section_main_title">
                  <h1>Crafting Excellence</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      <a href="service-details.html">
                        Abstract & Graphical Abstract Crafting
                      </a>
                    </h4>
                    <p>
                      Capture the essence of your research with our skillful
                      crafting of written and visual abstracts, ensuring
                      engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      <a href="service-details.html">
                        Amplify Your Research Impact
                      </a>
                    </h4>
                    <p>
                      Your research deserves recognition. Our 'Research Impact
                      Amplification' suite elevates your work's visibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      <a href="service-details.html">
                        Research Promotion Strategy
                      </a>
                    </h4>
                    <p>
                      Develop a bespoke strategy to promote your research
                      through the right academic and public channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      <a href="service-details.html">
                        Media and Peer Impact Analysis
                      </a>
                    </h4>
                    <p>
                      Understand and enhance your research's footprint in the
                      scholarly community and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      <a href="service-details.html">
                        Funding Impact Consultation
                      </a>
                    </h4>
                    <p>
                      Align your research with funding opportunities, maximizing
                      the potential for impactful studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="service_style_ten wow flipInY animated"
                data-wow-delay="0ms"
                data-wow-duration="2500ms"
                style={{
                  visibility: "visible",
                  animationDuration: "2500ms",
                  animationDelay: "0ms",
                  animationName: "flipInY",
                }}
              >
                <div className="single_service_style_ten">
                  <div className="service_style_ten_icon pb-2"></div>
                  <div className="service_style_ten_content">
                    <h4 className="pb-2">
                      <a href="service-details.html">
                        Your Pathway to Greater Achievements
                      </a>
                    </h4>
                    <p>
                      We recognize the importance of your research's
                      contribution to knowledge and society. Our process is
                      crafted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="process_area pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-90 mt-3">
                <div className="section_main_title">
                  <h1>Why Choose ManuscriptEdit?</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single_process_work">
                <div className="single_it_work_content">
                  <div className="work_number">
                    <img src="/images/software-work-icon1.png" alt="icon" />
                  </div>
                  <div className="single_work_content_title pt-1">
                    <h4>Flexible Pricing Plans</h4>
                  </div>
                  <div className="single_it_work_content_desc">
                    <p>
                      We offer competitive and transparent pricing to cater to
                      research needs and budgets. Sign up to get special offers
                      and discounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_process_work">
                <div className="single_it_work_content">
                  <div className="work_number">
                    <img src="/images/software-work-icon2.png" alt="icon" />
                  </div>
                  <div className="single_work_content_title pt-1">
                    <h4>Register/Sign Up to Know More</h4>
                  </div>
                  <div className="single_it_work_content_desc">
                    <p>
                      Our team is readily available if you have any questions or
                      need further assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single_process_work">
                <div className="single_it_work_content">
                  <div className="work_number">
                    <img src="/images/software-work-icon3.png" alt="icon" />
                  </div>
                  <div className="single_work_content_title pt-1">
                    <h4>We're Here to Help</h4>
                  </div>
                  <div className="single_it_work_content_desc">
                    <p>
                      With decades of combined experience in academic research
                      support, our team comprises seasoned experts committed to
                      your scholarly success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion_area style-two upper1 pt-0 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-20">
                <div className="section_main_title">
                  <h1>FREQUENTLY ASKED QUESTIONS</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2 pr-3"></div>
            <div className="col-lg-8 col-md-8 pr-3">
              <div className="tab_container pt-10 pb-50">
                <div
                  id="tab1"
                  className="tab_content wow fadeInUp animated"
                  data-wow-delay=".5"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <ul className="accordion">
                    <li>
                      <a className="active">
                        What specific services are offered to established
                        researchers?
                      </a>
                      <p>
                        For established researchers, we offer tailored services
                        such as Journal Recommendation Precision, Journal
                        Submission Guidance, Pre-Submission Peer Review, and
                        Research Impact Amplification, among others.
                      </p>
                    </li>
                    <li>
                      <a>
                        How can ManuscriptEdit.com help increase the impact of
                        my research?
                      </a>
                      <p>
                        Our Research Impact Amplification suite elevates your
                        work's visibility and influence through strategic
                        promotion, media and peer impact analysis, and funding
                        impact consultation.
                      </p>
                    </li>
                    <li>
                      <a>
                        Is there customized pricing available for established
                        researchers?
                      </a>
                      <p>
                        Yes, we offer customized pricing that reflects our
                        bespoke support. Contact us to get a quote tailored to
                        your specific needs.
                      </p>
                    </li>
                    <li>
                      <a>
                        How does ManuscriptEdit.com help with peer review
                        preparation?
                      </a>
                      <p>
                        Our Peer Review Preparation service fortifies your
                        manuscript against critical scrutiny, offering feedback
                        and recommendations to strengthen your work before it
                        undergoes peer review.
                      </p>
                    </li>
                    <li>
                      <a>
                        Can I get assistance finding the right journal for my
                        research?
                      </a>
                      <p>
                        Absolutely! Our Personalized Journal Matching service
                        helps you find the best journal for your research,
                        ensuring your work reaches the appropriate audience and
                        achieves maximum impact.
                      </p>
                    </li>
                    <li>
                      <a>
                        What does the post-review refinement service include?
                      </a>
                      <p>
                        Our Post-Review Refinement service involves perfecting
                        your manuscript based on feedback received during our
                        pre-submission peer reviews, enhancing your chances of
                        acceptance.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 pr-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
