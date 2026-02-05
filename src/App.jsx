// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProblemSolving from './components/ProblemSolving';
import Services from './components/Services';
import FutureSection from './components/FutureSection';


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Stats />
      <ProblemSolving />
      <Services />
      <FutureSection />
      
    </div>
  );
}

export default App;