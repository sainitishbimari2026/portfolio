import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 mb-8 fixed w-full z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">My Portfolio</div>
        <div className="space-x-4">
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#journey" className="text-gray-700 hover:text-blue-600">Journey</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
