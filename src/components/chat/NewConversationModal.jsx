// src/components/chat/NewConversationModal.jsx
import { useEffect, useState } from "react";
import { adminService, chatService } from "../../services/Services";

export default function NewConversationModal({ closeModal, onConversationStarted }) {
  const [trainers, setTrainers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    adminService
      .fetchTrainersList()
      .then(setTrainers)
      .catch((error) => console.error(error));
  }, []);

  async function handleSelectTrainer(trainer) {
    setIsLoading(true);
    try {
      const conversation = await chatService.startConversation(trainer.id);
      onConversationStarted(conversation);
      closeModal();
    } catch (error) {
      console.error("Failed to start conversation:", error);
    } finally {
      setIsLoading(false);
    }
  }

  const filteredTrainers = trainers.filter((t) =>
    t.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="form-modal">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-container new-conversation-container">
        <div className="modal-header">
          <h3 className="modal-title">New Message</h3>
          <button className="modal-close" onClick={closeModal}>&times;</button>
        </div>

        <div className="modal-form">
          <input
            type="text"
            className="search-input"
            placeholder="Search trainers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />

          <div className="trainer-picker-list">
            {filteredTrainers.length === 0 && (
              <p className="conversation-empty-text">No trainers found.</p>
            )}
            {filteredTrainers.map((trainer) => (
              <button
                key={trainer.id}
                className="trainer-picker-item"
                onClick={() => handleSelectTrainer(trainer)}
                disabled={isLoading}
              >
                <div className="conversation-avatar">{trainer.initials}</div>
                <div>
                  <div className="conversation-name">{trainer.fullName}</div>
                  <div className="conversation-preview">{trainer.specialty}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}