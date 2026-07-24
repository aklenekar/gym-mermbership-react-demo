import { useNavigate } from "react-router-dom";
import PageHeader from "../pageHeader/PageHeader";
import AiServiceCard from "./AiServiceCard";
import "./AiCoach.css";

export default function AiCoach() {
  const navigate = useNavigate();

  return (
    <>
      <PageHeader
        title="AI COACH"
        subTitle="Your personal AI fitness assistant"
      />

      <section className="ai-coach-content">
        <div className="container">
          {/* AI Services Grid - Refactored for 3 Cards */}
          <div className="ai-services-grid">
            {/* Class Recommendations */}
            <AiServiceCard
              icon="🏋️"
              title="Class Recommendations"
              description="Get personalized class suggestions based on your goals and fitness level"
              buttonName="Get Classes"
              onBtnClick={() => navigate("/ai-coach/classes")}
            />

            {/* Workout Plan Generator */}
            <AiServiceCard
              icon="💪"
              title="Workout Plan Generator"
              description="Create a custom weekly workout plan tailored to your experience and goals"
              buttonName="Create Plan"
              onBtnClick={() => navigate("/ai-coach/workout")}
            />

            {/* Nutrition Advisor */}
            <AiServiceCard
              icon="🥗"
              title="Nutrition Plan"
              description="Get a personalized meal plan with macros and calorie targets"
              buttonName="Get Meal Plan"
              onBtnClick={() => navigate("/ai-coach/nutrition")}
            />
          </div>

          {/* Recent AI Interactions */}
          <div className="recent-interactions">
            <h3 className="section-title">Recent AI Sessions</h3>
            <div className="interactions-list">
              <div className="interaction-item">
                <span className="interaction-icon">🏋️</span>
                <div className="interaction-details">
                  <div className="interaction-title">Class Recommendations</div>
                  <div className="interaction-date">2 hours ago</div>
                </div>
                <button
                  className="btn-view-interaction"
                  onClick={() => navigate("/ai-coach/classes")}
                >
                  View
                </button>
              </div>
              {/* More items... */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}