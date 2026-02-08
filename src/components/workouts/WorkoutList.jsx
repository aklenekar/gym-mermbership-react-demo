import Workout from "./Workout";

export default function WorkoutList({ workouts }) {
  return (
    <div className="workouts-list">
      {workouts.map((workout) => {
        return <Workout key={workout.id} workout={workout} />;
      })}
    </div>
  );
}
