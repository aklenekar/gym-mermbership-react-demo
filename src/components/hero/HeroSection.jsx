import { Link } from "react-router-dom";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <header className="hero">
        <div className="hero-background">
            <div className="hero-overlay"></div>
            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </div>
        <div className="hero-content">
            <div className="hero-text">
                <h1 className="hero-title">
                    <span className="title-line">BREAK YOUR</span>
                    <span className="title-line highlight">LIMITS</span>
                </h1>
                <p className="hero-subtitle">Elite training facilities. World-class coaching. Unstoppable community.</p>
                <div className="hero-cta">
                    <Link to="/signUp" className="btn-hero-primary">Start Your Journey</Link>
                    <a href="#features" className="btn-hero-secondary">Explore More</a>
                </div>
            </div>
            <div className="hero-stats">
                <div className="stat-item">
                    <span className="stat-number">2.5K+</span>
                    <span className="stat-label">Active Members</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">50+</span>
                    <span className="stat-label">Expert Trainers</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Access Available</span>
                </div>
            </div>
        </div>
        <div className="scroll-indicator">
            <div className="scroll-line"></div>
            <span>Scroll</span>
        </div>
    </header>
  );
}
