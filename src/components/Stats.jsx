import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';
import statsLogo from '../assets/StatsIcon.png'; 

const Stats = () => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 90;
      const interval = setInterval(() => {
        start += 1;
        if (start >= end) {
          setPercent(end);
          clearInterval(interval);
        } else {
          setPercent(start);
        }
      }, 15);
      return () => clearInterval(interval);
    } else {
      setPercent(0);
    }
  }, [isVisible]);

  return (
    <section className="stats-main-sec" ref={sectionRef}>
      <div className="container">
        <div className="stats-compact-frame">
          <div className="stats-flex-container">
            
            <div className={`stats-left-side ${isVisible ? 'slide-left' : 'init-left'}`}>
              <div className="stats-large-img">
                <img src={statsLogo} alt="AI Icon" />
              </div>
              <div className="stats-text-content">
                <h2>Engineering the <br /> Future with AI</h2>
                <p>Smart systems, smarter growth. Let innovation <br /> lead your business forward.</p>
              </div>
            </div>


            <div className="stats-mid-line"></div>

            <div className={`stats-right-side ${isVisible ? 'slide-right' : 'init-right'}`}>
              <h1 className="compact-counter">{percent}%</h1>
              <div className="stats-text-content ms-4">
                <h2>Secure. Smart. <br /> Scalable.</h2>
                <p>AI-led systems with real-time protection, <br /> driving reliable performance at scale.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;