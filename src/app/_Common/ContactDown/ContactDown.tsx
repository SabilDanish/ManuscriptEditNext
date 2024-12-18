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

                <div className="col-lg-6" >
                    <h4 >Your Success is Our Priority</h4>
                    <p>At ManuscriptEdit, we believe every piece of research has the potential to change
                    the world. Together, let’s make sure your work gets the recognition it deserves.</p>
                    <img src="/images/galery/unnamed (1).jpg" alt="#" className='ContactImage ' />
                </div>
            </div>
        </div>
    );
};

export default ContactDown;
