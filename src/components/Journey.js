import React from 'react';

const milestones = [
  { year: '2022', event: 'Started learning web development' },
  { year: '2023', event: 'Built my first full-stack application' },
  { year: '2024', event: 'Joined my first software company' },
  { year: '2025', event: 'Lead developer on multiple projects' },
];

export default function Journey() {
  return (
    <section id="journey" className="mb-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">My Journey</h2>
      <ul className="border-l-4 border-blue-600 pl-6 space-y-6">
        {milestones.map(({ year, event }, idx) => (
          <li key={idx} className="relative">
            <span className="absolute -left-8 top-0 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">{year}</span>
            <p className="text-lg leading-relaxed">{event}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
