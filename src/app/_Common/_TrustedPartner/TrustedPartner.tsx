import React from 'react';
import  './TrustedPartner.css';

const TrustedPartner: React.FC = () => {
  return (
    <div>
      <h2 style={{textAlign: 'center', marginTop: '20px'}}>Trusted by 500+ Partners</h2>
      <p style={{textAlign: 'center'}}>Uniting Academia: Bridging Journals, Publishers, Universities, and Societies</p>
      <div className= "marqueeContainer">
      <div className= "marqueeContent">
        <img src="./images/Logos.jpg" width="3016" height="60" alt="partners" />
      </div>
    </div>
      {/* <marquee behavior="scroll" direction="left" style={{marginTop: '0px'}}>
        <img src="./images/Logos.jpg" width="3016" height="60" alt="partners" style={{marginBottom: '30px'}} />
      </marquee> */}
    </div>
  );
}

export default TrustedPartner;
