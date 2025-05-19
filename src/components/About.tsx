import React from 'react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal({ threshold: 0.2 });

  return (
    <Section 
      id="about"
      title="About Me"
      subtitle="Get to know more about my journey and expertise"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div 
          ref={imageRef as React.RefObject<HTMLDivElement>}
          className="opacity-0 relative"
        >
          <div className="aspect-square overflow-hidden rounded-xl border-4 border-white dark:border-gray-800 shadow-xl">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Years of Experience</p>
          </div>
        </div>

        <div 
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className="opacity-0 space-y-6"
        >
          <h3 className="text-2xl font-bold">I'm a passionate developer creating impactful digital experiences</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            With over 5 years of experience in web development and design, I specialize in building modern, 
            responsive applications that deliver exceptional user experiences. My approach combines technical 
            excellence with creative problem-solving to create solutions that exceed client expectations.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <Code size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium">Full-Stack Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Creating seamless experiences with React, Node.js, and modern frameworks
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium">Professional Experience</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Worked with startups and established companies on diverse projects
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <GraduationCap size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h4 className="font-medium">Education & Continuous Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Computer Science degree and commitment to staying current with technology trends
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Button onClick={() => window.open('/resume.pdf', '_blank')}>
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;