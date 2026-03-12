import React from 'react';

const education = [
  {
    degree: 'Masters in Computer Science',
    institution: 'Oklahoma Christian University',
    dateRange: 'Expected 2026',
  },
  {
    degree: 'B. Tech in Computer Science & Engineering',
    institution: 'Mother Theressa College of Engineering & Technology',
    dateRange: 'Completed in 2023',
  },
  {
    degree: 'Intermediate - MPC',
    institution: 'Sri Chaitanya junior Kalashala',
    dateRange: 'Completed in 2017',
  },
];

export default function Education() {
  return (
    <section id="education" className="mb-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Education</h2>
      <ul className="list-disc list-inside text-lg">
        {education.map(({ degree, institution, dateRange }, idx) => (
          <li key={idx} className="mb-2">
            <strong>{degree}</strong>, {institution} <em>({dateRange})</em>
          </li>
        ))}
      </ul>
    </section>
  );
}
