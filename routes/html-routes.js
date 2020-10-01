// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

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
    res.sendFile(path.join(__dirname, "../public/login.html"));
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
  app.get("/exercises", (req, res) => {
    const hbspayload = {
      exercises: [
        {
          title: "exercise type",
          text: "exercise explination",
          style: "exercise_workout.css"
        }
      ]
    };
    res.render("exerciseList", hbspayload)
  });
};
