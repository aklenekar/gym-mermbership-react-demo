import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./ManageClasses.css";
import { adminService } from "../../services/Services";

export default function ManageClasses() {
  const [data, setData] = useState({
    classes: [],
  });

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    day: "",
  });

  function fetchClasses() {
    adminService
      .fetchClasses(filters)
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchClasses(filters);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
                name="search"
                onChange={handleFilterChange}
                placeholder="Search classes by name or instructor..."
                className="search-input"
              />
            </div>
            <div className="filters">
              <select
                name="category"
                className="filter-select"
                onChange={handleFilterChange}
              >
                <option value="All">All Specialties</option>
                <option value="Strength">Strength</option>
                <option value="Cardio">Cardio</option>
                <option value="Yoga">Yoga</option>
                <option value="HIIT"> HIIT</option>
                <option value="Boxing">Boxing</option>
              </select>
              <select
                name="day"
                className="filter-select"
                onChange={handleFilterChange}
              >
                <option value="all">All Days</option>
                <option value="Today">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="This Week">This Week</option>
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
            {data.classes.map((cl) => {
              return (
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
