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
        <h3 className="text-xl font-bold text-white mb-2">B.Tech in Computer Science</h3>
        <p className="text-zinc-300 mb-1">XYZ University, Bangalore</p>
        <p className="text-zinc-400 text-sm">2019 – 2023</p>
        <ul className="list-disc list-inside text-zinc-300 mt-4 space-y-2">
          <li>CGPA: 8.7 / 10</li>
          <li>Core Courses: Data Structures, DBMS, Operating Systems, AI</li>
          <li>Dean’s List 2021 & 2022</li>
        </ul>
      </motion.div>
    </motion.section>
  );
}
