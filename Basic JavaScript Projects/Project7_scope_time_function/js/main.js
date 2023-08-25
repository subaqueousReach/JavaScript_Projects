
// Global Variables
x = 12
y = 0

// Prints 18 as x = 12 so 12 + 6 = 18
function alpha(){
    val1 = x + 6;
    document.getElementById("Display").innerHTML = val1;
}

// The beta function does not work as y has 
// not been defined yet.
// However, if you click on the delta button
// y is assigned the value of 6 and the beta
// function will now work properly.
function beta() {
    val2 = x + y;
    document.getElementById("Display2").innerHTML = val2;
}

function delta() {
    y = 6; // Local variable
    val3 = x + y;
    document.getElementById("Display3").innerHTML = val3;
}

// function with an if statement that utilizes 
// the Date().getHours() method.
// If it is before 6pm, it will print 
// "How are you doing today?"
// If it is 6pm or later, it will print 
// "How are you doing this evening?"

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you doing today?";
    }
    if (new Date().getHours() >= 18) {
        document.getElementById("greeting").innerHTML = "How are you doing this evening?";
    }
}

// function with an if and else statement
// If you haven't clicked the Delta button
// on the webpage, it will tell you that you
// haven't found it yet and to refresh the page
function whereissix() {
    if (y == 6) {
        document.getElementById("six").innerHTML = "You found it! Good Job!";
     }
    else {
        document.getElementById("six").innerHTML = "Sorry, you haven't found it. Refresh the page and try again.";
    }
}

// function with an if and else statement
// that requires user input
// if you enter any variation of raccoon
// it tells you that you guessed correctly

function fav_animal() {
    animal = document.getElementById("user").value.toLowerCase();
    if (animal == "raccoon") {
        blorp = "That's right! Good guess!";
    }
    else {
        blorp = "That's not correct, sorry...";
    }
    document.getElementById("answer").innerHTML = blorp;
}

// Time display function with an if, if/else, 
// and else statement

function time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time...";
    }
    document.getElementById("time_of_day").innerHTML = Reply;
}