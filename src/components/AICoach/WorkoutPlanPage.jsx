import { useRef } from "react";
import BackButtonHeader from "../ui/BackButtonHeader";
import "./AiPageLayout.css";
import UpgradeUpsellModal from "./UpgradeUpsellModal";
import WorkoutPlanModal from "./WorkoutPlanModal";

export default function WorkoutPlanPage() {
  const dialogRef = useRef(null);
  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return (
    <div className="ai-page-container">
      <BackButtonHeader
        title="Workout Plan Generator"
        subtitle="Custom weekly workout plans tailored to your experience"
      />

      <div className="ai-page-content">
        <WorkoutPlanModal isPageMode={true} isOpen={true} openModal={openModal} />
      </div>

      <dialog ref={dialogRef}>
        <UpgradeUpsellModal onClose={() => closeModal()} />
      </dialog>
    </div>
  );
}
