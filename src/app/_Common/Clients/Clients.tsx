import React from 'react';
import './Clients.css';

const Clients = () => {
    return (
        <div style={{marginTop:"60px"}}>
            <h2 className='TitleAll' style={{ textAlign: 'center', marginTop: '20px' }}>Trusted by 500+ Partners</h2>
            <p style={{ textAlign: 'center', marginBottom:"40px" }}>Uniting Academia: Bridging Journals, Publishers, Universities, and Societies</p>
            <div className="marquee-container" style={{ marginTop: '0px' }}>
                <div className="marquee-content">
                    <img src="./images/Logos.jpg" alt="partners" className="image-important" />
                </div>
            </div>
        </div>
    );
}

export default Clients;
