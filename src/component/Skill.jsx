import React from 'react';

const Skills = () => {

  const devSkills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 80 },
    { name: 'HTML/CSS', level: 100 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Next.js', level: 20 },
    { name: 'Shopify', level: 50 },
    { name: 'Graphic Design', level: 40 },
    { name: 'Digital Marketing', level: 100 },
    { name: 'Ms Excel Work ', level: 50 },
  ];

  const tools = [
    'Photoshop',
    'VS Code', 'Git', 'TailwindCSS', 'Js', 'Next.js', 
    'Shopify',
     'Ms Excel',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
  <div className="container mx-auto px-4 text-blue-700">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">My Skills</h2>
      <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
    </div>

    {/* Skills Diagram */}
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Web Development & Other Skills
      </h3>

      {devSkills.map((skill, index) => (
        <div key={index} className="mb-6">

          <div className="flex justify-between mb-2">
            <span className="font-medium">{skill.name}</span>

            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              {skill.level}%
            </span>
          </div>

          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 rounded-full transition-all duration-1000"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>

        </div>
      ))}
    </div>

    {/* Tools */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Tools & Technologies
      </h3>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="font-medium">{tool}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
  );
};

export default Skills;