const signin = document.querySelector("#sign-in");
const modal = document.querySelector("#sign-pop-up-div");
const formSignIn = document.querySelector("#form-sign-in");
const formSignUp = document.querySelector("#form-sign-up");
const signUpBtn = document.querySelector("#button-sign-up");
const registernow = document.querySelector("#register-now");

signin.addEventListener("click", function() {
    modal.classList.add("open");
    formSignIn.classList.add("open2");
});

modal.addEventListener("click", function() {
    modal.classList.remove("open");
    formSignIn.classList.remove("open2");
    formSignUp.classList.remove("open2");
});

formSignIn.addEventListener("click", function(event) {
    event.stopPropagation();
})

formSignUp.addEventListener("click", function(event) {
    event.stopPropagation();
})

signUpBtn.addEventListener("click", function() {
    formSignUp.classList.add("open2");
    modal.classList.add("open");
})

registernow.addEventListener("click", function() {
    formSignIn.classList.remove("open2");
    formSignUp.classList.add("open2");
})