import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import Section from './ui/Section';
import { skills } from '../data/skills';
import useScrollReveal from '../hooks/useScrollReveal';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const sectionRef = useScrollReveal();

  // Get all unique categories
  const categories = Array.from(
    new Set(skills.map((skill) => skill.category))
  );

  // Filter skills based on selected category
  const filteredSkills = activeCategory
    ? skills.filter((skill) => skill.category === activeCategory)
    : skills;

  // Dynamic icon component
  const DynamicIcon = ({ iconName }: { iconName: string }) => {
    // @ts-ignore - Lucide icons are not fully typed
    const IconComponent = LucideIcons[iconName.charAt(0).toUpperCase() + iconName.slice(1)] || LucideIcons.Code;
    return <IconComponent size={24} />;
  };

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies and tools I work with regularly"
      className="bg-gray-50 dark:bg-gray-900/50"
    >
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="opacity-0"
      >
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-3">
                <DynamicIcon iconName={skill.icon} />
              </div>
              <h3 className="font-medium">{skill.name}</h3>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;