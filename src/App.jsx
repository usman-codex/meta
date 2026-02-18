// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProblemSolving from './components/ProblemSolving';
import Services from './components/Services';
import FutureSection from './components/FutureSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Stats />
      <ProblemSolving />
      <Services />
      <FutureSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;