// VALIDATION CODE FOR INPUTS

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEvenlkttListener('textInput', email_Verify);
password.addEventListener('textInput', password_Verify);

function validated() {

    if (email.value.length < 9) {
        
        email.style.border = "2px solid #c92727";
        email_error.style.display = "block"
        email.focus();
        return false;
    }

    if (password.value.length < 6) {
        
        password.style.border = "2px solid #c92727";
        pass_error.style.display = "block"
        password.focus();
        return false;
    }
}

function email_Verify() {

    if (email.value.length >= 8) {

        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;

    }
}

function password_Verify() {

    if (password.value.length >= 5) {

        password.style.border = "1px solid silver";
        pass_error.style.display = "none";
        return true;
    }
}
