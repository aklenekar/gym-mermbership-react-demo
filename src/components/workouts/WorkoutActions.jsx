export default function WorkoutActions({ handleFilterChange }) {
  return (
    <div className="workouts-actions">
      <button className="btn-log-workout">+ Log New Workout</button>
      <div className="workouts-filters">
        <select
          name="workout"
          className="filter-dropdown"
          onChange={handleFilterChange}
        >
          <option value="all">All Workouts</option>
          <option value="strength">Strength</option>
          <option value="cardio">Cardio</option>
          <option value="hiit">HIIT</option>
        </select>
        <select
          name="day"
          className="filter-dropdown"
          onChange={handleFilterChange}
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="all">All Time</option>
        </select>
      </div>
    </div>
  );
}
