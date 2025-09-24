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
                  <rect x="60" y="40" width="80" height="100" fill="#ffffff" stroke="#A67D32" strokeWidth="2"/>
                  <rect x="65" y="45" width="70" height="90" fill="#ffffff" stroke="#A67D32" strokeWidth="1"/>
                  <rect x="70" y="50" width="60" height="80" fill="#ffffff" stroke="#A67D32" strokeWidth="1"/>
                  <!-- Text lines -->
                  <line x1="80" y1="65" x2="120" y2="65" stroke="#A67D32" strokeWidth="1"/>
                  <line x1="80" y1="75" x2="115" y2="75" stroke="#A67D32" strokeWidth="1"/>
                  <line x1="80" y1="85" x2="125" y2="85" stroke="#A67D32" strokeWidth="1"/>
                  <line x1="80" y1="95" x2="110" y2="95" stroke="#A67D32" strokeWidth="1"/>
                  <!-- Notary stamp -->
                  <circle cx="180" cy="80" r="25" fill="none" stroke="#A67D32" strokeWidth="3"/>
                  <text x="180" y="85" textAnchor="middle" fontSize="8" fill="#A67D32" fontFamily="serif">NOTARY</text>
                  <text x="180" y="95" textAnchor="middle" fontSize="6" fill="#A67D32" fontFamily="serif">PUBLIC</text>
                  <!-- Pen -->
                  <rect x="200" y="60" width="8" height="40" fill="#A67D32" rx="2"/>
                  <rect x="198" y="58" width="12" height="6" fill="#B8941F" rx="1"/>
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
                  <rect x="80" y="100" width="80" height="60" fill="#A67D32"/>
                  <polygon points="120,70 160,100 80,100" fill="#B8941F"/>
                  <!-- Door -->
                  <rect x="110" y="120" width="20" height="40" fill="#8B4513"/>
                  <circle cx="125" cy="140" r="2" fill="#A67D32"/>
                  <!-- Windows -->
                  <rect x="90" y="110" width="15" height="15" fill="#ffffff" stroke="#A67D32" strokeWidth="1"/>
                  <rect x="135" y="110" width="15" height="15" fill="#ffffff" stroke="#A67D32" strokeWidth="1"/>
                  <!-- Deed document -->
                  <rect x="180" y="80" width="60" height="80" fill="#ffffff" stroke="#A67D32" strokeWidth="2"/>
                  <line x1="190" y1="95" x2="230" y2="95" stroke="#A67D32" strokeWidth="1"/>
                  <line x1="190" y1="105" x2="225" y2="105" stroke="#A67D32" strokeWidth="1"/>
                  <line x1="190" y1="115" x2="235" y2="115" stroke="#A67D32" strokeWidth="1"/>
                  <line x1="190" y1="125" x2="220" y2="125" stroke="#A67D32" strokeWidth="1"/>
                  <!-- Stamp -->
                  <circle cx="210" cy="140" r="8" fill="none" stroke="#A67D32" strokeWidth="2"/>
                  <text x="210" y="144" textAnchor="middle" fontSize="6" fill="#A67D32" fontFamily="serif">SEAL</text>
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
                  <rect x="60" y="120" width="80" height="40" fill="#A67D32" rx="5"/>
                  <rect x="70" y="110" width="60" height="20" fill="#B8941F" rx="3"/>
                  <!-- Wheels -->
                  <circle cx="80" cy="165" r="8" fill="#8B4513"/>
                  <circle cx="80" cy="165" r="5" fill="#A67D32"/>
                  <circle cx="120" cy="165" r="8" fill="#8B4513"/>
                  <circle cx="120" cy="165" r="5" fill="#A67D32"/>
                  <!-- Windshield -->
                  <rect x="75" y="115" width="50" height="15" fill="#ffffff" stroke="#A67D32" strokeWidth="1"/>
                  <!-- Mobile phone -->
                  <rect x="180" y="80" width="25" height="40" fill="#A67D32" rx="3"/>
                  <rect x="182" y="82" width="21" height="36" fill="#ffffff" rx="2"/>
                  <!-- Phone screen -->
                  <rect x="184" y="84" width="17" height="32" fill="#f0f0f0"/>
                  <circle cx="192" cy="120" r="3" fill="#A67D32"/>
                  <!-- Location pin -->
                  <path d="M220 100 L220 140 L210 140 L210 100 Z" fill="#A67D32"/>
                  <circle cx="215" cy="95" r="8" fill="#A67D32"/>
                  <circle cx="215" cy="95" r="4" fill="#ffffff"/>
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
