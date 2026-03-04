import { useRef, useState } from "react";
import { classesService } from "../../services/Services";
import RecommendationsModal from "../AICoach/RecommendedClassesCard";

export default function RecommendedClasses() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  function getRecommendations() {
    openModal();
    setIsLoading(true);
    classesService
      .recommendedClasses()
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error)) // Ensure setError exists or use console
      .finally(() => setIsLoading(false)); // Fixed: Wrapped in a function
  }

  return (
    <>
      <section className="ai-recommendations-banner">
        <div className="container">
          <div className="ai-banner-content">
            <div className="ai-banner-text">
              <h3>🤖 Get AI-Powered Class Recommendations</h3>
              <p>Based on your workout history, goals, and preferences</p>
            </div>
            <button
              className="btn-get-recommendations"
              onClick={getRecommendations}
            >
              Get Recommendations
            </button>
          </div>
        </div>
      </section>

      {/* Recommendations Modal */}
      <dialog ref={dialogRef}>
        <RecommendationsModal isLoading={isLoading} isOpen={openModal} onClose={closeModal} recommendations={data} handleRegenerate={getRecommendations}/>
      </dialog>
    </>
  );
}
