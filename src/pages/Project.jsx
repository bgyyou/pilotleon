import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getProject } from '../data/projects';
import CodeBlock from '../components/project/CodeBlock';
import './Project.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

function useTypewriter(text, speed = 56) {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (!text) {
      setDisplay('');
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplay(text);
      return undefined;
    }

    const chars = Array.from(text);
    let index = 0;
    setDisplay('');

    const timer = window.setInterval(() => {
      index += 1;
      setDisplay(chars.slice(0, index).join(''));
      if (index >= chars.length) {
        window.clearInterval(timer);
      }
    }, speed);

    return () => window.clearInterval(timer);
  }, [text, speed]);

  return display;
}

/**
 * Section text resolver.
 *
 * 优先级: 新字段 (background/challenge/approach/results) > 老字段 (problem/solution/architecture) > placeholder
 * - 新字段非空 → 用新字段，标记 isFallback=false
 * - 新字段空 + 老字段非空 → 用老字段，标记 isFallback=true（UI 角标 "↻ 旧字段"）
 * - 全空 → text='', isFallback=false（UI 渲染 placeholder）
 */
function getSectionText(project, key, isEn, fallbackKey = null) {
  const cur = project[key]?.[isEn ? 'en' : 'zh'];
  if (cur && cur.trim()) return { text: cur, isFallback: false };
  if (fallbackKey) {
    const fb = project[fallbackKey]?.[isEn ? 'en' : 'zh'];
    if (fb && fb.trim()) return { text: fb, isFallback: true };
  }
  return { text: '', isFallback: false };
}

