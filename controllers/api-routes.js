const express = require("express");
const Router = express.Router();
const db = require("../models");

Router.get("/api/workouts", (req, res) => {
  db.Workout.find().then((allWorkouts) => {
    res.json(allWorkouts);
  });
});
