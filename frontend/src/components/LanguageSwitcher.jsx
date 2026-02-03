import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const languages = [
        { code: 'en', name: 'English', flag: 'US' },
        { code: 'tl', name: 'Tagalog', flag: 'PH' },
        { code: 'vi', name: 'Tiếng Việt', flag: 'VN' },
        { code: 'zh', name: '中文', flag: 'CN' }
    ];

    return (
        <div className="language-switcher">
            <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className="language-select"
            >
                {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;