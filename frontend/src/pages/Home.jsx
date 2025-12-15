import React, { useEffect } from 'react';
import './a.css';

const Home = () => {
  useEffect(() => {
    // Initialize AOS if needed
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <main>
      <section id="home" className="hero" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/index/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="hero-content">
          <h2>
            <span>Transforming</span> 
            <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p>We provide tailored solutions that drive long-term value, using the latest technology to help businesses stay competitive and agile in a fast-paced digital world.</p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="section-header">
          <div className="section-badge" data-aos="fade-down">
            <i className="fas fa-building"></i>
            <span>About PowerNet</span>
          </div>
          <h2 data-aos="fade-up">DRIVING DIGITAL TRANSFORMATION</h2>
          <p className="section-description">Empowering businesses with innovative edge solutions across Asia-Pacific</p>
        </div>
        <div className="about-content">
          <div className="intro-card" data-aos="fade-up" data-aos-delay="100">
            <div className="intro-content">
              <h3 data-aos="fade-right" data-aos-delay="200">Our Mission</h3>
              <p>PowerNet Edge Solutions Corporation pioneers cutting-edge technology solutions that transform businesses across industries. We bridge the gap between innovation and implementation, delivering scalable solutions that drive efficiency, productivity, and sustainable growth in today's digital landscape.</p>
              <div className="intro-features" data-aos="fade-right" data-aos-delay="250">
                <div className="feature-item">
                  <i className="fas fa-rocket"></i>
                  <span>Innovation First</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-globe-asia"></i>
                  <span>Regional Expertise</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-shield-alt"></i>
                  <span>Trusted Solutions</span>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img src="/images/index/powernet.png" alt="PowerNet Solutions" />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Leading Edge Technology</h4>
                  <p>Transforming businesses across Hong Kong, Philippines, and Vietnam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="partners" className="partners">
        <div className="section-header">
          <div className="section-badge" data-aos="fade-down">
            <i className="fas fa-handshake"></i>
            <span>Strategic Partnerships</span>
          </div>
          <h2 data-aos="fade-up">TRUSTED TECHNOLOGY PARTNERS</h2>
          <p className="section-description">Collaborating with global industry leaders to deliver cutting-edge solutions across Asia-Pacific</p>
        </div>
        <div className="partners-container">
          <div className="partners-grid">
            {[
              { name: 'Ruijie', desc: 'Network Infrastructure Solutions', img: 'ruijie.png' },
              { name: 'ZTE', desc: 'Global ICT Solutions', img: 'zte.png' },
              { name: 'Sangfor', desc: 'Cyber Security Solutions', img: 'sangfor.png' },
              { name: 'Dahua', desc: 'Security Solutions', img: 'dahua.png' },
              { name: 'Livecom', desc: '5G Remote Expert Service', img: 'livecom.png' },
              { name: 'Hikvision', desc: 'Security Solutions', img: 'hik.png' },
              { name: 'Hengtong', desc: 'Optical & Power Solutions', img: 'hengtong.png' },
              { name: 'Skyworth', desc: 'Connectivity Solutions', img: 'skyworth.png' },
              { name: 'Yeastar', desc: 'Communication Systems', img: 'yeastar.png' },
              { name: 'Shoto', desc: 'Energy Storage Solutions', img: 'shoto.png' },
              { name: 'SRUN', desc: 'Network Solutions', img: 'srun.png' }
            ].map((partner, index) => (
              <div key={index} className="partner-card" data-aos="fade-up" data-aos-delay={100 + index * 50}>
                <div className="partner-logo">
                  <img src={`/images/index/${partner.img}`} alt={partner.name} loading="lazy" />
                </div>
                <div className="partner-info">
                  <h3>{partner.name}</h3>
                  <p>{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experts" className="experts">
        <div className="section-header">
          <div className="section-badge" data-aos="fade-down">
            <i className="fas fa-globe-americas"></i>
            <span>Global Presence</span>
          </div>
          <h2 data-aos="fade-up">REGIONAL EXPERTISE</h2>
          <p className="experts-description">Delivering innovative technology solutions across Asia-Pacific with local expertise and global standards</p>
        </div>
        <div className="experts-grid">
          {[
            { name: 'Hong Kong', desc: 'Regional Headquarters', img: 'hongkong.jpg', badge: 'HQ', features: ['Strategic Hub', 'R&D Center'] },
            { name: 'Philippines', desc: 'Makati Operations', img: 'makati.jpg', badge: 'PH', features: ['Tech Hub', 'Support Center'] },
            { name: 'Vietnam', desc: 'Ho Chi Minh Office', img: 'vietnam.jpg', badge: 'VN', features: ['Innovation Lab', 'Development'] }
          ].map((location, index) => (
            <div key={index} className="expert-card" data-aos="fade-up" data-aos-delay={100 + index * 100}>
              <div className="expert-image">
                <img src={`/images/index/${location.img}`} alt={`${location.name} Office`} loading="lazy" />
                <div className="expert-overlay">
                  <div className="expert-overlay-content">
                    <div className="location-badge">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{location.badge}</span>
                    </div>
                    <h3>{location.name}</h3>
                    <p>{location.desc}</p>
                    <div className="location-features">
                      {location.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="expert-info">
                <h3>{location.name}</h3>
                <p>{location.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
