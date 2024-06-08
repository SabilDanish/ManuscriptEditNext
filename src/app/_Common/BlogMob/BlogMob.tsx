"use client";

import React from "react";
import "./BlogMob.css";
import image1 from "../../utils/images/blog-banner1.jpg";
import image2 from "../../utils/images/Blog-banner2.jpg";
import image3 from "../../utils/images/blog-banner-3.jpg";

const BlogMob = () => {
    return (
        <>

            <div className="container ContainerDesk">
                <div className="row" style={{justifyContent:"center"}}>
                    <h1 className="accordion__title">OUR BEST-READ SCIENTIFIC ARTICLES</h1>
                </div>
            </div>




            <div className="container ContainerDesk" style={{marginBottom:"70px"}}>
                <div className="row" style={{justifyContent:"center" , marginBottom:"20px !important"}}>
                <img src={image1.src}  className="BlogImg" alt="Blog Banner" />

                <h6 className="contents">Exploring the Importance of Google Scholar Citations for Researchers <span className="ContentSpan" style={{display:"block"}}>-May 28, 2024</span></h6>
                
                </div>


                <div className="row" style={{justifyContent:"center", marginBottom:"20px !important"}}>
                <img src={image2.src} className="BlogImg" alt="Blog Banner" />

                <h6 className="contents">Exploring the Importance of Google Scholar Citations for Researchers <span className="ContentSpan" style={{display:"block"}}>-May 28, 2024</span></h6>
                
                </div>


                <div className="row" style={{justifyContent:"center", marginBottom:"20px !important"}}>
                <img src={image3.src} className="BlogImg" alt="Blog Banner" />

                <h6 className="contents">Exploring the Importance of Google Scholar Citations for Researchers <span className="ContentSpan" style={{display:"block"}}>-May 28, 2024</span></h6>
                
                </div>


            </div>
            
        </>
    );
}

export default BlogMob;
