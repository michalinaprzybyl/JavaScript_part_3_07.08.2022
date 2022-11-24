// Ćwiczenie 7: Napisz program sortujący tablicę rosnąco i malejąco (Bubble sort).

const tab = [6, 4, 3, 2, 9, 0];

// a. If we want to sort the array in ascending order

for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - 1; j++) {
        if (tab[j] > tab[j + 1]) {
            let tmp = tab[j];   // swap, czyli zamiana dwóch elem. przy wykorzystaniu dodatkowej zmiennej
            tab[j] = tab[j + 1];
            tab[j + 1] = tmp;
        }
    }
}

console.log(tab);

// b. If we want to sort the array in descending order

for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - 1; j++) {
        if (tab[j] < tab[j + 1]) {
            let tmp = tab[j];
            tab[j] = tab[j + 1];
            tab[j + 1] = tmp;
        }
    }
}

console.log(tab);