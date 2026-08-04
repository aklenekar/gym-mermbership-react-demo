import { useRef } from "react";
import BackButtonHeader from "../ui/BackButtonHeader";
import "./AiPageLayout.css";
import NutritionPlanModal from "./NutritionPlanModal";
import UpgradeUpsellModal from "./UpgradeUpsellModal";

export default function NutritionPlanPage() {
  const dialogRef = useRef(null);
  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();
  return (
    <div className="ai-page-container">
      <BackButtonHeader
        title="Nutrition Plan"
        subtitle="Personalized meal plans with macro and calorie targets"
      />

      <div className="ai-page-content">
        <NutritionPlanModal isPageMode={true} isOpen={true} openModal={openModal} />
      </div>

      <dialog ref={dialogRef}>
        <UpgradeUpsellModal onClose={() => closeModal()} />
      </dialog>
    </div>
  );
}
