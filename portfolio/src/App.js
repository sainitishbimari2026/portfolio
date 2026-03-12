import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4">
        <About />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}

export default App;
