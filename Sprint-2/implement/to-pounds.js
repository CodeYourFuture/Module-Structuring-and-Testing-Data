// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(kilograms) {
    const pounds = kilograms * 2.20462;
    return pounds;
}

const weightInKg1 = 50;
const weightInKg2 = 75;
const weightInKg3 = 100;

const weightInPounds1 = toPounds(weightInKg1);
const weightInPounds2 = toPounds(weightInKg2);
const weightInPounds3 = toPounds(weightInKg3);

console.log(`${weightInKg1} kg is equal to ${weightInPounds1.toFixed(2)} pounds.`);
console.log(`${weightInKg2} kg is equal to ${weightInPounds2.toFixed(2)} pounds.`);
console.log(`${weightInKg3} kg is equal to ${weightInPounds3.toFixed(2)} pounds.`);