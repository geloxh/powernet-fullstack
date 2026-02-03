import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [  isOpen, setIsOpen ]  = useState(false);

    const languages = [
        { code: 'en', name: 'English', flag: 'US' },
        { code: 'tl', name: 'Tagalog', flag: 'PH' },
        { code: 'vi', name: 'Tiếng Việt', flag: 'VN' },
        { code: 'zh', name: '中文', flag: 'CN' }
    ];

    const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];
    
    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode);
    };

    return (
        <div className="language-switcher">
            <button
                className="language-button"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="current-lang">
                    {currentLang.flag} {currentLang.code.toUpperCase()}
                </span>
                <span className={`arrow ${isOpen ? 'open' : '' }`}>▼</span>
            </button>

            {isOpen && (
                <div className="language-dropdown">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            className={`language-option ${lang.code === i18n.language ? 'active' : ''}`}
                            onClick={() => handleLanguageChange(lang.code)}
                        >
                            {lang.flag} {lang.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;