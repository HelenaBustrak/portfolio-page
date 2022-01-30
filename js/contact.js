const form = document.querySelector("form");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const successMessage = document.querySelector(".successMessage");


function validateForm(event) {
    event.preventDefault();

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(checkLength(name.value, 6) === true) {
        nameError.style.display = "none";
    }
    else {
        nameError.style.display = "block";
    }

    if(checkLength(subject.value, 6) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }
    if(checkLength(message.value, 10) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }

    if (validateEmail(email.value) && checkLength(name.value, 6) && checkLength(subject.value, 6) && checkLength(message.value, 6)) {
        window.alert("Your message was sent!");
    }
        

};

form.addEventListener("submit", validateForm);


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}



