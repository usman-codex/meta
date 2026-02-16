import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What Services Does Your Agency Offer?",
      answer: "We specialize in AI-led digital services, including custom software development, cloud solutions, mobile/web apps, UI/UX design, and DevOps. Our solutions scale with your goals."
    },
    {
      id: 2,
      question: "How Fast Can You Start A New Project?",
      answer: "We're ready when you are. After discovery, we usually start within 5—7 business days to ensure alignment and quality from day one."
    },
    {
      id: 3,
      question: "How Do You Handle Revisions And Iterations?",
      answer: "We follow an iterative approach with checkpoints to ensure your vision stays at the center of the process throughout development."
    },
    {
      id: 4,
      question: "What If I Need An NDA Or Contract?",
      answer: "We're happy to provide a signed NDA and detailed project contract for your peace of mind and professional security."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
      
        <div className="text-center mb-5">
          <div className="faq-badge mb-3">FAQ</div>
          <h2 className="faq-main-heading">Frequently Asked <br /> <span>Questions</span></h2>
        </div>

     
        <div className="faq-container-list">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openId === faq.id ? 'active' : ''}`}
              onMouseEnter={() => setOpenId(faq.id)}
              onMouseLeave={() => setOpenId(null)}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            >
              <div className="faq-question-row d-flex justify-content-between align-items-center">
                <h3>{faq.question}</h3>
                
              </div>

              
              <div className="faq-answer-row">
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;