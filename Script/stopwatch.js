/* Outputs */

let millisecond = document.querySelector('.millisecond');
let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let hour = document.querySelector('.hour');

/* Buttons */

let start = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let reset = document.querySelector('.reset');

/* Counters */

let millisecondBasic = 0;
let secondBasic = 0;
let minuteBasic = 0;
let hourBasic = 0;

/* Interval */

let interval;

/* Reset button */

reset.addEventListener("click", function() {
    millisecondBasic = 0;
    secondBasic = 0;
    minuteBasic = 0;
    hourBasic = 0;

    millisecond.innerHTML = "00";
    second.innerHTML = "00";
    minute.innerHTML = "00";
    hour.innerHTML = "00";
    clearInterval(interval);
});

/* Start button */

start.addEventListener("click", function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

/* Stop button */

stopBtn.addEventListener("click", function() {
    clearInterval(interval);
});

/* Time machine */

function startTimer() {
    millisecondBasic++
        if (millisecondBasic == 99) {
            secondBasic++;
            millisecondBasic = 0;
            if (secondBasic == 59) {
                minuteBasic++;
                secondBasic = 0;
                if (minuteBasic == 59) {
                    hourBasic++;
                    minuteBasic = 0;
                }
            }
        }
    millisecond.innerHTML = (millisecondBasic < 10 ? "0" : "") + millisecondBasic;
    second.innerHTML = (secondBasic < 10 ? "0" : "") + secondBasic;
    minute.innerHTML = (minuteBasic < 10 ? "0" : "") + minuteBasic;
    hour.innerHTML = (hourBasic < 10 ? "0" : "") + hourBasic;
}