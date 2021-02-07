//require dependencies & create router instance
const express = require("express");
const Router = express.Router();
const db = require("../models/Workout");


// GET route for all workouts
Router.get("/api/workouts", (req, res) => {
  db.Workout.find().then((allWorkouts) => {
    res.json(allWorkouts);
  });
});

// POST route for a new workout
Router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((newWorkout) => {
    res.json(newWorkout);
  });
});

//export Router
module.exports = Router;