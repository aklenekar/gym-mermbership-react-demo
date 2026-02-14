import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./UserProfile.css";
import { profileService } from "../../services/Services";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";
import { formatDate } from "../../util/dateUtils";
import PersonalInformation from "./PersonalInformation";
import ProfileAddress from "./ProfileAddress";
import EmergencyContact from "./EmergencyContact";
import HealthInfo from "./HealthInfo";
import { getInitials } from "../../util/dateUtils.js";

export default function UserProfile() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function fetchProfile() {
    profileService
      .fetchProfile()
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    fetchProfile();
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (payload) => {
    setIsSubmitting(true);
    console.log(payload);
    try {
      await profileService.updateProfile(payload);
    } catch (error) {
      console.error("Failed to log workout:", error);
      alert("Could not save Profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (error) {
    content = <ErrorPage />;
  }

  if (data) {
    content = (
      <section className="profile-content">
        <div className="container">
          <div className="profile-layout">
            {/* Profile Sidebar */}
            <div className="profile-sidebar">
              <div className="profile-card">
                <div className="profile-avatar-section">
                  <div className="profile-avatar-large">
                    {getInitials(
                      data.personalInfo.firstName,
                      data.personalInfo.lastName,
                    )}
                  </div>
                  <button className="btn-change-photo">Change Photo</button>
                </div>
                <div className="profile-info">
                  <h3 className="profile-name">
                    {data.personalInfo.firstName} {data.personalInfo.lastName}
                  </h3>
                  <p className="profile-email">{data.personalInfo.email}</p>
                  <p className="profile-member-since">
                    Member since {data.membershipInfo.memberSince}
                  </p>
                </div>
                <div className="profile-plan">
                  <div className="plan-badge-large pro">
                    {data.membershipInfo.plan}
                  </div>
                  <div className="plan-details">
                    <div className="plan-detail-row">
                      <span>Status</span>
                      <span className="status-active">
                        {data.membershipInfo.status}
                      </span>
                    </div>
                    <div className="plan-detail-row">
                      <span>Next Billing</span>
                      <span>
                        {formatDate(data.membershipInfo.nextBillingDate)}
                      </span>
                    </div>
                    <div className="plan-detail-row">
                      <span>Amount</span>
                      <span>${data.membershipInfo.price}/month</span>
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
              <PersonalInformation
                personalInfo={data.personalInfo}
                handleSubmit={handleSubmit}
              />

              {/* Address */}
              <ProfileAddress
                address={data.address}
                handleSubmit={handleSubmit}
              />

              {/* Emergency Contact */}
              <EmergencyContact
                emergencyContact={data.emergencyContact}
                handleSubmit={handleSubmit}
              />

              {/* Health Information */}
              <HealthInfo
                healthInfo={data.healthInfo}
                handleSubmit={handleSubmit}
              />

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
    );
  }

  return (
    <>
      <PageHeader title="MY PROFILE" subTitle="Manage your account settings" />
      {content}
    </>
  );
}
