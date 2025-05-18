import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiHtml5, SiCss3, SiMongodb, SiMysql } from 'react-icons/si';

const skills = [
  { name: "React", icon: <FaReact className="text-amber-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-300" /> }
];

export default function Skills() {
  return (
    <motion.section className="py-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-400">
        <span className="border-b-2 border-amber-400 pb-2">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <motion.div key={i} className="flex items-center space-x-2">
            <div className="text-xl">{skill.icon}</div>
            <span className="font-medium text-zinc-200">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
