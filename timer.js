let milliseconds = document.getElementById('milliseconds');
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hours');

let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let interval;

resetBtn.addEventListener("click", function() {
    milliseconds.innerHTML = "00"
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
    clearInterval(interval);
});

startBtn.addEventListener("click", function() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function() {
    clearInterval(interval);
});

function startTimer() {
    let mls = parseInt(milliseconds.innerHTML);
    let sec = parseInt(seconds.innerHTML);
    let min = parseInt(minutes.innerHTML);
    let hrs = parseInt(hours.innerHTML);

    mls++;
    if (mls == 99) {
        mls = 0;
        sec++;
        if (sec == 59) {
            sec = 0;
            min++;
            if (min == 59) {
                min = 0;
                hrs++;
            }
        }
    }
    milliseconds.innerHTML = (mls < 10 ? "0" : "") + mls;
    minutes.innerHTML = (min < 10 ? "0" : "") + min;
    hours.innerHTML = (hrs < 10 ? "0" : "") + hrs;
    seconds.innerHTML = (sec < 10 ? "0" : "") + sec;
}