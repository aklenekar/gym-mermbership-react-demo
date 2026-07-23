import { getUserRole } from "../../util/auth";

export default function ClassesList({
  classes,
  handleViewDetails,
  handleEditDetails,
}) {
  const role = getUserRole();
  return (
    <div className="admin-classes-list">
      {classes.map((cl) => {
        return (
          <div className="admin-class-card">
            <div className="admin-class-time-badge">{cl.fullStartTime}</div>
            <div className="admin-class-details">
              <div className="admin-class-header-row">
                <div>
                  <h3 className="admin-class-name">{cl.name}</h3>
                  <div className="admin-class-category">{cl.category}</div>
                </div>
                <div className="admin-class-status `${cl.status} === 'Available' ? available : full`">
                  {cl.status}
                </div>
              </div>
              <div className="admin-class-info-row">
                {cl.instructor && (
                  <div className="info-item">
                    <span className="info-icon">👤</span>
                    <span>{cl.instructor}</span>
                  </div>
                )}
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>{cl.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <span>{cl.durationMinutes} min</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">👥</span>
                  <span className="capacity-full">
                    {cl.bookedCount}/{cl.capacity} booked
                  </span>
                </div>
              </div>
            </div>
            <div className="admin-class-actions">
              <button
                className="btn-action"
                onClick={() => handleViewDetails(cl)}
              >
                View
              </button>
              <button
                className="btn-action"
                onClick={() => handleEditDetails(cl)}
              >
                Edit
              </button>
              {role === "ADMIN" && (
                <button className="btn-action cancel">Cancel</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
