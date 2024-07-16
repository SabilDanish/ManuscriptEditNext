"use client"
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import whyToChoose from "@/app/_Common/_WhyToChoose/WhyToChoose";
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
      {breadcrum("Services / Research Support", "Early-Stage Researchers")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-2 pb-3">Empowering Early-Stage Researchers</h3>
              <p>
                Welcome to Manuscriptedit, where your research vision takes
                flight. Embark on your academic journey with our Early-Stage
                Researcher (Early Buds) package, meticulously crafted to guide
                you through each phase of your research, from the genesis of
                your idea to the moment of publication. Our dedicated team of
                experts provides personalized support, combining deep academic
                insight with a commitment to nurturing your individual success.
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
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="mb-4">Enhance Your Academic Skills</h3>
            </div>
            <div className="col-md-6">
              
              <div className="bx-grid">
                <h5>Designing Your Research for Success</h5>
                <p>
                  Choosing the right research topic is the cornerstone of a
                  successful academic career. Our advisors collaborate with you
                  to identify a compelling topic that aligns with your interests
                  and has significant academic or real-world impact. We help you
                  navigate the vast sea of information to pinpoint an innovative
                  and feasible topic.
                </p>
              </div>

              <div className="bx-grid">
                <h5>Selecting the Perfect Research Topic</h5>
                <p>
                  Creating a robust research design is crucial. With our
                  guidance, you'll develop a structured approach that answers
                  your research questions and resonates with funding bodies and
                  peer-reviewed journals. We stand by you, ensuring that your
                  methodology is sound and your research objectives are clear
                  and achievable.
                </p>
              </div>
              <div className="bx-grid">
                <h5>Secure Funding with Compelling Grant Proposals</h5>
                <p>
                  Your research deserves the spotlight, and securing grants is
                  key. Our team specializes in drafting persuasive grant
                  proposals that capture the essence of your research and its
                  potential contributions. Let us help you craft a narrative
                  that stands out, persuades reviewers, and garners the
                  financial support your project deserves.
                </p>
              </div>
              <div className="bx-grid">
                <h5>
                  Build a Strong Foundation with Preliminary Literature Analysis
                </h5>
                <p>
                  A thorough literature analysis lays the groundwork for your
                  research. Our service goes beyond mere summaries; we provide
                  critical analyses that identify gaps in the current body of
                  work, positioning your research to make a meaningful
                  contribution. Trust us to equip you with a comprehensive
                  understanding that solidifies the base of your study.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bx-grid">
                <h5>Academic Writing Workshops</h5>
                <p>
                  Effective writing is imperative in academia. Our workshops are
                  tailored to hone your writing prowess, ensuring your academic
                  manuscripts are clear, concise, and compelling. Under our
                  tutelage, you will master the art of communicating complex
                  ideas with simplicity and precision.
                </p>
              </div>
              <div className="bx-grid">
                <h5>Statistical Analysis and Research Methodology Training</h5>
                <p>
                  In a world driven by data, proficiency in statistical analysis
                  is indispensable. Our training modules simplify data analysis
                  and research methodology, empowering you to conduct rigorous
                  research and derive insightful conclusions. Embrace confidence
                  as you navigate the quantitative aspects of your work.
                </p>
              </div>
              <div className="bx-grid">
                <h5>Why Choose ManuscriptEdit for Your Research Endeavors?</h5>
                <p>
                  At ManuscriptEdit, we pride ourselves on the success of our
                  clients. Our comprehensive support, from individualized
                  mentoring to group workshops, ensures that every step of your
                  research journey is a step toward excellence. Our track record
                  speaks for itself, with numerous clients achieving publication
                  and funding success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {whyToChoose()}
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
                        Who is eligible for the Early-Stage Researcher (Early
                        Buds) package?
                      </a>
                      <p>
                        The Early Buds package is designed for aspiring
                        academics and researchers at the beginning stages of
                        their careers, including graduate students, postdocs,
                        and junior faculty members looking to kickstart their
                        research projects.
                      </p>
                    </li>
                    <li>
                      <a>
                        Can I get help choosing a research topic if I don't have
                        one in mind?
                      </a>
                      <p>
                        Absolutely! Our advisors specialize in helping you
                        identify a compelling research topic that aligns with
                        your interests and has the potential for significant
                        academic or real-world impact.
                      </p>
                    </li>
                    <li>
                      <a>
                        What kind of support can I expect in writing grant
                        proposals?
                      </a>
                      <p>
                        Our team provides comprehensive support in drafting
                        persuasive grant proposals, including narrative
                        development, budget planning, and alignment with funding
                        body priorities to maximize your chances of securing
                        financial support.
                      </p>
                    </li>
                    <li>
                      <a>
                        How do the academic writing workshops help improve my
                        skills?
                      </a>
                      <p>
                        Our workshops are designed to refine your academic
                        writing skills, focusing on clarity, structure, and
                        argumentation to help you produce clear, concise, and
                        compelling manuscripts suitable for peer-reviewed
                        journals.
                      </p>
                    </li>
                    <li>
                      <a>
                        Are the training sessions on statistical analysis and
                        research methodology suitable for beginners?
                      </a>
                      <p>
                        Yes, our training sessions cater to a range of
                        proficiency levels, from beginners to advanced
                        researchers. We aim to simplify data analysis and
                        research methodology, making complex concepts accessible
                        and understandable.
                      </p>
                    </li>
                    <li>
                      <a>How do I start with the Early Buds package?</a>
                      <p>
                        To get started, simply contact us through the provided
                        communication channels (Telegram, WhatsApp, or Email) to
                        schedule an initial consultation with one of our
                        experts.
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
