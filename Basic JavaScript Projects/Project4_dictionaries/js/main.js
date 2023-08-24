function my_dictionary() {
    var Car = {
        Model: "Camaro",
        Class: "Coupe",
        Color: "Silver",
        Engine: "3.6-liter V6",
        Year: 2014,
    };
    delete Car.Model;
    document.getElementById("Dictionary").innerHTML = Car.Model;
}