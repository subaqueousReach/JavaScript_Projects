function displayType(protagonist){
    var protagonistShow = protagonist.getAttribute("data-protagonist");
    // Establishes a new variable that pulls the data attribute specified in the html
    alert(protagonistShow + " is the protagonist of " + protagonist.innerHTML);
    // prompts an alert with a string created from the data attribute
}