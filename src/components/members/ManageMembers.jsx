import PageHeader from "../pageHeader/PageHeader";
import "./ManageMembers.css";

export default function ManageMembers() {
  return (
    <>
      <PageHeader
        title="MEMBERS MANAGEMENT"
        subTitle="Manage gym memberships"
      />

      <section className="admin-content">
        <div className="container">
          <div className="members-controls">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search members by name, email, or ID..."
                className="search-input"
              />
            </div>
            <div className="filters">
              <select className="filter-select">
                <option>All Plans</option>
                <option>Starter</option>
                <option>Pro</option>
                <option>Elite</option>
              </select>
              <select className="filter-select">
                <option>All Status</option>
                <option>Active</option>
                <option>Expired</option>
                <option>Suspended</option>
              </select>
              <button className="btn-add-member">+ Add Member</button>
            </div>
          </div>

          <div className="members-stats">
            <div className="stat-box">
              <div className="stat-number">2,547</div>
              <div className="stat-label">Total Members</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">2,384</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">163</div>
              <div className="stat-label">Expired</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">24</div>
              <div className="stat-label">New This Week</div>
            </div>
          </div>

          <div className="members-table-container">
            <table className="members-table">
              <thead>
                <tr>
                  <th>Member ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Plan</th>
                  <th>Status</th>
                  <th>Join Date</th>
                  <th>Expiry Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#M-1001</td>
                  <td>
                    <div className="member-cell">
                      <div className="member-avatar">JD</div>
                      <span>John Doe</span>
                    </div>
                  </td>
                  <td>john.doe@email.com</td>
                  <td>
                    <span className="plan-badge pro">PRO</span>
                  </td>
                  <td>
                    <span className="status-badge active">Active</span>
                  </td>
                  <td>Jan 15, 2025</td>
                  <td>Feb 15, 2025</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">
                        👁️
                      </button>
                      <button className="btn-icon" title="Edit">
                        ✏️
                      </button>
                      <button className="btn-icon" title="Delete">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#M-1002</td>
                  <td>
                    <div className="member-cell">
                      <div className="member-avatar">SM</div>
                      <span>Sarah Miller</span>
                    </div>
                  </td>
                  <td>sarah.m@email.com</td>
                  <td>
                    <span className="plan-badge elite">ELITE</span>
                  </td>
                  <td>
                    <span className="status-badge active">Active</span>
                  </td>
                  <td>Dec 20, 2024</td>
                  <td>Mar 20, 2025</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">
                        👁️
                      </button>
                      <button className="btn-icon" title="Edit">
                        ✏️
                      </button>
                      <button className="btn-icon" title="Delete">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#M-1003</td>
                  <td>
                    <div className="member-cell">
                      <div className="member-avatar">MJ</div>
                      <span>Mike Johnson</span>
                    </div>
                  </td>
                  <td>mike.j@email.com</td>
                  <td>
                    <span className="plan-badge starter">STARTER</span>
                  </td>
                  <td>
                    <span className="status-badge expired">Expired</span>
                  </td>
                  <td>Nov 10, 2024</td>
                  <td>Jan 10, 2025</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">
                        👁️
                      </button>
                      <button className="btn-icon" title="Edit">
                        ✏️
                      </button>
                      <button className="btn-icon" title="Delete">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#M-1004</td>
                  <td>
                    <div className="member-cell">
                      <div className="member-avatar">EB</div>
                      <span>Emma Brown</span>
                    </div>
                  </td>
                  <td>emma.brown@email.com</td>
                  <td>
                    <span className="plan-badge pro">PRO</span>
                  </td>
                  <td>
                    <span className="status-badge active">Active</span>
                  </td>
                  <td>Jan 05, 2025</td>
                  <td>Feb 05, 2025</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">
                        👁️
                      </button>
                      <button className="btn-icon" title="Edit">
                        ✏️
                      </button>
                      <button className="btn-icon" title="Delete">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#M-1005</td>
                  <td>
                    <div className="member-cell">
                      <div className="member-avatar">TW</div>
                      <span>Tom Wilson</span>
                    </div>
                  </td>
                  <td>tom.w@email.com</td>
                  <td>
                    <span className="plan-badge elite">ELITE</span>
                  </td>
                  <td>
                    <span className="status-badge active">Active</span>
                  </td>
                  <td>Jan 18, 2025</td>
                  <td>Apr 18, 2025</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-icon" title="View">
                        👁️
                      </button>
                      <button className="btn-icon" title="Edit">
                        ✏️
                      </button>
                      <button className="btn-icon" title="Delete">
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">...</button>
            <button className="page-btn">25</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </section>
    </>
  );
}
