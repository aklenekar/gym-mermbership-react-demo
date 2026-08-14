import { useEffect, useState } from "react";
import { personalTrainingUserService } from "../../services/Services";

export default function TrainerBookingCard({ trainer, onClose, onBooked, onAccessDenied }) {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [slots, setSlots] = useState([]);
  const [goalFocus, setGoalFocus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  function fetchSlots() {
    setIsLoadingSlots(true);
    personalTrainingUserService
      .fetchOpenSlots(trainer.id, date)
      .then(setSlots)
      .catch((error) => console.error(error))
      .finally(() => setIsLoadingSlots(false));
  }

  useEffect(() => {
    fetchSlots();
  }, [date]);

  const handleBook = async (slot) => {
    setIsSubmitting(true);
    try {
      await personalTrainingUserService.bookSession({
        trainerId: trainer.id,
        scheduledAt: slot.start,
        durationMinutes: 60,
        goalFocus,
      });
      onBooked();
    } catch (error) {
      if (error.status === 403) {
        onAccessDenied();
      } else {
        console.error("Booking failed:", error);
        alert(error.info?.message || "Could not book session.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h3 className="modal-title">Book with {trainer.fullName}</h3>
        <button className="modal-close" onClick={onClose}>&times;</button>
      </div>

      <div className="modal-form">
        <div className="form-field">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="form-label">Goal / Focus (optional)</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Upper body strength"
            value={goalFocus}
            onChange={(e) => setGoalFocus(e.target.value)}
          />
        </div>

        <div className="slots-grid" style={{ marginTop: "1.5rem" }}>
          {isLoadingSlots && <p>Loading slots...</p>}
          {!isLoadingSlots && slots.length === 0 && <p className="empty-text">No open slots for this date.</p>}
          {slots.map((slot) => (
            <button
              key={slot.start}
              className="btn-slot"
              disabled={isSubmitting}
              onClick={() => handleBook(slot)}
            >
              {new Date(slot.start).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}