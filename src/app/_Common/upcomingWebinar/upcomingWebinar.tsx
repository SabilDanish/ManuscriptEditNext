"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import  './upcomingWebinar.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const UpcomingWebinar = () => {
    return (
        <>
            <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                    <h1 className="accordion__title">Upcoming webinar</h1>
                </div>
            </div>

            <div className="container UpcomingwebCon">
                <div className='Choose-Card-Main backColor'>
                    <div className="dividerzz"></div>
                    <div className='Choose-Card'>
                        <Swiper
                            spaceBetween={10}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={3}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="testimonialSwiper"
                        >
                            <SwiperSlide>
                                
                                    <div className="card" style={{ width: "100%" }}>
                                        <img className="card-img-top" src="/images/feature1.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                
                            </SwiperSlide>
                            <SwiperSlide>
                                
                                    <div className="card" style={{ width: "100%" }}>
                                        <img className="card-img-top" src="/images/feature2.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                               
                            </SwiperSlide>
                            <SwiperSlide>
                               
                                    <div className="card" style={{ width: "100%" }}>
                                        <img className="card-img-top" src="/images/feature3.jpg" alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                
                            </SwiperSlide>

                            
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcomingWebinar;
