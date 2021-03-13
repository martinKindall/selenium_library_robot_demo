document.addEventListener("DOMContentLoaded", function(event) {

    hideCredentialsCannotBeEmpty();

    const userCredentialsStore = {};

    function getUsernameAndPassword() {
        const username = document.getElementById('input_username').value;
        const password = document.getElementById('input_password').value;

        return {
            'username': username,
            'password': password
        };
    }

    function validateCredentials(userCredentials) {
        if (!userCredentials.username || !userCredentials.password) {
            showCredentialsCannotBeEmpty();
            return false;
        } else {
            hideCredentialsCannotBeEmpty();
            return true;
        }
    }

    function showCredentialsCannotBeEmpty() {
        document.getElementById('error_msg').innerHTML = '<div class="col-sm-12"><p class="h4">Username or password cannot be empty</p></div>';
    }

    function hideCredentialsCannotBeEmpty() {
        document.getElementById('error_msg').innerHTML = '';
    }

    function refreshInputs() {
        document.getElementById('input_username').value = null;
        document.getElementById('input_password').value = null;
    }

    document.getElementById('login-button').onclick = function(){
          const userAndPass = getUsernameAndPassword()
          if (validateCredentials(userAndPass)) {
              const storedPassword = userCredentialsStore[userAndPass.username];
              if (!!storedPassword && storedPassword === userAndPass.password) {
                window.location = "welcome.html";
              } else {
                window.location = "error.html";
              }
          }
    }

    document.getElementById('sign-in-button').onclick = function(){
          const userAndPass = getUsernameAndPassword()
          if (validateCredentials(userAndPass)) {
              if (!!userCredentialsStore[userAndPass.username]) {
                window.location = "error.html";
              } else {
                userCredentialsStore[userAndPass.username] = userAndPass.password;
                refreshInputs();
              }
          }
    }
});