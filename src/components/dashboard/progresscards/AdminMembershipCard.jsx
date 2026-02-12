export default function AdminMemebershipCard() {
  return (
    <div className="admin-card">
      <div className="card-header">
        <h3>Membership Plans</h3>
      </div>
      <div className="card-body">
        <div className="plan-stats">
          <div className="plan-stat">
            <div className="plan-header">
              <div className="plan-name">STARTER</div>
              <div className="plan-count">892</div>
            </div>
            <div className="plan-bar">
              <div className="plan-fill starter" style={{ width: `35%` }}></div>
            </div>
            <div className="plan-percentage">35%</div>
          </div>
          <div className="plan-stat">
            <div className="plan-header">
              <div className="plan-name">PRO</div>
              <div className="plan-count">1,248</div>
            </div>
            <div className="plan-bar">
              <div className="plan-fill pro" style={{ width: `49%` }}></div>
            </div>
            <div className="plan-percentage">49%</div>
          </div>
          <div className="plan-stat">
            <div className="plan-header">
              <div className="plan-name">ELITE</div>
              <div className="plan-count">407</div>
            </div>
            <div className="plan-bar">
              <div className="plan-fill elite" style={{ width: `16%` }}></div>
            </div>
            <div className="plan-percentage">16%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
