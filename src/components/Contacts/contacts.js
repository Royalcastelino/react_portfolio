import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import emailjsConfig from './emailjs.config';
import { motion } from 'framer-motion';

const Contacts = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('eemail').value;
    const name = document.getElementById('ename').value;
    const message = document.getElementById('emessage').value;

    emailjs
      .send(
        emailjsConfig.serviceID,
        emailjsConfig.templateID,
        {
          from_name: name,
          message: message + "\n Respond to Email: " + email,
        },
        emailjsConfig.userID
      )
      .then((response) => {
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id='contacts' className='py-24 bg-dark px-8 relative overflow-hidden'>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className='text-5xl font-bold'>
            Let's <span className='text-turquoise text-glow'>Connect</span>
          </h2>
          <p className='text-white/60 text-lg max-w-md'>
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className='flex flex-col gap-6'>
            {[
              { icon: faEnvelope, label: "Email", value: "royalcastelino350@gmail.com", link: "mailto:royalcastelino350@gmail.com" },
              { icon: faPhone, label: "Phone", value: "+91 7619421424", link: "tel:+917619421424" },
              { icon: faLinkedin, label: "LinkedIn", value: "Royal Castelino", link: "https://www.linkedin.com/in/royal-castelino" },
              { icon: faGithub, label: "GitHub", value: "Royalcastelino", link: "https://github.com/Royalcastelino" }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                whileHover={{ x: 10 }}
                href={item.link}
                className='flex items-center gap-6 group'
              >
                <div className='w-12 h-12 rounded-full bg-turquoise/10 flex items-center justify-center text-turquoise group-hover:bg-turquoise group-hover:text-dark transition-all shadow-turquoise-glow'>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <div>
                  <p className='text-white/40 text-xs font-bold uppercase tracking-widest'>{item.label}</p>
                  <p className='text-white font-medium group-hover:text-turquoise transition-colors'>{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise/10 blur-[60px] rounded-full -z-10"></div>

          <form onSubmit={handleFormSubmit} className='space-y-6'>
            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium ml-4">Full Name</label>
              <input type='text' id='ename' placeholder='John Doe' className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-turquoise/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20' />
            </div>
            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium ml-4">Email Address</label>
              <input type='email' id='eemail' placeholder='john@example.com' className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-turquoise/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20' />
            </div>
            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium ml-4">Message</label>
              <textarea id='emessage' rows='4' placeholder='Tell me about your project...' className='w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-turquoise/50 focus:bg-white/10 transition-all text-white placeholder:text-white/20 resize-none' />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              id='subBtn1'
              className='w-full bg-turquoise text-dark font-bold py-4 rounded-2xl hover:bg-turquoise-light transition-all flex items-center justify-center gap-3'
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>

      {/* Decorative bg */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-turquoise/10 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
};

export default Contacts;