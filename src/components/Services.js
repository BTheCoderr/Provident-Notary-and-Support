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
              <div className="image-placeholder documents">
                <svg viewBox="0 0 300 200" className="documents-icon">
                  <rect x="20" y="20" width="260" height="160" fill="#f5f5f5" stroke="#A67D32" strokeWidth="2" rx="5"/>
                  <!-- Document stack -->
                  <rect x="60" y="40" width="80" height="100" fill="#ffffff" stroke="#A67D32" strokeWidth="2" rx="3"/>
                  <rect x="65" y="45" width="70" height="90" fill="#f8f9fa" stroke="#A67D32" strokeWidth="1" rx="2"/>
                  <!-- Second document -->
                  <rect x="75" y="35" width="80" height="100" fill="#ffffff" stroke="#A67D32" strokeWidth="2" rx="3"/>
                  <rect x="80" y="40" width="70" height="90" fill="#f8f9fa" stroke="#A67D32" strokeWidth="1" rx="2"/>
                  <!-- Third document -->
                  <rect x="90" y="30" width="80" height="100" fill="#ffffff" stroke="#A67D32" strokeWidth="2" rx="3"/>
                  <rect x="95" y="35" width="70" height="90" fill="#f8f9fa" stroke="#A67D32" strokeWidth="1" rx="2"/>
                  <!-- Notary seal -->
                  <circle cx="200" cy="100" r="25" fill="none" stroke="#A67D32" strokeWidth="3"/>
                  <text x="200" y="105" font-family="serif" font-size="12" fill="#A67D32" text-anchor="middle">SEAL</text>
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
              <div className="image-placeholder house">
                <svg viewBox="0 0 300 200" className="house-icon">
                  <rect x="20" y="20" width="260" height="160" fill="#f5f5f5" stroke="#A67D32" strokeWidth="2" rx="5"/>
                  <!-- House -->
                  <rect x="100" y="100" width="100" height="60" fill="#A67D32"/>
                  <polygon points="90,100 150,60 210,100" fill="#B8941F"/>
                  <!-- Door -->
                  <rect x="130" y="120" width="20" height="40" fill="#8B4513"/>
                  <circle cx="145" cy="140" r="2" fill="#A67D32"/>
                  <!-- Windows -->
                  <rect x="110" y="110" width="15" height="15" fill="#ffffff" stroke="#A67D32" strokeWidth="1"/>
                  <rect x="175" y="110" width="15" height="15" fill="#ffffff" stroke="#A67D32" strokeWidth="1"/>
                  <!-- Chimney -->
                  <rect x="160" y="70" width="15" height="30" fill="#8B4513"/>
                  <!-- Documents -->
                  <rect x="50" y="140" width="30" height="20" fill="#ffffff" stroke="#A67D32" strokeWidth="1" rx="2"/>
                  <rect x="220" y="140" width="30" height="20" fill="#ffffff" stroke="#A67D32" strokeWidth="1" rx="2"/>
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
              <div className="image-placeholder mobile">
                <svg viewBox="0 0 300 200" className="mobile-icon">
                  <rect x="20" y="20" width="260" height="160" fill="#f5f5f5" stroke="#A67D32" strokeWidth="2" rx="5"/>
                  <!-- Car -->
                  <rect x="80" y="120" width="140" height="40" fill="#A67D32" rx="20"/>
                  <rect x="90" y="100" width="120" height="30" fill="#B8941F" rx="15"/>
                  <!-- Wheels -->
                  <circle cx="110" cy="165" r="12" fill="#8B4513"/>
                  <circle cx="190" cy="165" r="12" fill="#8B4513"/>
                  <!-- Notary briefcase -->
                  <rect x="140" y="80" width="40" height="25" fill="#A67D32" rx="3"/>
                  <rect x="142" y="82" width="36" height="21" fill="#B8941F" rx="2"/>
                  <line x1="145" y1="85" x2="175" y2="85" stroke="#8B4513" strokeWidth="1"/>
                  <line x1="145" y1="90" x2="175" y2="90" stroke="#8B4513" strokeWidth="1"/>
                  <line x1="145" y1="95" x2="175" y2="95" stroke="#8B4513" strokeWidth="1"/>
                  <!-- Documents -->
                  <rect x="50" y="60" width="25" height="15" fill="#ffffff" stroke="#A67D32" strokeWidth="1" rx="2"/>
                  <rect x="225" y="60" width="25" height="15" fill="#ffffff" stroke="#A67D32" strokeWidth="1" rx="2"/>
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
