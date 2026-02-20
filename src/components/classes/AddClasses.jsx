import { Form } from "react-router-dom";
import "../popups/PopupForm.css";

export default function AddClasses({
  closeModal,
  fitnessClasses,
  isView,
  isEdit,
  setFitnessClasses,
}) {
  const title = isView
    ? `${fitnessClasses.name}`
    : isEdit
      ? "Edit Class"
      : "Add New Class";

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (isView) return;

    setFitnessClasses((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Form class="form-modal" id="classModal">
      <div class="modal-overlay" onClick={closeModal}></div>
      <div class="modal-container">
        <div class="modal-header">
          <h3 class="modal-title" id="classModalTitle">
            {title}
          </h3>
          <button class="modal-close" onClick={closeModal}>
            &times;
          </button>
        </div>

        <form class="modal-form" id="classForm">
          <div class="form-row">
            <div class="form-field">
              <label class="form-label">Class Name *</label>
              <input
                type="text"
                class="form-control"
                name="name"
                placeholder="Class Name"
                required
                value={fitnessClasses.name}
                disabled={isView}
                onChange={handleInputChange}
              />
            </div>
            <div class="form-field">
              <label class="form-label">Category *</label>
              <select
                class="form-control"
                name="category"
                required
                value={fitnessClasses.category}
                disabled={isView}
                onChange={handleInputChange}
              >
                <option value="">Select category</option>
                <option value="HIIT">HIIT</option>
                <option value="Strength">Strength</option>
                <option value="Cardio">Cardio</option>
                <option value="Yoga">Yoga</option>
                <option value="Boxing">Boxing</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label class="form-label">Instructor *</label>
              <select
                class="form-control"
                name="instructor"
                required
                value={fitnessClasses.instructor}
                disabled={isView}
                onChange={handleInputChange}
              >
                <option value="">Select instructor</option>
                <option value="Coach Sarah">Coach Sarah</option>
                <option value="Coach Mike">Coach Mike</option>
                <option value="Coach Emma">Coach Emma</option>
              </select>
            </div>
            <div class="form-field">
              <label class="form-label">Location *</label>
              <input
                type="text"
                class="form-control"
                name="location"
                placeholder="Location"
                required
                value={fitnessClasses.location}
                disabled={isView}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label class="form-label">Date *</label>
              <input
                type="date"
                class="form-control"
                name="date"
                required
                value={fitnessClasses.startDate}
                disabled={isView}
                onChange={handleInputChange}
              />
            </div>
            <div class="form-field">
              <label class="form-label">Time *</label>
              <input
                type="time"
                class="form-control"
                name="time"
                required
                value={fitnessClasses.startTime}
                disabled={isView}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label class="form-label">Duration (minutes) *</label>
              <input
                type="number"
                class="form-control"
                name="duration"
                placeholder="Duration (minutes)"
                min="15"
                max="180"
                required
                value={fitnessClasses.durationMinutes}
                disabled={isView}
                onChange={handleInputChange}
              />
            </div>
            <div class="form-field">
              <label class="form-label">Capacity *</label>
              <input
                type="number"
                class="form-control"
                name="capacity"
                placeholder="Capacity"
                min="1"
                max="50"
                required
                value={fitnessClasses.capacity}
                disabled={isView}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {!isView && (
            <div class="form-actions">
              <button
                type="button"
                class="form-btn-secondary"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button type="submit" class="form-btn-primary">
                Save Class
              </button>
            </div>
          )}
        </form>
      </div>
    </Form>
  );
}
