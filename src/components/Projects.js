import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'Showcases my web development skills with React and TailwindCSS.',
      imageUrl: '/images/portfolio.png',
      link: 'https://portfolio.example.com',
    },
    {
      title: 'Task Manager App',
      description: 'Cross-platform mobile app to manage daily tasks',
      imageUrl: '/images/taskmanager.png',
      link: 'https://github.com/sainitish/taskmanager',
    },
  ];

  return (
    <section id="projects" className="mb-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(({ title, description, imageUrl, link }, i) => (
          <a href={link} target="_blank" rel="noopener noreferrer" key={i} className="block border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
