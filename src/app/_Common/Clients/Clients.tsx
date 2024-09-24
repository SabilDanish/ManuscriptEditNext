import React, { useEffect, useState } from 'react';
import './Clients.css';
import useFetchPartners from '@/app/hooks/more/useRecentPartners';
import { Partner } from '@/app/utils/interfaces';
import { DNA } from 'react-loader-spinner';

const Clients = () => {
    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);
    const [allPartner, setAllPartner] = useState<Partner[]>([]);
    const { loading, error, partners } = useFetchPartners(limit, offset);
    const [activeTab, setActiveTab] = useState<'companies' | 'journals'>('companies');

    const journalImages = [
        "/images/JournalsNew/13.png",
        '/images/JournalsNew/1.png',
        '/images/JournalsNew/2.1.png',
        '/images/JournalsNew/3.avif',
        '/images/JournalsNew/4.png',
        '/images/JournalsNew/5.png',
        "/images/JournalsNew/6.png",
        "/images/JournalsNew/7.png",
        "/images/JournalsNew/8.png",
        "/images/JournalsNew/9.png",
        "/images/JournalsNew/10.png",
        "/images/JournalsNew/11.jpeg",


        // Add more local paths as needed
    ];

    useEffect(() => {
        if (activeTab === 'companies') {
            setAllPartner(prev => [...prev, ...partners]);
        }
    }, [partners, activeTab]);

    const renderLogos = (type: 'companies' | 'journals') => {
        return (
            <div className="logo-grid">
                {loading && type === 'companies' && !allPartner.length && (
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                )}
                {type === 'companies' && allPartner.length ? (
                    allPartner.map((item, index) => {
                        if (index < 12) {
                            return (
                                <div key={index} className="logo-item">
                                    <img src={item.logo_link} alt="Company logo" />
                                </div>
                            );
                        }
                        return null;
                    })
                ) : type === 'journals' ? (
                    journalImages.map((imagePath, index) => (
                        <div key={index} className="logo-item">
                            <img src={imagePath} alt={`Journal ${index + 1}`} />
                        </div>
                    ))
                ) : null}
            </div>
        );
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
                        Research Published in High-Impact Journals
                    </button>
                </div>

                <div className="content">
                    {activeTab === 'companies'
                        ? renderLogos('companies')
                        : renderLogos('journals')}
                </div>
            </div>
        </>
    );
};

export default Clients;
