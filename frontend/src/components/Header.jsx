import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home', page: 'home' },
        { path: '/about', label: 'About Us', page: 'about' },
        { path: '/solutions', label: 'Solutions', page: 'solutions' },
        { path: '/contact', label: 'Contact Us', page: 'contact' },
        { path: '/projects', label: 'Use Cases', page: 'projects' }
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
                    <h1>PowerNet</h1>
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
                </ul>
            </nav>
            <div 
                className='nav-toggle'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                role="button"
                aria-label='Toggle navigation menu'
                aria-expanded={'isMenuOpen'}>
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