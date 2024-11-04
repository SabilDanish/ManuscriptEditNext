// components/ConsultationForm.js
import Image from 'next/image';
import './ContactDown.css';
import PeerForm from '../PeerForm/PeerForm';
import ContactForm from '../ContactForm/ContactForm';

const ContactDown = () => {
    return (
        <div className="container" style={{marginTop:'85px'}}>
            <div className="row" >
                <div className="col-lg-6">

                    
                    <ContactForm />

                </div>

                <div className="col-lg-6">
                    <img src="/images/galery/unnamed (1).jpg" alt="#" className='ContactImage ' />
                </div>
            </div>
        </div>
    );
};

export default ContactDown;
