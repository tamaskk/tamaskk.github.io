// Navigation bar if the width of the screen is less then 610px

var navToggle = document.getElementById('nav-toggle');
var nav = document.querySelector('nav');
var navClose = document.getElementById('nav-close');
var li = document.querySelector('li');

navToggle.addEventListener('click', function() {
    nav.classList.toggle('show');
});

navClose.addEventListener('click', function() {
    nav.classList.remove('show');
})

li.addEventListener('click', function() {
    nav.classList.remove('show');
})

// Invisible Projects Display 

let showMoreBtn = document.querySelector('.show-more');
let showLessBtn = document.querySelector('.show-less');

let showMoreDiv = document.querySelector('.show-more-div');
let showLessDiv = document.querySelector('.show-less-div')

let moreDiv = document.querySelector('.hidden-project-container');

//Appear the section

showMoreBtn.addEventListener("click", function() {
        moreDiv.style.display = "flex";
        showLessDiv.style.display = "flex";
        showMoreDiv.style.display = "none";
});

//Disappear the section

showLessBtn.addEventListener("click", function() {
    moreDiv.style.display = "none";
    showMoreDiv.style.display = "flex";
    showLessDiv.style.display = "none";
});
