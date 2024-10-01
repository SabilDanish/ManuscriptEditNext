import React from 'react';
import testi1 from '../../utils/testi/aa.jpeg';
import testi2 from '../../utils/testi/as.jpeg';
import testi3 from '../../utils/testi/ad.jpeg';
import testi4 from '../../utils/testi/af.jpeg';
import testi5 from '../../utils/testi/ag.jpeg';
import testi6 from '../../utils/testi/ah.jpeg';
import testi7 from '../../utils/testi/aj.jpeg';
import testi8 from '../../utils/testi/sa.jpeg';
import testi9 from '../../utils/testi/ss.jpeg';
import testi10 from '../../utils/testi/sd.jpeg';
import testi11 from '../../utils/testi/sh.jpeg';
import './Testimonial.css';


const Testimonial = () => {
  return (
<>
<div className="container unique-testimonial-section">
    <h3 className="unique-testimonial-title mb-3" style={{color:'#21252c'}}>Testimonials</h3>
    <h2 className="unique-testimonial-heading mb-5">We have worked with thousands of amazing people</h2>

    <div className="row">
        <div className="col-lg-3 col-sm-12 d-flex flex-column mt-5">
            <div className="card unique-testimonial-card">
                <p className="unique-testimonial-content">"Thank you for your comments and corrections of my paper- it is done in much more professional way."</p>
                
                <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi1.src} alt="SavvyCal" />
                </div>
                <div className="unique-testimonial-author">Firas obeidat,Jordan university hospital, Jordan</div>
                </div>
            </div>

            <div className="card unique-testimonial-card mt-3">
                <p className="unique-testimonial-content">"Please send my great appreciation to the editors, they have done a wonderful job. I am very confident now in submitting my work to the journal. I will certainly recommend your service to any researcher who needs such kind of service."</p>
                <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi2.src} alt="SavvyCal" />
                </div>
                <div className="unique-testimonial-author">Z G,University of New South Wales, Australia</div>
                </div></div>

            <div className="card unique-testimonial-card mt-3">
                <p className="unique-testimonial-content">"Many thanks for your excellent work and the comments. I like it very much, Appreciated."</p>
                <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi3.src} alt="SavvyCal" />
                </div>
                <div className="unique-testimonial-author">J Y,Seoul National University, Republic of Korea</div>
                </div></div>
        </div>

        <div className="col-lg-6 col-sm-12 d-flex flex-column">
            <div className="card unique-testimonial-card unique-main-card">
                <p className="unique-testimonial-content">"I am very pleased to see your corrections in my document, which I actually wrote so carefully choosing every word and checked it for spelling and grammar. I could not believe there was something more to correct. After experiencing the free sample editing, I realised that it is definitely beneficial to submit a manuscript for professional English language editing at Manuscriptedit.com. Thank you very much for your thoughtful work."</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                    <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi4.src} alt="SavvyCal" />
                </div>
                        <div className="unique-testimonial-author">M C,University of Split, Croatia</div>
                    </div></div>
                </div>
            </div>
            <div className="col-lg-12 d-flex flex-row mt-12">
                <div className="card unique-testimonial-card m-3">
                    <p className="unique-testimonial-content">"Thank you and your team for writing my research proposal. I just had a look at the work and I am pleased with your excellent and up to date review."</p>
                    <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi11.src} alt="SavvyCal" />
                </div>
                    <div className="unique-testimonial-author">Michael Foster,Northwest University , China</div>
                </div>
                </div>

                <div className="card unique-testimonial-card m-3">
                    <p className="unique-testimonial-content">"My research paper was handled very professionally by your manuscript editing service. Thank you for thorough English language editing and checking in minute details."</p>
                    <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi6.src} alt="SavvyCal" />
                </div>
                    <div className="unique-testimonial-author">J L,Iztapalpa, Mexico</div>
                </div></div>
            </div>
            <div className="col-lg-12 d-flex flex-row mt-12">
                <div className="card unique-testimonial-card m-3">
                    <p className="unique-testimonial-content">"Thanks for your English manuscript proofreading service. I am very much satisfied with your timely delivery."</p>
                    
                    <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi7.src} alt="SavvyCal" />
                </div><div className="unique-testimonial-author">H M,Osaka University, Japan</div>
                </div></div>

                <div className="card unique-testimonial-card m-3">
                    <p className="unique-testimonial-content">"Thank you very much for your prompt reply of sending my manuscript after sample editing. I appreciate your works."</p>
                    
                    <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi8.src} alt="SavvyCal" />
                </div><div className="unique-testimonial-author">D W K,Cheongju University, Republic of Korea</div>
                </div></div>
            </div>
        </div>

        <div className="col-lg-3 col-sm-12 d-flex flex-column mt-5">
            <div className="card unique-testimonial-card">
                <p className="unique-testimonial-content">"Thank you for the excellent work. We are very satisfied and will come back with new manuscript soon!"</p>
                <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi9.src} alt="SavvyCal" />
                </div>
                <div className="unique-testimonial-author">Lars-Ake,Jordan university hospital, Jordan, Sweden</div>
            </div></div>

            <div className="card unique-testimonial-card mt-3">
                <p className="unique-testimonial-content">"Thank you so much for the free editing done on my document. I can say that it is very good and more than what I have expected. I look forward to using your services in future and recommending your business to my friends and associates."</p>
                <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi10.src} alt="SavvyCal" />
                </div>
                <div className="unique-testimonial-author">SNSA,Fakulti Bahasa Moden dan Komunikasi - Utama, Malaysia</div>
            </div></div>

            <div className="card unique-testimonial-card mt-3">
                <p className="unique-testimonial-content">"Thank you. You and your editorial/writing team have done an EXCELLENT job and i am grateful for your generosity."</p>
                <div className='d-flex'>
                  <div className="unique-card-icon">
                    <img src={testi5.src} alt="SavvyCal" />
                </div>
                <div className="unique-testimonial-author">Emily Selman,Northwest University , China, Saudi Arabia</div>
            </div></div>
        </div>
    </div>
</div>

</>
  );
};

export default Testimonial;
