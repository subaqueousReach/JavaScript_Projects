let slideIndex = 1;
showSlides(slideIndex);

// Next/Prev buttons
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail Controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
} // Not having a space in front of active caused the dots to
// disappear when cycling through images. Need to look more into
// why that was causing the issue


// Timer Function
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); // program pauses for 1000ms (ie 1 second)
        if (seconds == -1) { // When the timer counts down below 0, the alert goes off
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}
