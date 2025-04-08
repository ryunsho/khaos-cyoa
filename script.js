//slideshow tutorial: https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
let slides = document.getElementsByClassName("slides");

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function plusSlide(n) {
    if (slideIndex === slides.length) { // when heaven or hell is clicked on the last slide, unlock more text and hide the judge buttons
        document.getElementById("day1text").style.display = "inline";
        document.querySelectorAll(".judge").forEach(btn => btn.style.display = "none");
        document.getElementById("placeholder").style.display = "block";
        return;
    }
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let dots = document.getElementsByClassName("dot");
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function day1choice1function() {
    var moretext = document.getElementById("day1choice1text");
    var choice1 = document.getElementById("day1choice1btn");
    var choice2 = document.getElementById("day1choice2btn");
    if (getComputedStyle(moretext).display === "none") {
        moretext.style.display = "inline";
        // choice1.style.display = "none";
        // choice2.style.display = "none";
        choice1.parentElement.remove();
        choice2.parentElement.remove();
    } else {
        moretext.style.display = "none";
    }
}


// function day1choice1() {
//     var choice1 = select("#day1choice1text");
//     var choice2 = select("#day1choice2text");
//     var day1input1 = select("#day1input1");
//     if (day1input1.value() === "1") {
//         choice1.style.display = "inline";
//     }else if (day1input1.value() === "2") {
//         choice2.style.display = "inline";
//     }else{
//         alert("Type 1 or 2 into the input box to make a choice.");
//     }
// }