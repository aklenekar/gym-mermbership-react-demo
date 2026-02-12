export default function AdminStatsCard() {
  return (
    <div className="stats-overview">
      <div className="stat-card">
        <div className="stat-icon">👥</div>
        <div className="stat-details">
          <div className="stat-value">2,547</div>
          <div className="stat-label">Total Members</div>
          <div className="stat-change positive">+12% this month</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">💰</div>
        <div className="stat-details">
          <div className="stat-value">$142,890</div>
          <div className="stat-label">Monthly Revenue</div>
          <div className="stat-change positive">+8% this month</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">📅</div>
        <div className="stat-details">
          <div className="stat-value">156</div>
          <div className="stat-label">Classes This Week</div>
          <div className="stat-change">Same as last week</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">🏋️</div>
        <div className="stat-details">
          <div className="stat-value">42</div>
          <div className="stat-label">Active Trainers</div>
          <div className="stat-change positive">+2 new hires</div>
        </div>
      </div>
    </div>
  );
}
