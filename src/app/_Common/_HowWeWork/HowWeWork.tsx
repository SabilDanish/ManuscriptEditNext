import Link from "next/link";

export default function howWeWork(type: number = 1) {
  return (
    <>
      {type === 1 && (
        <section className="pt-5 pb-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_sub_title uppercase mb-3"></div>
                <div className="section_main_title">
                  <h1>How We Work</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex2">
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/smallcard1.webp"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">
                  Addressing your queries
                </h5>
              </div>
            </div>
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/smallcard2.png"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">
                  Confirmation of your Order
                </h5>
              </div>
            </div>
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/smallcard3.png"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">Assigning your Order</h5>
              </div>
            </div>
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/smallcard4.webp"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">Review in Progress</h5>
              </div>
            </div>
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/smallcard5.png"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">
                  Delivering the Polished Paper
                </h5>
              </div>
            </div>
            <div className="card text-center mt-5" style={{ width: "18rem" }}>
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/smallcard6.webp"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">Answering Feedback</h5>
              </div>
            </div>
          </div>
        </section>
      )}

      {type === 2 && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title text_center mb-50 mt-3">
                  <div className="section_main_title">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="section_title text_center mb-50 mt-3">
                          <div className="section_sub_title uppercase mb-3"></div>
                          <div className="section_main_title">
                            <h1>How We Work</h1>
                          </div>
                          <div className="em_bar">
                            <div className="em_bar_bg"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <img
                  src="/images/menuscimg/journal_selection.jpg"
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {type === 3 && (
        <section className="pt-5 pb-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text_center mb-50 mt-3">
                <div className="section_sub_title uppercase mb-3"></div>
                <div className="section_main_title">
                  <h1>How We Work</h1>
                </div>
                <div className="em_bar">
                  <div className="em_bar_bg"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container d-flex2">
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/A5.png"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">
                  Addressing your queries
                </h5>
              </div>
            </div>
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/A8.png"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">
                  Confirmation of your Order
                </h5>
              </div>
            </div>
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/A7.png"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">Assigning your Order</h5>
              </div>
            </div>
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/A6.png"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">Review in Progress</h5>
              </div>
            </div>
            <div className="card text-center mr-4 mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/A9.png"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">
                  Delivering the Polished Paper
                </h5>
              </div>
            </div>
            <div className="card text-center mt-5">
              <div className="card-body">
                <Link href={"/Process"}>
                  <img
                    src="images/A10.png"
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </Link>
                <h5 className="card-title small-card">Answering Feedback</h5>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
