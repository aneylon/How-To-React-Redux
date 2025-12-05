import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch("/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      // remove from workout list
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Reps : </strong>
        {workout.reps}
      </p>
      <p>
        <strong>Load : </strong> {workout.load}
      </p>
      <p>{workout.createdAt}</p>
      <span onClick={handleClick}>delete</span>
    </div>
  );
};
export default WorkoutDetails;
