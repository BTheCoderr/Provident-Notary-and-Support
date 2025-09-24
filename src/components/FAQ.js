import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems({
      ...openItems,
      [index]: !openItems[index]
    });
  };

  const faqData = [
    {
      question: "What documents do I need to bring for notarization?",
      answer: "You'll need a valid government-issued photo ID (driver's license, passport, or state ID) and the document(s) to be notarized. The documents should be complete but unsigned when you arrive."
    },
    {
      question: "Do you provide mobile notary services?",
      answer: "Yes! We come to your location for maximum convenience. Whether you're at home, office, hospital, or anywhere else, we'll meet you where you are."
    },
    {
      question: "How much do your services cost?",
      answer: "Our standard notarization fee is $10 per signature. Mobile services include a travel fee based on location. Contact us for a detailed quote for your specific needs."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve the entire metro area and surrounding counties. We're licensed in this state and can travel up to 50 miles from our base location."
    },
    {
      question: "Can you notarize documents in other languages?",
      answer: "Yes, we can notarize documents in other languages. However, you'll need to provide a certified translator if the document is not in English."
    },
    {
      question: "How quickly can you provide services?",
      answer: "For standard appointments, we can typically schedule within 24-48 hours. Emergency services are available 24/7 for urgent situations."
    },
    {
      question: "What types of documents can you notarize?",
      answer: "We notarize a wide variety of documents including real estate documents, legal forms, affidavits, powers of attorney, wills, trusts, and business documents."
    },
    {
      question: "Do I need an appointment?",
      answer: "While appointments are preferred to ensure availability, we do accept walk-ins when possible. Emergency services are available without prior appointment."
    }
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Get quick answers to common questions about our notary services</p>
        </div>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${openItems[index] ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{openItems[index] ? '−' : '+'}</span>
              </button>
              {openItems[index] && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <p>Still have questions? <strong>Contact us directly</strong> for personalized assistance.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
