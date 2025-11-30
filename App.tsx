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
    <div className="app-wrapper min-h-screen font-sans">
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

      {/* Dark overlay for better text readability */}
      <div className="video-overlay"></div>

      {/* Your existing content */}
      <div className="content-wrapper">
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
    </div>
  );
};

export default App;
