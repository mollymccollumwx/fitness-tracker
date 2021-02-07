// require dependencies
const express = require("express");
const mongoose = require("mongoose");

//create an instance of express
const app = express();

// PORT
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connect mongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// make sure mongoDB is connected correctly or else show error
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});


// listen on the PORT
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