function ProjectSection({
  index,
  eyebrow,
  content,
  variant = 'default',
  showFallbackBadge = true,
  t,
  children,
}) {
  return (
    <section className={`project__section project__section--${variant}`}>
      <div className="container container--content">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <div className="project__section-head">
            <span className="project__section-index">
              <span className="project__section-index-label">
                {t('project_detail.section_index_label')}
              </span>
              <span className="project__section-index-num">0{index}</span>
            </span>
            <span className="eyebrow">{eyebrow}</span>
            {showFallbackBadge && content.isFallback && (
              <span className="project__section-fallback" title="Using legacy field — fill new schema to override">
                ↻ legacy
              </span>
            )}
          </div>

          {content.text ? (
            <p
              className={`project__lead ${variant === 'challenge' ? 'project__lead--challenge' : ''}`}
              dangerouslySetInnerHTML={{ __html: content.text }}
            />
          ) : (
            <div className="project__pending">
              <span className="project__pending-badge">
                {t('project_detail.pending_badge')}
              </span>
              <span className="project__pending-hint">
                {t('project_detail.pending_hint')}
              </span>
            </div>
          )}

          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const project = getProject(id);
  const projectTitle = project ? (isEn ? project.name.en : project.name.zh) : '';
  const typedTitle = useTypewriter(projectTitle, 54);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  // 4-section text resolver (新字段 → 老字段 fallback)
  const background = getSectionText(project, 'background', isEn, 'problem');
  const challenge  = getSectionText(project, 'challenge',  isEn, 'problem');
  const approach   = getSectionText(project, 'approach',   isEn, 'solution');
  const results    = getSectionText(project, 'results',    isEn, 'architecture');

  return (
    <article className="project">
      {/* === HERO (Section 00 · project name) === */}
      <header className="project__hero">
        <div
          className="project__hero-bg"
          style={{ background: project.coverGradient }}
        />
        <div className="project__hero-grid" />
        <div className="container project__hero-inner">
          <motion.div
            className="project__hero-content"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
          >
            <motion.div className="project__back-wrap" variants={fadeUp}>
              <Link to="/#work" className="project__back">
                {t('project_detail.back')}
              </Link>
            </motion.div>

            <motion.div className="project__tags" variants={fadeUp}>
              {project.tags.map((tag) => (
                <span key={tag} className="project__tag">{tag}</span>
              ))}
            </motion.div>

            <motion.h1 className="project__title" variants={fadeUp} aria-label={projectTitle}>
              <span>{typedTitle}</span>
              <span className="project__title-cursor" aria-hidden="true" />
            </motion.h1>

            <motion.p className="project__tagline" variants={fadeUp}>
              {isEn ? project.tagline.en : project.tagline.zh}
            </motion.p>

            <motion.div className="project__meta" variants={fadeUp}>
              <div className="project__meta-item">
                <span className="project__meta-label">Role</span>
                <span className="project__meta-value">{project.role}</span>
              </div>
              <div className="project__meta-item">
                <span className="project__meta-label">Year</span>
                <span className="project__meta-value">{project.year}</span>
              </div>
              <div className="project__meta-item">
                <span className="project__meta-label">{t('project_detail.status_title')}</span>
                <span className="project__meta-value">
                  {isEn ? project.status.en : project.status.zh}
                </span>
              </div>
            </motion.div>

            <motion.div className="project__metrics" variants={fadeUp}>
              {project.metrics.map((m, i) => (
                <div key={i} className="project__metric">
                  <div
                    className="project__metric-value"
                    style={{ color: project.color }}
                  >
                    {m.value}
                  </div>
                  <div className="project__metric-label">
                    {isEn ? m.label.en : m.label.zh}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* === BODY: 4 main sections === */}
      <div className="project__body">
        {/* 01 — 项目背景 */}
        <ProjectSection
          index={1}
          eyebrow={t('project_detail.background')}
          content={background}
          variant="background"
          t={t}
        />

        {/* 02 — 项目难点 (强调版：左侧色块 + 大引号) */}
        <ProjectSection
          index={2}
          eyebrow={t('project_detail.challenge')}
          content={challenge}
          variant="challenge"
          t={t}
        />

        {/* 03 — 如何解决 (含 code snippet + tech) */}
        <ProjectSection
          index={3}
          eyebrow={t('project_detail.approach')}
          content={approach}
          variant="approach"
          t={t}
        >
          {project.codeSnippet && (
            <div className="project__code">
              <h2 className="project__code-title">
                {project.codeSnippet.highlight}
              </h2>
              <p className="project__code-desc">
                {isEn ? project.codeSnippet.description.en : project.codeSnippet.description.zh}
              </p>
              <CodeBlock
                code={project.codeSnippet.code}
                language={project.codeSnippet.language}
                filename={project.codeSnippet.filename}
              />
            </div>
          )}

          {project.tech && project.tech.length > 0 && (
            <div className="project__tech">
              <div className="project__tech-label">{t('project_detail.tech_title')}</div>
              <div className="project__tech-chips">
                {project.tech.map((tech) => (
                  <span key={tech} className="project__tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </ProjectSection>

        {/* 04 — 实现成果 (含 metrics + highlights + gallery) */}
        <ProjectSection
          index={4}
          eyebrow={t('project_detail.results')}
          content={results}
          variant="results"
          showFallbackBadge={false}
          t={t}
        >
          {project.metrics && project.metrics.length > 0 && (
            <div className="project__metrics-row">
              {project.metrics.map((m, i) => (
                <div key={i} className="project__metric-card">
                  <div
                    className="project__metric-value"
                    style={{ color: project.color }}
                  >
                    {m.value}
                  </div>
                  <div className="project__metric-label">
                    {isEn ? m.label.en : m.label.zh}
                  </div>
                </div>
              ))}
            </div>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <ul className="project__highlights">
              {(isEn ? project.highlights.map((h) => h.en) : project.highlights.map((h) => h.zh)).map((h, i) => (
                <motion.li
                  key={i}
                  className="project__highlight"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <span className="project__highlight-mark">+</span>
                  {h}
                </motion.li>
              ))}
            </ul>
          )}

          {project.gallery?.length > 0 && (
            <div className="project__gallery">
              {project.gallery.map((item, i) => (
                <motion.figure
                  key={`${project.id}-gallery-${i}`}
                  className="project__gallery-item"
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  <figcaption className="project__gallery-copy">
                    <div className="project__gallery-index">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="project__gallery-title">
                      {isEn ? item.title.en : item.title.zh}
                    </h3>
                    <p className="project__gallery-body">
                      {isEn ? item.body.en : item.body.zh}
                    </p>
                  </figcaption>
                  <div className="project__gallery-frame" style={{ '--shot-color': project.color }}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={isEn ? item.alt.en : item.alt.zh}
                        loading="lazy"
                        className="project__gallery-img"
                      />
                    ) : (
                      <div className="project__gallery-placeholder" aria-label="等待上传截图">
                        <span className="project__gallery-placeholder-icon" aria-hidden="true">▢</span>
                        <span className="project__gallery-placeholder-text">
                          {t('project_detail.gallery_placeholder')}
                        </span>
                        <span className="project__gallery-placeholder-hint">
                          {isEn
                            ? 'Leon is preparing the screenshot — will be uploaded soon.'
                            : 'Leon 正在准备截图中,稍后上传。'}
                        </span>
                        <span className="project__gallery-placeholder-counter">
                          {isEn
                            ? `${String(i + 1).padStart(2, '0')} / ${String(project.gallery.length).padStart(2, '0')}`
                            : `第 ${i + 1} / ${project.gallery.length} 张`}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.figure>
              ))}
            </div>
          )}
        </ProjectSection>

        {/* === Links === */}
        <section className="project__section project__section--links">
          <div className="container container--content">
            <motion.div
              className="project__links"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              <span className="eyebrow">{t('project_detail.links')}</span>
              <div className="project__links-row">
                {project.repo && (
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__link"
                    style={{ '--link-color': project.color }}
                    variants={fadeUp}
                  >
                    <span>{t('project_detail.view_github')}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                )}
                <motion.div
                  className="project__link project__link--more"
                  style={{ '--link-color': project.color }}
                  variants={fadeUp}
                >
                  <span>{t('project_detail.view_docs')}</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* === Next project hint === */}
        <section className="project__section project__section--next">
          <div className="container container--content">
            <Link to="/#work" className="project__next">
              <span>← Back to all work</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
