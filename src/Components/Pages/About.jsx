import React from 'react';
import './About.css'; // Importo stilizimet e reja
import icone1 from '../../assets/icone1.png'
import icone2 from '../../assets/icone2.png'
import icone3 from '../../assets/icone3.png'
import support from '../../assets/img-support.png'
import privacy from '../../assets/img-privacy.png'
import pickup from '../../assets/img-pickup.png'

function About() {
    return (
        <section className="background-about">
         <div className="about-container">
            <h1 className="about-title">Online car rental</h1>
             <p className="about-description">Connecting you to the local car dealers with the best price guarantee</p>
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

            <h1 className='how-dose-title'>How does it work ?</h1>
        <div className='how-works'>
                <div className='support-card'>
                    <img className='img-support' src={support}/>
                    <h1>24/7 support</h1>
                    <p>User support service, road assistance, and a ticket tracking system are at your disposal.</p>
                </div>
                <div className='privacy-card'>
                    <img className='img-privacy' src={privacy}/>
                    <h1>Privacy and Transparency</h1>
                    <p>No data is shared with third parties, and no hidden fees are applied.</p>
                </div>
                <div className='pickup-card'>
                    <img className='img-pickup' src={pickup}/>
                    <h1>Delivery and Pickup at the Airport</h1>
                    <p>These services and much more are offered by our Hosts to respond to your specific demands.</p>
                </div>
        </div>

        </section>

        
    );
}


export default About;