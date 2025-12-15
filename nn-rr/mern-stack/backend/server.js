require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const port = process.env.port;

const workouts = require("./routes/workouts");
const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());

// logging middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/user", userRoutes);

app.use("/workouts", workouts);

// TODO : add api interface (swagger like)

mongoose
  .connect(process.env.mongo_uri)
  .then(() => {
    app.listen(port, () => {
      console.log("listening on port : ", port);
    });
  })
  .catch((error) => {
    console.error(error);
  });
