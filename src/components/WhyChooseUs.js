import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: '⚡',
      title: 'Fast Service',
      description: 'Get your documents notarized quickly. Most appointments completed in under 30 minutes.'
    },
    {
      icon: '🏠',
      title: 'Mobile Convenience',
      description: 'We come to you - home, office, hospital, or anywhere you need us. No travel required.'
    },
    {
      icon: '🛡️',
      title: 'Fully Licensed',
      description: 'State-licensed notary public with professional insurance and bonding for your protection.'
    },
    {
      icon: '💼',
      title: 'Business Focused',
      description: 'Specialized experience with real estate, legal, and business documents.'
    },
    {
      icon: '📞',
      title: '24/7 Emergency',
      description: 'Urgent notarization services available around the clock when you need them most.'
    },
    {
      icon: '✅',
      title: 'Guaranteed Accuracy',
      description: 'Every document carefully reviewed to ensure compliance and accuracy.'
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Provident Notary & Support?</h2>
          <p>Stop struggling with document authentication. Our professional notary services deliver complete, compliant documentation using proven methods.</p>
        </div>
        
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon">
                <span className="icon-symbol">{advantage.icon}</span>
              </div>
              <div className="advantage-content">
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <h3>Ready to experience professional notary services?</h3>
          <p>Join hundreds of satisfied clients who trust us with their important documents.</p>
          <a href="#contact" className="cta-button">Get Started Today</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
