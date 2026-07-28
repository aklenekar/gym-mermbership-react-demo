import { useEffect, useRef, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import Pagination from "../ui/Pagination.jsx";
import { equipmentService } from "../../services/Services";
import "./ManageEquipment.css";
import { useNavigate } from "react-router-dom";
import AddEquipmentModal from "./AddEquipmentModal.jsx";

export default function ManageEquipment() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    equipmentPage: { content: [], totalPages: 0 },
    totalEquipment: 0,
    operational: 0,
    underMaintenance: 0,
    outOfService: 0,
  });

  const [stats, setStats] = useState({
    totalAssetValue: 0,
    upcomingMaintenanceCount: 0,
    overdueMaintenanceCount: 0,
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isView, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    category: "ALL",
    status: "ALL",
  });

  function fetchInventory() {
    setIsLoading(true);
    equipmentService
      .fetchEquipment(filters, currentPage, 10)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }

  function fetchStats() {
    equipmentService
      .fetchStats()
      .then((res) => setStats(res))
      .catch((err) => console.error("Error fetching stats:", err));
  }

  useEffect(() => {
    fetchInventory();
  }, [filters, currentPage]);

  useEffect(() => {
    fetchStats();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
    setCurrentPage(0);
  };

  const dialogRef = useRef(null);
  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  const getCategoryIcon = (category) => {
    switch (category) {
      case "CARDIO":
        return "🏃";
      case "STRENGTH":
        return "🏋️";
      case "FREE_WEIGHTS":
        return "💪";
      case "FUNCTIONAL":
        return "🧘";
      default:
        return "⚙️";
    }
  };

  const handleScheduleMaintenance = (equipmentId) => {
    navigate(`/manageEquipment/maintenance?equipmentId=${equipmentId}`);
  };

  function handleViewDetails(equipment, view) {
    setIsView(view == "view" ? true : false);
    setIsEdit(view == "edit" ? true : false);
    setSelectedEquipment(equipment);
    openModal();
  }

  return (
    <>
      <PageHeader
        title="EQUIPMENT MANAGEMENT"
        subTitle="Track facility assets, operational status, and maintenance"
      />

      <section className="admin-content">
        <div className="container">
          {/* Controls Bar */}
          <div className="equipment-controls">
            <div className="search-bar">
              <input
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                type="text"
                placeholder="Search equipment by name, brand, or serial..."
                className="search-input"
              />
            </div>
            <div className="filters">
              <select
                className="filter-select"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
              >
                <option value="ALL">All Categories</option>
                <option value="CARDIO">Cardio</option>
                <option value="STRENGTH">Strength</option>
                <option value="FREE_WEIGHTS">Free Weights</option>
                <option value="FUNCTIONAL">Functional</option>
              </select>

              <select
                className="filter-select"
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="ALL">All Status</option>
                <option value="OPERATIONAL">Operational</option>
                <option value="UNDER_MAINTENANCE">Under Maintenance</option>
                <option value="OUT_OF_SERVICE">Out of Service</option>
                <option value="RETIRED">Retired</option>
              </select>

              <button className="btn-add-equipment" onClick={openModal}>
                + Add Equipment
              </button>
            </div>
          </div>

          {/* Stat Boxes */}
          <div className="equipment-stats">
            <div className="stat-box">
              <div className="stat-number">{data.totalEquipment}</div>
              <div className="stat-label">Total Assets</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.operational}</div>
              <div className="stat-label">Operational</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.underMaintenance}</div>
              <div className="stat-label">Under Maintenance</div>
            </div>
            <div className="stat-box">
              <div className="stat-number" style={{ color: "var(--danger)" }}>
                {stats.overdueMaintenanceCount}
              </div>
              <div className="stat-label">Overdue Tasks</div>
            </div>
          </div>

          {/* Table Container */}
          <div className="equipment-table-container">
            <table className="equipment-table">
              <thead>
                <tr>
                  <th>Equipment</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Serial Number</th>
                  <th>Status</th>
                  <th>Next Maintenance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.equipmentPage.content &&
                data.equipmentPage.content.length > 0 ? (
                  data.equipmentPage.content.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="equipment-cell">
                          <div className="equipment-icon">
                            {getCategoryIcon(item.category)}
                          </div>
                          <div>
                            <strong>{item.name}</strong>
                            <div
                              style={{
                                fontSize: "0.8rem",
                                color: "var(--light-gray)",
                              }}
                            >
                              {item.brand} {item.model ? `• ${item.model}` : ""}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="category-badge">{item.category}</span>
                      </td>
                      <td>{item.location || "N/A"}</td>
                      <td>
                        <code>{item.serialNumber || "N/A"}</code>
                      </td>
                      <td>
                        <span className={`eq-status-badge ${item.status}`}>
                          {item.status.replace("_", " ")}
                        </span>
                      </td>
                      <td>{item.nextMaintenanceDate || "Not Scheduled"}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="btn-icon" title="View Details" onClick={() => handleViewDetails(item, "view")}>
                            👁️
                          </button>
                          <button className="btn-icon" title="Edit Asset" onClick={() => handleViewDetails(item, "edit")}>
                            ✏️
                          </button>
                          <button
                            className="btn-icon"
                            title="Schedule Maintenance"
                            onClick={() => handleScheduleMaintenance(item.id)}
                          >
                            🔧
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="7"
                      style={{
                        textAlign: "center",
                        padding: "2rem",
                        color: "var(--light-gray)",
                      }}
                    >
                      {isLoading
                        ? "Loading inventory..."
                        : "No equipment records found."}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={data.equipmentPage.totalPages || 1}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>

      <dialog ref={dialogRef} className="equipment-modal">
        <AddEquipmentModal
          closeModal={closeModal}
          onSave={(newEquipment) => {
            fetchInventory();
            fetchStats();
          }}
          isView={isView}
          isEdit={isEdit}
          equipment={selectedEquipment}
        />
      </dialog>
    </>
  );
}
