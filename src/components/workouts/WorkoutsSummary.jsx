export default function WorkoutsSummary({summary}) {
  return (
    <div className="stats-summary">
      <div className="summary-card">
        <div className="summary-icon">💪</div>
        <div className="summary-content">
          <div className="summary-value">{summary.workouts}</div>
          <div className="summary-label">This Month</div>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-icon">🔥</div>
        <div className="summary-content">
          <div className="summary-value">{summary.hours}</div>
          <div className="summary-label">Hours Trained</div>
        </div>
      </div>
      <div className="summary-card">
        <div className="summary-icon">⚡</div>
        <div className="summary-content">
          <div className="summary-value">{summary.caloriesBurned}</div>
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
