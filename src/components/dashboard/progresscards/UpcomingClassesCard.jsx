import { Link } from "react-router-dom";
import "./UpcomingClassesCard.css";

export default function UpcomingClassesCard({ upcomingClasses, bookClass, cancelClass }) {
  return (
    <div className="dash-card classes-card">
      <div className="dash-card-header">
        <h3>Upcoming Classes</h3>
        <Link to="/classes" className="header-link">
          View All
        </Link>
      </div>
      <div className="dash-card-body">
        <div className="class-list">
          {upcomingClasses.map((upcomingClass) => {
            return (
              <div className="class-item" key={upcomingClass.id}>
                <div className="class-time">
                  <span className="time">{upcomingClass.time}</span>
                  <span className="date">{upcomingClass.date}</span>
                </div>
                <div className="class-info">
                  <h4>{upcomingClass.name}</h4>
                  <p>
                    {upcomingClass.instructor} • {upcomingClass.location}
                  </p>
                </div>
                <div className="class-action">
                  {upcomingClass.isBooked ? (
                    <button className="btn-sm btn-booked">Booked</button>
                  ) : (
                    <button className="btn-sm btn-book" onClick={() => bookClass(upcomingClass.id)}>Book</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
