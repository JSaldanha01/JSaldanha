import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const languages = [
    { code: 'en', flag: 'us' },
    { code: 'pt', flag: 'pt' },
    { code: 'id', flag: 'id' },
    { code: 'tl', flag: 'tl' }
  ];

  return (
    <div className="nav-language" style={{ position: 'relative' }}>
      <div
        onClick={() => setIsLangOpen(!isLangOpen)}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          padding: '0.4rem 0.8rem',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'white'
        }}
      >
        <img
          src={`https://flagcdn.com/${i18n.language === 'en' ? 'us' : i18n.language}.svg`}
          width="20"
          style={{ borderRadius: '2px' }}
          alt="flag"
        />
        <span style={{ fontWeight: '500' }}>{i18n.language.toUpperCase()}</span>
        <i className={`fas fa-chevron-${isLangOpen ? 'up' : 'down'}`} style={{ fontSize: '10px', marginLeft: '4px' }}></i>
      </div>

      {isLangOpen && (
        <div style={{
          position: 'absolute',
          top: '110%',
          right: '0',
          background: '#1f2937',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 1000
        }}>
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsLangOpen(false);
              }}
              style={{
                padding: '0.6rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                background: i18n.language === lang.code ? 'rgba(255,255,255,0.1)' : 'transparent',
                color: 'white',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = i18n.language === lang.code ? 'rgba(255,255,255,0.1)' : 'transparent'}
            >
              <img src={`https://flagcdn.com/${lang.flag}.svg`} width="20" style={{ borderRadius: '2px' }} alt="flag" />
              <span style={{ fontWeight: '500' }}>{lang.code.toUpperCase()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
