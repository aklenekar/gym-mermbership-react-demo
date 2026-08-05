import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./Settings.css";
import {
  eliteFeatures,
  proFeatures,
  starterFeatures,
} from "../../services/Prices";
import { adminService } from "../../services/Services";

export default function Settings() {
  // State to track active settings tab
  const [activeTab, setActiveTab] = useState("General");

  const tabs = [
    { id: "General", label: "General" },
    { id: "Membership Plans", label: "Membership Plans" },
    { id: "Notifications", label: "Notifications" },
    { id: "Integrations", label: "Integrations" },
    { id: "Security", label: "Security" },
  ];

  const [plans, setPlans] = useState();

  useEffect(() => {
    // Fetch pricing plans from the backend when the component mounts
    const fetchPricingPlans = async () => {
      try {
        const response = await adminService.fetchPricingPlans();
        setPlans(response.pricing);
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      }
    };

    fetchPricingPlans();
  }, []);

  const handlePriceChange = (id, field, value) => {
    setPlans((prevPlans) =>
      prevPlans.map((plan) =>
        plan.id === id ? { ...plan, [field]: Number(value) } : plan,
      ),
    );
  };

  return (
    <>
      <PageHeader
        title="SETTINGS"
        subTitle="Configure gym settings and preferences"
      />

      <section className="admin-content">
        <div className="container">
          {/* Navigation Tabs */}
          <div className="settings-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`settings-tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="settings-content">
            {/* GENERAL TAB */}
            {activeTab === "General" && (
              <>
                <div className="settings-section">
                  <h3 className="section-title">Gym Information</h3>
                  <div className="settings-grid">
                    <div className="setting-item">
                      <label className="setting-label">Gym Name</label>
                      <input
                        type="text"
                        className="setting-input"
                        defaultValue="APEX GYM"
                        placeholder="Enter gym name"
                      />
                    </div>
                    <div className="setting-item">
                      <label className="setting-label">Contact Email</label>
                      <input
                        type="email"
                        className="setting-input"
                        defaultValue="info@apexgym.com"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="setting-item">
                      <label className="setting-label">Phone Number</label>
                      <input
                        type="tel"
                        className="setting-input"
                        defaultValue="+1 (555) 123-4567"
                        placeholder="Enter phone"
                      />
                    </div>
                    <div className="setting-item">
                      <label className="setting-label">Website</label>
                      <input
                        type="url"
                        className="setting-input"
                        defaultValue="https://apexgym.com"
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
                        defaultValue="123 Fitness Boulevard"
                        placeholder="Enter street address"
                      />
                    </div>
                    <div className="setting-item">
                      <label className="setting-label">City</label>
                      <input
                        type="text"
                        className="setting-input"
                        defaultValue="Los Angeles"
                        placeholder="Enter city"
                      />
                    </div>
                    <div className="setting-item">
                      <label className="setting-label">State</label>
                      <input
                        type="text"
                        className="setting-input"
                        defaultValue="California"
                        placeholder="Enter state"
                      />
                    </div>
                    <div className="setting-item">
                      <label className="setting-label">ZIP Code</label>
                      <input
                        type="text"
                        className="setting-input"
                        defaultValue="90001"
                        placeholder="Enter ZIP"
                      />
                    </div>
                    <div className="setting-item">
                      <label className="setting-label">Country</label>
                      <input
                        type="text"
                        className="setting-input"
                        defaultValue="United States"
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
                        <input
                          type="time"
                          className="time-input"
                          defaultValue="05:00"
                        />
                        <span className="time-separator">to</span>
                        <input
                          type="time"
                          className="time-input"
                          defaultValue="23:00"
                        />
                      </div>
                    </div>
                    <div className="hours-item">
                      <div className="day-label">Saturday</div>
                      <div className="time-inputs">
                        <input
                          type="time"
                          className="time-input"
                          defaultValue="06:00"
                        />
                        <span className="time-separator">to</span>
                        <input
                          type="time"
                          className="time-input"
                          defaultValue="22:00"
                        />
                      </div>
                    </div>
                    <div className="hours-item">
                      <div className="day-label">Sunday</div>
                      <div className="time-inputs">
                        <input
                          type="time"
                          className="time-input"
                          defaultValue="07:00"
                        />
                        <span className="time-separator">to</span>
                        <input
                          type="time"
                          className="time-input"
                          defaultValue="20:00"
                        />
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
                        defaultValue="60"
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
                        defaultValue="14"
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
                        defaultValue="24"
                        placeholder="24"
                      />
                    </div>
                    <div className="setting-item">
                      <label className="setting-label">Waitlist Capacity</label>
                      <input
                        type="number"
                        className="setting-input"
                        defaultValue="10"
                        placeholder="10"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* MEMBERSHIP PLANS TAB */}
            {activeTab === "Membership Plans" && (
              <div className="settings-section">
                <h3 className="section-title">Membership Plans Pricing</h3>
                <div className="plans-grid">
                  {plans.map((plan) => (
                    <div key={plan.id} className="plan-setting">
                      <div className="plan-header">
                        <h4 className="plan-name">{plan.name}</h4>
                        <span className="plan-status active">Active</span>
                      </div>

                      <div className="setting-item">
                        <label className="setting-label">Monthly Price</label>
                        <div className="price-input-group">
                          <span className="currency">$</span>
                          <input
                            type="number"
                            className="price-input"
                            value={plan.price || ""}
                            onChange={(e) =>
                              handlePriceChange(
                                plan.id,
                                "price",
                                e.target.value,
                              )
                            }
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
                            value={plan.annualPrice || ""}
                            onChange={(e) =>
                              handlePriceChange(
                                plan.id,
                                "annualPrice",
                                e.target.value,
                              )
                            }
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === "Notifications" && (
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
                      <input type="checkbox" defaultChecked />
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
                      <input type="checkbox" defaultChecked />
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
                      <input type="checkbox" defaultChecked />
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
                      <input type="checkbox" defaultChecked />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* INTEGRATIONS TAB */}
            {activeTab === "Integrations" && (
              <div className="settings-section">
                <h3 className="section-title">Integrations</h3>
                <p style={{ color: "var(--light-gray)" }}>
                  Manage third-party services and webhooks.
                </p>
              </div>
            )}

            {/* SECURITY TAB */}
            {activeTab === "Security" && (
              <div className="settings-section">
                <h3 className="section-title">Security</h3>
                <div className="security-actions">
                  <button className="security-btn">
                    Change Admin Password
                  </button>
                  <button className="security-btn">
                    Two-Factor Authentication
                  </button>
                  <button className="security-btn">API Keys Management</button>
                  <button className="security-btn danger">
                    Clear All Cache
                  </button>
                </div>
              </div>
            )}

            {/* Actions */}
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
