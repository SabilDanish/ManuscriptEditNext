"use client";

import React, { useState } from 'react';
import './SampleWorks.css';
import { tabContent } from '../../utils/TabsContent.js'

const newTab: any = tabContent

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Medical Sciences');
    return (
        <>
            <div className="accordion__title" style={{ marginTop: '20px' }}>
                <h2 className="accordion_title" style={{ textAlign: 'center' }}>Proofreading - Sample Works</h2>
            </div>
            {
                newTab && newTab.length && newTab.map((content: any, index: number) => {
                    return (
                        <div key={index} className="tabs-container" style={{marginBottom:"30px"}}>
                            <div className="tabs">
                                {Object.keys(content).map((tab) => (

                                    <button
                                        key={tab}
                                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>

                                ))}
                            </div>
                            <div className="tab-content">
                                <img
                                    src={newTab[index][activeTab].image}
                                    alt={activeTab}
                                    className="tab-image"
                                />
                            </div>
                        </div>
                    )
                })
            }

        </>

    );
};

export default Tabs;
