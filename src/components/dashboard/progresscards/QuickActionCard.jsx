import "./QuickActionCard.css";

export default function QuickActionCard() {
  return (
    <div className="dash-card actions-card">
      <div className="dash-card-header">
        <h3>Quick Actions</h3>
      </div>
      <div className="dash-card-body">
        <div className="actions-grid">
          <a href="#" className="action-btn">
            <span className="action-icon">📅</span>
            <span className="action-text">Book Class</span>
          </a>
          <a href="#" className="action-btn">
            <span className="action-icon">🎟️</span>
            <span className="action-text">Guest Pass</span>
          </a>
          <a href="#" className="action-btn">
            <span className="action-icon">💬</span>
            <span className="action-text">Message Trainer</span>
          </a>
          <a href="#" className="action-btn">
            <span className="action-icon">🏆</span>
            <span className="action-text">View Progress</span>
          </a>
        </div>
      </div>
    </div>
  );
}
