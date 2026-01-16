import React from 'react';
import './Hero.css';

const Hero = () => {
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-fixed-v5" id="home">
      
      <div className="sky-overlay"></div>

      <div className="hero-container-v5">
        
        <div className="text-wrapper-v5">
          <h1 className="main-title-v5">
            Empower <span className="italic-light">Intelligent</span> <br />
            Innovation
          </h1>
        </div>

       
        <div className="arc-btn-section">
          
          <div className="glow-arc-line"></div>
          
          
          <div className="arrow-btn-box" onClick={scrollToServices}>
            <div className="pulse-arrow-circle">
              <i className="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        </div>

        
        <div className="marquee-v5">
          <div className="marquee-track-v5">
            <span><i className="fa-solid fa-brain"></i> OpenAI</span>
            <span><i className="fa-brands fa-google"></i> Google Cloud</span>
            <span><i className="fa-brands fa-github"></i> GitHub</span>
            <span><i className="fa-brands fa-nvidia"></i> NVIDIA</span>
            <span><i className="fa-brands fa-hubspot"></i> HubSpot</span>
           
            <span><i className="fa-solid fa-brain"></i> OpenAI</span>
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