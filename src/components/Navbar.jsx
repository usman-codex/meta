import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/meta-logo.png'; 

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-nav-wrapper">
      
      <div className={`top-promo-header ${isSticky ? 'hide-header' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <p className="m-0">
            Empowering innovation with intelligent solutions tailored for your growth. 
            <a href="#" className="ms-2">Explore Our Work <i className="fa-solid fa-chevron-right small"></i></a>
          </p>
          <button className="close-header-btn">&times;</button>
        </div>
      </div>

      
      <nav className={`navbar-meta ${isSticky ? 'navbar-sticky' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center">
          
          
          <div className="nav-logo-box">
            <img src={logo} alt="MetaVertex.ai" className="meta-logo-img" />
          </div>

         
          <div className="pill-menu-container d-none d-lg-block">
            <ul className="nav-list-items">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          
          <div className="nav-right-actions d-flex align-items-center">
            <button className="get-touch-btn d-none d-sm-flex">
              <i className="fa-solid fa-wand-magic-sparkles me-2"></i> Get in Touch
            </button>
            
            <button 
              className="mobile-toggle-btn d-lg-none ms-3" 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <i className={`fa-solid ${showMobileMenu ? 'fa-xmark' : 'fa-bars-staggered'}`}></i>
            </button>
          </div>
        </div>

        
        <div className={`mobile-menu-overlay ${showMobileMenu ? 'show' : ''}`}>
           <ul className="mobile-nav-links">
              <li><a href="#home" onClick={() => setShowMobileMenu(false)}>Home</a></li>
              <li><a href="#services" onClick={() => setShowMobileMenu(false)}>Services</a></li>
              <li><a href="#portfolio" onClick={() => setShowMobileMenu(false)}>Portfolio</a></li>
              <li><a href="#about" onClick={() => setShowMobileMenu(false)}>About</a></li>
              <li><a href="#career" onClick={() => setShowMobileMenu(false)}>Career</a></li>
              <li><a href="#blog" onClick={() => setShowMobileMenu(false)}>Blog</a></li>
           </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;