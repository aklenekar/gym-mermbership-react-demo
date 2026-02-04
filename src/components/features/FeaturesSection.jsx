import { Link } from "react-router-dom";
import "./FeaturesSection.css";
import PageHeader from "../pageHeader/PageHeader";

export default function FeaturesSection() {
  return (
    <>
      {/* Features Header */}
      <PageHeader title="WORLD-CLASS FACILITIES" subTitle="Everything you need to reach your fitness goals" />

      {/* Main Features Grid */}
      <section className="features-main-section">
        <div className="container">
          <div className="features-main-grid">
            {/* Feature 1: Equipment */}
            <div className="feature-main-card">
              <div className="feature-main-image">
                <div className="feature-image-placeholder">
                  <span className="feature-placeholder-icon">🏋️</span>
                </div>
              </div>
              <div className="feature-main-content">
                <h2>Premium Equipment</h2>
                <p>
                  State-of-the-art machines from industry leaders like Hammer
                  Strength, Life Fitness, and Rogue. Over 50,000 sq ft of
                  training space with specialized zones for every workout style.
                </p>
                <ul className="feature-highlights">
                  <li>Latest cardio machines with entertainment systems</li>
                  <li>Full range of free weights up to 150 lbs</li>
                  <li>Olympic lifting platforms</li>
                  <li>Functional training rig</li>
                </ul>
              </div>
            </div>

            {/* Feature 2: Classes */}
            <div className="feature-main-card reverse">
              <div className="feature-main-content">
                <h2>Expert-Led Classes</h2>
                <p>
                  Over 100 weekly classes taught by certified instructors. From
                  high-intensity bootcamps to restorative yoga, find the perfect
                  class for your fitness journey.
                </p>
                <ul className="feature-highlights">
                  <li>HIIT & Bootcamp sessions</li>
                  <li>Yoga, Pilates & Barre</li>
                  <li>Cycling & Indoor Running</li>
                  <li>Boxing & Martial Arts</li>
                </ul>
              </div>
              <div className="feature-main-image">
                <div className="feature-image-placeholder">
                  <span className="feature-placeholder-icon">🎯</span>
                </div>
              </div>
            </div>

            {/* Feature 3: Personal Training */}
            <div className="feature-main-card">
              <div className="feature-main-image">
                <div className="feature-image-placeholder">
                  <span className="feature-placeholder-icon">👤</span>
                </div>
              </div>
              <div className="feature-main-content">
                <h2>Personal Training</h2>
                <p>
                  Work one-on-one with certified trainers who create customized
                  programs tailored to your specific goals, fitness level, and
                  schedule.
                </p>
                <ul className="feature-highlights">
                  <li>Personalized workout plans</li>
                  <li>Nutrition guidance & meal planning</li>
                  <li>Progress tracking & accountability</li>
                  <li>Injury prevention & form correction</li>
                </ul>
              </div>
            </div>

            {/* Feature 4: Recovery */}
            <div className="feature-main-card reverse">
              <div className="feature-main-content">
                <h2>Recovery Zone</h2>
                <p>
                  Recovery is just as important as training. Our dedicated
                  recovery area features premium amenities to help your body
                  heal and perform at its best.
                </p>
                <ul className="feature-highlights">
                  <li>Infrared sauna & steam room</li>
                  <li>Cold plunge & ice baths</li>
                  <li>Massage therapy rooms</li>
                  <li>Stretching & mobility area</li>
                </ul>
              </div>
              <div className="feature-main-image">
                <div className="feature-image-placeholder">
                  <span className="feature-placeholder-icon">💆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="additional-features-section">
        <div className="container">
          <h2 className="section-title">MORE AMENITIES</h2>

          <div className="amenities-grid">
            <div className="amenity-card">
              <div className="amenity-icon">🔒</div>
              <h3>Secure Lockers</h3>
              <p>
                Premium locker rooms with day-use and rental lockers available
              </p>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">🚿</div>
              <h3>Luxury Showers</h3>
              <p>
                Spa-quality showers with complimentary towels and toiletries
              </p>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">📱</div>
              <h3>Member App</h3>
              <p>
                Track workouts, book classes, and manage your membership on the
                go
              </p>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">🅿️</div>
              <h3>Free Parking</h3>
              <p>Underground parking garage with 24/7 access for all members</p>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">🥤</div>
              <h3>Juice Bar</h3>
              <p>
                Fresh smoothies, protein shakes, and healthy snacks available
              </p>
            </div>

            <div className="amenity-card">
              <div className="amenity-icon">📶</div>
              <h3>High-Speed WiFi</h3>
              <p>
                Stay connected with complimentary high-speed internet throughout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Zones */}
      <section className="training-zones-section">
        <div className="container">
          <h2 className="section-title">SPECIALIZED TRAINING ZONES</h2>
          <p className="section-subtitle">
            Dedicated areas designed for specific training styles
          </p>

          <div className="zones-grid">
            <div className="zone-card">
              <div className="zone-number">01</div>
              <h3>Strength Zone</h3>
              <p>
                Free weights, power racks, benches, and Olympic lifting
                platforms for serious strength training
              </p>
            </div>

            <div className="zone-card">
              <div className="zone-number">02</div>
              <h3>Cardio Deck</h3>
              <p>
                Treadmills, bikes, rowers, and ellipticals with personal
                entertainment systems
              </p>
            </div>

            <div className="zone-card">
              <div className="zone-number">03</div>
              <h3>Functional Area</h3>
              <p>
                Battle ropes, TRX, medicine balls, and space for dynamic
                movement training
              </p>
            </div>

            <div className="zone-card">
              <div className="zone-number">04</div>
              <h3>Studio Spaces</h3>
              <p>
                Three dedicated studios for group classes, personal training,
                and mind-body workouts
              </p>
            </div>

            <div className="zone-card">
              <div className="zone-number">05</div>
              <h3>Combat Zone</h3>
              <p>
                Heavy bags, speed bags, boxing ring, and martial arts training
                equipment
              </p>
            </div>

            <div className="zone-card">
              <div className="zone-number">06</div>
              <h3>Turf Track</h3>
              <p>
                Indoor turf for sled pushes, sprints, and athletic performance
                training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="features-cta-section">
        <div className="cta-content">
          <h2>Ready to Experience It Yourself?</h2>
          <p>Schedule a free tour and see our facilities in person</p>
          <div className="cta-buttons">
            <a href="contact.html" className="btn-cta">
              Book a Tour
            </a>
            <Link to="/price" className="btn-cta-secondary">
              View Membership Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
