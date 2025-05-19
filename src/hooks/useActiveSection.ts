import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;
      
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        
        if (!section) continue;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (
          scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);
  
  return activeSection;
};

export default useActiveSection;