"use client"

import "./Testimonial.css";
import Card from 'react-bootstrap/Card';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import images
import testi1 from '../../utils/testi/testi1.png';
import testi2 from '../../utils/testi/testi2.jpg';
import testi3 from '../../utils/testi/testi3.png';

const Testimonial = () => {

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="star-rating">
                {Array.from({ length: fullStars }, (_, index) => (
                    <span key={index} className="star full">★</span>
                ))}
                {halfStar && <span className="star full">★</span>}
                {Array.from({ length: emptyStars }, (_, index) => (
                    <span key={index} className="star empty">★</span>
                ))}
            </div>
        );
    };

    return (
        <>


            <div className="container">
                <div className="row" style={{ justifyContent: "center" }}>
                    <h1 className="accordion__title">Testimonial</h1>
                </div>
            </div>

            <div className="container">
                <div className='Choose-Card-Main backColor'>
                    <div className="dividerzz"></div>
                    <div className='Choose-Card'>
                        <Swiper
                            spaceBetween={10}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={2}
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
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="testimonialSwiper"
                        >
                            <SwiperSlide>
                                <Card className='Choose-Cardstesti testimonialWidth'>
                                    <p>" We are very thankful to you for your help in improving our manuscript! Without your help, we could not have published our reviews. We will continue to work and use your help. Please accept sincere gratitude from all the authors of the manuscript."</p>
                                    <Card.Body className="d-flex justify-content-start">
                                        <div >
                                            <Card.Img
                                                variant="top"
                                                style={{
                                                    width: '4rem',
                                                    marginRight: '1rem',
                                                    borderRadius: '50%',
                                                    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' // Adding box shadow
                                                }}
                                                src={testi1.src}
                                            />
                                        </div>
                                        <div>
                                            <Card.Title>Dr. Tatiana Yu. GAGKAEVA</Card.Title>
                                            <Card.Text>All-Russian Institute of Plant Protection (VIZR), RUSSIA.</Card.Text>
                                        </div>
                                    </Card.Body>
                                    {renderStars(4.5)}
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='Choose-Cardstesti testimonialWidth'>
                                    <p>" At the beginning of my research works I faced a lot of obstacles including finding a correct journal to publish my researches in, English language edition and proofreading, response to reviewers, etc. Manuscriptedit had solved these problems for me... "</p>
                                    <Card.Body className="d-flex justify-content-start">
                                        <div >
                                            <Card.Img
                                                variant="top"
                                                style={{
                                                    width: '4rem',
                                                    marginRight: '1rem',
                                                    borderRadius: '50%',
                                                    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' // Adding box shadow
                                                }}
                                                src={testi2.src}
                                            />
                                        </div>
                                        <div>
                                            <Card.Title>Seerwan O. Hasan</Card.Title>
                                            <Card.Text>M.B.Ch.B (University of Sulaimani/School of Medicine)</Card.Text>
                                        </div>
                                    </Card.Body>
                                    {renderStars(4.0)}
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className='Choose-Cardstesti testimonialWidth'>
                                    <p>"Thank you very much Manuscriptedit for the type of writing which is apical, really it is a good job that exceeds my expectations. The most important thing is that | am thankful to the people who work in this association for the good work and the good writing "</p>
                                    <Card.Body className="d-flex justify-content-start">
                                        <div >
                                            <Card.Img
                                                variant="top"
                                                style={{
                                                    width: '4rem',
                                                    marginRight: '1rem',
                                                    borderRadius: '50%',
                                                    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)' // Adding box shadow
                                                }}
                                                src={testi3.src}
                                            />
                                        </div>
                                        <div>
                                            <Card.Title>Dr. Laref Nora</Card.Title>
                                            <Card.Text> M.B.Ch.B (University of Sulaimani/School of Medicine)</Card.Text>
                                        </div>
                                    </Card.Body>
                                    {renderStars(5.0)}
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Testimonial;
