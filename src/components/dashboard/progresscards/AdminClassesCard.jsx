import { Link } from "react-router-dom";

export default function RecentClassesCard() {
  return (
    <div className="admin-card">
      <div className="card-header">
        <h3>Today's Classes</h3>
        <Link to="/manageClasses" className="view-link">
          View Schedule
        </Link>
      </div>
      <div className="card-body">
        <div className="class-list">
          <div className="class-item">
            <div className="class-time">6:00 AM</div>
            <div className="class-details">
              <div className="class-name">HIIT Bootcamp</div>
              <div className="class-trainer">Coach Sarah</div>
            </div>
            <div className="class-capacity">18/20</div>
          </div>
          <div className="class-item">
            <div className="class-time">9:00 AM</div>
            <div className="class-details">
              <div className="class-name">Yoga Flow</div>
              <div className="class-trainer">Coach Emma</div>
            </div>
            <div className="class-capacity">12/15</div>
          </div>
          <div className="class-item">
            <div className="class-time">5:30 PM</div>
            <div className="class-details">
              <div className="class-name">Strength Training</div>
              <div className="class-trainer">Coach Tom</div>
            </div>
            <div className="class-capacity">8/12</div>
          </div>
          <div className="class-item">
            <div className="class-time">7:00 PM</div>
            <div className="class-details">
              <div className="class-name">Cycling</div>
              <div className="class-trainer">Coach Mike</div>
            </div>
            <div className="class-capacity full">20/20</div>
          </div>
        </div>
      </div>
    </div>
  );
}
