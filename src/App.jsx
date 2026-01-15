// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProblemSolving from './components/ProblemSolving';
import Services from './components/Services';


function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Stats />
      <ProblemSolving />
      <Services />
      
    </div>
  );
}

export default App;