import { useState, useEffect, useRef } from "react";
import { aiService } from "../../services/Services";
import "./AiPageLayout.css";
import BackButtonHeader from "../ui/BackButtonHeader";
import ClassesPlanModal from "./ClassesPlanModal";
import UpgradeUpsellModal from "./UpgradeUpsellModal";

export default function ClassRecommendationsPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dialogRef = useRef(null);
  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  function fetchClasses() {
    setIsLoading(true);
    aiService
      .recommendedClasses()
      .then((data) => setData(data))
      .catch((error) => openModal())
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchClasses();
  }, []);

  return (
    <div className="ai-page-container">
      <BackButtonHeader
        title="Class Recommendations"
        subtitle="Personalized suggestions based on your goals and fitness level"
      />

      <div className="ai-page-content">
        <ClassesPlanModal
          isLoading={isLoading}
          recommendations={data}
          handleRegenerate={fetchClasses}
          isPageMode={true} // Passed flag to disable modal overlays
          isOpen={true} // Always open in page mode
        />
      </div>

      <dialog ref={dialogRef}>
        <UpgradeUpsellModal onClose={() => closeModal()} />
      </dialog>
    </div>
  );
}
