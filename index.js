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

// loops and arrays
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}

//push, pop shift and unshift
// push() adds an element to the end of an array
// pop() removes the last element from an array
// shift() removes the first element from an array
// unshift() adds an element to the beginning of an array
let bigCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
bigCountries.unshift("China");
bigCountries.push("Pakistan");
bigCountries.shift();
console.log(bigCountries);