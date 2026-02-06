import PageHeader from "../pageHeader/PageHeader";
import "./Workout.css";
import WorkoutActions from "./WorkoutActions";
import WorkoutList from "./WorkoutList";
import WorkoutsSummary from "./WorkoutsSummary";

export default function Workouts() {
  return (
    <>
      <PageHeader title="MY WORKOUTS" subTitle="Track your training progress" />
      <section className="workouts-stats">
        <div className="container">
          <WorkoutsSummary />
        </div>
      </section>

      <section className="workouts-content">
        <div className="container">
          <WorkoutActions />
          <WorkoutList />
        </div>
      </section>
    </>
  );
}
