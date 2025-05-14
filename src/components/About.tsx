import React from 'react';
import { Code, Server, Database, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['HTML/CSS', 'JavaScript', 'React', 'Bootstrap'], icon: <Code className="w-5 h-5 text-blue-600" /> },
    { category: 'Backend', items: ['Django', 'Python', 'MySQL'], icon: <Server className="w-5 h-5 text-emerald-600" /> },
    { category: 'Blockchain', items: ['Smart Contracts', 'Web3', 'Avalanche'], icon: <Database className="w-5 h-5 text-purple-600" /> },
    { category: 'Tools', items: ['Git', 'GitHub', 'Adobe Premiere Pro'], icon: <Cpu className="w-5 h-5 text-orange-600" /> }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <img 
                  src="https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Professional headshot" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  I'm a full-stack developer with experience in building responsive web apps and blockchain-based solutions. I thrive in collaborative environments and love solving complex problems with code.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mt-8">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 shadow-sm transition-all hover:shadow-md">
                      <div className="flex items-center mb-4">
                        {skillGroup.icon}
                        <h3 className="font-bold text-slate-900 dark:text-white ml-2">{skillGroup.category}</h3>
                      </div>
                      <ul className="space-y-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center text-slate-700 dark:text-slate-300">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;