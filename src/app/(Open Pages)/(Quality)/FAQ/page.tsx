import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import Metadata from "@/app/Metadata";
import { usePathname } from 'next/navigation'
import { data } from '../../../utils/metaFile.js'
const newData: any = data;

export default function Home() {
  const pathName: string = usePathname().split("/").filter(val => val).join("")
  let metaData = newData[pathName]
  return (
    <>
    {<Metadata metaData={metaData} />}
      {breadcrum("Quality", "Frequently Asked Questions")}
      <section id="specials" className="specials faq section-bg mt-3">
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-3">
              <ul className="nav nav-tabs1 flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#tab-1"
                  >
                    Editing Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                    Writing Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                    Publication Support Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row">
                    <div className="col-lg-8 faq-list">
                      <ul>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            className="collapse collapsed"
                            data-bs-target="#faq-list-1"
                            aria-expanded="false"
                          >
                            {" "}
                            ManuscriptEdit has different packages for
                            publication support. Do these packages guarantee
                            publication?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-1"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              We offer four packages under "Publication
                              Support" - Premium Plus, Premium, Advanced and Standard.
                              Depending on your need either you choose one of
                              them or we can also suggest. Publishing depends on
                              many factors. The quality of research work is the
                              most important criterion. Apart from this,
                              journal's editors and reviewers take decision
                              based on several other factors. For example, if
                              the journal office receives two manuscripts
                              related to the similar field, and if they have
                              some rule that they can publish one article on a
                              particular field per issue, then either they will
                              suggest you to look for another journal or they
                              will delay the publication. Therefore, we cannot
                              guarantee publication if you avail our packages.
                              However, the expert team at ManuscriptEdit will
                              assist you to shape up your manuscript in such a
                              way which maximizes the chance of publication.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="200"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-2"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Can you reformat my manuscript that complies with
                            the journal requirement?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-2"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              Yes, under the "Target Journal Formatting" service
                              we format your manuscript following the guidelines
                              provided by the particular journal.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="300"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-3"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Do you correct or format artwork under any of the
                            Publication support packages?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-3"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              No, the correction or reformatting of artwork does
                              not include in any of the packages. We have
                              customized "Illustration and Enhancement Services"
                              under which you can avail different services
                              related to artwork.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="400"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-4"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            How does the "Journal Selection" work at
                            ManuscriptEdit?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-4"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              Our "journal selection" team consists of mainly
                              PhDs who has vast experience in publishing their
                              own research work in various reputed journals.
                              They are aware of different journals in a
                              particular field, and their criteria of
                              publishing, for example scope, target audience,
                              impact factor, rejection rate, etc. They prepare a
                              detailed journal selection report based on several
                              factors and shortlist 5-6 journals which are best
                              suited for your manuscript.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="500"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-5"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Can I send my manuscripts to all the recommended
                            journals simultaneously?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-5"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              No, you cannot. At a time, you can submit your
                              manuscript to a single journal.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="/img/technologies/cloud.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-2">
                  <div className="row">
                    <div className="col-lg-8 faq-list">
                      <ul>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            className="collapse collapsed"
                            data-bs-target="#faq-list-1"
                            aria-expanded="false"
                          >
                            {" "}
                            How does the "Writing services" at ManuscriptEdit
                            work?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-1"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              When you ask for the quotation of specific writing
                              service, we send you a questionnaire, which you
                              need to fill up and return us. Our expert panel
                              will review your answers and get back to you
                              within 1-2 business day/s. Once the order is
                              confirmed, our expert writer starts working on
                              your manuscript. The writer may ask you for more
                              information, if required. Writing at
                              ManuscriptEdit is a collaborative work between our
                              writer and the author. We periodically interact
                              with the author during the course of writing
                              either via E-mail or skype. This helps both the
                              writer and the author whether the manuscript is
                              going in the right direction.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="200"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-2"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Are your writers experienced in different writing
                            style?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-2"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              Yes, expert writers at ManuscriptEdit have 5-10
                              years of writing experience, and many of them have
                              published their own research work in reputed
                              International journals. Therefore, they are aware
                              of the guidelines of different writing and
                              referencing styles such as, MLA, APA, Chicago,
                              Turabian, IEEE.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="300"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-3"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Do I need to provide any outline?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-3"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              Yes, we appreciate if you provide us with a rough
                              outline. Since you have spent a lot of time doing
                              the actual research work, you have better insights
                              of the overall work. Hence, you are the best
                              person to decide which results/section to
                              emphasize or what are the limitations, etc. It
                              will help you to have the desired manuscript, and
                              the work becomes faster as well. Our writer will
                              always assist you to make a quality manuscript.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="400"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-4"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Where do you get the necessary literature for
                            writing?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-4"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              Yes, you need to send us the reprints of the
                              articles, if they are subscribed. We do not have
                              subscription to journals. Recently, there are a
                              lot of open-access journals, which are freely
                              downloadable, and we will arrange them. However,
                              for the subscribed journals we will request you to
                              provide us the literature. If your university or
                              organization does not have access to some
                              particular journal, then only we will directly
                              write to the authors requesting for a reprint.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="500"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-5"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Do I need to provide interpretation of my results?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-5"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              Yes, you need to send us the interpretation of
                              your findings. While sending any graph,
                              data-table, figure, images, etc., please explain
                              what these results indicate. We will polish the
                              language.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="/img/technologies/database.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tab-3">
                  <div className="row">
                    <div className="col-lg-8 faq-list">
                      <ul>
                        <li
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            className="collapse collapsed"
                            data-bs-target="#faq-list-1"
                            aria-expanded="false"
                          >
                            {" "}
                            Can you reformat my manuscript that complies with
                            the journal requirement?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-1"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              Yes, under the "Target Journal Formatting" service
                              we format your manuscript following the guidelines
                              provided by the particular journal.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="200"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-2"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Do you correct or format artwork under any of the
                            Publication support packages?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-2"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              No, the correction or reformatting of artwork does
                              not include in any of the packages. We have
                              customized "Illustration and Enhancement Services"
                              under which you can avail different services
                              related to artwork.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="300"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-3"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            How does the "Journal Selection" work at
                            ManuscriptEdit?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-3"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              Our "journal selection" team consists of mainly
                              PhDs who has vast experience in publishing their
                              own research work in various reputed journals.
                              They are aware of different journals in a
                              particular field, and their criteria of
                              publishing, for example scope, target audience,
                              impact factor, rejection rate, etc. They prepare a
                              detailed journal selection report based on several
                              factors and shortlist 5-6 journals which are best
                              suited for your manuscript.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="400"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-4"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Does ManuscriptEdit guarantee publication in any of
                            the recommended journals?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-4"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              No, we do not guarantee publication. Publication
                              depends on variety of factors. The decision of
                              acceptance/rejection is very subjective to
                              editors, reviewers and editorial policies of a
                              certain journal.
                            </p>
                          </div>
                        </li>

                        <li
                          data-aos="fade-up"
                          data-aos-delay="500"
                          className="aos-init aos-animate"
                        >
                          <i className="bx bx-help-circle icon-help"></i>{" "}
                          <a
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-list-5"
                            className="collapsed"
                            aria-expanded="false"
                          >
                            Can I send my manuscripts to all the recommended
                            journals simultaneously?{" "}
                            <i className="bx bx-chevron-down icon-show"></i>
                            <i className="bx bx-chevron-up icon-close"></i>
                          </a>
                          <div
                            id="faq-list-5"
                            className="collapse"
                            data-bs-parent=".faq-list"
                          >
                            <p>
                              No, you cannot. At a time, you can submit your
                              manuscript to a single journal.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <img
                        src="/img/technologies/infrastructure.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
