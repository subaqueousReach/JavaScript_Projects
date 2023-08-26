// .concat() method concatenates each identified 
// fragment to make a whole sentence

function makesentence() {
    var fir = "What a "
    var sec = "wonderful little "
    var thi = "sentence I've made."
    var wholesentence = fir.concat(sec,thi);
    document.getElementById("Concatenate").innerHTML = wholesentence;
}

// .slice() method extracts a section of a string and
// returns it as a new string

function pullword() {
    var sentence = "What a wonderful little sentence I've made.";
    var section = sentence.slice(7,16)
    document.getElementById("Slice").innerHTML = section;
}

// utilizing .toUpperCase() to capitalize everything in the string

function enlarge() {
    var word = document.getElementById("upcase").innerHTML.toUpperCase();
    document.getElementById("upcase").innerHTML = word;
}

// utilizing .search() to find a value within the string 
// and return the position of the first match

function finder() {
    var phrase = "There is no such thing as a free meal."
    position = phrase.search("thing");
    document.getElementById("locate").innerHTML = position;
}

// utilizing .toString() to change a number variable into a string variable

function makestring() {
    var x = 12;
    document.getElementById("number").innerHTML = (x.toString()) + ", but it's a string now";
}

// utilizing .toPrecision() to specify the length of the number

function precise() {
    var x = 12.67291039;
    document.getElementById("accurate").innerHTML = x.toPrecision(5);
}

// utilizing .toFixed to convert a number to a string and round 
// it to the specified decimal point

function fixer() {
    var x = 6.1229
    document.getElementById("repaired").innerHTML = x.toFixed(2);
}

// utilizing .valueOf() to return the primitive value of the
// specified string

function valued() {
    var X = "Another String";
    document.getElementById("findvalue").innerHTML = X.valueOf();
}