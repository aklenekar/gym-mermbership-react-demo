export default function PersonalGoals({ personalGoals }) {
  return (
    <div className="progress-card goals-card">
      <div className="card-header">
        <h2>Monthly Goals</h2>
        <select className="month-selector">
          <option>February 2025</option>
          <option>January 2025</option>
          <option>December 2024</option>
        </select>
      </div>
      <div className="card-body">
        {personalGoals.map((goal) => {
          return (
            <div className="goal-item">
              <div className="goal-header">
                <span className="goal-name">{goal.name}</span>
                <span className="goal-progress">
                  {goal.currentValue}/{goal.targetValue}
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${goal.progressPercentage}%` }}
                ></div>
              </div>
              <div className="goal-footer">
                <span className="goal-percent">{goal.progressPercentage}%</span>
                <span className="goal-status on-track">On Track</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
