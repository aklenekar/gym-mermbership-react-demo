export default function WorkoutActions() {
  return (
    <div className="workouts-actions">
      <button className="btn-log-workout">+ Log New Workout</button>
      <div className="workouts-filters">
        <select className="filter-dropdown">
          <option value="all">All Workouts</option>
          <option value="strength">Strength</option>
          <option value="cardio">Cardio</option>
          <option value="hiit">HIIT</option>
        </select>
        <select className="filter-dropdown">
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="all">All Time</option>
        </select>
      </div>
    </div>
  );
}
