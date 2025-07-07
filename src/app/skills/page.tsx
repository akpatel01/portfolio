import Link from 'next/link';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'RESTful APIs', level: 80 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Webpack', level: 70 },
        { name: 'Jest', level: 65 },
        { name: 'Figma', level: 60 },
        { name: 'VS Code', level: 90 },
      ],
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-6">My Skills</h1>
        <p className="text-lg mb-8">
          Here's an overview of my technical skills and proficiency levels.
        </p>
        
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Certificates & Courses</h2>
          <ul className="space-y-4">
            <li className="border-l-4 border-blue-600 pl-4 py-1">
              <h3 className="font-medium">Advanced React and Redux</h3>
              <p className="text-gray-600">Udemy • 2022</p>
            </li>
            <li className="border-l-4 border-blue-600 pl-4 py-1">
              <h3 className="font-medium">Full Stack Web Development</h3>
              <p className="text-gray-600">Coursera • 2021</p>
            </li>
            <li className="border-l-4 border-blue-600 pl-4 py-1">
              <h3 className="font-medium">JavaScript Algorithms and Data Structures</h3>
              <p className="text-gray-600">freeCodeCamp • 2020</p>
            </li>
          </ul>
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