// Ćwiczenie 4: Napisz program, który znajdzie drugi największy element w tablicy 10 liczb podanych przez użytkownika. 

const tab = [];

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Enter any number"));
    tab.push(number);
}

let max = -99999;

for (let elem of tab) { // deklaracja zmiennej, która będzie reprezentacją kolejnych elementów w tablicy
    if (elem > max) {
        max = elem;
    }
}

for (let idx in tab) { //max element zostanie zamieniony na -1 
    if (tab[idx] === max) {
        tab[idx] = -1;
    }
}

max = -99999;

for (let elem of tab) { // ponownie szukam największego elementu tablicy
    if (elem > max) {
        max = elem;
    }
}

console.log(max);