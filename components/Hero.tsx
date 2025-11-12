import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start text-left py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Hi, I'm Krish — a{' '}
          <span className="text-cyan-400">Computer Science</span> student at the
          University of Saskatchewan.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8">
          Passionate about building real-world software and exploring the intersections of technology.
        </p>
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/krishkapila-hckr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/krish-kapila-576602352/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-8 h-8" />
          </a>
           <a
            href="#contact"
            onClick={handleScrollToContact}
            className="px-6 py-3 bg-transparent border-2 border-cyan-500 text-cyan-500 font-semibold rounded-md hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;