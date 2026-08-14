import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./TrainerAvailability.css";
import { personalTrainingService } from "../../services/Services";

const DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

export default function TrainerAvailability() {
  const [slots, setSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ dayOfWeek: "MONDAY", startTime: "09:00", endTime: "17:00" });

  function fetchSlots() {
    setIsLoading(true);
    personalTrainingService
      .fetchMySlots()
      .then(setSlots)
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchSlots();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await personalTrainingService.addSlot(form);
      fetchSlots();
    } catch (error) {
      console.error("Failed to add slot:", error);
      alert("Could not add availability slot.");
    }
  };

  const handleDelete = async (slotId) => {
    try {
      await personalTrainingService.deleteSlot(slotId);
      fetchSlots();
    } catch (error) {
      console.error("Failed to delete slot:", error);
    }
  };

  return (
    <>
      <PageHeader
        title="MY AVAILABILITY"
        subTitle="Set your weekly personal training hours"
      />

      <section className="admin-content">
        <div className="container">
          <form className="availability-form" onSubmit={handleAdd}>
            <div className="form-field">
              <label className="form-label">Day</label>
              <select
                name="dayOfWeek"
                className="form-control"
                value={form.dayOfWeek}
                onChange={handleChange}
              >
                {DAYS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label className="form-label">Start Time</label>
              <input
                type="time"
                name="startTime"
                className="form-control"
                value={form.startTime}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label className="form-label">End Time</label>
              <input
                type="time"
                name="endTime"
                className="form-control"
                value={form.endTime}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-add-slot">
              + Add Slot
            </button>
          </form>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="availability-list">
              {slots.length === 0 && <p className="empty-text">No availability set yet.</p>}
              {slots.map((slot) => (
                <div className="availability-item" key={slot.id}>
                  <span className="slot-day">{slot.dayOfWeek}</span>
                  <span className="slot-time">
                    {slot.startTime} - {slot.endTime}
                  </span>
                  <button className="btn-delete-slot" onClick={() => handleDelete(slot.id)}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}