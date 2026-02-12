export default function AdminRevenueCard() {
  return (
    <div className="admin-card chart-card">
      <div className="card-header">
        <h3>Revenue Overview</h3>
        <select className="period-select">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 3 Months</option>
        </select>
      </div>
      <div className="card-body">
        <div className="chart-placeholder">
          <div className="revenue-bars">
            <div className="rev-bar" style={{ height: `60%` }}>
              <span className="bar-label">Mon</span>
            </div>
            <div className="rev-bar" style={{ height: `75%` }}>
              <span className="bar-label">Tue</span>
            </div>
            <div className="rev-bar" style={{ height: `55%` }}>
              <span className="bar-label">Wed</span>
            </div>
            <div className="rev-bar" style={{ height: `85%` }}>
              <span className="bar-label">Thu</span>
            </div>
            <div className="rev-bar" style={{ height: `70%` }}>
              <span className="bar-label">Fri</span>
            </div>
            <div className="rev-bar" style={{ height: `90%` }}>
              <span className="bar-label">Sat</span>
            </div>
            <div className="rev-bar" style={{ height: `65%` }}>
              <span className="bar-label">Sun</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
