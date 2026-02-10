import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span className="logo-apex">APEX</span>
              <span className="logo-gym">GYM</span>
            </div>
            <p className="footer-desc">
              Elevate your fitness to the apex of performance.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                IG
              </a>
              <a href="#" className="social-link">
                FB
              </a>
              <a href="#" className="social-link">
                TW
              </a>
              <a href="#" className="social-link">
                YT
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/price">Pricing</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Strength Training</a>
              </li>
              <li>
                <a href="#">Cardio & Conditioning</a>
              </li>
              <li>
                <a href="#">Yoga & Mobility</a>
              </li>
              <li>
                <a href="#">Personal Training</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>123 Fitness Ave, NY 10001</li>
              <li>info@apexgym.com</li>
              <li>(555) 123-4567</li>
              <li>Mon-Sun: 24/7</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 APEX GYM. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
