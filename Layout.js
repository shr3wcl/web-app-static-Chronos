const signin = document.querySelector("#sign-in");
const modal = document.querySelector("#sign-pop-up-div");
const formSignIn = document.querySelector("#form-sign-in");
const formSignUp = document.querySelector("#form-sign-up");
const formStart = document.querySelector("#form-start");
const signUpBtn = document.querySelector("#button-sign-up");
const registernow = document.querySelector("#register-now");
const startBtn = document.querySelector("#start-button");

formSignIn.addEventListener("click", function(event) {
    event.stopPropagation();
})

formSignUp.addEventListener("click", function(event) {
    event.stopPropagation();
})

formStart.addEventListener("click", function(event) {
    event.stopPropagation();
})

signin.addEventListener("click", function() {
    modal.classList.add("open");
    formSignIn.classList.add("open2");
});

modal.addEventListener("click", function() {
    modal.classList.remove("open");
    formSignIn.classList.remove("open2");
    formSignUp.classList.remove("open2");
    formStart.classList.remove("open3");
});

signUpBtn.addEventListener("click", function() {
    formSignUp.classList.add("open2");
    modal.classList.add("open");
})

registernow.addEventListener("click", function() {
    formSignIn.classList.remove("open2");
    formSignUp.classList.add("open2");
})

startBtn.addEventListener("click", function() {
    modal.classList.add("open");
    formStart.classList.add("open3");
})