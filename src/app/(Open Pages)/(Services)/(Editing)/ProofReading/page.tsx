'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import redirect from "@/app/_Common/_functionality/Redirect";
import { usePathname } from 'next/navigation'
import { data } from '../../../../utils/metaFile.js'
import Metadata from "@/app/Metadata";

const newData: any = data;

export default function Home() {
  const pathName: string = usePathname().split("/").filter(val => val).join("")
  let metaData = newData[pathName]
  return (
    <>
    {<Metadata metaData={metaData} />}
      {breadcrum("Services / English Editing", "Proofreading")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* <h3 className="pt-5">Proofreading</h3> */}
              <p className="pt-3">
                Introduction to the critical role of proofreading in ensuring
                polished and error-free written communication.
              </p>
              <div className="list-icon" >
                <span><i className="bi bi-check-lg"></i><h6>Thorough reading of manuscript.</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Spotting all errors.</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Review capitalization and punctuation.</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Check for spelling, grammar, and typos.</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Remove redundancies</h6></span>
                <span><i className="bi bi-check-lg"></i><h6>Rectify improper word usage.</h6></span>
              </div>
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
      </section>
      
      {FAQ()}
    </>
  );
}
