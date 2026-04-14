import { ReactNode, useEffect, useRef, useState } from 'react';

interface ParallaxSectionProps {
  image: string;
  children: ReactNode;
  height?: string;
  overlay?: boolean;
}

export const ParallaxSection = ({ 
  image, 
  children, 
  height = 'h-96',
  overlay = true 
}: ParallaxSectionProps) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementOffset = (scrollTop - elementTop) * 0.3;
        setOffset(elementOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden ${height}`}
    >
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translateY(${offset}px)`,
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-dark-blue bg-opacity-60" />
      )}
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        {children}
      </div>
    </section>
  );
};