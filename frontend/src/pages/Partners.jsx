import React, { useEffect } from 'react';
import './Partners.css';

const Partners = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  const partners = [
    { name: 'RUJIE', category: 'Network', desc: 'Leading network infrastructure solutions provider', img: 'ruijie.png', specialties: ['WiFi Solutions', 'SD-WAN', 'Switching'], url: 'https://www.ruijienetworks.com/' },
    { name: 'ZTE', category: 'ICT', desc: 'Global leader in integrated ICT solutions', img: 'zte.png', specialties: ['GPON', 'Data Centers', 'Cloud'], url: 'https://www.zte.com.cn/global/' },
    { name: 'SANGFOR', category: 'Security', desc: 'Advanced cybersecurity and cloud infrastructure', img: 'sangfor.png', specialties: ['Firewall', 'HCI'], url: 'https://www.sangfor.com/' },
    { name: 'LIVECOM', category: 'BSS', desc: 'Business support systems and solutions', img: 'livecom.png', specialties: ['BSS Platform'], url: 'http://www.livecom-axd.com/en/' },
    { name: 'DAHUA', category: 'Security', desc: 'Comprehensive security and surveillance solutions', img: 'dahua.png', specialties: ['IP Cameras', 'NVR', 'Access Control'], url: 'https://www.dahuasecurity.com/ph' },
    { name: 'SKYWORTH', category: 'Connectivity', desc: 'Smart connectivity and digital solutions', img: 'skyworth.png', specialties: ['ONT', 'Set-top Box'], url: 'https://en.skyworthdigital.com/' },
    { name: 'HENGTONG', category: 'Infrastructure', desc: 'Optical and power transmission solutions', img: 'hengtong.png', specialties: ['Fiber Optics', 'Power Cables'], url: 'https://www.hengtonggroup.com/en/' },
    { name: 'YEASTAR', category: 'Communications', desc: 'Unified communications and telephony systems', img: 'yeastar.png', specialties: ['IP-PBX', 'VoIP', 'UC'], url: 'https://www.yeastar.com/' },
    { name: 'SHOTO', category: 'Energy', desc: 'Sustainable energy storage solutions', img: 'shoto.png', specialties: ['Green Energy', 'Battery Systems'], url: 'https://www.shuangdeng.com.cn/list-71.html' }
  ];

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
              <div key={index} className="partner-card" data-aos="zoom-in" data-aos-delay={100 + index * 50}>
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
                      {partner.specialties.map((specialty, idx) => (
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