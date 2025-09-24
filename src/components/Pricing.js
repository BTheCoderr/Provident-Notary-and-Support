import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      title: 'Standard Notarization',
      price: '$10',
      per: 'per signature',
      description: 'Perfect for single document notarization',
      features: [
        'Valid government-issued ID required',
        'Document review and verification',
        'Official notary seal and stamp',
        'Immediate completion',
        'Detailed record keeping'
      ],
      popular: false
    },
    {
      title: 'Mobile Service',
      price: '$25',
      per: 'travel fee',
      description: 'We come to your location for convenience',
      features: [
        'Same-day scheduling available',
        'Travel up to 25 miles included',
        'Flexible appointment times',
        'All standard services included',
        'Emergency services available'
      ],
      popular: true
    },
    {
      title: 'Business Package',
      price: '$50',
      per: 'per hour',
      description: 'Ideal for multiple documents or bulk services',
      features: [
        'Up to 10 signatures per hour',
        'Document preparation assistance',
        'Priority scheduling',
        'Detailed invoice and receipt',
        'Business account setup'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header">
          <h2>Transparent Pricing</h2>
          <p>Simple, upfront pricing with no hidden fees. Choose the service that fits your needs.</p>
        </div>
        
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <div className="card-header">
                <h3>{plan.title}</h3>
                <div className="price">
                  <span className="amount">{plan.price}</span>
                  <span className="per">{plan.per}</span>
                </div>
                <p className="description">{plan.description}</p>
              </div>
              
              <div className="card-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="card-cta">
                <a href="#contact" className="pricing-button">
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pricing-note">
          <p><strong>Note:</strong> All prices are per notarization. Additional travel fees may apply for locations over 25 miles. Emergency services available 24/7 with additional fees.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
