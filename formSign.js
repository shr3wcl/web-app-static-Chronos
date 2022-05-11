const eye1 = document.querySelector(".fa-eye1");
const eyeSlash1 = document.querySelector(".fa-eye-slash1");
const eye2 = document.querySelector(".sign-up-eye");
const eye3 = document.querySelector(".sign-up-eye-retype");
const eyeSlash2 = document.querySelector(".sign-up-eye-slash");
const eyeSlash3 = document.querySelector(".sign-up-eye-slash-retype");

eyeSlash1.addEventListener("click", function() {
    eye1.classList.add("open2");
    eyeSlash1.classList.add("no-display");
    document.getElementById("pw1").type = "text";
});



eye1.addEventListener("click", function() {
    eyeSlash1.classList.remove("no-display");
    eye1.classList.remove("open2");
    document.getElementById("pw1").type = "password";
});

eyeSlash2.addEventListener("click", function() {
    eye2.classList.add("open2");
    eyeSlash2.classList.add("no-display");
    document.getElementById("pw2").type = "text";
});



eye2.addEventListener("click", function() {
    eyeSlash2.classList.remove("no-display");
    eye2.classList.remove("open2");
    document.getElementById("pw2").type = "password";
});

eyeSlash3.addEventListener("click", function() {
    eye3.classList.add("open2");
    eyeSlash3.classList.add("no-display");
    document.getElementById("pw3").type = "text";
});

eye3.addEventListener("click", function() {
    eyeSlash3.classList.remove("no-display");
    eye3.classList.remove("open2");
    document.getElementById("pw3").type = "password";
});