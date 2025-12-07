import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import UnicornBackground from './components/UnicornBackground';

const App: React.FC = () => {
  return (
    
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* Unicorn Studio background */}
      <UnicornBackground />
    <div className="relative z-0 text-slate-300 app-wrapper min-h-screen">
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

      {/* Video background */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/your-video.mp4" type="video/mp4" />
        Your browser doesn't support video.
      </video>

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60 -z-10" />

      {/* Content */}
      
    </div>
  );
};

export default App;
