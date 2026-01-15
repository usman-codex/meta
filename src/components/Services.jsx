import React, { useState, useEffect, useRef } from 'react';
import './Services.css';

import cardBg1 from '../assets/card1.png';
import cardBg2 from '../assets/card2.png';
import cardBg3 from '../assets/card3.png';

const Services = () => {
  const [indices, setIndices] = useState([0, 1, 2]); 
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      title: "Custom Software Development",
      desc: "Build scalable, secure, and tailored software solutions that align with your business goals.",
      bg: cardBg1
    },
    {
      title: "Web & Mobile Applications",
      desc: "Design and develop responsive mobile and web apps with clean code and elegant UI.",
      bg: cardBg2
    },
    {
      title: "DevOps & Cloud Services",
      desc: "Accelerate deployment with CI/CD pipelines and optimize performance across AWS or GCP.",
      bg: cardBg3
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const moveNext = () => setIndices(prev => [prev[1], prev[2], prev[0]]);
  const movePrev = () => setIndices(prev => [prev[2], prev[0], prev[1]]);

  return (
    <section className="services-section-v2" ref={sectionRef} id="services">
     
      <div className="neon-grid-floor"></div>

      <div className="container text-center content-header">
        <div className="services-badge">Our Core Services</div>
        <h2 className={`services-main-title ${isVisible ? 'slide-up' : 'slide-down'}`}>
          Comprehensive Service <br /> <span>Offerings</span>
        </h2>
      </div>

      <div className="services-carousel">
        <button className="carousel-arrow left-arrow" onClick={movePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        
        <div className="services-cards-stack">
          {indices.map((serviceIdx, posIdx) => {
            const service = services[serviceIdx];
            let posClass = posIdx === 0 ? "side-left" : posIdx === 1 ? "main-center" : "side-right";
            
            return (
              <div key={serviceIdx} className={`service-v2-card ${posClass}`} 
                   style={{ backgroundImage: `url(${service.bg})` }}>
                <div className="v2-card-inner">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <button className="v2-learn-btn">
                    Learn more <i className="fa-solid fa-arrow-right-long ms-2"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button className="carousel-arrow right-arrow" onClick={moveNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>

       
        <div className="v2-indicators">
           <div className={`dot ${indices[1] === 0 ? 'active' : ''}`}></div>
           <div className={`dot ${indices[1] === 1 ? 'active' : ''}`}></div>
           <div className={`dot ${indices[1] === 2 ? 'active' : ''}`}></div>
        </div>
      </div>
    </section>
  );
};

export default Services;