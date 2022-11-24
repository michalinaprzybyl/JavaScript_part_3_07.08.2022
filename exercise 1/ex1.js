// Ćwiczenie 1: Napisz program, który wyznaczy NWD (największy wspólny dzielnik = greatest common divisor) dwóch liczb.

let firstNumber = parseInt(prompt("Enter first number"));
let secondNumber = parseInt(prompt("Enter second number"));
let gcd = 1;
let smallerNumber = 0;

if (firstNumber < secondNumber) {
    smallerNumber = firstNumber;
} else {
    smallerNumber = secondNumber;
}

for (let i = 1; i <= smallerNumber; i++) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
        gcd = i;
    }
}

console.log(gcd);