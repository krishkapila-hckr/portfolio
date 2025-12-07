
import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
  {
    title: 'Python Port Scanner',
    description: 'A multi-threaded port scanner built with Python. My first major project that helped me understand networking basics and concurrent programming.',
    techStack: ['Python', 'Sockets', 'Concurrency'],
    imageUrl: '/port_scanner.jpg',
    githubUrl: 'https://github.com/krishkapila-hckr/port-scanner',
  },
  {
    title: 'Password Strength Checker',
    description: 'A web-based tool to assess password security based on criteria like length, character types, and common patterns, providing instant feedback to users.[work in progress]',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Regex'],
    imageUrl: 'https://picsum.photos/seed/passwordchecker/600/400',
    githubUrl: 'https://github.com/krishkapila-hckr', // Update with actual link
  },
  {
    title: 'AWS serverless C',
    description: 'Exploring computer graphics by building a basic ray tracer from scratch. An ongoing project to understand light rendering, shadows, and reflections. [work in progress]',
    techStack: ['C++', 'Linear Algebra', 'Graphics'],
    imageUrl: '/aws.jpg',
    githubUrl: 'https://github.com/krishkapila-hckr', // Update with actual link
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
