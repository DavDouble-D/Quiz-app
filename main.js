    function signup() {
      // Get the entered username and password for signup
      var signupUsername = document.getElementById('signupUsername').value;
      var signupPassword = document.getElementById('signupPassword').value;

      // Perform a check if the username is already used
      var isUsernameUsed = checkIfUsernameExists(signupUsername);

      // Display an alert if the username is already used
      if (isUsernameUsed) {
        alert('This username has already been used.');
      } else {
        // Store the username in the local storage
        localStorage.setItem('username', signupUsername);

        // Redirect to the next page
        window.location.href = '2ndpage.html';
      }
    }

    function checkIfUsernameExists(username) {
      // Replace this with your own logic to check if the username exists in your system
      // For the sake of this example, we assume a list of existing usernames
      var existingUsernames = ['user1', 'user2', 'user3'];

      // Check if the username exists in the list
      return existingUsernames.includes(username);
    }
