import PageHeader from "../pageHeader/PageHeader";
import "./Settings.css";

export default function Settings() {
  return (
    <>
      <PageHeader
        title="SETTINGS"
        subTitle="Configure gym settings and preferences"
      />

      <section className="admin-content">
        <div className="container">
          <div className="settings-nav">
            <button className="settings-tab active">General</button>
            <button className="settings-tab">Membership Plans</button>
            <button className="settings-tab">Notifications</button>
            <button className="settings-tab">Integrations</button>
            <button className="settings-tab">Security</button>
          </div>

          <div className="settings-content">
            {/* General Settings */}
            <div className="settings-section">
              <h3 className="section-title">Gym Information</h3>
              <div className="settings-grid">
                <div className="setting-item">
                  <label className="setting-label">Gym Name</label>
                  <input
                    type="text"
                    className="setting-input"
                    value="APEX GYM"
                    placeholder="Enter gym name"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">Contact Email</label>
                  <input
                    type="email"
                    className="setting-input"
                    value="info@apexgym.com"
                    placeholder="Enter email"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">Phone Number</label>
                  <input
                    type="tel"
                    className="setting-input"
                    value="+1 (555) 123-4567"
                    placeholder="Enter phone"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">Website</label>
                  <input
                    type="url"
                    className="setting-input"
                    value="https://apexgym.com"
                    placeholder="Enter website"
                  />
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3 className="section-title">Address</h3>
              <div className="settings-grid">
                <div className="setting-item full-width">
                  <label className="setting-label">Street Address</label>
                  <input
                    type="text"
                    className="setting-input"
                    value="123 Fitness Boulevard"
                    placeholder="Enter street address"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">City</label>
                  <input
                    type="text"
                    className="setting-input"
                    value="Los Angeles"
                    placeholder="Enter city"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">State</label>
                  <input
                    type="text"
                    className="setting-input"
                    value="California"
                    placeholder="Enter state"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">ZIP Code</label>
                  <input
                    type="text"
                    className="setting-input"
                    value="90001"
                    placeholder="Enter ZIP"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">Country</label>
                  <input
                    type="text"
                    className="setting-input"
                    value="United States"
                    placeholder="Enter country"
                  />
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3 className="section-title">Operating Hours</h3>
              <div className="hours-grid">
                <div className="hours-item">
                  <div className="day-label">Monday - Friday</div>
                  <div className="time-inputs">
                    <input type="time" className="time-input" value="05:00" />
                    <span className="time-separator">to</span>
                    <input type="time" className="time-input" value="23:00" />
                  </div>
                </div>
                <div className="hours-item">
                  <div className="day-label">Saturday</div>
                  <div className="time-inputs">
                    <input type="time" className="time-input" value="06:00" />
                    <span className="time-separator">to</span>
                    <input type="time" className="time-input" value="22:00" />
                  </div>
                </div>
                <div className="hours-item">
                  <div className="day-label">Sunday</div>
                  <div className="time-inputs">
                    <input type="time" className="time-input" value="07:00" />
                    <span className="time-separator">to</span>
                    <input type="time" className="time-input" value="20:00" />
                  </div>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3 className="section-title">Membership Plans Pricing</h3>
              <div className="plans-grid">
                <div className="plan-setting">
                  <div className="plan-header">
                    <h4 className="plan-name">STARTER</h4>
                    <span className="plan-status active">Active</span>
                  </div>
                  <div className="setting-item">
                    <label className="setting-label">Monthly Price</label>
                    <div className="price-input-group">
                      <span className="currency">$</span>
                      <input
                        type="number"
                        className="price-input"
                        value="29"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="setting-item">
                    <label className="setting-label">Annual Price</label>
                    <div className="price-input-group">
                      <span className="currency">$</span>
                      <input
                        type="number"
                        className="price-input"
                        value="299"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                <div className="plan-setting">
                  <div className="plan-header">
                    <h4 className="plan-name">PRO</h4>
                    <span className="plan-status active">Active</span>
                  </div>
                  <div className="setting-item">
                    <label className="setting-label">Monthly Price</label>
                    <div className="price-input-group">
                      <span className="currency">$</span>
                      <input
                        type="number"
                        className="price-input"
                        value="49"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="setting-item">
                    <label className="setting-label">Annual Price</label>
                    <div className="price-input-group">
                      <span className="currency">$</span>
                      <input
                        type="number"
                        className="price-input"
                        value="499"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>

                <div className="plan-setting">
                  <div className="plan-header">
                    <h4 className="plan-name">ELITE</h4>
                    <span className="plan-status active">Active</span>
                  </div>
                  <div className="setting-item">
                    <label className="setting-label">Monthly Price</label>
                    <div className="price-input-group">
                      <span className="currency">$</span>
                      <input
                        type="number"
                        className="price-input"
                        value="79"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="setting-item">
                    <label className="setting-label">Annual Price</label>
                    <div className="price-input-group">
                      <span className="currency">$</span>
                      <input
                        type="number"
                        className="price-input"
                        value="799"
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3 className="section-title">Class Settings</h3>
              <div className="settings-grid">
                <div className="setting-item">
                  <label className="setting-label">
                    Default Class Duration (minutes)
                  </label>
                  <input
                    type="number"
                    className="setting-input"
                    value="60"
                    placeholder="60"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">
                    Booking Window (days in advance)
                  </label>
                  <input
                    type="number"
                    className="setting-input"
                    value="14"
                    placeholder="14"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">
                    Cancellation Deadline (hours)
                  </label>
                  <input
                    type="number"
                    className="setting-input"
                    value="24"
                    placeholder="24"
                  />
                </div>
                <div className="setting-item">
                  <label className="setting-label">Waitlist Capacity</label>
                  <input
                    type="number"
                    className="setting-input"
                    value="10"
                    placeholder="10"
                  />
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3 className="section-title">Notifications</h3>
              <div className="toggles-list">
                <div className="toggle-item">
                  <div className="toggle-info">
                    <div className="toggle-label">Email Notifications</div>
                    <div className="toggle-description">
                      Send email notifications to members
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <div className="toggle-label">SMS Notifications</div>
                    <div className="toggle-description">
                      Send SMS reminders for classes
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <div className="toggle-label">Payment Reminders</div>
                    <div className="toggle-description">
                      Notify members of upcoming payments
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <div className="toggle-item">
                  <div className="toggle-info">
                    <div className="toggle-label">Class Reminders</div>
                    <div className="toggle-description">
                      Send reminders 1 hour before class
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="settings-section">
              <h3 className="section-title">Security</h3>
              <div className="security-actions">
                <button className="security-btn">Change Admin Password</button>
                <button className="security-btn">Two-Factor Authentication</button>
                <button className="security-btn">API Keys Management</button>
                <button className="security-btn danger">Clear All Cache</button>
              </div>
            </div>

            <div className="settings-actions">
              <button className="btn-cancel">Cancel</button>
              <button className="btn-save">Save Changes</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
