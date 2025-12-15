import React, { useEffect, useState } from 'react';
import './d.css';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  });

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-hero">
          <h1 data-aos="fade-up">Connect With Us</h1>
          <p data-aos="fade-up" data-aos-delay="100">Choose how you'd like to get in touch</p>
        </div>
        
        <div className="contact-options">
          <div className="contact-card modern-card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h3>Quick Inquiry</h3>
            <p>Get instant answers to your questions about our services and solutions.</p>
            
            <div className="inquiry-form">
              <select id="inquiry-type" className="modern-select">
                <option value="General Inquiry">General Inquiry</option>
                <option value="Product Information">Product Information</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Sales Inquiry">Sales Inquiry</option>
                <option value="Service Request">Service Request</option>
              </select>
              
              <div className="quick-contact-methods">
                <button className="contact-method-btn primary">
                  <i className="fas fa-envelope"></i>
                  <span>Send Email</span>
                </button>
                <button className="contact-method-btn secondary">
                  <i className="fas fa-phone"></i>
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="contact-card modern-card" data-aos="fade-up" data-aos-delay="300">
            <div className="card-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3>Partnership Opportunities</h3>
            <p>Join our growing network of partners and unlock new business opportunities.</p>
            
            <div className="partnership-benefits">
              {['Exclusive Resources', 'Technical Support', 'Marketing Materials'].map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <button onClick={() => setShowModal(true)} className="contact-button modern-btn">
              <span>Start Partnership</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          
          <div className="contact-card modern-card" data-aos="fade-up" data-aos-delay="400">
            <div className="card-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>Need immediate assistance? Our support team is here to help you around the clock.</p>
            
            <div className="support-stats">
              <div className="stat-item">
                <span className="stat-number">2hrs</span>
                <span className="stat-label">Response Time</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
            
            <div className="support-actions">
              <button className="contact-method-btn primary">
                <i className="fas fa-comment-dots"></i>
                <span>Live Chat</span>
              </button>
              <button className="contact-method-btn secondary">
                <i className="fas fa-ticket-alt"></i>
                <span>Submit Ticket</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="section-header">
          <h2 data-aos="fade-up">Find Us Here</h2>
          <p data-aos="fade-up" data-aos-delay="100">Located in the business district of Makati City</p>
        </div>
        <div className="location-container">
          <div className="map-container" data-aos="fade-right" data-aos-delay="150">
            <div className="map-overlay">
              <button className="map-fullscreen-btn">
                <i className="fas fa-expand"></i>
                <span>View Fullscreen</span>
              </button>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7603391806!2d121.02162087589905!3d14.558873185745566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90c5f2b4f7b%3A0x6e57b44f85777f41!2sAntel%20Corporate%20Center!5e0!3m2!1sen!2sph!4v1705931358398!5m2!1sen!2sph"
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="address-info">
            <div className="address-card modern-location-card" data-aos="fade-left" data-aos-delay="200">
              <div className="card-header">
                <div className="company-logo">
                  <i className="fas fa-building"></i>
                </div>
                <div className="company-info">
                  <h3>PowerNet Edge Solutions</h3>
                  <span className="company-type">Technology Solutions Provider</span>
                </div>
              </div>
              
              <div className="address-details">
                <div className="detail-item clickable" data-action="copy-address">
                  <div className="detail-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Address</span>
                    <p>121 Valero, Makati, 1227 Kalakhang Maynila</p>
                  </div>
                  <div className="detail-action">
                    <i className="fas fa-copy"></i>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-landmark"></i>
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">Building</span>
                    <p>Antel Corporate Center</p>
                  </div>
                </div>
                
                <div className="detail-item">
                  <div className="detail-icon">
                    <i className="fas fa-city"></i>
                  </div>
                  <div className="detail-content">
                    <span className="detail-label">City</span>
                    <p>Makati City, Metro Manila</p>
                  </div>
                </div>
              </div>
              
              <div className="office-hours">
                <div className="hours-header">
                  <i className="fas fa-clock"></i>
                  <h4>Office Hours</h4>
                </div>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">8:30 AM - 5:30 PM 24/7 Support</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">8:30 AM - 5:30 PM 24/7 Support</span>
                  </div>
                  <div className="hours-item closed">
                    <span className="day">Sunday</span>
                    <span className="time">8:30 AM - 5:30 PM 24/7 Support</span>
                  </div>
                </div>
              </div>
              
              <div className="location-actions">
                <button className="location-btn primary">
                  <i className="fas fa-calendar-plus"></i>
                  <span>Schedule Visit</span>
                </button>
                <button className="location-btn secondary">
                  <i className="fas fa-share-alt"></i>
                  <span>Share Location</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Partnership Application</h2>
              <span onClick={() => setShowModal(false)} className="close">&times;</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="company-name">Company Name *</label>
                <input 
                  type="text" 
                  name="companyName" 
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-name">Contact Person *</label>
                <input 
                  type="text" 
                  name="contactName" 
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="partnership-type">Partnership Type *</label>
                <select 
                  name="partnershipType" 
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Partnership Type</option>
                  <option value="Reseller">Reseller Partner</option>
                  <option value="Technology">Technology Partner</option>
                  <option value="Service">Service Partner</option>
                  <option value="Strategic">Strategic Alliance</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell us about your business</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your business and how you'd like to partner with us..."
                />
              </div>
              <div className="form-actions">
                <button type="button" onClick={() => setShowModal(false)} className="btn-cancel">Cancel</button>
                <button type="submit" className="btn-submit">Submit Application</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
