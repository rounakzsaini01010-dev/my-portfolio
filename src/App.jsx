import React, { useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050508] text-gray-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      {/* Executive Luxury Loader */}
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {/* Champagne Gold Trailing Custom Cursor */}
      <CustomCursor />

      {/* Ambient Gold Mesh Background Atmosphere */}
      <BackgroundEffects />

      {/* Navigation Header */}
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section with 24K Gold 3D Viewport */}
        <Hero />

        {/* About Rounak Saini & Domain Pillars */}
        <About />

        {/* LinkedIn Verified Google Cloud Gen AI & Tech Certifications */}
        <Certifications />

        {/* Technical Capabilities Matrix */}
        <Skills />

        {/* Flagship Production Projects (KisanSetu AI, OmniCore ERP, Ethera Web3, Games) */}
        <Projects />

        {/* Practical Journey & Milestones */}
        <Experience />

        {/* Academic Foundation @ MIET Meerut CSE */}
        <Education />

        {/* Executive Contact Portal */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
