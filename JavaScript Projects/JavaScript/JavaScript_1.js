// function with a Switch statement
function Animal_Function() {
    var Animal_Output; // Establishing variables
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a pretty cool animal!";
    switch(Animals) {                      // Switch statement checks the input value against each keyword. 
        case "Raccoon": // Raccoon Keyword // If there is not a match then the default statement is printed.
            Animal_Output = "A raccoon" + Animal_String;
        break;
        case "Tiger":// Tiger Keyword
            Animal_Output = "A tiger" + Animal_String;
        break;
        case "Badger":// Badger Keyword
            Animal_Output = "A badger" + Animal_String;
        break;
        case "Gazelle":// Gazelle Keyword
            Animal_Output = "A gazelle" + Animal_String;
        break;
        case "Parrot":// Parrot Keyword
            Animal_Output = "A parrot" + Animal_String;
        break;
        case "Hyena":// Hyena Keyword
            Animal_Output = "A hyena" + Animal_String;
        break;
        default: Animal_Output = "Please enter an animal exactly as written on the above list.";
    }   // default statement
    document.getElementById("Output").innerHTML = Animal_Output;
}


// function with .getElementByClassName

function changeClass(){
    var A = document.getElementsByClassName("Click"); // Sets a variable that affects all items with class Click
    A[0].innerHTML = "You're a Wizard now!" //[0] indicates that only the first element in the list of Click items is changed
}

// Canvas

/// Establishing the canvas as a 2D object to be drawn on
const c = document.getElementById("myCanvas"); // Creates a variable within the Canvas
const ctx = c.getContext("2d"); // Creates a variable that established c as 2d object

/// Setting the Background Color Gradient
const grd = ctx.createLinearGradient(0,0,360,0);
grd.addColorStop(0, "green"); //Start of gradient will be green
grd.addColorStop(1, "grey"); //End of gradient will be grey

/// Drawing a filled rectangle with the gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0,500,250); //X/Y Position, Width, Height

//// Drawing a Circle within the canvas
ctx.beginPath(); // Creates the starting point of the shape|.arc draws the path in a curve
ctx.arc(50, 50, 40, 0, 2 * Math.PI);// Determines the path the of the shape
ctx.stroke();//Draws the path specified
// .arc(x, y, r, sA, eA)
// x = X-position of circle's center
// y = Y-position of circle's center
// r = Radius of the circle
// sA = The starting angle of the circle
// eA = The ending angle of the circle