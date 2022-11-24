// Ćwiczenie 3: Napisz program, który wyznaczy sumę liczb od 0 do wskazanej przez użytkownika liczby.

let number = parseInt(prompt("Enter any number"));
let sum = 0;

for (let i = 0; i <= number; i++) {
    sum = sum + i;
}

console.log(sum);