import { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [settings, setSettings] = useState({ analytics: false, marketing: false });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) setShowBanner(true);
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookieConsent', JSON.stringify({
            essential: true, analytics: true, marketing: true
        }));
        setShowBanner(false);
    };

    const decline = () => {
        localStorage.setItem('cookieConsent', JSON.stringify({
            essential: true, analytics: false, marketing: false
        }));
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
    <>
        <div className="cookie-banner">
            <div className="cookie-text">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
            </div>
            <div className="cookie-buttons">
                <button className="cookie-btn decline-btn" onClick={decline}>Decline</button>
                <button className="cookie-btn settings-btn" onClick={() => setShowModal(true)}>Settings</button>
                <button className="cookie-btn accept-btn" onClick={acceptAll}>Accept All</button>
            </div>
        </div>
      {/* Modal implementation */}
    </>
  );
};

export default CookieBanner;
