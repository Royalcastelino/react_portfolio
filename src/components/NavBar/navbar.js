import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contact from '../../assets/contact.png';
import { motion } from 'framer-motion';

const Navbar = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contacts");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="navbar sticky top-0 left-0 right-0 z-[100] h-20 px-8 flex items-center justify-between bg-dark-glass backdrop-blur-lg border-b border-white/10"
        >
            <motion.img
                whileHover={{ scale: 1.1 }}
                src={logo} alt="logo" className='object-contain h-12 w-16 cursor-pointer'
            />

            <div className='hidden md:flex items-center gap-8'>
                {['Home', 'Skills', 'Projects'].map((item) => (
                    <Link
                        key={item}
                        to={item.toLowerCase() === 'home' ? 'intro' : item.toLowerCase()}
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='text-white font-medium cursor-pointer relative group transition-colors hover:text-turquoise'
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-turquoise transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
                <a
                    href="https://drive.google.com/file/d/14D7pk3sxvvKSsSkx_RROtevKJ2snjRmQ/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-white font-medium cursor-pointer relative group transition-colors hover:text-turquoise'
                >
                    Resume
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-turquoise transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='flex items-center gap-2 bg-turquoise text-dark px-6 py-2 rounded-full font-bold transition-all hover:shadow-turquoise-glow'
                onClick={scrollToContact}
            >
                <img src={contact} alt="contact" className='h-5 w-5' />
                Contact Me
            </motion.button>
        </motion.nav>
    )
}

export default Navbar;