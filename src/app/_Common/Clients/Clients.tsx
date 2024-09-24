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
    const [activeTab, setActiveTab] = useState<'companies' | 'journals'>('companies');

    useEffect(() => {
        setAllPartner(prev => [...prev, ...partners])
    }, [partners])

    const renderLogos = (items: string) => {
        return (
            <div className="logo-grid">
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
                {allPartner.length ? allPartner.map((item, index) => {
                    if (index < 12) {
                        return (
                            <div key={index} className="logo-item" >
                                <img src={item.logo_link} alt="image" />
                            </div>
                        )
                    }
                }) : ""}
            </div>
        )
    };
    return (
        <>
            <div className="companies-journals-container">
                <div className="tabs clients-tab">
                    <button
                        className={activeTab === 'companies' ? 'active' : ''}
                        onClick={() => setActiveTab('companies')}
                    >
                        Serving Renowned Global Brands
                    </button>
                    <button
                        className={activeTab === 'journals' ? 'active' : ''}
                        onClick={() => setActiveTab('journals')}
                    >
                        Research Published in High-Impact
                        Journals
                    </button>
                </div>

                <div className="content">
                    {activeTab === 'companies' ? renderLogos("companies") : renderLogos("journals")}
                </div>
            </div>
        </>
    );
}

export default Clients;
