import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";

export default function Home() {
  return (
    <>
    {breadcrum("Quality", "Service Guarantee")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-5">Quality Assurance Overview</h3>
              <p className="pt-3">
                ASetting the stage for the importance of editing in the realm of
                written communication. Introduction to the multifaceted nature
                of editing and its impact on clarity and effectiveness.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/innerimg/re-1.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="onfocus" className="onfocus">
        <div className="container-fluid p-0" data-aos="fade-up">
          <div className="row g-0">
            <div className="col-lg-5 video-play position-relative">
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox play-btn"
              ></a>
            </div>
            <div className="col-lg-7" style={{ paddingLeft: "0px !important" }}>
              <div className="content d-flex flex-column justify-content-center h-100">
                <h6 className="fst-italic">
                  Manuscriptedit.com is committed to provide editing and
                  proofreading service of highest quality for its clients. We
                  maintain high standard because we have:-
                </h6>{" "}
                <br />
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> Highly qualified and
                    experienced editors from top universities around the world.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Multiple Level of
                    Editing (checks) to guarantee editing of highest standards.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Same high standard
                    Editing process & Quality for all services irrespective of
                    the number of submitted document.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Free sample editing
                    of one page.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Live support for
                    immediate assistance.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Customer-focused
                    editorial service to monitor feedback from customers and
                    continually striving to improve and enhance both quality and
                    service.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Policy of strict
                    adherence to deadline for providing all services.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Round the clock
                    services for 24 hrs a day, 7 days a week & 365 days a year.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
