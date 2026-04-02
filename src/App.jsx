import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />

      <style>{`
        .app-container {
          background-color: var(--bg-color);
          overflow-x: hidden;
        }

        main {
          width: 100%;
        }

        /* Responsive spacing for mobile */
        @media screen and (max-width: 768px) {
          main > section {
            padding: 60px 20px;
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
