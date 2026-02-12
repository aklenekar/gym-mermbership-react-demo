import { Link } from "react-router-dom";

export default function AdminTrainersCard() {
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
          <div className="trainer-item">
            <div className="trainer-rank">1</div>
            <div className="trainer-avatar">SM</div>
            <div className="trainer-info">
              <div className="trainer-name">Sarah Mitchell</div>
              <div className="trainer-specialty">Strength</div>
            </div>
            <div className="trainer-rating">⭐ 4.9</div>
          </div>
          <div className="trainer-item">
            <div className="trainer-rank">2</div>
            <div className="trainer-avatar">MR</div>
            <div className="trainer-info">
              <div className="trainer-name">Mike Rodriguez</div>
              <div className="trainer-specialty">HIIT</div>
            </div>
            <div className="trainer-rating">⭐ 4.8</div>
          </div>
          <div className="trainer-item">
            <div className="trainer-rank">3</div>
            <div className="trainer-avatar">EC</div>
            <div className="trainer-info">
              <div className="trainer-name">Emma Chen</div>
              <div className="trainer-specialty">Yoga</div>
            </div>
            <div className="trainer-rating">⭐ 4.8</div>
          </div>
        </div>
      </div>
    </div>
  );
}
