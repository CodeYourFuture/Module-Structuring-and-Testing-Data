// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(amountInPence) {
    // Remove the trailing 'p' from the string and convert to a number
    const penceStringWithoutTrailingP=amountInPence.toString().replace('p', '');
    // Pad the string with leading zeros to ensure it has at least 3 characters
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, '0');
    // Extract the pounds part of the string
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
    // Extract the pence part of the string and pad it with trailing zeros to ensure it has 2 characters
    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, '0');
    // Return the formatted string representing the price in pounds
    return `£${pounds}.${pence}`;
    }
// Example usage:
console.log(toPounds("399p")); // Should output: £3.99
console.log(toPounds("100p")); // Should output: £1.00
console.log(toPounds("50p"));  // Should output: £0.50
console.log(toPounds("999p")); // Should output: £9.99
console.log(toPounds("1234p")); // Should output: £12.34
console.log(toPounds("1p")); // Should output: £0.01
