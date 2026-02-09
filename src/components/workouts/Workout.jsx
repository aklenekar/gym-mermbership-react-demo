import { formatDate } from "../../util/dateUtils";

export default function Workout({ workout }) {
  return(
    <div className="workout-card">
      <div className="workout-header">
        <div className="workout-type">
          <span className="type-badge strength">{workout.category}</span>
          <h3>{workout.workoutType}</h3>
        </div>
        <div className="workout-date">{formatDate(workout.startTime)}</div>
      </div>
      <div className="workout-details">
        <div className="detail-item">
          <span className="detail-icon">⏱️</span>
          <span className="detail-text">{workout.durationMinutes} min</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">🔥</span>
          <span className="detail-text">{workout.caloriesBurned} cal</span>
        </div>
        <div className="detail-item">
          <span className="detail-icon">💪</span>
          <span className="detail-text">8 exercises</span>
        </div>
      </div>
      <div className="workout-notes">
        <p>Great session! Increased bench press by 10 lbs. Form felt solid.</p>
      </div>
      <div className="workout-actions">
        <button className="btn-view">View Details</button>
        <button className="btn-edit">Edit</button>
      </div>
    </div>
  );
}
