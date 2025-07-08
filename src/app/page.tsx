import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import TypewriterTitle from "@/components/TypewriterTitle";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-black py-28 pt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-slideInLeft">
              <h1 className="text-5xl font-bold leading-tight mb-4 text-black">
                Hi, I'm <span className="text-black">Arpit Ribadiya</span>
              </h1>
              <TypewriterTitle />
              <p className="text-xl text-black mb-8 max-w-lg">
                I build modern, responsive web applications with cutting-edge technologies
                to create exceptional user experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#projects"
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-black/80 transition-all duration-300 transform hover:scale-105"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="bg-transparent border-2 border-black text-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-slideInRight">
              <div className="relative w-80 h-80 animate-float">
                <div className="absolute w-64 h-64 bg-black/10 rounded-lg transform rotate-45 top-8 left-8"></div>
                <div className="absolute w-64 h-64 bg-primary-dark rounded-lg transform rotate-12"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-white rounded-lg shadow-xl flex items-center justify-center">
                    <div className="text-5xl">
                      <span className="text-primary-dark">{'<'}</span>
                      <span className="text-black font-bold">AR</span>
                      <span className="text-primary-dark">{'/>'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black relative tracking-widest uppercase font-serif">
            ABOUT
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-slideUp">
              <h3 className="text-2xl font-semibold mb-4 text-black">Who I Am</h3>
              <p className="text-black mb-4 leading-relaxed">
                I'm a passionate React and Next.js developer with expertise in building 
                modern web applications. I focus on creating clean, efficient, and 
                maintainable code that delivers exceptional user experiences.
              </p>
              <p className="text-black mb-4 leading-relaxed">
                With a strong foundation in JavaScript, TypeScript, and modern frontend 
                frameworks, I enjoy solving complex problems and turning ideas into reality.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="flex items-center">
                  <div className="mr-2 text-black">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-black">3+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 text-black">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-black">15+ Projects Completed</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="grid grid-cols-2 gap-6">
                {aboutCards.map((card, index) => (
                  <div 
                    key={card.title} 
                    className="bg-bg-light p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift"
                    style={{ 
                      animationName: 'fadeIn',
                      animationDuration: '0.8s',
                      animationFillMode: 'both',
                      animationDelay: `${index * 150 + 300}ms`
                    }}
                  >
                    <div className="mb-3 text-black">
                      {card.icon}
                    </div>
                    <h4 className="text-lg font-medium mb-2 text-black">{card.title}</h4>
                    <p className="text-black text-sm">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20" style={{ backgroundColor: '#1f1f1f' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 relative tracking-widest uppercase font-serif" style={{ color: 'white' }}>
            SKILLS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col items-center hover-scale"
                style={{ 
                  backgroundColor: 'rgba(248,245,244,.05)',
                  animationName: 'fadeIn',
                  animationDuration: '0.8s',
                  animationFillMode: 'both',
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="text-5xl mb-4 text-white">{skill.icon}</div>
                <h3 className="text-lg font-medium text-white mb-1" style={{ color: 'white' }}>{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black relative tracking-widest uppercase font-serif">
            PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                demo={project.demo}
                github={project.github}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// About cards data
const aboutCards = [
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    title: "React & Next.js",
    description: "Building modern web applications with React ecosystem",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    )
  },
  {
    title: "Responsive Design",
    description: "Creating websites that work on all devices",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
      </svg>
    )
  },
  {
    title: "Performance Optimization",
    description: "Building fast and efficient web applications",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    )
  }
];

// Sample data for skills
const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "JavaScript", icon: "JS" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Redux", icon: "🔄" },
];

// Sample data for projects
const projects = [
  {
    title: "Video Streaming Platform",
    description: "A full-featured online Streaming platform.",
    technologies: ["React", "Tailwind CSS" ],
    demo: "https://akflix.vercel.app/",
    github: "https://github.com/akpatel01/akflix",
  },
  {
    title: "Social Media Backend api",
    description: "Collection of apis for social media app",
    technologies: ["nodejs", "express", "mongodb", "jwt"],
    github: "https://github.com/akpatel01/socialmedia-backend",
  },
  {
    title: "Checkout Page Design",
    description: "Design of checkout page for a ecommerce website",
    technologies: ["React", "Tailwind CSS", "CSS", "HTML"],
    demo: "http://checkout-steel-three.vercel.app/",
    github: "https://github.com/akpatel01/checkout",
  }
];
