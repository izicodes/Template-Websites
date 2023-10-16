const wrapper = document.querySelector(".wrapper");
const forgottenPageHTML = `<h1 id="forgotH1">Resetting Password</h1>
<!-- The Form -->
<form method="post">
    <section id="textFieldSection">
        <div class="txt_field">
            <input type="text" required />
            <label> Username </label>
        </div>

        <div class="txt_field">
            <input type="email" required />
            <label> Email </label>
        </div>
    </section>

    <section id="formFooterSection">
        <input id="send-link-btn" type="submit" value="Send link" />

        <div class="extraOption">
            No need to reset password?
            <span class="loginBtn">Login</span>
        </div>
    </section>
</form>`;
const signUpPageHTML = `<h1>Sign Up</h1>
<!-- The Form -->
<form method="">
    <section id="textFieldSection">
        <div class="txt_field">
            <input type="text" required />
            <label> Username </label>
        </div>

        <div class="txt_field">
            <input type="email" required />
            <label> Email </label>
        </div>

        <div class="txt_field">
            <input type="password" required />
            <label> Password </label>
        </div>
    </section>

    <section id="formFooterSection">
        <input type="submit" value="Sign up" />

        <div class="extraOption">Not a new member? <span class="loginBtn">Login</span></div>
    </section>
</form>`;
const loginPageHTML = `<h1>Login</h1>
<!-- The Form -->
<form method="">
    <section id="textFieldSection">
        <div class="txt_field">
            <input type="text" required />
            <label> Username </label>
        </div>

        <div class="txt_field">
            <input type="password" required />
            <label> Password </label>
        </div>
    </section>

    <section id="formFooterSection">
        <span id="forgottenLink">Forgotten Password?</span>

        <input type="submit" value="Login" />

        <div class="extraOption">
            Not a member?
            <span class="signUpBtn">Sign up</span>
        </div>
    </section>
</form>`;

document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains('signUpBtn')) {
        addHTML(signUpPageHTML);
    }
    else if (event.target.id === 'forgottenLink') { 
        addHTML(forgottenPageHTML);
    }
    else if (event.target.classList.contains('loginBtn')) {
        addHTML(loginPageHTML);
    }
});

function addHTML(html) {
	wrapper.innerHTML = html;
}

