import { Link } from "react-router-dom";

export default function AdminTrainersCard({ topTrainers }) {
  return (
    <div className="admin-card">
      <div className="card-header">
        <h3>Top Trainers</h3>
        <Link to="/manageTrainers" className="view-link">
          View All
        </Link>
      </div>
      <div className="card-body">
        <div className="trainer-list">
          {topTrainers.map((topTrainer) => {
            return (
              <div className="trainer-item">
                <div className="trainer-rank">{topTrainer.rank}</div>
                <div className="trainer-avatar">{topTrainer.initials}</div>
                <div className="trainer-info">
                  <div className="trainer-name">{topTrainer.name}</div>
                  <div className="trainer-specialty">
                    {topTrainer.specialty}
                  </div>
                </div>
                <div className="trainer-rating">⭐ {topTrainer.rating}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
