import { useEffect, useState } from 'react';

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    // Observe the body element for scroll animations
    const body = document.body;
    if (body) {
      observer.observe(body);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large floating cubes */}
        <div 
          className="absolute w-32 h-32 border border-primary/10 rotate-45"
          style={{
            top: '10%',
            left: '5%',
            transform: `rotate(${45 + scrollY * 0.1}deg) translateY(${scrollY * -0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        
        <div 
          className="absolute w-24 h-24 border border-secondary/10 rotate-12"
          style={{
            top: '60%',
            right: '10%',
            transform: `rotate(${12 + scrollY * -0.15}deg) translateY(${scrollY * -0.3}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        <div 
          className="absolute w-16 h-16 border border-accent/10 rotate-45"
          style={{
            top: '30%',
            right: '5%',
            transform: `rotate(${45 + scrollY * 0.2}deg) translateY(${scrollY * -0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-primary/20' : 
              i % 3 === 1 ? 'bg-secondary/20' : 'bg-accent/20'
            }`}
            style={{
              top: `${10 + (i * 5) % 80}%`,
              left: `${5 + (i * 7) % 90}%`,
              transform: `translateY(${scrollY * (-0.1 - i * 0.01)}px) translateX(${Math.sin(scrollY * 0.001 + i) * 20}px)`,
              transition: 'transform 0.1s ease-out',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Data Stream Lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              top: `${15 + i * 10}%`,
              left: 0,
              right: 0,
              transform: `translateX(${-100 + (scrollY * 0.5 + i * 50) % 300}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        ))}
      </div>

      {/* 3D Perspective Grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)
          `,
          backgroundSize: '100px 100px',
          transform: `perspective(1000px) rotateX(${scrollY * 0.02}deg) translateY(${scrollY * 0.1}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Holographic Scanlines */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(59, 130, 246, 0.03) 2px,
            rgba(59, 130, 246, 0.03) 4px
          )`,
          transform: `translateY(${scrollY * -0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </>
  );
};

export default ScrollAnimations;