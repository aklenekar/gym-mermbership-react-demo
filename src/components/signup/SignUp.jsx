import PageHeader from "../pageHeader/PageHeader";
import "./SignUp.css";
export default function SignUp() {
  return (
    <>
      <PageHeader
        title="JOIN APEX GYM"
        subTitle="Start your fitness journey today"
      />

      <section className="join-content">
        <div className="container">
          <div className="join-layout">
            {/* Registration Form */}
            <div className="registration-form">
              <div className="form-section">
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="john@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Date of Birth *</label>
                    <input type="date" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Gender</label>
                    <select className="form-input">
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Account Details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Password *</label>
                    <input
                      type="password"
                      className="form-input"
                      placeholder="Enter password"
                      required
                    />
                    <span className="form-hint">Minimum 8 characters</span>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm Password *</label>
                    <input
                      type="password"
                      className="form-input"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Address</h3>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label className="form-label">Street Address</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Los Angeles"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="California"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">ZIP Code</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="90001"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="United States"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Emergency Contact</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Contact Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Contact Phone *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+1 (555) 987-6543"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Relationship</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Spouse"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h3 className="form-section-title">Health Information</h3>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label className="form-label">Medical Conditions</label>
                    <textarea
                      className="form-textarea"
                      rows="3"
                      placeholder="Please list any medical conditions we should be aware of..."
                    ></textarea>
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Fitness Goals</label>
                    <textarea
                      className="form-textarea"
                      rows="3"
                      placeholder="Tell us about your fitness goals..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="terms-section">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      required
                    />
                    <span className="checkbox-text">
                      I agree to the{" "}
                      <a href="#" className="link">
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="link">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  <label className="checkbox-label">
                    <input type="checkbox" className="checkbox-input" />
                    <span className="checkbox-text">
                      I would like to receive promotional emails and updates
                    </span>
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      required
                    />
                    <span className="checkbox-text">
                      I acknowledge the waiver of liability
                    </span>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn-submit-registration">
                Complete Registration
              </button>
            </div>

            {/* Plan Selection Sidebar */}
            <div className="plan-sidebar">
              <div className="sidebar-sticky">
                <h3 className="sidebar-title">Select Your Plan</h3>

                <div className="billing-toggle">
                  <button className="billing-btn active">Monthly</button>
                  <button className="billing-btn">Annual</button>
                  <span className="save-badge">Save 15%</span>
                </div>

                <div className="plan-options">
                  <label className="plan-option">
                    <input type="radio" name="plan" value="starter" />
                    <div className="plan-card-select">
                      <div className="plan-header-select">
                        <div className="plan-name-select">STARTER</div>
                        <div className="plan-price-select">
                          <span className="price">$29</span>
                          <span className="period">/mo</span>
                        </div>
                      </div>
                      <ul className="plan-features-select">
                        <li>✓ Gym Access</li>
                        <li>✓ Cardio Equipment</li>
                        <li>✓ Locker Room</li>
                      </ul>
                    </div>
                  </label>

                  <label className="plan-option">
                    <input type="radio" name="plan" value="pro" checked />
                    <div className="plan-card-select recommended">
                      <div className="recommended-badge">MOST POPULAR</div>
                      <div className="plan-header-select">
                        <div className="plan-name-select">PRO</div>
                        <div className="plan-price-select">
                          <span className="price">$49</span>
                          <span className="period">/mo</span>
                        </div>
                      </div>
                      <ul className="plan-features-select">
                        <li>✓ All Starter Features</li>
                        <li>✓ Group Classes</li>
                        <li>✓ Sauna & Steam Room</li>
                      </ul>
                    </div>
                  </label>

                  <label className="plan-option">
                    <input type="radio" name="plan" value="elite" />
                    <div className="plan-card-select">
                      <div className="plan-header-select">
                        <div className="plan-name-select">ELITE</div>
                        <div className="plan-price-select">
                          <span className="price">$79</span>
                          <span className="period">/mo</span>
                        </div>
                      </div>
                      <ul className="plan-features-select">
                        <li>✓ All Pro Features</li>
                        <li>✓ Personal Training</li>
                        <li>✓ Priority Booking</li>
                      </ul>
                    </div>
                  </label>
                </div>

                <div className="order-summary">
                  <h4 className="summary-title">Order Summary</h4>
                  <div className="summary-row">
                    <span>PRO Plan (Monthly)</span>
                    <span className="summary-amount">$49.00</span>
                  </div>
                  <div className="summary-row">
                    <span>Registration Fee</span>
                    <span className="summary-amount">$25.00</span>
                  </div>
                  <div className="summary-divider"></div>
                  <div className="summary-row total">
                    <span>Total Due Today</span>
                    <span className="summary-amount">$74.00</span>
                  </div>
                </div>

                <div className="payment-methods">
                  <img
                    src="https://via.placeholder.com/40x25/333/fff?text=VISA"
                    alt="Visa"
                  />
                  <img
                    src="https://via.placeholder.com/40x25/333/fff?text=MC"
                    alt="Mastercard"
                  />
                  <img
                    src="https://via.placeholder.com/40x25/333/fff?text=AMEX"
                    alt="Amex"
                  />
                  <img
                    src="https://via.placeholder.com/40x25/333/fff?text=PP"
                    alt="PayPal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
