'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {breadcrum(
        "Services / Publication Package Services",
        "Journal Selection"
      )}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-2 pb-3">What We Provide</h3>
              <p>
                Choosing the appropriate journal for publishing is very crucial
                but tedious process. You may have obtained excellent set of
                results, but if you submit to a journal whose scope and target
                audience are irrelevant, there is a little chance of getting
                published. Our experienced editors, (some of them are also
                reviewer of reputed journals) with vast experience in editing
                and publishing articles, will help you to select the correct
                journal where the chances of getting your work published is
                maximum. They will shortlist 4-5 journals, which suit your
                requirement. They consider certain factors while selecting
                appropriate journals for your manuscript. Here we list few
                factors as example:
              </p>
              <div className="em-about-icon-box2">
                <div className="list-icon">
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Plagiarism check report. </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>
                      Identify significant overlaps in text with published and
                      in-press articles.
                    </h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Reduction or elimination of plagiarized text.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Ensuring no extent of overlap in text.</h6>
                  </span>
                  <p className="mt-2">
                    We match these points with your requirement and shortlist
                    5-6 journals for you. Depending on your requirements, you
                    can choose one from the list of appropriate journals to
                    submit your manuscript.
                  </p>
                </div>
              </div>
              <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
              Order Now
              </button>
              <Link href={"/ContactUs"}><button className="btn btn-primary mt-3 mr-3">
              Schedule a Call
              </button></Link>
            </div>
            <div className="col-md-6">
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
              <td>3</td>
              <td>200</td>
            </tr>
            <tr>
              <td>5</td>
              <td>150</td>
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
