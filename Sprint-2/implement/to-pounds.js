// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// 〰️ We need to encapsulate this logic into a reusable function called toPounds, which should take a penceString as a parameter and return a formatted pounds-and-pence string. Then, we can test this function with different inputs to ensure it works correctly.

function toPounds(penceString) {
    // Step 1: Remove the trailing "p" from the string
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

    // Step 2: Pad the numeric part to ensure at least 3 digits
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

    // Step 3: Extract the pounds and pence parts
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

    // Step 4: Return the formatted pounds and pence string
    return `£${pounds}.${pence}`;
}


// Testing the function with different inputs
console.log(toPounds("399p")); // Expected output: "£3.99"
console.log(toPounds("50p"));  // Expected output: "£0.50"
console.log(toPounds("7p"));   // Expected output: "£0.07"
console.log(toPounds("1000p")); // Expected output: "£10.00"
console.log(toPounds("12345p")); // Expected output: "£123.45"