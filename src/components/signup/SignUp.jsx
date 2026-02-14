import React, { useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./SignUp.css";
import { profileService } from "../../services/Services";

export default function SignUp() {
  // -----------------------------------------------------------------
  // 1️⃣ State for every field (mirrors CreateProfileRequest)
  // -----------------------------------------------------------------
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelationship: "",
    medicalConditions: "",
    fitnessGoals: "",
    // optional flags (for UI only)
    marketingOptIn: false,
    agreeTerms: false,
    waiveLiability: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();

  // -----------------------------------------------------------------
  // 2️⃣ Generic onChange handler for text/number/select/textarea
  // -----------------------------------------------------------------
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // -----------------------------------------------------------------
  // 3️⃣ Form submission – validation + API call
  // -----------------------------------------------------------------
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    // ---- Simple client‑side validation ---------------------------------
    if (!form.firstName || !form.lastName || !form.email) {
      setErrorMsg("First name, last name and e‑mail are required.");
      return;
    }
    if (form.password.length < 8) {
      setErrorMsg("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setErrorMsg("Passwords do not match.");
      return;
    }
    if (!form.agreeTerms || !form.waiveLiability) {
      setErrorMsg("You must accept the terms and liability waiver.");
      return;
    }

    // ---- Build the payload that matches CreateProfileRequest -----------
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password, // <-- server will hash it
      phone: form.phone,
      dateOfBirth: form.dateOfBirth, // ISO‑8601 (yyyy‑MM‑dd) – already the format from <input type="date">
      gender: form.gender,
      street: form.street,
      city: form.city,
      state: form.state,
      zipCode: form.zipCode,
      country: form.country,
      name: form.emergencyContactName,
      emergencyPhone: form.emergencyContactPhone,
      relationship: form.emergencyContactRelationship,
      medicalConditions: form.medicalConditions,
      fitnessGoals: form.fitnessGoals,
    };

    // ---- Call the API --------------------------------------------------
    setIsSubmitting(true);
    try {
      const created = await profileService.createProfile(payload);
      setSuccessMsg("Your account has been created! 🎉");
      redirect("/auth");
    } catch (error) {
      console.error(err);
      // err.info may contain validation errors from the back‑end
      const msg = err.info?.message || err.message || "Unexpected error.";
      setErrorMsg(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // -----------------------------------------------------------------
  // 4️⃣ Render – keep all the markup you already had, just wire the
  //      inputs to state and the submit handler.
  // -----------------------------------------------------------------
  return (
    <>
      <PageHeader
        title="JOIN APEX GYM"
        subTitle="Start your fitness journey today"
      />

      <section className="join-content">
        <div className="container">
          <form className="join-layout" onSubmit={handleSubmit}>
            {/* -----------------------------------------------------------
                Registration Form (left side)
            ----------------------------------------------------------- */}
            <div className="registration-form">
              {/* ----- Success / error feedback ----- */}
              {errorMsg && (
                <div className="alert alert-danger" role="alert">
                  {errorMsg}
                </div>
              )}
              {successMsg && (
                <div className="alert alert-success" role="alert">
                  {successMsg}
                </div>
              )}

              {/* ----- Personal Information ----- */}
              <div className="form-section">
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input
                      name="firstName"
                      type="text"
                      className="form-input"
                      placeholder="John"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input
                      name="lastName"
                      type="text"
                      className="form-input"
                      placeholder="Doe"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="john@email.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                      required
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Date of Birth *</label>
                    <input
                      name="dateOfBirth"
                      type="date"
                      className="form-input"
                      required
                      value={form.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Gender</label>
                    <select
                      name="gender"
                      className="form-input"
                      value={form.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ----- Account Details ----- */}
              <div className="form-section">
                <h3 className="form-section-title">Account Details</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Password *</label>
                    <input
                      name="password"
                      type="password"
                      className="form-input"
                      placeholder="Enter password"
                      required
                      value={form.password}
                      onChange={handleChange}
                    />
                    <span className="form-hint">Minimum 8 characters</span>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Confirm Password *</label>
                    <input
                      name="confirmPassword"
                      type="password"
                      className="form-input"
                      placeholder="Confirm password"
                      required
                      value={form.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* ----- Address ----- */}
              <div className="form-section">
                <h3 className="form-section-title">Address</h3>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label className="form-label">Street Address</label>
                    <input
                      name="street"
                      type="text"
                      className="form-input"
                      placeholder="123 Main Street"
                      value={form.street}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                      name="city"
                      type="text"
                      className="form-input"
                      placeholder="Los Angeles"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">State</label>
                    <input
                      name="state"
                      type="text"
                      className="form-input"
                      placeholder="California"
                      value={form.state}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">ZIP Code</label>
                    <input
                      name="zipCode"
                      type="text"
                      className="form-input"
                      placeholder="90001"
                      value={form.zipCode}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <input
                      name="country"
                      type="text"
                      className="form-input"
                      placeholder="United States"
                      value={form.country}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* ----- Emergency Contact ----- */}
              <div className="form-section">
                <h3 className="form-section-title">Emergency Contact</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Contact Name *</label>
                    <input
                      name="emergencyContactName"
                      type="text"
                      className="form-input"
                      placeholder="Jane Doe"
                      required
                      value={form.emergencyContactName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Contact Phone *</label>
                    <input
                      name="emergencyContactPhone"
                      type="tel"
                      className="form-input"
                      placeholder="+1 (555) 987-6543"
                      required
                      value={form.emergencyContactPhone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Relationship</label>
                    <input
                      name="emergencyContactRelationship"
                      type="text"
                      className="form-input"
                      placeholder="Spouse"
                      value={form.emergencyContactRelationship}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* ----- Health Information ----- */}
              <div className="form-section">
                <h3 className="form-section-title">Health Information</h3>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label className="form-label">Medical Conditions</label>
                    <textarea
                      name="medicalConditions"
                      className="form-textarea"
                      rows={3}
                      placeholder="Please list any medical conditions we should be aware of..."
                      value={form.medicalConditions}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Fitness Goals</label>
                    <textarea
                      name="fitnessGoals"
                      className="form-textarea"
                      rows={3}
                      placeholder="Tell us about your fitness goals..."
                      value={form.fitnessGoals}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* ----- Terms & Checkboxes ----- */}
              <div className="form-section">
                <div className="terms-section">
                  <label className="checkbox-label">
                    <input
                      name="agreeTerms"
                      type="checkbox"
                      className="checkbox-input"
                      required
                      checked={form.agreeTerms}
                      onChange={handleChange}
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
                    <input
                      name="marketingOptIn"
                      type="checkbox"
                      className="checkbox-input"
                      checked={form.marketingOptIn}
                      onChange={handleChange}
                    />
                    <span className="checkbox-text">
                      I would like to receive promotional emails and updates
                    </span>
                  </label>

                  <label className="checkbox-label">
                    <input
                      name="waiveLiability"
                      type="checkbox"
                      className="checkbox-input"
                      required
                      checked={form.waiveLiability}
                      onChange={handleChange}
                    />
                    <span className="checkbox-text">
                      I acknowledge the waiver of liability
                    </span>
                  </label>
                </div>
              </div>

              {/* ----- Submit button ----- */}
              <button
                type="submit"
                className="btn-submit-registration"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating account…" : "Complete Registration"}
              </button>
            </div>

            {/* -----------------------------------------------------------
                Plan Selection Sidebar (unchanged – only UI, no state needed)
            ----------------------------------------------------------- */}
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
                    <input
                      type="radio"
                      name="plan"
                      value="pro"
                      defaultChecked
                    />
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
                        <li>✓ Sauna &amp; Steam Room</li>
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
          </form>
        </div>
      </section>
    </>
  );
}
