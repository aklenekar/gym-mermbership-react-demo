import { useState } from "react";
import { aiService } from "../../services/Services";
import "./RecommendedPlanCard.css";

export default function NutritionPlanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegenerate() {
    setIsLoading(true);
    try {
      const response = await aiService.recommendedNutrition();
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="recommendations-modal">
      {/* Nutrition Plan Modal */}
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">
            <span>🥗</span>
            AI Nutrition Plan
          </h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="ai-modal-body">
          {/* Input Form */}
          <div className="ai-input-section" id="nutritionInputForm">
            <h3 className="input-section-title">Let's create your meal plan</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Primary Goal</label>
                <select className="form-control" id="nutritionGoal">
                  <option value="Build muscle">Build Muscle</option>
                  <option value="Lose fat">Lose Fat</option>
                  <option value="Maintain weight">Maintain Weight</option>
                  <option value="Performance">Athletic Performance</option>
                </select>
              </div>

              <div className="form-group">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  className="form-control"
                  id="weight"
                  placeholder="75"
                />
              </div>

              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="30"
                />
              </div>

              <div className="form-group">
                <label>Activity Level</label>
                <select className="form-control" id="activityLevel">
                  <option value="Sedentary">Sedentary (desk job)</option>
                  <option value="Lightly active">
                    Lightly Active (1-3 days/week)
                  </option>
                  <option value="Moderately active">
                    Moderately Active (3-5 days/week)
                  </option>
                  <option value="Very active">
                    Very Active (6-7 days/week)
                  </option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Dietary Restrictions</label>
                <input
                  type="text"
                  className="form-control"
                  id="restrictions"
                  placeholder="e.g., Vegetarian, No dairy, Gluten-free (separate with commas)"
                />
              </div>
            </div>

            <button className="btn-generate" onclick="generateNutritionPlan()">
              <span>✨</span>
              Generate My Nutrition Plan
            </button>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p className="loading-text">
                AI is calculating your nutrition plan...
              </p>
            </div>
          )}

          {/* Results */}
          {!isLoading && data && data.length > 0 && (
            <div className="ai-results">
              <div className="results-header">
                <h3 className="results-title">
                  Your Personalized Nutrition Plan
                </h3>
                <button className="btn-regenerate" onClick={handleRegenerate}>
                  <span>🔄</span> Generate New Plan
                </button>
              </div>

              <div className="nutrition-plan-content" id="nutritionPlanContent">
                {/* AI response will be rendered here */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
