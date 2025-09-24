import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="about-placeholder">
              <svg viewBox="0 0 300 200" className="lady-justice-icon">
                <rect x="20" y="20" width="260" height="160" fill="#f8f7f2" stroke="#D4AF37" strokeWidth="3" rx="5"/>
                <circle cx="150" cy="80" r="30" fill="none" stroke="#D4AF37" strokeWidth="3"/>
                <path d="M140 80 L145 85 L155 75" stroke="#D4AF37" strokeWidth="3" fill="none"/>
                <rect x="130" y="120" width="40" height="40" fill="#D4AF37" rx="5"/>
                <path d="M120 160 L150 140 L180 160" fill="#D4AF37"/>
                <text x="150" y="190" fontSize="12" fill="#1a3a4a" fontFamily="serif" textAnchor="middle">JUSTICE</text>
              </svg>
            </div>
          </div>
          <div className="about-text">
            <p className="about-description">
              We declutter physical and digital workspaces, like offices and files, to optimize our clients' workflows. 
              By streamlining processes, we help reduce stress, improve client satisfaction, and ultimately contribute 
              to a more profitable practice.
            </p>
            <p className="about-clarification">
              Our esteemed team of notary professionals is committed to delivering unparalleled excellence, 
              ensuring your peace of mind in every document.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Professional Organization</h4>
                  <p>We help organize your documents and streamline your notarization processes</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Mobile Convenience</h4>
                  <p>We come to your location for maximum convenience and flexibility</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">
                  <h4>Unparalleled Excellence</h4>
                  <p>Maintaining the highest standards of accuracy and professional service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
