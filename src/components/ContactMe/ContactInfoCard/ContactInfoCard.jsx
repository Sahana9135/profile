import React from 'react';
import './ContactInfoCard.css';
import Email from './mail.png';
import Github from './github.png';
import LinkedIn from './linkedin.png';

function ContactInfoCard({ iconUrl, text }) {
    return (
        <>
            <div className="contact-details-card">
                <div className="icon" >
                    <img src={Email} alt="Email" />
                </div>
                <p>sahanasaravanan2004@gmail.com</p>
            </div>

            <div className="contact-details-card">
                <div className="icon" >
                    <img src={Github} alt="Github" />
                </div>
                <p>https://github.com/Sahana9135?tab=repositories</p>
            </div>

            <div className="contact-details-card">
                <div className="icon" >
                    <img src={LinkedIn} alt="Linkedin" />
                </div>
                <p>https://www.linkedin.com/in/sahanasaravanan9135/</p>
            </div>

        </>
    )
}

export default ContactInfoCard;