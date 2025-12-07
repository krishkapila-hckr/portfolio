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
<<<<<<< HEAD
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* Unicorn Studio background */}
      <UnicornBackground />

      {/* Dark overlay for readability (you can lighten this if it’s too dark) */}
      <div className="fixed inset-0 bg-black/60 -z-10" />

      {/* Content */}
      <div className="relative z-0 text-slate-300">
=======
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
>>>>>>> 93a937b98eadcf8396eba6836ba35112a85e5eb1
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
