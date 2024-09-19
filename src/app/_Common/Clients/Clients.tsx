import React, { useEffect, useState } from 'react';
import './Clients.css';
import useFetchPartners from '@/app/hooks/more/useRecentPartners';
import { Partner } from '@/app/utils/interfaces';
import { DNA } from 'react-loader-spinner';

const Clients = () => {
    const [limit, setLimit] = useState(12)
    const [offset, setOffset] = useState(0)
    const [allPartner, setAllPartner] = useState<Partner[]>([])
    const { loading, error, partners } = useFetchPartners(limit, offset)

    useEffect(() => {
        setAllPartner(prev => [...prev, ...partners])
    }, [partners])
    return (
        // <div style={{marginTop:"60px"}}>
        //     <h2 className='TitleAll' style={{ textAlign: 'center', marginTop: '20px' }}>Trusted by 500+ Partners</h2>
        //     <p style={{ textAlign: 'center', marginBottom:"40px" }}>Uniting Academia: Bridging Journals, Publishers, Universities, and Societies</p>
        //     <div className="marquee-container" style={{ marginTop: '0px' }}>
        //         <div className="marquee-content">
        //             <img src="./images/Logos.jpg" alt="partners" className="image-important" />
        //         </div>
        //     </div>
        // </div>
        <div className="container mb-3">
                <div className="row">
                    <h2 className='TitleAll'>Trusted by 500+ Partners</h2>
                    <h5 className='TitleDescription'>Uniting Academia: Bridging Journals, Publishers, Universities, and Societies</h5>
                    {
                        loading && !allPartner.length && (
                            <DNA
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        )
                    }
                    {
                        allPartner.length ? allPartner.map((partner, index) => {
                            const { logo_link, part_link } = partner
                            console.log({logo_link,part_link})
                            if(index < 6){
                                return (
                                    <div className="col-md-4" key={index}>
                                        <a href={part_link} target="_blank" rel="noopener noreferrer" className="card-link">
                                            <div className="card text-center mr-4 mt-5">
                                                <div className="card-body">
                                                <img src={logo_link} width="200px" height="83px" alt="" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }
                        }) : ""
                    }
                    <br />
                </div>
            </div>
    );
}

export default Clients;
