import React from 'react';

const skills = [
  'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Bootstrap', 'React JS',
  'Next JS', 'Material UI', 'Node JS', 'Express JS', 'Feathers JS', 'PHP',
  'CodeIgniter', 'Python', 'Flask', 'Git', 'GitHub', 'AWS', 'React Native',
  'JWT', 'OAuth', 'Axios', 'Third-Party API Integrations', 'Firebase', 'Redux'
];

export default function Skills() {
  return (
    <section id="skills" className="mb-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <ul className="grid grid-cols-2 gap-4 list-disc pl-6">
        {skills.map((skill, i) => (
          <li key={i} className="text-lg">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
