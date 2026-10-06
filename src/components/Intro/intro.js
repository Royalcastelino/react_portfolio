import React, { useState, useEffect } from 'react';
import myimg from '../../assets/me.png';
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
    <section id='intro' className="min-h-screen flex items-center justify-center relative px-8 overflow-hidden bg-dark">
      <div className='max-w-6xl w-full flex flex-col md:flex-row items-center justify-between z-10 gap-12'>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className='w-full md:w-[70%] shrink-0 text-center md:text-left'
        >
          <motion.span variants={itemVariants} className='text-2xl md:text-3xl font-light text-white/80'>
            Hello,
          </motion.span>

          <motion.h1 variants={itemVariants} className='text-5xl md:text-7xl font-bold mt-4 mb-2 leading-[1.3] md:leading-[1.35]'>
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
          className="hidden sm:flex w-full md:w-[30%] shrink-0 items-end justify-center
                     self-end md:self-auto
                     h-[380px] md:h-[520px]
                     relative overflow-visible"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-turquoise/20 blur-[90px] rounded-full -z-10 animate-pulse-slow" />
          <img
            src={myimg}
            alt="Royal Castelino"
            className="h-full max-h-full w-auto object-contain object-bottom
                       select-none pointer-events-none drop-shadow-2xl"
          />
        </motion.div>

      </div>

      {/* Background decorative blobs */}
      <div className="absolute top-20 right-[-10%] w-[40rem] h-[40rem] bg-turquoise/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-turquoise/5 rounded-full blur-[100px] -z-10" />
    </section>
  )
}

export default Intro;