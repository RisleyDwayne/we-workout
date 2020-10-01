$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const fnameInput = $("input#first-name-input");
  const lnameInput = $("input#last-name-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const dobInput = $("input#dob-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      fname: fnameInput.val().trim(),
      lname: lnameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      dob: dobInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.fname, userData.lname, userData.email, userData.password, userData.dob);
    fnameInput.val("");
    lnameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    dobInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the homePage page
  // Otherwise we log any errors
  function signUpUser(fname, lname, email, password, dob) {
    $.post("/api/signup", {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      dob: dob,
    })
      .then(() => {
        window.location.replace("/homePage");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
