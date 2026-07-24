import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./TrainerClasses.css";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";
import { API_BASE_URL } from "../../util/constants";
import { getAuthToken } from "../../util/auth";
import { trainerService } from "../../services/Services";

export default function TrainerClasses() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    trainerService
      .fetchTrainerClasses()
      .then(setData)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingIndicator />;
  if (error) return <ErrorPage />;

  const now = new Date();
  const filteredClasses = (data.classes ?? []).filter((c) => {
    if (filter === "UPCOMING") return new Date(c.classDate) > now;
    if (filter === "COMPLETED") return new Date(c.classDate) <= now;
    return true;
  });

  return (
    <>
      <PageHeader title="MY CLASSES" subTitle="Classes you are teaching" />

      <section className="trainer-classes-content">
        <div className="container">
          <div className="trainer-classes-stats">
            <div className="stat-box">
              <div className="stat-number">{data.totalClasses}</div>
              <div className="stat-label">Total Classes</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.upcomingClasses}</div>
              <div className="stat-label">Upcoming</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.completedClasses}</div>
              <div className="stat-label">Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.avgCapacityUtilization}%</div>
              <div className="stat-label">Avg Capacity</div>
            </div>
          </div>

          <div className="trainer-classes-tabs">
            {["ALL", "UPCOMING", "COMPLETED"].map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${filter === tab ? "active" : ""}`}
                onClick={() => setFilter(tab)}
              >
                {tab.charAt(0) + tab.slice(1).toLowerCase()}
              </button>
            ))}
          </div>

          <div className="trainer-classes-list">
            {filteredClasses.length === 0 && (
              <p className="empty-text">No classes found.</p>
            )}
            {filteredClasses.map((c) => (
              <div className="trainer-class-card" key={c.id}>
                <div className="tc-time-badge">{c.fullStartTime}</div>
                <div className="tc-details">
                  <div className="tc-header-row">
                    <div>
                      <h3 className="tc-name">{c.name}</h3>
                      <span className="tc-category">{c.category}</span>
                    </div>
                    <span className={`tc-status ${c.status?.toLowerCase()}`}>
                      {c.status}
                    </span>
                  </div>
                  <div className="tc-info-row">
                    <span>📍 {c.location}</span>
                    <span>⏱️ {c.durationMinutes} min</span>
                    <span>
                      👥 {c.bookedCount}/{c.capacity} booked
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
