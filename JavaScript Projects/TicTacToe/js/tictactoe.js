// Variable to keep track of player turn
let activePlayer = 'X';

//This array stores an array of moves. We use this to determine win condition
let selectedSquares = [];

//This function is for placing an x or o in a square
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves teh HTML element id that was selected
        let select = document.getElementById(squareNumber);
        // This condition checks whose turn it is
        if (activePlayer === 'X') {
            // if active player is equal to X then an X is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be 'X' or 'O', so if not X, must be O
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);

        //This calls a function to check for a winner
        checkWinConditions();

        //This condition is for changing the active player
        if (activePlayer === 'X') {
            //If the active player is X, then change it to O
            activePlayer = 'O';
        } else {
            //If the active player is anything but X, change it to X
            activePlayer = 'X';
        }

        //This funciton plays the placement sound
        audio('./media/place.mp3');

        //This condition checks to see if its the computers turn
        if (activePlayer === 'O') {
            //This function disables clicking for the computers turn
            disableClick();
            //This function waits 1 second before the computer places an image and enables click
            setTimeout(function() {computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() funciton to work
        return true;
    }

    //This funciton results in a random square being selected by the computer
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    };
};

//This function parses the selectedSquares array to search for win conditions
//drawLine() function is called to draw a line on the screen if the condition is met
function checkWinConditions() {
    //Each statement is a separate win condition that is checked
    if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100) }
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50,304,558,304) }
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50,508,558,508) }
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100,50,100,558) }
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304,50,304,558) }
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508,50,508,558) }
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100,508,510,90) }
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100,100,520,520) }
    else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50,100,558,100) }
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50,304,558,304) }
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508,558,508) }
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100,50,100,558) }
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304,50,304,558) }
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508,50,508,558) }
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100,508,510,90) }
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100,100,520,520) }
    // If all squares are filled and none of the condiitons above are met
    // the game ends in a tie and resets
    else if (selectedSquares.length >= 9) {
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame(); }, 500);
    }

    //This functions checks if any array includes 3 strings and is used to check the win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variable will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables are all included then true is returned
        //and the else if condition executes the drawLine() function
        if (a === true && b === true && c === true) {return true; }
    }
}

//This function makes our body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    //This makes our element clickable again after 1 second
    setTimeout(function () {body.style.pointerEvents = 'auto'}, 1000);
}

//This function takes a string parameter of the path set
function audio(audioURL) {
    //Creates a new audio object and passes the path as the parameter
    let audio = new Audio(audioURL);
    //Play method plays the audio sound
    audio.play();
}

//This function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines'); //Access HTML canvas
    const c = canvas.getContext('2d'); //Gives us the method and properties to use on the canvas
    let x1 = coordX1, //Indicates the start of the x axis for the line
    y1 = coordY1, //Indicates teh start of the y axis for the line
    x2 = coordX2, //Indicates the end of the x axis for the line
    y2 = coordY2, //Indicates teh end of the y axis for the line
    x = x1, //Stores x axis data that's updated in our animation loop
    y = y1; //Stores y axis data that's updated in our animation loop

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);//This variable creates a loop
        c.clearRect(0,0,608,608); // This method clears the content from the last iteration of the loop
        c.beginPath(); // This starts a new path
        c.moveTo(x1,y1); // This moves the path to the starting point of the line
        c.lineTo(x, y); // This indicates the end point of the line
        c.lineWidth = 10; // This sets the thickness of our line
        c.strokeStyle = 'rgba(70,255,33,.8)'; //This sets the color of our line
        c.stroke(); // This method draws everything according to our specifications

        if (x1 <= x2 && y1 <= y2) { // This condition checks if we've reached the endpoint
            if (x < x2) { x += 10; } // This adds 10 to the previous x end point
            if (y > y2) { y += 10; } // This adds 10 to the previous y end point
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); } //This ends the animation loop
        } // This last condition and the like one below are necessary for the 6, 4, 2 win condition

        if (x1 <= x2 && y1 >= y2) { // This condition is similar to the one above
            if (x < x2) { x += 10; } // This adds 10 to the previous x end point
            if (y > y2) { y -= 10; } // This subtracts 10 from the previous y end point
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); } //This ends the animation loop
        } 
    }

    //This function clears our canvaas after our win line is drawn
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0,0,608,608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick(); //This line disallows clicking while the win audio plays
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () {clear(); resetGame(); }, 1000);

}

function resetGame() { //This function resets teh game in the event of a tie or a win
    for (let i = 0; i < 9; i++) { //loop iterates through each square element
        let square = document.getElementById(String(i)); //gets the HTML element i
        square.style.backgroundImage = ""; //remoges our elements background image
    }
    selectedSquares = []; //resets the array so it is empty when we start over
}