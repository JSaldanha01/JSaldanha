import React from 'react';
import { portfolioData } from '../data';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-content">
        <div className="about-text">
          {portfolioData.about.text.map((paragraph, index) => (
            <p key={index} className="about-p">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about-stats">
          {portfolioData.about.stats.map((stat, index) => (
            <div key={index} className="stat-card glass">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, var(--bg-color) 0%, var(--bg-secondary) 100%);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-p {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          transition: var(--transition);
          text-align: center;
        }

        .stat-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-color);
          box-shadow: var(--card-shadow);
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        @media screen and (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-stats {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media screen and (max-width: 768px) {
          .about-stats {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }

          .stat-card {
            padding: 1.5rem;
          }

          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
