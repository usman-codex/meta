import React from 'react';
import './Footer.css';
import logo from '../assets/meta-logo.png'; 

const Footer = () => {
  return (
    <footer className="footer-v6">
      <div className="container footer-content">
        <div className="row gy-5">
          
         
          <div className="col-lg-3 col-md-6">
            <img src={logo} alt="MetaVertex" className="f-logo" />
            <p className="f-text mt-3">
              We unlock full potential for startups and enterprises through intelligent digital solutions.
            </p>
          </div>

        
          <div className="col-lg-2 col-md-3 col-6">
            <h6 className="f-title">Quick Links</h6>
            <ul className="f-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#career">Career</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

         
          <div className="col-lg-2 col-md-3 col-6">
            <h6 className="f-title">Company</h6>
            <ul className="f-list">
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>

          
          <div className="col-lg-5 col-md-12">
            <h4 className="f-community-title">Join the MetaVertex <br /> <span>Community</span></h4>
            
            <div className="f-input-box">
              <input type="email" placeholder="Enter Your Gmail" />
              <button>Join Us</button>
            </div>

            <div className="f-socials">
              <a href="#" className="s-link"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="s-link"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="s-link"><i className="fa-brands fa-facebook-f"></i></a>
            </div>
          </div>

        </div>

        <div className="f-bottom-bar text-center">
          <p>© 2025 MetaVertex.ai — All rights reserved.</p>
        </div>
      </div>

      <div className="footer-horizon-glow"></div>
    </footer>
  );
};

export default Footer;