import BackButtonHeader from "../ui/BackButtonHeader";
import "./AiPageLayout.css";
import NutritionPlanModal from "./NutritionPlanModal";

export default function NutritionPlanPage() {
  return (
    <div className="ai-page-container">
      <BackButtonHeader
        title="Nutrition Plan"
        subtitle="Personalized meal plans with macro and calorie targets"
      />

      <div className="ai-page-content">
        <NutritionPlanModal isPageMode={true} isOpen={true} />
      </div>
    </div>
  );
}