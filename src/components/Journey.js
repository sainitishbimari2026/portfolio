import React from 'react';

export default function Journey() {
  // Sample journey events
  const journey = [
    { year: '2022', event: 'Started learning web development' },
    { year: '2023', event: 'Built first full-stack app' },
    { year: '2024', event: 'Started professional developer career' },
  ];

  return (
    <section id="journey" className="mb-12">
      <h2 className="text-3xl font-bold mb-4">My Journey</h2>
      <ul className="list-disc list-inside">
        {journey.map(({ year, event }, idx) => (
          <li key={idx}><strong>{year}:</strong> {event}</li>
        ))}
      </ul>
    </section>
  );
}
