import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import howWeWork from "@/app/_Common/_HowWeWork/HowWeWork";
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
    {breadcrum("More", "About Us")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pb-2">
              <h3 className="">WHY CHOOSE US</h3>
              <p className="pt-3">
                ManuscriptEdit specializes in providing services in Scientific &
                English editing, proofreading, medical writing, academic
                writing, formatting and publication support. Within a short span
                of time, the company has grown rapidly to be counted among the
                world's leading service providers in English editing and
                proofreading. It has served clients in over 80 countries.
                ManuscriptEdit has a healthy blend of over 500 in-house and
                online contractual editors from top universities and research
                centres worldwide. The editorial panel includes subject experts
                in all subject fields of science, medicine, engineering, art,
                history, economics, politics, humanities, business management
                and social sciences in addition to English experts.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="/images/why1.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row rowflex">
            <div className="col-md-6 pb-2">
              <h3 className="">KEY PEOPLE</h3>
              <p className="pt-3 pb-2">
                The company’s Board of Directors includes eminent scientists,
                medical professionals, IT experts and business executives with
                years of experience working in research institutions,
                universities, hospitals, corporations and publishing houses. Our
                global delivery model combined with efficient editing process
                management system , robust document handling system, secured
                payment process, quality assessment system, and strong
                commitment and dedication, has enabled us to become a global
                player and a trustworthy partner for English editing and
                proofreading of highest quality.
              </p>
              <p>
                Our diverse board ensures expertise while our systems ensure
                efficiency, trust, and global excellence.
              </p>
            </div>
            <div className="col-md-6 pt-2">
              <img
                src="/images/aim.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="container d-flex1">
          <div className="card text-center mt-5 mr-4 wid18 wid-autoo">
            <div className="card-body">
              <img src="/images/com.png" alt="" />
              <h5 className="card-title">Best Security</h5>
              <p className="card-text">
                Paper shared by you will be highly confidential and handled by
                qualified professionals.
              </p>
            </div>
          </div>
          <div className="card text-center mt-5 mr-4 wid18 wid-autoo">
            <div className="card-body">
              <img src="/images/ontime_delivery-min.png" alt="" />
              <h5 className="card-title">On-Time Delivery</h5>
              <p className="card-text">
                We value your time and have a well-known track record of
                delivery before deadline.
              </p>
            </div>
          </div>
          <div className="card text-center mt-5 mr-4 wid18 wid-autoo">
            <div className="card-body">
              <img src="/images/acceptance-min.png" alt="" />
              <h5 className="card-title">Acceptance</h5>
              <p className="card-text">
                Get maximum possibilities of journal acceptance with the help of
                our experienced subject experts.
              </p>
            </div>
          </div>
          <div className="card text-center mt-5 wid18 wid-autoo">
            <div className="card-body">
              <img src="/images/great_support-min.png" alt="" />
              <h5 className="card-title">Great Support</h5>
              <p className="card-text">
                Get 24 X 7 instant support with experienced team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pb-2">
              <h3 className="">OUR AIM</h3>
              <p className="pt-3 pb-2">
                Quality is the essence of our services. Our motto is to provide
                the best quality editing service at the most competitive price.
                We have highly qualified and experienced scientists, researchers
                and English editors in our editorial panel.
              </p>
              <p>
                We adopt a rigorous editing test to select the best editors with
                proven record of publication in peer reviewed international
                journals. They actively combine their careers in editing and
                research, and serve as peer reviewers in major international
                peer-reviewed journals. So we are very knowledgeable and
                familiar with the standard and expectations of reviewers of the
                journals. We believe that with our knowledge resources, we can
                make a difference and help researchers and students achieve
                their publication goals, and help corporations become more
                efficient.
              </p>
            </div>
            <div className="col-md-6 pt-4">
              <img
                src="/images/aim.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
          </div>
        </div>
      </section>
      {howWeWork()}
    </>
  );
}
