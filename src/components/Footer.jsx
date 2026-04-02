import React from 'react';
import { portfolioData } from '../data';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="copyright">&copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <div className="footer-socials">
          {portfolioData.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="footer-social-icon"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .footer-section {
          padding: 3rem 10%;
          background: var(--bg-color);
          border-top: 1px solid var(--glass-border);
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .copyright {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .footer-socials {
          display: flex;
          gap: 1.5rem;
        }

        .footer-social-icon {
          font-size: 1.2rem;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .footer-social-icon:hover {
          color: var(--accent-color);
          transform: translateY(-3px);
        }

        @media screen and (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
