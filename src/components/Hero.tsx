import React from 'react';
import { ArrowDown, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import Button from './ui/Button';
import useScrollReveal from '../hooks/useScrollReveal';

const Hero = () => {
  const titleRef = useScrollReveal();
  const subtitleRef = useScrollReveal({ threshold: 0.2 });
  const ctaRef = useScrollReveal({ threshold: 0.3, rootMargin: '10px' });

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />

      <div className="container mx-auto px-4 py-20 md:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className="opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          >
            Full-Stack Developer & UI/UX Designer
          </h1>
          
          <p
            ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
            className="opacity-0 text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
          >
            I build exceptional digital experiences with modern technologies.
            Passionate about creating intuitive, performant, and beautiful applications that solve real-world problems.
          </p>
          
          <div 
            ref={ctaRef as React.RefObject<HTMLDivElement>}
            className="opacity-0 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button onClick={scrollToProjects} size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <GitHub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:example@example.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;