import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-text-left">
              <p className="hero-problem">Overwhelmed by disorganized documents? Struggling with authentication requirements?</p>
              <h1 className="hero-value">We help individuals and businesses get <strong>organized</strong>, reduce <strong>stress</strong>, and improve <strong>efficiency</strong>.</h1>
              <div className="hero-service-box">
                <h2>Professional Notary Services</h2>
                <p>for individuals and businesses</p>
              </div>
              <p className="hero-benefit">Bringing order to your document processes</p>
            </div>
            <div className="hero-text-right">
              <div className="hero-testimonial">
                <p className="testimonial-label">Client Review</p>
                <p className="testimonial-text">"Professional, reliable, and extremely thorough. They made our real estate closing stress-free with their attention to detail and punctuality."</p>
              </div>
              <div className="hero-keywords">
                <p>Professional.</p>
                <p>Reliable.</p>
                <p>Efficient.</p>
              </div>
              <div className="hero-testimonial">
                <p className="testimonial-label">Client Review</p>
                <p className="testimonial-text">"The mobile notary service was exactly what we needed. Professional, efficient, and made the entire process seamless for our family documents."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
