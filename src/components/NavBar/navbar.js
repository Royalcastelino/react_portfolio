import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const NAV_ITEMS = [
    { label: 'Home', to: 'intro' },
    { label: 'Skills', to: 'skills' },
    { label: 'Experience', to: 'experience' },
    { label: 'Education', to: 'education' },
    { label: 'Projects', to: 'projects' },
    { label: 'Certifications', to: 'certifications' },
    { label: 'Resume', to: null, href: 'https://drive.google.com/file/d/1A9Ue_peRZGhYK0v5sHD0VMjidUzYHf6j/view?usp=sharing' },
];

const Navbar = () => {
    const [btnHovered, setBtnHovered] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContact = () => {
        setMenuOpen(false);
        const contactSection = document.getElementById('contacts');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                    ? 'h-16 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
                    : 'h-20 bg-transparent'
                    }`}
            >

                <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <motion.img
                        whileHover={{ scale: 1.08, filter: 'drop-shadow(0 0 8px rgba(64, 224, 208, 0.6))' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        src={logo}
                        alt="logo"
                        className="object-contain h-10 w-14 cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    />

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) =>
                            item.href ? (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -1 }}
                                    className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
                                >
                                    {item.label}
                                    <span className="absolute inset-x-4 -bottom-0.5 h-px bg-turquoise scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </motion.a>
                            ) : (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={600}
                                    onSetActive={() => setActiveSection(item.to)}
                                >
                                    <motion.div
                                        whileHover={{ y: -1 }}
                                        className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 group ${activeSection === item.to ? 'text-turquoise' : 'text-white/70 hover:text-white'
                                            }`}
                                    >
                                        {item.label}
                                        <span
                                            className={`absolute inset-x-4 -bottom-0.5 h-px bg-turquoise transition-transform duration-300 origin-left ${activeSection === item.to ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                                }`}
                                        />
                                    </motion.div>
                                </Link>
                            )
                        )}
                    </div>

                    <div className="flex items-center gap-3">

                        <motion.button
                            whileTap={{ scale: 0.93 }}
                            onClick={scrollToContact}
                            onHoverStart={() => setBtnHovered(true)}
                            onHoverEnd={() => setBtnHovered(false)}
                            className="hidden md:flex items-center gap-2 relative overflow-hidden px-5 py-2 rounded-full text-sm font-semibold border border-turquoise/50 text-turquoise group"
                            style={{ background: 'transparent' }}
                        >
                            {/* Sweep fill layer */}
                            <span className="absolute inset-0 bg-turquoise translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-full" />

                            {/* Rocket icon — launches up-right, new one enters from bottom-left */}
                            <span className="relative z-10 w-4 h-4 overflow-visible flex items-center justify-center">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    {btnHovered ? (
                                        <motion.span
                                            key="rocket-in"
                                            initial={{ x: 0, y: 0, rotate: -45, opacity: 1 }}
                                            animate={{ x: 0, y: 0, rotate: 45, opacity: 1 }}
                                            exit={{ x: 0, y: 0, opacity: 1 }}
                                            transition={{ duration: 0.32, ease: 'easeOut' }}
                                            className="absolute inset-0 flex items-center justify-center leading-none"
                                        >
                                            <FontAwesomeIcon icon={faPaperPlane} className="text-dark text-sm" />
                                        </motion.span>
                                    ) : (
                                        <motion.span
                                            key="rocket-idle"
                                            initial={{ x: 0, y: 0, rotate: -45, opacity: 1 }}
                                            animate={{ x: 0, y: 0, rotate: -45, opacity: 1 }}
                                            exit={{ x: 14, y: -14, rotate: -45, opacity: 0 }}
                                            transition={{ duration: 0.28, ease: 'easeIn' }}
                                            className="absolute inset-0 flex items-center justify-center leading-none"
                                        >
                                            <FontAwesomeIcon icon={faPaperPlane} className="text-turquoise text-sm" />
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </span>

                            <span className="relative z-10 group-hover:text-dark transition-colors duration-300 ml-1">
                                Contact Me
                            </span>
                        </motion.button>

                        {/* Hamburger (mobile) */}
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMenuOpen((o) => !o)}
                            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="block w-5 h-px bg-white rounded-full"
                            />
                            <motion.span
                                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.2 }}
                                className="block w-5 h-px bg-white rounded-full"
                            />
                            <motion.span
                                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="block w-5 h-px bg-white rounded-full"
                            />
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed top-16 left-4 right-4 z-[99] rounded-2xl bg-[#111]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden md:hidden"
                    >
                        <div className="flex flex-col p-4 gap-1">
                            {NAV_ITEMS.map((item, i) =>
                                item.href ? (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                        onClick={() => setMenuOpen(false)}
                                        className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.08] font-medium text-sm transition-all"
                                    >
                                        {item.label}
                                    </motion.a>
                                ) : (
                                    <Link
                                        key={item.label}
                                        to={item.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={600}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.06 }}
                                            className="px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.08] font-medium text-sm cursor-pointer transition-all"
                                        >
                                            {item.label}
                                        </motion.div>
                                    </Link>
                                )
                            )}

                            {/* Mobile Contact Button — sweep fill + rocket */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: NAV_ITEMS.length * 0.06 }}
                                className="mt-2 pt-2 border-t border-white/10"
                            >
                                <motion.button
                                    onClick={scrollToContact}
                                    whileHover="hovered"
                                    initial="idle"
                                    animate="idle"
                                    className="relative w-full overflow-hidden flex items-center justify-center gap-2 border border-turquoise text-turquoise px-5 py-3 rounded-xl text-sm font-bold active:scale-95 group"
                                    style={{ background: 'transparent' }}
                                >
                                    {/* Sweep fill layer */}
                                    <span className="absolute inset-0 bg-turquoise translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out rounded-xl" />

                                    {/* Rocket */}
                                    <span className="relative z-10 w-4 h-4 overflow-visible flex items-center justify-center">
                                        <motion.span
                                            variants={{
                                                idle: { x: 0, y: 0, rotate: -45, opacity: 1, transition: { duration: 0.28 } },
                                                hovered: { x: 12, y: -12, rotate: -45, opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
                                            }}
                                            className="absolute inset-0 flex items-center justify-center leading-none"
                                        >
                                            <FontAwesomeIcon icon={faPaperPlane} className="text-turquoise group-hover:text-dark text-sm transition-colors duration-300" />
                                        </motion.span>
                                        <motion.span
                                            variants={{
                                                idle: { x: -12, y: 12, rotate: -45, opacity: 0, transition: { duration: 0.28 } },
                                                hovered: { x: 0, y: 0, rotate: -45, opacity: 1, transition: { duration: 0.3, ease: 'easeOut', delay: 0.1 } },
                                            }}
                                            className="absolute inset-0 flex items-center justify-center leading-none"
                                        >
                                            <FontAwesomeIcon icon={faPaperPlane} className="text-dark text-sm" />
                                        </motion.span>
                                    </span>

                                    <span className="relative z-10 group-hover:text-dark transition-colors duration-300 ml-1">
                                        Contact Me
                                    </span>
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[98] bg-black/30 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;