import React from 'react';
import { portfolioData } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-detail glass">
            <i className="fas fa-envelope detail-icon"></i>
            <div className="detail-text">
              <h3>Email</h3>
              <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>
            </div>
          </div>

          <div className="contact-detail glass">
            <i className="fas fa-phone detail-icon"></i>
            <div className="detail-text">
              <h3>Phone</h3>
              <a href={`tel:${portfolioData.contact.phone.replace(/\s/g, '')}`}>{portfolioData.contact.phone}</a>
            </div>
          </div>

          <div className="contact-detail glass">
            <i className="fab fa-whatsapp detail-icon"></i>
            <div className="detail-text">
              <h3>WhatsApp</h3>
              <a href={`https://api.whatsapp.com/send?phone=${portfolioData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </div>

          <div className="contact-detail glass">
            <i className="fas fa-map-marker-alt detail-icon"></i>
            <div className="detail-text">
              <h3>Location</h3>
              <p>{portfolioData.contact.location}</p>
              <p>{portfolioData.contact.location2}</p>
            </div>
          </div>
        </div>

        <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          width: 100%;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-detail {
          padding: 1.5rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: var(--transition);
          cursor: pointer;
        }

        .contact-detail:hover {
          transform: translateX(10px);
          border-color: var(--accent-color);
        }

        .detail-icon {
          font-size: 1.5rem;
          color: var(--accent-color);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(102, 252, 241, 0.1);
          border-radius: 50%;
        }

        .detail-text h3 {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .detail-text a, .detail-text p {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .detail-text a:hover {
          color: var(--accent-color);
        }

        .contact-form {
          padding: 3rem;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.1);
        }

        @media screen and (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .contact-form {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
