import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <div className="testimonial-left">
          <div className="client-review">
            <p className="review-label">Google Review - Bry Lemire</p>
            <p className="review-text">"Able to meet me, late in the evening when everyone else was closed. <strong>Efficient and professional</strong>. Definitely recommend using this service."</p>
          </div>
          
          <div className="client-review">
            <p className="review-label">Google Review - Jessica Nashed</p>
            <p className="review-text">"Robin was wonderful. <strong>Convenient, knowledgeable, and cognitive of my time</strong>."</p>
          </div>
        </div>
        
        <div className="testimonial-right">
          <div className="client-review">
            <p className="review-label">Google Review - Enoelia Amaro</p>
            <p className="review-text">"Robin provided us with <strong>great customer service</strong>, she was so <strong>friendly and polite</strong>. Helped with questions we had, was <strong>super professional</strong>. I recommend her services to everyone."</p>
          </div>
          
          <div className="client-review">
            <p className="review-label">Google Review - Sandro Alves</p>
            <p className="review-text">"<strong>Very professional and courteous</strong>."</p>
          </div>
          
          <div className="client-review">
            <p className="review-label">Google Review - Leef int</p>
            <p className="review-text">"Thank you so much for the <strong>prompt service</strong>. Your <strong>professionalism speaks volumes</strong> of your business."</p>
          </div>
        </div>
      </div>
      
      <div className="certificate-section">
        <div className="certificate-content">
          <div className="certificate-badge">
            <p className="certificate-title">5.0 ⭐ Google Rating</p>
            <p className="certificate-subtitle">Based on 7 customer reviews</p>
            <p className="certificate-text">Awarded to <strong>Provident Notary & Support Co.</strong></p>
            <p className="certificate-recognition">Recognizing <strong>excellent customer service</strong>, <strong>professionalism</strong>, and <strong>convenient mobile notary services</strong> that exceed client expectations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
