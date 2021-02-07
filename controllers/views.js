// require dependencies and create router instance
const express = require("express");
const path = require("path");
const Router = express.Router();

// viewing the add exercise page
Router.get("/exercise", (req, res)=> {
    res.sendFile(path.join(__dirname, "../public/exercise/html"));
})




//export Router
module.exports = Router;