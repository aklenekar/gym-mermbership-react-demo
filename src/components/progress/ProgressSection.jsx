import PageHeader from "../pageHeader/PageHeader";
import "./ProgressSection.css";

export default function ProgressSection() {
  return (
    <>
      <PageHeader title="MY PROGRESS" subTitle="Track your fitness journey" />
      <section className="progress-content">
        <div className="container">
          <div className="progress-grid">
            <div className="progress-card goals-card">
              <div className="card-header">
                <h2>Monthly Goals</h2>
                <select className="month-selector">
                  <option>February 2025</option>
                  <option>January 2025</option>
                  <option>December 2024</option>
                </select>
              </div>
              <div className="card-body">
                <div className="goal-item">
                  <div className="goal-header">
                    <span className="goal-name">Workout Frequency</span>
                    <span className="goal-progress">18/20</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: 90 }}></div>
                  </div>
                  <div className="goal-footer">
                    <span className="goal-percent">90%</span>
                    <span className="goal-status on-track">On Track</span>
                  </div>
                </div>

                <div className="goal-item">
                  <div className="goal-header">
                    <span className="goal-name">Group Classes</span>
                    <span className="goal-progress">12/15</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: 80 }}></div>
                  </div>
                  <div className="goal-footer">
                    <span className="goal-percent">80%</span>
                    <span className="goal-status on-track">On Track</span>
                  </div>
                </div>

                <div className="goal-item">
                  <div className="goal-header">
                    <span className="goal-name">Recovery Sessions</span>
                    <span className="goal-progress">6/8</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: 75 }}></div>
                  </div>
                  <div className="goal-footer">
                    <span className="goal-percent">75%</span>
                    <span className="goal-status on-track">On Track</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Body Metrics */}
            <div className="progress-card metrics-card">
              <div className="card-header">
                <h2>Body Metrics</h2>
                <button className="btn-add">+ Add Entry</button>
              </div>
              <div className="card-body">
                <div className="metric-item">
                  <div className="metric-label">Weight</div>
                  <div className="metric-value">185 lbs</div>
                  <div className="metric-change decrease">-3 lbs</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Body Fat %</div>
                  <div className="metric-value">15.2%</div>
                  <div className="metric-change decrease">-1.5%</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">Muscle Mass</div>
                  <div className="metric-value">156 lbs</div>
                  <div className="metric-change increase">+2 lbs</div>
                </div>
                <div className="metric-item">
                  <div className="metric-label">BMI</div>
                  <div className="metric-value">24.8</div>
                  <div className="metric-change">Normal</div>
                </div>
              </div>
            </div>

            {/* Personal Records */}
            <div className="progress-card pr-card">
              <div className="card-header">
                <h2>Personal Records</h2>
                <a href="#" className="view-all-link">
                  View All
                </a>
              </div>
              <div className="card-body">
                <div className="pr-item">
                  <div className="pr-exercise">
                    <span className="pr-icon">🏋️</span>
                    <span className="pr-name">Bench Press</span>
                  </div>
                  <div className="pr-value">225 lbs</div>
                  <div className="pr-date">5 days ago</div>
                </div>
                <div className="pr-item">
                  <div className="pr-exercise">
                    <span className="pr-icon">🦵</span>
                    <span className="pr-name">Squat</span>
                  </div>
                  <div className="pr-value">315 lbs</div>
                  <div className="pr-date">1 week ago</div>
                </div>
                <div className="pr-item">
                  <div className="pr-exercise">
                    <span className="pr-icon">💪</span>
                    <span className="pr-name">Deadlift</span>
                  </div>
                  <div className="pr-value">405 lbs</div>
                  <div className="pr-date">2 weeks ago</div>
                </div>
                <div className="pr-item">
                  <div className="pr-exercise">
                    <span className="pr-icon">🏃</span>
                    <span className="pr-name">5K Run</span>
                  </div>
                  <div className="pr-value">22:45</div>
                  <div className="pr-date">1 month ago</div>
                </div>
              </div>
            </div>

            {/* Activity Chart */}
            <div className="progress-card chart-card">
              <div className="card-header">
                <h2>Activity Overview</h2>
                <div className="chart-tabs">
                  <button className="tab-btn active">Week</button>
                  <button className="tab-btn">Month</button>
                  <button className="tab-btn">Year</button>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    <div className="bar" style={{ height: 80 }}>
                      <span className="bar-label">M</span>
                    </div>
                    <div className="bar" style={{ height: 80 }}>
                      <span className="bar-label">T</span>
                    </div>
                    <div className="bar" style={{ height: 45 }}>
                      <span className="bar-label">W</span>
                    </div>
                    <div className="bar" style={{ height: 90 }}>
                      <span className="bar-label">T</span>
                    </div>
                    <div className="bar" style={{ height: 70 }}>
                      <span className="bar-label">F</span>
                    </div>
                    <div className="bar" style={{ height: 55 }}>
                      <span className="bar-label">S</span>
                    </div>
                    <div className="bar" style={{ height: 40 }}>
                      <span className="bar-label">S</span>
                    </div>
                  </div>
                </div>
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-color strength"></span>
                    <span>Strength</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color cardio"></span>
                    <span>Cardio</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color hiit"></span>
                    <span>HIIT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="progress-card achievements-card">
              <div className="card-header">
                <h2>Recent Achievements</h2>
                <a href="#" className="view-all-link">
                  View All
                </a>
              </div>
              <div className="card-body">
                <div className="achievement-item">
                  <div className="achievement-badge">🏆</div>
                  <div className="achievement-info">
                    <div className="achievement-name">100 Workouts</div>
                    <div className="achievement-date">Unlocked 2 days ago</div>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-badge">🔥</div>
                  <div className="achievement-info">
                    <div className="achievement-name">30 Day Streak</div>
                    <div className="achievement-date">Unlocked 1 week ago</div>
                  </div>
                </div>
                <div className="achievement-item">
                  <div className="achievement-badge">💪</div>
                  <div className="achievement-info">
                    <div className="achievement-name">Strength Master</div>
                    <div className="achievement-date">Unlocked 2 weeks ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Monthly Summary */}
            <div className="progress-card summary-card">
              <div className="card-header">
                <h2>This Month Summary</h2>
              </div>
              <div className="card-body">
                <div className="summary-stats">
                  <div className="summary-stat">
                    <div className="stat-icon">💪</div>
                    <div className="stat-info">
                      <div className="stat-value">18</div>
                      <div className="stat-label">Workouts</div>
                    </div>
                  </div>
                  <div className="summary-stat">
                    <div className="stat-icon">⏱️</div>
                    <div className="stat-info">
                      <div className="stat-value">24.5h</div>
                      <div className="stat-label">Training Time</div>
                    </div>
                  </div>
                  <div className="summary-stat">
                    <div className="stat-icon">🔥</div>
                    <div className="stat-info">
                      <div className="stat-value">8,100</div>
                      <div className="stat-label">Calories</div>
                    </div>
                  </div>
                  <div className="summary-stat">
                    <div className="stat-icon">📈</div>
                    <div className="stat-info">
                      <div className="stat-value">85%</div>
                      <div className="stat-label">Goal Progress</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
