import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/provident-logo-primary.png?v=2" alt="Provident Notary & Support Co." className="footer-logo-image" />
            </div>
            <p className="footer-tagline">
              Professional notary services you can trust for all your document authentication needs.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Document Notarization</li>
              <li>Real Estate Documents</li>
              <li>Business Documents</li>
              <li>Legal Support</li>
              <li>Mobile Notary</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>info@providentnotary.com</li>
              <li>(555) 123-4567</li>
              <li>Mobile Notary Services</li>
              <li>After-Hours Available</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Hours</h4>
            <ul>
              <li>Monday - Friday: 8AM - 6PM</li>
              <li>Saturday: 9AM - 4PM</li>
              <li>Sunday: By Appointment</li>
              <li>Emergency Services Available</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-disclaimers">
          <div className="disclaimer-section">
            <h4>Important Legal Disclaimers</h4>
            <div className="disclaimers">
              <div className="disclaimer">
                <h5>Notary Public Services</h5>
                <p>
                  Provident Notary & Support Co. provides notary public services as licensed by the state. 
                  We are not attorneys and cannot provide legal advice. Our role is limited to witnessing 
                  signatures and verifying identity for document authentication.
                </p>
              </div>
              
              <div className="disclaimer">
                <h5>Document Requirements</h5>
                <p>
                  All parties must be present with valid government-issued photo identification. 
                  Documents must be complete and ready for notarization. We reserve the right to 
                  refuse service if proper identification is not provided or if the document appears incomplete.
                </p>
              </div>
              
              <div className="disclaimer">
                <h5>Liability Limitations</h5>
                <p>
                  While we maintain professional standards and proper insurance coverage, our liability 
                  is limited to the notarization services provided. We recommend consulting with an 
                  attorney for legal advice regarding your documents.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Provident Notary & Support Co. All rights reserved.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#contact">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
