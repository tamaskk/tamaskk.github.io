/* Output */

let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

/* Buttons to change the value of the output */

let hourUp = document.querySelector('.hour-arrow-up');
let hourDown = document.querySelector('.hour-arrow-down');

let minuteUp = document.querySelector('.minute-arrow-up');
let minuteDown = document.querySelector('.minute-arrow-down');

let secondUp = document.querySelector('.second-arrow-up');
let secondDown = document.querySelector('.second-arrow-down');

/* Buttons */

let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');

let buttons = document.getElementsByClassName('arrow-buttons');

/* Counters */

let hourBasic = 0;
let minuteBasic = 0;
let secondBasic = 0;

var interval;

/* Time increase or decrease buttons */

hourUp.addEventListener("click", function() {
    hourBasic++;
    if (hourBasic < 10) {
        hour.innerHTML = "0" + hourBasic;
    } else {
        hour.innerHTML = hourBasic;
    }
});

hourDown.addEventListener("click", function() {
    hourBasic--;
    if (hourBasic < 0) {
        hour.innerHTML = "00";
        hourBasic = 0;
    } else if (hourBasic < 10) {
        hour.innerHTML = "0" + hourBasic;
    } else {
        hour.innerHTML = hourBasic;
    }
});

minuteUp.addEventListener("click", function() {
    minuteBasic++;
    if (minuteBasic < 10) {
        minute.innerHTML = "0" + minuteBasic;
    } else if (minuteBasic > 59) {
        minute.innerHTML = "59";
        minuteBasic = 59;
    } else {
        minute.innerHTML = minuteBasic;
    }
});

minuteDown.addEventListener("click", function() {
    minuteBasic--;
    if (minuteBasic < 0) {
        minute.innerHTML = "00";
        minuteBasic = 0;
    } else if (minuteBasic < 10) {
        minute.innerHTML = "0" + minuteBasic;
    } else {
        minute.innerHTML = minuteBasic;
    }
});

secondUp.addEventListener("click", function() {
    secondBasic++;
    if (secondBasic < 10) {
        second.innerHTML = "0" + secondBasic;
    } else if ( secondBasic > 59) {
        second.innerHTML = "59";
        secondBasic = 59;
    } else {
        second.innerHTML = secondBasic;
    }
});

secondDown.addEventListener("click", function() {
    secondBasic--;
    if (secondBasic < 0) {
        second.innerHTML = "00";
        secondBasic = 0;
    } else if (secondBasic < 10) {
        second.innerHTML = "0" + secondBasic;
    } else {
        second.innerHTML = secondBasic;
    }
});

/* Reset button */

resetBtn.addEventListener("click", function() {
    location.reload();
});

/* Start button */

startBtn.addEventListener("click", function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
    hourUp.disabled = true;
    hourDown.disabled = true;
    minuteUp.disabled = true;
    minuteDown.disabled = true;
    secondUp.disabled = true;
    secondDown.disabled = true;
});

/* Stop Button */

stopBtn.addEventListener("click", function() {
    clearInterval(interval);
    hourUp.disabled = false;
    hourDown.disabled = false;
    minuteUp.disabled = false;
    minuteDown.disabled = false;
    secondUp.disabled = false;
    secondDown.disabled = false;
});

/* Time machine */

function startTimer() {
    if (secondBasic === 0 && minuteBasic === 0 && hourBasic === 0) {
        clearInterval(interval);
        alert("Time is over");
        return;
    }

    if (secondBasic === 0) {
        if (minuteBasic === 0) {
            hourBasic--;
            minuteBasic = 59;
        } else {
            minuteBasic--;
        }
        secondBasic = 59;
    } else {
        secondBasic--;
    }

    second.innerHTML = (secondBasic < 10 ? "0" : "") + secondBasic;
    minute.innerHTML = (minuteBasic < 10 ? "0" : "") + minuteBasic;
    hour.innerHTML = (hourBasic < 10 ? "0" : "") + hourBasic;
}
