function My_First_Function() {
    var secret = "Unfortunately we\'re out of secrets right now. Try again later!";
    document.getElementById("Button_Text").innerHTML = secret;
}

// Creates a function called "My_First_Function" with no parameters **(the brackets contain parameters).
// Then targets the <p> element with the id "Button_Text"
// When the button created in the HTML is clicked, it will replace
// the message in the <p> element with the "secret" string

//innerHTML changes the content of an html element

function My_Second_Function() {
    var sentence = "Sorry, but we still don't";
    sentence += " have any secrets right now.";
    document.getElementById("concatenate").innerHTML = sentence;
}

// The += operator concatenates (or adds) the new portion 
// of the sentence to the end of the "sentence" variable.
