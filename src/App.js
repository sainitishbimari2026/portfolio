import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-16">
      <Navbar />
      <main className="max-w-7xl mx-auto pt-24">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
