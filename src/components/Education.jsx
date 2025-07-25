import { motion } from 'framer-motion';

export default function Education() {
  return (
    <motion.section className="py-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-400">
        <span className="border-b-2 border-amber-400 pb-2">Education</span>
      </h2>
      <motion.div
        className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-white mb-2">Bachelor's in Computer Science (Honors)</h3>
        <p className="text-zinc-300 mb-1">Concordia University, Montreal</p>
        <p className="text-zinc-400 text-sm">2024 – 2027</p>
        <ul className="list-disc list-inside text-zinc-300 mt-4 space-y-2">
          <li>CGPA: 3.86 / 4.3</li>
          <li>Completed Courses: OOP, DSA, Operating Systems, Databases, Web Programming, AI, Probability and Stats, Technical Writing and Communication</li>
          <li>Current Courses: Theoretical Computer Science, Intro to Software Engineering, Multivariable Calculus, Social and Ethical Dimensions of ICT</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
