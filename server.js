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
      name: "Dumbbell Curls",
      body_zone: "upperBodyExercises",
      equipment_used: true,
      exercise_description:
        "Stand holding a dumbbell in each hand with your arms hanging by your sides. Ensure your elbows are close to your torso and your palms facing forward. Keeping your upper arms stationary, exhale as you curl the weights up to shoulder level while contracting your biceps."
    },
    {
      name: "Triceps Dip",
      body_zone: "upperBodyExercises",
      equipment_used: false,
      exercise_description:
        "Sit in a chair or something sturdy (like a box) and put your hands beside you, roughly shoulder-width apart, fingers facing forward. Then, slide your body forward, off of the support. Steady yourself, using your arms for support. Dip down, bending your arms, touching your bottom to the ground, then raise yourself back up again. It’s sort of like a seated pushup."
    },
    {
      name: "Pushups",
      body_zone: "upperBodyExercises",
      equipment_used: false,
      exercise_description:
        "With hands slightly wider than your shoulders, lower your body until your elbows are at a 90-degree angle, then push up."
    },
    {
      name: "Up-Down Plank",
      body_zone: "upperBodyExercises",
      equipment_used: false,
      exercise_description:
        "Begin in a full plank. Lower your right elbow to the mat and then your left, coming into an elbow plank.Put your right hand on the mat and straighten your right elbow. Do the same on the left to return to a full plank."
    },
    {
      name: "Up-Down Plank",
      body_zone: "upperBodyExercises",
      equipment_used: false,
      exercise_description:
        "Begin in a full plank. Lower your right elbow to the mat and then your left, coming into an elbow plank.Put your right hand on the mat and straighten your right elbow. Do the same on the left to return to a full plank."
    },
    {
      name: "Burpees",
      equipment_used: false,
      body_zone: "lowerBodyExercises",
      cardio: true,
      exercise_description:
        "Start in a squat. Put your palms on the floor. Shift quickly into a pushup position. Do a pushup (optional). Jump back into squatting position. Do an explosive jump, hands in the air, and land in a standing position."
    },
    {
      name: "Stairs",
      equipment_used: false,
      body_zone: "lowerBodyExercises",
      cardio: true,
      exercise_description:
        "Stair running, as long as you have some stairs nearby. Stair workouts help you build strength and power in your lower body and gets the heart rate pumping."
    },
    {
      name: "Mountain Climbers",
      equipment_used: false,
      body_zone: "lowerBodyExercises",
      cardio: true,
      exercise_description:
        "Assume a pushup or plank position. Step forward with one foot, pulling your knee toward your chest. Alternate legs. Do a desired number of reps or do AMRAP for a desired amount of time. Keep your back straight to maximize effectiveness and avoid injury."
    },
    {
      name: "Curtsy Lunge",
      equipment_used: false,
      body_zone: "lowerBodyExercises",
      exercise_description:
        "Start from standing, and step your left leg behind you and to the right so your thighs cross, bending both knees as if you were curtsying. Make sure your front knee is aligned with your front ankle. Return to standing, and switch sides to complete one rep."
    },
    {
      name: "Deadlift",
      equipment_used: true,
      body_zone: "lowerBodyExercises",
      exercise_description:
        "Stand over a barbell, feet at hip width. Bend at the knees, keeping your back straight and your weight back. Using an overhand grip, grab the barbell with your hands just outside your knees. Push up from the hips, lifting the weight to hip height."
    },
    {
      name: "Jump Squats",
      equipment_used: false,
      body_zone: "lowerBodyExercises",
      exercise_description:
        "Stand tall. Push your hips back and bend at the knees to lower into a squat. Once your thighs are parallel to the floor, push through your feet to explode upward, driving your arms overhead. Land softly and repeat."
    },
    {
      name: "Lunges",
      equipment_used: false,
      body_zone: "lowerBodyExercises",
      exercise_description:
        "From a standing position, move one foot forward, then drop your body straight down until your front knee is at a 90-degree angle directly above your ankle."
    },
    {
      name: "Goblet Squats",
      equipment_used: true,
      body_zone: "lowerBodyExercises",
      exercise_description:
        "Start from a standing position with your feet wide and pointed out, holding the head of the dumbbell or a kettlebell with both hands at chest level. Keep your back straight and push down with your butt until your hips are below your knees. Extend your hips and knees and return to the standing position."
    },
    {
      name: "Squats",
      equipment_used: false,
      body_zone: "lowerBodyExercises",
      exercise_description:
        "Stand with your feet shoulder-width apart. Lower your body, keeping your upper body up and bending at the hips and the knees, until you’re in a squat, with your knees over your ankles and your thighs parallel to the floor. Raise yourself up, pushing through your heels."
    }
  ];
  // for (const ex of exerciseSeeds) {
  //   db.Exercise.create(ex);
  // }

  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
