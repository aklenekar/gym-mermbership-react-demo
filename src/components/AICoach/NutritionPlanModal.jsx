import { useState } from "react";
import { aiService } from "../../services/Services";
import "./PlanModal.css";

export default function NutritionPlanModal({ openModal }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    goals: "Build muscle",
    weight: 75,
    age: 30,
    activityLevel: "Moderately active",
    restrictions: "",
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
      // Format payload to match backend NutritionRequest DTO
      const payload = {
        goal: formData.goals,
        weight: parseFloat(formData.weight) || 0,
        age: parseInt(formData.age, 10) || 0,
        activityLevel: formData.activityLevel,
        dietaryRestrictions: formData.restrictions
          ? formData.restrictions.split(",").map((item) => item.trim()).filter(Boolean)
          : [],
      };

      const response = await aiService.recommendedNutrition(payload);
      setData(response);
    } catch (error) {
      console.error("Failed to generate nutrition plan:", error);
      openModal();
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
            <span>🥗</span> Meal Plan Preferences
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
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="75"
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="30"
              />
            </div>

            <div className="form-group">
              <label>Activity Level</label>
              <select
                className="form-control"
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
              >
                <option value="Sedentary">Sedentary (desk job)</option>
                <option value="Lightly active">Lightly Active (1-3 days/wk)</option>
                <option value="Moderately active">Moderately Active (3-5 days/wk)</option>
                <option value="Very active">Very Active (6-7 days/wk)</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>Dietary Restrictions</label>
              <input
                type="text"
                className="form-control"
                name="restrictions"
                value={formData.restrictions}
                onChange={handleChange}
                placeholder="e.g., Vegetarian, No dairy, Gluten-free"
              />
            </div>
          </div>

          <button
            className="btn-generate"
            onClick={handleRegenerate}
            disabled={isLoading}
          >
            <span>✨</span> Generate Nutrition Plan
          </button>
        </div>

        {/* Results Panel */}
        <div className="ai-results-panel">
          {isLoading && (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p className="loading-text">AI is calculating your nutrition plan...</p>
            </div>
          )}

          {!isLoading && !data && (
            <div className="empty-state">
              <span className="empty-icon">🥗</span>
              <h3 className="empty-title">Ready for your plan?</h3>
              <p className="empty-text">Fill out your preferences on the left to generate your custom meal target and macro split.</p>
            </div>
          )}

          {!isLoading && data && (
            <div className="results-content">
              {/* Calorie & Macros Summary */}
              <div className="nutrition-summary">
                <div className="calorie-card">
                  <div className="calorie-value">{data.dailyCalorieTarget}</div>
                  <div className="calorie-label">Daily Calories</div>
                </div>
                <div className="macro-cards">
                  <div className="macro-card protein">
                    <div className="macro-value">{data.macroSplit.protein}g</div>
                    <div className="macro-label">Protein</div>
                  </div>
                  <div className="macro-card carbs">
                    <div className="macro-value">{data.macroSplit.carbs}g</div>
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
                <h3 className="section-title">Daily Meal Breakdown</h3>
                <div className="meals-list">
                  {data.sampleMeals?.map((item, index) => (
                    <div key={index} className="meal-item">
                      <div className="meal-icon">
                        {item.meal === "Breakfast"
                          ? "🍳"
                          : item.meal === "Lunch"
                          ? "🍱"
                          : item.meal === "Dinner"
                          ? "🍽️"
                          : "🍎"}
                      </div>
                      <div className="meal-content">
                        <div className="meal-time">{item.meal}</div>
                        <div className="meal-food">{item.food}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supplements */}
              {data.supplementSuggestions && data.supplementSuggestions.length > 0 && (
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
          )}
        </div>
      </div>
    </div>
  );
}