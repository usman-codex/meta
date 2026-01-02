import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [count, setCount] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const interval = setInterval(() => {
          start += 1;
          if (start >= 90) { setCount(90); clearInterval(interval); }
          else { setCount(start); }
        }, 20);
      }
    }, { threshold: 0.5 });

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-outer" ref={sectionRef}>
      <div className="container">
        <div className="stats-glass-box row align-items-center m-0">
          <div className="col-md-5 left-content-slide">
             <div className="d-flex align-items-center gap-4 text-start">
                <div className="purple-hex-icon"><i className="fa-solid fa-microchip"></i></div>
                <div>
                   <h4 className="fw-bold m-0">Engineering the <br/> Future with AI</h4>
                   <p className="small text-secondary mt-1">Smart systems, smarter growth. Innovation led solutions.</p>
                </div>
             </div>
          </div>

          <div className="col-md-2 divider-vertical">
             <h1 className="percentage-counter">{count}%</h1>
          </div>

          <div className="col-md-5 right-content-slide text-start ps-5">
             <h4 className="fw-bold m-0">Secure. Smart. <br/> Scalable.</h4>
             <p className="small text-secondary mt-1">AI-led systems with real-time protection, driving reliable performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;