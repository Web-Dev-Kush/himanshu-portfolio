import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Section from './ui/Section';
import Card, { CardImage, CardContent, CardTitle } from './ui/Card';
import Button from './ui/Button';
import { projects } from '../data/projects';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const sectionRef = useScrollReveal();

  // Extract unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  // Filter projects based on selected tag
  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Explore some of my recent work and personal projects"
    >
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="opacity-0"
      >
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={filter === null ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group transform transition-transform hover:-translate-y-1"
            >
              <CardImage src={project.imageUrl} alt={project.title} />
              <CardContent>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle>{project.title}</CardTitle>
                  {project.featured && (
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 inline-flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 inline-flex items-center"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;