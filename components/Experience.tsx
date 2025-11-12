
import React from 'react';

const ExperienceItem: React.FC<{ title: string; organization: string; date: string; description: string[] }> = ({ title, organization, date, description }) => (
    <div className="relative pl-8 sm:pl-12 py-6 group">
        <div className="absolute left-0 top-6 h-full w-px bg-slate-700 group-last:bg-transparent"></div>
        <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-slate-700 border-2 border-slate-900 group-hover:bg-cyan-500 transition-colors duration-300"></div>
        <p className="text-sm font-medium text-slate-500 mb-1">{date}</p>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-md text-cyan-400 mb-2">{organization}</p>
        <ul className="list-disc list-inside text-slate-400 space-y-1">
            {description.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

const Experience: React.FC = () => {
    const experiences = [
        {
            title: 'Freelance Web Developer',
            organization: 'Self-Employed',
            date: 'Jan 2024 - Present',
            description: [
                'Developed and deployed modern, responsive websites for small businesses and individuals.',
                'Collaborated directly with clients to gather requirements, provide updates, and deliver final products.',
                'Utilized React and Tailwind CSS to build performant and visually appealing user interfaces.',
                'Managed project timelines and deliverables independently, ensuring client satisfaction.'
            ],
        },
        {
            title: 'Volunteer',
            organization: 'Indian Students Association (ISA), U of S',
            date: 'September 2022 - April 2023',
            description: [
                'Assisted in organizing and executing cultural events for the student community.',
                'Engaged with fellow students to foster a welcoming and inclusive environment for newcomers.',
                'Contributed to team planning sessions, providing ideas to improve event outreach and engagement.',
            ],
        },
    ];

    return (
        <section id="experience" className="py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Experience</h2>
            <div className="max-w-3xl mx-auto">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} {...exp} />
                ))}
            </div>
        </section>
    );
};

export default Experience;