import PageHeader from "../pageHeader/PageHeader";
import "./ManageClasses.css";

export default function ManageClasses() {
  return (
    <>
      <PageHeader
        title="CLASSES MANAGEMENT"
        subTitle="Manage class schedules and bookings"
      />

      <section className="admin-content">
        <div className="container">
          <div className="admin-classes-controls">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search classes by name or instructor..."
                className="search-input"
              />
            </div>
            <div className="filters">
              <select className="filter-select">
                <option>All Categories</option>
                <option>Strength</option>
                <option>Cardio</option>
                <option>Yoga</option>
                <option>HIIT</option>
                <option>Boxing</option>
              </select>
              <select className="filter-select">
                <option>All Days</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>This Week</option>
              </select>
              <button className="btn-add-class">+ Add Class</button>
            </div>
          </div>

          <div className="admin-classes-stats">
            <div className="stat-box">
              <div className="stat-number">156</div>
              <div className="stat-label">Classes This Week</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1,284</div>
              <div className="stat-label">Total Bookings</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">82%</div>
              <div className="stat-label">Avg Capacity</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">24</div>
              <div className="stat-label">Classes Today</div>
            </div>
          </div>

          <div className="schedule-tabs">
            <button className="tab-btn active">Today</button>
            <button className="tab-btn">Tomorrow</button>
            <button className="tab-btn">This Week</button>
            <button className="tab-btn">Calendar View</button>
          </div>

          <div className="admin-classes-list">
            <div className="admin-class-card">
              <div className="admin-class-time-badge">6:00 AM</div>
              <div className="admin-class-details">
                <div className="admin-class-header-row">
                  <div>
                    <h3 className="admin-class-name">HIIT Bootcamp</h3>
                    <div className="admin-class-category">HIIT</div>
                  </div>
                  <div className="admin-class-status full">FULL</div>
                </div>
                <div className="admin-class-info-row">
                  <div className="info-item">
                    <span className="info-icon">👤</span>
                    <span>Coach Sarah Mitchell</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <span>Studio A</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⏱️</span>
                    <span>60 min</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">👥</span>
                    <span className="capacity-full">20/20 booked</span>
                  </div>
                </div>
              </div>
              <div className="admin-class-actions">
                <button className="btn-action">View</button>
                <button className="btn-action">Edit</button>
                <button className="btn-action cancel">Cancel</button>
              </div>
            </div>

            <div className="admin-class-card">
              <div className="admin-class-time-badge">7:30 AM</div>
              <div className="admin-class-details">
                <div className="admin-class-header-row">
                  <div>
                    <h3 className="admin-class-name">Yoga Flow</h3>
                    <div className="admin-class-category">Yoga</div>
                  </div>
                  <div className="admin-class-status available">AVAILABLE</div>
                </div>
                <div className="admin-class-info-row">
                  <div className="info-item">
                    <span className="info-icon">👤</span>
                    <span>Coach Emma Chen</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <span>Studio B</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⏱️</span>
                    <span>60 min</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">👥</span>
                    <span>8/15 booked</span>
                  </div>
                </div>
              </div>
              <div className="admin-class-actions">
                <button className="btn-action">View</button>
                <button className="btn-action">Edit</button>
                <button className="btn-action cancel">Cancel</button>
              </div>
            </div>

            <div className="admin-class-card">
              <div className="admin-class-time-badge">9:00 AM</div>
              <div className="admin-class-details">
                <div className="admin-class-header-row">
                  <div>
                    <h3 className="admin-class-name">Strength Training</h3>
                    <div className="admin-class-category">Strength</div>
                  </div>
                  <div className="admin-class-status available">AVAILABLE</div>
                </div>
                <div className="admin-class-info-row">
                  <div className="info-item">
                    <span className="info-icon">👤</span>
                    <span>Coach Tom Jackson</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <span>Main Floor</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⏱️</span>
                    <span>75 min</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">👥</span>
                    <span>5/12 booked</span>
                  </div>
                </div>
              </div>
              <div className="admin-class-actions">
                <button className="btn-action">View</button>
                <button className="btn-action">Edit</button>
                <button className="btn-action cancel">Cancel</button>
              </div>
            </div>

            <div className="admin-class-card">
              <div className="admin-class-time-badge">5:30 PM</div>
              <div className="admin-class-details">
                <div className="admin-class-header-row">
                  <div>
                    <h3 className="admin-class-name">Cycling Endurance</h3>
                    <div className="admin-class-category">Cardio</div>
                  </div>
                  <div className="admin-class-status almost-full">ALMOST FULL</div>
                </div>
                <div className="admin-class-info-row">
                  <div className="info-item">
                    <span className="info-icon">👤</span>
                    <span>Coach Mike Rodriguez</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <span>Spin Studio</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⏱️</span>
                    <span>45 min</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">👥</span>
                    <span className="capacity-high">18/20 booked</span>
                  </div>
                </div>
              </div>
              <div className="admin-class-actions">
                <button className="btn-action">View</button>
                <button className="btn-action">Edit</button>
                <button className="btn-action cancel">Cancel</button>
              </div>
            </div>

            <div className="admin-class-card">
              <div className="admin-class-time-badge">7:00 PM</div>
              <div className="admin-class-details">
                <div className="admin-class-header-row">
                  <div>
                    <h3 className="admin-class-name">Boxing Fundamentals</h3>
                    <div className="admin-class-category">Boxing</div>
                  </div>
                  <div className="admin-class-status available">AVAILABLE</div>
                </div>
                <div className="admin-class-info-row">
                  <div className="info-item">
                    <span className="info-icon">👤</span>
                    <span>Coach David Kim</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">📍</span>
                    <span>Combat Zone</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">⏱️</span>
                    <span>60 min</span>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">👥</span>
                    <span>10/15 booked</span>
                  </div>
                </div>
              </div>
              <div className="admin-class-actions">
                <button className="btn-action">View</button>
                <button className="btn-action">Edit</button>
                <button className="btn-action cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
