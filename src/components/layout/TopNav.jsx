import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './TopNav.css';

export default function TopNav() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [sectionTransition, setSectionTransition] = useState(false);
  const transitionTimersRef = useRef([]);
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    return () => {
      transitionTimersRef.current.forEach((timer) => window.clearTimeout(timer));
      transitionTimersRef.current = [];
    };
  }, []);

  const switchLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  const navigateToSection = (event, selector) => {
    event.preventDefault();

    const target = document.querySelector(selector);
    if (!target) return;

    transitionTimersRef.current.forEach((timer) => window.clearTimeout(timer));
    transitionTimersRef.current = [];

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const updateHash = () => window.history.replaceState(null, '', selector);

    if (prefersReducedMotion) {
      target.scrollIntoView({ block: 'start' });
      updateHash();
      return;
    }

    setSectionTransition(true);

    const scrollTimer = window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      updateHash();
    }, 180);

    const fadeOutTimer = window.setTimeout(() => {
      setSectionTransition(false);
    }, 760);

    transitionTimersRef.current = [scrollTimer, fadeOutTimer];
  };

  return (
    <>
      <motion.header
      className={`topnav ${scrolled ? 'topnav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="topnav__inner container">
        <Link to="/" className="topnav__logo" aria-label="PilotLeon — Home">
          <span className="topnav__logo-name">PilotLeon</span>
          <span className="topnav__logo-dot" />
        </Link>

        {isHome ? (
          <nav className="topnav__nav" aria-label="Primary">
            <a href="#work" className="topnav__link" onClick={(event) => navigateToSection(event, '#work')}>{t('nav.work')}</a>
            <a href="#about" className="topnav__link" onClick={(event) => navigateToSection(event, '#about')}>{t('nav.about')}</a>
            <a href="#stack" className="topnav__link" onClick={(event) => navigateToSection(event, '#stack')}>{t('nav.stack')}</a>
            <a href="#contact" className="topnav__link" onClick={(event) => navigateToSection(event, '#contact')}>{t('nav.contact')}</a>
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

      <AnimatePresence>
        {sectionTransition && (
          <motion.div
            className="topnav__section-fade"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
