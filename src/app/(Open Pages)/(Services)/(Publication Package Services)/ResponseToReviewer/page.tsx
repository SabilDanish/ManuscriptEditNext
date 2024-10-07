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
        "Response to Reviewer"
      )}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3 className="pt-2 pb-3">What We Provide</h3>
              <p>
                Almost no article get accepted without revision. Peer-reviewers
                raise their concern to the suitability of the content to get
                published. In order to improve the quality of the content
                further they raise important questions which need to be answered
                by the author. At this stage, it is very important to understand
                and correctly interpret the reviewer's comments, make desired
                revision of the manuscript, submit a cover letter and clearly
                communicate and make point-wise response to reviewer's queries.
                Our expert will assist to present your "response to reviewer" in
                the best possible manner.
              </p>
              <div className="em-about-icon-box2">
                <div className="list-icon">
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Obtain the desired scientific information and response to
                      the reviewers comments from you.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      {" "}
                      Edit and polish the response substantively in consultation
                      with you to enhance its quality.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Ensure correct English usage.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Maintain correct tone.</h6>
                  </span>

                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Prepare a suitable cover letter.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Upload the responses in the journals webpage.</h6>
                  </span>
                </div>
              </div>
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
          <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
              Order Now
              </button>
              <button onClick={() => {redirect('contact-us')}} className="btn btn-primary mt-3 mr-3">
              Schedule a Call
              </button>
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
              <td>10</td>
              <td>475</td>
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
