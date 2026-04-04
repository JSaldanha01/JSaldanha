import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const logoInitial = portfolioData.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="app-container">
      {/* --- NAVBAR --- */}
      <nav className={`navbar glass ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo">{logoInitial}</a>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a href={link.href} className="nav-link" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION (Organized UI) --- */}
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

              {/* Organized Social Links Row */}
              <div className="social-links-row">
                {portfolioData.socials.map((social, index) => (
                  <a key={index} href={social.url} target="_blank" rel="noreferrer" className="social-icon-item" title={social.label}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="hero-image-container">
              <div className="image-wrapper">
                <img src={profileImg} alt={portfolioData.name} className="hero-image" />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS SECTION --- */}
        <section id="skills">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {portfolioData.skills.map((skill, index) => (
              <div key={index} className="skill-card glass">
                <div className="skill-info">
                  <span className="skill-name">
                    <i className={skill.icon} style={{marginRight: '10px', color: 'var(--accent-color)'}}></i>
                    {skill.name}
                  </span>
                </div>
                <div className="skill-bar-container">
                  <div className="skill-bar-fill" style={{ width: `${skill.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-card glass">
                <i className={project.icon} style={{fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '1rem', display: 'block'}}></i>
                <h3>{project.title}</h3>
                <p style={{margin: '1rem 0', color: 'var(--text-secondary)'}}>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EDUCATION SECTION --- */}
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
                        <li key={aIndex} className="timeline-list-item">{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              {Object.entries({
                email: { icon: 'fas fa-envelope', label: 'Email', link: `mailto:${portfolioData.contact.email}`, val: portfolioData.contact.email },
                phone: { icon: 'fas fa-phone', label: 'Phone', link: `tel:${portfolioData.contact.phone.replace(/\s/g, '')}`, val: portfolioData.contact.phone },
                whatsapp: { icon: 'fab fa-whatsapp', label: 'WhatsApp', link: `https://api.whatsapp.com/send?phone=${portfolioData.contact.whatsapp}`, val: 'Chat on WhatsApp' }
              }).map(([key, item]) => (
                <div key={key} className="contact-detail glass">
                  <i className={`${item.icon} detail-icon`}></i>
                  <div className="detail-text">
                    <h3>{item.label}</h3>
                    <a href={item.link}>{item.val}</a>
                  </div>
                </div>
              ))}
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
              <input type="text" placeholder="Your Name" required className="form-input" />
              <input type="email" placeholder="Your Email" required className="form-input" />
              <textarea rows="5" placeholder="Your Message" required className="form-input"></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer-section">
        <div className="footer-container">
          <p className="copyright">&copy; {new Date().getFullYear()} {portfolioData.name}.</p>
          <div className="footer-socials">
            {portfolioData.socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer" className="footer-social-icon">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* --- STYLES --- */}
      <style>{`
        .navbar { position: fixed; top: 0; left: 0; width: 100%; padding: 1.5rem 10%; z-index: 1000; transition: var(--transition); display: flex; justify-content: center; }
        .navbar.scrolled { background: rgba(11, 12, 16, 0.95); padding: 1rem 10%; border-bottom: 1px solid var(--glass-border); }
        .nav-container { width: 100%; display: flex; justify-content: space-between; align-items: center; }
        .nav-logo { font-size: 1.5rem; font-weight: 700; color: var(--accent-color); text-decoration: none; letter-spacing: 2px; }
        .nav-menu { display: flex; list-style: none; gap: 2rem; }
        .nav-link { text-decoration: none; color: var(--text-primary); font-weight: 500; transition: var(--transition); }
        
        .hero-section { min-height: 100vh; display: flex; align-items: center; padding-top: 100px; }
        .hero-content { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; width: 100%; }
        .hero-text { display: flex; flex-direction: column; gap: 0.5rem; }
        .name { font-size: 3.5rem; font-weight: 700; color: var(--text-primary); }
        .title { font-size: 1.8rem; color: var(--accent-color); margin-bottom: 1rem; }
        .description { color: var(--text-secondary); max-width: 600px; margin-bottom: 2rem; }
        
        .hero-buttons { display: flex; gap: 1.5rem; margin-bottom: 1rem; }
        .social-links-row { display: flex; gap: 1.5rem; margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid rgba(102, 252, 241, 0.1); width: fit-content; }
        .social-icon-item { font-size: 1.6rem; color: var(--text-secondary); transition: var(--transition); }
        .social-icon-item:hover { color: var(--accent-color); transform: translateY(-5px); }

        .hero-image { 
          width: 100%; height: 100%; object-fit: cover; 
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          box-shadow: 0 0 50px rgba(102, 252, 241, 0.3);
          animation: blob 8s ease-in-out infinite;
        }
        @keyframes blob {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }

        .skills-grid, .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
        .skill-card, .project-card, .timeline-content, .contact-detail, .contact-form { padding: 2rem; border-radius: 20px; transition: var(--transition); }
        .skill-bar-container { width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; margin-top: 10px; overflow: hidden; }
        .skill-bar-fill { height: 100%; background: var(--accent-color); transition: width 1s ease; }
        .tag { font-size: 0.8rem; color: var(--accent-color); border: 1px solid var(--accent-color); padding: 2px 10px; border-radius: 4px; margin-right: 5px; }

        .education-timeline::before { content: ''; position: absolute; left: 50%; width: 2px; height: 100%; background: var(--glass-border); transform: translateX(-50%); }
        .timeline-item { position: relative; margin-bottom: 4rem; width: 100%; display: flex; justify-content: flex-end; padding-left: 50%; }
        .timeline-item:nth-child(even) { justify-content: flex-start; padding-left: 0; padding-right: 50%; }
        .timeline-dot { position: absolute; left: 50%; width: 16px; height: 16px; background: var(--accent-color); border-radius: 50%; transform: translateX(-50%); z-index: 10; }
        .timeline-date { position: absolute; left: calc(50% + 30px); color: var(--accent-color); font-weight: 600; }
        .timeline-item:nth-child(even) .timeline-date { left: auto; right: calc(50% + 30px); }

        .contact-container { display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; }
        .contact-detail { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1rem; }
        .detail-icon { font-size: 1.5rem; color: var(--accent-color); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; background: rgba(102, 252, 241, 0.1); border-radius: 50%; }
        .form-input { width: 100%; padding: 1rem; background: rgba(255,255,255,0.05); border: 1px solid var(--glass-border); border-radius: 8px; color: white; margin-bottom: 1rem; }

        .footer-section { padding: 3rem 10%; background: var(--bg-color); border-top: 1px solid var(--glass-border); margin-top: 5rem; }
        .footer-container { display: flex; justify-content: space-between; align-items: center; }
        .footer-socials { display: flex; gap: 1.5rem; }
        .footer-social-icon { color: var(--text-secondary); font-size: 1.2rem; transition: var(--transition); }
        .footer-social-icon:hover { color: var(--accent-color); transform: translateY(-3px); }

        .hamburger { display: none; cursor: pointer; }
        .bar { display: block; width: 25px; height: 3px; margin: 5px; background: var(--text-primary); transition: 0.3s; }

        @media (max-width: 768px) {
          .hamburger { display: block; }
          .nav-menu { display: none; }
          .hero-content, .contact-container { grid-template-columns: 1fr; text-align: center; }
          .hero-text { align-items: center; order: 2; }
          .hero-image-container { order: 1; margin-bottom: 2rem; }
          .hero-buttons, .social-links-row, .footer-container { justify-content: center; }
          .education-timeline::before { left: 10px; }
          .timeline-item { padding-left: 40px; padding-right: 0 !important; justify-content: flex-start !important; }
          .timeline-dot { left: 10px; }
          .timeline-date { position: relative; left: 0 !important; right: 0 !important; margin-bottom: 1rem; display: block; }
        }
      `}</style>
    </div>
  );
};

export default Home;