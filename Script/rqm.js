/* Quotes Array */

const quotes = [
    "It always seems impossible until it\’s done.",
    "Winners never quit, and quitters never win.",
    "No one has the power to shatter your dreams unless you give it to them.",
    "We all can dance when we find music that we love.",
    "Believe you can and you're halfway there.",
    "If you run, you might lose. If you don’t run, you’re guaranteed to lose.",
    "You must do the things you think you cannot do.",
    "It does not matter how slowly you go as long as you do not stop.",
    "You are never too old to set another goal or to dream a new dream.",
    "Your victory is right around the corner. Never give up.",
]

/* Authors Array */

const authors = [
    "\"Nelson Mandela\"",
    "\"Vince Lombardi\"",
    "\"Maeve Grayson\"",
    "\"Giles Andreae\"",
    "\"Theodore Roosevelt\"",
    "\"Jesse Jackson\"",
    "\"Eleanor Roosevelt\"",
    "\"Confucius\"",
    "\"C.S. Lewis\"",
    "\"Nicki Minaj\""
]

/* Images Array */

const images = [
    "url(Style/images/1.jpg)",
    "url(Style/images/2.jpg)",
    "url(Style/images/3.jpg)",
    "url(Style/images/4.jpg)",
    "url(Style/images/5.jpg)",
    "url(Style/images/6.jpg)",
    "url(Style/images/7.jpg)",
    "url(Style/images/8.jpg)",
    "url(Style/images/9.jpg)",
    "url(Style/images/10.jpg)"
]

/* Button Variables */

let button = document.querySelector(".button");
let text = document.querySelector(".quotes");
let author = document.querySelector(".author")
let body = document.querySelector("body");

/* Machine button */

button.addEventListener("click", function() {
    var randomNumber =  Math.floor(Math.random() * 10);
    text.innerHTML = quotes[randomNumber];
    author.innerHTML = authors[randomNumber];
    body.style.backgroundImage = images[randomNumber];
})