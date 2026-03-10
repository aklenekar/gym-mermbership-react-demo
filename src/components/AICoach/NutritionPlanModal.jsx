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

            <button className="btn-generate" onClick={handleRegenerate}>
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
          {!isLoading && data && (
            <>
              <div className="modal-body-scroll">
                {/* Calorie & Macros Summary */}
                <div className="nutrition-summary">
                  <div className="calorie-card">
                    <div className="calorie-value">
                      {data.dailyCalorieTarget}
                    </div>
                    <div className="calorie-label">Daily Calories</div>
                  </div>
                  <div className="macro-cards">
                    <div className="macro-card protein">
                      <div className="macro-value">
                        {data.macroSplit.protein}g
                      </div>
                      <div className="macro-label">Protein</div>
                    </div>
                    <div className="macro-card carbs">
                      <div className="macro-value">
                        {data.macroSplit.carbs}g
                      </div>
                      <div className="macro-label">Carbs</div>
                    </div>
                    <div className="macro-card fats">
                      <div className="macro-value">{data.macroSplit.fats}g</div>
                      <div className="macro-label">Fats</div>
                    </div>
                  </div>
                </div>

                {/* Sample Meals */}
                <div className="meal-plan-section">
                  <h3 className="section-title">Daily Meal Plan</h3>
                  <div className="meals-list">
                    {data.sampleMeals.map((item, index) => (
                      <div key={index} className="meal-item">
                        <div className="meal-icon">
                          {item.meal === "Breakfast"
                            ? "🍳"
                            : item.meal === "Lunch"
                              ? "🍱"
                              : item.meal === "Dinner"
                                ? "🍽️"
                                : item.meal === "Snack"
                                  ? "🍎"
                                  : "🥛"}
                        </div>
                        <div className="meal-content">
                          <div className="meal-time">{item.meal}</div>
                          <div className="meal-food">{item.food}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Supplements (if any) */}
                {data.supplementSuggestions &&
                  data.supplementSuggestions.length > 0 && (
                    <div className="supplements-section">
                      <h3 className="section-title">Recommended Supplements</h3>
                      <div className="supplements-list">
                        {data.supplementSuggestions.map((supplement, index) => (
                          <div key={index} className="supplement-item">
                            💊 {supplement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
  );
}
