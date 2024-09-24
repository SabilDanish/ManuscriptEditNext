"use client";

import { useEffect, useState } from 'react';
import { ourServices } from '../../utils/ourServices.js'

import './OurServices.css'

export default function OurServices() {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<any>(0);

    const [isMobileView, setIsMobileView] = useState<boolean>(false);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobileView(true);
        } else {
            setIsMobileView(false);
        }
    };

    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize); 
        return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
    }, []);

    const showSubcategories = (index:any) => {
        setSelectedCategoryIndex(index);
    };
    return (
        <>
            <div className="container contBorder">
                {isMobileView ? (
                    <div id="mobile-view" className="accordion">
                        {ourServices.map((category, index) => (
                            <div className="card-services" key={index}>
                                <div className="card-header-services">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left"
                                            type="button"
                                            onClick={() => showSubcategories(index)}
                                        >
                                            {category.category}
                                        </button>
                                    </h2>
                                </div>
                                {selectedCategoryIndex === index && (
                                    <div className="collapse show">
                                        <div className="card-body-services">
                                            <div className="row">
                                                {category.subcategories.map((sub, idx) => (
                                                    <div key={idx} className="col-md-12">
                                                        <div className="subcategory-btn text-center">{sub}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div id="desktop-view" className="row">
                        <div className="col-md-3 pt-10">
                            <div id="sidebar" className="list-group">
                                {ourServices.map((category, index) => (
                                    <div
                                        key={index}
                                        style={{ color: '#696767', cursor: 'pointer' }}
                                        // href="javascript:void(0);"
                                        className={`list-group-item list-group-item-action Activation ${selectedCategoryIndex === index ? 'active' : ''
                                            }`}
                                        onClick={() => showSubcategories(index)}
                                    >
                                        {category.category}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div id="content">
                                {ourServices[selectedCategoryIndex].subcategories.map((subcategory, idx) => (
                                    <div key={idx} className="subcategory-btn text-center">
                                        {subcategory}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}