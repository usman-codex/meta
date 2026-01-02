// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Stats />
      
    </div>
  );
}

export default App;