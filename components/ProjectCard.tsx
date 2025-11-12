
import React from 'react';
import { GithubIcon } from './icons/SocialIcons';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  isPlaceholder?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, imageUrl, githubUrl, isPlaceholder }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col group">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech) => (
            <span key={tech} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-slate-700">
           <a
            href={isPlaceholder ? '#' : githubUrl}
            target={isPlaceholder ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-slate-300 group-hover:text-cyan-400 transition-colors duration-300 ${isPlaceholder ? 'cursor-not-allowed opacity-50' : ''}`}
            aria-disabled={isPlaceholder}
            onClick={(e) => isPlaceholder && e.preventDefault()}
          >
            <GithubIcon className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
