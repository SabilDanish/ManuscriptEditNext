"use client";

import "./OurProfessional.css"



export default function OurProfessional() {

    return (
        <div className="service_area pt-60 pb-70">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section_title text_center mb-55">
						<div className="section_main_title">
							<h1>Our professionals</h1>
						</div>
						{/* <div className="em_bar">
							<div className="em_bar_bg"></div>
						</div> */}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-md-6 col-sm-12">
					<div className="service_style_ten wow flipInY" data-wow-delay="0ms" data-wow-duration="2500ms">
						<div className="single_service_style_ten st-grid-2">
							<div className="service_style_ten_icon pb-2">
									 <img src="/images/menuscimg/dr_emm-min.png" className="OurprofessionalImage"   style={{borderRadius:5}}/>
                                <h5>Dr. E M M</h5>
							</div>
							<div className="service_style_ten_content">
								<h6 className="pb-2"><a href="#">Education:</a></h6>
								<p className='mb-0' style={{fontSize:12}}>
                                  - Ph.D in Cellular Biology, with a focus on Immunology - University of California, San Diego.
                                </p>
                                <p className='mb-0'  style={{fontSize:12}}>
                                  -  Masters in Biotechnology - Texas A&M University.
                                </p>
                                <p className='mb-0'  style={{fontSize:12}}>
                                  -  BSc in Microbiology with a Minor in Chemistry - Texas A&M University in College Station, TX.
                                </p>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-3 col-md-6 col-sm-12">
					<div className="service_style_ten wow flipInY" data-wow-delay="0ms" data-wow-duration="2500ms">
						<div className="single_service_style_ten st-grid-2">
							<div className="service_style_ten_icon pb-2">
									 <img src="/images/menuscimg/dr_lb.png" className="OurprofessionalImage"   style={{borderRadius:5}}/>
                                <h5>Dr. L B</h5>
							</div>
							<div className="service_style_ten_content">
								<h6 className="pb-2"><a href="#">Education:</a></h6>
								<p className='mb-0' style={{fontSize:12}}>
                                 - Dr. L B received his Master and Doctorate degrees from Indian Institute of Science (IISc),
                                </p>
                                <p className='mb-0'  style={{fontSize:12}}>
                                 - Bangalore, and Indian Institute of Technology (IIT) Kharagpur in Metallurgy & Materials Science, respectively.
                                </p>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-3 col-md-6 col-sm-12">
					<div className="service_style_ten wow flipInY" data-wow-delay="0ms" data-wow-duration="2500ms">
						<div className="single_service_style_ten st-grid-2">
							<div className="service_style_ten_icon pb-2">
									 <img src="/images/menuscimg/dr_dl.png" className="OurprofessionalImage" style={{borderRadius:5}}/>
                                <h5>Dr. D L</h5>
							</div>
							<div className="service_style_ten_content">
								<h6 className="pb-2"><a href="#">Education:</a></h6>
								<p className='mb-0' style={{fontSize:12}}>
                                   - Ph.D. in Music Composition - Duke University
                                </p>
                                <p className='mb-0'  style={{fontSize:12}}>
                                   - M.A. in Music Composition - Copland Conservatory, City University of New York/Queens College
                                </p>
                                <p className='mb-0'  style={{fontSize:12}}>
                                  - B.A. in Piano Performance, Hampshire College
                                </p>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-3 col-md-6 col-sm-12">
					<div className="service_style_ten wow flipInY" data-wow-delay="0ms" data-wow-duration="2500ms">
						<div className="single_service_style_ten st-grid-2">
							<div className="service_style_ten_icon pb-2">
									 <img src="/images/menuscimg/dr_BH-min.png" className="OurprofessionalImage"   style={{borderRadius:5}}/>
                                <h5>Dr. B H</h5>
							</div>
							<div className="service_style_ten_content">
								<h6 className="pb-2"><a href="#">Education:</a></h6>
								<p className='mb-0' style={{fontSize:12}}>
                                  - Ph.D in Microbiology and Immunology - Dalhousie University.
                                </p>
                                <p className='mb-0'  style={{fontSize:12}}>
                                  - BSc and MSc degrees in Microbiology - University of Guelph.
                                </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}