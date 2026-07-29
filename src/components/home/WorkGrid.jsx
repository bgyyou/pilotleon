import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, otherOrder } from '../../data/projects';
import './WorkGrid.css';

export default function WorkGrid() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const others = otherOrder.map((id) => projects.find((p) => p.id === id));

  return (
    <section className="workgrid section" id="work">
      <div className="container">
        <motion.div
          className="workgrid__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">{t('work.eyebrow')}</span>
          <h2
            className="workgrid__headline"
            dangerouslySetInnerHTML={{ __html: t('work.headline') }}
          />
          <p className="workgrid__lead">{t('work.lead')}</p>
        </motion.div>

        <div className="workgrid__grid">
          {others.map((p, idx) => (
            <motion.article
              key={p.id}
              className="workcard"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link to={`/work/${p.id}`} className="workcard__link">
                <div className="workcard__cover">
                  {/* Fallback gradient (always underneath) */}
                  <div
                    className="workcard__gradient"
                    style={{ background: p.coverGradient }}
                  />
                  {/* Real cover image (gallery[0]) — sits on top of gradient */}
                  {p.gallery?.[0]?.image && (
                    <img
                      className="workcard__cover-img"
                      src={p.gallery[0].image}
                      alt=""
                      loading="lazy"
                    />
                  )}
                  {/* Dark scrim for text readability */}
                  <div className="workcard__cover-scrim" />
                  <div className="workcard__cover-name">{p.id}</div>
                  <div className="workcard__cover-tags">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="workcard__cover-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="workcard__body">
                  <div className="workcard__meta">
                    <span className="workcard__year">{p.year}</span>
                    <span className="workcard__dot">·</span>
                    <span className="workcard__role">{p.role}</span>
                  </div>
                  <h3 className="workcard__title">
                    {isEn ? p.name.en : p.name.zh}
                  </h3>
                  <p className="workcard__tagline">
                    {isEn ? p.tagline.en : p.tagline.zh}
                  </p>

                  <div className="workcard__metrics">
                    {p.metrics.slice(0, 3).map((m, i) => (
                      <div key={i} className="workcard__metric">
                        <span
                          className="workcard__metric-value"
                          style={{ color: p.color }}
                        >
                          {m.value}
                        </span>
                        <span className="workcard__metric-label">
                          {isEn ? m.label.en : m.label.zh}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="workcard__cta">
                    <span>{t('work.view_detail')}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
