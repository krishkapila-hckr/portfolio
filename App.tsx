
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Contact />
    </div>
  );
};

export default App;
