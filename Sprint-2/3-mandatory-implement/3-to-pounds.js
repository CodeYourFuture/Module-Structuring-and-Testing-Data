// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


// REUSABLE FUNCTION SOLUTION:

function toPounds(penceString) {
    // Remove the trailing 'p' character
    const penceStringWithoutTrailingPound = penceString.substring(
        0,
        penceString.length - 1
    );

    // Pad with leading zeros to ensure at least 3 characters
    const paddedPenceNumberString = penceStringWithoutTrailingPound.padStart(3, "0");

    // Extract pounds (all except last 2 digits)
    const pounds = paddedPenceNumberString.substring(
        0,
        paddedPenceNumberString.length - 2
    );

    // Extract pence (last 2 digits) and ensure it's 2 digits
    const pence = paddedPenceNumberString
        .substring(paddedPenceNumberString.length - 2)
        .padEnd(2, "0");

    // Return the formatted string
    return `£${pounds}.${pence}`;
}

// TEST THE FUNCTION:

console.log(toPounds("399p"));    // £3.99
console.log(toPounds("99p"));     // £0.99
console.log(toPounds("5p"));      // £0.05
console.log(toPounds("1000p"));   // £10.00
console.log(toPounds("12345p"));  // £123.45
console.log(toPounds("0p"));      // £0.00

