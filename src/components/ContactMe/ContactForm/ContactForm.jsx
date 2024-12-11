import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <>
    <div className="contact-form-content">
        <form action="">
            <div className="name-container">
                <input type="text" name='firstname' placeholder='FirstName' />
                <input type="text" name='lastname' placeholder='LastName' />
            </div>
            <input type="email" name="email" placeholder="Email ID" />
            <input type="tel" name='phone' placeholder='Phone No' />
            <textarea type="text" name="message" placeholder='Write you message here...'></textarea>

            <button>SEND</button>
        </form>
    </div>


    </>
  )
}

export default ContactForm