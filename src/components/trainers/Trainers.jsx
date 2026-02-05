export default function Trainers({ trainer }) {
  return (
    <div className="trainer-card">
      <div className="trainer-card-image">
        <div className="trainer-image-small">
          <span className="trainer-initials-small">{trainer.initials}</span>
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
        <a href="#" className="btn-book-compact">
          Book Session
        </a>
      </div>
    </div>
  );
}
