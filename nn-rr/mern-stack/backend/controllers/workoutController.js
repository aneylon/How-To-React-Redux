const Workout = require("../models/Workout");
const mongoose = require("mongoose");

const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({});
  // TODO : how to sort?
  res.status(200).json(workouts);
};

const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    // throw error?
    return res.status(404).json({ error: "no workout founded" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "no workout found" });
  }

  res.status(200).json(workout);
};

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    console.log("workout", workout);
    res.status(200).json(workout);
  } catch (error) {
    console.log("this?");
    console.error(error);
    console.log("then this?");
    res.status(400).json(error.message);
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no workout found" });
  }
  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return res.status(400).json({ error: "no workout found" });
  }
  res.status(200).json(workout);
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no workout found" });
  }
  const workout = await Workout.findByIdAndUpdate(id, { ...req.body });
  if (!workout) {
    return res.status(400).json({ error: "no workout found" });
  }
  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  deleteWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
};
