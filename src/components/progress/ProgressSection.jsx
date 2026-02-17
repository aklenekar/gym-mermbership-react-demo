import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./ProgressSection.css";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";
import { progressService } from "../../services/Services";
import PersonalRecords from "./PersonalRecord";
import MonthlySummary from "./MonthlySummary";
import Achievements from "./Achievements";
import PersonalGoals from "./PersonalGoals";

export default function ProgressSection() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function fetchProgress() {
    progressService
      .fetchProgress()
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchProgress();
  }, []);

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (error) {
    content = <ErrorPage />;
  }

  if (data) {
    content = (
      <section className="progress-content">
        <div className="container">
          <div className="progress-grid">

            {/* Personal Goals */}
            <PersonalGoals personalGoals={data.goals} />

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
                <PersonalRecords records={data.personalRecords} />
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
              <Achievements achievements={data.achievements} />
            </div>

            {/* Monthly Summary */}
            <MonthlySummary stats={data.monthlyStats} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHeader title="MY PROGRESS" subTitle="Track your fitness journey" />
      {content}
    </>
  );
}
