import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './TopNav.css';

export default function TopNav() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const isProject = location.pathname.startsWith('/work/');

  return (
    <motion.header
      className={`topnav ${scrolled ? 'topnav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="topnav__inner container">
        <Link to="/" className="topnav__logo" aria-label="Home">
          <span className="topnav__logo-mark">L</span>
          <span className="topnav__logo-text">eon</span>
          <span className="topnav__logo-dot" />
        </Link>

        {isHome ? (
          <nav className="topnav__nav" aria-label="Primary">
            <a href="#work" className="topnav__link">{t('nav.work')}</a>
            <a href="#about" className="topnav__link">{t('nav.about')}</a>
            <a href="#stack" className="topnav__link">{t('nav.stack')}</a>
            <a href="#contact" className="topnav__link">{t('nav.contact')}</a>
          </nav>
        ) : (
          <div className="topnav__nav">
            <Link to="/#work" className="topnav__link">← {t('project_detail.back').replace('← ', '').replace('Back to work', '作品')}</Link>
          </div>
        )}

        <div className="topnav__right">
          <div className="topnav__lang">
            <button
              className="topnav__lang-btn"
              onClick={() => setLangOpen((v) => !v)}
              aria-expanded={langOpen}
              aria-label="Switch language"
            >
              <span className="topnav__lang-current">
                {i18n.language === 'zh' ? '中' : 'EN'}
              </span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  className="topnav__lang-menu"
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    className={`topnav__lang-item ${i18n.language === 'zh' ? 'is-active' : ''}`}
                    onClick={() => switchLang('zh')}
                  >
                    <span>中</span>
                    <span className="topnav__lang-item-sub">中文</span>
                  </button>
                  <button
                    className={`topnav__lang-item ${i18n.language === 'en' ? 'is-active' : ''}`}
                    onClick={() => switchLang('en')}
                  >
                    <span>EN</span>
                    <span className="topnav__lang-item-sub">English</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
