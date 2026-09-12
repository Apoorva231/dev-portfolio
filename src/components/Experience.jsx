import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Developer Intern",
    company: "Airbus Canada",
    location: "Mirabel, QC",
    period: "Sep. 2025 - Apr. 2026",
    bullets: [
      "Owned end-to-end development and deployment of E2EQG, a production aircraft-readiness application in Foundry/Skywise used by 3,000 users.",
      "Engineered PySpark and SQL data pipelines across multiple upstream sources and automated workflows, saving 15 hours of manual work per week.",
      "Reduced build time by 50% on a 450K-row dataset and resolved data-integrity issues, recovering 15K missing records.",
      "Shipped JavaScript, HTML, and CSS features including saved filters, personalization, write-backs, and batched KPI exports."
    ]
  },
  {
    role: "Technical Writing Student Assistant",
    company: "Concordia University",
    location: "Montreal, QC",
    period: "Sep. 2025 - Dec. 2025",
    link: "https://opentextbooks.concordia.ca/practical-guide-to-technical-writing/",
    bullets: [
      "Migrated engineering course content to Pressbooks using HTML/CSS, improving formatting, consistency, and accessibility.",
      "Created technical diagrams and fact-checked instructional content for accuracy and clarity before publication."
    ]
  },
  {
    role: "Front End Developer",
    company: "Welfare Avenue",
    period: "March 2024 - Present",
    bullets: [
      "Maintaining and enhancing the organization's website using ReactJS, JavaScript, HTML/CSS, JSX, and Hooks."
    ]
  }
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
            <h4 className="text-lg text-zinc-300 mb-4">
              {exp.company}{exp.location ? ` - ${exp.location}` : ''}
            </h4>
            <ul className="list-disc list-inside text-zinc-300 space-y-2">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
            {exp.link && (
              <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-block text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors mt-4">
                View Published Text →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
