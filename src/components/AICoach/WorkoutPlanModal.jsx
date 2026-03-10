import { useState } from "react";
import "./RecommendedPlanCard.css";
import { aiService } from "../../services/Services";

export default function WorkoutPlanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegenerate() {
    setIsLoading(true);
    try {
      const response = await aiService.recommendedWorkout();
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="recommendations-modal">
      {/* Workout Plan Modal */}
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">
            <span>💪</span>
            AI Workout Plan Generator
          </h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="ai-split-layout">
          {/* Input Form */}
          <div className="ai-form-panel">
            <h3 className="input-section-title">
              Tell us about your fitness goals
            </h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Primary Goal</label>
                <select className="form-control" id="workoutGoal">
                  <option value="">Select your goal</option>
                  <option value="Build muscle">Build Muscle</option>
                  <option value="Lose weight">Lose Weight</option>
                  <option value="Increase strength">Increase Strength</option>
                  <option value="Improve endurance">Improve Endurance</option>
                  <option value="General fitness">General Fitness</option>
                </select>
              </div>

              <div className="form-group">
                <label>Experience Level</label>
                <select className="form-control" id="experienceYears">
                  <option value="0">Beginner (0-1 years)</option>
                  <option value="2">Intermediate (2-3 years)</option>
                  <option value="4">Advanced (4+ years)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Days Per Week</label>
                <select className="form-control" id="daysPerWeek">
                  <option value="3">3 days</option>
                  <option value="4">4 days</option>
                  <option value="5">5 days</option>
                  <option value="6">6 days</option>
                </select>
              </div>

              <div className="form-group">
                <label>Available Equipment</label>
                <select className="form-control" id="equipment" multiple>
                  <option value="Dumbbells">Dumbbells</option>
                  <option value="Barbells">Barbells</option>
                  <option value="Machines">Machines</option>
                  <option value="Bodyweight">Bodyweight</option>
                  <option value="Resistance Bands">Resistance Bands</option>
                </select>
                <small>Hold Ctrl/Cmd to select multiple</small>
              </div>
            </div>

            <button className="btn-generate" onClick={handleRegenerate}>
              <span>✨</span>
              Generate My Workout Plan
            </button>
          </div>

          <div className="ai-results-panel">
            {/* Loading State */}
            {isLoading && (
              <div className="loading-state">
                <div className="loading-spinner"></div>
                <p className="loading-text">
                  AI is creating your personalized workout plan...
                </p>
              </div>
            )}

            {/* Results */}
            {!isLoading && data && (
              <>
                <div className="modal-body-scroll">
                  <div className="workout-plan-list">
                    {data.map((day, index) => (
                      <div key={index} className="workout-day-card">
                        <div className="day-header">
                          <span className="day-name">{day["day"]}</span>
                          <span className="day-focus">{day["focus"]}</span>
                        </div>

                        {day.exercises && day.exercises.length > 0 ? (
                          <div className="exercises-list">
                            {day.exercises.map((exercise, idx) => (
                              <div key={idx} className="exercise-item">
                                <span className="exercise-name">
                                  {exercise.name}
                                </span>
                                <span className="exercise-details">
                                  {exercise.sets} × {exercise.reps}
                                </span>
                              </div>
                            ))}
                            <div className="rest-info">
                              Rest: {day["Rest Periods"]}s between sets
                            </div>
                          </div>
                        ) : (
                          <div className="rest-day">🛌 Recovery Day</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="modal-footer">
                <button className="btn-secondary" onClick={onClose}>
                  Close
                </button>
                <button className="btn-primary" onClick={handleRegenerate}>
                  🔄 Regenerate
                </button>
              </div> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
