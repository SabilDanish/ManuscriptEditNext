// components/ConsultationForm.js
import Image from 'next/image';
import './ContactDown.css';
import PeerForm from '../PeerForm/PeerForm';

const ContactDown = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">

                    
                    <PeerForm />

                </div>

                <div className="col-lg-6">
                    <img src="/images/galery/unnamed (1).jpg" alt="#" />
                </div>
            </div>
        </div>
    );
};

export default ContactDown;
