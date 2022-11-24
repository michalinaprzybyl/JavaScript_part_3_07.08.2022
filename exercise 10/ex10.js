// Ćwiczenie 10: Napisz funkcję, która będzie sprawdzać czy liczba jest parzysta.

// 1st method
function isEven(arg) {
    let value = arg % 2 === 0;
    return value;
}

let number = parseInt(prompt("Enter any number"));

if (isEven(number) === false) {
    console.log("This number is not even");
} else {
    console.log("This number is even");
}

// 2nd method
let number2 = parseInt(prompt("Enter any number"));

function isEven2(arg) {
    if (arg % 2 === 0) {
        return "This number is even";
    } else {
        return "This number is not even";
    }
}

console.log(isEven2(number2));