import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data';

const Navbar = () => {
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
    <nav className={`navbar glass ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo">{logoInitial}</a>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <a
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
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

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          transition: var(--transition);
          border: none;
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          padding: 1rem 10%;
          background: rgba(11, 12, 16, 0.85);
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent-color);
          text-decoration: none;
          letter-spacing: 2px;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 500;
          transition: var(--transition);
          font-size: 1rem;
        }

        .nav-link:hover {
          color: var(--accent-color);
        }

        .hamburger {
          display: none;
          cursor: pointer;
        }

        .bar {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px auto;
          transition: var(--transition);
          background-color: var(--text-primary);
        }

        @media screen and (max-width: 768px) {
          .hamburger {
            display: block;
          }

          .hamburger.active .bar:nth-child(2) { opacity: 0; }
          .hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
          .hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

          .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background: var(--bg-secondary);
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
            gap: 1.5rem;
          }

          .nav-menu.active {
            left: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
