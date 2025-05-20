import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section className="py-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-400">
        <span className="border-b-2 border-amber-400 pb-2">About Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6">I'm a third year computer science Student in Concordia University, Montreal.</p>
          <p className="text-lg text-zinc-300 leading-relaxed mb-6"> I am passionate about building innovative solutions that enhance user experiences and streamline operations. I am currently seeking internship opportunities where I can apply my technical skills and contribute to meaningful projects.</p>
          <p className="text-lg text-zinc-300 leading-relaxed">When I'm not coding, you can find me taking pictures in nature, playing basketball or reading books.</p>
        </div>
        <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 shadow-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-amber-400">Personal Info</h3>
          <ul className="space-y-3 text-zinc-300">
            <li><strong>Location:</strong> Montreal, Canada</li>
            <li><strong>Email:</strong> abdiwakarsingh@gmail.com</li>
            <li><strong>Education:</strong> Bachelor's in Computer Science Honors</li>
            <li><strong>Languages:</strong> English, Hindi, French</li>
            <li><strong>Interests:</strong> Photography, Reading, Basketball, Cooking, Cycling</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
