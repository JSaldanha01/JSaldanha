import React from 'react';
import { portfolioData } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-card glass">
            <div className="project-image-placeholder">
              <i className={`${project.icon} project-placeholder-icon`}></i>
              <div className="project-overlay">
                <a href={project.links.github} className="project-link" aria-label="GitHub Repository">
                  <i className="fab fa-github"></i>
                </a>
                <a href={project.links.demo} className="project-link" aria-label="Live Demo">
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>

            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .projects-section {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-color) 100%);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          border-radius: 20px;
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--accent-color);
          box-shadow: var(--card-shadow);
        }

        .project-image-placeholder {
          height: 200px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .project-placeholder-icon {
          font-size: 4rem;
          color: var(--accent-color);
          opacity: 0.3;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(11, 12, 16, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          opacity: 0;
          transition: var(--transition);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-link {
          font-size: 1.5rem;
          color: var(--accent-color);
          transition: var(--transition);
        }

        .project-link:hover {
          transform: scale(1.2);
          color: white;
        }

        .project-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex-grow: 1;
        }

        .project-title {
          font-size: 1.3rem;
          color: var(--accent-color);
          font-weight: 600;
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .project-tag {
          font-size: 0.75rem;
          background: rgba(102, 252, 241, 0.1);
          color: var(--accent-color);
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          border: 1px solid rgba(102, 252, 241, 0.2);
        }

        @media screen and (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-image-placeholder {
            height: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
