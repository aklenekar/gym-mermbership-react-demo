import { useRef, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./AiCoach.css";
import { aiService } from "../../services/Services";
import WorkoutPlanModal from "./WorkoutPlanModal";
import NutritionPlanModal from "./NutritionPlanModal";
import AiServiceCard from "./AiServiceCard";
import RecommendationsModal from "./RecommendedClassesCard";
import AiChatModal from "./AiChatModal";

// 1. Define the configuration outside the component
const COACH_CONFIG = {
  classes: {
    Component: RecommendationsModal,
    title: "Class Recommendations",
  },
  workout: {
    Component: WorkoutPlanModal,
    title: "Workout Plan",
  },
  nutrition: {
    Component: NutritionPlanModal,
    title: "Nutrition Plan",
  },
  chat: {
    Component: AiChatModal,
    title: "Ai Chat",
  },
};

export default function AiCoach() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dialogRef = useRef(null);
  const [activeType, setActiveType] = useState(null);

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  function getClassesRecommendations(activeType) {
    setActiveType(activeType);
    openModal();
    setIsLoading(true);
    aiService
      .recommendedClasses()
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error)) // Ensure setError exists or use console
      .finally(() => setIsLoading(false)); // Fixed: Wrapped in a function
  }

  function getRecommendations(activeType) {
    setActiveType(activeType);
    openModal();
  }

  let SelectedModal = activeType ? COACH_CONFIG[activeType].Component : null;

  return (
    <>
      <PageHeader
        title="AI COACH"
        subTitle="Your personal AI fitness assistant"
      />

      <section className="ai-coach-content">
        <div className="container">
          {/* AI Services Grid */}
          <div className="ai-services-grid">
            {/* Class Recommendations */}
            <AiServiceCard
              icon="🎯"
              title="Class Recommendations"
              description="Get personalized class suggestions based on your goals and
                fitness level"
              buttonName="Get Classes"
              onBtnClick={() => getClassesRecommendations("classes")}
            />

            {/* Workout Plan Generator */}
            <AiServiceCard
              icon="💪"
              title="Workout Plan Generator"
              description="Create a custom weekly workout plan tailored to your experience
                and goals"
              buttonName="Create Plan"
              onBtnClick={() => getRecommendations("workout")}
            />

            {/* Nutrition Advisor */}
            <AiServiceCard
              icon="🥗"
              title="Nutrition Plan"
              description="Get a personalized meal plan with macros and calorie targets"
              buttonName="Get Meal Plan"
              onBtnClick={() => getRecommendations("nutrition")}
            />

            {/* AI Chat */}
            <AiServiceCard
              icon="💬"
              title="AI Chat Assistantn"
              description="Ask any fitness, nutrition, or training questions"
              buttonName="Start Chat"
              onBtnClick={() => getRecommendations("chat")}
            />
          </div>

          {/* Recent AI Interactions */}
          <div className="recent-interactions">
            <h3 className="section-title">Recent AI Sessions</h3>
            <div className="interactions-list">
              <div className="interaction-item">
                <span className="interaction-icon">🎯</span>
                <div className="interaction-details">
                  <div className="interaction-title">Class Recommendations</div>
                  <div className="interaction-date">2 hours ago</div>
                </div>
                <button className="btn-view-interaction">View</button>
              </div>
              {/* More items... */}
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Modal */}
      <dialog ref={dialogRef}>
        {SelectedModal && (
          <SelectedModal
            isLoading={isLoading}
            isOpen={openModal}
            onClose={closeModal}
            recommendations={data}
            handleRegenerate={getRecommendations}
          />
        )}
      </dialog>
    </>
  );
}
