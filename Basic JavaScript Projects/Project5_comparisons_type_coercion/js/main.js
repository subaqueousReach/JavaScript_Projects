// typeof Operators gives the data type of the specified variable.

// + "<br><br>" is just utilized to better space the examples on
// the webpage and is not necessary for the operators to function

document.write((typeof "Word") + "<br><br>"); //prints string

document.write((typeof 3) + "<br><br>"); //prints number

document.write("10" + 5 + "<br><br>"); //prints 105, with 5 being changed into a string type

document.write((typeof Math) + "<br><br>"); //prints object

function do_math(){ // prints 55, changing the A variable into a string from a number
    A = 5;          // and then concatanates them
    B = "5";
    Val = A + B;
    document.getElementById("add").innerHTML = Val;
}

function my_nan1(){ //returns true
    document.getElementById("nan1").innerHTML = isNaN('This string');
}

function my_nan2(){ //returns false
    document.getElementById("nan2").innerHTML = isNaN(305);
}

document.write(2E310 + "<br><br>"); // prints Infinity

document.write(-3E310 + "<br><br>"); // printers -Infinity

document.write((12 > 6) + "<br><br>"); // Prints true

document.write((6 > 12) + "<br><br>"); // Prints false

console.log(12 + 6); // Prints 18 in the browser's console

console.log(12 < 6); // Prints false in the browser's console

// == performs a comparison and type coercion is necessary
// === performs a comparison, but also checks if the variables are the same data type or not

document.write((12 == 12) + "<br><br>"); // Prints true

document.write((12 == 6) + "<br><br>") // Prints false

document.write((12 === 12) + "<br><br>"); // Prints true

document.write(('12' === 6) + "<br><br>") // Prints false

document.write(('12' === '12') + "<br><br>"); // Prints true

document.write((12 === 6) + "<br><br>"); // Prints false

// Logical Operators are AND, OR and NOT, written as &&, ||, and !

document.write((12 > 6 && 8 > 4) + "<br><br>"); // Prints true as both results are true

document.write((12 > 6 && 8 > 4) + "<br><br>"); // Prints false as only one result is true

document.write((12 > 6 || 6 > 12) + "<br><br>"); // Prints true as one result is true

document.write((6 > 12 || 4 > 8) + "<br><br>"); // Prints false as neither result is true

document.write((12 !== 6) + "<br><br>"); // Prints true as 12 does not equal 6

document.write((12 !== 12) + "<br><br>"); // Prints false as 12 does equal 12

function not1 () {
    document.getElementById("Not1").innerHTML = ! (12 < 6); // Prints true as 12 is not less than 6
}

function not2 () {
    document.getElementById("Not2").innerHTML = ! (12 > 6); // Prints false as 12 is greater than 6
}