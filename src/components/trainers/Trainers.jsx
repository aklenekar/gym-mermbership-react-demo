import { Link } from "react-router-dom";

export default function Trainers({ trainer }) {
  return (
    <div className="trainer-card">
      <div className="trainer-card-image">
        <div className="trainer-image-small">
          {trainer.imageUrl ? (
            <img
              src={trainer.imageUrl}
              alt={trainer.fullName}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}
          <span
            className="trainer-initials-small"
            style={{ display: trainer.imageUrl ? "none" : "flex" }}
          >
            {trainer.initials}
          </span>
        </div>
      </div>
      <div className="trainer-card-content">
        <h4>{trainer.fullName}</h4>
        <p className="specialty">{trainer.specialty}</p>
        <div className="credentials-compact">
          <span>RYT-500</span>
          <span>{trainer.yearsExperience} Years</span>
        </div>
        <p className="trainer-description">{trainer.bio}</p>
        <Link to="/auth" className="btn-book-compact">
          Book Session
        </Link>
      </div>
    </div>
  );
}
