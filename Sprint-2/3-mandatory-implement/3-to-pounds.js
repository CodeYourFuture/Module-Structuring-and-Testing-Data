// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

/**
 * Converts a pence string (e.g., "399p") into a formatted pound string (e.g., "£3.99")
 * @param {string} penceString - The input string ending in 'p'
 */
function toPounds(penceString) {
    // 1. Remove the trailing 'p'
    const penceStringWithoutTrailingP = penceString.substring(
        0,
        penceString.length - 1
    );

    // 2. Pad with leading zeros to ensure at least 3 characters (e.g., "5p" -> "005")
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

    // 3. Extract the pounds (everything except the last two digits)
    const pounds = paddedPenceNumberString.substring(
        0,
        paddedPenceNumberString.length - 2
    );

    // 4. Extract the pence (the last two digits)
    const pence = paddedPenceNumberString
        .substring(paddedPenceNumberString.length - 2)
        .padEnd(2, "0");

    // 5. Return the formatted string
    return `£${pounds}.${pence}`;
}

// --- Testing the function with different inputs ---

console.log(toPounds("399p"));  // Expected: £3.99
console.log(toPounds("50p"));   // Expected: £0.50
console.log(toPounds("1250p")); // Expected: £12.50
console.log(toPounds("8p"));    // Expected: £0.08
console.log(toPounds("1002p")); // Expected: £10.02