// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(pence) {
    const pounds = pence / 100;
    return `£${pounds.toFixed(2)}`;
}
console.log(toPounds(399)); // £3.99
console.log(toPounds(500)); // £5.00
console.log(toPounds(1234)); // £12.34