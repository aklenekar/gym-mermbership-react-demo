import { useEffect, useRef, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./ManageClasses.css";
import { adminService } from "../../services/Services";
import AddClasses from "./AddClasses";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Classes from "./Classes";
import ClassesList from "./ClassesList";

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

  const [viewMode, setViewMode] = useState('list');

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

  const [filterButtonClass, setFilterButtonClass] = useState("TODAY");

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "day") {
      if (value === "Calendar View") {
        setViewMode('calendar');
        setFilterButtonClass(value);
      } else {
        setViewMode('list');
        setFilterButtonClass(value);
      }
    }
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => {
    dialogRef.current.close();
    setFitnessClass(fitnessClassObj);
    setIsView(false);
  };

  const fitnessClassObj = {
    name: "",
    category: "",
    instructor: "",
    location: "",
    durationMinutes: "",
    capacity: false
  };

  const [fitnessClass, setFitnessClass] = useState(fitnessClassObj);
  const [isView, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handleViewDetails(viewFitnessClass) {
    setFitnessClass(viewFitnessClass);
    setIsView(true);
    openModal();
  }

  function handleEditDetails(viewTrainer) {
    setFitnessClass(viewTrainer);
    setIsView(false);
    setIsEdit(true);
    openModal();
  }
  return (
    <>
      <PageHeader
        title="CLASSES MANAGEMENT"
        subTitle="Manage class schedules and bookings"
      />

      <section className="admin-content">
        <div className="container">
          <dialog ref={dialogRef}>
            <AddClasses
              closeModal={closeModal}
              fitnessClasses={fitnessClass}
              isView={isView}
              isEdit={isEdit}
              setFitnessClasses={setFitnessClass}
            />
          </dialog>

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
                <option value="TODAY">Today</option>
                <option value="TOMORROW">Tomorrow</option>
                <option value="WEEK">This Week</option>
              </select>
              <button className="btn-add-class" onClick={openModal}>
                + Add Class
              </button>
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
            <button
              className={`tab-btn ${filterButtonClass === "TODAY" ? "active" : ""}`}
              name="day"
              value="TODAY"
              onClick={handleFilterChange}
            >
              Today
            </button>
            <button
              className={`tab-btn ${filterButtonClass === "TOMORROW" ? "active" : ""}`}
              name="day"
              value="TOMORROW"
              onClick={handleFilterChange}
            >
              Tomorrow
            </button>
            <button
              className={`tab-btn ${filterButtonClass === "WEEK" ? "active" : ""}`}
              name="day"
              value="WEEK"
              onClick={handleFilterChange}
            >
              This Week
            </button>
            <button
              className={`tab-btn ${filterButtonClass === "Calendar View" ? "active" : ""}`}
              name="day"
              value="Calendar View"
              onClick={handleFilterChange}
            >
              Calendar View
            </button>
          </div>

          {viewMode === 'list' ? (
            <ClassesList
              classes={data.classes}
              handleViewDetails={handleViewDetails}
              handleEditDetails={handleEditDetails}
            />
          ) : (
            <div className="calendar-view">
              <Calendar />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
