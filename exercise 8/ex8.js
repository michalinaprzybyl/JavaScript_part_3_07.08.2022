// Ćwiczenie 8: Napisz program, który pozwoli na wprowadzenie danych do tablicy 3x3.

const tab = [[], [], []];

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        tab[i][j] = parseInt(prompt("Enter any number")); //do wiersza wyznaczonego przez i oraz do kolumny wyznaczonej przez j wstawiamy daną liczbę
    }
}
console.log(tab);