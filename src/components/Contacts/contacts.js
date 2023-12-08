import React from 'react';
import './contacts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import emailjsConfig from './emailjs.config';

const Contacts=()=>{
    const handleFormSubmit = (event) => {
        const email=document.getElementById('eemail').value;
        const name=document.getElementById('ename').value;
        const message=document.getElementById('emessage').value;
        event.preventDefault();
        emailjs
          .send(
            emailjsConfig.serviceID,
            emailjsConfig.templateID,
            {
            //   to_email: email, // Replace with the recipient's email
              from_name: name, // Replace with the sender's name
              message: message+"\n Respond to Email: "+email, // Replace with the message
            },
            emailjsConfig.userID
          )
          .then((response) => {
            console.log('Email sent successfully:', response);
          })
          .catch((error) => {
            console.error('Email sending failed:', error);
          });
      };
    
    return(
        <section id='contacts'>
            <h2 className='contactsTitle'>Contact Me</h2>
            <form onSubmit={handleFormSubmit}>
                <div><input type='text' id='ename' placeholder='Full Name'/></div>
                <div><input type='text' id='eemail' placeholder='Email Id'/></div>
                <div><input type='text' id='emessage' placeholder='Message'/></div>
                <button id='subBtn1'>Send</button>
            </form>
            <a href="https://www.linkedin.com/in/royal-castelino" id='linkedIn'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        </section>
    );
};
export default Contacts;