import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-purple-400 cursor-pointer">Sai Nitish</div>
        <div className="space-x-8 hidden md:flex">
          <a href="#about" className="hover:text-purple-500 transition">About</a>
          <a href="#skills" className="hover:text-purple-500 transition">Skills</a>
          <a href="#experience" className="hover:text-purple-500 transition">Experience</a>
          <a href="#education" className="hover:text-purple-500 transition">Education</a>
          <a href="#certifications" className="hover:text-purple-500 transition">Certifications</a>
          <a href="#portfolio" className="hover:text-purple-500 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
