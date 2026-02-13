import PageHeader from "../pageHeader/PageHeader";
import "./ManageReport.css";

export default function ManageReport() {
  return (
    <>
      <PageHeader
        title="REPORTS & ANALYTICS"
        subTitle="Track performance and insights"
      />
      <section className="admin-content">
        <div className="container">
          <div className="reports-controls">
            <div className="period-selector">
              <button className="period-btn active">Today</button>
              <button className="period-btn">Week</button>
              <button className="period-btn">Month</button>
              <button className="period-btn">Quarter</button>
              <button className="period-btn">Year</button>
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
                  <div className="stat-value large">$142,890</div>
                  <div className="stat-change positive">
                    ↑ 12.5% vs last period
                  </div>
                </div>
                <div className="revenue-stat">
                  <div className="stat-label">Membership Revenue</div>
                  <div className="stat-value">$128,450</div>
                  <div className="stat-change positive">↑ 8.2%</div>
                </div>
                <div className="revenue-stat">
                  <div className="stat-label">Personal Training</div>
                  <div className="stat-value">$12,340</div>
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
                  <div className="chart-bar" style={{ height: `65%` }}>
                    <span className="bar-value">$18k</span>
                    <span className="bar-label">Mon</span>
                  </div>
                  <div className="chart-bar" style={{ height: `80%` }}>
                    <span className="bar-value">$22k</span>
                    <span className="bar-label">Tue</span>
                  </div>
                  <div className="chart-bar" style={{ height: `55%` }}>
                    <span className="bar-value">$16k</span>
                    <span className="bar-label">Wed</span>
                  </div>
                  <div className="chart-bar" style={{ height: `90%` }}>
                    <span className="bar-value">$25k</span>
                    <span className="bar-label">Thu</span>
                  </div>
                  <div className="chart-bar" style={{ height: `75%` }}>
                    <span className="bar-value">$21k</span>
                    <span className="bar-label">Fri</span>
                  </div>
                  <div className="chart-bar" style={{ height: `95%` }}>
                    <span className="bar-value">$27k</span>
                    <span className="bar-label">Sat</span>
                  </div>
                  <div className="chart-bar" style={{ height: `70%` }}>
                    <span className="bar-value">$19k</span>
                    <span className="bar-label">Sun</span>
                  </div>
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
                  <div className="metric-value">2,547</div>
                  <div className="metric-change positive">+24</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">New Members</div>
                  <div className="metric-value">38</div>
                  <div className="metric-change positive">+12</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Renewals</div>
                  <div className="metric-value">142</div>
                  <div className="metric-change positive">+8</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Cancellations</div>
                  <div className="metric-value">18</div>
                  <div className="metric-change negative">+5</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Retention Rate</div>
                  <div className="metric-value">94.2%</div>
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
                  <div className="metric-value">156</div>
                  <div className="metric-change">This week</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Total Bookings</div>
                  <div className="metric-value">1,284</div>
                  <div className="metric-change positive">+142</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Avg Attendance</div>
                  <div className="metric-value">82%</div>
                  <div className="metric-change positive">+5%</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Cancellation Rate</div>
                  <div className="metric-value">12%</div>
                  <div className="metric-change negative">+2%</div>
                </div>
                <div className="metric-row">
                  <div className="metric-label">Waitlist Members</div>
                  <div className="metric-value">47</div>
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
                  <div className="ranking-item">
                    <div className="rank">1</div>
                    <div className="ranking-details">
                      <div className="ranking-name">Sarah Mitchell</div>
                      <div className="ranking-stats">⭐ 4.9 • 38 classes</div>
                    </div>
                  </div>
                  <div className="ranking-item">
                    <div className="rank">2</div>
                    <div className="ranking-details">
                      <div className="ranking-name">Mike Rodriguez</div>
                      <div className="ranking-stats">⭐ 5.0 • 35 classes</div>
                    </div>
                  </div>
                  <div className="ranking-item">
                    <div className="rank">3</div>
                    <div className="ranking-details">
                      <div className="ranking-name">Emma Chen</div>
                      <div className="ranking-stats">⭐ 4.8 • 32 classes</div>
                    </div>
                  </div>
                  <div className="ranking-item">
                    <div className="rank">4</div>
                    <div className="ranking-details">
                      <div className="ranking-name">Tom Jackson</div>
                      <div className="ranking-stats">⭐ 4.7 • 28 classes</div>
                    </div>
                  </div>
                  <div className="ranking-item">
                    <div className="rank">5</div>
                    <div className="ranking-details">
                      <div className="ranking-name">David Kim</div>
                      <div className="ranking-stats">⭐ 4.8 • 26 classes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Peak Hours */}
            <div className="report-card full-width">
              <div className="card-header">
                <h3>Peak Hours Analysis</h3>
              </div>
              <div className="peak-hours-chart">
                <div className="hour-bar" style={{ height: `25%` }}>
                  <span className="hour-label">6AM</span>
                </div>
                <div className="hour-bar" style={{ height: `40%` }}>
                  <span className="hour-label">7AM</span>
                </div>
                <div className="hour-bar" style={{ height: `55%` }}>
                  <span className="hour-label">8AM</span>
                </div>
                <div className="hour-bar" style={{ height: `45%` }}>
                  <span className="hour-label">9AM</span>
                </div>
                <div className="hour-bar" style={{ height: `30%` }}>
                  <span className="hour-label">10AM</span>
                </div>
                <div className="hour-bar" style={{ height: `35%` }}>
                  <span className="hour-label">11AM</span>
                </div>
                <div className="hour-bar" style={{ height: `50%` }}>
                  <span className="hour-label">12PM</span>
                </div>
                <div className="hour-bar" style={{ height: `40%` }}>
                  <span className="hour-label">1PM</span>
                </div>
                <div className="hour-bar" style={{ height: `45%` }}>
                  <span className="hour-label">2PM</span>
                </div>
                <div className="hour-bar" style={{ height: `60%` }}>
                  <span className="hour-label">3PM</span>
                </div>
                <div className="hour-bar" style={{ height: `75%` }}>
                  <span className="hour-label">4PM</span>
                </div>
                <div className="hour-bar" style={{ height: `95%` }}>
                  <span className="hour-label">5PM</span>
                </div>
                <div className="hour-bar" style={{ height: `100%` }}>
                  <span className="hour-label">6PM</span>
                </div>
                <div className="hour-bar" style={{ height: `85%` }}>
                  <span className="hour-label">7PM</span>
                </div>
                <div className="hour-bar" style={{ height: `65%` }}>
                  <span className="hour-label">8PM</span>
                </div>
                <div className="hour-bar" style={{ height: `40%` }}>
                  <span className="hour-label">9PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
