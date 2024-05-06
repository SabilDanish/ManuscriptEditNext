'use client';
import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";
import redirect from "@/app/_Common/_functionality/Redirect";

export default function Home() {
  return (
    <>
    {breadcrum("Services / Research Support", "Boost your citations")}
    <section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3 className="pt-2 pb-3">Increase the visibility of your research. Boost your citations</h3>
                <p>
                   ManuscriptEdit’s “Citation Booster” is here to help you reach a wider 
                   audience and boost the citation count for your manuscript. Explore
                    below to discover how.
                </p>
            </div>
            <div className="col-md-6">
                <img src="/images/menuscimg/reach-support.jpg" alt="" width="100%" style={{borderRadius: 10}} />
            </div>
        </div>
        </div>
</section>

    <div className="service_area pt-0 pb-0">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="service_style_ten wow flipInY animated" data-wow-delay="0ms" data-wow-duration="2500ms" style={{visibility: 'visible', animationDuration: '2500ms', animationDelay: '0ms', animationName: 'flipInY'}}>
						<div className="single_service_style_ten">
							<div className="service_style_ten_icon pb-2">
							</div>
							<div className="service_style_ten_content">
								<h4 className="pb-2"><a href="service-details.html">Newsletters</a></h4>
								<p>Stay Connected, Stay Cited.</p>
                                <div className="em-about-icon-box2">
                                    <div className="list-icon upper">
                                        <span><i className="fa fa-check"></i> <h6> Create visually appealing newsletters featuring your pictures and a publication link to your manuscript. </h6> </span>
                                        <span><i className="fa fa-check"></i> <h6>  Personalized newsletters to keep the target audience updated about your groundbreaking research.</h6> </span>
                                        <span><i className="fa fa-check"></i> <h6> Target of 6000+ authors, scholars, and researchers with similar research interest. </h6> </span>
                                    </div>
					           </div>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-12 col-md-12 col-sm-12">
					<div className="service_style_ten wow flipInY animated" data-wow-delay="0ms" data-wow-duration="2500ms" style={{visibility: 'visible', animationDuration: '2500ms', animationDelay: '0ms', animationName: 'flipInY'}}>
						<div className="single_service_style_ten">
							<div className="service_style_ten_icon pb-2">
							</div>
							<div className="service_style_ten_content">
								<h4 className="pb-2"><a href="service-details.html">Tweets</a></h4>
								<p>Catchy, Concise, and Citable.</p>
                                <div className="em-about-icon-box2">
                                    <div className="list-icon upper">
                                        <span><i className="fa fa-check"></i> <h6>  Prepare tweetable abstracts that showcase the essence of your study in a captivating manner. </h6> </span>
                                        <span><i className="fa fa-check"></i> <h6> Appropriate hashtags to boost visibility and relevance.</h6> </span>
                                    </div>
					           </div>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-12 col-md-12 col-sm-12">
					<div className="service_style_ten wow flipInY animated" data-wow-delay="0ms" data-wow-duration="2500ms" style={{visibility: 'visible', animationDuration: '2500ms', animationDelay: '0ms', animationName: 'flipInY'}}>
						<div className="single_service_style_ten">
							<div className="service_style_ten_icon pb-2">
							</div>
							<div className="service_style_ten_content">
								<h4 className="pb-2"><a href="service-details.html">Simplified Abstract</a></h4>
								<p>Making Complexity Accessible</p>
                                <div className="em-about-icon-box2">
                                    <div className="list-icon upper">
                                        <span><i className="fa fa-check"></i> <h6> Tailoring your abstracts to make it comprehensible to non-experts and the general public </h6> </span>
                                        <span><i className="fa fa-check"></i> <h6> Transform your intricate scientific language into clear and straightforward terms without losing the core message of your study</h6> </span>
                                        <span><i className="fa fa-check"></i> <h6>  Connect with a wider audience. Share your research with journalists, policymakers, and people beyond academia.</h6> </span>
                                    </div>
					           </div>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-12 col-md-12 col-sm-12">
					<div className="service_style_ten wow flipInY animated" data-wow-delay="0ms" data-wow-duration="2500ms" style={{visibility: 'visible', animationDuration: '2500ms', animationDelay: '0ms', animationName: 'flipInY'}}>
						<div className="single_service_style_ten">
							<div className="service_style_ten_icon pb-2">
							</div>
							<div className="service_style_ten_content">
								<h4 className="pb-2"><a href="service-details.html">Scientific News Report</a></h4>
								<p>Unveil your research to the world</p>
                                <div className="em-about-icon-box2">
                                    <div className="list-icon upper">
                                        <span><i className="fa fa-check"></i> <h6> Comprehensive report to highlight the key aspect of your research. </h6> </span>
                                        <span><i className="fa fa-check"></i> <h6> 600-700 words of concise yet informative summary of your manuscript</h6> </span>
                                    </div>
					           </div>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-12 col-md-6 col-sm-12">
					<div className="service_style_ten wow flipInY animated" data-wow-delay="0ms" data-wow-duration="2500ms" style={{visibility: 'visible', animationDuration: '2500ms', animationDelay: '0ms', animationName: 'flipInY'}}>
						<div className="single_service_style_ten">
							<div className="service_style_ten_icon pb-2">
							</div>
							<div className="service_style_ten_content">
								<h4 className="pb-2"><a href="service-details.html">Social Media Platform</a></h4>
								<p>Amplify Your Impact.</p>
                                <div className="em-about-icon-box2">
                                    <div className="list-icon upper">
                                        <span><i className="fa fa-check"></i> <h6> Take your research to various social media platforms, including Facebook, LinkedIn, ResearchGate, and more </h6> </span>
                                        <span><i className="fa fa-check"></i> <h6>  Connect with academicians, students, researchers, and universities worldwide</h6> </span>
                                        <span><i className="fa fa-check"></i> <h6>  Reach a broader audience and garner more attention.</h6> </span>
                                    </div>
					           </div>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-12 col-md-6 col-sm-12">
                <button onClick={() => {redirect('contact-us')}} className="btn btn-primary mt-3 mr-3">
              Schedule a Call
              </button>
                    </div>
			</div>
		</div>
	</div>
    


<div className="process_area pt-50 pb-50">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section_title text_center mb-90 mt-3">
                    <div className="section_main_title">
                        <h1>Why Choose ManuscriptEdit?</h1>
                    </div>
                    <div className="em_bar">
                        <div className="em_bar_bg"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6">
                <div className="single_process_work">
                    <div className="single_it_work_content">
                        <div className="work_number">
                            <img src="/images/software-work-icon1.png" alt="icon"/>
                        </div>
                        <div className="single_work_content_title pt-1">
                            <h4>Flexible Pricing Plans</h4>
                        </div>
                        <div className="single_it_work_content_desc">
                            <p>We offer competitive and transparent pricing to cater to research needs and budgets. Sign up to get special offers and discounts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single_process_work">
                    <div className="single_it_work_content">
                        <div className="work_number">
                            <img src="/images/software-work-icon2.png" alt="icon"/>
                        </div>
                        <div className="single_work_content_title pt-1">
                            <h4>Register/Sign Up to Know More</h4>
                        </div>
                        <div className="single_it_work_content_desc">
                            <p>Our team is readily available if you have any questions or need further assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="single_process_work">
                    <div className="single_it_work_content">
                        <div className="work_number">
                            <img src="/images/software-work-icon3.png" alt="icon"/>
                        </div>
                        <div className="single_work_content_title pt-1">
                            <h4>We're Here to Help</h4>
                        </div>
                        <div className="single_it_work_content_desc">
                            <p>With decades of combined experience in academic research support, our team comprises seasoned experts committed to your scholarly success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</>
  );
}
