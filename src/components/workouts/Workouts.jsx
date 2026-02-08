import { useEffect, useState } from "react";
import { getAuthToken } from "../../util/auth";
import PageHeader from "../pageHeader/PageHeader";
import "./Workout.css";
import WorkoutActions from "./WorkoutActions";
import WorkoutList from "./WorkoutList";
import WorkoutsSummary from "./WorkoutsSummary";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";
import { API_BASE_URL } from "../../util/constants";

export default function Workouts() {
  const token = getAuthToken();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchWorkouts() {
      const response = await fetch(`${API_BASE_URL}/workouts`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        const error = new Error("An error occurred while fetching the events");
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const details = await response.json();
      return details;
    }

    fetchWorkouts()
      .then((details) => {
        setData(details);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
      <>
        <section className="workouts-stats">
          <div className="container">
            <WorkoutsSummary summary={data.monthlyStats} />
          </div>
        </section>

        <section className="workouts-content">
          <div className="container">
            <WorkoutActions />
            <WorkoutList workouts={data.workouts}/>
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
