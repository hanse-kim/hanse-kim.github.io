import React, { useEffect, useRef } from 'react';

type ScrollProgressProps = {
  className?: string;
};

export const ScrollProgress = ({ className = '' }: ScrollProgressProps) => {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrollPercentage}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${className} bg-border`}>
      <div
        ref={progressRef}
        className="w-full h-full bg-main"
        style={{ transform: `scaleX(0%)`, transformOrigin: 'left' }}
      />
    </div>
  );
};
