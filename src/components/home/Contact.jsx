import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { contact } from '../../data/contact';
import './Contact.css';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const channels = [
    { id: 'email', label: t('contact.email'), value: contact.email, href: `mailto:${contact.email}`, icon: '✉' },
    { id: 'phone-cn', label: t('contact.phone_cn'), value: contact.phone.cn, href: `tel:${contact.phone.cn.replace(/\s+/g, '')}`, icon: '☏' },
    { id: 'phone-hk', label: t('contact.phone_hk'), value: contact.phone.hk, href: `tel:${contact.phone.hk.replace(/\s+/g, '')}`, icon: '☏' },
    { id: 'wechat', label: t('contact.wechat'), value: contact.wechat, href: null, icon: '◐' },
    { id: 'resume', label: isEn ? 'Download Resume' : '下载简历', value: `PDF · ${contact.resume.size}`, href: contact.resume.url, icon: '↓', download: contact.resume.filename },
    { id: 'github', label: t('contact.github'), value: contact.github.replace('https://', ''), href: contact.github, icon: '◇' },
    { id: 'linkedin', label: t('contact.linkedin'), value: contact.linkedin.replace('https://', ''), href: contact.linkedin, icon: 'in' },
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="contact__inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h2
            className="contact__headline"
            dangerouslySetInnerHTML={{ __html: t('contact.headline') }}
          />
          <p className="contact__lead">{t('contact.lead')}</p>

          <div className="contact__channels">
            {channels.map((c, i) => (
              <motion.div
                key={c.id}
                className="contact__channel"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    className="contact__channel-link"
                    target={c.download ? '_self' : '_blank'}
                    rel={c.download ? undefined : 'noopener noreferrer'}
                    download={c.download || undefined}
                  >
                    <div className="contact__channel-icon">{c.icon}</div>
                    <div className="contact__channel-body">
                      <div className="contact__channel-label">{c.label}</div>
                      <div className="contact__channel-value">{c.value}</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="contact__channel-arrow">
                      <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ) : (
                  <div className="contact__channel-link contact__channel-link--static">
                    <div className="contact__channel-icon">{c.icon}</div>
                    <div className="contact__channel-body">
                      <div className="contact__channel-label">{c.label}</div>
                      <div className="contact__channel-value">{c.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="contact__location">
            <span className="contact__location-dot" />
            <span>{isEn ? contact.location.en : contact.location.zh}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
