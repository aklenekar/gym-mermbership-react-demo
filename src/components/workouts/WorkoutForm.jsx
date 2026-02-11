import { Form } from "react-router-dom";
import "./WorkoutForm.css";

export default function WorkoutForm({
  closeModal,
  handleSubmit,
  isSubmitting,
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-content workout-modal">
        <div className="modal-header">
          <h3>Log New Workout</h3>
          <button className="modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>
        <Form className="workout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="workoutCategory">Workout Category *</label>
            <select
              id="workoutCategory"
              name="category"
              className="filter-dropdown"
              required
            >
              <option value="">Select type</option>
              <option value="HIIT">HIIT</option>
              <option value="Yoga">Yoga</option>
              <option value="Strength">Strength</option>
              <option value="Cardio">Cardio</option>
              <option value="Boxing">Boxing</option>
              <option value="Pilates">Pilates</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label for="workoutDate">Date *</label>
              <input type="date" id="workoutDate" name="startDate" required />
            </div>
            <div className="form-group">
              <label for="workoutTime">Time *</label>
              <input type="time" id="workoutTime" name="startTime" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label for="duration">Duration (minutes) *</label>
              <input
                type="number"
                id="duration"
                name="durationMinutes"
                min="1"
                placeholder="60"
                required
              />
            </div>
            <div className="form-group">
              <label for="calories">Calories Burned</label>
              <input
                type="number"
                id="calories"
                name="caloriesBurned"
                min="0"
                placeholder="450"
              />
            </div>
          </div>

          <div className="form-group">
            <label for="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              placeholder="How did it go? Any PRs or observations?"
            ></textarea>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancel" onClick={closeModal}>
              Cancel
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging..." : "Log Workout"}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
