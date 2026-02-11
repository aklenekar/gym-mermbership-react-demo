import { useEffect, useRef, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./Workout.css";
import WorkoutActions from "./WorkoutActions";
import WorkoutList from "./WorkoutList";
import WorkoutsSummary from "./WorkoutsSummary";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";
import { workoutService } from "../../services/Services";

export default function Workouts() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    workout: "",
    day: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function fetchWorkouts() {
    workoutService
      .fetchWorkouts(filters)
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchWorkouts(filters);
  }, [filters]);

  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      await workoutService.submitWorkout(payload);

      // --- SUCCESS LOGIC ---
      event.target.reset();
      fetchWorkouts();
      closeModal();
    } catch (error) {
      console.error("Failed to log workout:", error);
      alert("Could not save workout. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (error) {
    content = <ErrorPage />;
  }

  if (data) {
    content = (
      <>
        <section className="workouts-stats">
          <div className="container">
            <WorkoutsSummary summary={data.monthlyStats} />
          </div>
        </section>

        <section className="workouts-content">
          <div className="container">
            <WorkoutActions
              handleFilterChange={handleFilterChange}
              dialogRef={dialogRef}
              openModal={openModal}
              closeModal={closeModal}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
            <WorkoutList workouts={data.workouts} />
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="MY WORKOUTS" subTitle="Track your training progress" />
      {content}
    </>
  );
}
