import React, { useEffect, useState } from 'react';
import './e.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  const projectCategories = [
    {
      id: 'government',
      title: 'Government',
      icon: 'fas fa-university',
      count: '2 Projects',
      projects: [
        {
          icon: 'fas fa-wifi',
          title: 'WiFi Infrastructure for Public Hospitals',
          description: 'Supply and Installation of WiFi Solution for DICT Region 1, 2, 3 and NCR Public Hospitals (WaaS)',
          tags: ['WiFi', 'WaaS', 'Healthcare']
        },
        {
          icon: 'fas fa-network-wired',
          title: 'SDWAN Network Infrastructure',
          description: 'Supply and Installation of POE switches for DICT Region SDWAN Routers for DICT Region 6 Head Office',
          tags: ['SDWAN', 'POE', 'Networking']
        }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      icon: 'fas fa-graduation-cap',
      count: '2 Projects',
      projects: [
        {
          icon: 'fas fa-broadcast-tower',
          title: 'Outdoor WiFi Solutions',
          description: 'Outdoor PoE Solution for WiFi deployment across educational institutions',
          tags: ['Outdoor WiFi', 'PoE']
        },
        {
          icon: 'fas fa-school',
          title: 'Campus Network Infrastructure',
          description: 'Colleges and Universities in the area of Bulacan and Pampanga',
          tags: ['Campus Network', 'Universities']
        }
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      icon: 'fas fa-hospital',
      count: '2 Projects',
      projects: [
        {
          icon: 'fas fa-hospital-alt',
          title: 'Metro Manila Hospital Network',
          description: 'Metro Manila Public Hospitals (52 Sites) - WaaS Solution through Converge',
          tags: ['52 Sites', 'WaaS', 'Converge']
        },
        {
          icon: 'fas fa-fiber-optic',
          title: "St. Luke's Hospital POF Solution",
          description: 'Supply and Commissioning of POF (Power-over-Fiber) WiFi Solution in St. Lukes Hospital- BGC',
          tags: ['POF', 'WiFi', 'BGC']
        }
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Enterprise',
      icon: 'fas fa-building',
      count: '2 Projects',
      projects: [
        {
          icon: 'fas fa-pills',
          title: 'Marketlink Pharmaceutical Office',
          description: 'Supply and Commissioning of POF (Power-over-Fiber) Wi-Fi Solution',
          tags: ['POF', 'Pharmaceutical']
        },
        {
          icon: 'fas fa-laptop-code',
          title: 'Myriad ICT Services',
          description: 'Supply and Commissioning of POF (Power-over-Fiber) Wi-Fi Solution in corporate office',
          tags: ['POF', 'ICT Services']
        }
      ]
    }
  ];

  const newsItems = [
    {
      id: 'news1',
      title: "St. Luke's Medical Center Partners with Converge ICT",
      excerpt: 'Revolutionary healthcare technology deployment enhances patient care through advanced network infrastructure and digital solutions.',
      image: '/images/project/news2.png',
      category: 'Healthcare',
      date: 'February 18, 2025',
      readTime: '3 min read',
      tags: ['Healthcare', 'POF Technology', 'BGC']
    },
    {
      id: 'news2',
      title: 'Davao Airport Gets 5-Gigabyte Fiber Internet',
      excerpt: 'Converge ICT Solutions delivers ultra-high-speed connectivity to enhance passenger experience and operational efficiency at Davao International Airport.',
      image: '/images/project/news1.jpg',
      category: 'Transportation',
      date: 'November 22, 2024',
      readTime: '4 min read',
      tags: ['Airport', 'Fiber Internet', '5GB Speed']
    }
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleViewClients = (category) => {
    setModalContent(category);
    setShowModal(true);
  };

  return (
    <>
      <section className="project-hero-banner">
        <div className="hero-overlay">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-tag">
              <i className="fas fa-star"></i>
              <span>Excellence in Technology</span>
            </div>
            <h1 className="hero-heading">Powering Digital Innovation Across Industries</h1>
            <p className="hero-description">From government institutions to private enterprises, we deliver robust network solutions that transform how organizations connect, communicate, and grow in the digital age.</p>
            <div className="hero-features">
              {['Enterprise-Grade Solutions', '24/7 Technical Support', 'Nationwide Coverage'].map((feature, index) => (
                <div key={index} className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="hero-cta">
              <button className="cta-btn primary">
                <i className="fas fa-play"></i>
                <span>View Our Work</span>
              </button>
              <button className="cta-btn secondary">
                <i className="fas fa-envelope"></i>
                <span>Contact Us</span>
              </button>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="tech-showcase">
              {[
                { icon: 'fas fa-wifi', label: 'WiFi Solutions' },
                { icon: 'fas fa-network-wired', label: 'Network Infrastructure' },
                { icon: 'fas fa-shield-alt', label: 'Security Systems' },
                { icon: 'fas fa-cloud', label: 'Cloud Solutions' }
              ].map((tech, index) => (
                <div key={index} className="tech-circle">
                  <div className="tech-icon"><i className={tech.icon}></i></div>
                  <div className="tech-label">{tech.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">   
        <div className="project-filters">
          {['all', 'government', 'healthcare', 'education', 'corporate', 'infrastructure'].map((filter) => (
            <button 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter === 'all' ? 'All Projects' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        {projectCategories.map((category, index) => (
          <div key={category.id} className="project-category modern-project-card" data-category={category.id}>
            <div className="category-header">
              <div className="category-icon">
                <i className={category.icon}></i>
              </div>
              <div className="category-info">
                <h2 className="category-title">{category.title}</h2>
                <span className="project-count">{category.count}</span>
              </div>
              <div className="category-actions">
                <button 
                  className="view-institutions-btn" 
                  onClick={() => handleViewClients(category.id)}
                >
                  <i className="fas fa-eye"></i>
                  <span>View Clients</span>
                </button>
                <button className="expand-btn">
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
            <div className="project-details">
              {category.projects.map((project, idx) => (
                <div key={idx} className="project-item">
                  <div className="project-icon"><i className={project.icon}></i></div>
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="news-section">
        <div className="news-hero">
          <div className="news-badge">
            <i className="fas fa-newspaper"></i>
            <span>Latest Updates</span>
          </div>
          <h1>Success Stories & Achievements</h1>
          <p className="subtitle">Discover our latest project deployments and industry partnerships</p>
        </div>
        
        <div className="news-container">
          {newsItems.map((news, index) => (
            <div key={news.id} className="news-item modern-news-card">
              <div className="news-image">
                <img src={news.image} alt={news.title} />
                <div className="news-overlay">
                  <div className="news-category">{news.category}</div>
                  <button className="news-expand-btn">
                    <i className="fas fa-expand-alt"></i>
                  </button>
                </div>
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="date">
                    <i className="fas fa-calendar"></i>
                    {news.date}
                  </span>
                  <span className="read-time">
                    <i className="fas fa-clock"></i>
                    {news.readTime}
                  </span>
                </div>
                <h3>{news.title}</h3>
                <p className="excerpt">{news.excerpt}</p>
                <div className="news-tags">
                  {news.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="read-more-btn">
                  <span>Read Full Story</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="institutions-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Institutions We Serve</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <p>Client information for {modalContent} category</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
