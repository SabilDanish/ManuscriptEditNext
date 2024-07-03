import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";

export default function Home() {
  return (
    <>
      {breadcrum("Quality", "Quality & Delivery")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-5">Quality & Delivery Overview</h3>
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
                <h3 className="fst-italic">ManuscriptEdit Quality Guarantee</h3>{" "}
                <br />
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> We guarantee to
                    provide the highest quality of English in all documents
                    edited by ManuscriptEdit to satisfy the standards required
                    by the international publishing industry.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> If you are unhappy
                    with the completed work, please send the reasons for your
                    dissatisfaction.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Our independent
                    expert reviewers will verify whether the reasons cited by
                    you are genuine.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> If the reasons cited
                    by you are valid, our editors will work on your manuscript
                    again at no additional cost until your satisfaction.*
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> If your manuscript
                    edited by us is rejected by the journal because of the
                    quality of English, we will re-edit it at no additional cost
                    provided you address all the reviewers comments specific to
                    your study. However, you should not have made more than 15%
                    changes to our edited version before submitting to the
                    journal.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> *Applicable to
                    editing services as well as translation and publication
                    support services that include editing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="container aos-init aos-animate" data-aos="zoom-out">
          <div className="row g-5">
            <div className="col-lg-9 col-md-6 content d-flex flex-column justify-content-center order-last order-md-first">
              <h3 className="fst-italic">
                {" "}
                How to Apply for ManuscriptEdit’s Quality Guarantee
              </h3>
              <p>
                {" "}
                <i className="bi bi-check-circle-fill"></i> Email your complaint
                to{" "}
                <a href="mailto:support@manuscriptedit.com">
                  support@manuscriptedit.com
                </a>{" "}
                with reasons for your dissatisfaction.
              </p>
              <p>
                {" "}
                <i className="bi bi-check-circle-fill"></i> You will receive a
                response from ManuscriptEdit regarding the independent
                reviewer's assessment and suggested solution for resolution
                within two business days.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 order-first order-md-last d-flex align-items-center">
              <div className="img">
                <img
                  src="/img/services-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
