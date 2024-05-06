'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
  return (
    <>
      {breadcrum("Services / English Editing", "Extensive Substantive Editing")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h3 className="pt-0 pb-3">Extensive Substantive Editing</h3>

              <div className="em-about-icon-box2">
                <div className="list-icon">
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Thorough reading of manuscript. </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Spotting all errors. </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Review capitalization and punctuation.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Check for spelling, grammar, and typos.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Remove redundancies </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Rectify improper word usage. </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Verify scientific terminology, units, symbols, and
                      variables.{" "}
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Rephrase & revise sentences for clarity and word choice.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Remove repetitions for logical presentation. </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Editing by Subject matter expert </h6>
                  </span>
                </div>
              </div>

              <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
                Submit Manuscript Now 
              </button>
            </div>
            <div className="col-md-5">
              <img
                src="/images/menuscimg/subtantive.jpg"
                alt=""
                width="100%"
                style={{borderRadius: 10}}
              />
            </div>
          </div>
        </div>
      </section>
      {ourProfessional()}
      {clientFeedback()}
      {FAQ()}
    </>
  );
}
