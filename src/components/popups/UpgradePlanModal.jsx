import { useState } from "react";
import "../popups/PopupForm.css";

const PLANS = [
  { value: "STARTER", name: "Starter", price: 29 },
  { value: "PRO", name: "Pro", price: 49 },
  { value: "ELITE", name: "Elite", price: 79 },
];

export default function UpgradePlanModal({ currentPlan, closeModal, handleUpgrade, isSubmitting }) {
  const [selectedPlan, setSelectedPlan] = useState(currentPlan);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpgrade(selectedPlan);
  };

  return (
    <div className="form-modal">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-title">Upgrade Membership Plan</h3>
          <button className="modal-close" onClick={closeModal}>&times;</button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-row" style={{ gridTemplateColumns: "1fr" }}>
            {PLANS.map((plan) => (
              <label key={plan.value} className="form-label">
                <input
                  type="radio"
                  name="plan"
                  value={plan.value}
                  checked={selectedPlan === plan.value}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  disabled={plan.value === currentPlan}
                />{" "}
                {plan.name} - ${plan.price}/month
                {plan.value === currentPlan && " (Current)"}
              </label>
            ))}
          </div>

          <div className="form-actions">
            <button type="button" className="form-btn-secondary" onClick={closeModal}>
              Cancel
            </button>
            <button
              type="submit"
              className="form-btn-primary"
              disabled={isSubmitting || selectedPlan === currentPlan}
            >
              {isSubmitting ? "Upgrading..." : "Confirm Upgrade"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}