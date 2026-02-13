import PageHeader from "../pageHeader/PageHeader";
import "./UserProfile.css";

export default function UserProfile() {
  return (
    <>
      <PageHeader title="MY PROFILE" subTitle="Manage your account settings" />
      <section className="profile-content">
        <div className="container">
          <div className="profile-layout">
            {/* Profile Sidebar */}
            <div className="profile-sidebar">
              <div className="profile-card">
                <div className="profile-avatar-section">
                  <div className="profile-avatar-large">JD</div>
                  <button className="btn-change-photo">Change Photo</button>
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">John Doe</h3>
                  <p className="profile-email">john.doe@email.com</p>
                  <p className="profile-member-since">Member since Jan 2025</p>
                </div>
                <div className="profile-plan">
                  <div className="plan-badge-large pro">PRO MEMBER</div>
                  <div className="plan-details">
                    <div className="plan-detail-row">
                      <span>Status</span>
                      <span className="status-active">Active</span>
                    </div>
                    <div className="plan-detail-row">
                      <span>Next Billing</span>
                      <span>Feb 15, 2025</span>
                    </div>
                    <div className="plan-detail-row">
                      <span>Amount</span>
                      <span>$49/month</span>
                    </div>
                  </div>
                  <button className="btn-upgrade">Upgrade Plan</button>
                </div>
              </div>

              <div className="profile-nav">
                <button className="profile-nav-item active">
                  <span className="nav-icon">👤</span>
                  <span>Personal Info</span>
                </button>
                <button className="profile-nav-item">
                  <span className="nav-icon">🔒</span>
                  <span>Security</span>
                </button>
                <button className="profile-nav-item">
                  <span className="nav-icon">💳</span>
                  <span>Billing</span>
                </button>
                <button className="profile-nav-item">
                  <span className="nav-icon">🔔</span>
                  <span>Notifications</span>
                </button>
                <button className="profile-nav-item">
                  <span className="nav-icon">❤️</span>
                  <span>Health Info</span>
                </button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="profile-main">
              {/* Personal Information */}
              <div className="profile-section">
                <div className="section-header">
                  <h3 className="section-title">Personal Information</h3>
                  <button className="btn-edit-section">Edit</button>
                </div>
                <div className="profile-grid">
                  <div className="profile-field">
                    <label className="field-label">First Name</label>
                    <input
                      type="text"
                      className="field-input"
                      value="John"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">Last Name</label>
                    <input
                      type="text"
                      className="field-input"
                      value="Doe"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">Email</label>
                    <input
                      type="email"
                      className="field-input"
                      value="john.doe@email.com"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">Phone Number</label>
                    <input
                      type="tel"
                      className="field-input"
                      value="+1 (555) 123-4567"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">Date of Birth</label>
                    <input
                      type="date"
                      className="field-input"
                      value="1990-05-15"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">Gender</label>
                    <input
                      type="text"
                      className="field-input"
                      value="Male"
                      readonly
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="profile-section">
                <div className="section-header">
                  <h3 className="section-title">Address</h3>
                  <button className="btn-edit-section">Edit</button>
                </div>
                <div className="profile-grid">
                  <div className="profile-field full-width">
                    <label className="field-label">Street Address</label>
                    <input
                      type="text"
                      className="field-input"
                      value="123 Main Street"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">City</label>
                    <input
                      type="text"
                      className="field-input"
                      value="Los Angeles"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">State</label>
                    <input
                      type="text"
                      className="field-input"
                      value="California"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">ZIP Code</label>
                    <input
                      type="text"
                      className="field-input"
                      value="90001"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">Country</label>
                    <input
                      type="text"
                      className="field-input"
                      value="United States"
                      readonly
                    />
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="profile-section">
                <div className="section-header">
                  <h3 className="section-title">Emergency Contact</h3>
                  <button className="btn-edit-section">Edit</button>
                </div>
                <div className="profile-grid">
                  <div className="profile-field">
                    <label className="field-label">Contact Name</label>
                    <input
                      type="text"
                      className="field-input"
                      value="Jane Doe"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">Contact Phone</label>
                    <input
                      type="tel"
                      className="field-input"
                      value="+1 (555) 987-6543"
                      readonly
                    />
                  </div>
                  <div className="profile-field">
                    <label className="field-label">Relationship</label>
                    <input
                      type="text"
                      className="field-input"
                      value="Spouse"
                      readonly
                    />
                  </div>
                </div>
              </div>

              {/* Health Information */}
              <div className="profile-section">
                <div className="section-header">
                  <h3 className="section-title">Health Information</h3>
                  <button className="btn-edit-section">Edit</button>
                </div>
                <div className="profile-grid">
                  <div className="profile-field full-width">
                    <label className="field-label">Medical Conditions</label>
                    <textarea className="field-textarea" rows="3" readonly>
                      No known medical conditions
                    </textarea>
                  </div>
                  <div className="profile-field full-width">
                    <label className="field-label">Fitness Goals</label>
                    <textarea className="field-textarea" rows="3" readonly>
                      Build muscle mass and improve cardiovascular endurance
                    </textarea>
                  </div>
                </div>
              </div>

              {/* Account Security */}
              <div className="profile-section">
                <div className="section-header">
                  <h3 className="section-title">Account Security</h3>
                </div>
                <div className="security-options">
                  <div className="security-item">
                    <div className="security-info">
                      <div className="security-label">Password</div>
                      <div className="security-description">
                        Last changed 30 days ago
                      </div>
                    </div>
                    <button className="btn-security-action">
                      Change Password
                    </button>
                  </div>
                  <div className="security-item">
                    <div className="security-info">
                      <div className="security-label">
                        Two-Factor Authentication
                      </div>
                      <div className="security-description">
                        Add an extra layer of security
                      </div>
                    </div>
                    <button className="btn-security-action">Enable 2FA</button>
                  </div>
                  <div className="security-item">
                    <div className="security-info">
                      <div className="security-label">Active Sessions</div>
                      <div className="security-description">
                        2 active sessions
                      </div>
                    </div>
                    <button className="btn-security-action">
                      Manage Sessions
                    </button>
                  </div>
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="profile-section">
                <div className="section-header">
                  <h3 className="section-title">Notification Preferences</h3>
                </div>
                <div className="notification-options">
                  <div className="notification-item">
                    <div className="notification-info">
                      <div className="notification-label">
                        Email Notifications
                      </div>
                      <div className="notification-description">
                        Receive updates via email
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" checked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="notification-item">
                    <div className="notification-info">
                      <div className="notification-label">Class Reminders</div>
                      <div className="notification-description">
                        Get reminded before classes
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" checked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="notification-item">
                    <div className="notification-info">
                      <div className="notification-label">
                        Promotional Emails
                      </div>
                      <div className="notification-description">
                        Special offers and updates
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                  <div className="notification-item">
                    <div className="notification-info">
                      <div className="notification-label">
                        SMS Notifications
                      </div>
                      <div className="notification-description">
                        Receive text messages
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" checked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="profile-section danger-section">
                <div className="section-header">
                  <h3 className="section-title">Danger Zone</h3>
                </div>
                <div className="danger-actions">
                  <div className="danger-item">
                    <div className="danger-info">
                      <div className="danger-label">Freeze Membership</div>
                      <div className="danger-description">
                        Temporarily pause your membership
                      </div>
                    </div>
                    <button className="btn-danger-action">
                      Freeze Account
                    </button>
                  </div>
                  <div className="danger-item">
                    <div className="danger-info">
                      <div className="danger-label">Cancel Membership</div>
                      <div className="danger-description">
                        Permanently cancel your membership
                      </div>
                    </div>
                    <button className="btn-danger-action">
                      Cancel Membership
                    </button>
                  </div>
                  <div className="danger-item">
                    <div className="danger-info">
                      <div className="danger-label">Delete Account</div>
                      <div className="danger-description">
                        Permanently delete your account and data
                      </div>
                    </div>
                    <button className="btn-danger-action">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
