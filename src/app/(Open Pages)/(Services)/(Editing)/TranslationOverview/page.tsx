'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import clientFeedback from "@/app/_Common/_ClientFeedback/ClientFeedback";
import FAQ from "@/app/_Common/_FAQ/FAQ";
import Metadata from "@/app/Metadata";
import { usePathname } from 'next/navigation'
import { data } from '../../../../utils/metaFile.js'
import ourProfessional from "@/app/_Common/_OurProfessional/OurProfessional";
import SpecializedArea from "@/app/_Common/_SpecializedArea/SpecializedArea";
import redirect from "@/app/_Common/_functionality/Redirect";
const newData: any = data;

export default function Home() {
    const pathName: string = usePathname().split("/").filter(val => val).join("")
    let metaData = newData[pathName]
  return (
    <>
    {<Metadata metaData={metaData} />}
    {breadcrum("Services / English Editing", "Translation Services")}
    <section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                {/* <h3 className="pt-0 pb-3">Breaking the Language Barrier</h3> */}
                <p>
                  We, at ManuscriptEdit not only translate but transcreate documents of highest 
                  standards for all region-specific needs. We do not believe in shortcuts and 
                  provide accurate and timeless language solutions across 70+ languages and 
                  2500+ language pairs . If there is a translation request for a language beyond 
                  the listed pairs, we have the resources to extend our translation service to 
                  cover that language as well.
                </p>

                <p>
                   ManuscriptEdit provides industry-expert linguists with deep industry expertise 
                   to ensure timely delivery of the project with quality and precision par excellence. 
                   Our people-powered translation service also builds customized solutions keeping 
                   in mind the client's time and budget, without compromising the output.
                </p>
            </div>
            <div className="col-md-5">
                <img src="/images/menuscimg/copyedit.jpeg" alt="" width="100%" style={{borderRadius: 10}} />
            </div>
        </div>
        </div>
</section>
<div className="pricing_area bg_color2 pt-50 pb-50">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="pricing_style_four wow flipInY" data-wow-delay="0ms" data-wow-duration="2500ms">
						<div className="pricing_style_four_content">
							<div className="pricing_style_four_content_inner">
								<div className="pricing_style_four_title white">
									<h4>Paper <br/> Translation</h4>
								</div>
							</div>
						</div>
						<div className="pricing_style_four_body">
							<ul>
								<li className="st-list"><i className="fa fa-check"></i> <span>Professional translators accurate content</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Covers various languages for Global...</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Translates legal, business, academic.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Rigorous proofreading for accuracy.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Considers local nuances and idioms.</span></li>
                                <li className="st-list"><i className="fa fa-check"></i><span> Protects sensitive information with agreements.</span></li>
                                <p><b>
                                   Translation Certificate available upon request
                                </b></p>
							</ul>
						</div>
						<div className="pricing_style_four_button">
							<a onClick={() => {redirect('contact-us')}} href="#">Contact Us <span>+</span></a>
						</div>
					</div>
				</div>
                <div className="col-lg-3 col-md-6">
					<div className="pricing_style_four wow flipInY" data-wow-delay="0ms" data-wow-duration="2500ms">
						<div className="pricing_style_four_content">
							<div className="pricing_style_four_content_inner">
								<div className="pricing_style_four_title white">
									<h4>Technical <br/> Translation</h4>
								</div>
							</div>
						</div>
						<div className="pricing_style_four_body">
							<ul>
								<li className="st-list"><i className="fa fa-check"></i> <span>Skilled translators with technical knowledge.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Covers technical documents, manuals, specs.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Precise translation of technical terminology.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Considers industry and sector-specific lang..</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span> Protects proprietary technical information.</span></li>
                                <li className="st-list"><i className="fa fa-check"></i><span> Protects sensitive information with agreements.</span></li>
                                <p><b>
                                    Translation Certificate available upon request.
                                </b></p>
							</ul>
						</div>
						<div className="pricing_style_four_button">
							<a href="#" onClick={() => {redirect('contact-us')}}>Contact Us <span>+</span></a>
						</div>
					</div>
				</div>
                <div className="col-lg-3 col-md-6">
					<div className="pricing_style_four wow flipInY" data-wow-delay="0ms" data-wow-duration="2500ms">
						<div className="pricing_style_four_content">
							<div className="pricing_style_four_content_inner">
								<div className="pricing_style_four_title white">
									<h4>Machine <br/> Translation</h4>
								</div>
							</div>
						</div>
						<div className="pricing_style_four_body">
							<ul>
								<li className="st-list"><i className="fa fa-check"></i> <span>Automated technology for language conversion</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Provides quick results for large volumes.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Applies to documents, websites, texts, more.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span> Human editing to improve translation quality.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Balances cost with automation benefits.</span></li>
                                <li className="st-list"><i className="fa fa-check"></i><span> Can be customized for specific needs.</span></li>
                                <p><b>
                                   Translation Certificate available upon request
                                </b></p>
							</ul>
						</div>
						<div className="pricing_style_four_button">
							<a href="#" onClick={() => {redirect('contact-us')}}>Contact Us <span>+</span></a>
						</div>
					</div>
				</div>
                <div className="col-lg-3 col-md-6">
					<div className="pricing_style_four wow flipInY" data-wow-delay="0ms" data-wow-duration="2500ms">
						<div className="pricing_style_four_content">
							<div className="pricing_style_four_content_inner">
								<div className="pricing_style_four_title white">
									<h4>Transcription TRANSLATION</h4>
								</div>
							</div>
						</div>
						<div className="pricing_style_four_body">
							<ul>
								<li className="st-list"><i className="fa fa-check"></i> <span>Experienced professionals for accurate transc..</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Converts spoken content into written form.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span> Covers interviews, speeches, meetings, etc.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Ensures accurate representation.</span></li>
								<li className="st-list"><i className="fa fa-check"></i><span>Considers local nuances and idioms.</span></li>
                                <li className="st-list"><i className="fa fa-check"></i><span> Protects sensitive information with agreements.</span></li>
                                <li className="st-list"></li>
                                <li className="st-list"></li>
                                <p><b>
                                Transcription Certificate available upon request
                                </b></p>
							</ul>
						</div>
						<div className="pricing_style_four_button">
							<a href="#" onClick={() => {redirect('contact-us')}}>Contact Us <span>+</span></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  <div className="brand_area pt-35 pb-15">
  <div className="container">
      <div className="row">
           <div className="col-md-5 mb-2">
              <div className="">
                  <h5 className="mb-2">Explore our Language Expert's Specialized Areas</h5>
                  <p>
                      From Medicine to Life Sciences, Physical Sciences, Economics and Art & Humanities -- our team of translators are specialized in 1,117 subject areas.
                  </p>
              </div>

               <div className="">
                  <h5 className="mb-2">Why choose ManuscriptEdit?</h5>
                  <p>
                  Our team of experts specializes in 1,117 different subject areas, from medicine to life sciences, physical sciences, arts & humanities, finance, and economics.
                  </p>
              </div>

               <div className="">
                  <h5 className="mb-2">What type of translation do you need?</h5>
                  <p>
                      We have tailored our translational approach that varies for document types and industries, and is based on individual requirements.
                  </p>
              </div>

              <div className="">
                  <h5 className="mb-2">Our translation services cover:</h5>
                  <div className="about_icon_box wow fadeInUp animated" data-wow-delay="0.5s" style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
                                <div className="about_icon_box_inner mb-20">
                                    <span><i className="fa fa-check-square-o"></i> Research papers</span>
                                </div>
                                <div className="about_icon_box_inner mb-20">
                                    <span><i className="fa fa-check-square-o"></i> Training materials</span>
                                </div>
                                <div className="about_icon_box_inner mb-20">
                                    <span><i className="fa fa-check-square-o"></i> Manuals</span>
                                </div>
                                <div className="about_icon_box_inner mb-20">
                                    <span><i className="fa fa-check-square-o"></i> Manufacturing translation</span>
                                </div>              
                            </div>
              </div>

           </div>
           <div className="col-md-7 mb-2">
              <h3 className="mb-3">Supported Languages</h3>
              <div>
                  <img src="/images/menuscimg/supported_lang.jpg" width="100%"/>
              </div>
           </div>
      </div>
   </div>
</div>
    {SpecializedArea()}
    {ourProfessional()}
    {clientFeedback()}
    {FAQ()}
  </>
  );
}
