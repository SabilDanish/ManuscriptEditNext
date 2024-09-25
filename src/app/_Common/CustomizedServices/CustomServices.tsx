import React from 'react';
import { FaCheck ,FaPaintBrush,FaPen,FaPencilRuler,FaLanguage,FaSearch,FaFileAlt,FaSquareRootAlt } from 'react-icons/fa';
import './CustomServices.css';

const services = [
    { id: 1, icon: <FaCheck />, title: 'Plagiarism Check' },
    { id: 2, icon: <FaPaintBrush />, title: 'Poster Creation' },
    { id: 3, icon: <FaPen />, title: 'Technical Writing' },
    { id: 4, icon: <FaPencilRuler />, title: 'Illustration Service' },
    { id: 5, icon: <FaLanguage />, title: 'Translation Service' },
    { id: 6, icon: <FaSearch />, title: 'Indexing' },
    { id: 7, icon: <FaFileAlt />, title: 'Typesetting' },
    { id: 8, icon: <FaSquareRootAlt />, title: 'Equation Building' },
];


const CustomizedServices = () => {
    return (
        <div className="customized-services">
            <h2 className='text-center Gappy'>Customized Services</h2>
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
