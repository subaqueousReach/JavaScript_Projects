function validateUser() {
    let x = document.forms["myForm"]["uName"].value;
    if (x == "") {
        alert("Please enter your username");
        return false;
    }
}

function validatePass() {
    let y = document.forms["myForm"]["Pass"].value;
    if (y == "") {
        alert("Please enter your password");
        return false;
    }
}