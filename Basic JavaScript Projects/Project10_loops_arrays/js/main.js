function Call_Loop() {
    var Digit = " ";
    var X = 1; // Establishes the initial variable of 1
    while (X < 11) { // If X is less than 11 the loop will executre
        Digit += "<br>" + X; // Each time the loop executes, a new page break and number is added
        X++ //The value of X is then incremented by 1
    } //The loop will check again if X is less than 11. Once X is 11, the loop will stop executing
    document.getElementById("Loop").innerHTML = Digit;
}     //after the loop completes, the total result will be printed to the display


// Established variables and array
var Animals = ["Raccoon", "Tiger", "Parrot", "Badger", "Elk", "Tuna"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Animals.length; Y++) { // Setting Y to 0 then comparing it to the number of entities in the Animals array
        Content += Animals[Y] + "<br>";    // If Y is less than the length, then it adds the animal in the current Y position
    }                                      // then returns to the top of the loop and repeats.
    document.getElementById("AnimalList").innerHTML = Content;
}                                           // Once the loop has completed, the end result is printed to the display

// Established array

var thelist = ["Greece", "Japan", "Pompeii", "Egypt"]

function getarray() {
    document.getElementById("Array").innerHTML = thelist[2];
} // Displays position 2 from thelist array, ie Pompeii


function getconstant(){ // Established the constant object Painting and added property values
    const Painting = {title: "Mona Lisa", artist: "Leonardo Da Vinci", year: "1507"}
    Painting.year = "1503";
    Painting.insurance = "$1 Billion"
    document.getElementById("Constant").innerHTML = "The " + Painting.title + " was painted by " + Painting.artist + " in " + Painting.year + ".";
}

// let vs var: Both establish variables, but let cannot be used outside of a block it is in
// not tied to a <p> element so it displays where the script begins in the HTML code

var X = 12
document.write(X);
{
    let X = 6
    document.write("<br>" + X);
}
document.write("<br>" + X); // Displays 12 as 6 is the value within the block code

// Return function. Halts process and returns a  value

function doAlert() {
    window.alert("This has been returned");
}

function returnfunction() {
    return doAlert();
}

// Established an object with properties and a method

let bird = {
    Name: "Parrot",
    Color: "Green",
    Region: "Africa",
    description : function() {
        return "This bird is a " + this.Color + " " + this.Name + " from " + this.Region;
    }   // Puts the string together and returns it
};

document.getElementById("Bird_Object").innerHTML = bird.description();
// Displays the returned value

// Break Statement
text1 = "";

for (let x = 0; x < 10; x++) { // Runs the loop each time X is less that 10
    if (x == 4) {break; } // Ends the loop once X is equal to 4, despite still being less than 10
    text1 += "The number is " + x + "<br>"; // For each loop, adds 
}

document.getElementById("Break").innerHTML = text1;

// Continue Statment
text2 = "";

for (let x = 0; x < 10; x++) { // Runs the loop each time X is less that 10
    if (x === 3) {continue} // Skips the loop that would print "The number is 3"
    text2 += "The number is " + x + "<br>";
}

document.getElementById("Continue").innerHTML = text2;