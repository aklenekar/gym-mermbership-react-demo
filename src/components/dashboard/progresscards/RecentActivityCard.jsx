import "./RecentActivityCard.css";

export default function RecentActivityCard({ recentActivities }) {
  return (
    <div className="dash-card activity-card">
      <div className="dash-card-header">
        <h3>Recent Activity</h3>
      </div>
      <div className="dash-card-body">
        <div className="activity-list">
          {recentActivities.map((recentActivity) => {
            return (
              <div className="activity-item" key={recentActivity.id}>
                <div className="activity-icon">{recentActivity.icon}</div>
                <div className="activity-info">
                  <p className="activity-title">{recentActivity.title}</p>
                  <p className="activity-time">{recentActivity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
