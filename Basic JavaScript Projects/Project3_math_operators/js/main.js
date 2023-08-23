// Below is a window alert that will display a random number between 1 and 100

window.alert(Math.random() * 100);

// Below are a math object and a math method

document.write("PI is" + Math.PI + "<br><br>");

document.write("If we were to round it up, it would become " + Math.ceil(Math.PI) + "<br><br>")

// Each function below is a different math operator

function addition() {
    var math = 12 + 6;
    document.getElementById("Math1").innerHTML = "12 plus 6 equals " + math;
}

function subtraction() {
    var math = 12 - 6;
    document.getElementById("Math2").innerHTML = "12 minus 6 equals " + math;
}

function multiplication() {
    var math = 12 * 6;
    document.getElementById("Math3").innerHTML = "12 times 6 equals " + math;
}

function division() {
    var math = 12 / 6;
    document.getElementById("Math4").innerHTML = "12 divided 6 equals " + math;
}

function bigmath() {
    var math = (12 + 6) * 12 / 6 - 12;
    document.getElementById("Math5").innerHTML = "12 plus 6, times 12, divided by 6 and minus 12 equals " + math;
}


// Below is a Modulus operation that gives the remainder of a division
function remainder() {
    var math = 12 % 6;
    document.getElementById("Math6").innerHTML = "The remainder of 12 divided by 6 is " + math;
}

// Below is a Unary Operation, in that it only has 1 operand
function negation() {
    var math = 10;
    document.getElementById("Math7").innerHTML = "When you negate 10, it becomes " + -math;
}

// Below are increment and decrement functions
// the math variable requires brackets in the last line of code

function increment() {
    var math = 12;
    math++;
    document.getElementById("Math8").innerHTML = "Raising 12 by an increment of 1, it becomes " + (math);
}

function decrement() {
    var math = 12;
    math--;
    document.getElementById("Math9").innerHTML = "Lowering 12 by a decrement of 1, it becomes " + (math);
}