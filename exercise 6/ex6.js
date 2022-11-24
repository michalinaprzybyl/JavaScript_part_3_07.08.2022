// Ćwiczenie 6: Sprawdź czy podane przez użytkownika słowo jest palindromem.

let text = prompt("Enter a word and find out if it is a palindrome");
let reversedText = "";

for (let i = text.length - 1; i >= 0; i--) {
    reversedText = reversedText + text[i];
}

console.log(text);
console.log(reversedText);
console.log(text === reversedText);
