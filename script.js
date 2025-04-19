//slideshow tutorial: https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
let slides = document.getElementsByClassName("slides");

document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});

function plusSlide(n) {
    if (slideIndex === slides.length) { // when heaven or hell is clicked on the last slide, unlock more text and hide the judge buttons
        var text = document.getElementById("day1text")
        text.style.display = "inline";
        setTimeout(() => text.classList.add("visible"), 50);
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
        setTimeout(() => moretext.classList.add("visible"), 50);
        choice1.parentElement.remove();
        choice2.parentElement.remove();
    } else {
        moretext.style.display = "none";
    }
}

function day1choice2function() {
    var moretext = document.getElementById("day1choice2text");
    var choice1 = document.getElementById("day1choice1btn");
    var choice2 = document.getElementById("day1choice2btn");
    if (getComputedStyle(moretext).display === "none") {
        moretext.style.display = "inline";
        setTimeout(() => moretext.classList.add("visible"), 50);
        choice1.parentElement.remove();
        choice2.parentElement.remove();
    } else {
        moretext.style.display = "none";
    }
}

// tutorial for slide animation: https://youtu.be/nDPsLFPzVEA?si=QrytVYfE3mZ9FvV_
document.addEventListener("DOMContentLoaded", function () {
    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });
    var slideText = document.querySelector('.slide-text');
    if (slideText) {
        observer.observe(slideText);
    }
});

// scroll down when clicking on title screen: https://amitd.co/code/javascript/scroll-into-view-with-offset?
document.addEventListener("DOMContentLoaded", function () {
    var titleContainer = document.querySelector('.titlecontainer');
    var game = document.getElementById('start-game');

    titleContainer.addEventListener('click', function () {
        var offset = 100; // offset of the scroll
        var gamePosition = game.getBoundingClientRect().top;
        var offsetPosition = gamePosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});


// reveals next line of text when tapping on screen
var currentLine = 0;

document.addEventListener("DOMContentLoaded", function () {
    nextLine(); // Show the first line when page loads
});

function nextLine() {
    var lines = document.querySelectorAll(".endtext");
    var button = document.getElementById("endBtn");
    var hint = document.getElementById("hint");

    if (hint) {
        hint.style.opacity = "0";
        hint.style.transition = "opacity 0.3s ease";
        setTimeout(() => {
            hint.style.visibility = "hidden";
        }, 300);
    }
    if (currentLine < lines.length) {
        lines[currentLine].classList.add("visible");
        currentLine++;
    } else {
        button.style.display = "block";
        hint.style.display = "none";
    }
}



