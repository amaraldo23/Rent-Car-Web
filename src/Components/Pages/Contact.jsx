import React from 'react';
import './Contact.css';

function Contact() {
    
    return (
        <section className="contact-container">
            <div className="contact-header">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-info">
                    Rental offers affordable car rental in Albania. Get reliable and safe vehicles with complimentary insurance and 24/7 assistance. Contact us now to book a car or get more information about our services.
                </p>
            </div>
            
            <div className="contact-cards">
                <div className="contact-card email-card">
                    <div className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </div>
                    <h2 className="card-title">Email</h2>
                    <div className="card-content">
                        <a href="mailto:marketing@rentout.ai">marketing@rentout.ai</a>
                        <a href="mailto:info@rentout.ai">info@rentout.ai</a>
                        <a href="mailto:support@rentout.ai">support@rentout.ai</a>
                    </div>
                </div>
                
                <div className="contact-card phone-card">
                    <div className="card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                        </svg>
                    </div>
                    <h2 className="card-title">Phone</h2>
                    <div className="card-content">
                        <a href="tel:+355699090900">+355 69 90 90 900</a>
                        <a href="tel:+35677592190">+356 77 592 190</a>
                    </div>
                </div>
            </div>
            <div className="car-footer">
                <p>© 2025 Rent-a-Car. Të gjitha të drejtat e rezervuara.</p>
            </div>
        </section>
    );
}

export default Contact;