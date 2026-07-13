import { formatDate } from "../../../util/dateUtils";
import "./MembershipCard.css";

export default function MembershipCard({ memebership, onUpgrade }) {
  return (
    <div className="dash-card membership-info">
      <div className="dash-card-header">
        <h3>Your Membership</h3>
        <span className="badge badge-pro">{memebership.plan}</span>
      </div>
      <div className="dash-card-body">
        <div className="membership-details">
          <div className="detail-row">
            <span className="detail-label">Plan</span>
            <span className="detail-value">Pro Monthly</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Member Since</span>
            <span className="detail-value">
              {formatDate(memebership.memberSince)}{" "}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Next Billing</span>
            <span className="detail-value">
              {formatDate(memebership.nextBillingDate)}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Status</span>
            <span className="status-active">{memebership.status}</span>
          </div>
        </div>
        <div className="membership-actions">
          <button onClick={onUpgrade} className="btn-outline">
            Upgrade Plan
          </button>
        </div>
      </div>
    </div>
  );
}
