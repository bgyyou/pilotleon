import { useTranslation } from 'react-i18next';
import './Footer.css';

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__brand-mark">L</span>
            <span className="footer__brand-text">eon Zheng</span>
          </div>
          <p className="footer__tagline">
            {i18n.language === 'zh'
              ? '做出能上线的 AI 产品。'
              : 'I ship AI products that actually launch.'}
          </p>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">{t('footer.copyright')}</span>
          <span className="footer__divider">·</span>
          <span className="footer__meta">
            {t('footer.last_updated')}: 2026-07
          </span>
        </div>
      </div>
    </footer>
  );
}
