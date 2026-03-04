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

        <div className="ai-modal-body">
          {/* Input Form */}
          <div className="ai-input-section" id="workoutInputForm">
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
          {!isLoading && data && data.length > 0 && (
            <div className="ai-results" id="workoutResults">
              <div className="results-header">
                <h3 className="results-title">
                  Your Personalized Workout Plan
                </h3>
                <button className="btn-regenerate" onClick={handleRegenerate}>
                  <span>🔄</span> Generate New Plan
                </button>
              </div>

              <div className="workout-plan-content">
                {/* AI response will be rendered here */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
