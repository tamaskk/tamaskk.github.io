var alma =  Math.floor(Math.random() * 10);

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

const colors = [
    "#F08080",
    "#FF6347",
    "#FF8C00",
    "#7CFC00",
    "#20B2AA",
    "#1E90FF",
    "#F4A460",
    "#800000",
    "#7B68EE",
    "#808000"
]

let button = document.querySelector(".button");
let text = document.querySelector(".quotes");
let author = document.querySelector(".author")
let body = document.querySelector("body");

button.addEventListener("click", function() {
    var alma =  Math.floor(Math.random() * 10);
    text.innerHTML = quotes[alma];
    author.innerHTML = authors[alma];
    body.style.backgroundColor = colors[alma];
})