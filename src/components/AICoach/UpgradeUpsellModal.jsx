import "../popups/PopupForm.css";

export default function UpgradeUpsellModal({ onClose }) {
  return (
    <>
      <div className="form-modal" id="planUsellModal">
        {/* Background Overlay */}
        <div className="modal-overlay" onClick={onClose} />

        {/* Modal Card */}
        <div className="modal-container">
          <div className="modal-header">
            <h3 className="modal-title" id="classModalTitle">
              Unlock AI Coach
            </h3>
            <button className="modal-close" onClick={onClose}>
              &times;
            </button>
          </div>

          <div className="modal-form">
            <p style={{ color: "var(--light-gray)", marginBottom: "1.5rem" }}>
              Nutrition plans, workout generation, and class recommendations are
              available on PRO and ELITE plans.
            </p>

            <div className="form-actions">
              <button
                onClick={() => (window.location.href = "/membership/upgrade")}
                className="form-btn-primary"
              >
                Upgrade Plan
              </button>
              <button onClick={onClose} className="form-btn-secondary">
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
