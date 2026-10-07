import React, { useState } from "react";
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      title: "Souza Furniture Mart",
      image: project1,
      description: "E-commerce website for buying and selling furniture designed for our client Souza furniture's. Real-time product tracking and secure user authentication.",
      github: "https://github.com/Royalcastelino/Furniture-Website",
      tech: ["Bootstrap", "PHPMailer", "PHP", "Stripe", "MySQL"]
    },
    {
      title: "AI Task Generator",
      image: project2,
      description: "This project is an AI-powered task and project planning application that uses OpenAI to automatically generate 5–8 user stories and 10–20 engineering tasks based on the user's project requirements. It provides a structured form where users can enter their goals, target users, constraints, and platform type, after which the generated tasks are organized into Frontend, Backend, and DevOps categories. Users can interact with the task board by dragging and dropping tasks to reorder them, as well as editing, adding, or deleting tasks directly. The application also maintains a history of the last five generated specifications, which are stored in MongoDB for later reference.",
      github: "https://github.com/Royalcastelino/AI-Task-Generator",
      tech: [
  "React",
  "TypeScript",
  "Vite",
  "Tailwind CSS",
  "@dnd-kit",
  "Node.js",
  "Express.js",
  "MongoDB",
  "OpenAI"
]
    },
    {
      title: "Badminton Score",
      image: project3,
      description: "An intuitive Android app to streamline badminton match recording. Real-time score tracking and match history management.",
      github: "https://github.com/Royalcastelino/Badminton_score",
      tech: ["Android Studio", "Java", "Firebase", "XML"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold relative inline-block"
          >
            My Projects
            <div className="h-1 w-20 bg-turquoise absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full shadow-turquoise-glow"></div>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-premium glass-premium-hover group overflow-hidden flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image with glass-tinted overlay on hover */}
              <div className="relative overflow-hidden h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {/* Permanent subtle gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                {/* Glass overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                flex items-center justify-center gap-6
                                bg-black/30 backdrop-blur-sm">
                  <motion.a whileHover={{ scale: 1.2 }} href={project.github} target="_blank" rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center
                               text-white hover:text-turquoise hover:bg-turquoise/20 transition-all">
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-turquoise transition-colors duration-300">{project.title}</h3>
                
                <div className="mb-6">
                  <p className="text-white/55 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <span 
                    className="text-turquoise/80 group-hover:text-turquoise text-xs mt-2 flex items-center gap-1 transition-colors duration-300"
                  >
                    View More <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx}
                      className="text-[10px] uppercase tracking-wider font-bold
                                 bg-white/[0.04] backdrop-blur-sm text-white/40
                                 px-3 py-1 rounded-full border border-white/[0.08]
                                 group-hover:border-turquoise/30 group-hover:text-turquoise/80
                                 transition-all duration-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative
                         [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              >
                <FontAwesomeIcon icon={faTimes} className="text-lg" />
              </button>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pr-8">{selectedProject.title}</h3>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-50 md:h-full object-cover rounded-xl mb-6 shadow-lg" />
              
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 text-justify">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t, tIdx) => (
                  <span key={tIdx}
                    className="text-[10px] md:text-xs uppercase tracking-wider font-bold
                               bg-turquoise/10 text-turquoise
                               px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-turquoise/20">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full transition-colors border border-white/20 text-sm md:text-base font-medium">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;