import React from 'react';
import { portfolioData } from '../data';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">{portfolioData.greeting}</p>
          <h1 className="name">{portfolioData.name}</h1>
          <h2 className="title">{portfolioData.title}</h2>
          <p className="description">{portfolioData.description}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>

          <div className="social-links">
            {portfolioData.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-icon"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-image-container">
          <div className="image-wrapper">
            <img
              src={profileImg}
              alt={portfolioData.name}
              className="hero-image"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 150px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        .greeting {
          font-size: 1.2rem;
          color: var(--accent-color);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .name {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .title {
          font-size: 1.8rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-icon {
          font-size: 1.5rem;
          color: var(--text-secondary);
          transition: var(--transition);
        }

        .social-icon:hover {
          color: var(--accent-color);
          transform: translateY(-5px);
        }

        .hero-image-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          box-shadow: 0 0 50px rgba(102, 252, 241, 0.4);
          animation: profile_animate 8s ease-in-out infinite 1s;
          position: relative;
          z-index: 2;
        }

        @keyframes profile_animate {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110%;
          height: 110%;
          background: var(--accent-color);
          filter: blur(80px);
          opacity: 0.15;
          z-index: 1;
        }

        @media screen and (max-width: 1024px) {
          .name { font-size: 2.8rem; }
          .title { font-size: 1.5rem; }
          .image-wrapper { width: 300px; height: 300px; }
        }

        @media screen and (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .hero-text {
            order: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }

          .hero-image-container {
            order: 1;
          }

          .image-wrapper {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
