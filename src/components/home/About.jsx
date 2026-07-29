import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import { profile } from '../../data/profile.js';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="about__head"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <span className="eyebrow">{t('about.eyebrow')}</span>
          <h2
            className="about__headline"
            dangerouslySetInnerHTML={{ __html: t('about.headline') }}
          />
        </motion.div>

        {/* === 个人卡片：毕业照 + 基础信息 === */}
        <motion.div
          className="about__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about__intro-photo">
            <img src={profile.photo} alt={profile.name} />
            <div className="about__intro-photo-tag">爱丁堡 2020</div>
          </div>
          <div className="about__intro-info">
            <div className="about__intro-name">{profile.name}</div>
            <div className="about__intro-title">{profile.title}</div>
            <div className="about__intro-subtitle">{profile.subtitle}</div>

            <div className="about__intro-strengths">
              {profile.coreStrengths.map((s, i) => (
                <span key={i} className="about__intro-chip">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="about__body">
          <motion.div
            className="about__text"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.p variants={fadeUp} dangerouslySetInnerHTML={{ __html: t('about.body_1') }} />
            <motion.p variants={fadeUp} dangerouslySetInnerHTML={{ __html: t('about.body_2') }} />
            <motion.p variants={fadeUp} dangerouslySetInnerHTML={{ __html: t('about.body_3') }} />
          </motion.div>

          <motion.div
            className="about__stats"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
          >
            {Object.entries(t('about.stats', { returnObjects: true })).map(([key, stat]) => (
              <motion.div key={key} className="about__stat" variants={fadeUp}>
                <div className="metric metric--accent">{stat.value}</div>
                <div className="metric-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="about__exp"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <div className="about__exp-head">
            <span className="eyebrow">{t('about.experience_eyebrow')}</span>
            <p className="about__exp-note">{t('about.experience_note')}</p>
          </div>

          <ol className="about__timeline">
            {experience.map((item, idx) => (
              <motion.li
                key={`${typeof item.company === 'string' ? item.company : item.company.zh}-${item.period.zh}`}
                className="about__tl-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                <div className="about__tl-period">
                  {isEn ? item.period.en : item.period.zh}
                </div>
                <div className="about__tl-content">
                  <div className="about__tl-role">
                    {isEn ? item.role.en : item.role.zh}
                  </div>
                  <div className="about__tl-company">
                    {typeof item.company === 'string' ? item.company : (isEn ? item.company.en : item.company.zh)}
                    <span className="about__tl-dot">·</span>
                    <span className="about__tl-loc">
                      {isEn ? item.location.en : item.location.zh}
                    </span>
                  </div>
                  <ul className="about__tl-bullets">
                    {(isEn ? item.bullets.en : item.bullets.zh).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
