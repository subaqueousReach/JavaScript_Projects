// Ternary operators assign a value to a variable based on specified conditions
// If the height entered is below 52, then "You are too short" will be returned
// If the height entered is 52 or greater, then "You are tall enough" will be returned

function ride_function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride= (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function age_check() {
    var age, can_vote;
    age = document.getElementById("Age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Check").innerHTML = can_vote + " to vote.";
}

// Constructor Function

function Bird(Name, Species, Color, Region) {
    this.Bird_Name = Name;
    this.Bird_Species = Species;
    this.Bird_Color = Color;
    this.Bird_Region = Region;
}

var Leslie = new Bird("Leslie", "Parrot", "Red", "Africa");
var Reginald = new Bird("Reginald", "Pelican", "White", "North America");
var Steve = new Bird("Steve", "Pigeon", "Grey", "Global");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = Leslie.Bird_Name + " is a " + Leslie.Bird_Color + " colored " + Leslie.Bird_Species + " from " + Leslie.Bird_Region + ".";
}


// Below is a nested function.
// Plus_One() is nested within Count()
// Count() is nested within count_Function()
function count_Function() {
    document.getElementById("Nested_Function").innerHTML=Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}