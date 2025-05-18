import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="font-sans bg-gradient-to-br from-slate-900 to-sky-900 text-white min-h-screen">
      <nav className="fixed top-0 left-0 w-full bg-slate-800/80 backdrop-blur shadow z-10 p-4 flex flex-col md:flex-row justify-between items-center md:px-8 border-b border-slate-700 space-y-2 md:space-y-0">
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          {[
            { label: 'Home', ref: homeRef },
            { label: 'About', ref: aboutRef },
            { label: 'Projects', ref: projectsRef },
            { label: 'Skills', ref: skillsRef },
            { label: 'Experience', ref: experienceRef },
            { label: 'Contact', ref: contactRef },
          ].map(({ label, ref }) => (
            <button
              key={label}
              onClick={() => scrollToSection(ref)}
              className="hover:text-sky-400 font-medium transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/Apoorva231" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-transform transform hover:scale-110">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/apoorva--bhardwaj/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-transform transform hover:scale-110">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </nav>

      <main className="pt-32 space-y-24 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.section ref={homeRef} className="text-center py-24" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.img src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" alt="Avatar" className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} />
          <h1 className="text-5xl font-bold mb-4 text-sky-400">Hi, I'm Apoorva</h1>
          <p className="text-xl text-slate-200">A full-stack developer crafting clean and efficient web applications.</p>
        </motion.section>

        <motion.section ref={aboutRef} className="py-12" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-semibold mb-6 text-sky-400">About Me</h2>
          <p className="text-lg text-slate-300 leading-relaxed">I'm a developer with expertise in React, Node.js, and full-stack engineering. I’m passionate about creating interactive applications and experiences on the web. I enjoy solving real-world problems and continuously learning new technologies.</p>
        </motion.section>

        <motion.section ref={projectsRef} className="py-12" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-semibold mb-6 text-sky-400">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{
              title: "Movie Recommendation App",
              icon: "https://cdn-icons-png.flaticon.com/512/2747/2747034.png",
              description: "A Flask + React web app suggesting movies based on user preferences."
            }, {
              title: "Expense Tracker",
              icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
              description: "Track personal expenses with session management and a clean UI."
            }, {
              title: "Portfolio Website",
              icon: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
              description: "A personal portfolio showcasing my projects and skills."
            }].map((project, i) => (
              <motion.div key={i} className="bg-slate-800 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }} transition={{ duration: 0.4 }}>
                <img src={project.icon} alt="Project Icon" className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-slate-300">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section ref={skillsRef} className="py-12" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-semibold mb-6 text-sky-400">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-lg text-slate-200">
            {["React", "JavaScript", "HTML", "CSS", "Node.js", "MongoDB", "MySQL", "Docker"].map((skill, i) => (
              <motion.div key={i} className="flex items-center gap-2 hover:text-sky-400" whileHover={{ scale: 1.05 }}>
                <img src={`https://cdn-icons-png.flaticon.com/512/919/${919851 + i}.png`} alt={skill} className="w-6 h-6" /> {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section ref={experienceRef} className="py-12" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-semibold mb-6 text-sky-400">Experience</h2>
          <p className="text-lg text-slate-300">Open to internships and freelance opportunities. Previously developed full-stack apps for academic and personal use. Eager to contribute to collaborative projects and grow as a software engineer.</p>
        </motion.section>

        <motion.section className="py-12 text-center" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-semibold mb-6 text-sky-400">Resume</h2>
          <p className="text-lg text-slate-300 mb-4">You can download my resume by clicking the button below.</p>
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-sky-600 text-white px-6 py-3 rounded-md hover:bg-sky-500 transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </motion.section>

        <motion.section ref={contactRef} className="py-12" variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-4xl font-semibold mb-6 text-sky-400">Contact</h2>
          <form className="space-y-4 bg-slate-800 p-6 rounded-lg shadow-md">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-slate-700 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-slate-700 rounded-md bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <textarea placeholder="Your Message" className="w-full p-3 border border-slate-700 rounded-md h-32 bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"></textarea>
            <motion.button whileHover={{ scale: 1.05 }} className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-500 transition-all duration-300 transform">Send</motion.button>
          </form>
        </motion.section>
      </main>
    </div>
  );
}
