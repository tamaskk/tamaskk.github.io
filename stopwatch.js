
let hoursBasic = 00;
let minutesBasic = 00;
let secondsBasic = 00;

let hours = prompt("Hours:");
let minutes = prompt("Minutes:");
let seconds = prompt("Seconds");

let hoursText = document.getElementById('hours');
let minutesText = document.getElementById('minutes');
let secondsText = document.getElementById('seconds');

let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

var interval;

if (hours.length === 1) {
    hoursText.innerHTML = 0 + hours;
} else if (hours.length === 0) {
    hoursText.innerHTML = hoursBasic;
} else {
    hoursText.innerHTML = hours;
}

if (minutes.length === 1) {
    minutesText.innerHTML = 0 + minutes;
} else if (minutes.length === 0) {
    minutesText.innerHTML = minutesBasic;
} else {
    minutesText.innerHTML = minutes;
}

if (minutes >= 60) {
    alert("Write number which is less then 60");
    hoursText.innerHTML = 00;
    minutesText.innerHTML = 00;
    secondsText.innerHTML = 00;
}

if (seconds.length === 1) {
    secondsText.innerHTML = 0 + seconds;
} else if (seconds.length === 0) {
    secondsText.innerHTML = secondsBasic;
} else {
    secondsText.innerHTML = seconds;
}


if (seconds >= 60) {
    alert("Write number which is less then 60");
    hoursText.innerHTML = 00;
    minutesText.innerHTML = 00;
    secondsText.innerHTML = 00;
}

resetBtn.addEventListener("click", function() {
    seconds.innerHTML = secondsBasic;
    minutes.innerHTML = minutesBasic;
    hours.innerHTML = hoursBasic;
    clearInterval(interval);
});

startBtn.addEventListener("click", function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
});

stopBtn.addEventListener("click", function() {
    clearInterval(interval);
});

function startTimer() {
seconds = parseInt(seconds);
minutes = parseInt(minutes);
hours = parseInt(hours);

console.log(hours, minutes, seconds)

seconds--;
    if (seconds == 0) {
        seconds = 59;
            if (minutes == 0) {
                minutes = 59;
                    hours--;
                        } else {
                            minutes--;
                        }
}

hoursText.innerHTML = (hours < 10 ? "0" : "") + hours
minutesText.innerHTML = (minutes < 10 ? "0" : "") + minutes;
secondsText.innerHTML = (seconds < 10 ? "0" : "") + seconds
}