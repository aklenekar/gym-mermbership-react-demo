export default function WorkoutList() {
  return (
    <div className="workouts-list">
      <div className="workout-card">
        <div className="workout-header">
          <div className="workout-type">
            <span className="type-badge strength">Strength</span>
            <h3>Upper Body Push</h3>
          </div>
          <div className="workout-date">Today, 6:30 AM</div>
        </div>
        <div className="workout-details">
          <div className="detail-item">
            <span className="detail-icon">⏱️</span>
            <span className="detail-text">90 min</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🔥</span>
            <span className="detail-text">450 cal</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">💪</span>
            <span className="detail-text">8 exercises</span>
          </div>
        </div>
        <div className="workout-notes">
          <p>
            Great session! Increased bench press by 10 lbs. Form felt solid.
          </p>
        </div>
        <div className="workout-actions">
          <button className="btn-view">View Details</button>
          <button className="btn-edit">Edit</button>
        </div>
      </div>

      <div className="workout-card">
        <div className="workout-header">
          <div className="workout-type">
            <span className="type-badge cardio">Cardio</span>
            <h3>Morning Run</h3>
          </div>
          <div className="workout-date">Yesterday, 7:00 AM</div>
        </div>
        <div className="workout-details">
          <div className="detail-item">
            <span className="detail-icon">⏱️</span>
            <span className="detail-text">45 min</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🔥</span>
            <span className="detail-text">380 cal</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🏃</span>
            <span className="detail-text">5.2 km</span>
          </div>
        </div>
        <div className="workout-notes">
          <p>Steady pace. Feeling stronger each run.</p>
        </div>
        <div className="workout-actions">
          <button className="btn-view">View Details</button>
          <button className="btn-edit">Edit</button>
        </div>
      </div>

      <div className="workout-card">
        <div className="workout-header">
          <div className="workout-type">
            <span className="type-badge hiit">HIIT</span>
            <h3>Bootcamp Class</h3>
          </div>
          <div className="workout-date">2 days ago, 6:00 PM</div>
        </div>
        <div className="workout-details">
          <div className="detail-item">
            <span className="detail-icon">⏱️</span>
            <span className="detail-text">60 min</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🔥</span>
            <span className="detail-text">520 cal</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">👥</span>
            <span className="detail-text">Group Class</span>
          </div>
        </div>
        <div className="workout-notes">
          <p>Intense! Coach Sarah pushed us hard. Loved it.</p>
        </div>
        <div className="workout-actions">
          <button className="btn-view">View Details</button>
          <button className="btn-edit">Edit</button>
        </div>
      </div>

      <div className="workout-card">
        <div className="workout-header">
          <div className="workout-type">
            <span className="type-badge strength">Strength</span>
            <h3>Lower Body</h3>
          </div>
          <div className="workout-date">3 days ago, 5:30 PM</div>
        </div>
        <div className="workout-details">
          <div className="detail-item">
            <span className="detail-icon">⏱️</span>
            <span className="detail-text">85 min</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">🔥</span>
            <span className="detail-text">410 cal</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">💪</span>
            <span className="detail-text">7 exercises</span>
          </div>
        </div>
        <div className="workout-notes">
          <p>Squats: 225 lbs x 5. New PR!</p>
        </div>
        <div className="workout-actions">
          <button className="btn-view">View Details</button>
          <button className="btn-edit">Edit</button>
        </div>
      </div>
    </div>
  );
}
