"use client";
import { useState, useEffect, useRef } from 'react';
import './getHelp.css';
import { Tabs, Tab } from 'react-bootstrap';
import { data } from './service.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServicestack } from '@fortawesome/free-brands-svg-icons';

const GetHelp = () => {
    const [activeTab, setActiveTab] = useState<keyof typeof data>('Editing Packages');
    const [tabSize, setTabSize] = useState<number | null>()
    const windowSizeRef = useRef({ width: 0, height: 0 });
    const [isClient, setIsClient] = useState(false); // New state to track client-side rendering

    const updateWindowSize = () => {
        if (typeof window !== "undefined") {
            windowSizeRef.current = {
                width: window.innerWidth,
                height: window.innerHeight
            };

            setTabSize(window.innerWidth)
            console.log('Window size updated:', windowSizeRef.current);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsClient(true); // Set client-side rendering to true
            updateWindowSize();
            window.addEventListener('resize', updateWindowSize);

            return () => window.removeEventListener('resize', updateWindowSize);
        }
    }, []);

    const openTab = (tab: any) => {
        setActiveTab(tab);
        console.log({tab})
        console.log(`Active Tab: ${tab}`);
    };

    return (
        <>
            <div className="container">
                <Tabs
                    activeKey={activeTab}
                    onSelect={(tab) => openTab(tab || 'Editing Packages')}
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    // fill
                >
                    {Object.entries(data).map((val: any, index: number) => {
                        const [header, cardData] = val;
                        return (
                            <Tab eventKey={header} title={header} key={index}>
                                {isClient && ( // Conditionally render Swiper only on the client
                                    <Swiper
                                        slidesPerView={tabSize && tabSize > 900 ? 3 : 1}
                                        spaceBetween={30}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        loop={true}
                                        navigation={true}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: true,
                                            pauseOnMouseEnter: true,
                                        }}
                                        // centeredSlides={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        {cardData && cardData.items && cardData.items.length > 0 && cardData.items.map((item: any, index: number) => {
                                            const { title, features, description, link } = item;
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className='carousel-item-custom'>
                                                        <h2><FontAwesomeIcon icon={faServicestack} /> {title}</h2>
                                                        <p>{description}</p>
                                                        {features.map((feature: any, index: number) => (
                                                            <p key={index}>{feature}</p>
                                                        ))}
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        })}
                                    </Swiper>
                                )}
                            </Tab>
                        );
                    })}
                </Tabs>
            </div>
        </>
    );
};

export default GetHelp;