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
        "Poster Design & Creation"
      )}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {/* <h3 className="pt-2 pb-3">Poster Design & Creation</h3> */}
              <p>
                In large conferences, you often have to communicate your
                research results through a single poster. Posters are an
                important method of communicating medical and scientific
                research. Unlike in an oral presentation, you are required to
                arrange the results in a condensed format.
              </p>

              <p>
                But creating an effective poster can be challenging because you
                may have to squeeze your results from a year's worth of research
                onto a 3-by-5-foot sheet of paper. It is imperative that the
                posters are needed to be visually appealing to attract more
                attention. It requires very sound skills in design and layout of
                the contents with right Color combination to create a good
                poster. Sometimes it may be burdensome and difficult for you to
                create an effective poster because of want of time. We can help
                you in creating your poster. You can focus your time on your
                manuscript and we take all your burden of poster writing and
                designing.
              </p>

              <p>
                Our editors and layout designers are highly experienced in
                arranging the contents of your manuscript in a condensed format
                into a visually appealing poster of different sizes as per your
                requirement. We provide you the electronic copy of the completed
                poster, which you can directly print.
              </p>

              <p>
                Given below are the details of poster creation and design
                service at Manuscriptedit:
              </p>
              <div className="em-about-icon-box2">
                <div className="list-icon">
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Choose or design template of desired size.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Select a suitable layout.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Decide headings, text boxes and graphic objects.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6>Formatting and typesetting text and figures.</h6>
                  </span>

                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Decide appropriate size of text and figures.</h6>
                  </span>
                  <span>
                    <i className="bi bi-check-lg"></i>
                    <h6> Optimize color combinations.</h6>
                  </span>
                </div>
                <p>
                  Our writers and editors regularly present papers and posters
                  in academic conferences. You can simply provide your content
                  and they will make attractive posters with professional look
                  for you.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="/images/menuscimg/subtantive.jpg"
                alt=""
                width="100%"
                style={{borderRadius: 10}}
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
              <td>3</td>
              <td>950</td>
            </tr>
            <tr>
              <td>5</td>
              <td>750</td>
            </tr>
            <tr>
              <td>10</td>
              <td>550</td>
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
