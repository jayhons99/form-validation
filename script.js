const form = document.getElementById('form');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // reads user inputs
    const emailValue = email.value.trim();
    const userValue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirmPassword.value.trim();

    if (emailValue === '') {
        // email field can't be empty
        setErrorFor(email, "Email cannot be empty");
    } else {
        setSuccessFor(email);
    }

    if (userValue === '') {
        // user field can't be empty   
        setErrorFor(username, "Username cannot be empty");
    } else {
        setSuccessFor(username);
    }

    if (passwordValue === '') {
        // password field can't be empty
        setErrorFor(password, "Password cannot be empty");
    } else if (passwordValue.length < 8) {
        // password >= 8 characters
        setErrorFor(password, "Password is less than 8 characters long");
    } else {
        setSuccessFor(password);
    }

    if (confirmValue === '') {
        setErrorFor(confirmPassword, "Password cannot be empty");
    } else if (confirmValue != passwordValue) {
        setErrorFor(confirmPassword, "Passwords do not match");
    } else {
        setSuccessFor(confirmPassword);
    }
}

function setErrorFor(target, message) {
    const formControl = target.parentElement;
    const errorMessage = formControl.querySelector('small');

    errorMessage.innerText = message;
    errorMessage.style.visibility = 'visible';
}

function setSuccessFor(target) {
    const formControl = target.parentElement;
    const errorMessage = formControl.querySelector('small');

    if (errorMessage.style.visibility === 'visible') {
        errorMessage.style.visibility = 'hidden';
    }
}