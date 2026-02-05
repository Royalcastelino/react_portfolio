import React from "react";
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const projectsData = [
    {
      title: "Souza Furniture Mart",
      image: project1,
      description: "E-commerce website for buying and selling furniture designed for our client Souza furniture's. Real-time product tracking and secure user authentication.",
      github: "https://github.com/Royalcastelino/Furniture-Website",
      tech: ["Bootstrap", "PHPMailer", "PHP", "Stripe", "MySQL"]
    },
    {
      title: "React Weather Forecast",
      image: project2,
      description: "Real-time weather updates with a sleek interface. Features dynamic background changes based on weather conditions and city/location search.",
      github: "https://github.com/Royalcastelino/React_weather",
      tech: ["React", "Weather API", "CSS3", "Axios"]
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
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden border border-white/5 hover:border-turquoise/30 transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <motion.a whileHover={{ scale: 1.2 }} href={project.github} className="text-white text-3xl hover:text-turquoise"><FontAwesomeIcon icon={faGithub} /></motion.a>
                  <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-white text-3xl hover:text-turquoise"><FontAwesomeIcon icon={faExternalLinkAlt} /></motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-turquoise transition-colors">{project.title}</h3>
                <p className="text-white/60 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase tracking-tighter font-bold bg-white/5 text-white/40 px-2 py-1 rounded border border-white/10 group-hover:border-turquoise/30 group-hover:text-turquoise transition-all">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;