import React from 'react';
import { portfolioData } from '../data';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Academic Journey</h2>

      <div className="education-timeline">
        {portfolioData.education.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.period}</div>

            <div className="timeline-content glass">
              <h3 className="timeline-degree">{item.degree}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <p className="timeline-desc">{item.description}</p>

              {item.achievements && (
                <ul className="timeline-list">
                  {item.achievements.map((achievement, aIndex) => (
                    <li key={aIndex} className="timeline-list-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .education-section {
          background-color: var(--bg-color);
        }

        .education-timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .education-timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          background: var(--glass-border);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          width: 100%;
          display: flex;
          justify-content: flex-end;
          padding-left: 50%;
        }

        .timeline-item:nth-child(even) {
          justify-content: flex-start;
          padding-left: 0;
          padding-right: 50%;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 0;
          width: 16px;
          height: 16px;
          background: var(--accent-color);
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 10px var(--accent-color);
          z-index: 10;
        }

        .timeline-date {
          position: absolute;
          top: 0;
          left: calc(50% + 30px);
          font-weight: 600;
          color: var(--accent-color);
          font-size: 0.9rem;
        }

        .timeline-item:nth-child(even) .timeline-date {
          left: auto;
          right: calc(50% + 30px);
        }

        .timeline-content {
          padding: 2.5rem;
          border-radius: 20px;
          position: relative;
          width: 90%;
          transition: var(--transition);
        }

        .timeline-content:hover {
          transform: scale(1.02);
          border-color: var(--accent-color);
        }

        .timeline-degree {
          font-size: 1.4rem;
          color: var(--accent-color);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .timeline-institution {
          font-size: 1.1rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .timeline-desc {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .timeline-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .timeline-list-item {
          color: var(--text-secondary);
          font-size: 0.9rem;
          position: relative;
          padding-left: 1.5rem;
        }

        .timeline-list-item::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: var(--accent-color);
          font-weight: bold;
        }

        @media screen and (max-width: 768px) {
          .education-timeline::before {
            left: 10px;
          }

          .timeline-item {
            padding-left: 40px;
            padding-right: 0 !important;
            justify-content: flex-start !important;
          }

          .timeline-dot {
            left: 10px;
          }

          .timeline-date {
            position: relative;
            left: 0 !important;
            right: 0 !important;
            margin-bottom: 1rem;
            display: block;
          }

          .timeline-content {
            width: 100%;
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
