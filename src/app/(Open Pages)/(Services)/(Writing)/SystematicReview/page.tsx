'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
  return (
    <>
      {breadcrum(
        "Services / Writing",
        "Systematic Review"
      )}
<section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                {/* <h3 className="pt-2 pb-3">Systematic Review</h3> */}
                <p>
                   A Systematic Review is a specialized service offered by ManuscriptEdit, 
                   dedicated to conducting comprehensive and methodical literature reviews 
                   to synthesize evidence on a specific research topic or question. Systematic 
                   reviews are crucial in evidence-based research, providing a rigorous and 
                   transparent approach to gather, evaluate, and summarize existing studies.
                </p>
                <div className="em-about-icon-box2">
                    <div className="list-icon">
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Protocol Development</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Literature Search</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Study Selection</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Data Extraction</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Quality Assessment</h6>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <img src="/images/menuscimg/subtantive.jpg" alt="" width="100%" style={{borderRadius: 10}} />
            </div>
        </div>
        </div>
</section>
<div className="tab_area bg_color2 pt-80 pb-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <h4 className="mt-2 mb-2">What You Provide</h4>
                <div className="em-about-icon-box2">
                    <div className="list-icon">
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Topic</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Main objective/Research question/Hypothesis.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Inclusion/exclusion criteria.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Databases for collecting published article (optional).</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Keywords for searching (optional).</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Desired study period for collecting published articles.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>One or two relevant paper(s) you want to discuss.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Suggest a target journal.</h6>
                        </span>
                       
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
              <h4 className="mt-2 mb-2">What We Provide</h4>
              <div className="em-about-icon-box2">
                    <div className="list-icon">
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Study in compliance with PRISMA guidelines.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Designing search strategies.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Screening the databases with search-strings.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Assessment of risk of bias.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Data extraction.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Meta-analysis and interpretation of results.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Reporting pooled effect size.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Construction of tables and forest plots.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6> Writing the full article.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>List of references.</h6>
                        </span>
                        <span><i className="bi bi-check-lg"></i>
                            <h6>Formatting according to the target journal guidelines (optional).</h6>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
            <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
              Request a Quote
              </button>
              <button onClick={() => {redirect('contact-us')}} className="btn btn-primary mt-3 mr-3">
              Schedule a Call
              </button>
            </div>
        </div>
    </div>
</div>
{SpecializedArea(false)}
      {howWeWork(2)}
    </>
  );
}
