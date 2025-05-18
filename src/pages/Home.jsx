import { useRef, useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import ResumeDownload from '../components/ResumeDownload';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Education from '../components/Education';
import Photography from '../components/Photography';

export default function Home() {
  const sections = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    contact: useRef(null)
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const controls = useAnimation();

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      Object.entries(sections).forEach(([key, ref]) => {
        const section = ref.current;
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
 from-zinc-900 via-zinc-800 to-yellow-900 text-white min-h-screen scroll-smooth">
      <Navbar sections={sections} scrollToSection={scrollToSection} activeSection={activeSection} />
      <main className="pt-32 space-y-24 max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <section ref={sections.home}><Hero /></section>
        <section ref={sections.about}><About /></section>
        <section ref={sections.projects}><Projects /></section>
        <section ref={sections.skills}><Skills /></section>
        <section ref={sections.education}><Education /></section>
        <section ref={sections.experience}><Experience /></section>
        <ResumeDownload />
        <section ref={sections.photography}><Photography /></section>
        <section ref={sections.contact}>
          <Contact 
            formData={formData}
            setFormData={setFormData}
            status={status}
            setStatus={setStatus}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
