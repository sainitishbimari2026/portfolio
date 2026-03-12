import React from 'react';

export default function Projects() {
  // Sample projects data
  const projects = [
    { title: 'Project One', description: 'Description of project one.' },
    { title: 'Project Two', description: 'Description of project two.' },
    { title: 'Project Three', description: 'Description of project three.' },
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded shadow-sm bg-white">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
