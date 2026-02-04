import "./StatsCard.css";

export default function StatsCard({ stats }) {
  return (
    <div className="dash-card stats-card">
      <div className="dash-card-header">
        <h3>This Month</h3>
      </div>
      <div className="dash-card-body">
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <span className="stat-value">{stats.workouts}</span>
              <span className="stat-label">Workouts</span>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <span className="stat-value">{stats.hours}</span>
              <span className="stat-label">Hours</span>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">📈</div>
            <div className="stat-info">
              <span className="stat-value">{stats.classes}</span>
              <span className="stat-label">classNamees</span>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <span className="stat-value">{stats.goalProgress}%</span>
              <span className="stat-label">Goal Progress</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
