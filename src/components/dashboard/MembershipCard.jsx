import { useRef, useState } from "react";
import { formatDate } from "../../../util/dateUtils";
import "./MembershipCard.css";
import UpgradePlanModal from "../../AICoach/../popups/../members/../price/../../progress/../../popups/UpgradePlanModal"; // adjust path
import { profileService } from "../../../services/Services";

export default function MembershipCard({ memebership, onUpgrade }) {
  const dialogRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  const handleUpgrade = async (plan) => {
    setIsSubmitting(true);
    try {
      await profileService.upgradePlan(plan);
      closeModal();
      onUpgrade?.();
    } catch (error) {
      console.error("Failed to upgrade plan:", error);
      alert("Could not upgrade plan. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dash-card membership-info">
      <dialog ref={dialogRef}>
        <UpgradePlanModal
          currentPlan={memebership.plan}
          closeModal={closeModal}
          handleUpgrade={handleUpgrade}
          isSubmitting={isSubmitting}
        />
      </dialog>

      <div className="dash-card-header">
        <h3>Your Membership</h3>
        <span className="badge badge-pro">{memebership.plan}</span>
      </div>
      <div className="dash-card-body">
        <div className="membership-details">
          <div className="detail-row">
            <span className="detail-label">Plan</span>
            <span className="detail-value">{memebership.plan}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Member Since</span>
            <span className="detail-value">{formatDate(memebership.memberSince)}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Next Billing</span>
            <span className="detail-value">{formatDate(memebership.nextBillingDate)}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Status</span>
            <span className="status-active">{memebership.status}</span>
          </div>
        </div>
        <div className="membership-actions">
          <button className="btn-outline" onClick={openModal}>Upgrade Plan</button>
          <a href="#" className="btn-link">Manage Billing</a>
        </div>
      </div>
    </div>
  );
}