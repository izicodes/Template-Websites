// VALIDATION CODE FOR INPUTS

var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', password_Verify);

function validated() {

    if (username.value.length < 4) {
        
        username.style.border = "1px solid #c92727";
        username_error.style.display = "block"
        username.focus();
        return false;
    }

    if (password.value.length < 6) {
        
        password.style.border = "1px solid #c92727";
        pass_error.style.display = "block"
        password.focus();
        return false;
    }
}

function username_Verify() {

    if (username.value.length >= 3) {

        username.style.border = "1px solid #f96d9277;";
        username_error.style.display = "none";
        return true;
    }
}

function password_Verify() {

    if (password.value.length >= 5) {

        password.style.border = "1px solid #f96d9277";
        pass_error.style.display = "none";
        return true;
    }
}