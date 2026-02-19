export default function AdminStatsCard({ quickStats }) {
  return (
    <div className="stats-overview">
      <div className="stat-card">
        <div className="stat-icon">👥</div>
        <div className="stat-details">
          <div className="stat-value">{quickStats.totalMembers}</div>
          <div className="stat-label">Total Members</div>
          <div className="stat-change positive">{quickStats.membersTrend}</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">💰</div>
        <div className="stat-details">
          <div className="stat-value">${quickStats.monthlyRevenue}</div>
          <div className="stat-label">Monthly Revenue</div>
          <div className="stat-change positive">{quickStats.revenueTrend}</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">📅</div>
        <div className="stat-details">
          <div className="stat-value">{quickStats.classesThisWeek}</div>
          <div className="stat-label">Classes This Week</div>
          <div className="stat-change">{quickStats.classesTrend}</div>
        </div>
      </div>
      <div className="stat-card">
        <div className="stat-icon">🏋️</div>
        <div className="stat-details">
          <div className="stat-value">{quickStats.activeTrainers}</div>
          <div className="stat-label">Active Trainers</div>
          <div className="stat-change positive">{quickStats.trainersTrend}</div>
        </div>
      </div>
    </div>
  );
}
