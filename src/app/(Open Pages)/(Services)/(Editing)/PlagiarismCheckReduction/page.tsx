'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
  return (
    <>
    {breadcrum("Services / English Editing", "Plagiarism Check and Reduction")}
    <section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h3 className="pt-0 pb-3">Plagiarism Check and Reduction</h3>
                <p>
                   Plagiarism Check is a service dedicated to ensuring the originality 
                   and integrity of written content. Using advanced plagiarism detection 
                   tools and techniques, the service thoroughly scans documents to 
                   identify any instances of plagiarism or unoriginal text.
                </p>
                <div className="about_icon_box wow fadeInUp animated" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                    <div className="about_icon_box_inner mb-20">
                        <span><i className="fa fa-check-square-o"></i>   Plagiarism check report.</span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                        <span><i className="fa fa-check-square-o"></i>  Identify significant overlaps in text with published and in-press articles.</span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                        <span><i className="fa fa-check-square-o"></i>   Reduction or elimination of plagiarized text.</span>
                    </div>
                    <div className="about_icon_box_inner mb-20">
                        <span><i className="fa fa-check-square-o"></i> Ensuring no extent of overlap in text..</span>
                    </div>
                </div>
                <button onClick={() => {redirect('register')}} className="btn btn-primary mt-3 mr-3">
                Submit Manuscript Now 
              </button>
            </div>
            <div className="col-md-5">
                <img src="/images/menuscimg/copyedit.jpeg" alt="" width="100%" style={{borderRadius: 10}} />
            </div>
        </div>
        </div>
</section>
    {SpecializedArea()}
    {ourProfessional()}
    {clientFeedback()}
    {FAQ()}
  </>
  );
}
