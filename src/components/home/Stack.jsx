import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { stack } from '../../data/stack';
import './Stack.css';

export default function Stack() {
  const { t } = useTranslation();
  const groups = t('stack.groups', { returnObjects: true });

  return (
    <section className="stack section" id="stack">
      <div className="container">
        <motion.div
          className="stack__head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">{t('stack.eyebrow')}</span>
          <h2
            className="stack__headline"
            dangerouslySetInnerHTML={{ __html: t('stack.headline') }}
          />
          <p className="stack__lead">{t('stack.lead')}</p>
        </motion.div>

        <div className="stack__groups">
          {stack.map((group, gIdx) => (
            <motion.div
              key={group.id}
              className="stack__group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: gIdx * 0.08 }}
            >
              <div className="stack__group-head">
                <span className="stack__group-name">{groups[group.id]}</span>
                <span className="stack__group-count">{group.items.length}</span>
              </div>
              <div className="stack__items">
                {group.items.map((item) => (
                  <div key={item.name} className="stack__item">
                    <div className="stack__item-name">{item.name}</div>
                    <div className="stack__item-bar">
                      <motion.div
                        className="stack__item-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                    <div className="stack__item-level">{item.level}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
