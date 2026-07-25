import { useState } from "react";
import { aiService } from "../../services/Services";
import "./PlanModal.css";

export default function WorkoutPlanModal() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    goals: "Build muscle",
    experienceYears: 1,
    daysPerWeek: 4,
    equipment: "Full Gym",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleRegenerate() {
    setIsLoading(true);
    try {
      // Format payload to match backend WorkoutPlanRequest DTO
      const payload = {
        goals: formData.goals,
        daysPerWeek: parseInt(formData.daysPerWeek, 10) || 3,
        experienceYears: parseInt(formData.experienceYears, 10) || 0,
        availableEquipment: formData.equipment ? [formData.equipment] : [],
      };

      const response = await aiService.recommendedWorkout(payload);
      setData(response);
    } catch (error) {
      console.error("Failed to generate workout plan:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="ai-page-wrapper">
      <div className="ai-split-layout">
        {/* Input Form Panel */}
        <div className="ai-form-panel">
          <h3 className="input-section-title">
            <span>💪</span> Workout Parameters
          </h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Primary Goal</label>
              <select
                className="form-control"
                name="goals"
                value={formData.goals}
                onChange={handleChange}
              >
                <option value="Build muscle">Build Muscle</option>
                <option value="Lose weight">Lose Weight</option>
                <option value="Increase strength">Increase Strength</option>
                <option value="Improve endurance">Improve Endurance</option>
                <option value="General fitness">General Fitness</option>
              </select>
            </div>

            <div className="form-group">
              <label>Experience Level</label>
              <select
                className="form-control"
                name="experienceYears"
                value={formData.experienceYears}
                onChange={handleChange}
              >
                <option value="0">Beginner (0-1 yrs)</option>
                <option value="2">Intermediate (2-3 yrs)</option>
                <option value="4">Advanced (4+ yrs)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Days Per Week</label>
              <select
                className="form-control"
                name="daysPerWeek"
                value={formData.daysPerWeek}
                onChange={handleChange}
              >
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
              </select>
            </div>

            <div className="form-group">
              <label>Equipment</label>
              <select
                className="form-control"
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
              >
                <option value="Full Gym">Full Gym Equipment</option>
                <option value="Dumbbells Only">Dumbbells Only</option>
                <option value="Bodyweight">Bodyweight Only</option>
              </select>
            </div>
          </div>

          <button
            className="btn-generate"
            onClick={handleRegenerate}
            disabled={isLoading}
          >
            <span>✨</span> Generate Workout Plan
          </button>
        </div>

        {/* Results Panel */}
        <div className="ai-results-panel">
          {isLoading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p className="loading-text">
                AI is creating your weekly routine...
              </p>
            </div>
          )}

          {!isLoading && !data && (
            <div className="empty-state">
              <span className="empty-icon">🏋️</span>
              <h3 className="empty-title">Build Your Weekly Routine</h3>
              <p className="empty-text">Select your target goal and training frequency to generate a structured workout split.</p>
            </div>
          )}

          {!isLoading && data && (
            <div className="workout-plan-list">
              {data.map((day, index) => (
                <div key={index} className="workout-day-card">
                  <div className="day-header">
                    <span className="day-name">{day.day}</span>
                    <span className="day-focus">{day.focus}</span>
                  </div>

                  {day.exercises && day.exercises.length > 0 ? (
                    <div className="exercises-list">
                      {day.exercises.map((exercise, idx) => (
                        <div key={idx} className="exercise-item">
                          <span className="exercise-name">{exercise.name}</span>
                          <span className="exercise-details">
                            {exercise.sets} × {exercise.reps}
                          </span>
                        </div>
                      ))}
                      <div className="rest-info">
                        Rest: {day["Rest Periods"] || 60}s between sets
                      </div>
                    </div>
                  ) : (
                    <div className="rest-day">🛌 Recovery Day</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}