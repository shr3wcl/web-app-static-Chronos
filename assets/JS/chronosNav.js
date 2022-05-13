const icon1 = document.querySelector(".ti-icon1");
const icon2 = document.querySelector(".ti-icon2");
const icon3 = document.querySelector(".ti-icon3");
const icon4 = document.querySelector(".ti-icon4");
const icon5 = document.querySelector(".ti-icon5");
const icon6 = document.querySelector(".ti-icon6");
const icon7 = document.querySelector(".ti-icon7");
const icon8 = document.querySelector(".ti-icon8");

const noteFrame = document.querySelector(".notes");

icon1.addEventListener("click", function() {
    icon1.classList.add("hover1");
    icon2.classList.remove("hover1");
    icon3.classList.remove("hover1");
    icon4.classList.remove("hover1");
    icon5.classList.remove("hover2");
    icon6.classList.remove("hover2");
    icon7.classList.remove("hover2");
    icon8.classList.remove("hover2");
    noteFrame.classList.add("display-flex");
});

icon2.addEventListener("click", function() {
    icon2.classList.add("hover1");
    icon1.classList.remove("hover1");
    icon3.classList.remove("hover1");
    icon4.classList.remove("hover1");
    icon5.classList.remove("hover2");
    icon6.classList.remove("hover2");
    icon7.classList.remove("hover2");
    icon8.classList.remove("hover2");
    noteFrame.classList.remove("display-flex");

});

icon3.addEventListener("click", function() {
    icon3.classList.add("hover1");
    icon2.classList.remove("hover1");
    icon1.classList.remove("hover1");
    icon4.classList.remove("hover1");
    icon5.classList.remove("hover2");
    icon6.classList.remove("hover2");
    icon7.classList.remove("hover2");
    icon8.classList.remove("hover2");
});

icon4.addEventListener("click", function() {
    icon4.classList.add("hover1");
    icon2.classList.remove("hover1");
    icon3.classList.remove("hover1");
    icon1.classList.remove("hover1");
    icon5.classList.remove("hover2");
    icon6.classList.remove("hover2");
    icon7.classList.remove("hover2");
    icon8.classList.remove("hover2");
});

icon5.addEventListener("click", function() {
    icon5.classList.add("hover2");
    icon2.classList.remove("hover1");
    icon3.classList.remove("hover1");
    icon4.classList.remove("hover1");
    icon6.classList.remove("hover2");
    icon1.classList.remove("hover1");
    icon7.classList.remove("hover2");
    icon8.classList.remove("hover2");
});

icon6.addEventListener("click", function() {
    icon6.classList.add("hover2");
    icon2.classList.remove("hover1");
    icon3.classList.remove("hover1");
    icon4.classList.remove("hover1");
    icon5.classList.remove("hover2");
    icon1.classList.remove("hover1");
    icon7.classList.remove("hover2");
    icon8.classList.remove("hover2");
});

icon7.addEventListener("click", function() {
    icon7.classList.add("hover2");
    icon2.classList.remove("hover1");
    icon3.classList.remove("hover1");
    icon4.classList.remove("hover1");
    icon5.classList.remove("hover2");
    icon6.classList.remove("hover2");
    icon1.classList.remove("hover1");
    icon8.classList.remove("hover2");
});

icon8.addEventListener("click", function() {
    icon8.classList.add("hover2");
    icon2.classList.remove("hover1");
    icon3.classList.remove("hover1");
    icon4.classList.remove("hover1");
    icon5.classList.remove("hover2");
    icon6.classList.remove("hover2");
    icon7.classList.remove("hover2");
    icon1.classList.remove("hover1");
});