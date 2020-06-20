$(document).ready(function() {
    // Getting references to our form and inputs
    var resetForm = $("form.reset");
    var emailInput = $("input#email-input");
  
    // When the form is submitted, we validate there's an email and password entered
    resetForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        email: emailInput.val().trim()
      };
  
      if (!userData.email) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      resetUser(userData.email);
      emailInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function lresetUser(email) {
      $.post("/api/reset", {
        email: email
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      }).catch(function(err) {
        console.log(err);
      });
    }
  
  });
  