// Ćwiczenie 5: Pobierz od użytkownika 5 słów, a następnie wyświetl losowe 5 liter z tych podanych.

// 1st method
let words = ""; // zmienna, w której będę konkatenować kolejne słowa

for (let i = 0; i < 5; i++) {
    let word = prompt("Enter any word");
    words = words + word;
}

let randomCharacter1 = ""; // przechowalnia dla losowych literek, czyli służy do konkatenacji kolejno wylosowanych literek

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * words.length);
    randomCharacter1 = randomCharacter1 + words[randomNumber];
}

console.log(randomCharacter1);

// 2nd method
const tabWord = [];

for (let i = 0; i < 5; i++) {
    let word = prompt("Enter any word");
    tabWord.push(word);
}

let words2 = tabWord.join();
// console.log(words2);


let randomCharacter2 = "";

for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * words2.length);
    // console.log(randomNumber);
    randomCharacter2 = randomCharacter2 + words2[randomNumber];
}

console.log(randomCharacter2);