import { useNavigate } from "react-router-dom";
import "./BackButtonHeader.css";

export default function BackButtonHeader({ title, subtitle }) {
  const navigate = useNavigate();

  return (
    <div className="page-nav-header">
      <button className="btn-back" onClick={() => navigate("/ai-coach")}>
        <span className="back-arrow">←</span> Back to AI Coach
      </button>
      {title && (
        <div className="nav-header-title">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
    </div>
  );
}