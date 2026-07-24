import { useState, useEffect } from "react";
import { aiService } from "../../services/Services";
import "./AiPageLayout.css";
import BackButtonHeader from "../ui/BackButtonHeader";
import ClassesPlanModal from "./ClassesPlanModal";

export default function ClassRecommendationsPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function fetchClasses() {
    setIsLoading(true);
    aiService
      .recommendedClasses()
      .then((data) => setData(data))
      .catch((error) => console.error(error))
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
    </div>
  );
}