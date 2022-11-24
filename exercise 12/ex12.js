// Ćwiczenie 12: Napisz funkcję, która będzie zwiększać wszystkie elementy w podanej tablicy o 10.

// 1st method
const arr = [1, 2, 4, 5, 6, 8];

arr.forEach((el, i) => (arr[i] = el + 10)); //jako drugi argument funkcja umieści index argumentu, który będziemy analizować

console.log(arr);


// 2nd method
function addToTab(myTab) {
    for (let i = 0; i < myTab.length; i++) {
        myTab[i] = myTab[i] + 10;
    }
}

const tab = [1, 2, 3, 4, 5, 6];

addToTab(tab);
console.log(tab);