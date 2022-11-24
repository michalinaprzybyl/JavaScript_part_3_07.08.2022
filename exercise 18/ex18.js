// Ćwiczenie 18: Utwórz obiekt, przedstawiający pracownika firmy.
// a. Pracownik firmy posiada podstawowe dane takie jak: imię, nazwisko, numer telefonu, data urodzenia, pensja, stanowisko i dział.
// b. Pracownik posiada metodę, która pozwala na wyświetlanie w konsoli wizytówki, która zawiera: imię, nazwisko, dział i numer telefonu.

const employee = {
    name: "Jan",
    surname: "Kowalski",
    telephone: "+42 123 456 789",
    dateOfBirth: "01.01.1999",
    salary: "8 000 PLN",
    jobPosition: "developer",
    department: "IT",
    businessCard: function () {
        console.log(this.name + " " + this.surname + " " + this.department + " " + this.telephone);
    }
};

employee.surname = "Nowak"; //I can change the value of the property surname here
employee.businessCard();