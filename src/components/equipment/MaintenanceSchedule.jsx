import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom"; // Added Link
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import BackButtonHeader from "../ui/BackButtonHeader";
import { equipmentService } from "../../services/Services";
import "./MaintenanceSchedule.css";

export default function MaintenanceSchedule() {
  const [searchParams] = useSearchParams();
  const equipmentId = searchParams.get("equipmentId");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMaintenanceLogs();
    if (equipmentId) {
      fetchEquipmentInfo(equipmentId);
    } else {
      setSelectedEquipment(null); // Clear previous equipment when filter is removed
    }
  }, [equipmentId]);

  function fetchMaintenanceLogs() {
    setIsLoading(true);
    equipmentService
      .fetchMaintenanceRecords(equipmentId)
      .then((data) => {
        // Safely extract array whether backend returns array or Page object
        const recordList = Array.isArray(data)
          ? data
          : data?.content || [];
        setTasks(recordList);
      })
      .catch((err) => console.error("Error fetching maintenance:", err))
      .finally(() => setIsLoading(false));
  }

  function fetchEquipmentInfo(id) {
    equipmentService
      .getEquipmentById(id)
      .then((data) => setSelectedEquipment(data))
      .catch((err) => console.error("Error fetching equipment details:", err));
  }

  const handleComplete = (id) => {
    equipmentService
      .completeMaintenance(id, { notes: "Maintenance completed successfully" })
      .then(() => fetchMaintenanceLogs());
  };

  const handleCancel = (id) => {
    equipmentService
      .cancelMaintenance(id)
      .then(() => fetchMaintenanceLogs());
  };

  // Filter tasks to match the day picked on the React Calendar
  const filteredTasks = tasks.filter((task) => {
    if (!task.scheduledDate) return false;
    const taskDate = new Date(task.scheduledDate);
    return taskDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div className="maintenance-page-container">
      <BackButtonHeader
        title="MAINTENANCE SCHEDULE"
        subtitle={
          selectedEquipment
            ? `Servicing records for ${selectedEquipment.name} (${selectedEquipment.serialNumber || "No SN"})`
            : "Track and manage facility equipment servicing tasks"
        }
      />

      <section className="admin-content">
        <div className="container">
          <div className="maintenance-layout">
            {/* Calendar Section */}
            <div className="maintenance-calendar-wrapper">
              <h3>Schedule Calendar</h3>
              <Calendar onChange={setSelectedDate} value={selectedDate} />
            </div>

            {/* Maintenance Job Queue */}
            <div className="maintenance-tasks-list">
              <h3>Tasks for {selectedDate.toDateString()}</h3>

              {isLoading ? (
                <p style={{ color: "var(--light-gray)" }}>
                  Loading scheduled tasks...
                </p>
              ) : filteredTasks.length === 0 ? (
                <p style={{ color: "var(--light-gray)" }}>
                  No maintenance tasks scheduled for this day.
                </p>
              ) : (
                filteredTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`task-card ${
                      task.status === "SCHEDULED" &&
                      new Date(task.scheduledDate) < new Date()
                        ? "overdue"
                        : ""
                    }`}
                  >
                    <div className="task-main">
                      <div className="task-header">
                        <span className="task-title">
                          {task.equipmentName || selectedEquipment?.name || "Equipment Task"}
                        </span>
                        <span className="maint-type-badge">
                          {task.type || "PREVENTATIVE"}
                        </span>
                        <span className={`maint-status ${task.status}`}>
                          {task.status}
                        </span>
                      </div>

                      <div className="task-meta">
                        <span>📅 Scheduled: {task.scheduledDate}</span>
                        <span>
                          👤 Technician: {task.technicianName || "Unassigned"}
                        </span>
                        {task.cost && <span>💰 Cost: ${task.cost}</span>}
                      </div>

                      {task.description && (
                        <div className="task-notes">"{task.description}"</div>
                      )}
                    </div>

                    {task.status === "SCHEDULED" && (
                      <div className="action-buttons">
                        <button
                          className="btn-action"
                          onClick={() => handleComplete(task.id)}
                          title="Mark Complete"
                        >
                          ✓ Complete
                        </button>
                        <button
                          className="btn-action cancel"
                          onClick={() => handleCancel(task.id)}
                          title="Cancel Task"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}