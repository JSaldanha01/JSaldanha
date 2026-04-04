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
    { name: 'Experience', href: '#experience' },
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
        {/* --- HERO SECTION --- */}
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

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="about-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content glass" style={{ padding: '2rem', borderRadius: '20px' }}>
            <div className="about-text">
              {portfolioData.about.text.map((paragraph, index) => (
                <p key={index} className="about-paragraph" style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
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
                    <i className={skill.icon} style={{ marginRight: '10px', color: 'var(--accent-color)' }}></i>
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
                <i className={project.icon} style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '1rem', display: 'block' }}></i>
                <h3>{project.title}</h3>
                <p style={{ margin: '1rem 0', color: 'var(--text-secondary)' }}>{project.description}</p>
                <div className="project-tags" style={{ marginBottom: '1.5rem' }}>
                  {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                {project.links && (
                  <div className="project-links" style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.links.demo} className="project-link" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>Live Demo <i className="fas fa-external-link-alt"></i></a>
                    <a href={project.links.github} className="project-link" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600' }}>GitHub <i className="fab fa-github"></i></a>
                  </div>
                )}
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
                    <ul className="timeline-list" style={{ listStyle: 'none', padding: 0 }}>
                      {item.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="timeline-list-item" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>✔</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section id="experience" className="experience-section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {portfolioData.experience.map((exp, index) => (exp.position && (
              <div key={index} className="experience-card glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                <div className="exp-range" style={{ color: 'var(--accent-color)', fontWeight: '600', marginBottom: '0.5rem' }}>{exp.period}</div>
                <h3 className="exp-position" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{exp.position}</h3>
                <h4 className="exp-org" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{exp.organization}</h4>
                <p className="exp-desc" style={{ color: 'var(--text-secondary)' }}>{exp.description}</p>
              </div>
            )))}
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
              <a key={index} href={social.url} target="_blank" rel="noreferrer" className="footer-social-icon" title={social.label}>
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;