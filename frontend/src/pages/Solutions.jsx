import React, { useEffect } from 'react';
import './c.css';

const Solutions = () => {
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

  const solutions = [
    {
      category: "Infrastructure",
      title: "Network Infrastructure Solution",
      description: "Enterprise-grade systems for robust connectivity and optimal performance",
      image: "/images/about/Network Infrastructure Solution.jpg",
      icon: "fas fa-network-wired",
      features: ["Scalable", "Secure", "24/7 Support"]
    },
    {
      category: "Data Center",
      title: "Datacenter Solution",
      description: "State-of-the-art infrastructure for optimal performance and reliability",
      image: "/images/about/Datacenter Solution.jpg",
      icon: "fas fa-server",
      features: ["High Availability", "Cloud Ready", "Redundant"]
    },
    {
      category: "Security",
      title: "Security & WAN Optimization",
      description: "Advanced security measures with optimized network performance",
      image: "/images/about/Security and WAN Optimization Solution.jpg",
      icon: "fas fa-shield-alt",
      features: ["AI-Powered", "Real-time", "Compliance"]
    },
    {
      category: "Communication",
      title: "Telephony & Collaborations",
      description: "Integrated communication solutions for enhanced business collaboration",
      image: "/images/about/Telephony and Collaborations Solution.jpg",
      icon: "fas fa-phone-alt",
      features: ["Unified", "Mobile Ready", "HD Quality"]
    }
  ];

  return (
    <>
      <section className="solutions-hero">
        <canvas id="particleCanvas"></canvas>
        <div className="hero-overlay"></div>
        <div className="hero-content" data-aos="fade-up" data-aos-delay="100">
          <div className="hero-badge" data-aos="fade-down">
            <i className="fas fa-rocket"></i>
            <span>Innovation Leaders</span>
          </div>
          <h1 className="hero-title">Your Trusted Partner in <span className="highlight-text">Innovation</span></h1>
          <div className="hero-divider"></div>
          <p className="hero-description">Experience excellence with our expert team of professionals dedicated to delivering cutting-edge solutions for your business needs</p>
          <div className="hero-stats">
            {[
              { icon: 'fas fa-globe', title: 'Global Reach', desc: 'Serving clients across Asia', number: '3+' },
              { icon: 'fas fa-handshake', title: 'Trusted Partners', desc: 'Industry-leading collaborations', number: '50+' },
              { icon: 'fas fa-chart-line', title: 'Innovation Focus', desc: 'Cutting-edge solutions', number: '100%' }
            ].map((stat, index) => (
              <div key={index} className="stat-item" data-aos="fade-up" data-aos-delay={150 + index * 50}>
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-content">
                  <h3>{stat.title}</h3>
                  <p>{stat.desc}</p>
                  <div className="stat-number">{stat.number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">
              <i className="fas fa-handshake"></i>
              Strategic Partnerships
            </span>
            <h2 className="partners-title">Trusted Technology Partners</h2>
            <p className="partners-description">
              Collaborating with global industry leaders to deliver cutting-edge solutions and drive innovation forward.
            </p>
          </div>
          
          <div className="partners-showcase" data-aos="fade-up" data-aos-delay="200">
            <div className="partners-grid">
              {partners.map((partner, index) => (
                <div key={index} className="partner-card" data-partner={partner.name.toLowerCase()} data-aos="zoom-in" data-aos-delay={300 + index * 50}>
                  <div className="partner-card-inner">
                    <div className="partner-header">
                      <div className="partner-logo">
                        <img src={`/images/index/${partner.img}`} alt={`${partner.name} company logo`} loading="lazy" />
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
                        <span>Explore Partnership</span>
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="solutions-section">
        <div className="solutions-container">
          <div className="section-badge" data-aos="fade-down">
            <i className="fas fa-cogs"></i>
            <span>Our Solutions</span>
          </div>
          <h2 className="solutions-title" data-aos="fade-up">Innovative Technology Solutions</h2>
          <div className="solutions-underline"></div>
          <div className="solutions-grid" data-aos="fade-up" data-aos-delay="100">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card" data-solution={solution.category.toLowerCase()} data-aos="fade-up" data-aos-delay={150 + index * 50}>
                <div className="solution-image">
                  <img src={solution.image} alt={solution.title} />
                  <div className="solution-overlay">
                    <i className={solution.icon}></i>
                  </div>
                </div>
                <div className="solution-content">
                  <div className="solution-category">{solution.category}</div>
                  <h3>{solution.title}</h3>
                  <p className="solution-brief">{solution.description}</p>
                  <div className="solution-features">
                    {solution.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <button className="learn-more-btn">
                    <span>Explore More</span>
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
