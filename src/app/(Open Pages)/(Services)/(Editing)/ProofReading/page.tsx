'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
  
  return (
    <>
      {breadcrum("Services / English Editing", "Proof Reading")}
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pt-5">Proofreading</h3>
              <p className="pt-3">
                Introduction to the critical role of proofreading in ensuring
                polished and error-free written communication.
              </p>
              <ul >
                <li>Thorough reading of manuscript.</li>
                <li>Spotting all errors.</li>
                <li>Review capitalization and punctuation.</li>
                <li>Check for spelling, grammar, and typos.</li>
                <li>Remove redundancies</li>
                <li>Rectify improper word usage.</li>
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
      </section>
      
      {FAQ()}
    </>
  );
}
