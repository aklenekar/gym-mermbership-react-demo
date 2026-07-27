import { Link } from "react-router-dom";

export default function AdminQuickActionCard() {
  return (
    <div className="admin-card actions-card section-card section-card--elevated">
      <div className="card-header">
        <h3>Quick Actions</h3>
      </div>
      <div className="card-body">
        <div className="actions-grid">
          <Link className="action-btn" to="/manageMembers">
            <span className="action-icon">👤</span>
            <span className="action-text">Add Member</span>
          </Link>
          <Link className="action-btn" to="/manageTrainers">
            <span className="action-icon">🏋️</span>
            <span className="action-text">Add Trainer</span>
          </Link>
          <Link className="action-btn" to="/manageClasses">
            <span className="action-icon">📅</span>
            <span className="action-text">Add Class</span>
          </Link>
          <Link className="action-btn" to="/manageReports">
            <span className="action-icon">📊</span>
            <span className="action-text">View Reports</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
