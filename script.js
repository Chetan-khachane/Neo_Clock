var sec = document.getElementsByClassName("sec")[0];
var mins = document.getElementsByClassName("min")[0];
var hr = document.getElementsByClassName("hr")[0];
var datepanel = document.querySelectorAll("h1");
let date = new Date();
let dateArr = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
var body = document.body;
var digits = document.querySelectorAll(".digits");
var dayNight = document.querySelector(".ap");
var modeChange = document.querySelector(".modeChange");
var dateHead = document.querySelector(".datepanel span");
var mode = document.querySelector(".btnBack .mode");
var dateColor = document.querySelectorAll(".date");


mode.addEventListener("click", function () {
    mode.classList.toggle("modeMoveX");

    if (mode.classList.contains("modeMoveX") == false) {
        mode.classList.add("modeMove");
    } else {
        mode.classList.remove("modeMove");
    }

    body.classList.toggle("blackBody");

    digits.forEach((v, i) => {
        digits[i].classList.toggle("digitsDark")
    })
    modeChange.classList.toggle("modeDark");


    dateHead.classList.toggle("violetSpan");
    dateColor.forEach((v, i) => {
        dateColor[i].classList.toggle("dateColor");
    })
})



datepanel.forEach(function (val, i) {
    datepanel[i].innerText = String(dateArr[i]);
})





setInterval(timer, 1000);


function timer() {
    var date = new Date();

    var seconds = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();

    mins.textContent = min;
    hr.textContent = hour;
    sec.textContent = seconds;

    if (seconds == 59) {
        min = date.getMinutes();
        mins.textContent = min;
    }

    if (min == 59) {
        hour = date.getHours();
        hr.textContent = hour;
    }

    if (hour > 12) {
        dayNight.textContent = "PM";
    } else {
        dayNight.textContent = "AM";
    }

}