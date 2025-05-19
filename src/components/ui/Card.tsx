import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className = '', onClick }: CardProps) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="w-full h-48 md:h-56 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

export const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-xl font-bold mb-2">{children}</h3>;
};

export default Card;