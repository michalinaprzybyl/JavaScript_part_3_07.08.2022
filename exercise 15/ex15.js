// Ćwiczenie 15: Napisz funkcje, które zweryfikują czy podana litera jest samogłoską czy spółgłoską. Wykorzystaj metody do policzenia ile samogłosek i ile spółgłosek jest w podanym przez użytkownika tekście.

function isVowel(letter) {
    const vowels = ["a", "e", "i", "o", "u", "y"];
    return vowels.includes(letter);
};

function isConsonant(letter) {
    if (isVowel(letter) === false) {
        return true;
    } else {
        return false;
    }
};

function sum(text) {
    const tab = [];
    let sumOfVowel = 0;
    let sumOfConsonant = 0;
    for (let i = 0; i < text.length; i++) {
        if (isVowel(text[i]) === true) {
            sumOfVowel = sumOfVowel + 1;
        } else if (isConsonant(text[i] === true)) {
            sumOfConsonant = sumOfConsonant + 1;
        }
    }
    tab.push(sumOfVowel);
    tab.push(sumOfConsonant);
    return tab;
}

let word = prompt("Enter any word");

// 1st method
console.log(sum(word));

// 2nd method
const res = sum(word);
console.log("Vowels: " + res[0]);
console.log("Consonants: " + res[1]);