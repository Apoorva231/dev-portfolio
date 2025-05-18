import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

export default function ResumeDownload() {
  return (
    <motion.section className="py-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-amber-400">
        <span className="border-b-2 border-amber-400 pb-2">Resume</span>
      </h2>
      <p className="text-lg text-zinc-300 mb-6 max-w-2xl mx-auto">Want to know more about my professional journey? Download my resume to see my full experience and skills.</p>
      <motion.a href="/resume.pdf" download className="inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <FiDownload className="mr-2" />
        Download Resume
      </motion.a>
    </motion.section>
  );
}