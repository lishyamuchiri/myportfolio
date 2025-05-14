import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-50 py-4 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold text-slate-800 dark:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Leah<span className="text-blue-500">Muchiri</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'about' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'projects' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'experience' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Experience
            </a>
            <a 
              href="#certifications" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('certifications');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'certifications' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Certifications
            </a>
            <a 
              href="#achievements" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('achievements');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'achievements' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Achievements
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'contact' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Contact
            </a>
          </nav>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg py-4 px-4 transition-all duration-300 animate-fade-in-down">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'about' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              About
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'projects' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'experience' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Experience
            </a>
            <a 
              href="#certifications" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('certifications');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'certifications' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Certifications
            </a>
            <a 
              href="#achievements" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('achievements');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'achievements' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Achievements
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                activeSection === 'contact' ? 'text-blue-500' : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;