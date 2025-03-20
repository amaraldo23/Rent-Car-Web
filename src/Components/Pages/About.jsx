import React from 'react';
import './About.css'; // Importo stilizimet e reja
import icone1 from '../../assets/icone1.png'
import icone2 from '../../assets/icone2.png'
import icone3 from '../../assets/icone3.png'

function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">Online car rental</h1>
            <p className="about-description">
            Connecting you to the local car dealers with the best price guarantee</p>

            <div className="services-list">
                <div className="service-card">
                    <img className='icone1' src={icone1}/>
                    <h2>Search & Compare</h2>
                    <p>Hundreds of rental car options from local dealers all around Albania with an unmatched price.</p>
                </div>
                <div className="service-card">
                <img className='icone2' src={icone2}/>
                    <h2>Book with no hidden fees</h2>
                    <p>We do not require or block credit card amounts as a deposit. Booking process takes only 2 minutes</p>
                </div>
                <div className="service-card">
                <img className='icone3' src={icone3}/>
                    <h2>Pay at pickup</h2>
                    <p>Pick-up at the location you want and enjoy your travel. Review your experience to help fellow travellers too!</p>
                </div>
            </div>
        </div>
    );
}


export default About;