const eye1 = document.querySelector(".fa-eye1");
const eyeSlash1 = document.querySelector(".fa-eye-slash1");
const eye2 = document.querySelector(".sign-up-eye");
const eye3 = document.querySelector(".sign-up-eye-retype");
const eyeSlash2 = document.querySelector(".sign-up-eye-slash");
const eyeSlash3 = document.querySelector(".sign-up-eye-slash-retype");

// function showPass(eyeSlash, eye) {
//     eye.
//     eyeSlash.classlist.add(".no-display");

// }

eyeSlash1.addEventListener("click", function() {
    eye1.classList.remove(".no-display");
    eyeSlash1.classList.add(".no-display");
});