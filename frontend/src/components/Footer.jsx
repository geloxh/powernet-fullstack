import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/">
              <img src="/images/logo.png" alt="PowerNet Logo" />
              <span>PowerNet</span>
            </a>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                <li><a href="/solutions">Digital Transformation</a></li>
                <li><a href="/solutions">Network Infrastructure</a></li>
                <li><a href="/solutions">Cybersecurity</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="/about">{t('nav.about')}</a></li>
                <li><a href="/projects">{t('nav.projects')}</a></li>
                <li><a href="/contact">{t('nav.contact')}</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <span className="footer-copyright">© {currentYear} PowerNet Edge Solutions. All Rights Reserved.</span>
          <div className="footer-social">
            {/* Social media icons */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
