import React from 'react';
import { portfolioData } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills & Technologies</h2>

      <div className="skills-grid">
        {portfolioData.skills.map((category, index) => (
          <div key={index} className="skill-category glass">
            <h3 className="category-title">
              <i className={category.icon}></i> {category.category}
            </h3>
            <div className="skill-items">
              {category.items.map((skill, sIndex) => (
                <div key={sIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.progress}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-color);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          padding: 2.5rem;
          border-radius: 20px;
          transition: var(--transition);
        }

        .skill-category:hover {
          transform: translateY(-5px);
          border-color: var(--accent-color);
          box-shadow: var(--card-shadow);
        }

        .category-title {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: var(--accent-color);
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .skill-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          font-weight: 500;
          color: var(--text-primary);
        }

        .skill-bar-container {
          width: 100%;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-hover), var(--accent-color));
          border-radius: 4px;
          transition: width 1.5s cubic-bezier(0.17, 0.55, 0.55, 1);
        }

        @media screen and (max-width: 768px) {
          .skill-category {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
