import React from 'react';
import { Trophy, GitPullRequest, Star } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "S-Hook Portfolio Hackathon",
      description: "Top performer in UI/UX category, recognized for intuitive design and user experience.",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />
    },
    {
      id: 2,
      title: "Open-Source Contributions",
      description: "Active contributor to the Avalanche blockchain repository, helping improve documentation and fixing bugs.",
      icon: <GitPullRequest className="w-8 h-8 text-blue-500" />
    },
    {
      id: 3,
      title: "Student Mentor of the Year",
      description: "Recognized for exceptional leadership and guidance provided to junior developers.",
      icon: <Star className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Recognition and accomplishments throughout my career.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="mb-4 bg-white dark:bg-slate-700 p-4 rounded-full shadow-sm">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{achievement.title}</h3>
                <p className="text-slate-700 dark:text-slate-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;