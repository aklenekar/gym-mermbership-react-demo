import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./ManageReport.css";
import { adminService } from "../../services/Services";

export default function ManageReport() {
  const [data, setData] = useState({
    totalRevenue: 0,
    membershipRevenue: 0,
    trainingRevenue: 0,
    revenueChart: [],
    membershipAnalytics: {},
    classAnalytics: {},
    popularClasses: [],
    topTrainers: [],
    peakHours: [],
  });

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    day: "",
  });

  function fetchReports() {
    adminService
      .fetchReports(filters)
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchReports(filters);
  }, [filters]);

  const handleOnClick = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <PageHeader
        title="REPORTS & ANALYTICS"
        subTitle="Track performance and insights"
      />
      <section className="admin-content">
        <div className="container">
          <div className="reports-controls">
            <div name="period" className="period-selector">
              <button
                className="period-btn active"
                name="period"
                value="today"
                onClick={handleOnClick}
              >
                Month
              </button>
              <button
                className="period-btn"
                name="period"
                value="Week"
                onClick={handleOnClick}
              >
                Week
              </button>
              <button
                className="period-btn"
                name="period"
                value="Quarter"
                onClick={handleOnClick}
              >
                Quarter
              </button>
              <button
                className="period-btn"
                name="period"
                value="Year"
                onClick={handleOnClick}
              >
                Year
              </button>
            </div>
            <div className="date-range">
              <input type="date" className="date-input" value="2025-02-01" />
              <span className="date-separator">to</span>
              <input type="date" className="date-input" value="2025-02-13" />
              <button className="btn-export">📊 Export Report</button>
            </div>
          </div>

          <div className="reports-grid">
            {/* Revenue Report */}
            <div className="report-card full-width">
              <div className="card-header">
                <h3>Revenue Overview</h3>
                <select className="chart-period">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 3 Months</option>
                  <option>Last Year</option>
                </select>
              </div>
              <div className="revenue-summary">
                <div className="revenue-stat">
                  <div className="stat-label">Total Revenue</div>
                  <div className="stat-value large">${data.totalRevenue}</div>
                  <div className="stat-change positive">
                    ↑ 12.5% vs last period
                  </div>
                </div>
                <div className="revenue-stat">
                  <div className="stat-label">Membership Revenue</div>
                  <div className="stat-value">${data.membershipRevenue}</div>
                  <div className="stat-change positive">↑ 8.2%</div>
                </div>
                <div className="revenue-stat">
                  <div className="stat-label">Personal Training</div>
                  <div className="stat-value">${data.trainingRevenue}</div>
                  <div className="stat-change positive">↑ 15.8%</div>
                </div>
                <div className="revenue-stat">
                  <div className="stat-label">Other Revenue</div>
                  <div className="stat-value">$2,100</div>
                  <div className="stat-change negative">↓ 3.2%</div>
                </div>
              </div>
              <div className="chart-container">
                <div className="revenue-chart">
                  {data.revenueChart.map((revenue) => {
                    return (
                      <div className="chart-bar" style={{ height: `50%` }}>
                        <span className="bar-value">${revenue.amount}</span>
                        <span className="bar-label">{revenue.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Membership Analytics */}
            <div className="report-card">
              <div className="card-header">
                <h3>Membership Analytics</h3>
              </div>
              <div className="card-body">
                <div className="metric-row">
                  <div className="metric-label">Total Members</div>
                  <div className="metric-value">
                    {data.membershipAnalytics.totalMembers}
                  </div>
                  <div className="metric-change positive">+24</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">New Members</div>
                  <div className="metric-value">
                    {data.membershipAnalytics.newMembers}
                  </div>
                  <div className="metric-change positive">+12</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Renewals</div>
                  <div className="metric-value">
                    {data.membershipAnalytics.renewals}
                  </div>
                  <div className="metric-change positive">+8</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Cancellations</div>
                  <div className="metric-value">
                    {data.membershipAnalytics.cancellations}
                  </div>
                  <div className="metric-change negative">+5</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Retention Rate</div>
                  <div className="metric-value">
                    {data.membershipAnalytics.retentionRate}%
                  </div>
                  <div className="metric-change positive">+2.1%</div>
                </div>
              </div>
            </div>

            {/* Class Analytics */}
            <div className="report-card">
              <div className="card-header">
                <h3>Class Performance</h3>
              </div>
              <div className="card-body">
                <div className="metric-row">
                  <div className="metric-label">Total Classes</div>
                  <div className="metric-value">
                    {data.classAnalytics.totalClasses}
                  </div>
                  <div className="metric-change">This week</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Total Bookings</div>
                  <div className="metric-value">
                    {data.classAnalytics.totalBookings}
                  </div>
                  <div className="metric-change positive">+142</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Avg Attendance</div>
                  <div className="metric-value">
                    {data.classAnalytics.avgAttendancePercent}%
                  </div>
                  <div className="metric-change positive">+5%</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Cancellation Rate</div>
                  <div className="metric-value">
                    {data.classAnalytics.cancellationRatePercent}%
                  </div>
                  <div className="metric-change negative">+2%</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Waitlist Members</div>
                  <div className="metric-value">
                    {data.classAnalytics.waitlistCount}
                  </div>
                  <div className="metric-change positive">+8</div>
                </div>
              </div>
            </div>

            {/* Popular Classes */}
            <div className="report-card">
              <div className="card-header">
                <h3>Most Popular Classes</h3>
              </div>
              <div className="card-body">
                <div className="ranking-list">
                  <div className="ranking-item">
                    <div className="rank">1</div>
                    <div className="ranking-details">
                      <div className="ranking-name">HIIT Bootcamp</div>
                      <div className="ranking-stats">248 bookings</div>
                    </div>
                    <div className="ranking-bar">
                      <div
                        className="ranking-fill"
                        style={{ width: `100%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ranking-item">
                    <div className="rank">2</div>
                    <div className="ranking-details">
                      <div className="ranking-name">Yoga Flow</div>
                      <div className="ranking-stats">186 bookings</div>
                    </div>
                    <div className="ranking-bar">
                      <div
                        className="ranking-fill"
                        style={{ width: `75%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ranking-item">
                    <div className="rank">3</div>
                    <div className="ranking-details">
                      <div className="ranking-name">Cycling</div>
                      <div className="ranking-stats">164 bookings</div>
                    </div>
                    <div className="ranking-bar">
                      <div
                        className="ranking-fill"
                        style={{ width: `66%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ranking-item">
                    <div className="rank">4</div>
                    <div className="ranking-details">
                      <div className="ranking-name">Strength Training</div>
                      <div className="ranking-stats">142 bookings</div>
                    </div>
                    <div className="ranking-bar">
                      <div
                        className="ranking-fill"
                        style={{ width: `57%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ranking-item">
                    <div className="rank">5</div>
                    <div className="ranking-details">
                      <div className="ranking-name">Boxing</div>
                      <div className="ranking-stats">128 bookings</div>
                    </div>
                    <div className="ranking-bar">
                      <div
                        className="ranking-fill"
                        style={{ width: `51%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Trainers */}
            <div className="report-card">
              <div className="card-header">
                <h3>Top Performing Trainers</h3>
              </div>
              <div className="card-body">
                <div className="ranking-list">
                  {data.topTrainers.map((topTrainer) => {
                    return (
                      <div className="ranking-item">
                        <div className="rank">{topTrainer.rank}</div>
                        <div className="ranking-details">
                          <div className="ranking-name">{topTrainer.name}</div>
                          <div className="ranking-stats">
                            ⭐ {topTrainer.rating} • {topTrainer.classCount}{" "}
                            classes
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Peak Hours */}
            <div className="report-card full-width">
              <div className="card-header">
                <h3>Peak Hours Analysis</h3>
              </div>
              <div className="peak-hours-chart">
                {data.peakHours.map((ph) => {
                  return (
                    <div
                      className="hour-bar"
                      style={{ height: `${ph.occupancyPercent}%` }}
                    >
                      <span className="hour-label">{ph.hour}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
