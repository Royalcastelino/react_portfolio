import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faCss3, faHtml5, faJava, faJs, faPhp, faPython, faReact, faNode, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "C/C++", icon: faCode },
                { name: "Java", icon: faJava },
                { name: "Python", icon: faPython },
                { name: "JavaScript", icon: faJs },
                { name: "SQL", icon: faDatabase },
                { name: "Dart", icon: faCode },
            ]
        },
        {
            title: "Technologies & Tools",
            skills: [
                { name: "ReactJS", icon: faReact },
                { name: "React Redux", icon: faReact },
                { name: "Flutter", icon: faCode },
                { name: "MySQL", icon: faDatabase },
                { name: "HTML5", icon: faHtml5 },
                { name: "CSS", icon: faCss3 },
                { name: "Tailwind", icon: faCss3 },
                { name: "NodeJS", icon: faNode },
                { name: "Git", icon: faGitAlt },
                { name: "MongoDB", icon: faDatabase },
                { name: "TypeScript", icon: faJs },
                { name: "Android", icon: faAndroid },
                { name: "PHP", icon: faPhp },
                { name: "Bootstrap", icon: faCode },
            ]
        }
    ];

    return (
        <section id='skills' className="py-20 bg-dark px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold relative inline-block'
                    >
                        Skills
                        <div className="h-1 w-20 bg-turquoise absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></div>
                    </motion.h2>
                </div>

                <div className='flex flex-col gap-16'>
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="glass-premium p-8"
                        >
                            <h3 className='text-2xl font-semibold mb-8 text-turquoise border-b border-turquoise/20 pb-4'>
                                {category.title}
                            </h3>
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                                {category.skills.map((skill, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        whileHover={{ y: -4, scale: 1.04 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                        className='flex flex-col items-center justify-center p-5 rounded-xl
                                                   bg-white/[0.03] backdrop-blur-md
                                                   border border-white/[0.07]
                                                   hover:border-turquoise/40 hover:bg-turquoise/[0.06]
                                                   hover:shadow-[0_0_18px_rgba(64,224,208,0.12)]
                                                   transition-all duration-300 group cursor-default'
                                    >
                                        <FontAwesomeIcon icon={skill.icon}
                                            className='text-3xl text-turquoise/70 group-hover:text-turquoise mb-3 transition-colors duration-300' />
                                        <span className='text-white/70 group-hover:text-white font-medium text-center text-sm transition-colors duration-300'>
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;