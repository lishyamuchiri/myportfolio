import React from 'react';
import { BookOpen, Award, GraduationCap } from 'lucide-react';

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
}

const Certifications: React.FC = () => {
  const education: Education[] = [
    {
      id: 1,
      degree: "BSc Information Technology",
      institution: "Meru University of Science and Technology",
      period: "2021 - 2025 (Expected)",
      description: "Focus on software development, database systems, and network infrastructure."
    }
  ];
  
  const certifications: Certification[] = [
    {
      id: 1,
      name: "AI/ML Certification",
      issuer: "Cisco",
      date: "2023",
      badgeUrl: "https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Cybersecurity Fundamentals",
      issuer: "Cisco",
      date: "2023",
      badgeUrl: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      issuer: "eMobilis",
      date: "2024"
    },
    {
      id: 4,
      name: "Front-end Development",
      issuer: "Africa Agility",
      date: "2024"
    },
    {
      id: 5,
      name: "Python Programming",
      issuer: "Power Learn Project (PLP)",
      date: "2025"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Certifications & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            My academic background and professional certifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education Section */}
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap size={24} className="text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.institution}</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{item.period}</p>
                  {item.description && (
                    <p className="text-slate-700 dark:text-slate-300">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <div className="flex items-center mb-6">
              <Award size={24} className="text-blue-600 mr-2" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md flex flex-col"
                >
                  {cert.badgeUrl && (
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={cert.badgeUrl} 
                        alt={`${cert.name} badge`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4 flex-grow">
                    <h4 className="text-md font-bold text-slate-900 dark:text-white mb-1">{cert.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-xs">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;