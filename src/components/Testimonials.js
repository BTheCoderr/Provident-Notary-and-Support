import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <div className="testimonial-left">
          <div className="client-review">
            <p className="review-label">Client Review</p>
            <p className="review-text">"Autumn maintains <strong>high levels of organization, responsiveness, and competency</strong> when completing her duties and projects, creating a strong sense of <strong>confidence</strong> in her work."</p>
          </div>
        </div>
        
        <div className="testimonial-right">
          <div className="client-review">
            <p className="review-label">Client Review</p>
            <p className="review-text">"Autumn's <strong>excellent management</strong> of all incoming litigation has allowed [us] to quickly assign an attorney to each case, positioning the Department to defend its cases in a <strong>thorough and timely manner</strong>."</p>
          </div>
        </div>
      </div>
      
      <div className="certificate-section">
        <div className="certificate-content">
          <div className="certificate-badge">
            <p className="certificate-title">Certificate of Appreciation</p>
            <p className="certificate-subtitle">issued by a client</p>
            <p className="certificate-text">Awarded to <strong>Provident Notary & Support Co.</strong>, Founder & Senior Notary</p>
            <p className="certificate-recognition">Recognizing her <strong>sustained</strong> and <strong>excellent support</strong> given on several special projects that have <strong>improved</strong> [the team]'s <strong>efficiency</strong> and <strong>enhanced</strong> the Department's ability to <strong>successfully defend</strong> itself in court.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
