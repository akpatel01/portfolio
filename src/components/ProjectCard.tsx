'use client';

interface Technology {
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demo?: string;
  github: string;
  index: number;
}

export default function ProjectCard({ title, description, technologies, demo, github, index }: ProjectCardProps) {
  return (
    <div 
      key={title} 
      className="bg-white border border-gray-200 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
      style={{ 
        animationName: 'fadeIn',
        animationDuration: '0.8s',
        animationFillMode: 'both',
        animationDelay: `${index * 150}ms`
      }}
    >
      <div className="h-40 sm:h-48 bg-bg-light relative">
        <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
          <span className="text-black text-lg sm:text-xl font-bold px-4 text-center">{title}</span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-sm sm:text-base text-black mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-2 py-1 rounded-full bg-primary-light text-black"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-center sm:text-left px-4 py-2 sm:py-0 bg-primary-light sm:bg-transparent rounded sm:rounded-none text-black font-medium hover:underline transition-all duration-300"
            >
              Live Demo
            </a>
          )}
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-center sm:text-right px-4 py-2 sm:py-0 bg-black sm:bg-transparent rounded sm:rounded-none text-white sm:text-black font-medium hover:underline transition-all duration-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
} 