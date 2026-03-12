import React from 'react';

const projects = [
  {
    title: 'Car Wash Application',
    description: 'Designed & developed an engaging, user-friendly web interface using React.js. Built secure backend with Node.js, Express.js.',
    link: '#',
  },
  {
    title: 'Admin & Merchant Dashboards',
    description: 'Led development of scalable dashboards with Next.js & Tailwind CSS, implementing real-time updates and form validations.',
    link: '#',
  },
  {
    title: 'Location Tracking App',
    description: 'Implemented seamless Google Maps live location tracking, advanced geolocation services, and real-time communication systems.',
    link: '#',
  },
  {
    title: 'Friend Book - Social Network',
    description: 'Developed semantic-based friend recommendation engines and privacy preserving location queries.',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mb-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Projects & Contributions</h2>
      <div className="space-y-6">
        {projects.map(({ title, description, link }, idx) => (
          <div key={idx} className="border bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-2">{description}</p>
            {link && <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Project</a>}
          </div>
        ))}
      </div>
    </section>
  );
}
