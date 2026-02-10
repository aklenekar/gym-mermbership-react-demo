import { useEffect, useState } from "react";
import { getAuthToken } from "../../util/auth";
import PageHeader from "../pageHeader/PageHeader";
import "./Workout.css";
import WorkoutActions from "./WorkoutActions";
import WorkoutList from "./WorkoutList";
import WorkoutsSummary from "./WorkoutsSummary";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";
import { workoutService } from "../../services/Services";

export default function Workouts() {
  const token = getAuthToken();
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
            <WorkoutActions handleFilterChange={handleFilterChange} />
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
