import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import mapImg from '../assets/map.png'; 

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const data = [
    {
      title: "Task Matcher Platform !",
      desc: "An official website for TRB showcasing the company's Al services, mission, and team. Designed with a modern, mobile-friendly interface to provide visitors smooth access to company information and contact options on any device.",
      client: "Tech Resources Bench (TRB)"
    },
    {
      title: "Snapture App UI Design !",
      desc: "Designed a modern, user-friendly mobile app interface for Med-Bay, a South African healthcare service provider. The app helps users book medical services, view health records, and track appointments. Focus was on clean Ul. intuitive navigation, and mobile responsiveness to enhance user experience.",
      client: "Med-Bay LLC"
    },
    {
      title: "TRB AI Website !",
      desc: "An official website for TRB showcasing the company's Al services, mission, and team. Designed with a modern, mobile-friendly interface to provide visitors smooth access to company information and contact options on any device.",
      client: "Tech Resources Bench (TRB)"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => {
    const touchEnd = e.targetTouches[0].clientX;
    if (touchStart - touchEnd > 70) setActiveIndex((prev) => (prev + 1) % data.length);
    if (touchStart - touchEnd < -70) setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
    setTouchStart(touchEnd);
  };

  return (
    <section className="testimonials-sec" ref={sectionRef} id="portfolio">
      <div className="container text-center content-main">
        {/* Header Part */}
        <div className="badge-testimonials mb-2">Testimonials</div>
        <h2 className={`testimonial-heading ${isVisible ? 'fade-up' : 'fade-down'}`}>
          Don't Trust Us, Trust <br /> <span>Their Voice</span>
        </h2>

        {/* Map & Cards Area */}
        <div className="interactive-area">
          {/* Map starts below heading */}
          <div className="map-background" style={{ backgroundImage: `url(${mapImg})` }}></div>

          {/* Cards on top of Map */}
          <div className="testimonials-wrapper" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            {data.map((item, index) => {
              let position = "nextCard";
              if (index === activeIndex) position = "activeCard";
              else if (index === (activeIndex - 1 + data.length) % data.length) position = "prevCard";

              return (
                <div key={index} className={`testimonial-card-v2 ${position}`} onClick={() => setActiveIndex(index)}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="client-footer"><strong>{item.client}</strong></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="slider-dots">
          {data.map((_, i) => (
            <div key={i} className={`dot-item ${i === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(i)}></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;