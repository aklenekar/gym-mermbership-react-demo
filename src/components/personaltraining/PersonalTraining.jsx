import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./PersonalTraining.css";
import { adminService, personalTrainingUserService } from "../../services/Services";
import TrainerBookingCard from "./TrainerBookingCard";
import MySessionsList from "./MySessionsList";
import UpgradeUpsellModal from "../AICoach/UpgradeUpsellModal";

export default function PersonalTraining() {
  const [trainers, setTrainers] = useState([]);
  const [mySessions, setMySessions] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);

  function fetchTrainers() {
    adminService
      .fetchTrainersList()
      .then(setTrainers)
      .catch((error) => console.error(error));
  }

  function fetchMySessions() {
    personalTrainingUserService
      .fetchMySessions()
      .then(setMySessions)
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchTrainers();
    fetchMySessions();
    setIsLoading(false);
  }, []);

  const handleBooked = () => {
    setSelectedTrainer(null);
    fetchMySessions();
  };

  const handleCancel = async (sessionId) => {
    try {
      await personalTrainingUserService.cancelSession(sessionId);
      fetchMySessions();
    } catch (error) {
      console.error("Failed to cancel session:", error);
      alert("Could not cancel session.");
    }
  };

  const bookedThisMonth = mySessions.filter(
    (s) =>
      (s.status === "SCHEDULED" || s.status === "COMPLETED") &&
      new Date(s.scheduledAt).getMonth() === new Date().getMonth()
  ).length;

  return (
    <>
      <PageHeader
        title="PERSONAL TRAINING"
        subTitle="Book one-on-one sessions with certified trainers"
      />

      <section className="pt-content">
        <div className="container">
          <div className="pt-credit-banner">
            <span>Sessions this month: {bookedThisMonth}/4</span>
          </div>

          <MySessionsList sessions={mySessions} onCancel={handleCancel} />

          <h2 className="section-title">Choose a Trainer</h2>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="trainers-booking-grid">
              {trainers.map((trainer) => (
                <div key={trainer.id} className="pt-trainer-card">
                  <div className="pt-trainer-avatar">{trainer.initials}</div>
                  <div className="pt-trainer-info">
                    <h4>{trainer.fullName}</h4>
                    <p>{trainer.specialty}</p>
                  </div>
                  <button
                    className="btn-book-pt"
                    onClick={() => setSelectedTrainer(trainer)}
                  >
                    View Availability
                  </button>
                </div>
              ))}
            </div>
          )}

          {selectedTrainer && (
            <dialog open className="pt-booking-dialog">
              <TrainerBookingCard
                trainer={selectedTrainer}
                onClose={() => setSelectedTrainer(null)}
                onBooked={handleBooked}
                onAccessDenied={() => {
                  setSelectedTrainer(null);
                  setAccessDenied(true);
                }}
              />
            </dialog>
          )}

          {accessDenied && (
            <dialog open>
              <UpgradeUpsellModal onClose={() => setAccessDenied(false)} />
            </dialog>
          )}
        </div>
      </section>
    </>
  );
}