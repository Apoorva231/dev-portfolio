import { motion } from 'framer-motion';

const leadership = [
  {
    role: "Director of Competitions",
    organization: "SCS Concordia",
    location: "Montreal, QC",
    period: "Jun. 2026 - Present",
    bullets: [
      "Organize AlgoTime and TechHour weekly, leading hands-on programming, algorithms, and software activities for computer science students.",
      "Design technical workshops, coding challenges, and collaborative activities across algorithms, systems, web development, and AI/ML."
    ]
  }
];

export default function Leadership() {
  return (
    <motion.section className="py-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-400">
        <span className="border-b-2 border-amber-400 pb-2">Student Leadership</span>
      </h2>
      <div className="space-y-8">
        {leadership.map((item, i) => (
          <motion.div key={i} className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-xl font-bold text-white">{item.role}</h3>
              <span className="text-amber-400">{item.period}</span>
            </div>
            <h4 className="text-lg text-zinc-300 mb-4">{item.organization} - {item.location}</h4>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              {item.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
