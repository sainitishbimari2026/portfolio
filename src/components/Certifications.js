import React from 'react';

const certifications = [
  "Google Cloud Fundamentals: Core Infrastructure",
  "AWS Cloud Technical Essentials",
  "Front-End Web UI Frameworks and Tools: Bootstrap 4 (WITH HONORS)",
  "Getting Started With Application Development",
  "Modern JavaScript: ES6 Basics",
  "The Complete Front-End Web Development Course"
];

export default function Certifications() {
  return (
    <section id="certifications" className="mb-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Certifications</h2>
      <ul className="list-disc list-inside text-lg">
        {certifications.map((cert, idx) => (
          <li key={idx} className="mb-2">{cert}</li>
        ))}
      </ul>
    </section>
  );
}
