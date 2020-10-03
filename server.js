/* eslint-disable camelcase */
require("dotenv").config();
// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
const apiroutes = require("./routes/api-routes.js");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
const exphbs = require("express-handlebars");
const exercise = require("./models/exercise");

const handlebarsHelpers = {
  ifEq: function(arg1, arg2, options) {
    return arg1 === arg2 ? options.fn(this) : options.inverse(this);
  }
};
const hbs = exphbs.create({
  defaultLayout: "main",
  helpers: handlebarsHelpers
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Requiring our routes
app.use("/api", apiroutes);
require("./routes/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(() => {
  const exerciseSeeds = [
    {
      name: "something",
      body_zone: "upperBodyExercises",
      equipment_used: true,
      exercise_description: "A description"
    },
    {
      name: "something 2",
      body_zone: "lowerBodyExercises",
      equipment_used: true,
      exercise_description: "A description"
    },
    {
      name: "something 3",
      body_zone: "lowerBodyExercises",
      equipment_used: false,
      cardio: true,
      exercise_description: "A description"
    }
  ];
  for (const ex of exerciseSeeds) {
    db.Exercise.create(ex);
  }

  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
