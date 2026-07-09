import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, trilogyOrder } from '../../data/projects';
import './Trilogy.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Trilogy() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const acts = trilogyOrder.map((id) => projects.find((p) => p.id === id));

  return (
    <section className="trilogy section" id="trilogy">
      <div className="container">
        <motion.div
          className="trilogy__head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <span className="eyebrow">{t('trilogy.eyebrow')}</span>
          <h2
            className="trilogy__headline"
            dangerouslySetInnerHTML={{ __html: t('trilogy.headline') }}
          />
          <p className="trilogy__lead">{t('trilogy.lead')}</p>
        </motion.div>

        <div className="trilogy__list">
          {acts.map((act, idx) => (
            <motion.article
              key={act.id}
              className={`trilogy__act ${idx % 2 === 0 ? 'trilogy__act--left' : 'trilogy__act--right'}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="trilogy__act-inner">
                <div className="trilogy__act-head">
                  <div className="trilogy__act-index">
                    {t(`trilogy.acts.act${idx + 1}.index`)}
                  </div>
                  <div className="trilogy__act-phase">
                    {t(`trilogy.acts.act${idx + 1}.phase`)}
                  </div>
                </div>

                <h3 className="trilogy__act-title">
                  {t(`trilogy.acts.act${idx + 1}.title`)}
                </h3>

                <div className="trilogy__act-name">
                  {isEn ? act.name.en : act.name.zh}
                </div>

                <p className="trilogy__act-summary">
                  {t(`trilogy.acts.act${idx + 1}.summary`)}
                </p>

                <ul className="trilogy__act-outputs">
                  {(t(`trilogy.acts.act${idx + 1}.outputs`, { returnObjects: true }) || []).map((output, i) => (
                    <li key={i}>
                      <span className="trilogy__act-output-mark">→</span>
                      {output}
                    </li>
                  ))}
                </ul>

                <div className="trilogy__act-metrics">
                  {act.metrics.map((m, i) => (
                    <div key={i} className="trilogy__act-metric">
                      <div
                        className="trilogy__act-metric-value"
                        style={{ color: act.color }}
                      >
                        {m.value}
                      </div>
                      <div className="trilogy__act-metric-label">
                        {isEn ? m.label.en : m.label.zh}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/work/${act.id}`}
                  className="trilogy__act-cta"
                  style={{ '--act-color': act.color }}
                >
                  <span>{t('trilogy.view_detail')}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8H14M14 8L8 2M14 8L8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              {/* Decorative side */}
              <div className="trilogy__act-visual" aria-hidden="true">
                <div
                  className="trilogy__act-gradient"
                  style={{ background: act.coverGradient }}
                />
                <div className="trilogy__act-lines">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="trilogy__act-line"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    />
                  ))}
                </div>
                <div className="trilogy__act-name-overlay">
                  {act.id.toUpperCase()}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Connecting line */}
        <div className="trilogy__connector" aria-hidden="true">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="50" y1="0" x2="50" y2="100" stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
