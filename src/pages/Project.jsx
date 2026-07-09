import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { getProject } from '../data/projects';
import CodeBlock from '../components/project/CodeBlock';
import './Project.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Project() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const project = getProject(id);

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <article className="project">
      {/* === HERO === */}
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

            <motion.h1 className="project__title" variants={fadeUp}>
              {isEn ? project.name.en : project.name.zh}
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

      {/* === BODY === */}
      <div className="project__body">
        {/* Problem */}
        <section className="project__section">
          <div className="container container--narrow">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <span className="eyebrow">{t('project_detail.problem')}</span>
              <p
                className="project__lead"
                dangerouslySetInnerHTML={{ __html: isEn ? project.problem.en : project.problem.zh }}
              />
            </motion.div>
          </div>
        </section>

        {/* Solution */}
        <section className="project__section">
          <div className="container container--narrow">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <span className="eyebrow">{t('project_detail.solution')}</span>
              <p
                className="project__lead"
                dangerouslySetInnerHTML={{ __html: isEn ? project.solution.en : project.solution.zh }}
              />
            </motion.div>
          </div>
        </section>

        {/* Architecture */}
        <section className="project__section project__section--arch">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <span className="eyebrow">{t('project_detail.architecture')}</span>
              <p
                className="project__lead project__lead--wide"
                dangerouslySetInnerHTML={{ __html: isEn ? project.architecture.en : project.architecture.zh }}
              />

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
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        <section className="project__section">
          <div className="container container--narrow">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
            >
              <ul className="project__highlights">
                {(isEn ? project.highlights.map((h) => h.en) : project.highlights.map((h) => h.zh)).map((h, i) => (
                  <motion.li
                    key={i}
                    className="project__highlight"
                    variants={fadeUp}
                  >
                    <span className="project__highlight-mark">+</span>
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Code deep dive */}
        {project.codeSnippet && (
          <section className="project__section project__section--code">
            <div className="container">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                variants={fadeUp}
              >
                <span className="eyebrow">{t('project_detail.code_deep_dive')}</span>
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
              </motion.div>
            </div>
          </section>
        )}

        {/* Screenshots placeholder */}
        <section className="project__section">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <span className="eyebrow">{t('project_detail.screenshots')}</span>
              <div className="project__screenshots">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="project__shot">
                    <div
                      className="project__shot-bg"
                      style={{ background: project.coverGradient }}
                    />
                    <div className="project__shot-label">
                      Screenshot {String(i).padStart(2, '0')}
                      <span className="project__shot-sub">· 稍后填充</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Links */}
        <section className="project__section">
          <div className="container container--narrow">
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

        {/* Next project hint */}
        <section className="project__section project__section--next">
          <div className="container container--narrow">
            <Link to="/#work" className="project__next">
              <span>← Back to all work</span>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
