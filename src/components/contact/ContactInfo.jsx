import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <h2 className="info-title">Contact Information</h2>

      <div className="info-cards">
        <div className="info-card">
          <div className="info-icon">📍</div>
          <div className="info-content">
            <h3>Visit Us</h3>
            <p>123 Fitness Avenue New York, NY 10001 United States</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">📞</div>
          <div className="info-content">
            <h3>Call Us</h3>
            <p>Main: (555) 123-4567 Support: (555) 123-4568 Mon-Sun: 24/7</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">✉️</div>
          <div className="info-content">
            <h3>Email Us</h3>
            <p>info@apexgym.com support@apexgym.com careers@apexgym.com</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">⏰</div>
          <div className="info-content">
            <h3>Opening Hours</h3>
            <p>
              24/7 Access for Members Front Desk: 6am - 10pm Classes: Check
              Schedule
            </p>
          </div>
        </div>
      </div>

      <div className="social-section">
        <h3>Follow Us</h3>
        <div className="social-links-contact">
          <a href="#" className="social-link-contact">
            <span className="social-icon">📱</span>
            <span>Instagram</span>
          </a>
          <a href="#" className="social-link-contact">
            <span className="social-icon">👍</span>
            <span>Facebook</span>
          </a>
          <a href="#" className="social-link-contact">
            <span className="social-icon">🐦</span>
            <span>Twitter</span>
          </a>
          <a href="#" className="social-link-contact">
            <span className="social-icon">▶️</span>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}
