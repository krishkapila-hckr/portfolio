
import React from 'react';

const skills = [
  'Python',
  'JavaScript',
  'HTML',
  'CSS',
  'React (Learning)',
  'Node.js (Exploring)',
  'Git',
  'GitHub',
  'SQL',
  'Linux',
  'Problem Solving',
  'Teamwork',
];

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-slate-800 border border-slate-700 text-slate-300 px-4 py-2 rounded-lg font-medium hover:bg-slate-700 hover:text-cyan-300 hover:border-cyan-500 transition-all duration-300 cursor-default">
    {children}
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <SkillBadge key={skill}>{skill}</SkillBadge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
