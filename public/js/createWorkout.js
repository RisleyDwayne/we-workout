$(document).ready(() => {
  // Create workout form and input
  const createWorkoutForm = $("form.createWorkout");
  const selectedWorkout = $("input.exercise-input");

  //Upper body img hide and show exercises
  $("#upperBody-img-container").click(function() {
    $(this).hide();
    $("#upperBody-exercises-header").show();
    $("#hidden-upperBody-exercises").show();
  });

  //Upper body exercises hide img show
  $("#upperBody-exercises-header").click(function() {
    $(this).hide();
    $("#hidden-upperBody-exercises").hide();
    $("#upperBody-img-container").show();
  });

  //Lower body img hide and show exercises
  $("#lowerBody-img-container").click(function() {
    $(this).hide();
    $("#lowerBody-exercises-header").show();
    $("#hidden-lowerBody-exercises").show();
  });

  //Lower body exercises hide img show
  $("#lowerBody-exercises-header").click(function() {
    $(this).hide();
    $("#hidden-lowerBody-exercises").hide();
    $("#lowerBody-img-container").show();
  });

  //Cardio img hide and show exercises
  $("#cardio-img-container").click(function() {
    $(this).hide();
    $("#cardio-exercises-header").show();
    $("#hidden-cardio-exercises").show();
  });

  //Cardio exercises hide img show
  $("#cardio-exercises-header").click(function() {
    $(this).hide();
    $("#hidden-cardio-exercises").hide();
    $("#cardio-img-container").show();
  });

  //With equipment img hide and show exercises
  $("#equipment-img-container").click(function() {
    $(this).hide();
    $("#equipment-exercises-header").show();
    $("#hidden-equipment-exercises").show();
  });

  //With equipment exercises hide img show
  $("#equipment-exercises-header").click(function() {
    $(this).hide();
    $("#hidden-equipment-exercises").hide();
    $("#equipment-img-container").show();
  });

  // When the create button is clicked, validate the workout name and exercises selected are not blank/false
  createWorkoutForm.on("submit", event => {
    event.preventDefault();
    const newWorkout = {
      workoutName: $("#workout-name-input")
        .val()
        .trim(),
      exercises: $("input.exercise-input:checked")
        .map((i, elm) => {
          return elm.getAttribute("data-exercise-id");
        })
        .toArray()
    };
    console.log(newWorkout, selectedWorkout);

    //if worout name exists
    if (newWorkout.workoutName === "" || newWorkout.exercises === false) {
      // $("#alert").css("display", "block");
      return;
    }
    console.log("show:", newWorkout.workoutName, newWorkout.exercises);
    $.ajax("/api/workout", {
      type: "POST",
      data: newWorkout
    }).then(() => {
      console.log("created new workout");
      // location.reload();
    });
  });

  //return an alert that says already exists choose a new name
  // If user entered a workout name and selected a exercise, run the newWorkout function
  // createWorkout(workoutName);
  // workoutName.val("");
  // exercises.val(false);
  // createWorkout();

  // Does a post to the signup route. If successful, we are redirected to the my workouts page
  // Otherwise we log any errors
  // function createWorkout(workoutName, exercises) {
  //   $.post("/myworkouts", (req, res) => {
  //     const workout_name = workoutName;
  //     const exercise = exercises;
  //     res.send(workout_name, exercise);
  //   })
  //     .then(() => {
  //       window.location.replace("/myworkouts");
  //       // error alert
  //     })
  //     .catch(handleDuplicateErr);
  // }

  // function handleDuplicateErr(err) {
  //   $("#alert .msg").text(err.responseJSON);
  //   $("#alert").fadeIn(500);
  // }
});
