export default function WorkoutsSummary() {
  return (
    <div className="stats-summary">
      <div className="summary-card">
        <div className="summary-icon">💪</div>
        <div className="summary-content">
          <div className="summary-value">18</div>
          <div className="summary-label">This Month</div>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-icon">🔥</div>
        <div className="summary-content">
          <div className="summary-value">24.5</div>
          <div className="summary-label">Hours Trained</div>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-icon">⚡</div>
        <div className="summary-content">
          <div className="summary-value">8,100</div>
          <div className="summary-label">Calories Burned</div>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-icon">📈</div>
        <div className="summary-content">
          <div className="summary-value">5</div>
          <div className="summary-label">Week Streak</div>
        </div>
      </div>
    </div>
  );
}
