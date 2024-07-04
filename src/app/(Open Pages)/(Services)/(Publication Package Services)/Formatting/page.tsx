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
        "Formatting"
      )}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text_center mb-50 mt-5">
              <div className="section_main_title">
                <h1>Formatting</h1>
              </div>
              <div className="em_bar">
                <div className="em_bar_bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tab_area pb-60 pt-130">
        <div className="container">
          <div className="row nagative_margin2">
            <div className="col-lg-12">
              <div className="tab_content">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                     className="nav-link"
                     data-toggle="tab"
                     href="#tabs-1"
                     role="tab"
                     aria-expanded="false"
                    >
                      <i className="fa fa-laptop"></i> TARGET JOURNAL FORMATTING
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-expanded="false"
                    >
                      <i className="fa fa-laptop"></i> CAMERA READY FORMATTING
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-expanded="false"
                    >
                      <i className="fa fa-laptop"></i> TYPESETTING & INDEXING
                    </a>
                  </li>
                </ul>
                <div className="tab-content pt-3 ">
                  <div
                    className="tab-pane mt-60 active"
                    id="tabs-1"
                    role="tabpanel"
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="tab_thumb">
                          <img src="/images/portfolio/tab2.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tab_content ml-3">
                          <div className="tab_content_title pb-4">
                            <h4>What We Provide</h4>
                          </div>
                          <div className="tab_content_text">
                            <p>
                              Each academic journal has a specific requirement
                              and its own style of formatting texts, figures,
                              tables and references. We can help you in
                              formatting your manuscript correctly for the
                              target journal to ensure that your manuscript is
                              not returned from editorial office, and is peer
                              reviewed. Our editors take special attention to
                              minute details of the formatting style to make an
                              error-free formatting of the whole manuscript.
                            </p>
                          </div>
                          <div className="tab_content_sub_text">
                            <ul>
                              <li className="DotLi">
                                {" "}
                                {" "}
                                Format the full manuscript in accordance with
                                the author's guidelines of the journal.
                              </li>
                              <li>
                                {" "}
                                {" "}
                                Ensure the desired line spacing and margin of
                                the journal.
                              </li>
                              <li>
                                {" "}
                                {" "}
                                Arrange texts, paragraphs and figures within a
                                specified margin and position.
                              </li>
                              <li>
                                {" "}
                                {" "}
                                Ensure that references are presented in correct
                                style (e.g. APA, MLA, CMS, Turabian etc.)
                              </li>

                              <li>
                                {" "}
                                 If
                                available, use the word template of the journal
                                for the working document to ensure correct
                                formatting according to the journal standard.
                              </li>
                            </ul>
                            <p className="mt-3">
                              The service does not include redrawing the figure,
                              table and other illustrations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane mt-60" id="tabs-2" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="tab_thumb">
                          <img src="/images/portfolio/tab1.jpg" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tab_content ml-3">
                          <div className="tab_content_title pb-4">
                            <h4>What We Provide</h4>
                          </div>
                          <div className="tab_content_text">
                            <p>
                              Most conference proceedings and some journals
                              often insist on preparing the full text of your
                              manuscript in camera-ready format, i.e. preparing
                              the final manuscript which is ready for direct
                              printing by the publishers. We can help you in
                              making the camera ready format of your manuscript.
                              So that you can save time and effectively utilize
                              it solely for research. It's a very time consuming
                              process to organize the completed paper in the
                              required format.
                            </p>
                            <p>
                              Our camera-ready formatting service includes the
                              following:
                            </p>
                          </div>
                          <div className="tab_content_sub_text">
                            <ul>
                              <li>
                                {" "}
                                {" "}
                                Prepare designated layout and formatting style.
                              </li>
                              <li>
                                {" "}
                                {" "}
                                Arrange texts, paragraphs and figures within a
                                specified margin and position.
                              </li>
                              <li>
                                {" "}
                                {" "}
                                Ensure that the manuscript is ready for direct
                                printing by the publisher.
                              </li>
                              <li>
                                {" "}
                                 Use
                                the desired word template for the working
                                document, if available.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane mt-60" id="tabs-3" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="tab_content">
                          <div className="tab_content_title pb-4">
                            <h4>Data Server Security</h4>
                          </div>
                          <div className="tab_content_text">
                            <p>
                              Typesetting is an important part of preparing a
                              manuscript for the market. Our professional
                              typesetting service involves enhancing the quality
                              and value of our clients' manuscripts by:
                            </p>
                          </div>
                          <div className="tab_content_sub_text">
                            <ul>
                              <li>
                                {" "}
                                {" "}
                                Reformatting the text and images into the
                                required style.
                              </li>
                              <li>
                                {" "}
                                {" "}
                                Arranging the text, tables and figures on the
                                predefined specifications of page sizes.
                              </li>
                              <li>
                                {" "}
                                {" "}
                                Preparing a fully formatted manuscript for
                                direct printing.
                              </li>
                              <li>
                                {" "}
                                {" "}
                                Indexing is generally designed to help readers
                                find their way around a document quickly and
                                easily. This is made by preparing a route map
                                for a document. The indexing service at
                                ManuscriptEdit covers manuscripts such as
                                research papers, books, website, or database.
                                Our indexers will make a systematic list of all
                                the entities for an easy navigation within the
                                manuscript.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tab_thumb">
                          <img src="/images/portfolio/tab2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
              Request a Quote
              </button>
              <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
              Submit Manuscript
              </button>
              <button onClick={() => {redirect('contact-us')}} className="btn btn-primary mt-3 mr-3">
              Schedule a Call
              </button>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>

      <div className="container">
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Formatting</th>
              <th scope="col">Turnaround Time in Days</th>
              <th scope="col">Price per Assignment in US$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={5}>Target Journal Formatting</td>
              <td>1</td>
              <td>0.037</td>
            </tr>
            <tr>
              <td>2</td>
              <td>0.033</td>
            </tr>
            <tr>
              <td>3</td>
              <td>0.03</td>
            </tr>
            <tr>
              <td>5</td>
              <td>0.026</td>
            </tr>
            <tr>
              <td>10</td>
              <td>0.022</td>
            </tr>
            <tr>
              <td rowSpan={4}>Camera Ready Formatting	</td>
              <td>2</td>
              <td>0.04</td>
            </tr>
            <tr>
              <td>3</td>
              <td>0.037</td>
            </tr>
            <tr>
              <td>5</td>
              <td>0.033</td>
            </tr>
            <tr>
              <td>10</td>
              <td>0.03</td>
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
