import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Call, email, or fill out our contact form. We\'ll respond within 2 hours during business hours.',
      icon: '📞'
    },
    {
      number: '02',
      title: 'Schedule Appointment',
      description: 'Choose your preferred time and location. We come to you or meet at our office.',
      icon: '📅'
    },
    {
      number: '03',
      title: 'Prepare Documents',
      description: 'Bring valid ID and unsigned documents. We\'ll review everything before signing.',
      icon: '📋'
    },
    {
      number: '04',
      title: 'Notarization',
      description: 'We witness your signature and apply our official notary seal and stamp.',
      icon: '✍️'
    },
    {
      number: '05',
      title: 'Completion',
      description: 'Receive your notarized documents immediately. We keep detailed records for your protection.',
      icon: '✅'
    }
  ];

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2>How Our Notary Process Works</h2>
          <p>Simple, professional, and stress-free document notarization in 5 easy steps</p>
        </div>
        
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">
                <span className="number">{step.number}</span>
              </div>
              <div className="step-content">
                <div className="step-icon">
                  <span className="icon-symbol">{step.icon}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="process-cta">
          <h3>Ready to get started?</h3>
          <p>Most appointments are completed in under 30 minutes</p>
          <a href="#contact" className="cta-button">Schedule Your Appointment</a>
        </div>
      </div>
    </section>
  );
};

export default Process;
