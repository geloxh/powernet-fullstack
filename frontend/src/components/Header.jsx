import { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../context/AuthContext';
import LanguageSwitcher from './LanguageSwitcher';

import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();
    const { user, logout } = useContext(AuthContext);

    const navItems = [
        { path: '/', label: t('nav.home'), page: 'home' },
        { path: '/about', label: t('nav.about'), page: 'about' },
        { path: '/solutions', label: t('nav.solutions'), page: 'solutions' },
        { path: '/contact', label: t('nav.contact'), page: 'contact' },
        { path: '/projects', label: t('nav.projects'), page: 'projects' }
    ];

    return (
        <header className='main-header'>
            <div className='logo'>
                <Link to="/">
                    <img
                        src="/images/logo.png" 
                        alt="PowerNet Edge Solutions"
                        onError={(e) => e.target.style.display = 'none'}
                    />
                    <h1>{t('common.powernet')}</h1>
                </Link>
            </div>
            <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    {navItems.map(item => (
                        <li key={item.page}>
                            <Link 
                                to={item.path}
                                className={location.pathname === item.path ? 'active' : ''}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    {user ? (
                        <>
                            <li><span className="user-name">Hi, {user.name}</span></li>
                            <li><button onClick={logout} className="auth-btn">Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
                            <li><Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link></li>
                        </>
                    )}
                </ul>
                <LanguageSwitcher />
            </nav>
            <div 
                className='nav-toggle'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                role="button"
                aria-label='Toggle navigation menu'
                aria-expanded={isMenuOpen}>
                <div className='mobile-nav'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;