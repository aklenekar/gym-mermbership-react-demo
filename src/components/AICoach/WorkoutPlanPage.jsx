import WorkoutPlanModal from "../../components/aiCoach/WorkoutPlanModal";
import BackButtonHeader from "../ui/BackButtonHeader";
import "./AiPageLayout.css";

export default function WorkoutPlanPage() {
  return (
    <div className="ai-page-container">
      <BackButtonHeader
        title="Workout Plan Generator"
        subtitle="Custom weekly workout plans tailored to your experience"
      />

      <div className="ai-page-content">
        <WorkoutPlanModal isPageMode={true} isOpen={true} />
      </div>
    </div>
  );
}