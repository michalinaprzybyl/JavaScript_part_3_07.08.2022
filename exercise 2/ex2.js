// Ćwiczenie 2: Napisz program, który obliczy silnię dla podanej liczby.

let number = parseInt(prompt("Enter any number"));
let factorial = 1;

if (number === 0) {
    console.log(factorial);
} else {
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;  // ostatni factorial, który nmieliśmy * i
    }
}

console.log(factorial);