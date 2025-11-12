import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950/50 border-t border-slate-800 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-8">
          I'm currently seeking opportunities for internships and co-op positions. Whether you have a question or just want to say hi, my inbox is always open. I'll do my best to get back to you!
        </p>
        <div className="flex justify-center items-center space-x-8 mb-12">
          <a
            href="mailto:krishkapila1612@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="Email"
          >
            <MailIcon className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/krishkapila-hckr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/krish-kapila-576602352/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-8 h-8" />
          </a>
        </div>
        <div className="text-slate-500">
          <p>&copy; {new Date().getFullYear()} Krish Kapila. All Rights Reserved.</p>
          <p>Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;