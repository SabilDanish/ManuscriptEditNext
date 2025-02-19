'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import redirect from "@/app/_Common/_functionality/Redirect";
import { usePathname } from 'next/navigation'
import { data } from '../../../../utils/metaFile.js'
import Metadata from "@/app/Metadata";
import Renovation from "@/app/_Common/Renovation/Renovation";
import Dropdown2 from "@/app/_Common/Dropdown2/Dropdown2";

const newData: {[key: string]: {[key: string]: string}} = data;

export default function Home() {
  const pathName: string = usePathname().split("/").filter(val => val).join("")
  let metaData = newData[pathName]
  return (
    <>
    {<Metadata metaData={metaData} />}
      {/* {breadcrum("Services / English Editing", "Proofreading")} */}
      {/* <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
             
              <p className="pt-3">
                Introduction to the critical role of proofreading in ensuring
                polished and error-free written communication.
              </p>
              <ul className="list-icon">
                <span><i className="bi bi-check-lg"></i><h6>Thorough reading of manuscript.</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Spotting all errors.</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Review capitalization and punctuation.</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Check for spelling, grammar, and typos.</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Remove redundancies</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Rectify improper word usage.</h6></span>
              </ul>
              <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
                Submit Manuscript Now 
              </button>
            </div>
            <div className="col-md-6">
              <img
                src="/images/menuscimg/profedd.jpg"
                alt=""
                width="100%"
                style={{ borderRadius: 10 }}
              />
            </div>
            
          </div>
          
        </div>
      </section> */}

      <Renovation/>

      <div className="wcus-container">
        <div className="wcus-client-reviews">
          <h3 className="editing-overview-heading">Testimonial</h3>
          {[
            {
              imgSrc: "https://manuscriptedit.com/_next/static/media/sd.f75dbd94.jpeg",
              text: "The best editing service I've used. Got published in record time!",
              name: "Dr. Emily Carter",
            },
            {
              imgSrc: "https://manuscriptedit.com/_next/static/media/ah.73aaea49.jpeg",
              text: "Exceptional support from expert editors. Highly recommended!",
              name: "Prof. John Williams",
            },
          ].map((review, index) => (
            <div className="wcus-review" key={index}>
              <img src={review.imgSrc} alt="Client" />
              <p>
                "{review.text}" - <strong>{review.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <Dropdown2 />
    </>
  );
}
