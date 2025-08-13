// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
    // Remove the trailing 'p' character from the input string (e.g., "399p" -> "399")
    const penceStringWithoutTrailingP = penceString.substring(
        0,
        penceString.length - 1
    );

    // Pad the string with leading zeros to ensure at least 3 digits (e.g., "5" -> "005")
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

    // Extract the pound part by taking all but the last two digits (e.g., "005" -> "0")
    const pounds = paddedPenceNumberString.substring(
        0,
        paddedPenceNumberString.length - 2
    );

    // Extract the pence part by taking the last two digits and pad with 
    // trailing zeros if needed (e.g., "5" -> "05")
    const pence = paddedPenceNumberString
        .substring(paddedPenceNumberString.length - 2)
        .padEnd(2, "0");

    // Return the formatted string in pounds and pence (e.g., "£0.05")
    return `£${pounds}.${pence}`;
}

// Test cases
console.log(toPounds("399p")); // £3.99
console.log(toPounds("5p"));   // £0.05
console.log(toPounds("50p"));  // £0.50
console.log(toPounds("1234p"));// £12.34
console.log(toPounds("0p"));   // £0.00

