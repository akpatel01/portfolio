import Link from 'next/link';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="mb-8">
          <p className="text-lg mb-4">
            Hello! I'm a passionate web developer with expertise in modern frontend technologies.
            I specialize in building responsive, user-friendly web applications using React, Next.js,
            and other cutting-edge tools.
          </p>
          <p className="text-lg mb-4">
            With several years of experience in the industry, I've worked on a variety of projects
            ranging from small business websites to complex enterprise applications.
            I'm dedicated to writing clean, maintainable code and creating exceptional user experiences.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or enjoying outdoor activities.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University Name • 2018-2022</p>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium">Frontend Developer</h3>
            <p className="text-gray-600">Company Name • 2022-Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed and maintained multiple React applications</li>
              <li>Collaborated with design and backend teams to implement new features</li>
              <li>Improved application performance and user experience</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-medium">Web Development Intern</h3>
            <p className="text-gray-600">Internship Company • Summer 2021</p>
            <ul className="list-disc list-inside mt-2">
              <li>Assisted in developing company website using React</li>
              <li>Implemented responsive designs for mobile compatibility</li>
              <li>Participated in code reviews and team meetings</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8">
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