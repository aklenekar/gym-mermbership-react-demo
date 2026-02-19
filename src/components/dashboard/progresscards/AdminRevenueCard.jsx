export default function AdminRevenueCard({ revenueChart }) {
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
            {revenueChart.map((revenue) => {
              return (
                <div className="rev-bar" style={{ height: `${revenue.amount}%` }}>
                  <span className="bar-label">{revenue.day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
