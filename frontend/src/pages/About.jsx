import React, { useEffect } from 'react';
import './b.css';

const About = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <div className="about-section">
      <div className="about-container">
        <div className="section-badge" data-aos="fade-down">
          <i className="fas fa-users"></i>
          <span>About PowerNet</span>
        </div>
        <h1 className="about-title" data-aos="fade-up">WHO WE ARE</h1>
        <div className="about-content-wrapper">
          <div className="about-text" data-aos="fade-right" data-aos-delay="200">
            <div className="text-highlight">
              <i className="fas fa-rocket"></i>
              <p><strong>PowerNet Edge Solutions Corp., Phils</strong> was established with the goal to address the evolving needs of businesses across various industries, helping them leverage cutting-edge technologies to improve efficiency, enhance productivity, and achieve sustainable growth.</p>
            </div>
            <div className="text-highlight">
              <i className="fas fa-globe-asia"></i>
              <p>With offices in <span className="location-tag">Hong Kong</span>, <span className="location-tag">Philippines</span> and <span className="location-tag">Vietnam</span>, we are focused on providing tailored solutions that drive long-term value, leveraging the latest technology stacks to help businesses stay competitive and agile in today's fast-paced digital landscape.</p>
            </div>
          </div>
          <div className="about-image" data-aos="fade-left" data-aos-delay="300">
            <img src="/images/about/about-image.jpg" alt="Team collaboration meeting" />
          </div>
        </div>
      </div>

      <div className="vision-mission-section">
        <div className="vm-container">
          <div className="vm-card vision-box" data-aos="fade-up" data-aos-delay="100">
            <div className="vm-icon">
              <i className="fas fa-eye"></i>
            </div>
            <h2>VISION</h2>
            <div className="vm-underline"></div>
            <p>With an eye toward the future, PowerNet Edge Solutions Corp. is committed to setting our sights for greatest potential, developing solutions that not only fit today's demands but also for the needs of tomorrow.</p>
            <div className="vm-image">
              <div className="vm-image-overlay">
                <div className="vm-overlay-content">
                  <i className="fas fa-lightbulb"></i>
                  <span>Innovation</span>
                </div>
              </div>
              <img src="/images/about/team-collaboration.jpg" alt="Team collaboration in meeting" />
            </div>
          </div>
          <div className="vm-card mission-box" data-aos="fade-up" data-aos-delay="150">
            <div className="vm-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h2>MISSION</h2>
            <div className="vm-underline"></div>
            <p>To support the market with the rapidly evolving trend in ICT and Telecommunication goods and services. With the best in class technology and solutions, coupled by highly skilled and empowered staff for installation, operation and maintenance, PowerNet Edge Solutions Corp. seeks to deliver quality assurance services.</p>
            <div className="vm-image">
              <div className="vm-image-overlay">
                <div className="vm-overlay-content">
                  <i className="fas fa-rocket"></i>
                  <span>Excellence</span>
                </div>
              </div>
              <img src="/images/about/team-meeting.jpg" alt="Team working outdoors" />
            </div>
          </div>
        </div>
      </div>

      <div className="principles-section">
        <div className="section-badge" data-aos="fade-down">
          <i className="fas fa-compass"></i>
          <span>Core Values</span>
        </div>
        <h2 className="principles-title" data-aos="fade-up">Our guiding principles shape our actions and decisions.</h2>
        <div className="principles-grid" data-aos="fade-up" data-aos-delay="100">
          {[
            {
              icon: "fas fa-hands-helping",
              title: "RESPECT",
              description: "We respect the traditions and ideas of our people which are essential in maintaining a progressive environment. We recognize that employees make a company what it is and what it can be.",
              highlight: "People First"
            },
            {
              icon: "fas fa-hand-holding-heart",
              title: "RESPONSIBILITY",
              description: "It is our duty to maintain and perform at our own accord the expectations of our clients / customers towards their needs and the quality assurance service that they deserve.",
              highlight: "Client Excellence"
            },
            {
              icon: "fas fa-shield-alt",
              title: "INTEGRITY",
              description: "We have an intuitive sense of honesty and truthfulness in regards to the motivations of our own actions & decisions.",
              highlight: "Honest Actions"
            }
          ].map((principle, index) => (
            <div key={index} className="principle-card" data-aos="fade-up" data-aos-delay={150 + index * 50}>
              <div className="principle-icon"><i className={principle.icon}></i></div>
              <div className="principle-underline"></div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
              <div className="principle-highlight">{principle.highlight}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="solutions-section">
        <div className="solutions-container">
          <div className="section-badge" data-aos="fade-down">
            <i className="fas fa-cogs"></i>
            <span>Our Solutions</span>
          </div>
          <h2 className="solutions-title" data-aos="fade-up">Innovative Technology Solutions</h2>
          <div className="solutions-underline"></div>
          <div className="solutions-grid" data-aos="fade-up" data-aos-delay="100">
            {[
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
            ].map((solution, index) => (
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
    </div>
  );
};

export default About;
