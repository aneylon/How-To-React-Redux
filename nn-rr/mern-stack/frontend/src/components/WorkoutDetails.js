import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { user } = useAuthContext();

  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
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
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};
export default WorkoutDetails;
