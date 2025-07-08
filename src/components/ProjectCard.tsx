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
      className="bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-xl hover-lift"
      style={{ 
        transition: 'all .2s linear',
        animationName: 'fadeIn',
        animationDuration: '0.8s',
        animationFillMode: 'both',
        animationDelay: `${index * 150}ms`
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.01)';
        e.currentTarget.style.zIndex = '10';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, .7)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.zIndex = '1';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, .1)';
      }}
    >
      <div className="h-48 bg-bg-light relative">
        <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
          <span className="text-black text-xl font-bold">{title}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-black mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs px-3 py-1 rounded-full bg-primary-light text-black"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black font-medium hover:underline transition-all duration-300"
          >
            Live Demo
          </a>
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:text-black/80 font-medium hover:underline transition-all duration-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
} 