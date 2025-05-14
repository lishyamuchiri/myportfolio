import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      role: "Team Lead",
      company: "Africa Agility Bootcamp",
      period: "Jan 2024 - Present",
      description: [
        "Led a team of 5 developers in building blockchain-based applications",
        "Coordinated project management and task delegation",
        "Provided technical guidance and code reviews",
        "Presented project milestones to stakeholders"
      ]
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "eMobilis Bootcamp",
      period: "Sep 2023 - Dec 2023",
      description: [
        "Developed responsive web applications using Django and React",
        "Implemented database schemas and RESTful APIs",
        "Collaborated with UI/UX designers to implement front-end designs",
        "Participated in code reviews and testing"
      ]
    },
    {
      id: 3,
      role: "Teaching Assistant",
      company: "Meru University",
      period: "May 2023 - Aug 2023",
      description: [
        "Assisted professors in conducting programming labs",
        "Mentored junior students in web development concepts",
        "Helped debug student projects and provided feedback",
        "Created supplementary learning materials"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Experience & Leadership</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            My professional journey and leadership roles in the tech industry.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-200 dark:border-blue-800 pl-8 ml-4 md:ml-6">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`mb-12 ${index === experiences.length - 1 ? '' : ''}`}
              >
                <div className="absolute -left-3 mt-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <Briefcase size={14} className="text-white" />
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{experience.role}</h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm mt-1 md:mt-0">
                      <Calendar size={14} className="mr-1" />
                      {experience.period}
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-4">{experience.company}</p>
                  
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex text-slate-600 dark:text-slate-400">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;