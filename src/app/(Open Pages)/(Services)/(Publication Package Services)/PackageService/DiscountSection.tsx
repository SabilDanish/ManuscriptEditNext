import React from 'react';
import './DiscountSection.css';

export const DiscountBanner: React.FC = () => {
    return (
        <></>
        // <div className="discount-banner">
        //     <span className="discount-text">35% Off</span>
        // </div>
    );
};

export const DiscountMessage: React.FC = () => {
    return (
        <div className="discount-message">
            To avail a 35% discount coupon, please email your requirements to <a href="mailto:success@manuscriptedit.com" className="email-button">success@manuscriptedit.com</a>.
        </div>
    )
}