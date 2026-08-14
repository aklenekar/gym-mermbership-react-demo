import { useEffect, useRef, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./TrainerPTSessions.css";
import { personalTrainingService } from "../../services/Services";
import SessionNotesModal from "./SessionNotesModal";

export default function TrainerPTSessions() {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const dialogRef = useRef(null);
  const openModal = (session) => {
    setSelectedSession(session);
    dialogRef.current.showModal();
  };
  const closeModal = () => {
    dialogRef.current.close();
    setSelectedSession(null);
  };

  function fetchSessions() {
    setIsLoading(true);
    personalTrainingService
      .fetchTrainerSessions()
      .then(setSessions)
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleComplete = async (sessionId) => {
    try {
      await personalTrainingService.completeSession(sessionId);
      fetchSessions();
    } catch (error) {
      console.error("Failed to complete session:", error);
    }
  };

  return (
    <>
      <PageHeader title="MY PT SESSIONS" subTitle="Your one-on-one training bookings" />

      <section className="admin-content">
        <div className="container">
          <dialog ref={dialogRef}>
            {selectedSession && (
              <SessionNotesModal session={selectedSession} closeModal={closeModal} />
            )}
          </dialog>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="pt-sessions-list">
              {sessions.length === 0 && <p className="empty-text">No sessions booked yet.</p>}
              {sessions.map((s) => (
                <div className="pt-session-card" key={s.id}>
                  <div className="pt-session-time">
                    {new Date(s.scheduledAt).toLocaleString()}
                  </div>
                  <div className="pt-session-details">
                    <div className="pt-session-client">{s.userName}</div>
                    {s.goalFocus && <div className="pt-session-goal">{s.goalFocus}</div>}
                  </div>
                  <span className={`pt-session-status ${s.status.toLowerCase()}`}>
                    {s.status}
                  </span>
                  <div className="pt-session-actions">
                    <button className="btn-notes" onClick={() => openModal(s)}>
                      Notes
                    </button>
                    {s.status === "SCHEDULED" && (
                      <button className="btn-complete" onClick={() => handleComplete(s.id)}>
                        Mark Complete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}