import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";

export default function Home() {
  return (
    <>
    {breadcrum("Editor", "Career")}
     <div className="col-lg-10 col-md-10 col-sm-10 mt-5 mb-5 mx-auto">
     <div className="formmm" style={{margin: 0, padding: 25}}>
         <p>
             We have two categories of editors at Manuscriptedit:
         </p>
         <div className="uldiv2">
             <ul>
                 <li className="uldiv2-li">In-house editors</li>
                 <li className="uldiv2-li">Online editors</li>
             </ul>
         </div>
         <p>
             We hire the most qualified and experienced scientists, researchers and doctors with excellent writing and
             editing skills as editors in our editorial panel.
         </p>
     </div>
 </div>

 <div className="col-lg-10 col-md-10 col-sm-10 mt-5 mb-5 mx-auto">
     <div className="formmm" style={{margin: 0, padding: 25}}>
         <p>
             We recruit editors into our editorial panel throughout the year. We look for the following qualification,
             skill and experience to select our editors.
         </p>
         <div className="uldiv23">
             <ul>
                 <li className="uldiv23-li">Must have completed or attended a PhD, MS, MD, MCh, DS or equivalent course at a top university.
                 </li>
                 <li className="uldiv23-li">Proven record of publishing in peer reviewed journals.</li>
                 <li className="uldiv23-li">Proficiency in English with adequate writing and editing skills.</li>
                 <li className="uldiv23-li">A teacher and/or book editor with verifiable experience.</li>
                 <li className="uldiv23-li">A master copy editor and expert in various documentation styles, such as MLA, APA.</li>
                 <li className="uldiv23-li">Proficient in MS Word and at least one other software application, such as InDesign or Publisher.
                 </li>
                 <li className="uldiv23-li">Dedicated to providing our clients with the world’s finest, most professional editing.</li>
             </ul>
         </div>
         <p className="pb-15">
             We hire the most qualified and experienced scientists, researchers and doctors with excellent writing and
             editing skills as editors in our editorial panel.
         </p>
         <p className="bld">How to Apply</p>
         <p>If you meet the necessary skills and qualifications, please send your resume and a sample of your writing to <a href="hrd@reseapro.com">hrd@reseapro.com</a>. We will respond within 48 hours.</p>
     </div>
 </div>
    </>
  );
}
