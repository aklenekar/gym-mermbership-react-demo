import { useEffect, useRef, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./ManageTrainers.css";
import { adminService } from "../../services/Services";
import AddTrainer from "./AddTrainer";

export default function ManageTrainers() {
  const [data, setData] = useState({
    trainers: [],
  });

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    specialty: "",
    status: "",
  });

  function fetchTrainers() {
    adminService
      .fetchTrainers(filters)
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchTrainers(filters);
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
  const closeModal = () => {
    dialogRef.current.close();
    setTrainer(trainerObj);
    setIsView(false);
  };

  const trainerObj = {
    fullName: "",
    specialty: "",
    bio: "",
    certifications: "",
    yearsExperience: "",
    isHeadCoach: false,
    email: "",
    phone: "",
  };

  const [trainer, setTrainer] = useState(trainerObj);
  const [isView, setIsView] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  function handleViewDetails(viewTrainer) {
    setTrainer(viewTrainer);
    setIsView(true);
    openModal();
  }

  function handleEditDetails(viewTrainer) {
    setTrainer(viewTrainer);
    setIsView(false);
    setIsEdit(true);
    openModal();
  }

  return (
    <>
      <PageHeader
        title="TRAINERS MANAGEMENT"
        subTitle="Manage gym trainers and coaches"
      />

      <section className="admin-content">
        <div className="container">
          <dialog ref={dialogRef}>
            <AddTrainer
              closeModal={closeModal}
              trainer={trainer}
              isView={isView}
              isEdit={isEdit}
            />
          </dialog>
          <div className="trainers-controls">
            <div className="search-bar">
              <input
                type="text"
                name="search"
                onChange={handleFilterChange}
                placeholder="Search trainers by name or specialty..."
                className="search-input"
              />
            </div>
            <div className="filters">
              <select
                name="specialty"
                className="filter-select"
                onChange={handleFilterChange}
              >
                <option value="all">All Specialties</option>
                <option value="Strength">Strength</option>
                <option value="Cardio">Cardio</option>
                <option value="Yoga">Yoga</option>
                <option value="HIIT"> HIIT</option>
                <option value="Boxing">Boxing</option>
              </select>
              <select
                name="status"
                className="filter-select"
                onChange={handleFilterChange}
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <button className="btn-add-trainer" onClick={openModal}>
                + Add Trainer
              </button>
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
            {data.trainers.map((trainer) => {
              return (
                <div className="trainer-card">
                  <div className="trainer-header">
                    <div className="trainer-avatar-large">
                      {trainer.initials}
                    </div>
                    {trainer.isHeadCoach && (
                      <div className="trainer-badge head-coach">HEAD COACH</div>
                    )}
                  </div>
                  <div className="trainer-info">
                    <h3 className="trainer-name">{trainer.fullName}</h3>
                    <div className="trainer-specialty">{trainer.specialty}</div>
                    <div className="trainer-credentials">
                      {trainer.certifications ? (
                        <span className="credential">
                          {trainer.certifications}
                        </span>
                      ) : (
                        <span className="credential"></span>
                      )}
                    </div>
                  </div>
                  <div className="trainer-stats-row">
                    <div className="stat-item">
                      <div className="stat-value">
                        {trainer.clientsTrained}+
                      </div>
                      <div className="stat-name">Clients</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">
                        {trainer.yearsExperience}
                      </div>
                      <div className="stat-name">Years</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-value">⭐ {trainer.rating}</div>
                      <div className="stat-name">Rating</div>
                    </div>
                  </div>
                  <div className="trainer-actions">
                    <button
                      className="btn-view"
                      onClick={() => handleViewDetails(trainer)}
                    >
                      View Profile
                    </button>
                    <button
                      className="btn-edit"
                      onClick={() => handleEditDetails(trainer)}
                    >
                      Edit
                    </button>
                    <button className="btn-delete">Delete</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
