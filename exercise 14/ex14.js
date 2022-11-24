// Ćwiczenie 14: Napisz funkcję, która będzie przyjmować dwie liczby od użytkownika i zwracać ich sumę.

function sum(firstNo, secondNo) {
    let number = firstNo + secondNo;
    return number;
}

let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));


let x = sum(a, b);
console.log(x);
