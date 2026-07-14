import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../data';
import profileImg from '../assets/profile.jpg';
import LanguageSwitcher from './LanguageSwitcher';
import emailjs from '@emailjs/browser';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedCertImage, setSelectedCertImage] = useState(null);
  const [selectedEmbedUrl, setSelectedEmbedUrl] = useState(null);
  const [selectedOtherCategory, setSelectedOtherCategory] = useState('All');

  const carouselRef = useRef(null);
  const formRef = useRef(null);

  const { t, i18n } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      }, (error) => {
        setSubmitStatus('error');
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

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
                  {t(`nav.${link.name.toLowerCase()}`)}
                </a>
              </li>
            ))}
          </ul>

          <LanguageSwitcher />
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
              <p className="hero-greeting">{t('hero.greeting')}</p>
              <h1 className="hero-name">{portfolioData.name}</h1>
              <h2 className="hero-title">
                {displayedTitle}<span className="cursor">|</span>
              </h2>
              <p className="hero-desc">{portfolioData.description}</p>
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">
                  <i className="fas fa-rocket"></i> {t('hero.viewWork')}
                </a>
                <a href="/cv.pdf" download className="btn btn-secondary">
                  <i className="fas fa-download"></i> {t('hero.downloadCv')}
                </a>
              </div>
            </div>

            {/* Photo card */}
            <div className="hero-photo-card reveal reveal-d1">
              <img src={profileImg} alt={portfolioData.name} className="hero-photo" />
            </div>

            {/* Social card */}
            <div className="hero-social-card reveal reveal-d2">
              <p className="social-label">{t('hero.findMe')}</p>
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
                <span className="stat-number">3.56</span>
                <span className="stat-label">{t('hero.stats.gpa')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">{t('hero.stats.projects')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">{t('hero.stats.languages')}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">B2</span>
                <span className="stat-label">{t('hero.stats.ielts')}</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about">
          <p className="section-label reveal">{t('about.sectionLabel')}</p>
          <h2 className="section-heading reveal reveal-d1">{t('about.sectionTitle')} <span>{t('about.sectionTitleSpan')}</span></h2>

          <div className="about-bento">
            <div className="about-text-card reveal reveal-d2">
              {t('about.text', { returnObjects: true }).map((para, i) => (
                <p key={i} className="about-paragraph">{para}</p>
              ))}
            </div>
            <div className="about-stats-col">
              {[
                { num: 'ASEAN', label: t('about.stats.scholar') },
                { num: '3.56', label: t('about.stats.gpa') },
                { num: 'B2', label: t('about.stats.english') },
                { num: '🇹🇱', label: t('about.stats.from') },
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
              <p className="section-label reveal" style={{ marginBottom: '1.25rem' }}>{t('about.languagesTitle')}</p>
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
          <p className="section-label reveal">{t('skills.sectionLabel')}</p>
          <h2 className="section-heading reveal reveal-d1">{t('skills.sectionTitle')} <span>{t('skills.sectionTitleSpan')}</span></h2>
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
          <p className="section-label reveal">{t('projects.sectionLabel')}</p>
          <h2 className="section-heading reveal reveal-d1">{t('projects.sectionTitle')} <span>{t('projects.sectionTitleSpan')}</span></h2>

          <div className="projects-carousel" ref={carouselRef}>
            {portfolioData.projects.map((project, index) => (
              <div key={index} className={`project-card reveal ${index === 0 ? 'featured' : ''}`}>
                {index === 0 && (
                  <span className="featured-badge">
                    <i className="fas fa-star"></i> {t('projects.capstone')}
                  </span>
                )}
                <i className={`${project.icon} project-icon`}></i>
                <h3 className="project-title">{t(`projects.items.${index}.title`, { defaultValue: project.title })}</h3>
                {(project.image || project.images) && (
                  <div
                    onClick={() => setSelectedCertImage(project.images ? { images: project.images, index: 0, title: t(`projects.items.${index}.title`, { defaultValue: project.title }) } : project.image)}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '10px',
                      marginBottom: '1rem',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer'
                    }}
                  >
                    <img
                      src={project.images ? project.images[0] : project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '180px',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      backgroundColor: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(6px)',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.72rem',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                    }}>
                      {project.images && project.images.length > 1 ? (
                        <>
                          <i className="fas fa-images"></i> Gallery ({project.images.length})
                        </>
                      ) : (
                        <>
                          <i className="fas fa-search-plus"></i> View Preview
                        </>
                      )}
                    </div>
                  </div>
                )}
                <p className="project-desc">{t(`projects.items.${index}.description`, { defaultValue: project.description })}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                {project.links && (project.links.github || project.links.live) && (
                  <div className="project-links-row">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <i className="fab fa-github"></i> GitHub
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link-btn" style={{ color: '#38bdf8' }}>
                        <i className="fas fa-external-link-alt"></i> {t('projects.liveDemo', { defaultValue: 'Live Demo' })}
                      </a>
                    )}
                  </div>
                )}
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
          <p className="section-label reveal">{t('education.sectionLabel')}</p>
          <h2 className="section-heading reveal reveal-d1">{t('education.sectionTitle')} <span>{t('education.sectionTitleSpan')}</span></h2>

          <div className="timeline-grid">
            {/* Education column */}
            <div>
              <p className="timeline-col-title reveal">
                <i className="fas fa-graduation-cap"></i> {t('education.eduTitle')}
              </p>
              {portfolioData.education.map((item, i) => (
                <div key={i} className={`timeline-entry reveal reveal-d${i + 1}`}>
                  <p className="timeline-period">{t(`education.items.${i}.period`, { defaultValue: item.period })}</p>
                  <h3 className="timeline-title">{t(`education.items.${i}.degree`, { defaultValue: item.degree })}</h3>
                  <p className="timeline-sub">{t(`education.items.${i}.institution`, { defaultValue: item.institution })}</p>
                  <p className="timeline-desc">{t(`education.items.${i}.description`, { defaultValue: item.description })}</p>
                  {item.achievements && t(`education.items.${i}.achievements`, { returnObjects: true, defaultValue: item.achievements }).map((a, j) => (
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
                <i className="fas fa-briefcase"></i> {t('education.expTitle')}
              </p>
              {portfolioData.experience.map((exp, i) => (
                <div key={i} className={`timeline-entry reveal reveal-d${i + 1}`}>
                  <p className="timeline-period">{t(`experience.items.${i}.period`, { defaultValue: exp.period })}</p>
                  <h3 className="timeline-title">{t(`experience.items.${i}.position`, { defaultValue: exp.position })}</h3>
                  <p className="timeline-sub">{t(`experience.items.${i}.organization`, { defaultValue: exp.organization })}</p>
                  <p className="timeline-desc">{t(`experience.items.${i}.description`, { defaultValue: exp.description })}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATES ── */}
        {portfolioData.certificates && (
          <section id="certificates" style={{ marginTop: '2rem' }}>
            <p className="section-label reveal">{t('certificates.sectionLabel', { defaultValue: 'My qualifications' })}</p>
            <h2 className="section-heading reveal reveal-d1">{t('certificates.sectionTitle', { defaultValue: 'Licenses &' })} <span>{t('certificates.sectionTitleSpan', { defaultValue: 'Certifications' })}</span></h2>

            <div className="timeline-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {portfolioData.certificates.map((cert, i) => {
                return (
                  <div
                    key={i}
                    className={`timeline-entry reveal reveal-d${(i % 3) + 1}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      textDecoration: 'none',
                      color: 'inherit',
                      cursor: cert.url || cert.embedUrl || cert.image ? 'pointer' : 'default'
                    }}
                    onClick={() => {
                      if (cert.embedUrl) {
                        setSelectedEmbedUrl(cert.embedUrl);
                      } else if (cert.image) {
                        setSelectedCertImage(cert.image);
                      } else if (cert.url) {
                        window.open(cert.url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    {cert.image && (
                      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px', marginBottom: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <img
                          src={cert.image}
                          alt={cert.title}
                          style={{
                            width: '100%',
                            height: '210px',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: '10px',
                          right: '10px',
                          backgroundColor: 'rgba(0, 0, 0, 0.75)',
                          backdropFilter: 'blur(6px)',
                          padding: '5px 12px',
                          borderRadius: '20px',
                          fontSize: '0.75rem',
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.18)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                        }}>
                          <i className="fas fa-search-plus"></i> View Certificate
                        </div>
                      </div>
                    )}
                    <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <p className="timeline-period">{cert.date ? `${cert.date} · ${cert.status}` : cert.status}</p>
                        <h3 className="timeline-title"><i className={cert.icon} style={{ marginRight: '8px' }}></i>{cert.title}</h3>
                        <p className="timeline-sub">{cert.issuer}</p>
                      </div>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            marginTop: '12px',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            backgroundColor: 'rgba(56, 189, 248, 0.12)',
                            border: '1px solid rgba(56, 189, 248, 0.25)',
                            color: '#38bdf8',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            textDecoration: 'none',
                            width: 'fit-content',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {cert.urlLabel || 'Verify Credential'} <i className="fas fa-external-link-alt" style={{ fontSize: '0.7rem' }}></i>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── OTHER CERTIFICATES & RECOGNITIONS ── */}
            {portfolioData.otherCertificates && portfolioData.otherCertificates.length > 0 && (
              <div style={{ marginTop: '4.5rem' }}>
                <h3 className="section-heading reveal reveal-d1" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                  {t('certificates.otherTitle', { defaultValue: 'Other Certificates &' })} <span>{t('certificates.otherTitleSpan', { defaultValue: 'Recognitions' })}</span>
                </h3>
                <p className="timeline-sub reveal reveal-d2" style={{ marginBottom: '2rem', color: '#94a3b8' }}>
                  {t('certificates.otherSub', { defaultValue: 'Training Courses, Internship Records, University Association & Event Participation' })}
                </p>

                {/* Interactive Category Filter Pills */}
                {(() => {
                  const categories = ['All', ...new Set(portfolioData.otherCertificates.map(c => c.category || 'General'))];
                  if (categories.length > 1) {
                    return (
                      <div className="reveal reveal-d2" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2.5rem' }}>
                        {categories.map((cat, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedOtherCategory(cat)}
                            style={{
                              padding: '8px 18px',
                              borderRadius: '30px',
                              border: selectedOtherCategory === cat ? '1px solid #38bdf8' : '1px solid rgba(255, 255, 255, 0.1)',
                              backgroundColor: selectedOtherCategory === cat ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                              color: selectedOtherCategory === cat ? '#38bdf8' : '#cbd5e1',
                              fontSize: '0.85rem',
                              fontWeight: 500,
                              cursor: 'pointer',
                              transition: 'all 0.25s ease',
                              boxShadow: selectedOtherCategory === cat ? '0 0 15px rgba(56, 189, 248, 0.2)' : 'none'
                            }}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })()}

                <div className="timeline-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                  {portfolioData.otherCertificates
                    .filter(cert => selectedOtherCategory === 'All' || (cert.category || 'General') === selectedOtherCategory)
                    .map((cert, i) => {
                      return (
                        <div
                          key={i}
                          className={`timeline-entry reveal reveal-d${(i % 3) + 1}`}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            textDecoration: 'none',
                            color: 'inherit',
                            cursor: cert.url || cert.embedUrl || cert.image ? 'pointer' : 'default'
                          }}
                          onClick={() => {
                            if (cert.embedUrl) {
                              setSelectedEmbedUrl(cert.embedUrl);
                            } else if (cert.image) {
                              setSelectedCertImage(cert.image);
                            } else if (cert.url) {
                              window.open(cert.url, '_blank', 'noopener,noreferrer');
                            }
                          }}
                        >
                          {cert.image && (
                            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px', marginBottom: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                              <img
                                src={cert.image}
                                alt={cert.title}
                                style={{
                                  width: '100%',
                                  height: '210px',
                                  objectFit: 'cover',
                                  display: 'block',
                                  transition: 'transform 0.3s ease'
                                }}
                              />
                              <div style={{
                                position: 'absolute',
                                bottom: '10px',
                                right: '10px',
                                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                                backdropFilter: 'blur(6px)',
                                padding: '5px 12px',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                border: '1px solid rgba(255, 255, 255, 0.18)',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                              }}>
                                <i className="fas fa-search-plus"></i> View Certificate
                              </div>
                            </div>
                          )}
                          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                                {cert.category && (
                                  <span style={{
                                    fontSize: '0.7rem',
                                    padding: '3px 9px',
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(56, 189, 248, 0.12)',
                                    color: '#38bdf8',
                                    border: '1px solid rgba(56, 189, 248, 0.25)',
                                    fontWeight: 600,
                                    letterSpacing: '0.3px'
                                  }}>
                                    {cert.category}
                                  </span>
                                )}
                                <p className="timeline-period" style={{ margin: 0 }}>{cert.date ? `${cert.date} · ${cert.status}` : cert.status}</p>
                              </div>
                              <h3 className="timeline-title" style={{ marginTop: '4px' }}><i className={cert.icon || 'fas fa-certificate'} style={{ marginRight: '8px' }}></i>{cert.title}</h3>
                              <p className="timeline-sub">{cert.issuer}</p>
                            </div>
                            {cert.url && (
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  marginTop: '12px',
                                  padding: '6px 12px',
                                  borderRadius: '6px',
                                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                                  border: '1px solid rgba(56, 189, 248, 0.25)',
                                  color: '#38bdf8',
                                  fontSize: '0.8rem',
                                  fontWeight: 500,
                                  textDecoration: 'none',
                                  width: 'fit-content',
                                  transition: 'all 0.2s ease'
                                }}
                              >
                                {cert.urlLabel || 'Verify Credential'} <i className="fas fa-external-link-alt" style={{ fontSize: '0.7rem' }}></i>
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </section>
        )}

        {/* ── CONTACT ── */}
        <section id="contact">
          <p className="section-label reveal">{t('contact.sectionLabel')}</p>
          <h2 className="section-heading reveal reveal-d1">{t('contact.sectionTitle')} <span>{t('contact.sectionTitleSpan')}</span></h2>

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
              ref={formRef}
              className="contact-form-card reveal reveal-d2"
              onSubmit={sendEmail}
            >
              <div className="form-group">
                <input type="text" name="name" placeholder={t('contact.form.name')} required className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder={t('contact.form.email')} required className="form-input" />
              </div>
              <div className="form-group">
                <textarea name="message" rows="5" placeholder={t('contact.form.message')} required className="form-input"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : t('contact.form.send')} <i className={isSubmitting ? "fas fa-spinner fa-spin" : "fas fa-paper-plane"}></i>
              </button>
              {submitStatus === 'success' && <p style={{ color: '#10b981', marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>Message sent successfully!</p>}
              {submitStatus === 'error' && <p style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>Failed to send message. Please try again.</p>}
            </form>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="footer-section">
        <div className="footer-container">
          <p className="footer-left">
            © {new Date().getFullYear()} <span>{portfolioData.name}</span>.
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

      {/* ── IMAGE MODAL ── */}
      {selectedCertImage && (
        <div
          onClick={() => setSelectedCertImage(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            cursor: 'zoom-out'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <button
              onClick={() => setSelectedCertImage(null)}
              style={{
                position: 'absolute',
                top: '-40px', right: 0,
                background: 'none', border: 'none',
                color: 'white', fontSize: '2.2rem',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              &times;
            </button>

            {typeof selectedCertImage === 'object' && selectedCertImage.images ? (
              <>
                <div style={{
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '10px',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  {selectedCertImage.title} <span style={{ opacity: 0.7, marginLeft: '8px', fontSize: '0.85rem' }}>({selectedCertImage.index + 1} / {selectedCertImage.images.length})</span>
                </div>

                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  {selectedCertImage.images.length > 1 && (
                    <button
                      onClick={() => setSelectedCertImage(prev => ({
                        ...prev,
                        index: (prev.index - 1 + prev.images.length) % prev.images.length
                      }))}
                      style={{
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        marginRight: '15px',
                        transition: 'all 0.2s ease',
                        flexShrink: 0
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                  )}

                  <img
                    src={selectedCertImage.images[selectedCertImage.index]}
                    alt={`Preview slide ${selectedCertImage.index + 1}`}
                    style={{
                      maxWidth: '80vw',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                      cursor: 'default'
                    }}
                  />

                  {selectedCertImage.images.length > 1 && (
                    <button
                      onClick={() => setSelectedCertImage(prev => ({
                        ...prev,
                        index: (prev.index + 1) % prev.images.length
                      }))}
                      style={{
                        background: 'rgba(0, 0, 0, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        marginLeft: '15px',
                        transition: 'all 0.2s ease',
                        flexShrink: 0
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  )}
                </div>

                {selectedCertImage.images.length > 1 && (
                  <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginTop: '15px',
                    overflowX: 'auto',
                    maxWidth: '80vw',
                    padding: '5px'
                  }}>
                    {selectedCertImage.images.map((imgUrl, i) => (
                      <img
                        key={i}
                        src={imgUrl}
                        alt={`Thumb ${i + 1}`}
                        onClick={() => setSelectedCertImage(prev => ({ ...prev, index: i }))}
                        style={{
                          width: '70px',
                          height: '45px',
                          objectFit: 'cover',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          border: i === selectedCertImage.index ? '2px solid #3b82f6' : '2px solid transparent',
                          opacity: i === selectedCertImage.index ? 1 : 0.5,
                          transition: 'all 0.2s ease'
                        }}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <img
                src={selectedCertImage}
                alt="Certificate Full"
                style={{
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  cursor: 'default'
                }}
              />
            )}
          </div>
        </div>
      )}

      {/* ── EMBED MODAL ── */}
      {selectedEmbedUrl && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            cursor: 'zoom-out'
          }}
          onClick={() => setSelectedEmbedUrl(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: 'relative', width: '90vw', maxWidth: '800px', height: '80vh', maxHeight: '600px', backgroundColor: 'transparent' }}
          >
            <button
              onClick={() => setSelectedEmbedUrl(null)}
              style={{
                position: 'absolute',
                top: '-40px', right: 0,
                background: 'none', border: 'none',
                color: 'white', fontSize: '2rem',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <iframe
              src={selectedEmbedUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Certificate Full"
              style={{ borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', backgroundColor: '#fff' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;