import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../pageHeader/PageHeader";
import "./TrainerDashboard.css";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";
import { API_BASE_URL } from "../../util/constants";
import { getAuthToken } from "../../util/auth";

export default function TrainerDashboard() {
  const [candidates, setCandidates] = useState(null);
  const [classes, setClasses] = useState(null);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getAuthToken();
    const headers = { Authorization: `Bearer ${token}` };

    Promise.all([
      fetch(`${API_BASE_URL}/trainers/candidates`, { headers }).then((r) => {
        if (!r.ok) throw new Error("Failed to load candidates");
        return r.json();
      }),
      fetch(`${API_BASE_URL}/trainers/classes`, { headers }).then((r) => {
        if (!r.ok) throw new Error("Failed to load classes");
        return r.json();
      }),
    ])
      .then(([candidatesData, classesData]) => {
        setCandidates(candidatesData);
        setClasses(classesData);
      })
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingIndicator />;
  if (error) return <ErrorPage />;

  const upcoming = (classes?.classes ?? [])
    .filter((c) => new Date(c.classDate) > new Date())
    .sort((a, b) => new Date(a.classDate) - new Date(b.classDate))
    .slice(0, 5);

  return (
    <>
      <PageHeader title="TRAINER DASHBOARD" subTitle="Your coaching overview" />

      <section className="trainer-content">
        <div className="container">
          <div className="trainer-stats-overview">
            <div className="trainer-stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-value">
                  {candidates?.totalCandidates ?? 0}
                </div>
                <div className="stat-label">Total Candidates</div>
              </div>
            </div>
            <div className="trainer-stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-info">
                <div className="stat-value">
                  {candidates?.activeCandidates ?? 0}
                </div>
                <div className="stat-label">Active Candidates</div>
              </div>
            </div>
            <div className="trainer-stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-info">
                <div className="stat-value">
                  {classes?.upcomingClasses ?? 0}
                </div>
                <div className="stat-label">Upcoming Classes</div>
              </div>
            </div>
            <div className="trainer-stat-card">
              <div className="stat-icon">🏁</div>
              <div className="stat-info">
                <div className="stat-value">
                  {classes?.completedClasses ?? 0}
                </div>
                <div className="stat-label">Completed Classes</div>
              </div>
            </div>
            <div className="trainer-stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-info">
                <div className="stat-value">
                  {classes?.avgCapacityUtilization ?? 0}%
                </div>
                <div className="stat-label">Avg Capacity</div>
              </div>
            </div>
          </div>

          <div className="trainer-grid">
            <div className="trainer-card">
              <div className="trainer-card-header">
                <h3>Upcoming Classes</h3>
                <Link to="/trainerClasses" className="view-link">
                  View All
                </Link>
              </div>
              <div className="trainer-card-body">
                {upcoming.length === 0 && (
                  <p className="empty-text">No upcoming classes.</p>
                )}
                {upcoming.map((c) => (
                  <div className="upcoming-class-item" key={c.id}>
                    <div className="uc-time">{c.fullStartTime}</div>
                    <div className="uc-info">
                      <div className="uc-name">{c.name}</div>
                      <div className="uc-meta">
                        {c.category} • {c.location}
                      </div>
                    </div>
                    <div className="uc-capacity">
                      {c.bookedCount}/{c.capacity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trainer-card">
              <div className="trainer-card-header">
                <h3>Quick Actions</h3>
              </div>
              <div className="trainer-card-body">
                <div className="trainer-actions-grid">
                  <Link to="/trainerClasses" className="trainer-action-btn">
                    <span className="action-icon">📅</span>
                    <span>My Classes</span>
                  </Link>
                  <Link to="/trainerCandidates" className="trainer-action-btn">
                    <span className="action-icon">👥</span>
                    <span>My Candidates</span>
                  </Link>
                  <Link to="/messages" className="trainer-action-btn">
                    <span className="action-icon">💬</span>
                    <span>Messages</span>
                  </Link>
                  <Link to="/trainerPayroll" className="trainer-action-btn">
                    <span className="action-icon">💰</span>
                    <span>My Payroll</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
