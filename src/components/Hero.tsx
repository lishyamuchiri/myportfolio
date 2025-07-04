import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import profileImage from '../assets/lish.png';
import bgImage from '../assets/lish.png';

const Hero: React.FC = () => {
  const roles = [
    { text: "Full-Stack Developer", emoji: "👨‍💻" },
    { text: "UI/UX Designer", emoji: "🎨" },
    // { text: "Creative Technologist", emoji: "✨" }
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showEmoji, setShowEmoji] = useState(false);
  const animationRef = useRef<number>();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Robust typing animation effect
  useEffect(() => {
    let isMounted = true;
    const currentRole = roles[currentRoleIndex];
    
    const typeWriter = () => {
      if (!isMounted) return;
      
      if (displayText.length < currentRole.text.length) {
        setDisplayText(currentRole.text.substring(0, displayText.length + 1));
        animationRef.current = window.setTimeout(typeWriter, 100);
      } else {
        setShowEmoji(true);
        animationRef.current = window.setTimeout(() => {
          if (!isMounted) return;
          setShowEmoji(false);
          setIsTyping(false);
        }, 1500);
      }
    };

    const eraseText = () => {
      if (!isMounted) return;
      
      if (displayText.length > 0) {
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        animationRef.current = window.setTimeout(eraseText, 50);
      } else {
        setCurrentRoleIndex(prev => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    };

    if (isTyping) {
      typeWriter();
    } else {
      eraseText();
    }

    return () => {
      isMounted = false;
      if (animationRef.current) {
        window.clearTimeout(animationRef.current);
      }
    };
  }, [currentRoleIndex, isTyping, roles]);

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Mobile Background */}
      <div 
        className="lg:hidden absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="lg:hidden absolute inset-0 bg-black/20 dark:bg-black/40"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Role Indicator */}
            <span className="text-xs sm:text-sm font-mono text-blue-600 dark:text-blue-400 mb-2 bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
              Full-stack Developer | 🚀 Portfolio 2025 | Based in Nairobi
            </span>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block">
                <span className="inline-block min-w-[280px] sm:min-w-[360px] h-[1.2em] text-left">
                  {displayText}
                  {showEmoji && (
                    <span className="ml-2 animate-bounce">
                      {roles[currentRoleIndex].emoji}
                    </span>
                  )}
                  <span className={`ml-1 h-6 w-1 bg-indigo-600 inline-block align-middle ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
                </span>
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl block mt-3 text-slate-700 dark:text-slate-300 font-medium">
                Lish Muchiri
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-8">
              I specialize in building engaging user interfaces and telling stories through visuals.
              <span className="block mt-2">Currently exploring MERN STACK + AI.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-0.5 shadow-md text-sm sm:text-base"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium transition-all duration-300 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Contact Me
              </button>
            </div>
            
            <div className="flex gap-5">
              <a 
                href="https://github.com/lishyamuchiri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group relative"
                aria-label="GitHub"
              >
                <Github size={20} className="sm:w-5 sm:h-5" />
                <span className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                </span>
              </a>
              <a 
                href="https://www.linkedin.com/in/lishya-muchiri-849b91268/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 group relative"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:w-5 sm:h-5" />
                <span className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Professional Desktop Image */}
          <div className="hidden lg:flex items-center justify-center h-full">
            <div className="relative w-[28rem] h-[28rem] group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl z-10 transform transition-all duration-500 group-hover:scale-[1.02]">
                <img
                  src={profileImage}
                  alt="Lish Muchiri - Professional Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        
        {/* Chevron Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-md text-blue-600 dark:text-blue-400 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="w-5 h-5 animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;