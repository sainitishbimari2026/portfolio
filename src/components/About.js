import React from 'react';

export default function About() {
  return (
    <section id="about" className="mb-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-lg leading-relaxed">
        A dedicated Full-stack Developer with a strong foundation in both front-end and back-end technologies, including expertise in the MERN stack and React Native. Experienced in creating responsive, user-friendly interfaces and scalable server-side solutions, with a keen eye for design and usability. Proven ability to integrate complex systems, optimize performance, and deliver high-quality software solutions.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        A proactive problem-solver with a passion for continuous learning and staying updated with the latest industry trends. Known for excellent teamwork, communication skills, and the ability to thrive in fast-paced environments.
      </p>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Contact Info</h3>
        <p>Email: <a href="mailto:bimarisainitish@gmail.com" className="underline text-blue-600">bimarisainitish@gmail.com</a></p>
        <p>Phone: +14053639730</p>
        <p>Location: 20 S Bryant Ave, Edmond, OK, 73034</p>
      </div>
    </section>
  );
}
