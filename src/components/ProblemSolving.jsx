import React, { useEffect, useState, useRef } from 'react';
import './ProblemSolving.css';

const ProblemSolving = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
       
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="problem-solving-sec" ref={sectionRef} id="about">
      <div className="container text-center">
       
        <div className="badge-pill-main mb-3">What We Do</div>
        
        <h2 className={`main-heading-clean ${isVisible ? 'active-up' : 'inactive-down'}`}>
          Innovative Problem-Solving for <br />
          <span>Your Business Needs</span>
        </h2>

        <div className="tree-fixed-layout">
          
          <div className="node-spacer">
              <div className="central-node-v3">
                <div className="ring-pulse rp1"></div>
                <div className="ring-pulse rp2"></div>
                <div className="ring-pulse rp3"></div>
                <div className="main-icon-node">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
              </div>
          </div>

          
          <div className="lines-container-v3">
             <div className="line-stem-top"></div>
             <div className="line-horizontal-bar">
                <div className="drop-l-line"></div>
                <div className="drop-r-line"></div>
             </div>
             <div className="line-stem-bottom"></div>
          </div>

          <div className="cards-grid-v3">
            
            <div className={`figma-card-v3 ${isVisible ? 'slide-in' : 'slide-out-left'}`}>
              <div className="card-floating-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <div className="star-icon st1">✦</div>
              <div className="star-icon st2">✦</div>
              <h3>Understand Your Vision</h3>
              <p>We dive deep into your business needs to build intelligent solutions.</p>
            </div>

            
            <div className={`figma-card-v3 ${isVisible ? 'slide-in' : 'slide-out-right'}`}>
              <div className="card-floating-icon">
                <i className="fa-solid fa-bezier-curve"></i>
              </div>
              <div className="star-icon st1">✦</div>
              <div className="star-icon st2">✦</div>
              <h3>Design Future-Ready Solutions</h3>
              <p>From UI/UX to full-stack platforms — we craft scalable designs.</p>
            </div>

        
            <div className="full-width-wrapper">
                <div className={`figma-card-v3 bottom-special ${isVisible ? 'slide-in' : 'slide-out-bottom'}`}>
                  <div className="card-floating-icon">
                    <i className="fa-solid fa-rocket"></i>
                  </div>
                  <div className="star-icon st1">✦</div>
                  <div className="star-icon st2">✦</div>
                  <h3>Launch with Scalable Precision</h3>
                  <p>We implement agile, cloud-native systems built for high performance and long-term success. Our deployments are secure, efficient, and optimized.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolving;