import React, { useEffect } from 'react';
import './Careers.css';

const Careers = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  const positions = [
    {
      title: 'Senior Network Engineer',
      department: 'Engineering',
      location: 'Hong Kong',
      type: 'Full-time',
      description: 'Lead network infrastructure projects and implement cutting-edge solutions for enterprise clients.',
      requirements: ['5+ years experience', 'CCNP/CCIE certified', 'SD-WAN expertise']
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Solutions',
      location: 'Philippines',
      type: 'Full-time',
      description: 'Design and implement cloud infrastructure solutions for regional clients.',
      requirements: ['AWS/Azure certified', 'Kubernetes experience', '3+ years cloud architecture']
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Vietnam',
      type: 'Full-time',
      description: 'Protect client infrastructure and implement security best practices.',
      requirements: ['Security certifications', 'Firewall management', 'Threat analysis']
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Hong Kong',
      type: 'Full-time',
      description: 'Drive technical sales and build relationships with enterprise clients.',
      requirements: ['Technical background', 'Sales experience', 'Client management']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Automate deployment pipelines and maintain infrastructure as code.',
      requirements: ['CI/CD expertise', 'Docker/Kubernetes', 'Scripting skills']
    },
    {
      title: 'Technical Support Engineer',
      department: 'Support',
      location: 'Philippines',
      type: 'Full-time',
      description: 'Provide technical support and troubleshooting for client systems.',
      requirements: ['Networking knowledge', 'Customer service', 'Problem-solving']
    }
  ];

  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="hero-content" data-aos="fade-up">
          <div className="section-badge" data-aos="fade-down">
            <i className="fas fa-briefcase"></i>
            <span>Join Our Team</span>
          </div>
          <h1 className="hero-title">Build Your Career with PowerNet</h1>
          <p className="hero-description">
            Join a dynamic team driving digital transformation across Asia-Pacific. We're looking for passionate innovators ready to make an impact.
          </p>
        </div>
      </section>

      <section className="careers-content">
        <div className="careers-container">
          <div className="careers-intro" data-aos="fade-up">
            <h2>Why Work With Us?</h2>
            <div className="benefits-grid">
              <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
                <i className="fas fa-rocket"></i>
                <h3>Innovation</h3>
                <p>Work with cutting-edge technology</p>
              </div>
              <div className="benefit-card" data-aos="fade-up" data-aos-delay="150">
                <i className="fas fa-users"></i>
                <h3>Growth</h3>
                <p>Continuous learning opportunities</p>
              </div>
              <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-globe-asia"></i>
                <h3>Global Impact</h3>
                <p>Regional projects and exposure</p>
              </div>
              <div className="benefit-card" data-aos="fade-up" data-aos-delay="250">
                <i className="fas fa-heart"></i>
                <h3>Work-Life Balance</h3>
                <p>Flexible and supportive culture</p>
              </div>
            </div>
          </div>

          <div className="positions-section">
            <h2 data-aos="fade-up">Open Positions</h2>
            <div className="positions-grid">
              {positions.map((position, index) => (
                <div key={index} className="position-card" data-aos="zoom-in" data-aos-delay={100 + index * 50}>
                  <div className="position-header">
                    <div className="position-title-group">
                      <h3>{position.title}</h3>
                      <span className="department-badge">{position.department}</span>
                    </div>
                    <div className="position-meta">
                      <span className="location">
                        <i className="fas fa-map-marker-alt"></i>
                        {position.location}
                      </span>
                      <span className="type">{position.type}</span>
                    </div>
                  </div>
                  <div className="position-content">
                    <p>{position.description}</p>
                    <div className="requirements">
                      <h4>Requirements:</h4>
                      <ul>
                        {position.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="position-action">
                    <button className="apply-btn">
                      <span>Apply Now</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
