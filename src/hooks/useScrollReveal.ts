import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const { threshold = 0.1, rootMargin = '0px' } = options;
    const element = ref.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate-reveal');
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);
  
  return ref;
};

export default useScrollReveal;