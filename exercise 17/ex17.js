// Ćwiczenie 17: Napisz program z wykorzystaniem metod, który na podstawie wyboru użytkownika, pobiera dane potrzebne do wykonania obliczeń i wykonuje je. Obliczenia to pole kwadratu, prostokąta i koła.

function square() {
    let a = parseFloat(prompt("Enter bok"));
    return a * a;
}

function rectangle() {
    let a = parseFloat(prompt("Enter first bok"));
    let b = parseFloat(prompt("Enter second bok"));
    return a * b;
}

function circle() {
    let r = parseFloat(prompt("Enter promień koła"));
    return Math.PI * r * r;
}

let choice = prompt("Enter number or name of the figure: 1. square, 2. rectangle, 3. circle");

switch (choice) {
    case "1":
    case "square":
        console.log(square());
        break;
    case "2":
    case "rectangle":
        console.log(rectangle());
        break;
    case "3":
    case "circle":
        console.log(circle());
        break;
    default:
        console.log("I don't understand");
        break;
}
