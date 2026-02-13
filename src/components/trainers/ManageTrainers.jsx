import PageHeader from "../pageHeader/PageHeader";
import "./ManageTrainers.css";

export default function ManageTrainers() {
  return (
    <>
      <PageHeader
        title="TRAINERS MANAGEMENT"
        subTitle="Manage gym trainers and coaches"
      />

      <section className="admin-content">
        <div className="container">
          <div className="trainers-controls">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search trainers by name or specialty..."
                className="search-input"
              />
            </div>
            <div className="filters">
              <select className="filter-select">
                <option>All Specialties</option>
                <option>Strength</option>
                <option>Cardio</option>
                <option>Yoga</option>
                <option>HIIT</option>
                <option>Boxing</option>
              </select>
              <select className="filter-select">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <button className="btn-add-trainer">+ Add Trainer</button>
            </div>
          </div>

          <div className="trainers-stats">
            <div className="stat-box">
              <div className="stat-number">42</div>
              <div className="stat-label">Total Trainers</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">38</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">156</div>
              <div className="stat-label">Classes This Week</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">4.7</div>
              <div className="stat-label">Avg Rating</div>
            </div>
          </div>

          <div className="trainers-grid">
            <div className="trainer-card">
              <div className="trainer-header">
                <div className="trainer-avatar-large">SM</div>
                <div className="trainer-badge head-coach">HEAD COACH</div>
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">Sarah Mitchell</h3>
                <div className="trainer-specialty">Strength & Conditioning</div>
                <div className="trainer-credentials">
                  <span className="credential">CSCS</span>
                  <span className="credential">NASM-CPT</span>
                </div>
              </div>
              <div className="trainer-stats-row">
                <div className="stat-item">
                  <div className="stat-value">500+</div>
                  <div className="stat-name">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">15</div>
                  <div className="stat-name">Years</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">⭐ 4.9</div>
                  <div className="stat-name">Rating</div>
                </div>
              </div>
              <div className="trainer-actions">
                <button className="btn-view">View Profile</button>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-header">
                <div className="trainer-avatar-large">MR</div>
                <div className="trainer-badge head-coach">HEAD COACH</div>
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">Mike Rodriguez</h3>
                <div className="trainer-specialty">HIIT & Functional Training</div>
                <div className="trainer-credentials">
                  <span className="credential">ACE-CPT</span>
                  <span className="credential">NASM-PES</span>
                </div>
              </div>
              <div className="trainer-stats-row">
                <div className="stat-item">
                  <div className="stat-value">400+</div>
                  <div className="stat-name">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">12</div>
                  <div className="stat-name">Years</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">⭐ 5.0</div>
                  <div className="stat-name">Rating</div>
                </div>
              </div>
              <div className="trainer-actions">
                <button className="btn-view">View Profile</button>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-header">
                <div className="trainer-avatar-large">EC</div>
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">Emma Chen</h3>
                <div className="trainer-specialty">Yoga & Pilates</div>
                <div className="trainer-credentials">
                  <span className="credential">RYT-500</span>
                  <span className="credential">STOTT</span>
                </div>
              </div>
              <div className="trainer-stats-row">
                <div className="stat-item">
                  <div className="stat-value">350+</div>
                  <div className="stat-name">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">8</div>
                  <div className="stat-name">Years</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">⭐ 4.8</div>
                  <div className="stat-name">Rating</div>
                </div>
              </div>
              <div className="trainer-actions">
                <button className="btn-view">View Profile</button>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-header">
                <div className="trainer-avatar-large">TJ</div>
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">Tom Jackson</h3>
                <div className="trainer-specialty">Powerlifting & Strength</div>
                <div className="trainer-credentials">
                  <span className="credential">USAPL</span>
                  <span className="credential">CSCS</span>
                </div>
              </div>
              <div className="trainer-stats-row">
                <div className="stat-item">
                  <div className="stat-value">280+</div>
                  <div className="stat-name">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">10</div>
                  <div className="stat-name">Years</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">⭐ 4.7</div>
                  <div className="stat-name">Rating</div>
                </div>
              </div>
              <div className="trainer-actions">
                <button className="btn-view">View Profile</button>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-header">
                <div className="trainer-avatar-large">LP</div>
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">Lisa Parker</h3>
                <div className="trainer-specialty">Nutrition & Wellness</div>
                <div className="trainer-credentials">
                  <span className="credential">RD</span>
                  <span className="credential">CSSD</span>
                </div>
              </div>
              <div className="trainer-stats-row">
                <div className="stat-item">
                  <div className="stat-value">420+</div>
                  <div className="stat-name">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">14</div>
                  <div className="stat-name">Years</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">⭐ 4.9</div>
                  <div className="stat-name">Rating</div>
                </div>
              </div>
              <div className="trainer-actions">
                <button className="btn-view">View Profile</button>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-header">
                <div className="trainer-avatar-large">DK</div>
              </div>
              <div className="trainer-info">
                <h3 className="trainer-name">David Kim</h3>
                <div className="trainer-specialty">Boxing & Combat Sports</div>
                <div className="trainer-credentials">
                  <span className="credential">USA Boxing</span>
                  <span className="credential">MMA</span>
                </div>
              </div>
              <div className="trainer-stats-row">
                <div className="stat-item">
                  <div className="stat-value">310+</div>
                  <div className="stat-name">Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">11</div>
                  <div className="stat-name">Years</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">⭐ 4.8</div>
                  <div className="stat-name">Rating</div>
                </div>
              </div>
              <div className="trainer-actions">
                <button className="btn-view">View Profile</button>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
