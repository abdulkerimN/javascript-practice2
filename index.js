let person = {
    name: "Abdu",
    age: 24,
    country: "saudi",
};

function logData() {
    console.log(
        person.name +
        " is " +
        person.age +
        " years old " +
        "and lives in " +
        person.country
    );
}

logData();


let age = 15

if (age < 6) {
    console.log("free");
} else if (age < 18) {
    console.log("child discount");
} else if (age < 27) {
    console.log("student discount");
} else if (age < 67) {
    console.log("full price");
} else {
    console.log("senior citizen discount");
}