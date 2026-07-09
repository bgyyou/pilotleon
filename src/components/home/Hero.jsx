import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const SLOGANS_ZH = [
  '做出能上线的 AI 产品。',
  '多 Agent 协作，0 到 1 全链路。',
  '工程化优先，稳定可观测。',
  '营销 × 工程，快速上线。',
];

const SLOGANS_EN = [
  'Ship AI products that work.',
  'Multi-agent, from 0 to 1.',
  'Engineering first, observable.',
  'Marketing × engineering, ship fast.',
];

const HERO_IMAGES = [
  { src: '/hero/01-hongkong.png', label: 'Hong Kong' },
  { src: '/hero/02-shenzhen.png', label: 'Shenzhen' },
  { src: '/hero/03-ai-brain.png', label: 'AI' },
];

const PHRASES_ZH = [
  '多 Agent 协作系统',
  '0 到 1 全链路',
  'Workflow 发现',
  '营销 × 工程',
  '快速上线',
  '产品 × AI',
  'WDA · OPC · MediaPilot',
  'Edinburgh → HK → 深圳',
];

const PHRASES_EN = [
  'Multi-Agent Systems',
  '0 to 1 Products',
  'Workflow Discovery',
  'Marketing × Engineering',
  'Ship Fast',
  'Product × AI',
  'WDA · OPC · MediaPilot',
  'Edinburgh → HK → Shenzhen',
];

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';
  const slogans = isEn ? SLOGANS_EN : SLOGANS_ZH;
  const phrases = isEn ? PHRASES_EN : PHRASES_ZH;

  // ===== Typewriter state =====
  const [text, setText] = useState('');
  const [sloganIdx, setSloganIdx] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pausing' | 'deleting'
  const slogansRef = useRef(slogans);
  const sloganIdxRef = useRef(0);
  const timeoutRef = useRef(null);
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // Reset typewriter when language switches
  useEffect(() => {
    slogansRef.current = slogans;
    sloganIdxRef.current = 0;
    setSloganIdx(0);
    setText('');
    setPhase('typing');
  }, [slogans]);

  // Typewriter loop
  useEffect(() => {
    if (reducedMotion.current) {
      setText(slogansRef.current[sloganIdxRef.current] || slogansRef.current[0]);
      return undefined;
    }
    const target = slogansRef.current[sloganIdx];
    let delay = 70;
    if (phase === 'pausing') delay = 2200;
    else if (phase === 'deleting') delay = 35;

    timeoutRef.current = setTimeout(() => {
      if (phase === 'typing') {
        const next = target.slice(0, text.length + 1);
        setText(next);
        if (next === target) setPhase('pausing');
      } else if (phase === 'pausing') {
        setPhase('deleting');
      } else if (phase === 'deleting') {
        const next = target.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          const nextIdx = (sloganIdx + 1) % slogansRef.current.length;
          sloganIdxRef.current = nextIdx;
          setSloganIdx(nextIdx);
          setPhase('typing');
        }
      }
    }, delay);

    return () => clearTimeout(timeoutRef.current);
  }, [text, phase, sloganIdx]);

  // ===== Background image carousel =====
  const [bgIdx, setBgIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setBgIdx((i) => (i + 1) % HERO_IMAGES.length),
      8000
    );
    return () => clearInterval(id);
  }, []);

  // ===== Mouse parallax (subtle on orbs) =====
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero">
      {/* === Layered background: image carousel + dark overlay + tints + grid === */}
      <div className="hero__bg" aria-hidden="true">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className={`hero__bg-image${i === bgIdx ? ' hero__bg-image--active' : ''}`}
          >
            <img
              src={img.src}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              draggable="false"
            />
          </div>
        ))}
        {/* dark scrim: left stronger (for text readability), right lighter (for image visibility) */}
        <div className="hero__bg-overlay" />
        {/* accent color wash */}
        <div className="hero__bg-tint" />

        {/* subtle grid + noise on top of image */}
        <div className="hero__grid" />
        <div className="hero__noise" />

        {/* image position dots */}
        <div className="hero__bg-dots">
          {HERO_IMAGES.map((img, i) => (
            <span
              key={img.label}
              className={`hero__bg-dot${i === bgIdx ? ' hero__bg-dot--active' : ''}`}
              aria-label={img.label}
            />
          ))}
        </div>

        {/* subtle parallax orbs (kept for depth, very low opacity now) */}
        <div
          className="hero__orb hero__orb--1"
          style={{
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          }}
        />
        <div
          className="hero__orb hero__orb--2"
          style={{
            transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
          }}
        />
      </div>

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
        >
          <motion.div
            className="hero__eyebrow"
            variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
          >
            <span className="hero__status-dot" />
            <span>{t('hero.eyebrow')}</span>
          </motion.div>

          {/* === Typewriter title (single line, compact) === */}
          <motion.h1
            className="hero__title"
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero__typewriter" aria-live="polite">
              <span className="hero__typewriter-text">{text}</span>
              <span className="hero__cursor" aria-hidden="true" />
            </span>
            {/* SR-only fallback (full sentence) */}
            <span className="sr-only">{slogans[sloganIdx]}</span>
          </motion.h1>

          {/* Marquee scrolling band */}
          <motion.div
            className="hero__marquee"
            aria-hidden="true"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hero__marquee-track">
              {[...phrases, ...phrases, ...phrases].map((p, i) => (
                <span key={i} className="hero__marquee-item">
                  {p}
                  <span className="hero__marquee-dot">◆</span>
                </span>
              ))}
            </div>
          </motion.div>

          <div className="hero__bottom">
            <motion.div
              className="hero__cta"
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <a href="#trilogy" className="hero__btn hero__btn--primary">
                <span>{t('hero.cta_primary')}</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7H13M13 7L7 1M13 7L7 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#contact" className="hero__btn hero__btn--ghost">
                {t('hero.cta_secondary')}
              </a>
            </motion.div>

            <motion.div
              className="hero__status"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="hero__status-pulse" />
              <span>{t('hero.status')}</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative side info */}
      <motion.div
        className="hero__side"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="hero__side-line" />
        <div className="hero__side-text">
          {isEn ? 'Shenzhen' : '深圳'} · {isEn ? 'AI PM' : 'AI 产品'}
        </div>
        <div className="hero__side-line" />
      </motion.div>
    </section>
  );
}