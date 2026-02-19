export default function AdminMemebershipCard({ membershipDistribution }) {
  return (
    <div className="admin-card">
      <div className="card-header">
        <h3>Membership Plans</h3>
      </div>
      <div className="card-body">
        <div className="plan-stats">
          {membershipDistribution.map((memberShipPlan) => {
            return (
              <div className="plan-stat">
                <div className="plan-header">
                  <div className="plan-name">{memberShipPlan.plan}</div>
                  <div className="plan-count">{memberShipPlan.count}</div>
                </div>
                <div className="plan-bar">
                  <div
                    className="plan-fill starter"
                    style={{ width: `${memberShipPlan.percentage}%` }}
                  ></div>
                </div>
                <div className="plan-percentage">{memberShipPlan.percentage}%</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
