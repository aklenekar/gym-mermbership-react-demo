import PageHeader from "../pageHeader/PageHeader";
import "./TrainersSection.css";

export default function TrainersSection() {
  return (
    <>
      {/* Trainers Header */}
      <PageHeader title="MEET YOUR COACHES" subTitle="Expert trainers dedicated to your success" />

      {/* Lead Trainers */}
      <section className="lead-trainers-section">
        <div className="container">
          <h2 className="section-title">HEAD COACHES</h2>

          <div className="lead-trainers-grid">
            <div className="trainer-profile-card">
              <div className="trainer-profile-image">
                <div className="trainer-image-placeholder">
                  <span className="trainer-initials">SM</span>
                </div>
                <div className="trainer-badge">HEAD COACH</div>
              </div>
              <div className="trainer-profile-info">
                <h3>Sarah Mitchell</h3>
                <p className="trainer-specialty">Strength & Conditioning</p>
                <div className="trainer-credentials">
                  <span className="credential">CSCS</span>
                  <span className="credential">NASM-CPT</span>
                  <span className="credential">15+ Years</span>
                </div>
                <p className="trainer-bio">
                  Former Olympic weightlifting coach with expertise in strength
                  programming and athletic performance. Sarah has trained
                  professional athletes and specializes in functional movement
                  patterns.
                </p>
                <div className="trainer-stats">
                  <div className="trainer-stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Clients Trained</span>
                  </div>
                  <div className="trainer-stat">
                    <span className="stat-number">4.9</span>
                    <span className="stat-label">Rating</span>
                  </div>
                </div>
                <div className="trainer-actions">
                  <a href="#" className="btn-trainer-primary">
                    Book Session
                  </a>
                  <a href="#" className="btn-trainer-secondary">
                    View Schedule
                  </a>
                </div>
              </div>
            </div>

            <div className="trainer-profile-card">
              <div className="trainer-profile-image">
                <div className="trainer-image-placeholder">
                  <span className="trainer-initials">MR</span>
                </div>
                <div className="trainer-badge">HEAD COACH</div>
              </div>
              <div className="trainer-profile-info">
                <h3>Mike Rodriguez</h3>
                <p className="trainer-specialty">HIIT & Conditioning</p>
                <div className="trainer-credentials">
                  <span className="credential">ACE</span>
                  <span className="credential">ISSA</span>
                  <span className="credential">12+ Years</span>
                </div>
                <p className="trainer-bio">
                  High-intensity training specialist focused on metabolic
                  conditioning and body transformation. Mike's bootcamp classes
                  are legendary for delivering results.
                </p>
                <div className="trainer-stats">
                  <div className="trainer-stat">
                    <span className="stat-number">400+</span>
                    <span className="stat-label">Clients Trained</span>
                  </div>
                  <div className="trainer-stat">
                    <span className="stat-number">5.0</span>
                    <span className="stat-label">Rating</span>
                  </div>
                </div>
                <div className="trainer-actions">
                  <a href="#" className="btn-trainer-primary">
                    Book Session
                  </a>
                  <a href="#" className="btn-trainer-secondary">
                    View Schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Trainers Grid */}
      <section className="all-trainers-section">
        <div className="container">
          <h2 className="section-title">OUR TRAINING TEAM</h2>

          <div className="trainers-grid">
            <div className="trainer-card">
              <div className="trainer-card-image">
                <div className="trainer-image-small">
                  <span className="trainer-initials-small">EC</span>
                </div>
              </div>
              <div className="trainer-card-content">
                <h4>Emma Chen</h4>
                <p className="specialty">Yoga & Mobility</p>
                <div className="credentials-compact">
                  <span>RYT-500</span>
                  <span>8 Years</span>
                </div>
                <p className="trainer-description">
                  Specializes in vinyasa flow and restorative yoga with emphasis
                  on injury prevention.
                </p>
                <a href="#" className="btn-book-compact">
                  Book Session
                </a>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-card-image">
                <div className="trainer-image-small">
                  <span className="trainer-initials-small">TJ</span>
                </div>
              </div>
              <div className="trainer-card-content">
                <h4>Tom Jackson</h4>
                <p className="specialty">Powerlifting</p>
                <div className="credentials-compact">
                  <span>USAPL Coach</span>
                  <span>10 Years</span>
                </div>
                <p className="trainer-description">
                  Competitive powerlifter focused on maximal strength
                  development and technique.
                </p>
                <a href="#" className="btn-book-compact">
                  Book Session
                </a>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-card-image">
                <div className="trainer-image-small">
                  <span className="trainer-initials-small">LP</span>
                </div>
              </div>
              <div className="trainer-card-content">
                <h4>Lisa Parker</h4>
                <p className="specialty">Nutrition & Weight Loss</p>
                <div className="credentials-compact">
                  <span>RD, LD</span>
                  <span>7 Years</span>
                </div>
                <p className="trainer-description">
                  Registered dietitian offering personalized meal planning and
                  nutritional guidance.
                </p>
                <a href="#" className="btn-book-compact">
                  Book Session
                </a>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-card-image">
                <div className="trainer-image-small">
                  <span className="trainer-initials-small">DK</span>
                </div>
              </div>
              <div className="trainer-card-content">
                <h4>David Kim</h4>
                <p className="specialty">Boxing & MMA</p>
                <div className="credentials-compact">
                  <span>USA Boxing</span>
                  <span>9 Years</span>
                </div>
                <p className="trainer-description">
                  Former amateur boxer specializing in combat sports
                  conditioning and technique.
                </p>
                <a href="#" className="btn-book-compact">
                  Book Session
                </a>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-card-image">
                <div className="trainer-image-small">
                  <span className="trainer-initials-small">JW</span>
                </div>
              </div>
              <div className="trainer-card-content">
                <h4>Jessica White</h4>
                <p className="specialty">Pilates & Core</p>
                <div className="credentials-compact">
                  <span>PMA-CPT</span>
                  <span>6 Years</span>
                </div>
                <p className="trainer-description">
                  Certified Pilates instructor focused on core strength and
                  postural alignment.
                </p>
                <a href="#" className="btn-book-compact">
                  Book Session
                </a>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-card-image">
                <div className="trainer-image-small">
                  <span className="trainer-initials-small">AB</span>
                </div>
              </div>
              <div className="trainer-card-content">
                <h4>Alex Brown</h4>
                <p className="specialty">Sports Performance</p>
                <div className="credentials-compact">
                  <span>CSCS</span>
                  <span>11 Years</span>
                </div>
                <p className="trainer-description">
                  Athletic performance coach working with high school and
                  college athletes.
                </p>
                <a href="#" className="btn-book-compact">
                  Book Session
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="specializations-section">
        <div className="container">
          <h2 className="section-title">TRAINING SPECIALIZATIONS</h2>
          <p className="section-subtitle">
            Find the perfect coach for your goals
          </p>

          <div className="specializations-grid">
            <div className="specialization-card">
              <div className="spec-icon">💪</div>
              <h3>Strength Training</h3>
              <p>
                Build muscle, increase power, and develop maximal strength with
                our certified strength coaches.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">🔥</div>
              <h3>Weight Loss</h3>
              <p>
                Achieve sustainable fat loss through personalized training and
                nutrition guidance.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">⚡</div>
              <h3>Athletic Performance</h3>
              <p>
                Enhance speed, agility, and sport-specific skills for
                competitive athletes.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">🧘</div>
              <h3>Mobility & Recovery</h3>
              <p>
                Improve flexibility, reduce pain, and optimize movement
                patterns.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">🥊</div>
              <h3>Combat Sports</h3>
              <p>
                Learn boxing, kickboxing, and MMA techniques with experienced
                fighters.
              </p>
            </div>

            <div className="specialization-card">
              <div className="spec-icon">🎯</div>
              <h3>Functional Fitness</h3>
              <p>
                Train movements that translate to everyday life and overall
                wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="trainers-cta-section">
        <div className="cta-content">
          <h2>Ready to Work With a Coach?</h2>
          <p>Schedule your complimentary consultation today</p>
          <div className="cta-buttons">
            <a href="contact.html" className="btn-cta">
              Book Free Consultation
            </a>
            <a href="pricing.html" className="btn-cta-secondary">
              View Training Packages
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
