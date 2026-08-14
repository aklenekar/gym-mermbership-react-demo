import { useEffect, useState } from "react";
import { personalTrainingService } from "../../services/Services";

export default function SessionNotesModal({ session, closeModal }) {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function fetchNotes() {
    personalTrainingService
      .fetchSessionNotes(session.id)
      .then(setNotes)
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchNotes();
  }, [session.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    setIsSubmitting(true);
    try {
      await personalTrainingService.addSessionNote(session.id, content.trim());
      setContent("");
      fetchNotes();
    } catch (error) {
      console.error("Failed to add note:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h3 className="modal-title">Session Notes — {session.userName}</h3>
        <button className="modal-close" onClick={closeModal}>&times;</button>
      </div>

      <div className="modal-form">
        <form onSubmit={handleSubmit} className="form-row" style={{ gridTemplateColumns: "1fr" }}>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Add a progress note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit" className="form-btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Add Note"}
          </button>
        </form>

        <div className="notes-list" style={{ marginTop: "1.5rem" }}>
          {notes.length === 0 && <p className="empty-text">No notes yet.</p>}
          {notes.map((n) => (
            <div key={n.id} className="note-item" style={{ padding: "1rem", background: "var(--dark-gray)", borderRadius: "8px", marginBottom: "0.75rem" }}>
              <p style={{ color: "var(--white)" }}>{n.content}</p>
              <span style={{ fontSize: "0.8rem", color: "var(--light-gray)" }}>
                {new Date(n.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}