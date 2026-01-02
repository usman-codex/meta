import React from 'react';
import './Hero.css';

const Hero = () => {
  // Smooth scroll function
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-fixed-v5" id="home">
      {/* 1. Starry Background */}
      <div className="sky-overlay"></div>

      <div className="hero-container-v5">
        {/* 2. Main Text */}
        <div className="text-wrapper-v5">
          <h1 className="main-title-v5">
            Empower <span className="italic-light">Intelligent</span> <br />
            Innovation
          </h1>
        </div>

        {/* 3. ARC AND ARROW TOGETHER (Perfectly Aligned) */}
        <div className="arc-btn-section">
          {/* Arc Line */}
          <div className="glow-arc-line"></div>
          
          {/* Arrow Button */}
          <div className="arrow-btn-box" onClick={scrollToServices}>
            <div className="pulse-arrow-circle">
              <i className="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        </div>

        {/* 4. Infinite Marquee */}
        <div className="marquee-v5">
          <div className="marquee-track-v5">
            <span><i class="fa-brands fa-openai"></i>OpenAI</span>
            <span><i className="fa-brands fa-google"></i> Google Cloud</span>
            <span><i className="fa-brands fa-github"></i> GitHub</span>
            <span><i className="fa-brands fa-nvidia"></i> NVIDIA</span>
            <span><i className="fa-brands fa-hubspot"></i> HubSpot</span>
            {/* Loop Duplicates */}
            <span><i className="fa-brands fa-openai"></i> OpenAI</span>
            <span><i className="fa-brands fa-google"></i> Google Cloud</span>
            <span><i className="fa-brands fa-github"></i> GitHub</span>
            <span><i className="fa-brands fa-nvidia"></i> NVIDIA</span>
            <span><i className="fa-brands fa-hubspot"></i> HubSpot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;