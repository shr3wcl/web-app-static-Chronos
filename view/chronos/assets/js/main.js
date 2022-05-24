const icon1 = document.querySelector(".ti-icon1");
const icon2 = document.querySelector(".ti-icon2");
const icon3 = document.querySelector(".ti-icon3");
const icon4 = document.querySelector(".ti-icon4");
const icon5 = document.querySelector(".ti-icon5");
const icon6 = document.querySelector(".ti-icon6");
const icon7 = document.querySelector(".ti-icon7");
const icon8 = document.querySelector(".ti-icon8");

const noteFrame = document.querySelector(".notes");
const calenderFrame = document.querySelector("#frame-calender");
const todoFrame = document.querySelector("#frame-to-do1");
const todoFrameKanban = document.querySelector("#frame-to-do2");
const clockFrame = document.querySelector("#frame-clock");
const musicFrame = document.querySelector("#frame-music");
const bookFrame = document.querySelector('#frame-book');


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
    calenderFrame.classList.remove("display-inline");
    todoFrame.classList.remove("display-inline");
    todoFrameKanban.classList.remove("display-inline");
    clockFrame.classList.remove("display-inline");
    musicFrame.classList.remove("display-inline");
    bookFrame.classList.remove("display-inline");
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
    calenderFrame.classList.add("display-inline");
    todoFrame.classList.remove("display-inline");
    clockFrame.classList.remove("display-inline");
    musicFrame.classList.remove("display-inline");
    bookFrame.classList.remove("display-inline");
    todoFrameKanban.classList.remove("display-inline");


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
    noteFrame.classList.remove("display-flex");
    calenderFrame.classList.remove("display-inline");
    todoFrame.classList.add("display-inline");
    todoFrameKanban.classList.add("display-inline");
    clockFrame.classList.remove("display-inline");
    musicFrame.classList.remove("display-inline");
    bookFrame.classList.remove("display-inline");
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
    noteFrame.classList.remove("display-flex");
    calenderFrame.classList.remove("display-inline");
    todoFrame.classList.remove("display-inline");
    todoFrameKanban.classList.remove("display-inline");
    clockFrame.classList.add("display-inline");
    musicFrame.classList.remove("display-inline");
    bookFrame.classList.remove("display-inline");

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
    noteFrame.classList.remove("display-flex");
    calenderFrame.classList.remove("display-inline");
    todoFrameKanban.classList.remove("display-inline");
    todoFrame.classList.remove("display-inline");
    clockFrame.classList.remove("display-inline");
    musicFrame.classList.remove("display-inline");
    bookFrame.classList.add("display-inline");

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
    noteFrame.classList.remove("display-flex");
    calenderFrame.classList.remove("display-inline");
    todoFrame.classList.remove("display-inline");
    todoFrameKanban.classList.remove("display-inline");
    clockFrame.classList.remove("display-inline");
    musicFrame.classList.remove("display-inline");
    bookFrame.classList.remove("display-inline");

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
    noteFrame.classList.remove("display-flex");
    calenderFrame.classList.remove("display-inline");
    todoFrame.classList.remove("display-inline");
    clockFrame.classList.remove("display-inline");
    musicFrame.classList.add("display-inline");
    todoFrameKanban.classList.remove("display-inline");
    bookFrame.classList.remove("display-inline");

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
    noteFrame.classList.remove("display-flex");
    calenderFrame.classList.remove("display-inline");
    todoFrame.classList.remove("display-inline");
    clockFrame.classList.remove("display-inline");
    musicFrame.classList.remove("display-inline");
    todoFrameKanban.classList.remove("display-inline");
    bookFrame.classList.remove("display-inline");

});

function showNavLogo() {
    const userlogoNav = document.querySelector("#user-logo__nav");
    if (JSON.stringify(document.getElementsByClassName("showuser-logo__nav")) !== '{}') {
        userlogoNav.classList.add("display-inline");
        userlogoNav.classList.remove("showuser-logo__nav");
    } else {
        userlogoNav.classList.remove("display-inline");
        userlogoNav.classList.add("showuser-logo__nav");
    }
};