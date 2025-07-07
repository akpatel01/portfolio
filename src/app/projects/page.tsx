import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A full-featured e-commerce platform built with Next.js, React, and Stripe for payments.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      image: '/placeholder.jpg',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects with real-time updates.',
      technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
      image: '/placeholder.jpg',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data using a third-party API.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Styled Components'],
      image: '/placeholder.jpg',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-lg mb-8">
          Here are some of the projects I've worked on. Each project showcases different skills and technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 relative">
                {/* Replace with actual project images */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink} 
                    className="text-blue-600 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="text-blue-600 hover:underline text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <Link 
            href="/"
            className="text-blue-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 