import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faAward } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
    const certs = [
        {
            title: "Introduction to MongoDB",
            provider: "Certificate",
            icon: faCertificate
        },
        {
            title: "Getting Started with Redis and Redis Search",
            provider: "Certificate",
            icon: faAward
        }
    ];

    return (
        <section id='certifications' className="py-20 bg-dark px-8 relative">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold relative inline-block'
                    >
                        Certifications
                        <div className="h-1 w-20 bg-turquoise absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></div>
                    </motion.h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card group p-8 flex items-center gap-6 border-l-4 border-turquoise shadow-turquoise-glow hover:shadow-turquoise-glow-strong transition-all duration-300"
                        >
                            <div className='p-4 rounded-full bg-turquoise/10 text-turquoise text-3xl group-hover:scale-110 transition-transform'>
                                <FontAwesomeIcon icon={cert.icon} />
                            </div>
                            <div>
                                <h3 className='text-xl font-bold text-white group-hover:text-turquoise transition-colors'>{cert.title}</h3>
                                <p className='text-white/50 font-medium tracking-widest uppercase text-xs mt-1'>{cert.provider}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
