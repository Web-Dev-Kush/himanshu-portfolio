import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, subtitle, children, className = '' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 scroll-mt-20 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;