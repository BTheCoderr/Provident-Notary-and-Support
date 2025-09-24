import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon to schedule your appointment.');
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h2>Ready to get organized?</h2>
          </div>
          <div className="banner-cta">
            <h3>Schedule a consultation.</h3>
            <p>During this complimentary 30-minute initial consultation, we will review your document requirements, identify your ideal outcomes, and discuss customized solutions to enhance efficiency and workflow.</p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Have a question? Contact us.</h2>
            <p>Email <strong>info@providentnotary.com</strong> or submit your question below.</p>
            
            <form className="contact-form" onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Law Firm / Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Write your question here..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Send
              </button>
            </form>
          </div>
          
          <div className="contact-image-section">
            <div className="gavel-image">
              <svg viewBox="0 0 300 400" className="gavel-icon">
                <rect x="20" y="20" width="260" height="360" fill="#f5f5f5" stroke="#A67D32" strokeWidth="2" rx="10"/>
                <rect x="120" y="60" width="60" height="200" fill="#8B4513" rx="5"/>
                <rect x="110" y="50" width="80" height="30" fill="#A67D32" rx="5"/>
                <rect x="130" y="40" width="40" height="20" fill="#B8941F" rx="3"/>
                <rect x="50" y="280" width="200" height="40" fill="#8B4513" rx="5"/>
                <rect x="60" y="290" width="180" height="20" fill="#A67D32" rx="3"/>
                <rect x="70" y="300" width="160" height="10" fill="#B8941F" rx="2"/>
                <circle cx="150" cy="320" r="15" fill="#8B4513"/>
                <circle cx="150" cy="320" r="10" fill="#A67D32"/>
                <circle cx="150" cy="320" r="5" fill="#B8941F"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
