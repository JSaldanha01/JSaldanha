import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const carouselRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const title = portfolioData.title;
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedTitle === title) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayedTitle === '') {
        setIsDeleting(false);
      } else {
        setDisplayedTitle(title.substring(0, displayedTitle.length + (isDeleting ? -1 : 1)));
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayedTitle, isDeleting]);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 365, behavior: 'smooth' });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Sync dots with carousel scroll
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => setActiveCard(Math.round(el.scrollLeft / 365));
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll + Section + Reveal observers
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const sectionObs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    document.querySelectorAll('section[id]').forEach(s => sectionObs.observe(s));

    const revealObs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObs.disconnect();
      revealObs.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Group skills by category
  const skillGroups = portfolioData.skills.reduce((acc, skill) => {
    const cat = skill.category || 'Other';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  const logo = portfolioData.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div>
      {/* ── NAVBAR ── */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo">{logo}</a>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map(link => (
              <li key={link.name} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
      </nav>

      <main>
        {/* ── HERO ── */}
        <section id="home">
          <div className="hero-bento">

            {/* Main card */}
            <div className="hero-main-card reveal">
              <p className="hero-greeting">{portfolioData.greeting}</p>
              <h1 className="hero-name">{portfolioData.name}</h1>
              <h2 className="hero-title">
                {displayedTitle}<span className="cursor">|</span>
              </h2>
              <p className="hero-desc">{portfolioData.description}</p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  <i className="fas fa-rocket"></i> View My Work
                </a>
                <a href="/cv.pdf" download className="btn btn-secondary">
                  <i className="fas fa-download"></i> Download CV
                </a>
              </div>
            </div>

            {/* Photo card */}
            <div className="hero-photo-card reveal reveal-d1">
              <img src={profileImg} alt={portfolioData.name} className="hero-photo" />
            </div>

            {/* Social card */}
            <div className="hero-social-card reveal reveal-d2">
              <p className="social-label">Find me on</p>
              <div className="social-icons-row">
                {portfolioData.socials.map((s, i) => (
                  <a key={i} href={s.url} target="_blank" rel="noreferrer" className="social-icon" title={s.label}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="hero-stats-card reveal reveal-d3">
              <div className="stat-item">
                <span className="stat-number">3.44</span>
                <span className="stat-label">GPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Enterprise Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Languages</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">B2</span>
                <span className="stat-label">IELTS 6.5</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about">
          <p className="section-label reveal">Who I am</p>
          <h2 className="section-heading reveal reveal-d1">About <span>Me</span></h2>

          <div className="about-bento">
            <div className="about-text-card reveal reveal-d2">
              {portfolioData.about.text.map((para, i) => (
                <p key={i} className="about-paragraph">{para}</p>
              ))}
            </div>
            <div className="about-stats-col">
              {[
                { num: 'ASEAN', label: 'Undergraduate Scholar' },
                { num: '3.56', label: 'GPA / 4.00' },
                { num: 'B2', label: 'English · IELTS 6.5' },
                { num: '🇹🇱', label: 'From Timor-Leste' },
              ].map((s, i) => (
                <div key={i} className={`about-stat-card reveal reveal-d${i + 2}`}>
                  <span className="stat-number">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          {portfolioData.languages && (
            <div style={{ marginTop: '2.5rem' }}>
              <p className="section-label reveal" style={{ marginBottom: '1.25rem' }}>Languages</p>
              <div className="languages-grid">
                {portfolioData.languages.map((lang, i) => (
                  <div key={i} className={`language-card reveal reveal-d${i + 1}`}>
                    <img
                      src={`https://flagcdn.com/${lang.flagCode}.svg`}
                      width="36"
                      alt={`${lang.name} flag`}
                      className="language-flag"
                      style={{ borderRadius: '4px', objectFit: 'cover' }}
                    />
                    <span className="language-name">{lang.name}</span>
                    <span className="language-level">{lang.level}</span>
                    <span className="language-detail">{lang.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ── SKILLS ── */}
        <section id="skills">
          <p className="section-label reveal">What I work with</p>
          <h2 className="section-heading reveal reveal-d1">Skills & <span>Technologies</span></h2>
          <div className="skills-categories">
            {Object.entries(skillGroups).map(([cat, skills], gi) => (
              <div key={cat} className={`skill-group reveal reveal-d${Math.min(gi + 1, 4)}`}>
                <div className="skill-group-header">
                  <span className={`skill-group-label ${cat}`}>{cat}</span>
                  <div className={`skill-group-line ${cat}`}></div>
                </div>
                <div className="skill-badge-cloud">
                  {skills.map((s, i) => (
                    <span key={i} className={`skill-badge ${cat}`}>
                      <i className={s.icon}></i>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects">
          <p className="section-label reveal">What I&apos;ve built</p>
          <h2 className="section-heading reveal reveal-d1">Featured <span>Projects</span></h2>

          <div className="projects-carousel" ref={carouselRef}>
            {portfolioData.projects.map((project, index) => (
              <div key={index} className={`project-card reveal ${index === 0 ? 'featured' : ''}`}>
                {index === 0 && (
                  <span className="featured-badge">
                    <i className="fas fa-star"></i> Capstone Project
                  </span>
                )}
                <i className={`${project.icon} project-icon`}></i>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links-row">
                  {project.links?.demo && project.links.demo !== '#' && (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link-btn">
                      Live Demo <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {portfolioData.projects.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === activeCard ? 'active' : ''}`}
                onClick={() => {
                  carouselRef.current?.scrollTo({ left: i * 365, behavior: 'smooth' });
                  setActiveCard(i);
                }}
                aria-label={`Project ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ── EDUCATION & EXPERIENCE ── */}
        <section id="education">
          <p className="section-label reveal">My journey</p>
          <h2 className="section-heading reveal reveal-d1">Education & <span>Experience</span></h2>

          <div className="timeline-grid">
            {/* Education column */}
            <div>
              <p className="timeline-col-title reveal">
                <i className="fas fa-graduation-cap"></i> Education
              </p>
              {portfolioData.education.map((item, i) => (
                <div key={i} className={`timeline-entry reveal reveal-d${i + 1}`}>
                  <p className="timeline-period">{item.period}</p>
                  <h3 className="timeline-title">{item.degree}</h3>
                  <p className="timeline-sub">{item.institution}</p>
                  <p className="timeline-desc">{item.description}</p>
                  {item.achievements?.map((a, j) => (
                    <span key={j} className="timeline-badge">
                      <i className="fas fa-award"></i> {a}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            {/* Experience column */}
            <div>
              <p className="timeline-col-title reveal">
                <i className="fas fa-briefcase"></i> Experience
              </p>
              {portfolioData.experience.map((exp, i) => (
                <div key={i} className={`timeline-entry reveal reveal-d${i + 1}`}>
                  <p className="timeline-period">{exp.period}</p>
                  <h3 className="timeline-title">{exp.position}</h3>
                  <p className="timeline-sub">{exp.organization}</p>
                  <p className="timeline-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact">
          <p className="section-label reveal">Let&apos;s connect</p>
          <h2 className="section-heading reveal reveal-d1">Get In <span>Touch</span></h2>

          <div className="contact-bento">
            <div className="contact-info-stack">
              {[
                { icon: 'fas fa-envelope', label: 'Email', val: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
                { icon: 'fas fa-phone', label: 'Phone', val: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone.replace(/\s/g, '')}` },
                { icon: 'fab fa-whatsapp', label: 'WhatsApp', val: 'Chat on WhatsApp', href: `https://api.whatsapp.com/send?phone=${portfolioData.contact.whatsapp}` },
                { icon: 'fas fa-map-marker-alt', label: 'Location', val: `${portfolioData.contact.location} · ${portfolioData.contact.location2}`, href: null },
              ].map((item, i) => (
                <div key={i} className={`contact-detail-card reveal reveal-d${i + 1}`}>
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <p className="contact-detail-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="contact-detail-value">{item.val}</a>
                    ) : (
                      <span className="contact-detail-value">{item.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form
              className="contact-form-card reveal reveal-d2"
              action={`mailto:${portfolioData.contact.email}`}
              method="POST"
              encType="text/plain"
            >
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required className="form-input" />
              </div>
              <div className="form-group">
                <textarea name="message" rows="5" placeholder="Your Message" required className="form-input"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer-section">
        <div className="footer-container">
          <p className="footer-left">
            © {new Date().getFullYear()} <span>{portfolioData.name}</span>. Built with React & ❤️
          </p>
          <div className="footer-socials">
            {portfolioData.socials.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="footer-social-icon" title={s.label}>
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;