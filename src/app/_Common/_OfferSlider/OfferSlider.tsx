import React from 'react';
import './OfferSlider.css';
import Link from 'next/link';

const OfferSlider = () => {
    return (
        <div style={{ marginTop: "60px", marginBottom: "60px" }}>
            {/* <h2 className='TitleAll' style={{ textAlign: 'center', marginTop: '20px' }}>Trusted by 500+ Partners</h2> */}
            {/* <p style={{ textAlign: 'center', marginBottom:"40px" }}>Uniting Academia: Bridging Journals, Publishers, Universities, and Societies</p> */}
            <Link href={'/PackageService'}>
                <div className="marquee-container" style={{ marginTop: '0px' }}>
                    <div className="marquee-content" >
                        {/* <img src="./images/Logos.jpg" alt="partners" className="image-important" /> */}
                        <h3 style={{ marginLeft: "500rem", color: "#060e33" }}>Grab 35% Off on All Publication Packages—Publish your work in high impact journals</h3>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h3 style={{ marginLeft: "500rem", color: "#060e33" }}>Grab 35% Off on All Publication Packages—Publish your work in high impact journals</h3>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h3 style={{ marginLeft: "500rem", color: "#060e33" }}>Grab 35% Off on All Publication Packages—Publish your work in high impact journals</h3>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <h3 style={{ marginLeft: "500rem", color: "#060e33" }}>Grab 35% Off on All Publication Packages—Publish your work in high impact journals</h3>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
                </div>
            </Link>
        </div>
    );
}

export default OfferSlider;
