import { Link } from "react-router-dom";

export default function RecentClassesCard({ todayClasses }) {
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
          {todayClasses.map((todayClass) => {
            return (
              <div className="class-item">
                <div className="class-time">{todayClass.time}</div>
                <div className="class-details">
                  <div className="class-name">{todayClass.name}</div>
                  <div className="class-trainer">{todayClass.trainer}</div>
                </div>
                <div className="class-capacity">{todayClass.capacity}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
