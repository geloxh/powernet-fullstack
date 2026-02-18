import { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { user, logout } = useContext(AuthContext);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    };

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-right">
                    <Link to="/partners">{t('header.partners', 'Partners')}</Link>
                    <Link to="/contact">{t('header.contact', 'Contact')}</Link>
                    <LanguageSwitcher />
                    {user ? (
                        <button onClick={logout} className="top-link" aria-label={t('header.logout', 'Log out')}>
                            {t('header.logout', 'Log out')}
                        </button>
                    ) : (
                        <Link to="/login">{t('header.login', 'Log in')}</Link>
                    )}
                </div>
            </div>

            {/* Main Header */}
            <header className="main-header">
                <div className="logo">
                    <Link to="/" aria-label={t('header.home', 'Home')}>
                        <img src="/images/logo.png" alt="PowerNet Edge Solutions" />
                    </Link>
                </div>

                <button className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={t('header-toggleMenu', 'Toggle Menu')}
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label={t('header.mainNav', 'Main navigation')}>
                    <Link to="/careers" className={isActive('/careers') ? 'active' : ''}>
                        {t('header.careers', 'Careers')}
                    </Link>
                    <Link to="/solutions" className={isActive('/solutions') ? 'active' : ''}>
                        {t('headerf.solutions', 'Solutions')}
                    </Link>
                    <Link to="/partners" className={isActive('/partners') ? 'active' : ''}>
                        {t('header.partners', 'Partners')}
                    </Link>
                    <Link to="/news" className={isActive('/news') ? 'active' : ''}>
                        {t('header.news', 'News')}
                    </Link>
                </nav>
                <div className={`right-section ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                        {t('header.about', 'About Us')} 
                    </Link>
                    <form onSubmit={handleSearch} role="search">
                        <input
                            type="search"
                            placeholder={t('header.search', 'Search')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label={t('header.searchLabel', 'Search site')}
                        />
                    </form>
                </div>
            </header>
        </>
    );
};

export default Header;