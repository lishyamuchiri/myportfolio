import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold">
              Leah<span className="text-blue-500">Muchiri</span>
            </a>
            <p className="text-slate-400 mt-2 text-sm">
              Full-Stack Developer | Blockchain & AI Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 mb-4 rounded-full bg-slate-800 hover:bg-blue-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            
            <p className="text-slate-400 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> in 2025
            </p>
            <p className="text-slate-500 text-xs mt-1">
              © {currentYear} Leah Muchiri. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;