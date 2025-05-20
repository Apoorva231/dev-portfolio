import { motion } from 'framer-motion';

const experiences = [
  { role: "Front End Developer", company: "Welfare Avenue", period: "March 2024-Present", description: "Maintaining and enhancing the organization’s website using ReactJS, JavaScript, HTML/CSS, JSX, and Hooks." },
  
];

export default function Experience() {
  return (
    <motion.section className="py-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-400">
        <span className="border-b-2 border-amber-400 pb-2">Experience</span>
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div key={i} className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="text-amber-400">{exp.period}</span>
            </div>
            <h4 className="text-lg text-zinc-300 mb-4">{exp.company}</h4>
            <p className="text-zinc-300">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}