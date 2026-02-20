import { Form } from "react-router-dom";
import "../popups/PopupForm.css";

export default function AddTrainer({ closeModal, trainer, isView, isEdit }) {
  const title = isView
    ? `${trainer.fullName}`
    : isEdit
      ? "Edit Member"
      : "Add new Trainer";

  return (
    <>
      <Form class="form-modal" id="trainerModal">
        <div class="modal-overlay" onClick={closeModal}></div>
        <div class="modal-container">
          <div class="modal-header">
            <h3 class="modal-title" id="trainerModalTitle">
              {title}
            </h3>
            <button class="modal-close" onClick={closeModal}>
              &times;
            </button>
          </div>

          <form class="modal-form" id="trainerForm">
            <div class="form-row">
              <div class="form-field">
                <label class="form-label">Full Name *</label>
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  placeholder="Full Name"
                  value={trainer.fullName}
                  required
                  disabled={isView}
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-field">
                <label class="form-label">Email *</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Email"
                  value={trainer.email}
                  required
                  disabled={isView}
                />
              </div>
              <div class="form-field">
                <label class="form-label">Phone *</label>
                <input
                  type="tel"
                  class="form-control"
                  name="phone"
                  placeholder="Phone number"
                  value={trainer.phone}
                  required
                  disabled={isView}
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-field">
                <label class="form-label">Specialty *</label>
                <input
                  type="text"
                  class="form-control"
                  name="specialty"
                  placeholder="Speciality"
                  value={trainer.specialty}
                  required
                  disabled={isView}
                />
              </div>
              <div class="form-field">
                <label class="form-label">Years of Experience *</label>
                <input
                  type="number"
                  class="form-control"
                  name="experience"
                  placeholder="Years of Experience"
                  min="0"
                  max="50"
                  value={trainer.yearsExperience}
                  required
                  disabled={isView}
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-field full-width">
                <label class="form-label">Certifications</label>
                <input
                  type="text"
                  class="form-control"
                  name="certifications"
                  placeholder="Certifications"
                  value={trainer.certifications}
                  disabled={isView}
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-field full-width">
                <label class="form-label">Bio</label>
                <textarea
                  class="form-control"
                  name="bio"
                  rows="4"
                  placeholder="Tell us about the trainer..."
                  value={trainer.bio}
                  disabled={isView}
                ></textarea>
              </div>
            </div>

            <div class="form-row">
              <div class="form-field">
                <label class="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="isHeadCoach"
                    checked={trainer.isHeadCoach ? true : false}
                    disabled={isView}
                  />
                  <span>Head Coach</span>
                </label>
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
                  Save Trainer
                </button>
              </div>
            )}
          </form>
        </div>
      </Form>
    </>
  );
}
