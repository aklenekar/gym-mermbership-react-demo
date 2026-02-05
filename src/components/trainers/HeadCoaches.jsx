export default function HeadCoaches({ headCoach }) {
  return (
    <div className="trainer-profile-card">
      <div className="trainer-profile-image">
        <div className="trainer-image-placeholder">
          <span className="trainer-initials">{headCoach.initials}</span>
        </div>
        <div className="trainer-badge">HEAD COACH</div>
      </div>
      <div className="trainer-profile-info">
        <h3>Sarah Mitchell</h3>
        <p className="trainer-specialty">{headCoach.specialty}</p>
        <div className="trainer-credentials">
          <span className="credential">CSCS</span>
          <span className="credential">NASM-CPT</span>
          <span className="credential">{headCoach.yearsExperience}+ Years</span>
        </div>
        <p className="trainer-bio">{headCoach.bio}</p>
        <div className="trainer-stats">
          <div className="trainer-stat">
            <span className="stat-number">{headCoach.clientsTrained}+</span>
            <span className="stat-label">Clients Trained</span>
          </div>
          <div className="trainer-stat">
            <span className="stat-number">{headCoach.rating}</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
        <div className="trainer-actions">
          <a href="#" className="btn-trainer-primary">
            Book Session
          </a>
          <a href="#" className="btn-trainer-secondary">
            View Schedule
          </a>
        </div>
      </div>
    </div>
  );
}
