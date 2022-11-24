// Ćwiczenie 9: Napisz program, który znajdzie minimalny element tablicy 3x3.

const tab = [[3, 4, 5], [8, 4, 1], [0, 3, 5]];
let min = 999999999;

for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length; j++) {
        if (tab[i][j] < min) {
            min = tab[i][j];
        }
    }
}
console.log(min);