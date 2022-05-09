const signin = document.querySelector("#sign-in");
const modal = document.querySelector("#sign-pop-up-div");
const form = document.querySelector("#form-sign-in");

function showSignInWindow() {
    modal.classList.add("open");
    console.log(1);
}

function NoShowSignInWindow() {
    modal.classList.remove("open");
}

signin.addEventListener("click", showSignInWindow);

modal.addEventListener("click", NoShowSignInWindow);

form.addEventListener("click", function(event) {
    event.stopPropagation();
})