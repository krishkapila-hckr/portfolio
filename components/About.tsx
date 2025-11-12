
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
             <div className="relative rounded-lg w-full aspect-square bg-slate-800 flex items-center justify-center shadow-2xl overflow-hidden">
                <img src="/profile.jpg" alt="Krish Kapila" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
        <div className="md:col-span-3 text-lg text-slate-400 space-y-4">
          <p>
            Hello! I'm Krish Kapila, an international student from India currently pursuing my Bachelor's degree in Computer Science at the University of Saskatchewan. My journey into the world of technology began with a deep curiosity for how things work, which has since evolved into a passion for software development.
          </p>
          <p>
            I am particularly interested in backend development and cybersecurity, and I love the challenge of building practical, efficient, and secure applications. I am a firm believer in learning by doing, which is why I'm always working on personal projects to expand my skillset and apply theoretical knowledge to real-world problems.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, participating in university clubs, or collaborating with peers on exciting new ideas. I'm eager to contribute my skills to a forward-thinking team and help build the future of software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;