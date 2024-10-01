"use client";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useEffect, useState } from 'react';
import { ourServices, ourServices2 } from '../../utils/ourServices.js'

import './OurServices.css'
import Link from "next/link";

export default function OurServices() {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<any>(0);
    const [selectedSubCategory, setSelectedSubCategory] = useState<any>("")
    const [content, setContent] = useState<any>([])
    const [serviceUrl, setServiceUrl] = useState<any>(ourServices[0].url)
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

    const showSubcategories = (index: any, url: any) => {
        setSelectedCategoryIndex(index);
        setServiceUrl(url)
    };

    const contentHandler = (subcategory:string) => {
        return "Hello World"
    }

    console.log({serviceUrl})
    // useEffect(() => {
    //     if(selectedSubCategory){
    //         const res = ourServices2[selectedCategoryIndex].subcategories.filter((val:any) => {
    //             return typeof(val) === 'object' && Object.keys(val)[0] === selectedSubCategory
    //         })
    //         // console.log({res: Object.entries(res[0])[0][1]})
    //         setContent(res && res[0] ? Object.entries(res[0])[0][1] : [])
    //     }
    // },[selectedSubCategory])

    // console.log({content,selectedSubCategory})

    return (
        <>
            <div className="container">
                <div className="text-center accordion__title" style={{ marginTop: "40px" }}>
                    <h2>Subject Areas</h2>
                </div>
            </div>
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
                                            onClick={() => showSubcategories(index,category.url)}
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
                                                    <div key={idx} className="col-md-12 Centroid">
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
                                        onClick={() => showSubcategories(index, category.url)}
                                    >
                                        {category.category}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div id="content">
                                {ourServices2[selectedCategoryIndex].subcategories.map((subcategory, idx) => {
                                    if (typeof (subcategory) !== 'object') {
                                        return (
                                            <div key={idx} className={`${subcategory !== "See More" ? "subcategory-btn" : "see-more-btn"} text-center`} data-tooltip-id="hello" onMouseEnter={(e:any) => setSelectedSubCategory(e.target.textContent)}>
                                                {subcategory !== "See More" ? (<p>{subcategory}</p>) : <Link href={serviceUrl}><p style={{color: "white"}}>{subcategory}</p></Link>}
                                                {/* <ReactTooltip id="hello" variant="info" place="bottom" content={content.length ? content.join(",") : "Hello World"} /> */}
                                            </div>
                                        )
                                    }
                                }
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}