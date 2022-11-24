// Ćwiczenie 11: Napisz funkcję, która będzie sumować elementy w tablicy podanej jako argument.

const arr = [1, 2, 3, 4, 5, 6];

function sumTab(tab) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum = sum + tab[i];
    }
    return sum;
}

console.log(sumTab(arr));