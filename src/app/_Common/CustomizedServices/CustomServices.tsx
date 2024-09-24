import React from 'react';
import { FaEdit, FaPen, FaChartBar, FaAward } from 'react-icons/fa'; // Import Font Awesome icons
import './CustomServices.css'; // Import the CSS file

const services = [
    { id: 1, icon: <FaEdit />, title: 'Editing Packages' },
    { id: 2, icon: <FaPen />, title: 'Writing Assistance' },
    { id: 3, icon: <FaChartBar />, title: 'Data Analysis Assistance' },
    { id: 4, icon: <FaAward />, title: 'Publication Package' },
];

const CustomizedServices = () => {
    return (
        <div className="customized-services">
            <h2 className='text-center'>Customized Services</h2>
            <div className="service-cards">
                {services.map((service) => (
                    <div key={service.id} className="service-card">
                        <div className="icon">{service.icon}</div>
                        <p>{service.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomizedServices;
