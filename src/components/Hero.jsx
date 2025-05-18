import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

export default function Hero() {
  return (
    <motion.section className="text-center py-24 md:py-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <motion.div className="relative w-32 h-32 rounded-full mx-auto mb-8 overflow-hidden shadow-2xl" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <img src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" alt="Avatar" className="w-full h-full object-cover" />
      </motion.div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Hi, I'm Apoorva Bhardwaj</h1>
      <p className="text-xl text-zinc-300 max-w-2xl mx-auto">A passionate full-stack developer specializing in modern JavaScript frameworks and cloud technologies.</p>
      <div className="flex justify-center space-x-4 mt-8">
        <motion.a href="https://github.com/Apoorva231" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="text-zinc-300 hover:text-amber-400 transition-colors"><FiGithub size={24} /></motion.a>
        <motion.a href="https://www.linkedin.com/in/apoorva--bhardwaj/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -3 }} className="text-zinc-300 hover:text-amber-400 transition-colors"><FiLinkedin size={24} /></motion.a>
        <motion.a href="abdiwakarsingh@gmail.com" whileHover={{ y: -3 }} className="text-zinc-300 hover:text-amber-400 transition-colors"><FiMail size={24} /></motion.a>
      </div>
    </motion.section>
  );
}