import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const projects = [
  { title: "Movie Recommendation App", description: "A data-driven web app that ranks and recommends movies based on popularity using TMDb metadata and the IMDb weighted rating formula.", technologies: ["React", "Python" ,"Flask", "TMDB API","Pandas"], link: "https://web-production-ae879.up.railway.app/page/1", github: "https://github.com/Apoorva231/movie-recommendation-app" },
  { title: "Montreal Volleyball Club DB", description: "A 3NF normalizedd relational database system built with MySQL to manage club members, teams, and game sessions, featuring data integrity enforcement and automation via triggers and stored procedures.", technologies: ["MySQL", "ER Modeling", "Triggers", "Stored Procedures", "Normalization"], link: "#", github: "#" },
  { title: "Portfolio Website", description: "A clean, modern developer portfolio showcasing my projects, skills, and photography. Contact form integrated with EmailJS.", technologies: ["React", "Tailwind CSS", "Vercel", "EmailJS"], link: "#", github: "https://github.com/Apoorva231/dev-portfolio" },
  { title: "Console baseed Othello Game", description: "A Java-based implementation of the Othello board game, built using object-oriented principles and UML-based architecture for clean code structure.", technologies: ["Java", "OOP", "UML", "Exception Handling", "File I/O"], link: "#", github: "https://github.com/Apoorva231/Othello-Game" }
];

export default function Projects() {
  return (
    <motion.section className="py-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-400">
        <span className="border-b-2 border-amber-400 pb-2">Projects</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div key={i} className="bg-zinc-800 p-6 rounded-xl border border-zinc-700 shadow-lg hover:shadow-xl transition-all duration-300 group" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">{project.title}</h3>
              <div className="flex space-x-2">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400">
                    <FiGithub size={20} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-zinc-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="text-xs bg-zinc-700 text-amber-300 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors">View Project →</a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
