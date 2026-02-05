import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "Software Developer",
            company: "Parrophins Private Limited, Mangalore",
            period: "April 2025 - Present",
            responsibilities: [
                "Built a real-time budget management system for educational institutions with yearly/monthly budget planning and chat functionality via a responsive web interface.",
                "Developed and scaled a modular staff web application with OTP login, managing alumni’s, approving and generating certificate’s along with contribution pages to collect donation's; deployed across 5+ Institutions with consistent UI/UX",
                { label: "Languages", value: "ReactJS, React Redux toolkit, TypeScript, NodeJS, MongoDB, Tailwind CSS, Firebase Query, Easebuzz Payment Gateway" }
            ]
        },
        {
            title: "Full Stack Developer Intern",
            company: "AgileMinds IT Solutions, Mangalore",
            period: "Feb 2024 - June 2024",
            responsibilities: [
                "Developed a responsive e-commerce web app using React.js, Node.js, MySQL, and Bootstrap, improving user speed by 30%.",
                "Built a cross-platform app that integrates seamlessly with the existing backend, ensuring consistent cross-platform functionality."
            ]
        }
    ];

    return (
        <section id='experience' className="py-20 bg-dark px-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold relative inline-block'
                    >
                        Experience
                        <div className="h-1 w-20 bg-turquoise absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></div>
                    </motion.h2>
                </div>

                <div className='relative border-l-2 border-turquoise/20 ml-4 py-8 space-y-12'>
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-8"
                        >
                            {/* Dot on timeline */}
                            <div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-turquoise shadow-turquoise-glow"></div>

                            <div className="glass-card p-8 glass-card-hover group">
                                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6'>
                                    <div>
                                        <h3 className='text-2xl font-bold text-turquoise group-hover:text-glow'>{exp.title}</h3>
                                        <h4 className='text-lg font-medium text-white/80'>{exp.company}</h4>
                                    </div>
                                    <span className='px-4 py-1 rounded-full bg-turquoise/10 text-turquoise text-sm font-semibold border border-turquoise/20'>
                                        {exp.period}
                                    </span>
                                </div>
                                <ul className='space-y-4'>
                                    {exp.responsibilities.map((resp, rIdx) => (
                                        typeof resp === 'string' ? (
                                            <li key={rIdx} className='text-white/70 leading-relaxed flex gap-3 text-justify'>
                                                <span className="text-turquoise mt-1">▹</span>
                                                {resp}
                                            </li>
                                        ) : (
                                            <li key={rIdx} className='mt-4 pt-4 border-t border-white/10 text-justify'>
                                                <span className='text-turquoise font-semibold mr-2'>{resp.label}:</span>
                                                <span className='text-white/60'>{resp.value}</span>
                                            </li>
                                        )
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
