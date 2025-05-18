import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function Contact({ formData, setFormData, status, setStatus }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const result = await emailjs.send(
        'service_v319221',
        'template_2rsu096',
        formData,
        '8NJR1il_5a1azDPxD'
      );

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error(error);
      setStatus('An error occurred while sending the message.');
    }
  };

  return (
    <motion.section className="py-12" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-amber-400">
        <span className="border-b-2 border-amber-400 pb-2">Get In Touch</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg text-zinc-300 mb-6">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FiMail className="text-amber-400 text-xl" />
              <span className="text-zinc-300">apoorva@example.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <FiLinkedin className="text-amber-400 text-xl" />
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-amber-400 transition-colors">
                linkedin.com/in/apoorva
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FiGithub className="text-amber-400 text-xl" />
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-amber-400 transition-colors">
                github.com/apoorva
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-zinc-700 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">Email</label>
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-zinc-700 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-3 border border-zinc-700 rounded-lg bg-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-6 py-3 rounded-lg hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
          {status && (
            <p className={`text-sm mt-2 ${status.includes('success') ? 'text-green-400' : 'text-amber-400'}`}>{status}</p>
          )}
        </form>
      </div>
    </motion.section>
  );
}