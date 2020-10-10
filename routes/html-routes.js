// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const workout = require("../models/workout");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/homePage");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("/homePage");
    }
    res.sendFile(path.join(__dirname, "../public/homePage.html"));
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/homePage", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/homePage.html"));
  });
  //-----------exercise list handlebars route
  app.get("/exercises", async (req, res) => {
    const exercises = await db.Exercise.findAll({ raw: true });
    console.log(exercises);
    const hbspayload = {
      exercises
    };
    res.render("exerciseList", hbspayload);
  });

  // //-----------myworkouts handlebars route
  app.get("/myworkout", async (req, res) => {
    const myWorkout = await db.Workout.findAll({
      include: [
        {
          model: db.Exercise,
          as: "Exercises"
        }
      ]
    });
    console.log(JSON.stringify(myWorkout, null, 2));
    const hbspayload = {
      workouts: myWorkout.map((workout) => workout.toJSON())
    };
    res.render("myWorkouts", hbspayload);
  });

  //--------createworkout handlebars route
  app.get("/createworkout", async (req, res) => {
    const exercises = await db.Exercise.findAll({ raw: true });
    console.log(JSON.stringify(exercises, null, 2));
    const hbspayload = {
      upperBodyExercises: [
        {
          exercise: "exercise name"
        }
      ],
      lowerBodyExercises: [
        {
          exercise: "exercise name"
        }
      ],
      equipmentExercises: [
        {
          exercise: "exercise name"
        }
      ]
    };
    res.render("createWorkout", { exercises: exercises });
  });
};
