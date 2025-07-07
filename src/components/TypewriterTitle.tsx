'use client';

import Typewriter from 'typewriter-effect';

interface TypewriterTitleProps {
  className?: string;
}

export default function TypewriterTitle({ className = "" }: TypewriterTitleProps) {
  return (
    <h2 className={`text-3xl font-medium mb-6 text-black ${className}`}>
      <Typewriter
        options={{
          strings: ['React Developer', 'Next.js Developer', 'Frontend Developer', 'UI/UX Enthusiast'],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
        }}
      />
    </h2>
  );
} 