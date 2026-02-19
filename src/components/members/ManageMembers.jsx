import { useEffect, useRef, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./ManageMembers.css";
import { adminService } from "../../services/Services";
import Pagination from "../ui/Pagination.jsx";
import AddMember from "./AddMember.jsx";

export default function ManageMembers() {
  const [data, setData] = useState({
    members: [],
    totalMembers: 0,
    activeMembers: 0,
    expiredMembers: 0,
    newThisWeek: 0,
    currentPage: 0,
    totalPages: 0,
  });

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    plan: "",
    status: "",
  });

  function fetchMembers() {
    adminService
      .fetchMembers(filters)
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchMembers(filters);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  return (
    <>
      <PageHeader
        title="MEMBERS MANAGEMENT"
        subTitle="Manage gym memberships"
      />

      {/* <AddMember dialogRef={dialogRef}  closeModal={closeModal} /> */}

      <section className="admin-content">
        <div className="container">
          <div className="members-controls">
            <div className="search-bar">
              <input
                name="search"
                onChange={handleFilterChange}
                type="text"
                placeholder="Search members by name, email, or ID..."
                className="search-input"
              />
            </div>
            <div className="filters">
              <select
                className="filter-select"
                name="plan"
                onChange={handleFilterChange}
              >
                <option value="All">All Plans</option>
                <option value="Starter">Starter</option>
                <option value="Pro">Pro</option>
                <option value="Elite">Elite</option>
              </select>
              <select
                className="filter-select"
                name="status"
                onChange={handleFilterChange}
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
                <option value="Suspended">Suspended</option>
              </select>
              {/* <button className="btn-add-member" onClick={openModal}>
                + Add Member
              </button> */}
            </div>
          </div>

          <div className="members-stats">
            <div className="stat-box">
              <div className="stat-number">{data.totalMembers}</div>
              <div className="stat-label">Total Members</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.activeMembers}</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.expiredMembers}</div>
              <div className="stat-label">Expired</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.newThisWeek}</div>
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
                {data.members.map((member) => {
                  return (
                    <tr>
                      <td>#M-1001</td>
                      <td>
                        <div className="member-cell">
                          <div className="member-avatar">{member.initials}</div>
                          <span>{member.fullName}</span>
                        </div>
                      </td>
                      <td>{member.email}</td>
                      <td>
                        <span className="plan-badge pro">{member.plan}</span>
                      </td>
                      <td>
                        <span className="status-badge active">
                          {member.status}
                        </span>
                      </td>
                      <td>{member.joinDate}</td>
                      <td>{member.expiryDate}</td>
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
                  );
                })}
              </tbody>
            </table>
          </div>

          <Pagination
            currentPage={data.currentPage}
            totalPages={data.totalPages}
          />
        </div>
      </section>
    </>
  );
}
