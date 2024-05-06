'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
  return (
    <>
      {breadcrum(
        "Services / Publication Package Services",
        "Journal Submission"
      )}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="pt-2 pb-3">What We Provide</h3>
              <p>
                The aim of this service is to help evaluate the suitability of a
                manuscript purely from a subject experts (peer) point of view,
                detailing mostly the scientific inadequacy/adequacy/suggestions
                for improving the manuscript etc. Since no editing is involved,
                there is no change in your manuscript. We only provide
                suggestions and expert comments in "Track-change" mode. Some of
                the questions to be addressed here are:
              </p>
              <div className="em-about-icon-box2">
                <div className="list-icon">
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      Register and create an account for you in the journal's
                      webpage for online submission.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Complete all the forms in the journal submission process.{" "}
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Does it publish original research or review papers?</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      Write a compelling cover letter to the journal elucidating
                      the novelty of your work.
                    </h6>
                  </span>

                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      Fill the patients consent form, copyright transfer form,
                      and ethics statement.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Obtain the list of prospective reviewers from you and fill
                      the corresponding form.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Alert the author of any missing information required for
                      the journal submission.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Upload your manuscript along with figures and tables
                      correctly.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      Check the pdf of uploaded manuscript and approve
                      submission.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Communicate with the journal editor on your behalf.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      Provide you the detail information related to the journal
                      submission.
                    </h6>
                  </span>
                </div>
              </div>
              <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
              Order Now
              </button>
              <button onClick={() => {redirect('contact-us')}} className="btn btn-primary mt-3 mr-3">
              Schedule a Call
              </button>
            </div>
            <div className="col-md-4">
              <img
                src="/images/menuscimg/subtantive.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Turnaround Time in Days</th>
              <th scope="col">Price per Assignment in US$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>120</td>
            </tr>
          </tbody>
        </table>
      </div>
      {howWeWork(2)}
      {SpecializedArea(false)}
      {clientFeedback()}
    </>
  );
}
