import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-intro">
          <h2>Here's how we can help</h2>
        </div>
        
        <div className="services-grid">
          <div className="service-category">
            <div className="service-image">
              <div className="image-placeholder courtroom">
                <svg viewBox="0 0 300 200" className="courtroom-icon">
                  <rect x="20" y="20" width="260" height="160" fill="#f5f5f5" stroke="#A67D32" strokeWidth="2" rx="5"/>
                  <rect x="40" y="80" width="220" height="40" fill="#8B4513" rx="3"/>
                  <rect x="50" y="90" width="200" height="20" fill="#A67D32" rx="2"/>
                  <circle cx="80" cy="100" r="3" fill="#ffffff"/>
                  <circle cx="120" cy="100" r="3" fill="#ffffff"/>
                  <circle cx="160" cy="100" r="3" fill="#ffffff"/>
                  <circle cx="200" cy="100" r="3" fill="#ffffff"/>
                </svg>
              </div>
            </div>
            <h3>Document Authentication</h3>
            <div className="service-items">
              <div className="service-item">
                <h4>Personal Documents:</h4>
                <p>notarize wills, powers of attorney, affidavits, and other personal legal documents to ensure proper authentication and legal validity</p>
              </div>
              <div className="service-item">
                <h4>Business Documents:</h4>
                <p>authenticate contracts, agreements, corporate resolutions, and business formation documents for legal compliance</p>
              </div>
            </div>
          </div>
          
          <div className="service-category">
            <div className="service-image">
              <div className="image-placeholder pen">
                <svg viewBox="0 0 300 200" className="pen-icon">
                  <rect x="20" y="20" width="260" height="160" fill="#f5f5f5" stroke="#A67D32" strokeWidth="2" rx="5"/>
                  <path d="M150 40 L145 160 L155 160 Z" fill="#A67D32" stroke="#B8941F" strokeWidth="2"/>
                  <path d="M150 40 L148 50 L152 50 Z" fill="#B8941F"/>
                  <line x1="150" y1="50" x2="150" y2="60" stroke="#B8941F" strokeWidth="3"/>
                  <circle cx="150" cy="130" r="15" fill="none" stroke="#A67D32" strokeWidth="3"/>
                  <path d="M140 130 L145 135 L160 120" stroke="#A67D32" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
            <h3>Real Estate Services</h3>
            <div className="service-items">
              <div className="service-item">
                <h4>Property Transactions:</h4>
                <p>notarize deeds, mortgages, refinancing documents, and property transfers to facilitate smooth real estate transactions</p>
              </div>
              <div className="service-item">
                <h4>Loan Documentation:</h4>
                <p>authenticate mortgage applications, refinancing paperwork, and closing documents for financial institutions</p>
              </div>
            </div>
          </div>
          
          <div className="service-category">
            <div className="service-image">
              <div className="image-placeholder architectural">
                <svg viewBox="0 0 300 200" className="architectural-icon">
                  <rect x="20" y="20" width="260" height="160" fill="#f5f5f5" stroke="#A67D32" strokeWidth="2" rx="5"/>
                  <rect x="40" y="60" width="40" height="100" fill="#A67D32"/>
                  <rect x="100" y="40" width="40" height="120" fill="#B8941F"/>
                  <rect x="160" y="80" width="40" height="80" fill="#A67D32"/>
                  <rect x="220" y="100" width="40" height="60" fill="#B8941F"/>
                  <rect x="30" y="30" width="240" height="10" fill="#A67D32"/>
                  <circle cx="60" cy="35" r="5" fill="#ffffff"/>
                  <circle cx="120" cy="35" r="5" fill="#ffffff"/>
                  <circle cx="180" cy="35" r="5" fill="#ffffff"/>
                  <circle cx="240" cy="35" r="5" fill="#ffffff"/>
                </svg>
              </div>
            </div>
            <h3>Mobile Notary Services</h3>
            <div className="service-items">
              <div className="service-item">
                <h4>Convenience Services:</h4>
                <p>provide mobile notary services that come to your location for maximum convenience and flexibility</p>
              </div>
              <div className="service-item">
                <h4>Flexible Scheduling:</h4>
                <p>offer evening and weekend appointments to fit your schedule and meet urgent notarization needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
