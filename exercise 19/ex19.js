// Ćwiczenie 19: Utwórz klasę człowiek. Niech klasa zawiera pola imię, nazwisko, wiek i miejsce zamieszkania. Do tej klasy dopisz metodę, która będzie wyświetlać szczegóły użytkownika.

class Human {
    constructor(aName, aSurname, anAge, anAddress) {
        this.name = aName;
        this.surname = aSurname;
        this.age = anAge;
        this.address = anAddress;
    }

    showDetails() {
        console.log(this.name + " " + this.surname + " " + this.age + " " + this.address);
    }
}

const myHuman = new Human("Michael", "Jackson", 33, "Los Angeles");
console.log(myHuman.address);
myHuman.showDetails();