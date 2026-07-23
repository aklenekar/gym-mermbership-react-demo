import { useEffect, useState } from "react";
import { trainerService } from "../../services/Services";
import "./ManageClasses.css";
import PageHeader from "../pageHeader/PageHeader";
import ClassesList from "./ClassesList";

export default function TrainerClasses() {
  const [data, setData] = useState({
    classes: [],
    totalClasses: 0,
    upcomingClasses: 0,
    avgCapacityUtilization: 0
  });
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("list");

  function loadClasses() {
    trainerService
      .fetchTrainerClasses()
      .then((response) => {
        const classList = Array.isArray(response?.classes)
          ? response.classes
          : Array.isArray(response)
            ? response
            : [];

        setData((prevData) => ({
          ...prevData,
          classes: classList,
          totalClasses: response?.totalClasses || 0,
          upcomingClasses: response?.upcomingClasses || 0,
          avgCapacityUtilization: response?.avgCapacityUtilization || 0,
        }));
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);
    loadClasses();
  }, []);

  return (
    <>
      <PageHeader title="My Classes" subTitle="Manage Gym classes" />
      <section className="admin-content">
        <div className="container">
          <div className="admin-classes-stats">
            <div className="stat-box">
              <div className="stat-number">{data.totalClasses}</div>
              <div className="stat-label">Total Classes</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.avgCapacityUtilization}%</div>
              <div className="stat-label">Avg Capacity</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">{data.upcomingClasses}</div>
              <div className="stat-label">Upcoming Classes</div>
            </div>
          </div>
          <ClassesList classes={data.classes} />
        </div>
      </section>
    </>
  );
}
