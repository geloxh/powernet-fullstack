import { useEffect, useState } from 'react';
import './Partners.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    if (window.AOS) window.AOS.init();
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const res = await fetch(`${API_URL}/api/partners`);
      const data = await res.json();
      setPartners(data);
    } catch (error) {
      console.error('Error fetching partners:', error);
    }
  };

  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="hero-content" data-aos="fade-up">
          <div className="section-badge" data-aos="fade-down">
            <i className="fas fa-handshake"></i>
            <span>Strategic Partnerships</span>
          </div>
          <h1 className="hero-title">Our Trusted Partners</h1>
          <p className="hero-description">
            Collaborating with global industry leaders to deliver cutting-edge solutions and drive innovation forward.
          </p>
        </div>
      </section>

      <section className="partners-content">
        <div className="partners-container">
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={partner._id} className="partner-card" data-aos="zoom-in" data-aos-delay={100 + index * 50}>
                <div className="partner-card-inner">
                  <div className="partner-header">
                    <div className="partner-logo">
                      <img src={`/images/index/${partner.img}`} alt={`${partner.name} logo`} />
                    </div>
                    <div className="partner-badge">{partner.category}</div>
                  </div>
                  <div className="partner-content">
                    <h3>{partner.name}</h3>
                    <p>{partner.desc}</p>
                    <div className="partner-specialties">
                      {partner.specialties?.map((specialty, idx) => (
                        <span key={idx} className="specialty">{specialty}</span>
                      ))}
                    </div>
                  </div>
                  <div className="partner-action">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="partner-btn">
                      <span>Learn More</span>
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;