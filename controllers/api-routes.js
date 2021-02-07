//require dependencies & create router instance
const express = require("express");
const Router = express.Router();
const Workout = require("../models/Workout");

// GET route for all workouts
Router.get("/api/workouts", (req, res) => {
  Workout.find().then((allWorkouts) => {
    res.json(allWorkouts);
  });
});

// POST route for a new workout
Router.post("/api/workouts", (req, res) => {
  Workout.create(req.body).then((newWorkout) => {
    res.json(newWorkout);
  });
});

// PUT route for creating a new workout or updating one
Router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  Workout.findByIdAndUpdate(id, {
    $push: { exercises: req.body },
  }).then((updatedWorkout) => {
    res.json(updatedWorkout);
  });
});

//export Router
module.exports = Router;
