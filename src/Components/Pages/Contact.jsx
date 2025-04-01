import React from 'react';
import './Contact.css'; // Importo stilizimet e reja

function Contact() {
    return (
        <section className="contact-container">
            <div>
            <h1 className="contact-title">Online car rental</h1>
            <h4 className='contact-info'>
            Rentout's evolution as an integrated car sharing and carpooling platform is a testament to the power of innovation in addressing the challenges of contemporary urban mobility. By offering a holistic solution that combines efficiency, sustainability, and user convenience, Rentout stands as a driving force in shaping a future where transportation goes beyond individual ownership to become a shared, community-driven experience. As Rentout continues to pave the way for integrated mobility solutions, it leaves an indelible mark on the landscape of sustainable urban transportation.
            </h4>
            </div>
            <div className="contact-card"> 
                <h2>Book with no hidden fees</h2>
                <p>We do not require or block credit card amounts as a deposit. Booking process takes only 2 minutes</p>
            </div>
        </section>
    );
}


export default Contact;