import React, { useEffect, useState, useRef } from 'react';
import './FutureSection.css';

const FutureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="future-sec" ref={sectionRef}>
      <div className="container-fluid future-container">
        
       
        <div className="rings-wrapper">
          <div className="ring outer-ring">
           
            <div className="orbit-item item-aws"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" /></div>
            <div className="orbit-item item-firebase"><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" alt="Firebase" /></div>
          </div>
          <div className="ring middle-ring">
            <div className="orbit-item item-flutter"><img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" alt="Flutter" /></div>
          </div>
          <div className="ring inner-ring">
             <div className="orbit-item item-mongo"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" /></div>
          </div>
        </div>

       
        <div className={`center-content ${isVisible ? 'zoom-in' : 'zoom-out'}`}>
          <h2 className="future-heading">Let's Build the <br /> Future Together</h2>
          <span className="start-proj-btn">Start Your Project</span>
        </div>

       
        <div className={`side-badge left-top ${isVisible ? 'slide-l' : 'hide-l'}`}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Icon" />
           <div><strong>Full-Stack Platforms</strong><span>Node.js + React</span></div>
        </div>
        <div className={`side-badge left-bottom ${isVisible ? 'slide-l' : 'hide-l'}`}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Icon" />
           <div><strong>UX & Branding!</strong><span>Figma</span></div>
        </div>

        
        <div className={`side-badge right-top ${isVisible ? 'slide-r' : 'hide-r'}`}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="Icon" />
           <div><strong>Cloud Infrastructure!</strong><span>AWS</span></div>
        </div>
        <div className={`side-badge right-bottom ${isVisible ? 'slide-r' : 'hide-r'}`}>
           <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="Icon" />
           <div><strong>AI-Powered Solutions!</strong><span>OpenAI</span></div>
        </div>

      </div>
      <div className="bottom-dim-shadow"></div>
    </section>
  );
};

export default FutureSection;