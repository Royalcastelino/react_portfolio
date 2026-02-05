import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    const educationData = [
        {
            degree: "Master of Computer Application",
            institution: "Manipal Institute of Technology, Manipal",
            period: "Sep 2022 - Aug 2024",
            cgpa: "8.31/10",
            courses: "Object Oriented Programming, Databases, Discrete Math, Data Structures and Algorithms, Operating Systems, Computer Networks, Machine Learning, Java, Web Design"
        },
        {
            degree: "Bachelor of Computer Application",
            institution: "St Aloysius College (Autonomous), Mangalore",
            period: "June 2019 - May 2022",
            cgpa: "8.74/10",
            courses: "Object Oriented Programming, Databases, Computer General Analysis, Data Structures and Algorithms, RDBMS, Linux, Java, Web Designing, J2EE"
        }
    ];

    return (
        <section id='education' className="py-20 bg-dark px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto z-10 relative">
                <div className="flex justify-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold relative inline-block'
                    >
                        Education
                        <div className="h-1 w-20 bg-turquoise absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></div>
                    </motion.h2>
                </div>

                <div className='grid grid-cols-1 gap-8'>
                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="glass-card p-10 relative group overflow-hidden"
                        >
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-turquoise/0 via-turquoise/50 to-turquoise/0 group-hover:via-turquoise transition-all duration-500"></div>

                            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
                                <div className='flex-1'>
                                    <h3 className='text-2xl font-bold text-white group-hover:text-turquoise transition-colors duration-300'>{edu.degree}</h3>
                                    <h4 className='text-xl text-white/70 font-medium mt-1 uppercase tracking-wider text-sm'>{edu.institution}</h4>
                                </div>
                                <div className='text-turquoise font-semibold bg-turquoise/10 px-4 py-1 rounded-full border border-turquoise/20'>
                                    {edu.period}
                                </div>
                            </div>

                            <div className='flex items-center gap-3 mb-6'>
                                <div className='h-[1px] flex-1 bg-white/10'></div>
                                <div className='text-lg font-bold text-white px-4 py-1 rounded-lg border border-white/10 bg-white/5'>
                                    CGPA: <span className='text-turquoise'>{edu.cgpa}</span>
                                </div>
                                <div className='h-[1px] flex-1 bg-white/10'></div>
                            </div>

                            <div className='space-y-3'>
                                <p className='text-turquoise font-semibold'>Relevant Coursework:</p>
                                <p className='text-white/60 leading-relaxed italic'>
                                    {edu.courses}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-turquoise/5 rounded-full blur-[150px] -z-10"></div>
        </section>
    );
};

export default Education;
