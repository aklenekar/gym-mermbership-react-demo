import "./FeatureSection.css";

export default function FeatureSection() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">WHY APEX?</h2>
          <p className="section-subtitle">More than a gym. It's a movement.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>State-of-the-Art Equipment</h3>
            <p>
              Latest technology and premium equipment for maximum performance
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personal Training</h3>
            <p>One-on-one coaching tailored to your specific goals and needs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>Group classNamees</h3>
            <p>High-energy sessions including HIIT, yoga, spinning, and more</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💪</div>
            <h3>Recovery Zone</h3>
            <p>Sauna, ice baths, and massage therapy for optimal recovery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
