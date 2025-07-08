import { useState, useEffect } from 'react';

interface ScrollAnimationProps {
  startOffset: number;
  endOffset: number;
  initialOpacity?: number;
  initialTransform?: number;
}

export default function useScrollAnimation({
  startOffset,
  endOffset,
  initialOpacity = 0,
  initialTransform = 50,
}: ScrollAnimationProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (window.scrollY > startOffset) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startOffset]);

  const opacity = isVisible ? Math.min(1, (scrollY - startOffset) / (endOffset - startOffset)) : initialOpacity;
  const transform = isVisible ? Math.max(0, initialTransform - (scrollY - startOffset) / ((endOffset - startOffset) / initialTransform)) : initialTransform;

  return {
    opacity,
    transform: `translateY(${transform}px)`,
    isVisible,
  };
} 