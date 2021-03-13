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
        } else {
            hideCredentialsCannotBeEmpty();
        }
    }

    function hideCredentialsCannotBeEmpty() {
        document.getElementById('error_msg').style.display = 'none';
    }

    function showCredentialsCannotBeEmpty() {
        document.getElementById('error_msg').style.display = 'block';
    }

    document.getElementById('login-button').onclick = function(){
          const userAndPass = getUsernameAndPassword()
          validateCredentials(userAndPass);
          console.log(userAndPass);
    }

    document.getElementById('sign-in-button').onclick = function(){
          const userAndPass = getUsernameAndPassword()
          validateCredentials(userAndPass);
          console.log(userAndPass);
    }

});