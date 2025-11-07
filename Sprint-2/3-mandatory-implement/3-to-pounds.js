// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

/**
let penceString = "399p";

let penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

let paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
let pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

let pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);
*/

// Function to convert a pence string (like "399p") to pounds
function toPounds(penceString) {
    // Remove the trailing 'p'
    let penceStringWithoutTrailingP = penceString.substring(
        0,
        penceString.length - 1
    );

    // Pad the string to ensure at least 3 digits
    let paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

    // Extract pounds
    let pounds = paddedPenceNumberString.substring(
        0,
        paddedPenceNumberString.length - 2
    );

    // Extract pence
    let pence = paddedPenceNumberString
        .substring(paddedPenceNumberString.length - 2)
        .padEnd(2, "0");

    return `£${pounds}.${pence}`;
}

// Example usage:
console.log(toPounds("399p")); // Output: £3.99
console.log(toPounds("5p"));   // Output: £0.05
console.log(toPounds("1234p")); // Output: £12.34
console.log(toPounds("50p"));   // Output: £0.50

