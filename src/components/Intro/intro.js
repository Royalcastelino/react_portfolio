import React, { useState, useEffect } from 'react';
import myimg from '../../assets/mypic.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {
  const [displayText, setDisplayText] = useState('');
  const originalText = 'Royal Castelino';

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i <= originalText.length) {
        setDisplayText(originalText.slice(0, i));
        i += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 150);
    return () => clearInterval(intervalId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id='intro' className="min-h-[calc(100vh-5rem)] flex items-center justify-center relative px-8 overflow-hidden bg-dark">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='max-w-6xl w-full flex flex-col md:flex-row items-center justify-between z-10'
      >
        <div className='flex-1 text-center md:text-left'>
          <motion.span variants={itemVariants} className='text-2xl md:text-3xl font-light text-white/80'>
            Hello,
          </motion.span>

          <motion.h1 variants={itemVariants} className='text-5xl md:text-7xl font-bold mt-4 mb-2'>
            I'm <span className='text-turquoise text-glow'>{displayText}</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className='text-3xl md:text-4xl font-semibold text-white/90 mb-6'>
            Software Developer
          </motion.h2>

          <motion.p variants={itemVariants} className='text-lg md:text-xl font-light text-white/70 max-w-xl leading-relaxed text-justify mx-auto md:mx-0'>
            A passionate developer dedicated to building responsive web and mobile applications
            with a focus on high-quality, user-centric experiences. I enjoy solving complex
            problems and bringing ideas to life through code.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10">
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              className="bg-turquoise/10 border border-turquoise/50 text-turquoise px-8 py-3 rounded-full font-semibold hover:bg-turquoise hover:text-dark transition-all duration-300 cursor-pointer inline-block shadow-turquoise-glow"
            >
              Hire Me
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex-1 relative"
        >
          <div className="absolute inset-0 bg-turquoise/20 blur-[100px] rounded-full scale-75 -z-10 animate-pulse-slow"></div>
          <img src={myimg} alt="Royal Castelino" className="w-full max-w-lg mx-auto object-cover select-none pointer-events-none drop-shadow-2xl translate-y-[-10%] md:translate-y-0 sm:block hidden mt-40" />
        </motion.div>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-[-10%] w-[40rem] h-[40rem] bg-turquoise/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-turquoise/5 rounded-full blur-[100px] -z-10"></div>
    </section>
  )
}

export default Intro;