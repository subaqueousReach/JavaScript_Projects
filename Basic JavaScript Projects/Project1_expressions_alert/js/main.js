//I've put <br> pagebreaks within the statements to display the results
//in a more readable manner when index.html is opened

// A concatenated statement printed to the main window using document.write()
document.write("Hello World!" + " What a wonderful experience to have!" + "<br>");

// Assigning a variable that has an apostrophe in it. \ escapes the text and allows \, ", and ' to be displayed
var A = "this is a string. It\'s not very complex";

// Displays a prompt window before the rest of the window loads
window.alert(A);

// A concatenated string
var B = "Concatenated" + "String" +"<br>";

document.write(B);

// Setting multiple variables at once
var first = "Rhys", second = "Dylan", third = "Kyle";

document.write(first + " is the oldest brother." + "<br>");

// Below is an expression within a statement. 
// The expression "2+2" is completed then displayed utilizing the statement "document.write()"
document.write(2+2 + "<br>");
// An expression results in a variable while a statement performs a task

// Below is a pair of variables concatenated together in a statement
var Sent1="This is the beginning of the string", Sent2=" and this is the end of the string.";

document.write(Sent1 + Sent2);