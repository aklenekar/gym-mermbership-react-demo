import "./GoalProgressCard.css";

export default function GoalProgressCard({ goals }) {
  return (
    <div className="dash-card goals-card">
      <div className="dash-card-header">
        <h3>Monthly Goals</h3>
        <a href="#" className="header-link">
          Edit
        </a>
      </div>
      <div className="dash-card-body">
        {goals.map((goal) => {
          return (
            <div className="goal-item" key={goal.id}>
              <div className="goal-header">
                <span className="goal-name">{goal.name}</span>
                <span className="goal-progress">{goal.currentValue}/{goal.targetValue}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: `${goal.progressPercentage}%`}}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
