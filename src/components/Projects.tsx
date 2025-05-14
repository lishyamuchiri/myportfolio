import React, { useState } from 'react';
import { Github, ExternalLink, Code, Server, Database } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  impact: string;
  image: string;
  githubLink?: string;
  liveLink?: string;
  category: 'web' | 'blockchain' | 'all';
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'blockchain'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Essy Properties",
      description: "Real Estate Management System built with Django and MySQL, featuring property listings, inquiry management, and admin dashboard.",
      techStack: ["Django", "MySQL", "HTML/CSS"],
      impact: "Automated 50% of manual inquiries.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      githubLink: "https://github.com/username/essy-properties",
      liveLink: "https://essy-properties.example.com",
      category: 'web'
    },
    {
      id: 2,
      title: "Rock-Paper-Scissors on Avalanche",
      description: "A decentralized gaming application built on the Avalanche blockchain, featuring smart contracts for game logic and Web3 integration.",
      techStack: ["Solidity", "Web3.js", "Avalanche"],
      impact: "Enhanced trust in decentralized gaming.",
      image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      githubLink: "https://github.com/username/avalanche-rps",
      category: 'blockchain'
    },
    {
      id: 3,
      title: "Travel Website",
      description: "Full-stack travel booking platform with user authentication, destination search, and booking management. Led a team of 5 students.",
      techStack: ["HTML/CSS", "JavaScript", "Django"],
      impact: "Successfully coordinated development across multiple contributors.",
      image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      githubLink: "https://github.com/username/travel-website",
      liveLink: "https://travel.example.com",
      category: 'web'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one has taught me valuable skills and helped me grow as a developer.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-200 dark:bg-slate-700 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'web' 
                  ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Web Apps
            </button>
            <button
              onClick={() => setFilter('blockchain')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                filter === 'blockchain' 
                  ? 'bg-white dark:bg-slate-600 text-blue-600 dark:text-white shadow-sm' 
                  : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Blockchain
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-slate-900 dark:text-white mb-1">Impact:</div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">{project.impact}</p>
                </div>
                
                <div className="flex justify-between items-center mt-6">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <Github size={16} className="mr-1" />
                      GitHub
                    </a>
                  )}
                  
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;