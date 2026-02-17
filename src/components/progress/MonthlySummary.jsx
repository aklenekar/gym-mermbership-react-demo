export default function MonthlySummary({ stats }) {
  return (
    <div className="progress-card summary-card">
      <div className="card-header">
        <h2>This Month Summary</h2>
      </div>
      <div className="card-body">
        <div className="summary-stats">
          <div className="summary-stat">
            <div className="stat-icon">💪</div>
            <div className="stat-info">
              <div className="stat-value">{stats.workouts}</div>
              <div className="stat-label">Workouts</div>
            </div>
          </div>
          <div className="summary-stat">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <div className="stat-value">{stats.hours}h</div>
              <div className="stat-label">Training Time</div>
            </div>
          </div>
          <div className="summary-stat">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <div className="stat-value">{stats.caloriesBurned}</div>
              <div className="stat-label">Calories</div>
            </div>
          </div>
          <div className="summary-stat">
            <div className="stat-icon">📈</div>
            <div className="stat-info">
              <div className="stat-value">{stats.goalProgress}%</div>
              <div className="stat-label">Goal Progress</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
